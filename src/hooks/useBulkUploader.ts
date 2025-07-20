// Uses APP_CONFIG for easy customization
import { useState } from 'react';
import type { WeddingMediaItem } from '../Entities/WeddingMedia';
import { saveMediaItem } from '@/lib/indexedDbMedia';

export type UploadStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface FileUploadState {
  file: File;
  status: UploadStatus;
  progress: number;
  error?: string;
  mediaItem?: WeddingMediaItem;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function generateId() {
  return Math.random().toString(36).substr(2, 9) + Date.now();
}

export const useBulkUploader = () => {
  const [uploads, setUploads] = useState<FileUploadState[]>([]);

  const uploadFiles = async (files: File[], uploaderName: string, caption: string) => {
    setUploads(files.map(file => ({ file, status: 'pending' as UploadStatus, progress: 0 })));

    for (const [idx, file] of files.entries()) {
      setUploads(prev =>
        prev.map((u, i) =>
          i === idx ? { ...u, status: 'uploading' as UploadStatus, progress: 0 } : u
        )
      );
      try {
        // Convert file to base64
        const base64 = await fileToBase64(file);
        const now = new Date().toISOString();
        const mediaType = file.type.startsWith('image/') ? 'photo' : 'video';
        const newMedia: WeddingMediaItem = {
          id: generateId(),
          title: caption || '',
          media_url: base64,
          media_type: mediaType as 'photo' | 'video',
          uploader_name: uploaderName || 'אורח אנונימי',
          created_date: now,
        };
        // Save to IndexedDB
        await saveMediaItem(newMedia);
        setUploads(prev =>
          prev.map((u, i) =>
            i === idx ? { ...u, status: 'success' as UploadStatus, progress: 100, mediaItem: newMedia } : u
          )
        );
      } catch (err) {
        setUploads(prev =>
          prev.map((u, i) =>
            i === idx ? { ...u, status: 'error' as UploadStatus, error: (err as Error).message || 'An error occurred' } : u
          )
        );
      }
    }
  };

  const cancelUploads = () => {
    // No-op for IndexedDB, but kept for API compatibility
  };

  return { uploads, uploadFiles, cancelUploads };
};