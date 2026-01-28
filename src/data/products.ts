export interface Product {
  id: string;
  name: string;
  collection: string;
  description: string;
  story: string;
  price: string;
  image: string;
  gallery: string[];
  specs: {
    materials: string;
    crystalType: string;
    dimensions: string;
    lightTemperature: string;
    recommendedRoom: string;
    bulbType: string;
    weight: string;
  };
  features: string[];
}

export const collections = [
  {
    id: 'modern',
    name: 'Modern Crystal',
    description: 'Contemporary elegance meets crystalline brilliance',
    image: '/images/collections/modern.jpg',
  },
  {
    id: 'classic',
    name: 'Classic Luxury',
    description: 'Timeless grandeur for distinguished spaces',
    image: '/images/collections/classic.jpg',
  },
  {
    id: 'minimal',
    name: 'Minimal Crystal',
    description: 'Pure forms, maximum impact',
    image: '/images/collections/minimal.jpg',
  },
  {
    id: 'grand',
    name: 'Grand Living Room',
    description: 'Statement pieces for expansive spaces',
    image: '/images/collections/grand.jpg',
  },
  {
    id: 'golden',
    name: 'Golden Frame',
    description: 'Luxurious gold meets radiant crystal',
    image: '/images/collections/golden.jpg',
  },
  {
    id: 'italian',
    name: 'Italian Inspired',
    description: 'Mediterranean artistry in light',
    image: '/images/collections/italian.jpg',
  },
];

