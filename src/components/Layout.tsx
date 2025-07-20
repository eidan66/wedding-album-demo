// Uses APP_CONFIG for event branding and customization
import React, { useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Camera, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";
import { ShareFAB } from "./ui/ShareFAB";
import { APP_CONFIG } from "@/config";

interface LayoutProps {
  children?: React.ReactNode; // Make children optional
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [showDemoBanner] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <div className="w-full bg-emerald-600 text-white text-center py-3 px-4 flex flex-col md:flex-row items-center justify-center gap-4 z-40 relative">
          <span className="font-semibold">מצב הדגמה:</span>
          <span>התמונות והסרטונים נשמרים רק בדפדפן שלך. משתמשים אחרים לא יראו את הזכרונות שלך.</span>
          <a
            href="https://wa.me/972505877179?text=%D7%94%D7%99%D7%99!%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%A2%D7%91%D7%95%D7%A8%20%D7%90%D7%AA%D7%A8%20%D7%94%D7%A2%D7%9C%D7%90%D7%AA%20%D7%94%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA%20%D7%9C%D7%97%D7%AA%D7%95%D7%A0%D7%94%20%D7%91%D7%9C%D7%99%D7%99%D7%91!%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow transition-colors text-base"
            style={{ direction: 'rtl' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.987c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.876 11.876 0 0 0 5.683 1.447h.005c6.555 0 11.892-5.335 11.895-11.892a11.82 11.82 0 0 0-3.484-8.412"/></svg>
            רוצים אתר כזה? דברו איתי בוואטסאפ!
          </a>
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