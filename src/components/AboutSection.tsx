import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Coffee, Heart, Users, Sparkles, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Section Header: Heading appears first before images on mobile */}
        <div className="lg:hidden mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0eb] text-xs font-semibold text-[#15803d]">
            <Heart className="w-3.5 h-3.5" />
            <span>Our Story & Craft</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl text-[#173829] font-bold leading-tight">
            A Quiet Haven in Full Market, Khulna
          </h2>

          <p className="text-xs sm:text-sm text-[#4a5a51] leading-relaxed">
            Aurora Café & Bistro was created as a sanctuary where culinary craft and soothing green ambiance meet in the heart of Khulna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white h-56 sm:h-64">
                  <img
                    src="assets/Image 5.jpg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/assets/Image 5.jpg')) target.src = '/assets/Image 5.jpg';
                    }}
                    alt="Cozy Ambiance at Aurora"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-[#e8f0eb] rounded-2xl border border-[#c8dcce]">
                  <div className="text-[#15803d] font-bold text-3xl font-display">21,000+</div>
                  <div className="text-xs font-semibold text-[#173829] mt-0.5">Loyal Facebook Community</div>
                  <p className="text-[11px] text-[#526359] mt-1">Patrons from all across Khulna making Aurora their home.</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-5 bg-[#173829] text-white rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-[#86efac] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Philosophy</span>
                  </div>
                  <p className="font-display text-lg font-semibold leading-snug">
                    "Where taste meets ambiance."
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white h-56 sm:h-64">
                  <img
                    src="assets/Image 2.jpg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/assets/Image 2.jpg')) target.src = '/assets/Image 2.jpg';
                    }}
                    alt="Chef specialties at Aurora"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>

            {/* Central Round Logo Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white hidden sm:block">
              <img 
                src="assets/Logo.jpg" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/assets/Logo.jpg')) target.src = '/assets/Logo.jpg';
                }}
                alt="Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Narrative Story (Desktop Header + Pillars) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Desktop-only Header */}
            <div className="hidden lg:block space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0eb] text-xs font-semibold text-[#15803d]">
                <Heart className="w-3.5 h-3.5" />
                <span>Our Story & Craft</span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl text-[#173829] font-bold leading-tight">
                A Quiet Haven in Full Market, Khulna
              </h2>

              <p className="text-base text-[#4a5a51] leading-relaxed">
                Aurora Café & Bistro was born from a singular passion: creating a space where culinary excellence and relaxing ambiance intertwine. In the bustling energy of Khulna, we designed a haven of warm tones, green botanical serenity, and soothing acoustics.
              </p>

              <p className="text-base text-[#4a5a51] leading-relaxed">
                Whether you are here for an unhurried morning cup with handcrafted latte art, an afternoon meeting over our savory toasted paninis, or a late evening sweet dessert, our kitchen treats every plate with reverence.
              </p>
            </div>

            {/* Four Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {CAFE_INFO.features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#e8f0eb] shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-[#173829]">{feat.title}</h4>
                    <p className="text-[11px] text-[#526359] mt-0.5 leading-snug">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location highlight */}
            <div className="flex items-center gap-3 p-4 bg-[#eef5f1] rounded-2xl border border-[#c8dcce]">
              <div className="p-2.5 bg-white rounded-xl shadow-2xs text-[#15803d]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#173829]">Find Us in Khulna</p>
                <p className="text-xs text-[#526359]">Located at Full Market, Khulna — easily accessible with ample parking & seating.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
