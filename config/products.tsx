// config/products.ts

export type ProductVariant = {
  id: string;
  label: string;
};

export type ProductCategory = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;

  description: string;
  application: string;
  precaution: string;
  features?: string[];

  images: string[];

  /** Optional — omit for tools or single-size products */
  variants?: ProductVariant[];

  /** Featured on home page */
  featured?: boolean;
};

export const categories: ProductCategory[] = [
  { id: "paints-coatings",           name: "Paints & Coatings" },
  { id: "adhesives",                 name: "Adhesives" },
  { id: "castings-general-sealants", name: "Castings & General Sealants" },
  { id: "currants",                  name: "Currants" },
  { id: "roofing-flooring-sealants", name: "Roofing & Flooring Sealants" },
  { id: "solvents-automotive",       name: "Solvents & Automotive" },
];

const cat = (id: string): ProductCategory =>
  categories.find((c) => c.id === id) ?? categories[0];

export const products: Product[] = [
  /* ---------- PAINTS & COATINGS ---------- */
  {
    id: "gloss-white",
    name: "TECHIAD Gloss White",
    category: cat("paints-coatings"),
    shortDescription: "High-gloss enamel for wood, metal, and previously painted surfaces.",
    description:
      "A high-gloss enamel paint delivering a brilliant, durable finish with superior resistance to stains, moisture, and wear. Ideal for interior and exterior woodwork, metalwork, and repainting.",
    application:
      "Apply with a brush, roller, or spray over a properly primed surface. Stir well before and during use for uniform gloss.",
    precaution:
      "Flammable. Keep away from heat and sparks. Use in a well ventilated area. Close container tightly after use and store in a cool, dry place.",
    features: ["Interior and exterior", "Stain resistant", "Fast drying", "Weather resistant"],
    images: ["https://placehold.co/800x800/e63946/ffffff?text=Gloss+White"],
    variants: [
      { id: "1l",  label: "1 Litre" },
      { id: "4l",  label: "4 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
    featured: true,
  },
  {
    id: "roof-stoep-black",
    name: "TECHIAD Roof & Stoep Black",
    category: cat("paints-coatings"),
    shortDescription: "Durable black coating for roofs, stoeps, and exterior surfaces.",
    description:
      "A heavy duty bituminous coating designed for roofs, stoep floors, and exterior surfaces exposed to harsh weather. Forms a flexible, waterproof film that resists UV and standing water.",
    application:
      "Ensure surface is clean and dry. Apply two coats with a brush or roller, allowing 4 hours between coats. Not suitable for walking surfaces without a topcoat.",
    precaution:
      "Flammable. Avoid contact with skin and eyes. Use in a well ventilated area. Keep out of reach of children.",
    features: ["Waterproof", "UV resistant", "Two coat system", "For exterior use"],
    images: ["https://placehold.co/800x800/1d3557/ffffff?text=Roof+%26+Stoep"],
    variants: [
      { id: "5l",  label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
    featured: true,
  },
  {
    id: "plaster-primer-white",
    name: "TECHIAD Plaster Primer White",
    category: cat("paints-coatings"),
    shortDescription: "Primer for new plaster, concrete, and previously unpainted surfaces.",
    description:
      "A penetrating primer that seals and prepares new plaster and concrete surfaces for topcoats. Prevents uneven absorption and improves adhesion of subsequent paint.",
    application:
      "Apply one coat with a brush, roller, or spray onto a clean, dry surface. Allow to dry for 4 to 6 hours before applying the topcoat.",
    precaution:
      "Water based. Store above 5 degrees Celsius. Do not allow to freeze. Clean tools with water immediately after use.",
    features: ["Water based", "Low odour", "Improves topcoat adhesion", "For interior and exterior"],
    images: ["https://placehold.co/800x800/457b9d/ffffff?text=Plaster+Primer"],
    variants: [
      { id: "5l",  label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "contractors-pva-white",
    name: "TECHIAD Contractors PVA White",
    category: cat("paints-coatings"),
    shortDescription: "Economical white PVA for interior walls and ceilings.",
    description:
      "A cost effective interior emulsion suitable for high volume jobs such as housing developments, rentals, and commercial interiors. Good coverage and easy application.",
    application:
      "Apply two coats with a brush or roller onto a primed surface. Allow 2 to 4 hours drying between coats.",
    precaution:
      "Water based. Do not apply below 10 degrees Celsius. Keep from freezing. Clean tools with water.",
    features: ["Interior use", "Economical", "Good coverage", "Low VOC"],
    images: ["https://placehold.co/800x800/a8dadc/222222?text=Contractors+PVA"],
    variants: [
      { id: "5l",  label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "wood-primer",
    name: "TECHIAD Wood Primer",
    category: cat("paints-coatings"),
    shortDescription: "Solvent based primer for bare wood surfaces.",
    description:
      "A solvent based primer for bare wood, sealing grain and providing a sound base for subsequent topcoats. Suitable for interior and exterior joinery.",
    application:
      "Apply one coat with a brush. Allow 6 hours to dry. Sand lightly before applying topcoat.",
    precaution:
      "Solvent based. Flammable. Use in a well ventilated area. Dispose of rags safely.",
    features: ["For bare wood", "Interior and exterior", "Sandable", "Solvent based"],
    images: ["https://placehold.co/800x800/f4a261/222222?text=Wood+Primer"],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },

  /* ---------- ADHESIVES ---------- */
  {
    id: "multi-purpose-adhesive",
    name: "TECHIAD Multi Purpose Adhesive",
    category: cat("adhesives"),
    shortDescription: "General purpose contact adhesive for wood, laminate, and rubber.",
    description:
      "A versatile contact adhesive for bonding wood, laminate, rubber, and most common building materials. Fast grabbing and strong initial tack.",
    application:
      "Apply to both surfaces and allow to become touch dry. Press surfaces firmly together. Full cure in 24 hours.",
    precaution:
      "Solvent based. Flammable. Use in a well ventilated area. Avoid skin contact.",
    features: ["Fast grabbing", "For interior use", "Strong bond", "Multi surface"],
    images: ["https://placehold.co/800x800/8d99ae/ffffff?text=Multi+Adhesive"],
    variants: [{ id: "1l", label: "1 Litre" }],
  },
  {
    id: "tile-adhesive",
    name: "TECHIAD Tile Adhesive",
    category: cat("adhesives"),
    shortDescription: "Cement based adhesive for ceramic and porcelain tiles.",
    description:
      "A cement based tile adhesive for fixing ceramic and porcelain tiles to floors and walls. Suitable for interior and exterior applications.",
    application:
      "Mix with clean water to a smooth paste. Apply with a notched trowel and press tiles firmly. Allow 24 hours before grouting.",
    precaution:
      "Contains cement. Avoid contact with eyes and prolonged skin contact. Wear gloves during mixing and application.",
    features: ["Interior and exterior", "Cement based", "For floors and walls", "Grey"],
    images: ["https://placehold.co/800x800/6d6875/ffffff?text=Tile+Adhesive"],
    variants: [
      { id: "20kg", label: "20kg Bag" },
      { id: "40kg", label: "40kg Bag" },
    ],
  },

  /* ---------- CASTINGS & GENERAL SEALANTS ---------- */
  {
    id: "silicone-sealant",
    name: "TECHIAD Silicone Sealant",
    category: cat("castings-general-sealants"),
    shortDescription: "Flexible silicone sealant for joints, gaps, and waterproofing.",
    description:
      "A flexible silicone sealant for sealing joints, gaps, and edges around baths, showers, windows, and doors. Remains flexible after curing.",
    application:
      "Ensure surfaces are clean and dry. Apply with a cartridge gun and smooth with a spatula. Skins over in 20 minutes, full cure in 24 hours.",
    precaution:
      "Acetic acid cure. Do not use on concrete, marble, or lead surfaces. Use in a well ventilated area.",
    features: ["Flexible", "Waterproof", "Mould resistant", "Interior and exterior"],
    images: ["https://placehold.co/800x800/2a9d8f/ffffff?text=Silicone+Sealant"],
  },
  {
    id: "expansion-joint-sealant",
    name: "TECHIAD Expansion Joint Sealant",
    category: cat("castings-general-sealants"),
    shortDescription: "For movement joints in concrete and paving.",
    description:
      "A high movement sealant for expansion joints in concrete slabs, paving, and retaining walls. Accommodates thermal movement without cracking.",
    application:
      "Clean joint faces. Insert backing rod and fill with sealant. Tool to a concave profile. Full cure in 7 days.",
    precaution:
      "Keep away from heat and open flame. Use in ventilated areas. Wear gloves.",
    features: ["High movement", "Weather resistant", "For concrete joints", "Paintable"],
    images: ["https://placehold.co/800x800/264653/ffffff?text=Expansion+Sealant"],
    variants: [{ id: "600ml", label: "600ml Sausage" }],
  },

  /* ---------- CURRANTS ---------- */
  {
    id: "carbolineum",
    name: "Carbolineum",
    category: cat("currants"),
    shortDescription: "Traditional wood preservative for fencing, poles, and timber.",
    description:
      "A traditional creosote based wood preservative for fencing, poles, and rough timber. Protects against rot, insects, and fungal decay.",
    application:
      "Apply by brush or dip onto clean, dry timber. Two coats recommended for exterior exposure. Not for use on surfaces in contact with food or drinking water.",
    precaution:
      "Harmful if swallowed. Avoid skin contact. Use gloves and eye protection. Store away from children and animals.",
    features: ["Protects timber", "Against rot and insects", "For exterior use", "Traditional formula"],
    images: ["https://placehold.co/800x800/3d405b/ffffff?text=Carbolineum"],
    variants: [
      { id: "5l",  label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },

  /* ---------- ROOFING & FLOORING SEALANTS ---------- */
  {
    id: "roof-waterproofing",
    name: "TECHIAD Roof Waterproofing Membrane",
    category: cat("roofing-flooring-sealants"),
    shortDescription: "Liquid applied waterproofing for flat and low pitch roofs.",
    description:
      "A liquid applied membrane for waterproofing flat and low pitch roofs, parapets, and gutters. Forms a seamless rubber like coating with excellent UV resistance.",
    application:
      "Prime the surface. Apply two coats by roller or brush, allowing 6 hours between coats. Foot traffic possible after 24 hours.",
    precaution:
      "Flammable. Keep away from heat and sparks. Use in a well ventilated area. Store in a cool place.",
    features: ["Seamless coating", "UV stable", "Elastic", "10 year protection"],
    images: ["https://placehold.co/800x800/e76f51/ffffff?text=Roof+Membrane"],
    variants: [
      { id: "5l",  label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
    featured: true,
  },
  {
    id: "floor-sealer",
    name: "TECHIAD Floor Sealer",
    category: cat("roofing-flooring-sealants"),
    shortDescription: "Clear sealer for concrete and screed floors.",
    description:
      "A clear acrylic sealer for concrete and screed floors. Reduces dusting, resists water, and provides a low sheen finish.",
    application:
      "Ensure floor is clean and dry. Apply two coats with a roller or spray. Allow 1 hour between coats.",
    precaution:
      "Water based. Do not apply below 10 degrees Celsius. Keep from freezing.",
    features: ["Clear finish", "Dust proofing", "Water resistant", "Interior use"],
    images: ["https://placehold.co/800x800/f4a261/ffffff?text=Floor+Sealer"],
    variants: [{ id: "5l", label: "5 Litres" }],
  },

  /* ---------- SOLVENTS & AUTOMOTIVE ---------- */
  {
    id: "battery-water",
    name: "Battery Water",
    category: cat("solvents-automotive"),
    shortDescription: "Deionised water for topping up lead acid batteries.",
    description:
      "Deionised water suitable for topping up lead acid batteries in vehicles, forklifts, and standby power systems. Free from minerals that shorten battery life.",
    application:
      "Top up each cell to the indicated level. Do not overfill. Replace caps firmly after use.",
    precaution:
      "Not for drinking. Keep away from children. Store in a cool place away from direct sunlight.",
    features: ["Deionised", "For lead acid batteries", "5 Litre and 1 Litre", "Multi use"],
    images: ["https://placehold.co/800x800/457b9d/ffffff?text=Battery+Water"],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "lacquer-thinners",
    name: "Lacquer Thinners",
    category: cat("solvents-automotive"),
    shortDescription: "General purpose thinners for lacquer and automotive paints.",
    description:
      "A general purpose thinner for lacquer, enamel, and automotive paints. Controls drying time and improves flow for spray applications.",
    application:
      "Add to paint in small quantities until desired consistency is reached. Stir thoroughly before spraying.",
    precaution:
      "Highly flammable. Use in a well ventilated area away from open flames. Wear protective gloves and eyewear.",
    features: ["General purpose", "For spray applications", "Fast evaporating", "5L and 1L"],
    images: ["https://placehold.co/800x800/e63946/ffffff?text=Thinners"],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
    featured: true,
  },
  {
    id: "paint-brush-set",
    name: "Paint Brush Set",
    category: cat("solvents-automotive"),
    shortDescription: "Set of three paint brushes for general painting.",
    description:
      "A set of three brushes in 25mm, 50mm, and 75mm widths. Suitable for general painting with water and solvent based paints.",
    application:
      "Use with any paint. Clean with water for water based products, or thinners for solvent based.",
    precaution:
      "Clean thoroughly after use. Store brushes flat or hanging.",
    features: ["Three sizes", "For water and oil based paints", "Wooden handles", "Reusable"],
    images: ["https://placehold.co/800x800/2a9d8f/ffffff?text=Brush+Set"],
  },
  {
    id: "paint-roller-set",
    name: "Paint Roller Set",
    category: cat("solvents-automotive"),
    shortDescription: "Roller and tray set for walls and ceilings.",
    description:
      "A complete roller set with a 230mm roller, extension pole attachment, and paint tray. Suitable for all standard interior and exterior paints.",
    application:
      "Load roller with paint and apply in a W pattern to prevent lines. Use the tray to remove excess paint.",
    precaution:
      "Wash thoroughly after use. Allow to dry before storing.",
    features: ["230mm roller", "Includes tray", "Extension pole attachment", "For walls and ceilings"],
    images: ["https://placehold.co/800x800/264653/ffffff?text=Roller+Set"],
  },
];

/** Convenience: featured products, used by the home page */
export const featuredProducts = products.filter((p) => p.featured);

/** Convenience: lookup by id, used by the detail page */
export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);