export const products: Product[] = [
  {
    id: 'aurora-crystal',
    name: 'Aurora Crystal Chandelier',
    collection: 'modern',
    description: 'Modern circular design with soft white LED reflection',
    story: 'Inspired by the ethereal dance of the Northern Lights, the Aurora Crystal Chandelier captures light in motion. Each crystal has been precisely cut to create a mesmerizing play of reflections that transforms any living space into a celestial experience.',
    price: 'From 4,500 TND',
    image: '/images/products/aurora.jpg',
    gallery: ['/images/products/aurora-1.jpg', '/images/products/aurora-2.jpg', '/images/products/aurora-3.jpg'],
    specs: {
      materials: 'Premium K9 Crystal, Brushed Stainless Steel',
      crystalType: 'Hand-cut K9 Optical Crystal',
      dimensions: '80cm diameter × 45cm height',
      lightTemperature: '3000K Warm White LED',
      recommendedRoom: 'Living rooms 20-35m²',
      bulbType: 'Integrated LED (60W equivalent)',
      weight: '12 kg',
    },
    features: ['Dimmable', 'Remote Control', '5-Year Warranty', 'Energy Efficient'],
  },
  {
    id: 'imperial-gold',
    name: 'Imperial Gold Crystal',
    collection: 'golden',
    description: 'Gold frame with cascading crystal droplets',
    story: 'The Imperial Gold embodies the opulence of royal palaces. Hand-finished in 24-karat gold leaf, each piece is a testament to the artisans craft, designed to become the crowning jewel of your living room.',
    price: 'From 8,200 TND',
    image: '/images/products/imperial.jpg',
    gallery: ['/images/products/imperial-1.jpg', '/images/products/imperial-2.jpg'],
    specs: {
      materials: '24K Gold Leaf Frame, Swarovski Crystal',
      crystalType: 'Swarovski Strass Crystal',
      dimensions: '120cm diameter × 80cm height',
      lightTemperature: '2700K Warm Glow',
      recommendedRoom: 'Grand living rooms 40m²+',
      bulbType: 'E14 Candle Bulbs (12×)',
      weight: '28 kg',
    },
    features: ['Handcrafted', 'Custom Sizing Available', '10-Year Warranty'],
  },
  {
    id: 'luna-floating',
    name: 'Luna Floating Crystal Ring',
    collection: 'minimal',
    description: 'Minimalist suspended rings for contemporary interiors',
    story: 'Luna challenges convention with its gravity-defying design. Three concentric rings of precision-cut crystals appear to float in space, creating an installation that is both sculptural and luminous.',
    price: 'From 5,800 TND',
    image: '/images/products/luna.jpg',
    gallery: ['/images/products/luna-1.jpg', '/images/products/luna-2.jpg'],
    specs: {
      materials: 'Aircraft-grade Aluminum, Optical Crystal',
      crystalType: 'Precision-cut Optical Crystal',
      dimensions: '100cm × 90cm × 70cm rings',
      lightTemperature: '4000K Natural White',
      recommendedRoom: 'Modern living spaces 25-40m²',
      bulbType: 'Integrated LED Strip',
      weight: '15 kg',
    },
    features: ['Adjustable Height', 'Smart Home Compatible', 'Whisper-quiet Motor'],
  },
  {
    id: 'versailles-classic',
    name: 'Versailles Classic Crystal',
    collection: 'classic',
    description: 'Traditional luxury style with grand crystal drops',
    story: 'Named after the most opulent palace in history, Versailles brings timeless French elegance to your home. Every crystal is hand-polished to achieve the legendary sparkle that has captivated royalty for centuries.',
    price: 'From 12,500 TND',
    image: '/images/products/versailles.jpg',
    gallery: ['/images/products/versailles-1.jpg', '/images/products/versailles-2.jpg'],
    specs: {
      materials: 'Antique Bronze, Bohemian Crystal',
      crystalType: 'Bohemian Lead Crystal',
      dimensions: '150cm diameter × 120cm height',
      lightTemperature: '2700K Candlelight',
      recommendedRoom: 'Formal living rooms 50m²+',
      bulbType: 'E14 Candle (24×)',
      weight: '45 kg',
    },
    features: ['Museum Quality', 'Professional Installation Included', 'Lifetime Warranty'],
  },
  {
    id: 'nova-linear',
    name: 'Nova Linear Crystal Light',
    collection: 'modern',
    description: 'Rectangular modern chandelier for wide spaces',
    story: 'Nova redefines the chandelier with its bold linear form. Designed for contemporary living rooms, it creates a river of light that spans your space with architectural precision.',
    price: 'From 6,200 TND',
    image: '/images/products/nova.jpg',
    gallery: ['/images/products/nova-1.jpg', '/images/products/nova-2.jpg'],
    specs: {
      materials: 'Chrome Steel, Clear Crystal Prisms',
      crystalType: 'Rectangular Crystal Prisms',
      dimensions: '150cm length × 30cm width × 35cm height',
      lightTemperature: '3500K Neutral White',
      recommendedRoom: 'Open-plan living areas',
      bulbType: 'Integrated LED Bar',
      weight: '18 kg',
    },
    features: ['Dimmable', 'Low Profile', 'Easy Maintenance'],
  },
  {
    id: 'eclipse-dark',
    name: 'Eclipse Black & Crystal',
    collection: 'modern',
    description: 'Dark metal contrasted with brilliant crystals',
    story: 'Eclipse embraces the dramatic tension between shadow and light. Matte black metalwork frames clusters of brilliant crystals, creating a statement piece that commands attention.',
    price: 'From 7,400 TND',
    image: '/images/products/eclipse.jpg',
    gallery: ['/images/products/eclipse-1.jpg', '/images/products/eclipse-2.jpg'],
    specs: {
      materials: 'Matte Black Steel, Smoked & Clear Crystal',
      crystalType: 'Mixed Smoked and Clear Crystal',
      dimensions: '90cm diameter × 70cm height',
      lightTemperature: '3000K Warm White',
      recommendedRoom: 'Contemporary living rooms 25-40m²',
      bulbType: 'G9 LED (18×)',
      weight: '22 kg',
    },
    features: ['Dramatic Design', 'Adjustable Chains', 'Contemporary Aesthetic'],
  },
  {
    id: 'celeste-spiral',
    name: 'Celeste Spiral Crystal',
    collection: 'italian',
    description: 'Artistic spiral motion design as a centerpiece',
    story: 'Celeste draws inspiration from the spiral galaxies, with crystals arranged in a mesmerizing helix that seems to defy gravity. An artistic masterpiece that doubles as functional lighting.',
    price: 'From 9,800 TND',
    image: '/images/products/celeste.jpg',
    gallery: ['/images/products/celeste-1.jpg', '/images/products/celeste-2.jpg'],
    specs: {
      materials: 'Polished Nickel, Italian Crystal',
      crystalType: 'Italian Murano-style Crystal',
      dimensions: '60cm diameter × 180cm height',
      lightTemperature: '3000K Warm White',
      recommendedRoom: 'Double-height living rooms',
      bulbType: 'E14 LED (30×)',
      weight: '35 kg',
    },
    features: ['Sculptural Design', 'Hand-assembled', 'Statement Piece'],
  },
  {
    id: 'royal-crown',
    name: 'Royal Crown Crystal',
    collection: 'classic',
    description: 'Crown-shaped luxury chandelier for regal spaces',
    story: 'Inspired by the crowns of European monarchs, this chandelier transforms any room into a throne room. Its tiered design creates layers of light that cascade like a waterfall of diamonds.',
    price: 'From 15,000 TND',
    image: '/images/products/royal-crown.jpg',
    gallery: ['/images/products/royal-crown-1.jpg', '/images/products/royal-crown-2.jpg'],
    specs: {
      materials: 'Gilded Bronze, Premium Crystal',
      crystalType: 'AAA Grade Crystal Drops',
      dimensions: '130cm diameter × 100cm height',
      lightTemperature: '2700K Golden Warm',
      recommendedRoom: 'Palatial living rooms 60m²+',
      bulbType: 'E14 Candle (36×)',
      weight: '52 kg',
    },
    features: ['Royal Design', 'Multi-tier', 'Custom Gilding Options'],
  },
  {
    id: 'infinity-glow',
    name: 'Infinity Glow Crystal',
    collection: 'modern',
    description: 'Endless circular form with continuous illumination',
    story: 'The Infinity symbolizes eternal elegance. Its seamless circular design creates an unbroken ring of light, representing the endless pursuit of perfection in lighting design.',
    price: 'From 5,200 TND',
    image: '/images/products/infinity.jpg',
    gallery: ['/images/products/infinity-1.jpg', '/images/products/infinity-2.jpg'],
    specs: {
      materials: 'Brushed Gold, Crystal Beads',
      crystalType: 'Faceted Crystal Beads',
      dimensions: '80cm diameter × 15cm height',
      lightTemperature: '3500K Neutral',
      recommendedRoom: 'Modern living rooms 20-35m²',
      bulbType: 'Integrated LED Ring',
      weight: '8 kg',
    },
    features: ['Minimalist', 'Ultra-slim Profile', 'Touch Dimmer'],
  },
  {
    id: 'opera-grand',
    name: 'Opéra Living Room Crystal',
    collection: 'grand',
    description: 'High ceiling luxury model for dramatic spaces',
    story: 'Designed for spaces that demand grandeur, the Opéra descends majestically from high ceilings like a frozen cascade of light. Perfect for making an unforgettable first impression.',
    price: 'From 18,500 TND',
    image: '/images/products/opera.jpg',
    gallery: ['/images/products/opera-1.jpg', '/images/products/opera-2.jpg'],
    specs: {
      materials: 'Polished Chrome, Premium Austrian Crystal',
      crystalType: 'Austrian Precision Crystal',
      dimensions: '100cm diameter × 200cm height',
      lightTemperature: '2700K-4000K Tunable',
      recommendedRoom: 'Grand halls and foyers',
      bulbType: 'E14 LED (48×)',
      weight: '65 kg',
    },
    features: ['Tunable White', 'Dramatic Drop', 'Professional Installation'],
  },
  {
    id: 'venezia-glass',
    name: 'Venezia Glass & Crystal',
    collection: 'italian',
    description: 'Murano-inspired glass with crystal accents',
    story: 'Handcrafted by artisans trained in Venetian traditions, Venezia combines mouth-blown glass with precision-cut crystals for a chandelier that is truly one of a kind.',
    price: 'From 11,200 TND',
    image: '/images/products/venezia.jpg',
    gallery: ['/images/products/venezia-1.jpg', '/images/products/venezia-2.jpg'],
    specs: {
      materials: 'Hand-blown Glass, Venetian Crystal',
      crystalType: 'Traditional Murano Crystal',
      dimensions: '110cm diameter × 85cm height',
      lightTemperature: '2700K Warm Amber',
      recommendedRoom: 'Elegant living rooms 35-50m²',
      bulbType: 'E14 Flame (20×)',
      weight: '38 kg',
    },
    features: ['Handmade', 'Unique Pieces', 'Artisan Crafted'],
  },
  {
    id: 'diamond-cascade',
    name: 'Diamond Cascade',
    collection: 'grand',
    description: 'Cascading crystal waterfall effect',
    story: 'Diamond Cascade recreates the mesmerizing beauty of a waterfall frozen in crystal. Thousands of precision-cut elements create an ever-changing display of light and shadow.',
    price: 'From 14,800 TND',
    image: '/images/products/diamond-cascade.jpg',
    gallery: ['/images/products/diamond-cascade-1.jpg', '/images/products/diamond-cascade-2.jpg'],
    specs: {
      materials: 'Stainless Steel, Diamond-cut Crystal',
      crystalType: 'Diamond-cut Crystal Elements',
      dimensions: '70cm × 70cm × 150cm height',
      lightTemperature: '3000K Warm White',
      recommendedRoom: 'High-ceiling living rooms',
      bulbType: 'GU10 LED (12×)',
      weight: '42 kg',
    },
    features: ['Waterfall Effect', 'Thousands of Crystals', 'Showstopper Design'],
  },
];

export const getProductsByCollection = (collectionId: string) => {
  return products.filter((product) => product.collection === collectionId);
};

export const getProductById = (productId: string) => {
  return products.find((product) => product.id === productId);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 3);
};
