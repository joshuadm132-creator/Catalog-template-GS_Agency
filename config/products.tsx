// config/products.ts

export type ProductVariant = {
  id: string;
  label: string;
};

export type ProductCategory = {
  id: string;
  name: string;
};

export type ProductGalleryImage = {
  src: string;
  /** Optional caption shown under the image */
  caption?: string;
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

  /** Optional — real-life photos of the product in use */
  gallery?: ProductGalleryImage[];

  /** Featured on home page */
  featured?: boolean;
};

export const categories: ProductCategory[] = [
  { id: "paints-coatings", name: "Paints & Coatings" },
  { id: "adhesives", name: "Adhesives" },
  { id: "castings-general-sealants", name: "Castings & General Sealants" },
  { id: "currants", name: "Currants" }, // NOTE: kept original id/name; brochure labels this "Timber Protection"
  { id: "roofing-flooring-sealants", name: "Roofing & Flooring Sealants" },
  { id: "solvents-automotive", name: "Solvents & Automotive" },
  { id: "concrete-additives", name: "Concrete Additives" },
  { id: "waterproofing", name: "Waterproofing Solutions" },
  { id: "epoxy-solutions", name: "Epoxy Solutions" },
  { id: "electrical", name: "Electrical Components" },
  { id: "solar", name: "Solar Lighting & Power" },
  { id: "building-materials", name: "Building Materials" },
  { id: "hardware", name: "General Hardware" },
];

const cat = (id: string): ProductCategory =>
  categories.find((c) => c.id === id) ?? categories[0];

