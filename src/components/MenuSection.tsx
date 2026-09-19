import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_ADDONS, MenuItem, MenuCategoryType, CAFE_INFO } from '../data/cafeData';
import { 
  Coffee, 
  Utensils, 
  Sparkles, 
  Search, 
  Flame, 
  Gift, 
  Wine, 
  Heart,
  ChevronRight,
  Info,
  Phone,
  MessageCircle,
  Check,
  Star,
  Eye,
  X
} from 'lucide-react';

export interface MenuSectionProps {
  onOpenReservation?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('combos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc: string } | null>(null);

  const categories: { id: string; label: string; icon: React.FC<{ className?: string }>; highlight?: string; desc: string }[] = [
    { id: 'combos', label: 'Happy Combos', icon: Gift, highlight: 'Best Value', desc: 'Curated pairings & savings' },
    { id: 'frost', label: 'Frost Collection', icon: Wine, highlight: 'Take Jar Home!', desc: 'Chilled, creamy bottled specialties' },
    { id: 'coffee', label: 'Hot Coffee (Beans)', icon: Coffee, desc: 'Specialty espresso & micro-foam pours' },
    { id: 'iced_coffee', label: 'Iced & Matcha', icon: Coffee, desc: 'Cold espresso, frappes & Japanese matcha' },
    { id: 'burgers_sandwiches', label: 'Burgers & Shawarma', icon: Utensils, desc: 'Grilled chicken paninis, burgers & wraps' },
    { id: 'pasta_meatbox', label: 'Pastas & Meat Boxes', icon: Flame, desc: 'Savory pasta bowls & loaded meat boxes' },
    { id: 'shakes_mojitos', label: 'Shakes, Mojitos & Frappes', icon: Sparkles, desc: 'Thick milkshakes & refreshing mocktails' },
    { id: 'teas_waters', label: 'Specialty Teas & Waters', icon: Coffee, desc: 'Loose leaf teas & alkaline mineral water' },
    { id: 'desserts', label: 'Desserts & Bakery', icon: Heart, desc: 'Fudge brownies, cheesecakes & gelato' },
  ];

  // Authentic culinary highlights that have actual photos in assets
  const signatureHighlights = [
    {
      title: "Artisan Fern Latte & Panini",
      price: "৳230 (Combo 1)",
      category: "Signature Pairing",
      src: "/assets/Image 1.jpg",
      description: "Steamed micro-foam latte art served with golden-pressed chicken grilled panini."
    },
    {
      title: "Aurora Frost Collection",
      price: "From ৳150",
      category: "Bottled Drinks",
      src: "/assets/Image 3.jpg",
      description: "Chilled, creamy bottled delights. You can take all bottle, glass, and jars home!"
    },
    {
      title: "Sizzling Pasta Basta & Blast",
      price: "৳180 - ৳240",
      category: "Bistro Kitchen",
      src: "/assets/Image 5.jpg",
      description: "Freshly tossed pasta with seasoned chicken chunks and aromatic herb sauces."
    },
    {
      title: "Belgian Fudge Brownie & Gelato",
      price: "৳170",
      category: "Bakery & Desserts",
      src: "/assets/Image 6.jpg",
      description: "Warm, fudgy dark chocolate brownie topped with creamy vanilla bean ice cream."
    }
  ];

  const allMatchesCount = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return 0;
    return MENU_ITEMS.filter((item) => 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(query))) ||
      (item.comboIncludes && item.comboIncludes.some(c => c.toLowerCase().includes(query)))
    ).length;
  }, [searchQuery]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(query))) ||
        (item.comboIncludes && item.comboIncludes.some(c => c.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Find other categories that have matches for current search query
  const matchingOtherCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return [];
    return categories
      .filter(c => c.id !== activeCategory)
      .map(c => {
        const count = MENU_ITEMS.filter(item => 
          item.category === c.id && (
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            (item.tags && item.tags.some(t => t.toLowerCase().includes(query))) ||
            (item.comboIncludes && item.comboIncludes.some(ci => ci.toLowerCase().includes(query)))
          )
        ).length;
        return { ...c, matchCount: count };
      })
      .filter(c => c.matchCount > 0);
  }, [searchQuery, activeCategory, categories]);

  const handleWhatsAppInquiry = (itemName?: string) => {
    let msg = `Hello Aurora Café & Bistro! I'm looking at your menu`;
    if (itemName) {
      msg += ` and interested in: ${itemName}. Could you please let me know availability?`;
    } else {
      msg += ` and would like to ask about dine-in / takeaway orders today.`;
    }
    const cleanPhone = CAFE_INFO.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/88${cleanPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-[#faf8f5] border-y border-[#e6ede8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 rounded-full bg-[#e8f0eb] border border-[#c8dcce] text-xs font-bold text-[#15803d] mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">Bistro & Café Menu · Khulna</span>
            <span className="hidden sm:inline">Handcrafted Bistro & Café Menu · Full Market, Khulna</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#173829] font-bold">
            The Aurora Bistro & Café Menu
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#526359] leading-relaxed">
            <span className="sm:hidden">Specialty roasted coffees and fresh savory bistro dishes made upon order.</span>
            <span className="hidden sm:inline">{CAFE_INFO.slogan} — Every beverage and culinary creation is prepared fresh upon order with specialty roasted beans and authentic kitchen recipes.</span>
          </p>

          {/* Quick Direct Inquiries Header Action */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#173829] hover:bg-black text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#86efac]" />
              <span>Call to Order: {CAFE_INFO.phone}</span>
            </a>
            <button
              onClick={() => handleWhatsAppInquiry()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#15803d] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </button>
            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#f0f4f1] text-[#173829] border border-[#d8e6df] text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <span>Reserve Table</span>
              </button>
            )}
          </div>
        </div>

        {/* Real Curated Photo Highlights Strip */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#15803d]">
                Aurora Kitchen & Barista Highlights
              </h3>
              <p className="text-sm text-[#173829] font-semibold">
                Captured fresh from our barista bar & kitchen
              </p>
            </div>
            <span className="text-xs text-[#526359] hidden sm:block">
              Full Market, Khulna
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {signatureHighlights.map((hl, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto({ src: hl.src, title: hl.title, desc: hl.description })}
                className="group relative h-40 sm:h-48 rounded-2xl overflow-hidden cursor-pointer shadow-xs border border-[#e2ede5] bg-gray-100"
              >
                <img
                  src={hl.src}
                  alt={hl.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] font-bold text-[#86efac] uppercase tracking-wider">
                    {hl.category}
                  </span>
                  <p className="text-xs sm:text-sm font-bold truncate">
                    {hl.title}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-gray-200 mt-0.5">
                    <span className="font-semibold text-emerald-300">{hl.price}</span>
                    <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">
                      <Eye className="w-3 h-3" /> View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aurora Frost Collection Signature Perk Callout */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-[#173829] to-[#0f291e] text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-5 border border-[#2d5240]">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#86efac] shrink-0 mt-1 sm:mt-0">
              <Wine className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Aurora FROST COLLECTION
                </span>
                <span className="text-[10px] font-bold bg-[#15803d] text-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Signature Perk
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-2xl leading-relaxed">
                <span className="sm:hidden">
                  Chilled & creamy bottled delights. <strong className="text-white underline decoration-[#86efac]">Take bottle, glass & jar home!</strong>
                </span>
                <span className="hidden sm:inline">
                  Chilled. Creamy. Irresistible. <strong className="text-white underline decoration-[#86efac] underline-offset-2">N.B: You can take all bottle, glass, and jar to home!</strong> Applicable for all Frost Collection flavors.
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setActiveCategory('frost');
              setSearchQuery('');
            }}
            className="whitespace-nowrap px-4 py-2 rounded-full bg-[#15803d] hover:bg-[#16a34a] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs flex items-center gap-1 shrink-0"
          >
            <span>View Frost Drinks</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Search & Category Tabs Navigation */}
        <div className="sticky top-18 z-20 bg-[#faf8f5]/95 backdrop-blur-md py-3.5 mb-8 border-y border-[#e2ede5]">
          <div className="flex flex-col gap-3">
            
            {/* Top Row: Category Meta & Search Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#15803d]">
                  Menu Categories
                </span>
                <span className="text-xs text-gray-300">|</span>
                <span className="text-xs text-[#526359]">
                  {searchQuery 
                    ? `${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'} matching "${searchQuery}"`
                    : categories.find(c => c.id === activeCategory)?.label
                  }
                </span>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search coffee, burger, pasta, frost..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 bg-white border border-[#d8e6df] focus:border-[#15803d] rounded-full text-xs text-[#173829] placeholder-gray-400 focus:outline-none shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold p-1 cursor-pointer"
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills: Row-wise horizontally scrollable */}
            <div className="relative">
              <div 
                className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full flex-nowrap scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  const itemCount = MENU_ITEMS.filter(i => i.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={(e) => {
                        setActiveCategory(cat.id);
                        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                      }}
                      className={`inline-flex items-center shrink-0 whitespace-nowrap gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#15803d] text-white shadow-xs ring-2 ring-[#15803d]/25'
                          : 'bg-white text-[#2d4a3e] border border-[#d8e6df] hover:border-[#15803d] hover:bg-[#f0f6f2]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#15803d]'}`} />
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#e8f0eb] text-[#15803d]'
                      }`}>
                        {itemCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Kitchen Add-Ons Bar */}
        <div className="mb-10 p-4 bg-white rounded-2xl border border-[#d8e6df] shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#173829] block">Available Kitchen Add-Ons</span>
              <span className="text-[11px] text-[#526359]">Customize any burger, sandwich, pasta, or meatbox</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 w-full md:w-auto md:flex md:flex-wrap md:items-center">
            {MENU_ADDONS.map(addon => (
              <div 
                key={addon.id} 
                className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1 rounded-xl bg-[#f4f8f5] border border-[#d5e5db] text-[11px] sm:text-xs text-[#173829]"
              >
                <span className="font-semibold truncate">{addon.name}</span>
                <span className="font-bold text-[#15803d] shrink-0">+৳{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Items Presentation: Editorial Bistro Ledger Layout */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e2ece5] p-6">
            <Utensils className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-base font-medium text-[#173829]">
              No items found matching "{searchQuery}" in {categories.find(c => c.id === activeCategory)?.label}.
            </p>
            {matchingOtherCategories.length > 0 ? (
              <div className="mt-3">
                <p className="text-xs text-[#15803d] font-semibold mb-2">
                  Found matches in other categories:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {matchingOtherCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className="px-3 py-1.5 rounded-full bg-[#e8f0eb] hover:bg-[#15803d] hover:text-white text-[#15803d] text-xs font-semibold cursor-pointer transition-colors"
                    >
                      {cat.label} ({cat.matchCount})
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs text-gray-500 mt-1">
                Try searching for "cappuccino", "brownie", "frost", "burger", or select another category.
              </p>
            )}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => { setActiveCategory('combos'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-full bg-white border border-[#d8e6df] text-[#173829] text-xs font-semibold cursor-pointer hover:bg-gray-50"
              >
                Reset to Happy Combos
              </button>
            </div>
          </div>
        ) : (
          /* Category View & Search Results */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2ede5] shadow-xs">
            <div className="pb-4 mb-6 border-b border-[#e8f0eb] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {(() => {
                  const currentCat = categories.find(c => c.id === activeCategory);
                  const Icon = currentCat?.icon || Utensils;
                  return (
                    <>
                      <div className="w-10 h-10 rounded-xl bg-[#e8f0eb] text-[#15803d] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-2xl font-bold text-[#173829]">
                            {searchQuery ? `Search Results for "${searchQuery}"` : currentCat?.label}
                          </h3>
                          {currentCat?.highlight && !searchQuery && (
                            <span className="text-xs font-bold text-[#15803d] bg-[#e8f0eb] px-2.5 py-0.5 rounded-full border border-[#cbe1d3]">
                              {currentCat.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#526359]">
                          {searchQuery 
                            ? `Showing ${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'} matching in ${currentCat?.label}` 
                            : currentCat?.desc}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-[#15803d] hover:underline font-semibold self-start sm:self-auto cursor-pointer"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* If search query has matches in other categories, suggest them subtly at top of list */}
            {searchQuery && matchingOtherCategories.length > 0 && (
              <div className="mb-6 p-3 rounded-xl bg-[#f4f8f5] border border-[#d8e6df] flex flex-wrap items-center gap-2 text-xs text-[#2d4a3e]">
                <span className="font-semibold text-[#15803d]">Also matched in:</span>
                {matchingOtherCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="px-2.5 py-1 rounded-full bg-white border border-[#cbe1d3] text-[#15803d] hover:bg-[#15803d] hover:text-white font-medium cursor-pointer transition-colors text-[11px]"
                  >
                    {cat.label} ({cat.matchCount})
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
              {filteredItems.map((item) => (
                <MenuBistroRow 
                  key={item.id} 
                  item={item} 
                  onInquire={() => handleWhatsAppInquiry(item.name)} 
                />
              ))}
            </div>
          </div>
        )}

        {/* VAT, Slogan & Contact Footer */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-[#d8e6df] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-[#526359]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#15803d] shrink-0" />
            <span><strong>Notice:</strong> {CAFE_INFO.vatNotice}</span>
          </div>

          <div className="flex items-center gap-2 text-[#15803d] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{CAFE_INFO.slogan}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="font-bold text-[#173829] hover:text-[#15803d] flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#15803d]" />
              <span>{CAFE_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Real Photography */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-white/20 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-80 bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <h4 className="font-display text-xl font-bold text-[#173829]">{selectedPhoto.title}</h4>
              <p className="text-xs sm:text-sm text-[#526359] mt-1.5 leading-relaxed">{selectedPhoto.desc}</p>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#15803d] font-semibold">Aurora Café & Bistro · Full Market, Khulna</span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-3.5 py-1.5 rounded-full bg-[#15803d] text-white text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

// Subcomponent: High-craft Bistro Menu Row
interface MenuBistroRowProps {
  item: MenuItem;
  onInquire: () => void;
}

const MenuBistroRow: React.FC<MenuBistroRowProps> = ({ item, onInquire }) => {
  return (
    <div className="group flex flex-col justify-between py-2 border-b border-[#f0f5f2] hover:border-[#15803d]/30 transition-colors">
      <div>
        {/* Row Header: Title, Dotted Line, Price */}
        <div className="flex items-baseline justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <h4 className="font-display text-base sm:text-lg font-bold text-[#173829] group-hover:text-[#15803d] transition-colors">
              {item.name}
            </h4>

            {/* Badges */}
            {item.takeHomeJar && (
              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#15803d] text-white shadow-2xs">
                <Wine className="w-2.5 h-2.5" />
                <span>Take Jar Home!</span>
              </span>
            )}

            {item.isSignature && !item.takeHomeJar && (
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 text-[#15803d]">
                Signature
              </span>
            )}

            {item.isPopular && !item.isSignature && !item.takeHomeJar && (
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Popular
              </span>
            )}

            {item.category === 'combos' && (
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                Combo
              </span>
            )}

            {item.portion && (
              <span className="text-[10px] text-gray-500 font-medium bg-gray-100 px-1.5 py-0.2 rounded">
                {item.portion}
              </span>
            )}
          </div>

          {/* Dotted Leader */}
          <div className="flex-1 border-b border-dotted border-[#cbdad0] mx-2 hidden sm:block" />

          {/* Price */}
          <div className="text-base sm:text-lg font-bold text-[#15803d] whitespace-nowrap">
            ৳{item.price}
          </div>
        </div>

        {/* Item Description */}
        <p className="text-xs sm:text-sm text-[#526359] mt-1 leading-relaxed">
          {item.description}
        </p>

        {/* Combo breakdown tags */}
        {item.comboIncludes && item.comboIncludes.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#15803d] uppercase tracking-wider">Includes:</span>
            {item.comboIncludes.map((inc, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-[11px] text-[#2d4a3e] bg-[#f0f7f2] px-2 py-0.5 rounded-md border border-[#d8eadf] font-medium">
                <Check className="w-2.5 h-2.5 text-[#15803d]" />
                <span>{inc}</span>
              </span>
            ))}
          </div>
        )}

        {/* Optional Add-on indicator */}
        {item.addonAvailable && (
          <div className="mt-1 text-[10px] sm:text-[11px] text-amber-700 font-medium">
            <span className="sm:hidden">* Add-ons: Cheese (+৳50), BBQ (+৳50), Naga (+৳30), Garlic (+৳30)</span>
            <span className="hidden sm:inline">* Add-ons available: Extra Cheese (+৳50), BBQ Glaze (+৳50), Naga Hit (+৳30), Garlic Dip (+৳30)</span>
          </div>
        )}
      </div>

      {/* Subtle bottom row tag & inquiry link */}
      <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400">
        <div className="flex items-center gap-1">
          {item.tags && item.tags.slice(0, 2).map((t, i) => (
            <span key={i} className="text-[10px] text-gray-500 bg-[#f4f7f5] px-1.5 py-0.2 rounded">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={onInquire}
          className="text-[#15803d] hover:text-[#166534] font-medium hover:underline flex items-center gap-1 cursor-pointer"
        >
          <MessageCircle className="w-3 h-3" />
          <span>Inquire</span>
        </button>
      </div>
    </div>
  );
};
