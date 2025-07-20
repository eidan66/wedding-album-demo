// Uses APP_CONFIG for event branding and customization
import React, { useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Camera, Upload, X } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
import { ShareFAB } from "./ui/ShareFAB";
import { APP_CONFIG } from "@/config";

interface LayoutProps {
  children?: React.ReactNode; // Make children optional
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [showDemoBanner, setShowDemoBanner] = React.useState(() => {
    return sessionStorage.getItem('hideDemoBanner') !== 'true';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCloseBanner = () => {
    setShowDemoBanner(false);
    sessionStorage.setItem('hideDemoBanner', 'true');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-gold-50" dir="rtl">
      {/* Header */}
      <header className="wedding-gradient border-b border-gold-200 sticky top-0 z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <Link to={createPageUrl("Gallery")} className="flex items-center gap-6 group">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-r from-gold-200 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-6 h-6 text-emerald-600 float-animation" />
              </motion.div>
              <div className="flex-shrink-0 pl-1 mr-1">
                <h1 className="text-xl font-bold from-emerald-700 to-gold-400 bg-clip-text text-emerald-700 text-center">
                  {APP_CONFIG.eventName}
                </h1>
                <p className="text-sm text-gray-600 font-medium text-center">{APP_CONFIG.eventSubtitle}</p>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-4 lg:gap-6">
              <Link 
                to={createPageUrl("Gallery")} 
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === createPageUrl("Gallery") 
                    ? 'bg-gold-100 text-emerald-700 shadow-lg' 
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-cream-100'
                }`}
              >
                <Camera className="w-4 h-4" />
                <span className="text-sm md:font-medium">הגלריה</span>
              </Link>
              <Link 
                to={createPageUrl("Upload")}
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === createPageUrl("Upload") 
                    ? 'bg-gold-100 text-emerald-700 shadow-lg' 
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-cream-100'
                }`}
              >
                <Upload className="w-4 h-4" />
                <span className="text-sm md:font-medium">שיתוף זיכרון</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Demo Mode Banner */}
      {showDemoBanner && (
        <div className="w-full bg-emerald-600 text-white text-center py-3 px-4 flex items-center justify-center gap-4 z-40 relative">
          <span className="font-semibold">מצב הדגמה:</span>
          <span>התמונות והסרטונים נשמרים רק בדפדפן שלך. משתמשים אחרים לא יראו את הזכרונות שלך.</span>
          <button onClick={handleCloseBanner} className="ml-2 p-1 rounded-full hover:bg-emerald-700 transition-colors" aria-label="סגור הודעה">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
        <Outlet /> {/* This will render the nested routes */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Share FAB for mobile */}
      {location.pathname !== createPageUrl("Upload") && <ShareFAB />}
    </div>
  );
}