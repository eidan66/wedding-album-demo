import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-50 via-white to-gold-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 rounded-3xl shadow-xl p-10 flex flex-col items-center border border-gold-200"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-gold-100 to-emerald-100 rounded-full flex items-center justify-center mb-6">
          <Heart className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">הדף לא נמצא</h2>
        <p className="text-gray-600 mb-6 text-center min-w-xl">
          עמוד זה לא קיים או הועבר.
        </p>
        <Link to={createPageUrl('Gallery')}>
          <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-full shadow-lg">
            חזרה לגלריה
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 