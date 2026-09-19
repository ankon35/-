import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#022c22] text-[#ecfdf5] pt-16 pb-12 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/40">
          
          {/* Brand & Mission (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/Logo.jpg"
                alt="Aurora Café & Bistro"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#10b981]/50"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Aurora
                </span>
                <span className="text-[11px] font-semibold tracking-widest text-[#34d399] uppercase">
                  Café & Bistro • Khulna
                </span>
              </div>
            </div>

            <p className="text-sm font-serif italic text-emerald-200/90">
              "{CAFE_INFO.tagline}"
            </p>

            <p className="text-xs text-emerald-200/70 max-w-sm leading-relaxed">
              {CAFE_INFO.subTagline}. Crafting artisanal coffees, signature toasted paninis, and refreshing frappes in a welcoming ambiance in Khulna.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com/auroracafeandbistro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#059669] flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/auroracafeandbistro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-[#059669] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-emerald-300 font-medium">
                Join our 21K+ community
              </span>
            </div>
          </div>

          {/* Row-wise: Explore (Left) and Visit & Connect (Right) - 7 cols on desktop */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:gap-10">
            
            {/* Left Column: Explore */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#34d399]">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100/80">
                <li>
                  <a href="#ambiance" className="hover:text-white transition-colors">Ambiance & Diary</a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-white transition-colors">Bistro Menu</a>
                </li>
                <li>
                  <a href="#story" className="hover:text-white transition-colors">Our Khulna Story</a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">Location & Hours</a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors">Guest Reviews</a>
                </li>
              </ul>
            </div>

            {/* Right Column: Visit & Connect */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#34d399]">
                Visit & Connect
              </h4>
              <div className="space-y-2 text-xs text-emerald-100/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#34d399] shrink-0 mt-0.5" />
                  <span>Full Market, Khulna</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#34d399] shrink-0" />
                  <span>Daily: 11 AM – 11 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#34d399] shrink-0" />
                  <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-[#34d399] font-mono font-bold">
                    {CAFE_INFO.phone}
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-[10px] sm:text-[11px] text-emerald-200/80">
                  💡 <strong>Self Service:</strong> Order at the counter, then take your seat.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <p>© {new Date().getFullYear()} Aurora Café & Bistro. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#10b981] fill-[#10b981]" /> for the coffee lovers of Khulna
          </p>
        </div>

      </div>
    </footer>
  );
};
