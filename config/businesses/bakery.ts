import { bakeryTheme } from "../themes";
export const bakery = {
  name: "Sweet Crumb Bakery",
  logo: "SWEET CRUMB",
  tagline:" crumble bakery",
  description: "Fresh bread, pastries, and cakes baked daily in Harare.",
  location: "Avondale, Harare",
  theme: bakeryTheme,


  contact: {
    phone: "077 987 6543",
    email: "hello@sweetcrumb.co.zw",
    address: "12 King George Rd, Avondale, Harare",
    whatsapp: "263779876543",
    socials: [
      { label: "Instagram", href: "https://instagram.com/sweetcrumb", icon: "instagram" },
      { label: "Facebook",  href: "https://facebook.com/sweetcrumb", icon: "facebook" },
    ] as const,
    form: {
      title: "Order or ask a question",
      subtitle: "We reply within a few hours during shop hours.",
      fields: {
        name: "Your name",
        email: "Email address",
        phone: "Phone (optional)",
        message: "What can we bake for you?",
      },
      submitLabel: "Send order",
      successMessage: "Thanks! We'll get back to you shortly.",
    },
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/Services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  services: {headline:"Our menu",
    contents:[
    {
      id: "bread",
      title: "Daily Bread",
      description: "Fresh loaves baked every morning.",
      content: [
        {
          id: "bread-detail",
          subtitle: "Baked before sunrise",
          paragraphs: [
            "Our bread is baked fresh each morning using traditional methods and locally-sourced flour.",
          ],
          features: ["Sourdough", "Whole wheat", "Rye", "Multigrain"],
        },
      ],
    },
    {
      id: "pastries",
      title: "Pastries",
      description: "Croissants, danishes, and seasonal treats.",
      content: [
        {
          id: "pastry-detail",
          subtitle: "Flaky and buttery",
          paragraphs: ["Laminated by hand, baked to golden perfection."],
          features: ["Croissants", "Danishes", "Cinnamon rolls"],
        },
      ],
    },
    {
      id: "cakes",
      title: "Custom Cakes",
      description: "Celebration cakes for every occasion.",
      content: [
        {
          id: "cake-detail",
          subtitle: "Made to order",
          paragraphs: ["Birthdays, weddings, and everything in between."],
          features: ["Buttercream", "Fondant", "Vegan options"],
        },
      ],
    },
  ]},

  process: {
    title: "How to Order",
    subtitle: "Three simple steps from craving to pickup.",
    steps: [
      {
        id: "browse",
        number: "01",
        title: "Browse",
        description: "Look through our menu of fresh bakes.",
        youGet: ["Full menu with prices", "Photos of every item"],
        weNeed: ["A few minutes of your time"],
      },
      {
        id: "order",
        number: "02",
        title: "Order",
        description: "Order by phone, WhatsApp, or through the site.",
        youGet: ["Confirmation within an hour", "Pickup or delivery options"],
        weNeed: ["Your contact details", "Preferred pickup time"],
      },
      {
        id: "collect",
        number: "03",
        title: "Collect",
        description: "Pick up at our Avondale shop, or have it delivered.",
        youGet: ["Fresh, warm bread", "Friendly service"],
        weNeed: ["Payment on collection"],
      },
    ],
  },

  Values: {
    title: "Our Story",
    content: [
      {
        id: "history",
        subtitle: "A family bakery since 2015",
        paragraphs: [
          "Sweet Crumb started in a small kitchen and grew into one of Avondale's favourite bakeries.",
        ],
        features: ["Local ingredients", "Family recipes", "Daily fresh"],
      },
    ],
  },

  Team: {
    title: "Meet the Bakers",
    content: [
      {
        id: "mary",
        subtitle: "Mary — Head Baker",
        paragraphs: ["Mary learned to bake from her grandmother and has been perfecting recipes for 20 years."],
        features: ["Sourdough specialist", "Wedding cakes"],
      },
      {
        id: "john",
        subtitle: "John — Pastry Chef",
        paragraphs: ["John trained in Paris and brings classic French technique to every pastry."],
        features: ["Laminated doughs", "Chocolate work"],
      },
    ],
  },

  Gallery: {
    title: "From Our Oven",
    items: [
      { title: "Sourdough", src: "https://picsum.photos/seed/bread/600/800", alt: "Fresh sourdough" },
      { title: "Croissants", src: "https://picsum.photos/seed/croissant/600/800", alt: "Golden croissants" },
      { title: "Birthday Cake", src: "https://picsum.photos/seed/cake/600/800", alt: "Birthday cake" },
      { title: "Shop Front", src: "https://picsum.photos/seed/shop/600/800", alt: "Our shop" },
    ],
  },

  Pricing: {
    title: "Cake Pricing",
    subtitle: "Simple, honest pricing for every celebration.",
    teir: [
      {
        id: "small",
        name: "Small Cake",
        price: "$25",
        monthlyFee: "",
        popular: false,
        description: "Serves 8-10 people.",
        features: ["Single tier", "Simple decoration", "Standard flavours"],
        ctaText: "Order now",
      },
      {
        id: "medium",
        name: "Medium Cake",
        price: "$50",
        monthlyFee: "",
        popular: true,
        description: "Serves 20-25 people.",
        features: ["Two tiers", "Custom colours", "Choice of filling"],
        ctaText: "Order now",
      },
      {
        id: "large",
        name: "Large Cake",
        price: "$120",
        monthlyFee: "",
        popular: false,
        description: "Serves 50+ people.",
        features: ["Three tiers", "Full custom design", "Tasting session included"],
        ctaText: "Contact us",
      },
    ],
    table: [],
  },

  footerData: {
    companyName: "Sweet Crumb Bakery",
    description: "Fresh bread and pastries, baked daily in Avondale, Harare.",
    sections: [
      {
        title: "Menu",
        links: [
          { label: "Bread", href: "/Services#bread" },
          { label: "Pastries", href: "/Services#pastries" },
          { label: "Cakes", href: "/Services#cakes" },
        ],
      },
      {
        title: "Visit",
        links: [
          { label: "About", href: "/about" },
          { label: "Gallery", href: "/gallery" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },

  Careers: {
    Jop_openings: [],
  },
};