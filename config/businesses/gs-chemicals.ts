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
  logoImage: "images/gs/G&S logo.png",
  tagline: "Innovating for a stronger future",
  description:
    "Registered manufacturer and distributor of TECHIAD-branded paints, coatings, adhesives, sealants, waterproofing solutions, and construction materials across Zimbabwe — with over two and a half decades of experience.",
  theme: chemicalsTheme,
  location: "14B Lisburn Road, Workington, Harare",

  /* ============================================================
     CONTACT
     ============================================================ */

  contact: {
    phone: "+263 (242) 691775 / 691658",
    mobile: "+263 713 788 934",
    // Secondary mobile from the profile — kept separate so the UI can show both
    mobileAlt: "+263 772 349 180",
    whatsapp: "+263 71 378 8934",
    // TODO: confirm whether these emails should all surface on the site
    email: "info@gschem.co.zw",
    emails: [
      "info@gschem.co.zw",
      "sales@gschem.co.zw",
      "admin@gschem.co.zw",
    ],
    address: "No. 14B Lisburn Road, Workington, Harare, Zimbabwe",
    website: "www.gschem.co.zw",

    // Branch offices (from profile p.21)
    branches: [
      {
        name: "Bulawayo",
        address: "39 Plumtree Road, Belmont",
        phone: "+263 (292) 461498 / +263 773 227 395",
        email: "gsmaterialbyo@gmail.com",
      },
      {
        name: "Mutare",
        address: "4 Hull Close, Nyakamiti",
        phone: "+263 772 310 987",
      },
    ],

    socials: [
      // TODO: replace with the real handles — I couldn't verify these from the profile
      { label: "X", href: "Temp: https://x.com/gschem", icon: "x" },
      { label: "Instagram", href: "Temp: https://instagram.com/gschem", icon: "instagram" },
      { label: "Facebook", href: "Temp: https://facebook.com/gschem", icon: "facebook" },
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

  hero: {
    eyebrow: "TECHIAD Products",
    headline: "Quality chemical solutions for a stronger, longer lasting future.",
    description:
      "We manufacture and distribute TECHIAD-branded paints, coatings, adhesives, sealants, waterproofing solutions, and construction materials — serving industrial, construction, and mining sectors across Zimbabwe.",
    primaryCta: { text: "Browse Products", href: "/products" },
    secondaryCta: { text: "Request a Quote", href: "/contact" },
    image: "/images/gs/hero-products.png",
  },

  categoriesHeading: {
    title: "Shop by Category",
    subtitle:
      "Seven product ranges covering paints, adhesives, sealants, waterproofing, automotive, and construction essentials.",
  },

  featuredHeading: {
    title: "Featured Products",
    subtitle: "Discover our most requested products.",
    ctaText: "View All Products",
    ctaHref: "/products",
  },

  about: {
    eyebrow: "About G & S Chemicals",
    title: "A Zimbabwean manufacturer you can rely on",
    paragraphs: [
      "G & S Chemicals, a company with over two and a half decades of experience, is a registered manufacturer and distributor of TECHIAD-branded chemical products. The company is committed to quality, integrity, and customer satisfaction, which is evident in all aspects of its operations.",
      "We manufacture, distribute, and install TECHIAD branded products. Our range includes adhesives, castings, sealants, coatings, currants, preservative paints, waterproofing services on roof decks and water reservoirs, and bacteria controlled environment floors.",
      "G & S Chemicals has established a broad trade network across industry and commerce, successfully positioning its TECHIAD products in various market segments. Through continual expansion of our product research and development unit, we've become a leading supplier of chemical formulated products across Zimbabwe.",
    ],
    cta: { text: "Read More", href: "/about" },
    image: "/images/gs/award.png",
    awardCaption: "National Quality Gold Winner",
  },

  testimonials: {
    title: "What Our Customers Say",
    subtitle: "Trusted by businesses across Zimbabwe.",
    // TODO: confirm with client — these read like they were generated for the old site
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

  partners: {
    title: "Trading Partners",
    subtitle: "Moving the industries forward together.",
    // Pulled from profile p.13 + footer. Temp: logo paths need swapping for real assets
    logos: [
      { name: "Halsted",       src: "Temp: /images/partners/halsted.png" },
      { name: "Electrodes",    src: "Temp: /images/partners/electrodes.png" },
      { name: "Metro Peach",   src: "Temp: /images/partners/metro.png" },
      { name: "Bhola",         src: "Temp: /images/partners/bhola.png" },
      { name: "N Richard's",   src: "Temp: /images/partners/nrichards.png" },
      { name: "Farm and City", src: "Temp: /images/partners/farm-city.png" },
      { name: "Union Hardware",src: "Temp: /images/partners/union.png" },
      { name: "PG",            src: "Temp: /images/partners/pg.png" },
      { name: "Build Easy",    src: "Temp: /images/partners/build-easy.png" },
      { name: "Mohammed Mussa",src: "Temp: /images/partners/mohammed-mussa.png" },
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
          "We manufacture, distribute, and install TECHIAD branded products. Our range includes adhesives, castings, sealants, coatings, currants, preservative paints, waterproofing services on roof decks and water reservoirs, and bacteria controlled environment floors.",
          "G & S Chemicals has become a leading supplier of chemical formulated products through continual expansion of our product research and development unit. We continually improve our company quality objectives by committing to provide services and products that consistently satisfy and exceed our customers' diverse requirements.",
        ],
        image: "/images/gs/award.png",
      },
    ],

    pullQuote: "TECHIAD Products, adding value to your property.",

    stats: [
      { number: "25+",   label: "Years of Excellence" },
      { number: "1000+", label: "Satisfied Customers" },
      { number: "3",     label: "Distribution Centres" }, // Harare, Bulawayo, Mutare
      { number: "100%",  label: "Quality Guaranteed" },
    ],

    vision:
      "To be innovators of preferred chemically formulated products that nurture the desires of domestic and industrial value creation consumers.",
    mission:
      "To objectively compete in the provision of esteemed quality branded products and solutions loaded services that maximize the stakeholders' values.",

    // From profile p.2 / p.3
    strategicIntent:
      "Sustained and consistent growth through customer wholesome services.",
    culture: "Continuous improvements breed wisdom.",
    values: [
      "Collaboration",
      "Competency",
      "Consistency",
      "Courtesy",
      "Creativity",
      "Communication",
      "Customer centricity",
    ],

    // From profile p.3 — company history timeline
    history: [
      {
        era: "1990s",
        description:
          "Founded as a small-scale manufacturer supplying adhesives and industrial chemicals. Incorporated on 15 July 1999 (Certificate of Incorporation No. 6525/99).",
      },
      {
        era: "2000s",
        description:
          "Expanded product range to include sealants, coatings, and waterproofing solutions.",
      },
      {
        era: "2010s",
        description:
          "Strengthened research and development, launching advanced formulations for construction and industry, and established a nationwide distribution network, positioning TECHIAD as a market leader.",
      },
      {
        era: "2020s",
        description:
          "Continues to serve a wide range of industries and strives to push the boundaries of innovation in chemical formulated products.",
      },
    ],

    // From profile p.3
    coreCompetencies: [
      {
        title: "Superior Quality",
        description:
          "All TECHIAD products are rigorously tested for durability, performance, and compliance with industrial standards.",
      },
      {
        title: "Research & Development",
        description:
          "Continuous improvement and innovation of formulations to meet evolving client needs.",
      },
      {
        title: "Wide Product Range",
        description:
          "A one-stop shop for industrial and commercial chemical needs, including adhesives, coatings, sealants, and waterproofing solutions.",
      },
      {
        title: "Customer-Centric Approach",
        description:
          "A dedicated team focused on understanding client challenges and providing tailored solutions.",
      },
      {
        title: "Sustainable Practices",
        description:
          "Prioritization of eco-friendly production processes and solutions.",
      },
    ],

    // From profile p.11
    industriesServed: [
      "Construction & Infrastructure",
      "Manufacturing & Industrial",
      "Home Improvement & Retail",
      "Automotive & Transport",
      "Mining & Heavy-Duty Applications",
    ],

    // From profile p.11
    keyProjects: {
      paint: [
        "Dewerwi School",
        "Chishawasha School",
        "Emerald Hill Deaf and Dumb",
        "Peter House",
        "Watershed Primary",
        "Bindura Hospital",
        "St Peter's Anglican Church, Warren Park",
        "M&J HQ Hatfield",
      ],
      epoxyFloors: ["Still Waters", "Varun"],
      waterproofing: ["Dublin House"],
    },

    // From profile pp.14–20
    certifications: [
      {
        year: "1999",
        title: "Certificate of Incorporation",
        category: "Companies Act [Chapter 24:03] — No. 6525/99",
      },
      {
        year: "2024",
        title: "Health Registration Certificate",
        category: "Business No. BUS0039238 — Factory, non-food",
      },
      {
        year: "2025",
        title: "ZIMRA Tax Clearance",
        category: "TIN 2000155167 — Valid to 31 December 2025",
      },
      {
        year: "2025",
        title: "PRAZ — Paints and Accessories (GP002)",
        category: "PRAZ-2025-504-SKS-7217 — Expires 31 Dec 2025",
      },
      {
        year: "2025",
        title: "PRAZ — Tools and Hardware (GT002)",
        category: "PRAZ-2025-217-JMT-7217 — Expires 31 Dec 2025",
      },
      {
        year: "2025",
        title: "PRAZ — Construction Materials (GC007)",
        category: "PRAZ-2025-581-ZKL-7217 — Expires 31 Dec 2025",
      },
      {
        year: "2025",
        title: "PRAZ — Building and Roof Repairs (SB004)",
        category: "PRAZ-2025-912-SUN-7217 — Expires 31 Dec 2025",
      },
    ],

    // TODO: verify against the client. Awards in old config didn't appear in the PDF.
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
        // Updated to match the seven real categories below
        links: [
          { label: "Paints & Coatings",             href: "/products?category=paints-coatings" },
          { label: "Adhesives",                      href: "/products?category=adhesives" },
          { label: "Castings & Sealants",            href: "/products?category=castings-sealants" },
          { label: "Roofing & Flooring",             href: "/products?category=roofing-flooring" },
          { label: "Automotive & Solvents",          href: "/products?category=automotive-solvents" },
          { label: "Timber Protection",              href: "/products?category=timber-protection" },
          { label: "Construction Materials",         href: "/products?category=construction-materials" },
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
          { label: "+263 (242) 691775 / 691658", href: "tel:+263242691775" },
          { label: "+263 713 788 934",             href: "tel:+263713788934" },
          { label: "+263 772 349 180",             href: "tel:+263772349180" },
          { label: "info@gschem.co.zw",             href: "mailto:info@gschem.co.zw" },
          { label: "sales@gschem.co.zw",            href: "mailto:sales@gschem.co.zw" },
          { label: "No. 14B Lisburn Road, Workington, Harare", href: "/contact" },
        ],
      },
    ],
  },
};