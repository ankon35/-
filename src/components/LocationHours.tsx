import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Clock, Phone, Mail, Navigation, Wifi, Check, Copy } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export const LocationHours: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(CAFE_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0eb] text-xs font-semibold text-[#15803d] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Khulna</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#173829] font-bold">
            Location & Operating Hours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#526359]">
            Centrally located in Full Market with a tranquil atmosphere, air conditioning, and high-speed Wi-Fi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#e2ede5] shadow-xs">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#16a34a] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#15803d]">Currently Welcoming Guests</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#173829]">
                Aurora Café & Bistro
              </h3>
              <p className="text-sm text-[#526359] mt-1">
                Full Market, Khulna, Bangladesh
              </p>
            </div>

            {/* Hours list */}
            <div className="space-y-3 pt-4 border-t border-[#f0f4f1]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#173829]">
                <Clock className="w-4 h-4 text-[#15803d]" />
                <span>Weekly Schedule</span>
              </div>
              
              <div className="space-y-2 text-xs">
                {CAFE_INFO.openingHours.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#f4f7f5] last:border-0">
                    <span className="font-medium text-[#2d4a3e]">{item.day}</span>
                    <span className="font-semibold text-[#173829] bg-[#eef5f1] px-2 py-0.5 rounded">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="space-y-3 pt-4 border-t border-[#f0f4f1]">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#f4f8f5] border border-[#d8e6df]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#15803d] text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-semibold uppercase">Direct Telephone</div>
                    <a href={`tel:${CAFE_INFO.phone}`} className="text-sm font-bold text-[#173829] hover:text-[#15803d]">
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhoneNumber}
                  className="p-2 rounded-xl text-gray-500 hover:text-[#15803d] hover:bg-white transition-all text-xs"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Amenities Badge Bar */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#2d4a3e]">
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#faf8f5] border border-[#ece7de]">
                  <Wifi className="w-3.5 h-3.5 text-[#15803d]" />
                  <span>Free High-Speed Wi-Fi</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#faf8f5] border border-[#ece7de]">
                  <Navigation className="w-3.5 h-3.5 text-[#15803d]" />
                  <span>Full Market Parking</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center justify-between pt-4 border-t border-[#f0f4f1]">
              <span className="text-xs text-gray-500">Connect with us:</span>
              <div className="flex items-center gap-2">
                <a
                  href={CAFE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#e8f0eb] hover:bg-[#15803d] text-[#173829] hover:text-white transition-colors"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#e8f0eb] hover:bg-[#15803d] text-[#173829] hover:text-white transition-colors"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-[#e2ede5] shadow-xs bg-white">
            
            {/* Map Canvas Frame */}
            <div className="relative flex-1 min-h-[340px] bg-[#eef3f0] overflow-hidden flex items-center justify-center p-6">
              
              {/* Stylized Map Grid & Roads simulation for Full Market Khulna */}
              <div className="absolute inset-0 opacity-40">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(#15803d 0.75px, transparent 0.75px), radial-gradient(#15803d 0.75px, #eef3f0 0.75px)`,
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 15px'
                }} />
                {/* Simulated Road Crossings */}
                <div className="absolute top-1/2 left-0 right-0 h-6 bg-[#d8e6df] -translate-y-1/2 transform -rotate-3" />
                <div className="absolute top-0 bottom-0 left-1/2 w-8 bg-[#d8e6df] -translate-x-1/2 transform rotate-12" />
                <div className="absolute top-1/3 left-0 right-0 h-4 bg-[#c2d7cb] transform rotate-4" />
              </div>

              {/* Landmark Pin Card */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-[#c8dcce] max-w-sm text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#15803d] mx-auto mb-2 shadow">
                  <img src="/assets/Logo.jpg" alt="Aurora Logo" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#173829]">Aurora Café & Bistro</h4>
                <p className="text-xs text-[#526359] mt-0.5">Full Market, Khulna, Bangladesh</p>
                <div className="inline-flex items-center gap-1 mt-2 text-[11px] font-bold text-[#15803d] bg-[#e8f0eb] px-2.5 py-1 rounded-full">
                  <MapPin className="w-3 h-3" />
                  <span>Easy Access & Landmark Location</span>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Aurora+Cafe+Bistro+Full+Market+Khulna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#15803d] text-white text-xs font-semibold hover:bg-[#166534] shadow-xs transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom bar */}
            <div className="p-4 bg-[#faf8f5] border-t border-[#e2ede5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#526359]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#15803d]" />
                <span>Full Market commercial zone · Khulna 9100</span>
              </div>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="font-bold text-[#15803d] hover:underline"
              >
                Need help finding us? Call 01303-886666
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
