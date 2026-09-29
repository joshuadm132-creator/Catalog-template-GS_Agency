export const business = {
  name: "Talos Industies",
  logo: "TALOS",
  description: "Building the digital infrastructure for growing businesses",

  location: "Harare, Zimbabwe",

  contact: {
    phone: "077 123 4567",
    email: "info@denzelsauto.co.zw",
    adress:"Harare, Zimbabwe",


  },
  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
    ,{
      label: "Galler",
      href: "/gallary",
    },
    ,{
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Services",
      href: "/Services",
    },
    ],
  services:[
          {
            id: "seo",
            title: "SEO",
            description: `Increase Your Visibility throughput the web`,
            content:[
              {
                id:"SEO-section",
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
                
              },
            ],
          },
          {
            id: "web-development",
            title: "Web Development",
            description: "We build modern websites for businesses.",
            content:[
              {
                id: "digital-presence",
              subtitle: "Building a stronger digital presence",
              paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet,  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ],

              features: [
                "Responsive websites",
                "Mobile-friendly design",
                "SEO-friendly structure"
              ],

              button: {
                text: "Contact Us",
                href: "/contact"
              },
            },]
          },

          {
            id:" Maintanance",
            title: "Website maintanance Changes",
            description: "Keep your systems running smoothly.",
          },
           
        ],
        
        About: {
          title: "About Our Business",
          content:[
              {
              id:"mission",
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
                  href: "/contact"
                }
            },
            {
              id:"goal",
            subtitle: "Quality is our main goal",
            paragraphs: [
              "One more thing worth deciding before you launch: how you'll actually collect the monthly subscription. Given the local context, expect most Starter/Business tier clients to prefer EcoCash or bank transfer over a card-based auto-billing tool — so plan for manual monthly invoicing early on rather than assuming a subscription platform will handle it for you automatically.",
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. .",
            ],

          },
          ],
        },
                
        
      Pricing: {
        title: "Pricing & Maintenance Plans",
        subtitle: "Choose the right service package or monthly maintenance plan for your vehicle.",
      
        teir:[
        {
          "id": "basic",
          "name": "Starter Pack",
          "price": "$40–$80",
          "monthlyFee": "$5–$10/mo",
          "popular": false,
          "description": "Essential landing page design and ongoing basic maintenance for individuals.",
          "features": [
            "1 Landing Page",
            "Basic On-Page SEO (Meta tags, Sitemap, Google Search Console)",
            "1 minor edit / month",
            "Best for individuals & freelancers"
          ],
          "ctaText": "Get Started"
        },
        {
          "id": "Business",
          "name": "Business",
          "price": "$150–$250",
          "monthlyFee": "$10–$30/mo",
          "popular": false,
          "description": "Complete website setup with active SEO and regular content updates.",
          "features": [
            "Up to 5 Pages (Home, About, Services, Gallery, Contact)",
            "On-Page SEO + monthly keyword & ranking report",
            "2–3 edits / month",
            "Best for small businesses, clinics & restaurants"
          ],
          "ctaText": "Grow Your Business"
        },
        {
          "id": "Advanced",
          "name": "Business Pro",
          "price": "$350–$600",
          "monthlyFee": "$30–$80/mo",
          "popular": false,
          "description": "Custom high-capacity build with full SEO optimization and priority edits.",
          "features": [
            "Up to 9 Pages + Custom Sections",
            "Full On-Page SEO + Content Optimization + Monthly Reporting",
            "Unlimited minor edits + priority support",
            "Best for established SMEs & multi-location businesses"
          ],
          "ctaText": "Contact Sales"
        }
            ],
      table: [
        {
          featureName: "1 Page (Landing Page)",
          tierValues: { basic: true, Business: false, "Advanced": false },
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
        {
          featureName: "Build Fee (One-time)",
          tierValues: { basic: "$40-60", Business: "$150-250", Advanced: "$350-600" },
        },
        {
          featureName: "Hosting & SEO Fee",
          tierValues: { basic: "$10-15/mo", Business: "$20-30/mo", Advanced: "$50-80/mo" },
        },
        

      ],
    },
        Gallery: {
          title: "Our Work",
          items: [
            { title: "SEO Campaign", src: "https://placehold.co/600x800?text=SEO", alt: "SEO work" },
            { title: "Brake Replacement", src: "https://placehold.co/600x800?text=Brake+Replacement", alt: "Brake replacement" },
            { title: "Suspension Tuning", src: "https://placehold.co/600x800?text=Suspension+Tuning", alt: "Suspension tuning" },
            { title: "Engine Diagnostics", src: "https://placehold.co/600x800?text=Engine+Diagnostics", alt: "Engine diagnostics" },
            { title: "Paint & Body", src: "https://placehold.co/600x800?text=Paint+%26+Body", alt: "Paint and body work" },
            { title: "Happy Customers", src: "https://placehold.co/600x800?text=Happy+Customers", alt: "Happy customers" },
          ],
        },


        footerData : {
          companyName: "DevStudio",
          description: "Crafting fast, modern web applications for businesses worldwide.",
          sections: [
            {
              title: "Services",
              links: [
                { label: "Web Development", href: "/Services/#digital-presence" },
                { label: "SEO Optimization", href: "/Services/#SEO-section" },
                { label: "Maintenance", href: "/Services/#Maintanance" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "GitHub", href: "https://github.com"},
                { label: "LinkedIn", href: "https://linkedin.com"},
              ],
            },
          ],
        },

        Careers: {

          Jop_openings:[{
            title:"Client aquisition",
            description:"aquire clients",
            work_type:"Temp",
            Payment:"comission"

          }]

        }



};