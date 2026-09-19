export type MenuCategoryType =
  | 'combos'
  | 'frost'
  | 'coffee'
  | 'iced_coffee'
  | 'burgers_sandwiches'
  | 'pasta_meatbox'
  | 'shakes_mojitos'
  | 'teas_waters'
  | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  price: number; // in BDT ৳
  description: string;
  image?: string;
  isPopular?: boolean;
  isSignature?: boolean;
  tags?: string[];
  portion?: string;
  comboIncludes?: string[];
  takeHomeJar?: boolean; // Highlight for Frost Collection
  addonAvailable?: boolean;
  dietary?: 'Vegetarian' | 'Non-Veg';
}

export interface MenuAddon {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface CafeReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatarText: string;
  dishLoved: string;
}

export const CAFE_INFO = {
  name: "Aurora Café & Bistro",
  shortName: "Aurora",
  tagline: "Where taste meets ambiance",
  subTagline: "More than food it's an experience to remember",
  slogan: "Sip. Relax. Enjoy. ♡ Good Coffee. Good Mood.",
  location: "Full Market, Khulna, Bangladesh",
  city: "Khulna",
  phone: "01303-886666",
  phoneRaw: "+8801303886666",
  email: "auroracafeandbistro@gmail.com",
  instagram: "@auroracafeandbistro",
  instagramUrl: "https://instagram.com/auroracafeandbistro",
  facebook: "Aurora Café & Bistro",
  facebookUrl: "https://www.facebook.com/auroracafeandbistro",
  followers: "21K+",
  rating: "4.9",
  reviewsCount: "1,240+",
  vatNotice: "*All foods are excluded from VAT",
  openingHours: [
    { day: "Monday - Thursday", hours: "11:00 AM - 11:00 PM" },
    { day: "Friday - Saturday", hours: "10:30 AM - 11:30 PM" },
    { day: "Sunday", hours: "11:00 AM - 11:00 PM" },
  ],
  features: [
    { title: "Artisan Brewed Coffee", desc: "Specialty roasted espresso beans poured with intricate micro-foam latte art." },
    { title: "Aurora Frost Collection", desc: "Chilled, creamy bottled delights where you can take the signature jar/glass home!" },
    { title: "Crisp Toasted Paninis & Shawarma", desc: "Signature golden grill-pressed sourdough and soft spiced rolls." },
    { title: "Cozy Aesthetic Ambiance", desc: "Warm track lighting, study tables, reading corners, and tranquil green accents." }
  ]
};

export const MENU_ADDONS: MenuAddon[] = [
  { id: "add-1", name: "Naga Spice Hit", price: 30, description: "Authentic spicy Naga chili kick" },
  { id: "add-2", name: "White Garlic Sauce", price: 30, description: "Creamy signature garlic dip" },
  { id: "add-3", name: "BBQ Flavour Glaze", price: 50, description: "Smoky sweet barista-style barbecue" },
  { id: "add-4", name: "Extra Melted Cheese", price: 50, description: "Rich gooey mozzarella layer" }
];

