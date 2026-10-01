import { type SocialIconName } from "@/components/socialIcon";
import { talosTheme } from "@/config/themes";

type SocialConfig = {
  label: string;
  href: string;
  icon: SocialIconName;
};


export const Talos = {
  name: "Talos Industries",
  logo: "TALOS",
  tagline: "African Advancement",
  description: "Building the digital infrastructure for growing businesses",
  theme: talosTheme,
  location: "Harare, Zimbabwe",
  contact: {
    phone: "(+263) 77 123 4567",
    email: "info@talosindustries.co.zw",
    address: "Harare, Zimbabwe",

    whatsapp: "263771234567",   // international format, no +

    socials: [
      { label: "Instagram", href: "https://instagram.com/talos", icon: "instagram" },
      { label: "LinkedIn",  href: "https://linkedin.com/company/talos", icon: "linkedin" },
      { label: "Facebook",  href: "https://facebook.com/talos", icon: "facebook" },
      { label: "X",         href: "https://x.com/talos", icon: "x" },
    ] as SocialConfig[],

    form: {
      title: "Send us a message",
      subtitle: "We'll get back to you within one business day.",
      fields: {
        name: "Your name",
        email: "Email address",
        phone: "Phone (optional)",
        message: "Tell us about your project",
      },
      submitLabel: "Send message",
      successMessage: "Thanks — we'll be in touch soon.",
    },
  },
  navigation: [
    { label: "Home",     href: "/" },
    { label: "Services", href: "/Services" },
    { label: "Packages",  href: "/pricing" },
    { label: "About",    href: "/about" },
    { label: "Contact",  href: "/contact" },
  ],
  // business.tsx — add this field to your business object

  process: {
    title: "How We Work",
    subtitle: "A clear, four-step process from first conversation to live website.",
    steps: [
      {
        id: "discovery",
        number: "01",
        title: "Discovery",
        description:
          "We learn about your company, your identity, and what sets you apart.",
        youGet: [
          "Understanding of your brand & goals",
          "Recommendations for what your site needs",
          "A clear picture of what makes you different",
        ],
        weNeed: [
          "An hour of your time",
          "Access to existing brand assets (if any)",
          "Honest answers about your priorities",
        ],
      },
      {
        id: "plan",
        number: "02",
        title: "Plan",
        description:
          "We map out exactly what we'll build, how we'll build it, and what's needed from both sides.",
        youGet: [
          "Full page structure & sitemap",
          "Content strategy & copy plan",
          "Photography plan (if needed)",
          "Timeline & milestones",
        ],
        weNeed: [
          "Written content you want on the site",
          "Approval on direction & design",
          "Any existing photos, logos, or documents",
        ],
      },
      {
        id: "build",
        number: "03",
        title: "Build",
        description:
          "Weekly live demos let you watch the site come together and request changes in real time.",
        youGet: [
          "Weekly live preview link",
          "Ability to review from anywhere",
          "Real-time feedback loop",
          "Two-week build cycle",
        ],
        weNeed: [
          "Prompt feedback on weekly demos",
          "Consolidated change requests (not daily drips)",
          "Availability for short check-ins",
        ],
      },
      {
        id: "deploy",
        number: "04",
        title: "Deploy",
        description:
          "Once approved, we launch your site — domain connected, optimised, and live.",
        youGet: [
          "Domain setup & DNS configuration",
          "Performance & SEO checks",
          "Launch & full handover",
          "30 days of post-launch support",
        ],
        weNeed: [
          "Final sign-off on the build",
          "Domain registrar access (if transferring)",
          "Payment cleared before launch",
        ],
      },
    ],
  },
    services: {
    headline: "Our Services",
    subheadline:
      "Six focused offerings that cover everything a modern business needs to establish, grow, and maintain its presence online.",
    contents: [
      {
        id: "web-development",
        tag: "Web",
        title: "Web Development",
        description:
          "Custom-designed, modern websites built for speed, clarity, and conversion.",
        content: [
          {
            id: "digital-presence",
            subtitle: "Building a stronger digital presence",
            paragraphs: [
              "We design and build websites for businesses that want a professional online presence. From portfolios and company profiles to hospitality, engineering, and service-based businesses.",
              "Technically, we build with modern frameworks (Next.js, React, Tailwind CSS) hosted on high-performance infrastructure. Every site is responsive by default, optimized for fast load times, and built with clean, semantic code.",
            ],
            features: [
              "Custom-designed pages, not templates",
              "Mobile-friendly, responsive on all devices",
              "Fast load times, optimized images",
              "Built on modern, secure hosting infrastructure",
            ],
          },
        ],
        button: { text: "Get Started", href: "/contact" },
      },
      {
        id: "listings-booking",
        tag: "Listings",
        title: "Property & Listings Websites",
        description:
          "Showcase rooms, properties, or inventory with inquiry-based listings, No online payment required.",
        content: [
          {
            id: "listings-section",
            subtitle: "Put your listings in front of the right people",
            paragraphs: [
              "If you run a lodge, guesthouse, or property business, we can build a listings site showing your rooms or properties with photos, pricing, and availability.",
              "This is built as a content-driven listing system rather than a transactional booking engine: enquiries are routed to you via a secure contact form or WhatsApp link.",
            ],
            features: [
              "Photo galleries per listing",
              "Pricing and availability display",
              "Direct enquiry via form or WhatsApp",
              "No sensitive data stored on the site",
            ],
          },
        ],
        button: { text: "Discuss Your Listings", href: "/contact" },
      },
      {
        id: "payment-integration",
        tag: "Payments",
        title: "Payment Gateway Linking",
        description:
          "Accept payments through trusted, established providers like Paynow, Securely linked to your site.",
        content: [
          {
            id: "payment-section",
            subtitle: "Get paid, without us handling your money",
            paragraphs: [
              "For businesses that need to accept online payments, we connect your website to established, licensed payment providers such as Paynow.",
              "We integrate via the payment provider's official API, meaning transactions and sensitive data are handled entirely by the licensed gateway.",
            ],
            features: [
              "Integration with licensed providers (e.g. Paynow)",
              "No card or payment data stored on our side",
              "Secure redirect-based payment flow",
              "Clear confirmation and receipt handling",
            ],
          },
        ],
        button: { text: "Ask About Payments", href: "/contact" },
      },
      {
        id: "seo",
        tag: "SEO",
        title: "SEO (Search Enging Optimisation)",
        description:
          "Always found at the top of search results. Increase your visibility and help the right customers find you online.",
        content: [
          {
            id: "seo-section",
            subtitle: "Getting found by the people who matter",
            paragraphs: [
              "A great website only helps your business if people can actually find it. We optimize every site so it shows up when your customers search.",
              "This includes clean semantic HTML, optimized metadata, sitemap and robots.txt configuration, mobile-first performance tuning, and Google Business Profile setup.",
            ],
            features: [
              "Search-optimized page structure and metadata",
              "Google Business Profile setup",
              "Mobile-first, fast-loading pages",
              "Monthly ranking reports (Growth/Pro tiers)",
            ],
          },
        ],
        button: { text: "Improve Your Ranking", href: "/contact" },
      },
      {
        id: "accessibility",
        tag: "A11y",
        title: "Accessibility Optimisation",
        description:
          "Websites that work for everyone, including people using assistive technology.",
        content: [
          {
            id: "accessibility-section",
            subtitle: "Built so nobody is left out",
            paragraphs: [
              "We design every site so it's usable by as many people as possible — including those using screen readers, keyboard navigation, or slower connections.",
              "This means semantic HTML, proper heading hierarchy, sufficient color contrast, and keyboard-navigable interactive elements, tested against WCAG 2.2 AA guidelines.",
            ],
            features: [
              "WCAG 2.2 AA-guided design",
              "Screen reader and keyboard navigation support",
              "Color contrast and readable typography",
              "Manual + automated accessibility testing",
            ],
          },
        ],
        button: { text: "Ask About Accessibility", href: "/contact" },
      },
      {
        id: "maintenance",
        tag: "Care",
        title: "Website Maintenance & Changes",
        description:
          "Keep your site accurate, current, and running smoothly after launch.",
        content: [
          {
            id: "maintenance-section",
            subtitle: "Your site stays fresh, not frozen in time",
            paragraphs: [
              "Once your site is live, we keep it updated — new prices, new photos, new services, or small text changes — so it never feels outdated.",
              "This covers content updates, dependency and security patching, hosting monitoring, and periodic performance and accessibility re-checks.",
            ],
            features: [
              "Regular content updates",
              "Security and dependency patching",
              "Uptime and performance monitoring",
              "Update allowance scales with your plan",
            ],
          },
        ],
        button: { text: "See Maintenance Plans", href: "/pricing" },
      },
    ],
  },

  Values: {
    title: "About Our Business",
    content: [
      {
        id: "mission",
        subtitle: "Developing Zimbabwe into a sustained future.",
        paragraphs: [
          "One more thing worth deciding before you launch: how you'll actually collect the monthly subscription. Given the local context, expect most Starter/Business tier clients to prefer EcoCash or bank transfer over a card-based auto-billing tool — so plan for manual monthly invoicing early on rather than assuming a subscription platform will handle it for you automatically.",
          "Our goal is to deliver quality while building lasting relationships.",
        ],
        features: [
          "Experienced team",
          "Quality service",
          "Reliable support",
          "Affordable pricing",
        ],
        button: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        id: "goal",
        subtitle: "Quality is our main goal",
        paragraphs: [
          "One more thing worth deciding before you launch: how you'll actually collect the monthly subscription. Given the local context, expect most Starter/Business tier clients to prefer EcoCash or bank transfer over a card-based auto-billing tool — so plan for manual monthly invoicing early on rather than assuming a subscription platform will handle it for you automatically.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
      },
    ],
  },

  Team: {
    title: "Our leadership",
    content: [
      {
        id: "SBU",
        subtitle: "Demitry: Technical Back-End & Systems Specialist",
        image: "https://picsum.photos/seed/sbu/400/400",
        paragraphs: [
          "Sbu oversees our back-end architecture, platform integrations, and core infrastructure[cite: 3]. Currently pursuing a Bachelor of Science in Computer Science at the University of the People, he brings practical full-stack software development and systems engineering experience—ranging from building web platforms with Next.js, Node.js, and PostgreSQL to implementing Payload CMS integrations[cite: 3]. Sbu ensures our digital solutions are secure, seamless, and built on reliable back-end logic[cite: 3].",
        ],
        features: [
          "Experienced team",
          "Quality service",
          "Reliable support",
          "Affordable pricing",
        ],
        button: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        id: "DENZEL",
        subtitle: "Denzel: The Boss, Just The BOSS",
        image: "https://picsum.photos/seed/bigBoss/400/400",
        paragraphs: [
          "Denzel drives the core software architecture and web development workflows across our client projects[cite: 1]. Currently pursuing a BSc (Hons) in Computer Science at the University of London, Denzel brings strong full-stack engineering principles, database architecture expertise, and clean coding practices to our digital solutions[cite: 1]. From crafting dynamic front-end experiences to structuring reliable back-end logic in Node.js and SQL, Denzel ensures every website is built to high modern standards[cite: 1].",
        ],
        features: [
          "Experienced team",
          "Quality service",
          "Reliable support",
          "Affordable pricing",
        ],
        button: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        id: "PANASHE",
        subtitle: "Panashe: Business Management & Analytics Lead",
        image: "https://picsum.photos/seed/PANPAN/400/400",
        paragraphs: [
          "Panashe oversees business strategy, operations, and financial planning across our web service operations. Holding a degree in Business Management with Auditing and Analytics from Swansea University, Panashe brings a data-driven approach to client partnerships, operations management, and business growth. His background ensures our client projects align with business goals while keeping our agency's services organized, transparent, and high-performing.",
        ],
        features: [
          "Experienced team",
          "Quality service",
          "Reliable support",
          "Affordable pricing",
        ],
        button: {
          text: "Contact Us",
          href: "/contact",
        },
      },
      {
        id: "AIDAN",
        subtitle: "Aidan: Sales Lead & Company Research",
        image: "https://picsum.photos/seed/donotrelease/400/400",
        paragraphs: [
          "Aidan leads client acquisition, sales outreach, and market research, helping connect businesses with the right digital web solutions. Currently acquiring certifications in DevOps and IBM technical solutions, Aidan bridges technical understanding with client needs. Additionally fluent in German, he leverages deep research and communication skills to identify new market opportunities and establish lasting partnerships for our growing agency.",
        ],
        features: [
          "Experienced team",
          "Quality service",
          "Reliable support",
          "Affordable pricing",
        ],
        button: {
          text: "Contact Us",
          href: "/contact",
        },
      },
    ],
  },

  Pricing: {
    title: "Pricing & Maintenance Plans",
    subtitle: "Choose the right service package or monthly maintenance plan for your business.",

    teir: [
      {
        id: "basic",
        name: "Starter Pack",
        monthlyFee: "$10–$15/mo",
        popular: false,
        description: "Essential landing page design and ongoing basic maintenance for individuals.",
        features: [
          "1 Landing Page",
          "Basic On-Page SEO (Meta tags, Sitemap, Google Search Console)",
          "1 minor edit / month",
          "Best for individuals & freelancers",
        ],
        ctaText: "Get Started",
      },
      {
        id: "Business",
        name: "Business",
        monthlyFee: "$10–$40/mo",
        popular: false,
        description: "Complete website setup with active SEO and regular content updates.",
        features: [
          "Up to 5 Pages (Home, About, Services, Gallery, Contact)",
          "On-Page SEO + monthly keyword & ranking report",
          "2–3 edits / month",
          "Best for small businesses, clinics & restaurants",
        ],
        ctaText: "Grow Your Business",
      },
      {
        id: "Advanced",
        name: "Business Pro",
        monthlyFee: "$50–$90/mo",
        popular: false,
        description: "Custom high-capacity build with full SEO optimization and priority edits.",
        features: [
          "Up to 9 Pages + Custom Sections",
          "Full On-Page SEO + Content Optimization + Monthly Reporting",
          "Unlimited minor edits + priority support",
          "Best for established SMEs & multi-location businesses",
        ],
        ctaText: "Contact Sales",
      },
    ],
    table: [
      {
        featureName: "1 Page (Landing Page)",
        tierValues: { basic: true, Business: false, Advanced: false },
      },
      {
        featureName: "Multi-Page Site (Up to 5 Pages)",
        tierValues: { basic: false, Business: true, Advanced: false },
      },
      {
        featureName: "Expanded Site (Up to 9 Pages + Custom Sections)",
        tierValues: { basic: false, Business: false, Advanced: true },
      },
      {
        featureName: "Basic On-Page SEO (Meta tags, Sitemap, Search Console)",
        tierValues: { basic: true, Business: true, Advanced: true },
      },
      {
        featureName: "Monthly Keyword & Ranking Reports",
        tierValues: { basic: false, Business: true, Advanced: true },
      },
      {
        featureName: "Full Content Optimization",
        tierValues: { basic: false, Business: false, Advanced: true },
      },
      {
        featureName: "Monthly Maintenance Edits",
        tierValues: { basic: "1 minor edit/mo", Business: "4-6 edits/mo", Advanced: "Unlimited minor edits" },
      },
      {
        featureName: "Priority Technical Support",
        tierValues: { basic: false, Business: false, Advanced: true },
      },
    ],
  },

  Gallery: {
    title: "Our Work",
    items: [
      { title: "SEO Campaign",       src: "https://placehold.co/600x800?text=SEO",                  alt: "SEO work" },
      { title: "Brake Replacement",  src: "https://placehold.co/600x800?text=Brake+Replacement",    alt: "Brake replacement" },
      { title: "Suspension Tuning",  src: "https://placehold.co/600x800?text=Suspension+Tuning",    alt: "Suspension tuning" },
      { title: "Engine Diagnostics", src: "https://placehold.co/600x800?text=Engine+Diagnostics",   alt: "Engine diagnostics" },
      { title: "Paint & Body",       src: "https://placehold.co/600x800?text=Paint+%26+Body",       alt: "Paint and body work" },
      { title: "Happy Customers",    src: "https://placehold.co/600x800?text=Happy+Customers",      alt: "Happy customers" },
    ],
  },
  /* ============================================================
     WHAT WE DO — Home (preview) + Services page (full)
     ============================================================ */
  whatWeDo: {
    eyebrow: "Scope",
    title: "What We Do",
    subtitle:
      "Everything you need to establish, launch, and maintain a professional presence online — built with care and kept current.",
    variant: "cards" as const,
    columns: 3 as const,
    background: "white" as const,
    items: [
      {
        id: "websites",
        icon: "01",
        title: "Custom Websites",
        description:
          "Designed and built from scratch — portfolios, company profiles, hospitality, engineering, and service-based businesses.",
      },
      {
        id: "listings",
        icon: "02",
        title: "Listings & Property Sites",
        description:
          "Showcase rooms, properties, or inventory with photo galleries, pricing, and direct enquiry — no online booking engine needed.",
      },
      {
        id: "payments",
        icon: "03",
        title: "Payment Gateway Linking",
        description:
          "Connect your site to licensed providers like Paynow so customers can pay securely through trusted systems.",
      },
      {
        id: "seo",
        icon: "04",
        title: "SEO & Visibility",
        description:
          "Help the right customers find you — semantic structure, metadata, Google Business Profile, and monthly ranking reports.",
      },
      {
        id: "accessibility",
        icon: "05",
        title: "Accessibility",
        description:
          "Sites that work for everyone, including people using screen readers, keyboard navigation, or slow connections.",
      },
      {
        id: "maintenance",
        icon: "06",
        title: "Ongoing Maintenance",
        description:
          "Content updates, security patching, uptime monitoring, and periodic performance checks after launch.",
      },
    ],
    cta: { text: "See Full Services", href: "/services" },
  },

  /* ============================================================
     WHAT WE DON'T DO — Home (short) + Services page (full)
     Honesty + qualification. Tells visitors what to expect and
     filters out leads you can't serve well.
     ============================================================ */
  whatWeDontDo: {
    eyebrow: "Honest Boundaries",
    title: "What We Don't Do",
    subtitle:
      "We're a focused web studio. Being clear about what we don't do helps us serve the clients we do take on exceptionally well.",
    variant: "list" as const,
    columns: 2 as const,
    background: "gray" as const,
    items: [
      {
        id: "no-ecommerce-platform",
        title: "We don't build full e-commerce platforms",
        description:
          "If you need a full product catalogue with cart, checkout, inventory, and shipping logic, we'll refer you to a specialised e-commerce partner.",
      },
      {
        id: "no-booking-engine",
        title: "We don't run a booking or reservation engine",
        description:
          "For lodges and hospitality, we build listings that send enquiries directly to you. We don't process bookings or hold guest data on your behalf.",
      },
      {
        id: "no-payment-handling",
        title: "We don't handle money",
        description:
          "Payments go through licensed providers like Paynow. We never store card or mobile-money data on our servers.",
      },
      {
        id: "no-seo-magic",
        title: "We don't promise instant SEO magic",
        description:
          "Ranking takes time and consistent content. We set up the foundations correctly and report on progress monthly — no shortcuts.",
      },
      {
        id: "no-hourly-chaos",
        title: "We don't do hourly ad-hoc support",
        description:
          "Support runs through monthly plans so both sides know the scope. Consolidated change requests, predictable turnaround.",
      },
      {
        id: "no-lock-in",
        title: "We don't lock you into proprietary systems",
        description:
          "Your site is built on modern, open standards. If you ever want to move, you can take the code with you.",
      },
    ],
  },
    notOffered: {
    title: "What We Don't Offer (Yet) — and Why",
    intro:
      "We believe in being upfront about scope. At our current stage, we don't build the following — not because we can't code it, but because doing it responsibly requires certifications and infrastructure we're not yet in a position to guarantee.",
    items: [
      {
        id: "custom-payment-processing",
        title: "Custom Payment Processing",
        reason:
          "We don't build our own payment gateways or handle transactions directly. We integrate with licensed, established providers like Paynow instead, so your customers' money and data are always handled by a properly regulated service.",
      },
      {
        id: "user-accounts",
        title: "User Accounts & Login Systems",
        reason:
          "We don't currently build systems that require users to create accounts or save personal information. Storing user data responsibly requires data protection safeguards we haven't yet certified, and we'd rather not offer this until we can do it properly.",
      },
      {
        id: "sensitive-data-storage",
        title: "Storage of Sensitive or Financial Data",
        reason:
          "No card numbers, passwords, or sensitive personal data are stored on sites we build. Anything requiring this level of data handling is routed through licensed third-party providers.",
      },
    ],
    closing:
      "As we grow and formalize our data protection processes, this list will shrink. For now, this approach lets us build fast, reliable sites without cutting corners on security.",
    background: "gray" as const,
  },
  /* ============================================================
     WHY YOU NEED A WEBSITE — Home, right after hero
     Educational. Aimed at cold visitors who aren't yet convinced.
     ============================================================ */
    whyYouNeedWebsite: {
    eyebrow: "Why It Matters",
    title: "Why You Need a Website",
    subtitle:
      "If your business is only on social media or word of mouth, you're leaving growth on the table. Here's what a proper website actually does for you.",
    variant: "reasons" as const,
    columns: 2 as const,
    background: "white" as const,
    items: [
      {
        id: "credibility",
        title: "Credibility",
        description:
          "Show your customers you're trustworthy and professional through a modern, well-built online and digital presence.",
      },
      {
        id: "visibility",
        title: "Visibility",
        description:
          "Put yourself out there and attract new customers worldwide, 24/7, while strengthening your brand.",
      },
      {
        id: "showcase",
        title: "Showcase Your Work",
        description:
          "Present your products and services with ease — clean layouts, real photography, and clear descriptions.",
      },
      {
        id: "communication",
        title: "Easy Communication",
        description:
          "Let customers reach you with the click of a button — contact forms, WhatsApp, phone, or email, always one tap away.",
      },
      {
        id: "standout",
        title: "Stand Out From Competitors",
        description:
          "Many of your competitors still have no online presence. A proper website instantly sets you apart.",
      },
      {
        id: "sales",
        title: "Reduce Sales Effort",
        description:
          "Accept online purchases and enquiries directly through the site, cutting back-and-forth and letting the site sell while you work.",
      },
      {
        id: "data",
        title: "Valuable Market Data",
        description:
          "Get real insight into where your customers are and what they're interested in — better judgment for how to move forward.",
      },
    ],
    cta: { text: "Start Your Site", href: "/contact" },
  },
  footerData: {
    companyName: "Talos Industries",
    description: "Crafting fast, modern web applications for businesses worldwide.",
    sections: [
      {
        title: "Services",
        links: [
          { label: "Web Development",   href: "/Services/#digital-presence" },
          { label: "SEO Optimization",  href: "/Services/#seo-section" },
          { label: "Maintenance",       href: "/Services/#maintenance-section" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Pricing",  href: "/pricing" },
          { label: "Contact",  href: "/contact" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Instagram", href: "https://instagram.com/talos" },
          { label: "LinkedIn",  href: "https://linkedin.com/company/talos" },
          { label: "Facebook",  href: "https://facebook.com/talos" },
          { label: "X",         href: "https://x.com/talos" },
        ],
      },
    ],
  },

  Careers: {
    Jop_openings: [
      {
        title: "Client acquisition",
        description: "Acquire clients",
        work_type: "Temp",
        Payment: "commission",
      },
    ],
  },
};