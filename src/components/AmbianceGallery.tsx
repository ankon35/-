import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, X, MapPin } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  caption: string;
  format: 'Landscape' | 'Portrait' | 'Square';
  gridClass: string;
}

export const AmbianceGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'corner-reading',
      src: '/assets/Image 4.jpg',
      title: 'The White Brick Reading Corner',
      category: 'Ambiance',
      caption: 'Exposed white brick, warm industrial track lighting, handcrafted wooden tables, and playful art — ideal for study sessions and quiet contemplation.',
      format: 'Landscape',
      gridClass: 'col-span-2 aspect-[16/10] sm:col-span-2 lg:col-span-2 sm:h-80'
    },
    {
      id: 'panini-dish',
      src: '/assets/Image 1.jpg',
      title: 'Artisan Grilled Panini & Fern Latte',
      category: 'Signature Plate',
      caption: 'Freshly pressed savory panini served hot with seasoned dip and barista latte art on black presentation slate.',
      format: 'Portrait',
      gridClass: 'col-span-1 aspect-[3/4] sm:col-span-1 lg:col-span-1 sm:h-80'
    },
    {
      id: 'frappe-sip',
      src: '/assets/Image 3.jpg',
      title: 'Pistachio Cloud Frappé Nook',
      category: 'Iced Barista',
      caption: 'A refreshing iced specialty beverage topped with light green whipped cream, sitting beside your favorite novel.',
      format: 'Portrait',
      gridClass: 'col-span-1 aspect-[3/4] sm:col-span-1 lg:col-span-1 sm:h-80'
    },
    {
      id: 'team-counter',
      src: '/assets/Image 2.jpg',
      title: 'The Aurora Barista Counter',
      category: 'Hospitality',
      caption: 'Our welcoming team behind the celebratory balloon counter with the espresso machine and dessert display.',
      format: 'Landscape',
      gridClass: 'col-span-2 aspect-[16/9] sm:col-span-1 lg:col-span-1 sm:h-80'
    },
    {
      id: 'specialty-plate',
      src: '/assets/Image 5.jpg',
      title: 'Bistro Gourmet Delicacy',
      category: 'Culinary Craft',
      caption: 'Carefully prepared dishes created by our culinary team to delight every palate in Khulna.',
      format: 'Square',
      gridClass: 'col-span-1 aspect-square sm:col-span-1 lg:col-span-1 sm:h-80'
    },
    {
      id: 'sweet-treat',
      src: '/assets/Image 6.jpg',
      title: 'Artisan Bistro Confection',
      category: 'Sweets & Bakery',
      caption: 'Sweet treats and freshly finished bites that provide the perfect ending to your café visit.',
      format: 'Square',
      gridClass: 'col-span-1 aspect-square sm:col-span-1 lg:col-span-1 sm:h-80'
    }
  ];

  return (
    <section id="ambiance" className="py-14 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-xs font-semibold text-[#065f46]">
              <Camera className="w-3.5 h-3.5 text-[#059669]" />
              <span>Aesthetic Moments</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#064e3b]">
              Atmosphere & Visual Diary
            </h2>
            <p className="text-xs sm:text-base text-[#1f3f33]/70">
              <span className="sm:hidden">Explore our sanctuary: cozy reading corners, barista craft & gourmet dishes.</span>
              <span className="hidden sm:inline">A glimpse inside our Khulna sanctuary where modern Scandinavian simplicity meets cozy warm bistro aesthetics.</span>
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#059669]">
            <MapPin className="w-4 h-4" />
            <span>Full Market, Khulna</span>
          </div>
        </div>

        {/* Dynamic Multi-Format Gallery Grid: Landscape, Portrait, and Square */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`group relative rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-900/10 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 ${item.gridClass}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/90 via-[#064e3b]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Top Category & Format Badges */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5">
                <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#064e3b] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  {item.category}
                </span>
                <span className="sm:hidden px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-white text-[8px] font-semibold uppercase tracking-wider">
                  {item.format}
                </span>
              </div>

              {/* Top Right Zoom Icon */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-xs text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 text-white space-y-0.5 sm:space-y-1 transform sm:translate-y-1 sm:group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-xs sm:text-lg font-bold leading-snug truncate sm:whitespace-normal">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-emerald-100/80 line-clamp-1 sm:line-clamp-2 leading-tight sm:leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
              <div className="lg:col-span-8 bg-black flex items-center justify-center">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#f8faf7]">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] text-xs font-bold text-[#059669] uppercase tracking-wider">
                    {activePhoto.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#064e3b]">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-[#1f3f33]/80 leading-relaxed">
                    {activePhoto.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-900/10 space-y-2 text-xs text-emerald-800/70">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#059669]" />
                    <span>Captured at Aurora Café & Bistro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#059669]" />
                    <span>Full Market, Khulna, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