export const GALLERY_IMAGES = [
  {
    src: "/assets/Image 1.jpg",
    title: "Artisan Fern Latte & Grilled Panini",
    category: "Signature Pairings",
    caption: "Our signature fern leaf latte served alongside a golden-pressed chicken panini and house dipping sauce."
  },
  {
    src: "/assets/Image 2.jpg",
    title: "Barista Counter & Sweet Display",
    category: "Hospitality",
    caption: "Our welcoming barista station featuring freshly prepared cheesecakes, brownies, and warm smiles."
  },
  {
    src: "/assets/Image 3.jpg",
    title: "Layered Iced Specialty in Reading Nook",
    category: "Beverages",
    caption: "Silky whipped cream and layered cold coffee, the perfect companion for an afternoon read."
  },
  {
    src: "/assets/Image 4.jpg",
    title: "Cozy White Brick Study & Lounge",
    category: "Ambiance",
    caption: "Minimalist aesthetic ambiance with warm track lights, botanical plants, and comfortable wooden tables."
  },
  {
    src: "/assets/Image 5.jpg",
    title: "Sizzling Gourmet Delights & Pastas",
    category: "Bistro Specials",
    caption: "Savory kitchen creations prepared hot upon order with authentic bistro flair."
  },
  {
    src: "/assets/Image 6.jpg",
    title: "Artisan Desserts & Bakery Creations",
    category: "Desserts & Bakery",
    caption: "Fudge brownies with ice cream and blueberry cheesecakes crafted for sweet indulgence."
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. HAPPY COMBOS (Extracted from Real Facebook Menu)
  // ==========================================
  {
    id: "combo-1",
    name: "Happy Combo 1",
    category: "combos",
    price: 230,
    description: "One freshly toasted Chicken Grilled Sandwich paired with One Regular Hot Coffee with Latte Art.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    isSignature: true,
    tags: ["Best Value", "Chef Favorite"],
    comboIncludes: ["1x Chicken Grilled Sandwich", "1x Regular Hot Coffee (Latte Art)"]
  },
  {
    id: "combo-2",
    name: "Happy Combo 2",
    category: "combos",
    price: 350,
    description: "One hearty plate of Pasta Basta served with Two freshly brewed Regular Hot Coffees. Ideal for two!",
    image: "/assets/Image 5.jpg",
    isPopular: true,
    tags: ["Duo Special", "Pasta Combo"],
    comboIncludes: ["1x Pasta Basta", "2x Regular Hot Coffee"]
  },
  {
    id: "combo-3",
    name: "Happy Combo 3",
    category: "combos",
    price: 280,
    description: "One Chicken Grilled Sandwich paired with our famous bottled Choco Caramel Frost (take bottle home!).",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    tags: ["Popular", "Bottled Drink"],
    comboIncludes: ["1x Chicken Grilled Sandwich", "1x Choco Caramel Frost"]
  },
  {
    id: "combo-4",
    name: "Happy Combo 4",
    category: "combos",
    price: 210,
    description: "Warm homemade Fudge Brownie served alongside One Regular Hot Coffee with silky crema.",
    image: "/assets/Image 6.jpg",
    tags: ["Sweet Tooth", "Coffee Break"],
    comboIncludes: ["1x Fudge Brownie", "1x Regular Hot Coffee"]
  },
  {
    id: "combo-5",
    name: "Happy Combo 5",
    category: "combos",
    price: 260,
    description: "Savory spiced Chicken Shawarma wrapped in flatbread with One refreshing Chocolate Cold Coffee.",
    image: "/assets/Image 1.jpg",
    tags: ["Quick Bite", "Chilled Drink"],
    comboIncludes: ["1x Chicken Shawarma", "1x Chocolate Cold Coffee"]
  },
  {
    id: "combo-6",
    name: "Happy Combo 6",
    category: "combos",
    price: 270,
    description: "Freshly assembled Sub Sandwich with seasoned chicken and vegetables plus One Chocolate Cold Coffee.",
    image: "/assets/Image 1.jpg",
    tags: ["Lunch Deal"],
    comboIncludes: ["1x Sub Sandwich", "1x Chocolate Cold Coffee"]
  },
  {
    id: "combo-ultima",
    name: "Happy Combo Ultima",
    category: "combos",
    price: 480,
    description: "The ultimate feast: One Chicken Grilled Sandwich, Two Chocolate Cold Coffees, and crispy golden French Fries.",
    image: "/assets/Image 1.jpg",
    isSignature: true,
    isPopular: true,
    tags: ["Ultimate Feast", "Feeds 2-3"],
    comboIncludes: ["1x Chicken Grilled Sandwich", "2x Chocolate Cold Coffee", "1x Golden French Fries"]
  },

  // ==========================================
  // 2. AURORA FROST COLLECTION (Extracted from Real Menu)
  // "CHILLED. CREAMY. IRRESISTIBLE."
  // N.B: You can take all bottle, glass, jar to home!
  // ==========================================
  {
    id: "frost-1",
    name: "Choco Caramel Frost",
    category: "frost",
    price: 150,
    description: "Chilled creamy chocolate and buttery caramel elixir served in a signature bottle you can take home!",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    takeHomeJar: true,
    tags: ["Take Bottle Home", "Creamy"],
    portion: "Signature Bottle"
  },
  {
    id: "frost-2",
    name: "Strawberry Frost",
    category: "frost",
    price: 160,
    description: "Luscious strawberry puree blended with velvety cream, crowned with whipped cream & strawberry drizzle.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    takeHomeJar: true,
    tags: ["Take Jar Home", "Whipped Cream"],
    portion: "Glass Jar"
  },
  {
    id: "frost-3",
    name: "Mango Frost",
    category: "frost",
    price: 210,
    description: "Sweet ripe mango cream layered with whipped topping and finished with a crispy chocolate wafer stick.",
    image: "/assets/Image 3.jpg",
    takeHomeJar: true,
    tags: ["Take Jar Home", "Tropical"],
    portion: "Glass Jar"
  },
  {
    id: "frost-4",
    name: "Dream Choco Frost",
    category: "frost",
    price: 210,
    description: "Rich cocoa frost topped with mountain-high whipped cream, Belgian chocolate drizzle, and chocolate shavings.",
    image: "/assets/Image 3.jpg",
    isSignature: true,
    isPopular: true,
    takeHomeJar: true,
    tags: ["Take Glass Home", "Chocoholic"],
    portion: "Specialty Glass"
  },
  {
    id: "frost-5",
    name: "Blueberry Frost",
    category: "frost",
    price: 330,
    description: "Wild mountain blueberry swirls combined with rich frosty cream in a premium reusable shaker bottle.",
    image: "/assets/Image 3.jpg",
    takeHomeJar: true,
    tags: ["Take Shaker Home", "Berry"],
    portion: "Shaker Bottle"
  },
  {
    id: "frost-6",
    name: "Butterscotch Frost",
    category: "frost",
    price: 350,
    description: "Decadent caramelized butterscotch blended thick and chilled, bottled for you to keep and cherish.",
    image: "/assets/Image 3.jpg",
    isSignature: true,
    takeHomeJar: true,
    tags: ["Take Shaker Home", "Premium"],
    portion: "Shaker Bottle"
  },

  // ==========================================
  // 3. HOT COFFEE (BEANS) & INSTANTO (Extracted from Real Menu)
  // "SIP. RELAX. ENJOY."
  // ==========================================
  {
    id: "coffee-esp",
    name: "Espresso",
    category: "coffee",
    price: 90,
    description: "Concentrated extraction of our specialty dark roast beans with rich hazelnut crema.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans", "Pure"],
    portion: "Single Shot"
  },
  {
    id: "coffee-ame",
    name: "Americano",
    category: "coffee",
    price: 120,
    description: "Double espresso shot elongated with piping hot filtered water for smooth cocoa notes.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans", "Classic"],
    portion: "Double Shot"
  },
  {
    id: "coffee-cor",
    name: "Cortado",
    category: "coffee",
    price: 140,
    description: "Equal parts bold espresso cut with warm steamed textured milk to reduce acidity.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans", "Balanced"]
  },
  {
    id: "coffee-dop",
    name: "Doppio",
    category: "coffee",
    price: 140,
    description: "Double standard espresso shot pulled fresh for an intense caffeine boost.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans", "Strong"]
  },
  {
    id: "coffee-cap",
    name: "Cappuccino",
    category: "coffee",
    price: 170,
    description: "Harmonious balance of dark espresso, steamed milk, and a thick airy foam cap dusted with cocoa.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    tags: ["Beans", "Favorite"]
  },
  {
    id: "coffee-lat",
    name: "Aurora Velvet Latte",
    category: "coffee",
    price: 190,
    description: "Silky micro-foam poured over espresso with intricate hand-poured fern latte art.",
    image: "/assets/Image 1.jpg",
    isSignature: true,
    isPopular: true,
    tags: ["Beans", "Latte Art", "Signature"]
  },
  {
    id: "coffee-aff",
    name: "Affogato",
    category: "coffee",
    price: 190,
    description: "A scoop of chilled vanilla ice cream drowned in a hot, intense shot of freshly pulled espresso.",
    image: "/assets/Image 5.jpg",
    tags: ["Beans", "Dessert Coffee"]
  },
  {
    id: "coffee-mac",
    name: "Macchiato",
    category: "coffee",
    price: 180,
    description: "Rich espresso marked with a delicate dollop of velvety textured foam.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans"]
  },
  {
    id: "coffee-spa",
    name: "Spanish Latte",
    category: "coffee",
    price: 230,
    description: "Rich espresso infused with sweetened condensed milk and silky warm foam.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    tags: ["Beans", "Sweet"]
  },
  {
    id: "coffee-flav",
    name: "Flavored Latte (Hazelnut / Caramel / Vanilla)",
    category: "coffee",
    price: 230,
    description: "Silky smooth latte customized with your choice of artisan Hazelnut or Caramel syrup.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans", "Flavored"]
  },
  {
    id: "coffee-moc",
    name: "Cafe Mocha",
    category: "coffee",
    price: 250,
    description: "Dark espresso combined with decadent chocolate sauce, steamed milk, and light whipped cream.",
    image: "/assets/Image 1.jpg",
    tags: ["Beans", "Chocolate"]
  },
  {
    id: "coffee-car-mac",
    name: "Caramel Macchiato",
    category: "coffee",
    price: 250,
    description: "Vanilla-infused steamed milk marked with espresso and criss-crossed with buttery golden caramel drizzle.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    tags: ["Beans", "Caramel"]
  },
  // Instanto
  {
    id: "coffee-reg-hot",
    name: "Regular Hot Coffee (Latte Art)",
    category: "coffee",
    price: 90,
    description: "Aurora's classic comforting hot coffee served hot with delightful latte art on top.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    tags: ["Instanto", "Latte Art", "Value Choice"]
  },
  {
    id: "coffee-cold-sm",
    name: "Chocolate Cold Coffee (Small)",
    category: "coffee",
    price: 115,
    description: "Chilled blended coffee with velvety chocolate and crushed ice in a handy small serving.",
    image: "/assets/Image 3.jpg",
    portion: "Small Glass",
    tags: ["Instanto", "Chilled"]
  },
  {
    id: "coffee-cold-lg",
    name: "Chocolate Cold Coffee (Large)",
    category: "coffee",
    price: 160,
    description: "Generous tall glass of chilled blended coffee, rich chocolate, and creamy milk froth.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    portion: "Large Glass",
    tags: ["Instanto", "Best Seller"]
  },
  {
    id: "coffee-hazel-dream",
    name: "Hazzel Dream",
    category: "coffee",
    price: 150,
    description: "Creamy cold coffee sensation infused with toasted hazelnut aroma and sweet chocolate hints.",
    image: "/assets/Image 3.jpg",
    tags: ["Instanto", "Hazelnut"]
  },

  // ==========================================
  // 4. ICED COFFEE (BEANS) & NON-COFFEE (Extracted from Real Menu)
  // ==========================================
  {
    id: "iced-ame",
    name: "Iced Americano",
    category: "iced_coffee",
    price: 170,
    description: "Freshly pulled espresso poured over crystal-clear ice cubes and chilled water. Clean and crisp.",
    image: "/assets/Image 3.jpg",
    tags: ["Beans", "Zero Sugar", "Chilled"]
  },
  {
    id: "iced-cap",
    name: "Iced Cappuccino",
    category: "iced_coffee",
    price: 210,
    description: "Cold espresso and milk poured over ice, topped with an airy cloud of chilled milk foam.",
    image: "/assets/Image 3.jpg",
    tags: ["Beans", "Frothy"]
  },
  {
    id: "iced-lat",
    name: "Iced Latte",
    category: "iced_coffee",
    price: 240,
    description: "Creamy cold milk and espresso gently layered over ice for a silky, thirst-quenching sip.",
    image: "/assets/Image 3.jpg",
    tags: ["Beans", "Smooth"]
  },
  {
    id: "iced-spa-lat",
    name: "Spanish Iced Latte",
    category: "iced_coffee",
    price: 270,
    description: "Our signature Spanish latte served ice-cold with sweet condensed milk swirls.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    isSignature: true,
    tags: ["Beans", "Customer Favorite"]
  },
  {
    id: "iced-hazel-lat",
    name: "Hazelnut Iced Latte",
    category: "iced_coffee",
    price: 270,
    description: "Chilled espresso with nutty hazelnut syrup, fresh cold milk, and crushed ice.",
    image: "/assets/Image 3.jpg",
    tags: ["Beans", "Nutty"]
  },
  {
    id: "iced-straw-lat",
    name: "Strawberry Iced Latte",
    category: "iced_coffee",
    price: 290,
    description: "Artisanal fusion of berry syrup, creamy cold milk, and a bold floating espresso cap.",
    image: "/assets/Image 3.jpg",
    tags: ["Beans", "Aesthetic"]
  },
  {
    id: "iced-moc",
    name: "Iced Mocha",
    category: "iced_coffee",
    price: 310,
    description: "Dark chocolate sauce, chilled espresso, creamy milk over ice, topped with whipped cream.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    tags: ["Beans", "Rich Chocolate"]
  },
  {
    id: "non-hot-choc",
    name: "Rich Hot Chocolate",
    category: "iced_coffee",
    price: 230,
    description: "Melted premium Belgian chocolate steamed with whole milk and topped with cocoa dusting.",
    image: "/assets/Image 1.jpg",
    tags: ["Non-Coffee", "Comfort Drink"]
  },
  {
    id: "non-matcha-lat",
    name: "Matcha Latte",
    category: "iced_coffee",
    price: 250,
    description: "Authentic fine Japanese green tea matcha whisked with warm textured milk.",
    image: "/assets/Image 5.jpg",
    tags: ["Non-Coffee", "Antioxidant"]
  },
  {
    id: "non-matcha-iced",
    name: "Matcha Iced Latte",
    category: "iced_coffee",
    price: 310,
    description: "Vibrant emerald green matcha layered over chilled sweetened milk and ice.",
    image: "/assets/Image 5.jpg",
    isSignature: true,
    tags: ["Non-Coffee", "Refreshing"]
  },

  // ==========================================
  // 5. BURGERS, SANDWICHES & FAST FOOD (Extracted from Real Menu)
  // ==========================================
  {
    id: "ff-bur-classic",
    name: "Chicken Classic Burger",
    category: "burgers_sandwiches",
    price: 160,
    description: "Juicy seasoned chicken patty topped with fresh lettuce, tomato, onions, and house mayo inside toasted buns.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    addonAvailable: true,
    tags: ["Classic", "Juicy"]
  },
  {
    id: "ff-bur-cheese",
    name: "Chicken Cheese Burger",
    category: "burgers_sandwiches",
    price: 190,
    description: "Classic chicken patty burger smothered with a melted yellow cheese slice and secret garlic sauce.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    addonAvailable: true,
    tags: ["Cheesy Favorite"]
  },
  {
    id: "ff-bur-bbq",
    name: "BBQ Boom Burger",
    category: "burgers_sandwiches",
    price: 210,
    description: "Grilled savory chicken patty generously glazed in smoky BBQ sauce with crisp onions and gherkins.",
    image: "/assets/Image 1.jpg",
    addonAvailable: true,
    tags: ["Smoky BBQ", "Boom!"]
  },
  {
    id: "ff-bur-bbq-cheese",
    name: "BBQ Cheese Boom Burger",
    category: "burgers_sandwiches",
    price: 230,
    description: "The ultimate BBQ explosion: glazed chicken patty with double BBQ drizzle and a hot slice of melted cheese.",
    image: "/assets/Image 1.jpg",
    isSignature: true,
    isPopular: true,
    addonAvailable: true,
    tags: ["Chef Special", "Signature"]
  },
  {
    id: "ff-san-grilled",
    name: "Chicken Grilled Sandwich",
    category: "burgers_sandwiches",
    price: 150,
    description: "Aurora's signature golden grill-pressed bread stuffed with herb-marinated shredded chicken and creamy filling.",
    image: "/assets/Image 1.jpg",
    isSignature: true,
    isPopular: true,
    addonAvailable: true,
    tags: ["Best Seller", "Signature Panini"]
  },
  {
    id: "ff-san-sub",
    name: "Sub Sandwich",
    category: "burgers_sandwiches",
    price: 170,
    description: "Soft submarine bread roll packed with seasoned chicken chunks, shredded lettuce, and tangy dressing.",
    image: "/assets/Image 1.jpg",
    addonAvailable: true,
    tags: ["Submarine", "Filling"]
  },
  {
    id: "ff-san-club",
    name: "The Club Sandwich",
    category: "burgers_sandwiches",
    price: 250,
    description: "Triple-layer toasted sandwich stuffed with grilled poultry, egg, sliced cheese, cucumber, and spicy garlic aioli.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    addonAvailable: true,
    tags: ["Triple Layer", "Hearty"]
  },
  {
    id: "ff-shw-chicken",
    name: "Chicken Shawarma",
    category: "burgers_sandwiches",
    price: 170,
    description: "Warm flatbread rolled tight with slow-roasted spiced chicken, garlic mayo, and pickled salad.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    addonAvailable: true,
    tags: ["Street Style", "Authentic"]
  },
  {
    id: "ff-fries",
    name: "Golden French Fries",
    category: "burgers_sandwiches",
    price: 150,
    description: "Golden crispy deep-fried potato batons sprinkled with aromatic house seasoning salt.",
    image: "/assets/Image 1.jpg",
    isPopular: true,
    tags: ["Crispy", "Snack"],
    dietary: "Vegetarian"
  },

  // ==========================================
  // 6. PASTAS & MEAT BOXES (Extracted from Real Menu)
  // ==========================================
  {
    id: "pm-pasta-basta",
    name: "Pasta Basta",
    category: "pasta_meatbox",
    price: 180,
    description: "Delicious penne pasta tossed in Aurora's seasoned tomato-garlic cream sauce with tender chicken pieces.",
    image: "/assets/Image 5.jpg",
    isPopular: true,
    addonAvailable: true,
    tags: ["Italian", "Comfort Food"]
  },
  {
    id: "pm-sausage-blast",
    name: "Sausage Blast Pasta",
    category: "pasta_meatbox",
    price: 230,
    description: "Hearty penne pasta sautéed with sliced savory sausages, bell peppers, and melted cheese seasonings.",
    image: "/assets/Image 5.jpg",
    addonAvailable: true,
    tags: ["Sausage Special", "Savory"]
  },
  {
    id: "pm-bbq-pasta",
    name: "BBQ Special Pasta",
    category: "pasta_meatbox",
    price: 240,
    description: "Smoky barbecue infused pasta loaded with shredded chicken and topped with warm melted mozzarella cheese.",
    image: "/assets/Image 5.jpg",
    isSignature: true,
    addonAvailable: true,
    tags: ["BBQ Special", "Cheesy"]
  },
  {
    id: "pm-meatbox",
    name: "Meat Box (Without French Fries)",
    category: "pasta_meatbox",
    price: 190,
    description: "Pure meat indulgence: juicy seasoned chicken cubes, house sauces, and spices packed in a box.",
    image: "/assets/Image 5.jpg",
    isPopular: true,
    addonAvailable: true,
    tags: ["Pure Protein", "No Fries"]
  },
  {
    id: "pm-meaty-bati",
    name: "Meaty Bati (Without French Fries)",
    category: "pasta_meatbox",
    price: 230,
    description: "Traditional bowl loaded with thick shredded meat, savory spices, garlic dressing, and fiery sauce.",
    image: "/assets/Image 5.jpg",
    addonAvailable: true,
    tags: ["Bati Style", "Spicy"]
  },
  {
    id: "pm-cheese-foil",
    name: "Cheese Foil Chicken",
    category: "pasta_meatbox",
    price: 250,
    description: "Baked foil pouch overflowing with tender spicy chicken pieces drowned under melted gooey cheese strings.",
    image: "/assets/Image 5.jpg",
    isSignature: true,
    isPopular: true,
    addonAvailable: true,
    tags: ["Baked Foil", "Super Cheesy"]
  },

  // ==========================================
  // 7. MILKSHAKES, MOJITOS & FRAPPES (Extracted from Real Menu)
  // ==========================================
  // Milkshakes
  {
    id: "shk-vanilla",
    name: "Vanilla Milkshake",
    category: "shakes_mojitos",
    price: 150,
    description: "Smooth blend of French vanilla ice cream and whole fresh milk.",
    image: "/assets/Image 3.jpg",
    tags: ["Milkshake", "Classic"]
  },
  {
    id: "shk-strawberry",
    name: "Strawberry Milkshake",
    category: "shakes_mojitos",
    price: 170,
    description: "Fresh strawberry syrup whipped with milk and rich strawberry ice cream.",
    image: "/assets/Image 3.jpg",
    tags: ["Milkshake", "Fruity"]
  },
  {
    id: "shk-mango",
    name: "Mango Milkshake",
    category: "shakes_mojitos",
    price: 170,
    description: "Tropical mango pulp blended thick with creamy milk and vanilla scoop.",
    image: "/assets/Image 3.jpg",
    tags: ["Milkshake", "Mango"]
  },
  {
    id: "shk-chocolate",
    name: "Chocolate Milkshake",
    category: "shakes_mojitos",
    price: 170,
    description: "Dutch cocoa and chocolate ice cream whirled into a rich shake.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    tags: ["Milkshake", "Chocolate"]
  },
  {
    id: "shk-kitkat",
    name: "KitKat Milkshake",
    category: "shakes_mojitos",
    price: 210,
    description: "Crushed crunchy KitKat wafer bars blended into thick chocolate shake.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    tags: ["Milkshake", "Crunchy"]
  },
  {
    id: "shk-choco-caramel",
    name: "Chocolate Caramel Milkshake",
    category: "shakes_mojitos",
    price: 210,
    description: "Twin ribbons of cocoa and golden caramel blended thick with ice cream.",
    image: "/assets/Image 3.jpg",
    tags: ["Milkshake", "Caramel"]
  },
  {
    id: "shk-special",
    name: "Artisan Milkshake (Peach / Butterscotch / Hazelnut / Blueberry / Kiwi)",
    category: "shakes_mojitos",
    price: 230,
    description: "Your choice of specialty fruit or nut flavor blended into an ultra-thick milkshake.",
    image: "/assets/Image 3.jpg",
    tags: ["Milkshake", "Specialty"]
  },

  // Mojitos
  {
    id: "moj-blue-ocean",
    name: "Blue Ocean Mojito",
    category: "shakes_mojitos",
    price: 130,
    description: "Vibrant blue curaçao flavor muddled with fresh mint, lime wedges, and sparkling soda.",
    image: "/assets/Image 5.jpg",
    isPopular: true,
    tags: ["Mojito", "Refreshing"]
  },
  {
    id: "moj-mint-lemon",
    name: "Mint Lemon Mojito",
    category: "shakes_mojitos",
    price: 130,
    description: "Freshly crushed garden mint, zesty lemon juice, simple syrup, and fizz over ice.",
    image: "/assets/Image 5.jpg",
    isPopular: true,
    tags: ["Mojito", "Citrus"]
  },
  {
    id: "moj-fruit",
    name: "Specialty Mojito (Mango / Green Apple / Pink Guava / Blackcurrant / Kiwi)",
    category: "shakes_mojitos",
    price: 150,
    description: "Sparkling crushed-ice mocktails flavored with premium natural fruit syrups and mint.",
    image: "/assets/Image 5.jpg",
    tags: ["Mojito", "Mocktail"]
  },

  // Frappes
  {
    id: "frp-strawberry",
    name: "Strawberry / Mango Frappe",
    category: "shakes_mojitos",
    price: 220,
    description: "Ice-blended creamy frappe loaded with fruit syrup and whipped cream top.",
    image: "/assets/Image 3.jpg",
    tags: ["Frappe", "Chilled"]
  },
  {
    id: "frp-kitkat",
    name: "KitKat Frappe",
    category: "shakes_mojitos",
    price: 230,
    description: "Blended ice coffee and crushed KitKat bars with mountain whipped cream.",
    image: "/assets/Image 3.jpg",
    isPopular: true,
    tags: ["Frappe", "KitKat"]
  },
  {
    id: "frp-gourmet",
    name: "Gourmet Frappe (Peach / Butterscotch / Hazelnut / Blueberry / Kiwi)",
    category: "shakes_mojitos",
    price: 250,
    description: "Ice-blended gourmet frappe with whipped cloud and rich syrup swirls.",
    image: "/assets/Image 3.jpg",
    tags: ["Frappe", "Gourmet"]
  },

  // ==========================================
  // 8. SPECIALTY TEAS & WATERS (Extracted from Real Menu)
  // ==========================================
  {
    id: "tea-shokal",
    name: "Shokal Shondha Tea",
    category: "teas_waters",
    price: 30,
    description: "Traditional aromatic boiled spiced milk tea, comforting from morning to evening.",
    image: "/assets/Image 2.jpg",
    isPopular: true,
    tags: ["Traditional", "Comfort"]
  },
  {
    id: "tea-bikal",
    name: "Bikal Bondhu Tea",
    category: "teas_waters",
    price: 30,
    description: "Aurora's signature afternoon tea blend brewed with fresh whole milk and tea leaves.",
    image: "/assets/Image 2.jpg",
    tags: ["Afternoon Tea"]
  },
  {
    id: "tea-red-robe",
    name: "Red Robe Oolong Tea",
    category: "teas_waters",
    price: 50,
    description: "Famous Chinese Da Hong Pao (Red Robe) oolong tea with mineral woody aroma.",
    image: "/assets/Image 2.jpg",
    tags: ["Artisan Oolong", "Health"]
  },
  {
    id: "tea-dragon",
    name: "Dragon Well Green Tea (Longjing)",
    category: "teas_waters",
    price: 50,
    description: "Pan-roasted Chinese green tea leaves with gentle sweet chestnut undertones.",
    image: "/assets/Image 2.jpg",
    tags: ["Artisan Green", "Antioxidant"]
  },
  {
    id: "tea-silver",
    name: "Silver Needle White Tea",
    category: "teas_waters",
    price: 90,
    description: "Rare and prized delicate white tea buds, yielding a sweet melon nectar liquor.",
    image: "/assets/Image 2.jpg",
    isSignature: true,
    tags: ["Rare White Tea", "Premium"]
  },
  {
    id: "iced-tea-all",
    name: "Refreshing Iced Tea (Lemon / Strawberry / Peach / Green Apple)",
    category: "teas_waters",
    price: 150,
    description: "Chilled black or green tea shaken with crushed ice, citrus, and fruit infusion.",
    image: "/assets/Image 5.jpg",
    tags: ["Iced Tea", "Refreshing"]
  },
  {
    id: "water-alkaline",
    name: "Sakura / Safa Alkaline Water",
    category: "teas_waters",
    price: 60,
    description: "High-pH purified alkaline bottled water for pure wellness and optimal hydration.",
    image: "/assets/Image 2.jpg",
    tags: ["Hydration", "Alkaline"]
  },
  {
    id: "water-black",
    name: "Sakura Black Mineral Water (500ml)",
    category: "teas_waters",
    price: 120,
    description: "Infused with natural fulvic trace minerals and electrolytes with a striking black tint.",
    image: "/assets/Image 2.jpg",
    tags: ["Black Water", "Electrolytes"]
  },

  // ==========================================
  // 9. DESSERTS & BAKERY (Extracted from Real Menu)
  // ==========================================
  {
    id: "des-brownie",
    name: "Fudge Brownie",
    category: "desserts",
    price: 130,
    description: "Fudgy, dense Belgian cocoa brownie with a crackly paper-thin top.",
    image: "/assets/Image 6.jpg",
    isPopular: true,
    tags: ["Bakery", "Chocoholic"]
  },
  {
    id: "des-brownie-ice",
    name: "Fudge Brownie with Ice-Cream",
    category: "desserts",
    price: 170,
    description: "Warm heated chocolate fudge brownie served with a scoop of vanilla ice cream and dark chocolate drizzle.",
    image: "/assets/Image 6.jpg",
    isSignature: true,
    isPopular: true,
    tags: ["Best Seller", "Warm & Cold"]
  },
  {
    id: "des-cheesecake-reg",
    name: "Regular Classic Cheesecake",
    category: "desserts",
    price: 190,
    description: "Smooth baked New York style cream cheese cake on a crumbly butter biscuit crust.",
    image: "/assets/Image 6.jpg",
    tags: ["Artisan Cake", "Velvety"]
  },
  {
    id: "des-cheesecake-blue",
    name: "Blueberry Cheesecake",
    category: "desserts",
    price: 220,
    description: "Velvety cheesecake slice smothered in rich wild blueberry compote and real berries.",
    image: "/assets/Image 6.jpg",
    isSignature: true,
    isPopular: true,
    tags: ["Signature Cake", "Must Try"]
  },
  {
    id: "des-cheesecake-oreo",
    name: "Oreo Cheesecake",
    category: "desserts",
    price: 220,
    description: "Creamy cheesecake loaded with crushed Oreo biscuits over a crunchy chocolate crust.",
    image: "/assets/Image 6.jpg",
    isPopular: true,
    tags: ["Oreo Crunch"]
  },
  {
    id: "des-icecream-scoop",
    name: "Ice-Cream Scoop (Vanilla / Mango / Chocolate / Strawberry)",
    category: "desserts",
    price: 90,
    description: "Rich creamy dairy ice cream scoop served chilled. (Butterscotch 160 ৳)",
    image: "/assets/Image 6.jpg",
    tags: ["Chilled Scoop"]
  }
];

