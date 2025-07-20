# 💍 Wedding Album — React + TypeScript + Vite

A mobile-first web app built with React, Vite, and Styled Components that allows wedding guests to upload their photos and videos directly to a live album via QR code scanning.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite** for super fast bundling
- **Styled Components** for scoped styling and themes
- **Custom Modal System** for media confirmation
- **File Upload** supporting images and videos (MP4, WebM, MOV)
- **RTL Support** with full Hebrew layout
- **Mobile-first responsive design**

---

## 📁 Folder Structure

```
.
├── public/                # Static assets
├── src/
│   ├── assets/           # Images, SVGs
│   ├── components/       # Hero, Modal, PhotoGrid etc.
│   ├── styles/           # Global styles + theme
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── index.html
├── vite.config.ts
└── tsconfig.app.json
```

---

## 🚀 Getting Started

```bash
# Install dependencies
yarn install

# Run locally
yarn dev

# Build for production
yarn build
```

---

## 🌈 Theming

We support a single theme called `sageTheme` (inspired by cream & sage tones).

---

## 🖼️ Upload Flow

1. User clicks on “שתפו תמונות”
2. Can choose multiple files (images or videos)
3. Modal shows previews with "X" to remove individual items
4. After confirmation, a heart-loader animates while uploading
5. Items are added to the photo grid below

---

## ✅ To Do

- [ ] Backend integration for file uploads
- [ ] Real-time photo gallery updates
- [ ] Admin moderation panel
- [ ] Download full album feature

---

## 🧪 Demo Mode (LocalStorage)

This project is currently in **Demo Mode**:
- All uploaded photos and videos are stored **only in your browser** (localStorage).
- Each user sees only their own uploads.
- No backend or server is required for the demo.

### Clearing the Gallery
To clear all uploaded media for your browser:
- Click the "נקה גלריה" (Clear Gallery) button above the gallery.
- Or, clear your browser's localStorage for this site.

---

## 📝 Using as a Template

Want to use this for another event?
- Clone or fork this repo.
- Update the branding, logo, and event details in `src/components/Layout.tsx` and `public/` assets.
- (Optional) Add backend integration for shared galleries.
- Deploy to Vercel, Netlify, or your favorite static host.

---

## 📄 License

Copyright (c) 2025 Idan Levian

All rights reserved.

This software and its source code are the exclusive property of Idan Levian.
You may not use, copy, modify, distribute, or host this software or any derivative works without explicit written permission and a valid commercial license.

For licensing inquiries, please contact: [your email or website]

---

## ❤️ Created by [Idan Levian](https://idanlevian.com)
