// config/businesses/gs-chemicals.ts
import { type SocialIconName } from "@/components/socialIcon";
import { chemicalsTheme } from "@/config/themes";

type SocialConfig = {
  label: string;
  href: string;
  icon: SocialIconName;
};

export const GSChemicals = {
  /* ============================================================
     BRAND
     ============================================================ */

  name: "G & S Chemicals Agencies",
  logo: "G & S",
  logoImage: "/gs-logo.png",
  tagline: "Innovating for a stronger future",
  description:
    "Manufacturers and distributors of TECHIAD paints, coatings, adhesives, and sealants across Zimbabwe.",
  theme: chemicalsTheme,
  location: "14 Lisburn Road, Workington, Harare",

  /* ============================================================
     CONTACT
     ============================================================ */

  contact: {
    phone: "+263 788 237 076",
    mobile: "+263788237076",
    email: "info@gschem.co.zw",
    address: "14 Lisburn Road, Workington, Harare",
    whatsapp: "+447925173171",

    socials: [
      { label: "X", href: "https://x.com/gschem", icon: "x" },
      { label: "Instagram", href: "https://instagram.com/gschem", icon: "instagram" },
      { label: "Facebook", href: "https://facebook.com/gschem", icon: "facebook" },
    ] as SocialConfig[],

    form: {
      title: "Request a quote",
      subtitle:
        "Tell us which product you're interested in and we'll get back to you with pricing and availability.",
      fields: {
        name: "Your name",
        email: "Email address",
        phone: "Phone number",
        message: "Which products are you enquiring about?",
      },
      submitLabel: "Send enquiry",
      successMessage:
        "Thanks. Our team will be in touch within one business day.",
    },
  },

  /* ============================================================
     NAVIGATION
     ============================================================ */

  navigation: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /* ============================================================
     HOME PAGE SECTIONS
     ============================================================ */

  /* Hero for catalogue businesses */
  hero: {
    eyebrow: "TECHIAD Products",
    headline: "Built for every job, from foundation to finish.",
    description:
      "We manufacture and distribute paints, coatings, adhesives, sealants, and automotive products across Zimbabwe.",
    primaryCta: { text: "Browse Products", href: "/products" },
    secondaryCta: { text: "Request a Quote", href: "/contact" },
    image: "/images/gs/hero-products.png",
  },

  /* Category strip on home — pulls from config/products.ts categories */
  categoriesHeading: {
    title: "Shop by Category",
    subtitle:
      "Six product ranges covering construction, automotive, and industrial applications.",
  },

  /* Featured products section */
  featuredHeading: {
    title: "Featured Products",
    subtitle: "Discover our most requested products.",
    ctaText: "View All Products",
    ctaHref: "/products",
  },

  /* About teaser block */
  about: {
    eyebrow: "About G & S Chemicals",
    title: "A Zimbabwean manufacturer you can rely on",
    paragraphs: [
      "G & S Chemicals manufactures, distributes, and installs TECHIAD branded products. Our range includes adhesives, castings, coatings, currants, preservative paints, waterproofing services, and bacteria controlled environment floors.",
      "Through continual expansion of our product research and development, we've become a leading supplier of chemical formulated products across Zimbabwe. We remain committed to quality objectives by providing services and products that consistently satisfy and exceed our customers' diverse requirements.",
    ],
    cta: { text: "Read More", href: "/about" },
    image: "/images/gs/award.png",
    awardCaption: "National Quality Gold Winner",
  },

  /* Testimonials */
  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Trusted by businesses across Zimbabwe.",
    items: [
      {
        id: "tadzwa",
        quote:
          "TECHIAD products have completely changed how we handle construction projects. Their waterproofing services on our roof deck were top notch, no leaks, no stress. The team delivered on time and the quality was beyond expectation.",
        author: "Tafadzwa Mangezi",
        location: "Borrowdale, Harare",
      },
      {
        id: "ruvimbo",
        quote:
          "As a small manufacturer, finding reliable adhesives and coatings was always a headache, until we switched to G & S Chemicals. The consistency of their TECHIAD products keeps our production line running smoothly. Local brand, world class quality.",
        author: "Ruvimbo Chikomo",
        location: "Darlington, Mutare",
      },
      {
        id: "kudakwashe",
        quote:
          "We used TECHIAD sealants and preservative paints for our facility floors and reservoirs. The finish was clean, durable, and easy to maintain. I'm proud to support a Zimbabwean company that takes quality this seriously.",
        author: "Kudakwashe Ncube",
        location: "Bulawayo, Zimbabwe",
      },
    ],
  },

  /* Trading partners strip */
  partners: {
    title: "Trading Partners",
    subtitle: "Moving the industries forward together.",
    logos: [
      { name: "Metro Paints",   src: "/images/partners/metro.png" },
      { name: "Halsted Builders Express", src: "/images/partners/halsted.png" },
      { name: "Farm & City Centre", src: "/images/partners/farm-city.png" },
      { name: "Electrosales",   src: "/images/partners/electrosales.png" },
      { name: "P & P Hardware", src: "/images/partners/pnp.png" },
      { name: "Union Hardware", src: "/images/partners/union.png" },
      { name: "N. Richards",    src: "/images/partners/nrichards.png" },
      { name: "Bhora Mega Mart", src: "/images/partners/bhora.png" },
      { name: "Builders Warehouse", src: "/images/partners/builders.png" },
    ],
  },

  /* ============================================================
     ABOUT PAGE
     ============================================================ */

    About: {
    intro: {
      eyebrow: "About Us",
      headline: "Over 25 years manufacturing chemical products for Zimbabwe.",
      description:
        "G & S Chemicals Agencies is a registered manufacturer and distributor of TECHIAD-branded chemical products for construction, industrial, and automotive customers across Zimbabwe.",
    },

    title: "Our Story",

    content: [
      {
        id: "who-we-are",
        subtitle: "About G & S Chemicals",
        paragraphs: [
          "We manufacture, distribute, and install TECHIAD branded products. Our range includes adhesives, castings, sealants, coatings, currants, preservative paints, waterproofing services on roof decks, water reservoirs, and bacteria controlled environment floors.",
          "G & S Chemicals has become a leading supplier of chemical formulated products through continual expansion of our product research and development unit. We continually improve our company quality objectives by committing to provide services and products that consistently satisfy and exceed our customers' diverse requirements.",
        ],
        image: "/images/gs/award.png",
      },
    ],

    /* Pull quote shown inline in the story section */
    pullQuote: "TECHIAD Products, adding value to your property.",

    /* Four headline numbers */
    stats: [
      { number: "25+",   label: "Years of Excellence" },
      { number: "1000+", label: "Satisfied Customers" },
      { number: "4",     label: "Distribution Centres" },
      { number: "100%",  label: "Quality Guaranteed" },
    ],

    /* Vision and mission shown side by side */
    vision:
      "To be innovators of preferred chemically formulated products that nurture domestic and industrial value creation.",
    mission:
      "To objectively compete in providing esteemed quality branded products and solution-loaded services that maximize stakeholder value.",

    /* Awards list, newest first */
    awards: [
      {
        year: "2025",
        title: "Zimbabwe CEO's Network",
        category: "Outstanding in Paint and Allied",
      },
      {
        year: "2022",
        title: "Zimbabwe CEO's Network",
        category: "Outstanding Service Excellence Delivery",
      },
      {
        year: "2021",
        title: "Megafest Leadership Award",
        category: "Paint and Hardware Leader of the Year",
      },
      {
        year: "2020",
        title: "Manufacturer Award of the Year",
        category: "",
      },
      {
        year: "2020",
        title: "Megafest Business Awards",
        category: "",
      },
    ],

    motto: "Innovating for a stronger future.",
  },

  /* ============================================================
     FOOTER
     ============================================================ */

  footerData: {
    companyName: "G & S Chemicals Agencies",
    description:
      "Manufacturers and distributors of TECHIAD branded paints, coatings, adhesives, and sealants across Zimbabwe.",
    sections: [
      {
        title: "Products",
        links: [
          { label: "Paints & Coatings",           href: "/products?category=paints-coatings" },
          { label: "Adhesives",                    href: "/products?category=adhesives" },
          { label: "Castings & General Sealants",  href: "/products?category=castings-general-sealants" },
          { label: "Currants",                     href: "/products?category=currants" },
          { label: "Roofing & Flooring Sealants",  href: "/products?category=roofing-flooring-sealants" },
          { label: "Solvents & Automotive",        href: "/products?category=solvents-automotive" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Home",     href: "/" },
          { label: "Products", href: "/products" },
          { label: "About",    href: "/about" },
          { label: "Contact",  href: "/contact" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "+44 7925173171", href: "tel:+4479251731 71" },
          { label: "+263 123456789", href: "tel:+263 123456789" },
          { label: "info@gschem.co.zw", href: "mailto:info@gschem.co.zw" },
          { label: "14 Lisburn Road, Workington, Harare", href: "/contact" },
        ],
      },
    ],
  },
};