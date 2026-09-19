import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AmbianceGallery } from './components/AmbianceGallery';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { LocationHours } from './components/LocationHours';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CAFE_INFO } from './data/cafeData';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const cleanPhone = CAFE_INFO.phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent("Hello Aurora Café & Bistro! I'd like to ask about the menu and orders.");
    window.open(`https://wa.me/88${cleanPhone}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#242924] selection:bg-[#15803d] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* Ambiance Gallery featuring all user asset images */}
        <AmbianceGallery />

        {/* Menu Section - Editorial Bistro Board without Image Clutter */}
        <MenuSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Our Story & Craft Section */}
        <AboutSection />

        {/* Location & Opening Hours */}
        <LocationHours />

        {/* Guest Reviews & Facebook Community */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Floating Bottom Action Bar for Mobile View */}
      <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden flex items-center justify-between gap-2 bg-[#173829]/95 backdrop-blur-md text-white p-2.5 rounded-2xl shadow-xl border border-emerald-500/20">
        <button
          onClick={() => setIsReservationOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#15803d] rounded-xl text-xs font-bold text-white shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Table</span>
        </button>

        <a
          href={`tel:${CAFE_INFO.phone}`}
          className="p-2 rounded-xl bg-white/10 text-[#86efac]"
          aria-label="Call Aurora Café"
        >
          <Phone className="w-4 h-4" />
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-1.5 py-2 px-3 bg-white text-[#173829] rounded-xl text-xs font-bold shadow-xs cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#15803d]" />
          <span>WhatsApp</span>
        </button>
      </div>

    </div>
  );
};

export default App;