export const REVIEWS: CafeReview[] = [
  {
    id: "r1",
    author: "Tanvir Hasan",
    rating: 5,
    date: "2 days ago",
    comment: "Hands down the coziest cafe in Khulna! The fern latte with beans coffee is perfection and Happy Combo 1 is incredible value. Love the peaceful music and friendly staff.",
    avatarText: "TH",
    dishLoved: "Happy Combo 1 & Velvet Fern Latte"
  },
  {
    id: "r2",
    author: "Nusrat Jahan",
    rating: 5,
    date: "1 week ago",
    comment: "The Frost Collection is genius! We had the Choco Caramel and Dream Choco Frost, and we got to take the glass jars home. Such a nice touch in Full Market!",
    avatarText: "NJ",
    dishLoved: "Dream Choco Frost (Take Home Jar)"
  },
  {
    id: "r3",
    author: "Farhan Ahmed",
    rating: 5,
    date: "2 weeks ago",
    comment: "Pasta Basta with extra cheese and the BBQ Cheese Boom Burger are top tier. Also really appreciate that they have proper Chinese teas like Silver Needle and Oolong.",
    avatarText: "FA",
    dishLoved: "Pasta Basta & BBQ Cheese Boom Burger"
  },
  {
    id: "r4",
    author: "Sabrina Rahman",
    rating: 5,
    date: "Last month",
    comment: "Warm fudge brownie with ice cream and their chocolate cold coffee never disappoints. 21K+ community for a reason!",
    avatarText: "SR",
    dishLoved: "Fudge Brownie with Ice Cream"
  }
];
