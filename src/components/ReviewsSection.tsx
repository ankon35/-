import React from 'react';
import { REVIEWS } from '../data/cafeData';
import { Star, Quote, ThumbsUp, Sparkles } from 'lucide-react';
import { FacebookIcon } from './SocialIcons';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#f4f8f5]/60 border-t border-[#e2ede5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f0eb] text-xs font-semibold text-[#15803d] mb-3">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>Guest Praise & Community</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#173829] font-bold">
            Loved by 21,000+ in Khulna
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#526359]">
            Read what our patrons share about our specialty roasts, freshly toasted paninis, and soothing ambiance.
          </p>
        </div>

        {/* Mobile: Row-wise Animated Infinite Loop */}
        <div className="relative md:hidden -mx-4 overflow-hidden py-2">
          {/* Edge fade gradients for polished visual presentation */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#f4f8f5] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#f4f8f5] to-transparent z-10" />

          {/* Animated Infinite Loop Track */}
          <div className="animate-marquee flex gap-4 pl-4">
            {[...REVIEWS, ...REVIEWS].map((rev, index) => (
              <div
                key={`${rev.id}-${index}`}
                className="w-[280px] shrink-0 bg-white p-5 rounded-2xl border border-[#e2ede5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Rating stars & Quote */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-4 h-4 text-[#c8dcce]" />
                  </div>

                  <p className="text-xs text-[#3b4740] leading-relaxed italic mb-3 line-clamp-3">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f4f7f5]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#173829] text-white flex items-center justify-center text-[11px] font-bold font-display">
                      {rev.avatarText}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-[#173829] truncate">{rev.author}</h4>
                      <p className="text-[10px] text-gray-400">{rev.date}</p>
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-[#15803d] font-semibold bg-[#eef5f1] px-2 py-0.5 rounded truncate">
                    Loved: {rev.dishLoved}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Reviews Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#e2ede5] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#c8dcce]" />
                </div>

                <p className="text-xs sm:text-sm text-[#3b4740] leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#f4f7f5]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#173829] text-white flex items-center justify-center text-xs font-bold font-display">
                    {rev.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#173829]">{rev.author}</h4>
                    <p className="text-[10px] text-gray-400">{rev.date}</p>
                  </div>
                </div>

                <div className="mt-2 text-[10px] text-[#15803d] font-semibold bg-[#eef5f1] px-2 py-0.5 rounded truncate">
                  Loved: {rev.dishLoved}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Social Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#e2ede5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-[#1877f2]/10 text-[#1877f2] rounded-2xl">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#173829]">Join our official Facebook page</h4>
              <p className="text-xs text-[#526359]">Connect with 21,000+ followers for daily specials, seasonal events, and cafe announcements.</p>
            </div>
          </div>

          <a
            href="https://www.facebook.com/auroracafeandbistro"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 whitespace-nowrap"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Follow on Facebook</span>
          </a>
        </div>

      </div>
    </section>
  );
};
