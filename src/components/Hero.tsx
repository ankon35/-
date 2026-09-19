import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Coffee, Utensils, Sparkles, MapPin, Phone, Star, Clock, ArrowRight } from 'lucide-react';

export interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#faf8f5] via-[#f5f8f6] to-[#faf8f5]">
      
      {/* Decorative subtle ambient glows inspired by the Aurora emerald signboard */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#10b981]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#15803d]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & Headlines */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Top pill badge - clean single-line on mobile */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#e8f0eb] border border-[#c8dcce] text-xs font-semibold text-[#173829] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] shrink-0" />
              <span className="whitespace-nowrap">Full Market, Khulna</span>
              <span className="text-[#9ab3a3] hidden sm:inline">•</span>
              <span className="text-[#15803d] hidden sm:inline whitespace-nowrap">Where taste meets ambiance ☕️</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#173829] leading-[1.15] sm:leading-[1.12] tracking-tight font-semibold">
              More than food, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#15803d]">it's an experience </span>
              to remember.
            </h1>

            {/* Description / Subtitle - concise on mobile */}
            <p className="text-sm sm:text-lg text-[#4a5a51] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <span className="sm:hidden">
                Artisan coffee, toasted paninis & tranquil aesthetic ambiance in Khulna.
              </span>
              <span className="hidden sm:inline">
                Step into Aurora Café & Bistro — Khulna's cherished sanctuary for freshly roasted specialty coffees, 
                crisp golden grill-pressed paninis, and soothing aesthetic ambiance designed for conversation and peace.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1 sm:pt-2">
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-full bg-[#15803d] hover:bg-[#166534] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Bistro Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-reserve-table-btn"
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#f3f7f4] text-[#173829] border border-[#c8dcce] text-sm font-semibold shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Social Proof Bar - compact on mobile */}
            <div className="pt-3 sm:pt-4 border-t border-[#e2ece5] flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#526359]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#173829]">4.9</span>
                <span className="hidden sm:inline">/ 5.0 (1,200+ Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#15803d]">21,000+</span>
                <span className="sm:hidden">Patrons</span>
                <span className="hidden sm:inline">Facebook Community</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#15803d]" />
                <span className="font-semibold text-[#173829] hidden sm:inline">Open Daily:</span>
                <span>11 AM - 11 PM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Featuring Assets Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Focal Card - Image 1 (Fern Latte & Panini Platter) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/assets/Image 1.jpg"
                  alt="Aurora Signature Fern Latte and Crispy Grilled Panini"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#86efac] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Signature Combo</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Artisan Fern Latte & Smoked Panini
                  </h3>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    Served hot on our custom tray with secret savory dipping sauce.
                  </p>
                </div>
              </div>

              {/* Floating Accent Card 1: Official Logo Signboard */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-[#d8e6df] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#15803d]">
                  <img src="/assets/Logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="pr-3">
                  <p className="text-[11px] font-bold text-[#173829]">Aurora Café & Bistro</p>
                  <p className="text-[10px] text-[#15803d] font-semibold">Khulna, Full Market</p>
                </div>
              </div>

              {/* Floating Accent Card 2: Image 3 (Dream Choco / Frost Collection) */}
              <div className="absolute -bottom-6 -right-6 w-48 sm:w-52 bg-white p-2.5 rounded-2xl shadow-xl border border-[#d8e6df] hidden sm:block">
                <div className="h-28 rounded-xl overflow-hidden mb-2 relative">
                  <img 
                    src="/assets/Image 3.jpg" 
                    alt="Aurora Frost Collection" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#15803d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                    Take Jar Home!
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#173829]">Dream Choco Frost</p>
                    <p className="text-[10px] text-gray-500">Chilled. Creamy. Irresistible.</p>
                  </div>
                  <span className="text-xs font-bold text-[#15803d]">৳210</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