export const products: Product[] = [
  /* ---------- PAINTS & COATINGS ---------- */
  {
    id: "acrylic-brick-dressing",
    name: "TECHIAD Acrylic Brick Dressing",
    category: cat("paints-coatings"),
    shortDescription:
      "Protects and beautifies face bricks against weathering, dust and moisture.",
    description:
      "Used for painting and protecting face bricks from weathering, dust and moisture. Enhances appearance and extends the life of your brickwork.",
    application:
      "Apply to clean, dry face brick with a brush or roller. Two coats recommended.",
    precaution:
      "Water based. [TEMP: confirm full precaution text from label — store above 5°C, do not freeze, clean tools with water].",
    features: [
      "Protects face bricks",
      "Weather resistant",
      "Dust and moisture resistant",
      "Enhances appearance",
    ],
    featured:true,
    images: [
      "https://placehold.co/800x800/9c6644/ffffff?text=Acrylic+Brick+Dressing",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Brick-Dressing-Paints-Coatings.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "aluminium-silver-paint",
    name: "TECHIAD Aluminium Silver Paint",
    category: cat("paints-coatings"),
    shortDescription:
      "Silver aluminium paint for metal and industrial surfaces.",
    description:
      "[TEMP: Full description — aluminium/silver paint for protecting and finishing metal and industrial surfaces, heat reflective finish].",
    application:
      "Apply with brush, roller or spray over a primed surface. Stir well before use.",
    precaution:
      "Solvent based, flammable. Use in a well ventilated area away from heat and sparks.",
    features: [
      "Silver finish",
      "For metal surfaces",
      "[TEMP: confirm VOC/heat resistance]",
    ],
    images: [
      "https://placehold.co/800x800/b0b0b0/222222?text=Aluminium+Silver",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "anti-corrosive-paint",
    name: "TECHIAD Anti-Corrosive Paint",
    category: cat("paints-coatings"),
    shortDescription:
      "Anti-corrosive paint in black or grey for steel and metal structures.",
    description:
      "Protective anti-corrosive paint for steel and metal structures, available in black or grey.",
    application:
      "Apply to a clean, prepared metal surface by brush, roller or spray. Two coats recommended.",
    precaution:
      "Solvent based, flammable. Use in a well ventilated area. Avoid skin and eye contact.",
    features: [
      "Black or grey",
      "For steel and metal",
      "Corrosion protection",
      "[TEMP: confirm dry times]",
    ],
    images: [
      "https://placehold.co/800x800/333333/ffffff?text=Anti-Corrosive+Paint",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "black-bitumen-paint",
    name: "TECHIAD Black Bitumen Paint",
    category: cat("paints-coatings"),
    shortDescription:
      "Waterproofing black bitumen paint that protects against rust and moisture.",
    description:
      "Techiad Bitumen Paint is a black, solvent-based protective coating designed for waterproofing and corrosion resistance. It forms a tough, flexible film ideal for metal, concrete, and roofing applications.",
    application:
      "Apply with a brush, roller, or spray on clean, dry surfaces. Commonly used for pipes, gutters, tanks, roofing sheets, and foundations.",
    precaution:
      "Flammable—keep away from fire and sparks. Use gloves and respiratory protection. Store tightly closed in a cool, dry place away from sunlight.",
    features: [
      "Waterproofing and corrosion resistance",
      "Forms a tough, flexible film",
      "Ideal for metal, concrete, and roofing applications",
      "Black finish",
    ],
    images: [
      "https://placehold.co/800x800/1a1a1a/ffffff?text=Black+Bitumen+Paint",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Bitumen-Paint-Paints-Coatings.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "clear-epoxy-paint",
    name: "TECHIAD Clear Epoxy Paint",
    category: cat("paints-coatings"),
    shortDescription:
      "Bacteria-proof, seamless clear epoxy coating for industrial walls and floors.",
    description:
      "Hard, non-porous and seamless clear epoxy paint that is bacteria resistant and easy to clean. Ideal for warehouses, factories and industrial walls where hygiene and durability are important.",
    application:
      "Apply to a clean, prepared and primed surface. Mix per label ratio and apply within the pot life.",
    precaution:
      "Two-pack product — wear gloves and eye protection. Use in a well ventilated area. [TEMP: confirm pot life and overcoat times].",
    features: [
      "Bacteria resistant",
      "Hard, non-porous and seamless",
      "Easy to clean",
      "For warehouses and factories",
    ],
    featured:true,
    images: [
      "https://placehold.co/800x800/cdd9de/222222?text=Clear+Epoxy+Paint",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "techcoat",
    name: "TECHIAD Techcoat",
    category: cat("paints-coatings"),
    shortDescription:
      "One-component PU product for waterproofing, insulation and a durable finish on wooden floors.",
    description:
      "A one-component PU based product. Provides waterproofing, insulation and a durable finish for wooden floors and other surfaces.",
    application:
      "Apply to a clean, dry surface by brush or roller. [TEMP: confirm coats and drying times from label].",
    precaution:
      "PU product — avoid skin contact. Use in a well ventilated area. [TEMP: confirm hazard statement].",
    features: [
      "Waterproofing",
      "Insulating",
      "Durable finish",
      "For wooden floors",
    ],
    images: ["https://placehold.co/800x800/8d6e63/ffffff?text=Techcoat"],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "decorative-paints-primers",
    name: "TECHIAD Decorative Paints (PVA & Gloss) & Primers",
    category: cat("paints-coatings"),
    shortDescription:
      "Interior and exterior PVA and gloss paints, primers and undercoats.",
    description:
      "Decorative paints including PVA and gloss, plus primers and undercoats, for interior and exterior decoration. Washable, durable and weather resistant.",
    application:
      "Apply with a brush, roller or spray over a properly prepared surface. Use the matching primer for best results.",
    precaution:
      "Water based PVA / solvent based gloss. Follow the label for the specific product. [TEMP: split into individual SKUs if needed].",
    features: [
      "Interior and exterior",
      "Washable and durable",
      "Weather resistant",
      "Primers and undercoats available",
    ],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Decorative+Paints",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "contractor-paint",
    name: "TECHIAD Contractor Paint",
    category: cat("paints-coatings"),
    shortDescription:
      "Economical contractor paint for high-volume interior and exterior jobs.",
    description:
      "Cost effective contractor paint suitable for high volume jobs such as housing developments, rentals and commercial interiors. Good coverage and easy application.",
    application:
      "Apply two coats with a brush or roller onto a primed surface. Allow 2 to 4 hours drying between coats.",
    precaution:
      "Water based. Do not apply below 10 degrees Celsius. Keep from freezing. Clean tools with water.",
    features: [
      "Interior and exterior",
      "Economical",
      "Good coverage",
      "Low VOC",
    ],
    images: [
      "https://placehold.co/800x800/a8dadc/222222?text=Contractor+Paint",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "ceiling-white",
    name: "Ceiling White",
    category: cat("paints-coatings"),
    shortDescription: "Bright, non-drip paint for interior ceilings.",
    description:
      "Ceiling White is a bright, non-drip paint formulated to provide a clean, smooth, and reflective finish for interior ceilings. It offers excellent coverage and hides imperfections effortlessly.",
    application:
      "Apply evenly with a roller or brush on clean, dry ceilings. Two coats are recommended for a perfect finish.",
    precaution:
      "Ensure good ventilation during application. Avoid contact with eyes and skin. Store in a cool, dry place and protect from freezing.",
    features: [
      "Bright, non-drip formula",
      "Clean, smooth, and reflective finish",
      "Excellent coverage",
      "Hides imperfections effortlessly",
    ],
    images: [
      "https://placehold.co/800x800/eeeeee/222222?text=Ceiling+White",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Ceiling-White-Paints.webp",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "roof-stoep",
    name: "TECHIAD Roof and Stoep",
    category: cat("paints-coatings"),
    shortDescription:
      "Durable coating for roofs, stoeps and exterior surfaces.",
    description:
      "Roof & Stoep Black is a tough, weather-resistant coating formulated to protect and beautify roofs, driveways, and stoops. It provides a deep, rich black finish that withstands harsh sunlight, rain, and foot traffic.",
    application:
      "Apply on clean, dry concrete or roof surfaces using a brush or roller. Allow each coat to dry completely before applying the next.",
    precaution:
      "Do not apply during wet conditions. Keep away from open flames. Store sealed and out of direct sunlight.",
    features: [
      "Tough, weather-resistant coating",
      "Protects and beautifies roofs, driveways, and stoops",
      "Deep, rich black finish",
      "Withstands harsh sunlight, rain, and foot traffic",
    ],
    
    images: [
      "https://placehold.co/800x800/1d3557/ffffff?text=Roof+and+Stoep",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Roof-Stoep-Balck-Paints.webp",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
    featured: true,
  },
  {
    id: "clear-brick-dressing",
    name: "TECHIAD Clear Brick Dressing",
    category: cat("paints-coatings"),
    shortDescription:
      "Clear coating that protects face bricks while keeping their natural look.",
    description:
      "Used for painting and protecting face bricks from weathering, dust and moisture while preserving the natural brick appearance. Enhances appearance and extends the life of your brickwork.",
    application:
      "Apply to clean, dry face brick with a brush or roller. Two coats recommended.",
    precaution:
      "Solvent based, flammable. Use in a well ventilated area. [TEMP: confirm precaution from label].",
    features: [
      "Clear finish",
      "Protects face bricks",
      "Weather resistant",
      "Dust and moisture resistant",
    ],
    featured:true,
    images: [
      "https://placehold.co/800x800/c97b63/ffffff?text=Clear+Brick+Dressing",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Brick-Dressing-Paints-Coatings.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "clear-varnish",
    name: "Clear Varnish",
    category: cat("paints-coatings"),
    shortDescription: "Transparent protective coating for natural wood.",
    description:
      "Techaid Clear Varnish is a premium; transparent protective coating designed to enhance and preserve the natural beauty of wood. It provides a glossy, durable finish that resists moisture, stains, and UV damage.",
    application:
      "Apply to clean, dry, and sanded wooden surfaces using a brush or spray. Allow each coat to dry completely before applying the next. Ideal for furniture, doors, and interior woodwork.",
    precaution:
      "Use in a well-ventilated area. Keep away from flames or sparks. Avoid inhalation and skin contact. Seal tightly after use and store in a cool, dry place.",
    features: [
      "Transparent protective coating",
      "Enhances and preserves natural wood beauty",
      "Glossy, durable finish",
      "Resists moisture, stains, and UV damage",
    ],
    images: [
      "https://placehold.co/800x800/8d6e63/ffffff?text=Clear+Varnish",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Clear-Vanish-Paints-Coatings.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "wood-varnish",
    name: "TECHIAD Wood Varnish",
    category: cat("paints-coatings"),
    shortDescription: "Durable, high-gloss wood varnish.",
    description:
      "Durable and high-gloss wood varnish that provides a protective finish for wooden surfaces. [TEMP: confirm exact wording from label].",
    application:
      "Apply to clean, prepared wood with a brush. [TEMP: confirm coats and drying times].",
    precaution:
      "Solvent based, flammable. Use in a well ventilated area. Dispose of rags safely.",
    features: [
      "Durable",
      "High-gloss",
      "For wood",
      "[TEMP: confirm UV resistance]",
    ],
    images: ["https://placehold.co/800x800/6d4c41/ffffff?text=Wood+Varnish"],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "pink-wood-primer",
    name: "Pinkwood Primer",
    category: cat("paints-coatings"),
    shortDescription: "Fast-drying, oil-based primer for wood surfaces.",
    description:
      "Pinkwood Primer is a fast-drying, oil-based primer specially formulated for wood surfaces. It seals pores, improves adhesion, and provides an even base for finishing coats.",
    application:
      "Stir well before use. Apply evenly to clean, dry wood using a brush or roller. Once dry, lightly sand for a smooth finish before applying topcoat. Perfect for doors, frames, and joinery.",
    precaution:
      "Avoid open flames and sparks. Do not apply in damp conditions. Use gloves and adequate ventilation. Store in a cool, dry area away from direct sunlight.",
    features: [
      "Fast-drying, oil-based formula",
      "Seals pores and improves adhesion",
      "Provides an even base for finishing coats",
      "Perfect for doors, frames, and joinery",
    ],
    images: [
      "https://placehold.co/800x800/f4a6b8/222222?text=Pink+Wood+Primer",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Pinkwood-Primer-Paints-Coatings.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "universal-undercoat",
    name: "Universal Undercoat",
    category: cat("paints-coatings"),
    shortDescription:
      "Versatile, high-opacity intermediate coating for enhanced adhesion.",
    description:
      "Techiad Universal Undercoat is a versatile, high-opacity intermediate coating that enhances adhesion and color uniformity between primer and topcoat. It levels surfaces and improves the durability of the final finish.",
    application:
      "Apply by brush, roller, or spray onto primed, clean, and dry surfaces. Ideal for use under both oil-based and enamel topcoats on wood, metal, and plaster.",
    precaution:
      "Avoid application in high humidity or direct sunlight. Ensure adequate ventilation. Keep tightly sealed when not in use.",
    features: [
      "High-opacity intermediate coating",
      "Enhances adhesion and color uniformity",
      "Levels surfaces",
      "Improves final finish durability",
    ],
    images: [
      "https://placehold.co/800x800/b0b0b0/222222?text=Universal+Undercoat",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Universal-Undercoat-Paints-Coatings.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "express-acrylic-pva",
    name: "TECHIAD Express Acrylic PVA",
    category: cat("paints-coatings"),
    shortDescription: "White interior/exterior acrylic PVA emulsion.",
    description:
      "Acrylic PVA is a high-quality, water-based emulsion paint formulated for superior coverage and long-lasting color retention. It delivers a smooth, matte finish that’s easy to apply and ideal for both interior and exterior surfaces.",
    application:
      "Stir thoroughly before use. Apply with a roller, brush, or spray onto clean, dry, and primed surfaces. Suitable for plaster, brick, concrete, and ceilings.",
    precaution:
      "Avoid application on damp surfaces. Store sealed and protected from frost or direct sunlight. Wash tools with clean water after use.",
    features: [
      "High-quality water-based emulsion",
      "Superior coverage and color retention",
      "Smooth, matte finish",
      "Ideal for interior and exterior surfaces",
    ],
    featured:true,
    images: [
      "https://placehold.co/800x800/eeeeee/222222?text=Express+Acrylic+PVA",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Acrylic-PVA-Paints.webp",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "washable-emulsion",
    name: "Super Washable White Emulsion",
    category: cat("paints-coatings"),
    shortDescription: "Washable interior emulsion for walls and ceilings.",
    description:
      "Super Washable White Emulsion is a premium interior paint designed for high-traffic areas. Its tough, scrubbable film resists stains and allows easy cleaning without losing color or sheen.",
    application:
      "Apply using a roller or brush on properly prepared surfaces. Ideal for kitchens, offices, schools, and hallways.",
    precaution:
      "Do not apply on wet or contaminated surfaces. Keep tightly closed when not in use. Clean tools immediately after use with water.",
    features: [
      "Premium interior paint for high-traffic areas",
      "Tough, scrubbable film resists stains",
      "Allows easy cleaning without losing color/sheen",
      "Ideal for kitchens, offices, schools, and hallways",
    ],
    images: [
      "https://placehold.co/800x800/cdd9de/222222?text=Washable+Emulsion",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Super-Washable-White-Emulsion-Paints.webp",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "plaster-primer-white",
    name: "Plaster Primer White",
    category: cat("paints-coatings"),
    shortDescription:
      "High-performance sealer that stabilizes and prepares new plaster or cement.",
    description:
      "Plaster Primer White is a high-performance sealer that stabilizes and prepares new plaster, cement, or porous surfaces for painting. It promotes strong adhesion and prevents uneven absorption of topcoats.",
    application:
      "Apply by brush or roller onto clean, dry, and dust-free surfaces. Allow to dry thoroughly before over coating.",
    precaution:
      "Ensure adequate ventilation during application. Avoid direct contact with skin and eyes. Keep sealed and store in a cool place.",
    features: [
      "High-performance sealer",
      "Stabilizes and prepares new plaster or cement",
      "Promotes strong adhesion",
      "Prevents uneven absorption of topcoats",
    ],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Plaster+Primer",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Plaster-Primer-White-Paints.webp",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "contractors-pva-white",
    name: "Contractors PVA White",
    category: cat("paints-coatings"),
    shortDescription:
      "Economical, general-purpose emulsion paint for interior walls and ceilings.",
    description:
      "Contractors PVA White is an economical, general-purpose emulsion paint for interior walls and ceilings. It offers good coverage and a uniform matte finish, making it ideal for large-scale construction and maintenance projects.",
    application:
      "Stir well and apply with a brush, roller, or spray on clean, dry surfaces. For best results, apply two coats.",
    precaution:
      "Avoid application in extreme temperatures. Store sealed in a cool, shaded area. Wash equipment with water after use.",
    features: [
      "Economical, general-purpose emulsion",
      "Good coverage and uniform matte finish",
      "Ideal for large-scale projects",
      "Interior walls and ceilings",
    ],
    images: [
      "https://placehold.co/800x800/a8dadc/222222?text=Contractors+PVA",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Contractors-PVA-White-Paints.webp",
    ],
    variants: [
      { id: "5l", label: "5 Litres" },
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
    features: [
      "For bare wood",
      "Interior and exterior",
      "Sandable",
      "Solvent based",
    ],
    images: ["https://placehold.co/800x800/f4a261/222222?text=Wood+Primer"],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },

  /* ---------- ADHESIVES ---------- */
  {
    id: "contact-adhesive",
    name: "TECHIAD Super Contact Adhesive",
    category: cat("adhesives"),
    shortDescription:
      "General purpose contact adhesive that bonds many surfaces.",
    description:
      "A versatile contact adhesive for bonding wood, laminate, rubber and most common building materials. Fast grabbing and strong initial tack.",
    application:
      "Apply to both surfaces and allow to become touch dry. Press surfaces firmly together. Full cure in 24 hours.",
    precaution:
      "Solvent based. Flammable. Use in a well ventilated area. Avoid skin contact.",
    features: [
      "Fast grabbing",
      "For interior use",
      "Strong bond",
      "Bonds many surfaces",
    ],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Contact+Adhesive",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "epoxy-adhesive-putty",
    name: "TECHIAD Epoxy Adhesive Putty",
    category: cat("adhesives"),
    shortDescription:
      "Two-part epoxy putty for filling, bonding and repairing.",
    description:
      "[TEMP: Full description — hand-mixable epoxy putty for filling, bonding and rebuilding metal, wood, concrete and plastic].",
    application:
      "Knead equal parts until uniform, apply within the working time and allow to cure.",
    precaution:
      "Wear gloves. Avoid skin and eye contact. Use in a well ventilated area.",
    features: [
      "Two-part putty",
      "Multi-surface",
      "Sculptable",
      "[TEMP: confirm cure time]",
    ],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Epoxy+Adhesive+Putty",
    ],
  },
  {
    id: "epoxy-filled-adhesive",
    name: "TECHIAD Epoxy Filled Adhesive",
    category: cat("adhesives"),
    shortDescription: "Epoxy adhesive with filler for gap filling and bonding.",
    description:
      "[TEMP: Full description — filled epoxy adhesive for bonding and gap filling on metal, concrete, ceramic and wood].",
    application:
      "Mix per label ratio, apply to prepared surfaces and allow to cure.",
    precaution:
      "Two-pack product — wear gloves and eye protection. Use in a well ventilated area.",
    features: ["Gap filling", "Multi-surface", "[TEMP: confirm cure time]"],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Epoxy+Filled+Adhesive",
    ],
  },
  {
    id: "epoxy-liquid-industrial-adhesive",
    name: "TECHIAD Epoxy Liquid and Industrial Adhesive",
    category: cat("adhesives"),
    shortDescription:
      "Liquid epoxy adhesive for industrial bonding applications.",
    description:
      "[TEMP: Full description — liquid epoxy adhesive for industrial bonding of metals, concrete and composites].",
    application:
      "Mix per label ratio, apply to prepared surfaces and allow to cure.",
    precaution:
      "Two-pack product — wear gloves and eye protection. Use in a well ventilated area.",
    features: ["Liquid epoxy", "Industrial use", "[TEMP: confirm cure time]"],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Epoxy+Liquid+Adhesive",
    ],
  },
  {
    id: "epoxy-non-slump-adhesive",
    name: "Epoxy Non-Slump",
    category: cat("adhesives"),
    shortDescription:
      "Thixotropic epoxy adhesive formulated for vertical and overhead bonding without sagging.",
    description:
      "Techaid Epoxy Non-Slump is a high-performance, thixotropic epoxy adhesive formulated for vertical and overhead bonding without sagging. It provides excellent adhesion to concrete, steel, ceramics, and composites.",
    application:
      "Mix resin and hardener in the specified ratio until uniform. Apply directly to prepared surfaces. Suitable for structural bonding, anchor grouting, and surface repairs where flow control is essential.",
    precaution:
      "Use protective gloves and eyewear. Do not apply in damp conditions. Keep containers tightly sealed and away from heat or open flames.",
    features: [
      "Thixotropic formula",
      "Vertical and overhead bonding without sagging",
      "Excellent adhesion to concrete, steel, ceramics",
      "Ideal for structural bonding and anchor grouting",
    ],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Epoxy+Non-Slump",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Epoxy-Non-Slump-Adhesive.webp",
    ],
  },
  {
    id: "epoxy-plastic-steel-adhesive",
    name: "TECHIAD Epoxy Plastic Steel Adhesive",
    category: cat("adhesives"),
    shortDescription:
      "Steel-filled epoxy adhesive for repairing and rebuilding metal.",
    description:
      "[TEMP: Full description — steel-filled epoxy for repairing, rebuilding and bonding metal surfaces].",
    application:
      "Mix per label ratio, apply to prepared metal and allow to cure.",
    precaution:
      "Two-pack product — wear gloves and eye protection. Use in a well ventilated area.",
    features: ["Steel filled", "For metal repair", "[TEMP: confirm cure time]"],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Epoxy+Plastic+Steel",
    ],
  },
  {
    id: "epoxy-structural-adhesive",
    name: "TECHIAD Epoxy Structural Adhesive",
    category: cat("adhesives"),
    shortDescription:
      "Bonds and prevents cold joints between old and new concrete.",
    description:
      "Used in civil engineering to prevent cold joints by bonding old concrete with new concrete. Also used for bonding wood, metal and ceramic.",
    application:
      "Mix per label ratio, apply to prepared surfaces and allow to cure. For cold joints, apply between old and new concrete pours.",
    precaution:
      "Two-pack product — wear gloves and eye protection. Use in a well ventilated area.",
    features: [
      "Prevents cold joints",
      "Bonds old to new concrete",
      "For wood, metal and ceramic",
      "Structural grade",
    ],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Epoxy+Structural",
    ],
  },
  {
    id: "paper-glue",
    name: "TECHIAD Paper Glue",
    category: cat("adhesives"),
    shortDescription: "General purpose paper glue.",
    description:
      "[TEMP: Full description — paper glue for bonding paper and light card in packaging, labelling and general use].",
    application:
      "Apply a thin, even layer to one surface and press together. [TEMP: confirm drying time].",
    precaution:
      "Water based. Keep from freezing. [TEMP: confirm full precaution].",
    features: ["For paper", "General purpose", "[TEMP: confirm sizes]"],
    images: ["https://placehold.co/800x800/eeeeee/222222?text=Paper+Glue"],
  },
  {
    id: "pu-adhesive",
    name: "TECHIAD P.U Adhesive",
    category: cat("adhesives"),
    shortDescription: "Polyurethane adhesive for demanding bonding jobs.",
    description:
      "[TEMP: Full description — PU adhesive for bonding wood, metal, plastics and composites, with good water resistance].",
    application:
      "Apply to a clean, dry surface and clamp or press until cured. [TEMP: confirm open time].",
    precaution:
      "PU product — avoid skin contact. Use in a well ventilated area.",
    features: [
      "Polyurethane",
      "Water resistant",
      "Multi-surface",
      "[TEMP: confirm open time]",
    ],
    images: ["https://placehold.co/800x800/8d99ae/ffffff?text=PU+Adhesive"],
  },
  {
    id: "clear-solvent-cement",
    name: "Solvent Cement",
    category: cat("adhesives"),
    shortDescription:
      "Fast-setting adhesive for joining PVC, CPVC, and uPVC pipes and fittings.",
    description:
      "Techaid Solvent Cement is a fast-setting adhesive formulated for joining PVC, CPVC, and uPVC pipes and fittings. It delivers a strong, watertight bond that resists pressure, leaks, and harsh environmental conditions.",
    application:
      "Apply a uniform coat to both the pipe and fitting surfaces, then assemble immediately with a slight twist for even distribution. Hold in position for a few seconds until set. Ideal for plumbing, irrigation, and industrial piping systems.",
    precaution:
      "Use in well-ventilated areas. Avoid skin or eye contact. Keep away from open flames and heat sources. Store tightly closed in a cool, dry place.",
    features: [
      "Fast-setting formula",
      "Joins PVC, CPVC, and uPVC pipes and fittings",
      "Strong, watertight bond",
      "Resists pressure, leaks, and harsh environments",
    ],
    images: [
      "https://placehold.co/800x800/cdd9de/222222?text=Clear+Solvent+Cement",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Solvent-Cement-Adhesive.webp",
    ],
    variants: [
      { id: "250ml", label: "250ml" },
      { id: "500ml", label: "500ml" },
    ],
  },
  {
    id: "blue-solvent-cement",
    name: "TECHIAD Blue Solvent Cement (Quick Setting)",
    category: cat("adhesives"),
    shortDescription:
      "Quick-setting one-component adhesive for PVC pipes, leaks, sockets and fittings.",
    description:
      "Quick setting one-component adhesive for PVC pipes, leaks, sockets and fittings. [TEMP: confirm exact label wording].",
    application:
      "Apply an even coat to both surfaces, assemble immediately and hold until set.",
    precaution:
      "Solvent based, flammable. Use in a well ventilated area. Avoid skin contact.",
    features: [
      "Quick setting",
      "One-component",
      "For PVC pipes and fittings",
      "Blue",
    ],
    featured:true,
    images: [
      "https://placehold.co/800x800/2b6cb0/ffffff?text=Blue+Solvent+Cement",
    ],
    variants: [
      { id: "250ml", label: "250ml" },
      { id: "500ml", label: "500ml" },
    ],
  },
  {
    id: "wood-bond",
    name: "Wood Bond",
    category: cat("adhesives"),
    shortDescription: "High-strength, synthetic resin adhesive designed for wood.",
    description:
      "Wood Bond is a high-strength, synthetic resin adhesive designed for wood-to-wood and wood-to-laminate bonding. It dries to a tough, clear film that is resistant to heat and humidity.",
    application:
      "Apply evenly on both surfaces, press firmly, and allow adequate curing time. Suitable for furniture assembly, cabinetry, and interior fittings.",
    precaution:
      "Do not dilute. Avoid prolonged skin contact. Keep sealed when not in use and store away from direct sunlight and moisture.",
    features: [
      "High-strength synthetic resin",
      "Wood-to-wood and wood-to-laminate bonding",
      "Dries to a tough, clear film",
      "Resistant to heat and humidity",
    ],
    images: [
      "https://placehold.co/800x800/8d6e63/ffffff?text=Wood+Bond",
    ],
    variants: [
      { id: "250g", label: "250g" },
      { id: "500g", label: "500g" },
    ],
  },
  {
    id: "wood-n-tile-adhesive",
    name: "TECHIAD Wood 'n' Tile Adhesive",
    category: cat("adhesives"),
    shortDescription:
      "Adhesive for bonding wood and tile — coverage ~1kg per 2.5m².",
    description:
      "Wood 'n' tile adhesive for bonding wood and tile. Coverage approx. 1kg per 2.5m². Setting time 30 minutes, bonding time 24 hours. [TEMP: confirm full label wording].",
    application:
      "Apply with a notched trowel. Setting time 30 minutes, bonding time 24 hours.",
    precaution: "Water based. Keep from freezing. Clean tools with water.",
    features: [
      "For wood and tile",
      "Coverage ~1kg/2.5m²",
      "Setting time 30 min",
      "Bonding time 24 hrs",
    ],
    images: ["https://placehold.co/800x800/8d6e63/ffffff?text=Wood+n+Tile"],
    variants: [
      { id: "1kg", label: "1kg" },
      { id: "5kg", label: "5kg" },
    ],
  },
  {
    id: "window-putty",
    name: "Window Putty",
    category: cat("adhesives"),
    shortDescription:
      "Smooth, oil-based sealing compound for fixing glass panes.",
    description:
      "Techaid Window Putty is a smooth, oil-based sealing compound formulated for fixing glass panes into wooden or metal window frames. It offers superior adhesion, long-lasting flexibility, and weather resistance.",
    application:
      "Ensure surfaces are clean and dry. Apply the putty evenly and press the glass firmly into position. Smooth with a putty knife for a neat finish. Allow sufficient curing before painting.",
    precaution:
      "Avoid excessive handling during curing. Store in an airtight container to prevent drying out. Keep out of reach of children.",
    features: [
      "Smooth, oil-based sealing compound",
      "Fixing glass panes into wooden/metal frames",
      "Superior adhesion",
      "Long-lasting flexibility and weather resistance",
    ],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Window+Putty",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Window-Putty-Adhesive.webp",
    ],
    variants: [{ id: "1kg", label: "1kg" }],
  },
  {
    id: "tech-13-epoxy-putty",
    name: "Tech 13 Epoxy Putty",
    category: cat("adhesives"),
    shortDescription:
      "Two-part, hand-kneadable compound for rapid repair and bonding.",
    description:
      "Tech 13 Epoxy Putty is a two-part, hand-kneadable compound engineered for rapid repair, sealing, and bonding of metal, wood, concrete, and plastic surfaces. It hardens into a steel-like finish that can be drilled, sanded, or painted.",
    application:
      "Cut equal portions of resin and hardener, mix thoroughly until uniform in color, and apply to the surface. Sets within minutes and cures fully in 24 hours.",
    precaution:
      "Wear gloves during mixing. Avoid skin and eye contact. Store in a cool, dry environment. Dispose of unused material according to local regulations.",
    features: [
      "Two-part hand-kneadable compound",
      "Rapid repair, sealing, and bonding",
      "Hardens into a steel-like finish",
      "Can be drilled, sanded, or painted",
    ],
    images: [
      "https://placehold.co/800x800/8d99ae/ffffff?text=Tech+13+Epoxy+Putty",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Tech-13-Expoxy-Putty-Adhesive.webp",
    ],
  },

  /* ---------- CASTINGS & GENERAL SEALANTS ---------- */
  {
    id: "autocote-sealer",
    name: "TECHIAD Autocote Sealer",
    category: cat("castings-general-sealants"),
    shortDescription: "Protective coating and sealer.",
    description:
      "[TEMP: Full description — autocote sealer for automotive and general protective sealing applications].",
    application: "Apply per label instructions. [TEMP: confirm application].",
    precaution: "Flammable. Use in a well ventilated area.",
    features: ["Protective sealer", "[TEMP: confirm features]"],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Autocote+Sealer",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "plumbers-thread-sealer",
    name: "Plumbers Thread Sealer",
    category: cat("castings-general-sealants"),
    shortDescription:
      "Non-hardening compound for sealing threaded joints in metal and plastic pipes.",
    description:
      "Techaid Plumbers Thread Sealer is a high-performance, non-hardening compound formulated for sealing threaded joints in metal and plastic pipes. It provides a reliable, leak-proof seal resistant to water, oil, gas, and most chemicals.",
    application:
      "Apply evenly on male threads before assembly. Tighten joints as required for a firm seal. Suitable for plumbing, air, hydraulic, and gas line installations.",
    precaution:
      "Use only on clean, dry threads. Avoid excessive application. Do not use on oxygen lines. Store tightly closed in a cool, ventilated place and keep out of reach of children.",
    features: [
      "Non-hardening compound",
      "Sealing threaded joints in metal/plastic pipes",
      "Reliable, leak-proof seal",
      "Resistant to water, oil, gas, and chemicals",
    ],
    featured:true,
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Plumbers+Thread+Sealer",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Plumbers-Thread-Sealer-Castings-General-Sealants.webp",
    ],
  },
  {
    id: "crusher-backing-compound",
    name: "Crusher Backing Compound",
    category: cat("castings-general-sealants"),
    shortDescription:
      "Tough, two-component epoxy system designed to back and reinforce heavy-duty crushers.",
    description:
      "Crusher Backing Compound is a tough, two-component epoxy system designed to back and reinforce heavy-duty crushers and mills. It forms a strong, shock-absorbing backing layer that enhances equipment life, reduces vibration, and minimizes wear on crusher liners.",
    application:
      "Mix resin and hardener thoroughly in the prescribed ratio until uniform. Pour into the cavity behind the crusher liners while the mixture is still pourable. Allow to cure completely before operating equipment. Ideal for cone and gyratory crushers in mining and aggregate operations.",
    precaution:
      "Ensure surfaces are clean and free from oil or dust before application. Use protective gloves and eyewear. Avoid skin contact and inhalation of vapors. Store in a cool, dry area away from open flames.",
    features: [
      "Tough two-component epoxy system",
      "Backs and reinforces heavy-duty crushers/mills",
      "Shock-absorbing backing layer",
      "Reduces vibration and minimizes liner wear",
    ],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Crusher+Backing+Compound",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Crusher-Backing-Compound-Castings-General-Sealants.webp",
    ],
  },

  /* ---------- CURRANTS (TIMBER PROTECTION) ---------- */
  {
    id: "carbolineum",
    name: "Carbolineum",
    category: cat("currants"),
    shortDescription:
      "Oil-based wood preservative formulated to protect timber against termites, fungi, and decay.",
    description:
      "Techaid Carbolineum is an oil-based wood preservative formulated to protect timber against termites, fungi, and decay. It penetrates deeply, enhancing durability while providing a rich, dark finish ideal for exterior use.",
    application:
      "Apply by brush or spray onto clean, dry wood surfaces. Best suited for outdoor wooden structures such as fencing, sheds, and posts. Allow to soak and dry before exposure to weather.",
    precaution:
      "Avoid skin and eye contact. Do not apply near open flames or heat. Use only in well-ventilated areas. Store securely, away from children and direct sunlight.",
    features: [
      "Oil-based wood preservative",
      "Protects against termites, fungi, and decay",
      "Deep penetration for enhanced durability",
      "Rich, dark finish for exterior use",
    ],
    images: [
      "https://placehold.co/800x800/8d6e63/ffffff?text=Carbolineum",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Carbolineum-Currants.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "creosote",
    name: "Creosote",
    category: cat("currants"),
    shortDescription:
      "Heavy-duty wood preservative that protects against rot, fungi, and insect attack.",
    description:
      "Techaid Creosote is a heavy-duty wood preservative that protects against rot, fungi, and insect attack. It penetrates deep into the wood fibers, providing long-term protection and extending the lifespan of outdoor timber.",
    application:
      "Apply by brushing, dipping, or spraying on clean, dry wooden surfaces. Commonly used on poles, fencing, sleepers, and exterior wooden structures. Allow treated wood to dry thoroughly before handling.",
    precaution:
      "Use outdoors or in well-ventilated areas. Avoid contact with skin and eyes. Keep away from open flames. Store in a cool, dry location away from food and feedstuffs.",
    features: [
      "Heavy-duty wood preservative",
      "Protects against rot, fungi, and insects",
      "Penetrates deep into wood fibers",
      "Extends lifespan of outdoor timber",
    ],
    images: [
      "https://placehold.co/800x800/8d6e63/ffffff?text=Creosote",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Creosote-Currants.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "termite-poison-ultra",
    name: "Termite Poison Ultra",
    category: cat("currants"),
    shortDescription:
      "Professional-grade termiticide for deep penetration and extended residual control.",
    description:
      "Termite Poison Ultra is an advanced, professional-grade termiticide formulated for deep penetration and extended residual control. It destroys termites on contact and prevents future infestations for years.",
    application:
      "Dilute and apply around building perimeters, wooden foundations, or termite-prone areas using standard spraying or injection equipment. Suitable for industrial, agricultural, and domestic use.",
    precaution:
      "Handle with care. Avoid direct contact with skin or eyes. Do not inhale vapors. Store in original container, tightly closed, and out of reach of children and animals.",
    features: [
      "Professional-grade termiticide",
      "Deep penetration and extended residual control",
      "Destroys termites on contact",
      "Prevents future infestations",
    ],
    images: [
      "https://placehold.co/800x800/8d6e63/ffffff?text=Termite+Poison+Ultra",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Termite-poison-ultra-Currants.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "termite-poison-blue",
    name: "Termite Poison Blue",
    category: cat("currants"),
    shortDescription:
      "Powerful termiticide designed to eliminate and prevent termite infestations.",
    description:
      "Techaid Termite Poison Blue is a powerful, long-lasting termiticide designed to eliminate and prevent termite infestations. It penetrates deeply into wood and soil, creating an invisible barrier that protects structures from destructive termite activity.",
    application:
      "Apply using a brush, sprayer, or injection method on affected areas, wooden structures, or soil foundations. Ensure thorough coverage for maximum protection. Ideal for use in construction sites, fencing, and timber treatment.",
    precaution:
      "Use protective gloves, eyewear, and a mask. Avoid inhalation or skin contact. Keep away from children, food, and pets. Do not contaminate water sources. Store securely in a cool, ventilated place.",
    features: [
      "Powerful, long-lasting termiticide",
      "Eliminates and prevents infestations",
      "Penetrates wood and soil",
      "Creates a protective invisible barrier",
    ],
    images: [
      "https://placehold.co/800x800/2b6cb0/ffffff?text=Termite+Poison+Blue",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Termite-Poison-Blue-Currants.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },

  /* ---------- ROOFING & FLOORING SEALANTS ---------- */
  {
    id: "roof-seal",
    name: "Roof Seal",
    category: cat("roofing-flooring-sealants"),
    shortDescription:
      "High-performance liquid waterproofing compound forming a seamless, elastic membrane.",
    description:
      "Techaid Roof Seal is a high-performance liquid waterproofing compound that forms a seamless, elastic membrane on roofs and terraces. It’s designed to withstand UV exposure, thermal expansion, and heavy rain.",
    application:
      "Clean the surface thoroughly and apply with a roller or brush in multiple coats for best results. Can be used on concrete, metal, asbestos, or tiled roofs.",
    precaution:
      "Do not apply during rain or when the surface is damp. Allow proper curing between coats. Store in a cool, dry location and keep sealed when not in use.",
    features: [
      "High-performance liquid waterproofing",
      "Seamless, elastic membrane",
      "Withstands UV exposure and thermal expansion",
      "Resists heavy rain",
    ],
    images: [
      "https://placehold.co/800x800/1d3557/ffffff?text=Roof+Seal",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Roof-seal-Roofing-Fooring-Sealants.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "bitumen-putty",
    name: "Bitumen Putty",
    category: cat("roofing-flooring-sealants"),
    shortDescription:
      "Ready-to-use, flexible sealing compound for filling cracks and joints.",
    description:
      "Techaid Bitumen Putty is a ready-to-use, flexible sealing compound ideal for filling cracks, joints, and gaps in roofing, gutters, and waterproofing applications. It provides long-lasting adhesion and weather resistance.",
    application:
      "Apply directly to clean, dry surfaces using a spatula or trowel. Smooth to desired finish. Suitable for both metal and concrete surfaces.",
    precaution:
      "Avoid open flames during application. Keep container tightly closed after use. Wash hands thoroughly after handling.",
    features: [
      "Ready-to-use flexible sealing compound",
      "Fills cracks, joints, and gaps",
      "Ideal for roofing and gutters",
      "Long-lasting adhesion and weather resistance",
    ],
    images: [
      "https://placehold.co/800x800/1d3557/ffffff?text=Bitumen+Putty",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Bitumen-Putty-Roofing-Fooring-Sealants.webp",
    ],
    variants: [
      { id: "1kg", label: "1kg" },
      { id: "5kg", label: "5kg" },
    ],
  },
  {
    id: "dpc-malthoid",
    name: "DPC Malthoid",
    category: cat("roofing-flooring-sealants"),
    shortDescription:
      "Bitumen-saturated felt used as a moisture barrier in floors, walls, and roofing.",
    description:
      "Techaid DPC Malthoid is a bitumen-saturated felt used as a moisture barrier in floors, walls, and roofing. It provides reliable protection against damp penetration and is easy to install under mortar or concrete layers.",
    application:
      "Lay sheets with minimum overlaps and bond using hot bitumen or adhesive. Press firmly to eliminate air pockets and ensure full adhesion.",
    precaution:
      "Handle carefully to avoid tearing. Do not install on damp or dirty surfaces. Keep stored in a dry, shaded area away from heat sources.",
    features: [
      "Bitumen-saturated felt moisture barrier",
      "Reliable protection against damp penetration",
      "Easy to install under mortar or concrete",
      "For floors, walls, and roofing",
    ],
    images: [
      "https://placehold.co/800x800/1d3557/ffffff?text=DPC+Malthoid",
      "https://techiad.co.zw/wp-content/uploads/2025/10/DPC-Malthoid-Roofing-Fooring-Sealants.webp",
    ],
  },
  {
    id: "dpc-blue",
    name: "DPC Blue",
    category: cat("roofing-flooring-sealants"),
    shortDescription:
      "Durable damp-proof coating designed to protect walls and foundations from rising moisture.",
    description:
      "Techaid DPC Blue is a durable damp-proof coating designed to protect walls, floors, and foundations from rising moisture. It dries to a tough, flexible film that resists salt attack and water ingress.",
    application:
      "Stir thoroughly before use. Apply evenly with a brush or roller to clean, dry surfaces. Allow each coat to dry before applying the next. Suitable for masonry, concrete, and plastered surfaces.",
    precaution:
      "Avoid contact with skin and eyes. Do not apply on wet or dusty surfaces. Store tightly sealed away from heat and direct sunlight.",
    features: [
      "Durable damp-proof coating",
      "Protects walls, floors, and foundations",
      "Resists salt attack and water ingress",
      "Tough, flexible film",
    ],
    images: [
      "https://placehold.co/800x800/2b6cb0/ffffff?text=DPC+Blue",
      "https://techiad.co.zw/wp-content/uploads/2025/10/DPC-Blue-Roofing-Fooring-Sealants.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "torch-on-membrane",
    name: "Torch On Membrane",
    category: cat("roofing-flooring-sealants"),
    shortDescription:
      "Premium waterproofing sheet made from polymer-modified bitumen reinforced with polyester.",
    description:
      "Torch on Membrane is a premium waterproofing sheet made from bitumen modified with high-quality polymers. It’s reinforced with a non-woven polyester core, ensuring flexibility, durability, and superior resistance to UV and weathering.",
    application:
      "Apply by torching onto clean, primed surfaces using an LPG gas torch. Overlap joints and seal carefully to ensure watertight protection. Ideal for flat roofs, balconies, and foundations.",
    precaution:
      "Use only in well-ventilated areas. Keep away from open flames when not in use. Wear gloves and protective footwear. Store rolls upright in a cool, shaded area.",
    features: [
      "Polymer-modified bitumen waterproofing sheet",
      "Non-woven polyester core reinforcement",
      "Superior flexibility and durability",
      "High resistance to UV and weathering",
    ],
    images: [
      "https://placehold.co/800x800/1d3557/ffffff?text=Torch+On+Membrane",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Torch-On-Membrane-Roofing-Fooring-Sealants.webp",
    ],
  },

  /* ---------- SOLVENTS & AUTOMOTIVE ---------- */
  {
    id: "battery-water",
    name: "Battery Water",
    category: cat("solvents-automotive"),
    shortDescription:
      "Purified, demineralized water for refilling and maintaining lead-acid batteries.",
    description:
      "Techiad Battery Water is purified, demineralized water formulated for refilling and maintaining all types of lead-acid batteries. It prevents corrosion, scaling, and impurities that shorten battery life.",
    application:
      "Top up battery cells to the recommended level as per manufacturer’s instructions. Ideal for vehicle, inverter, and solar batteries.",
    precaution:
      "Use clean equipment to avoid contamination. Do not drink. Store tightly closed in a clean, cool, and dry environment. Keep out of reach of children.",
    features: [
      "Purified, demineralized water",
      "Maintains lead-acid batteries",
      "Prevents corrosion, scaling, and impurities",
      "Ideal for vehicle, inverter, and solar batteries",
    ],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Battery+Water",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Battery-Water-Solvents-Automotive.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
    ],
  },
  {
    id: "thinners",
    name: "Thinners",
    category: cat("solvents-automotive"),
    shortDescription:
      "High-quality solvent for thinning oil-based paints and cleaning painting tools.",
    description:
      "Techiad Turpentine is a high-quality solvent distilled from natural resins, formulated for thinning oil-based paints and cleaning painting tools. It evaporates evenly and leaves no residue, ensuring a smooth, consistent finish.",
    application:
      "Use to thin varnishes, enamels, and oil paints to desired consistency. Ideal for cleaning brushes, rollers, and spray equipment after painting.",
    precaution:
      "Highly flammable — keep away from open flames and heat. Use only in well-ventilated areas. Avoid prolonged inhalation and skin contact. Store tightly sealed in a cool, dry location.",
    features: [
      "High-quality solvent",
      "Thins oil-based paints and cleans tools",
      "Evaporates evenly with no residue",
      "Ensures smooth, consistent finish",
    ],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Thinners",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Thinners-Solvents-Automotive.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
  {
    id: "turpentine",
    name: "Turpentine",
    category: cat("solvents-automotive"),
    shortDescription:
      "Natural-resin distilled solvent for thinning oil-based paints and cleaning tools.",
    description:
      "Techiad Turpentine is a high-quality solvent distilled from natural resins, formulated for thinning oil-based paints and cleaning painting tools. It evaporates evenly and leaves no residue, ensuring a smooth, consistent finish.",
    application:
      "Use to thin varnishes, enamels, and oil paints to desired consistency. Ideal for cleaning brushes, rollers, and spray equipment after painting.",
    precaution:
      "Highly flammable — keep away from open flames and heat. Use only in well-ventilated areas. Avoid prolonged inhalation and skin contact. Store tightly sealed in a cool, dry location.",
    features: [
      "Distilled from natural resins",
      "Thins varnishes, enamels, and oil paints",
      "Cleans brushes, rollers, and spray equipment",
      "Leaves no residue",
    ],
    images: [
      "https://placehold.co/800x800/457b9d/ffffff?text=Turpentine",
      "https://techiad.co.zw/wp-content/uploads/2025/10/Turpentine-Solvents-Automotive.webp",
    ],
    variants: [
      { id: "1l", label: "1 Litre" },
      { id: "5l", label: "5 Litres" },
      { id: "20l", label: "20 Litres" },
    ],
  },
];

/** Convenience: featured products, used by the home page */
export const featuredProducts = products.filter((p) => p.featured);

/** Convenience: lookup by id, used by the detail page */
export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
