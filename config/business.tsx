import { type SocialIconName } from "@/components/socialIcon";

type SocialConfig = {
  label: string;
  href: string;
  icon: SocialIconName;
};


export const business = {
  name: "Talos Industies",
  logo: "TALOS",
  description: "Building the digital infrastructure for growing businesses",

  location: "Harare, Zimbabwe",
contact: {
  phone: "077 123 4567",
  email: "info@talosindustries.co.zw",
  address: "Harare, Zimbabwe",

  whatsapp: "263771234567",   // international format, no +

  socials: [
    { label: "Instagram", href: "https://instagram.com/talos", icon: "instagram" },
    { label: "LinkedIn",  href: "https://linkedin.com/company/talos", icon: "linkedin" },
    { label: "Facebook",  href: "https://facebook.com/talos", icon: "facebook" },
    { label: "X",         href: "https://x.com/talos", icon: "x" },
  ]as SocialConfig[],

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
  services: [
        {
          id: "web-development",
          title: "Web Development",
          description: "We build modern, professional websites that put your business on the map.",
          content: [
            {
              id: "digital-presence",
              subtitle: "Building a stronger digital presence",
              paragraphs: [
                "We design and build websites for businesses that want a professional online presence — from portfolios and company profiles to hospitality, engineering, and service-based businesses. Your site becomes the place customers go to see who you are, what you offer, and how to reach you.",
                "Technically, we build with modern frameworks (Next.js, React, Tailwind CSS) hosted on high-performance infrastructure. Every site is responsive by default, optimized for fast load times, and built with clean, semantic code that supports both search engines and accessibility tools."
              ],
              features: [
                "Custom-designed pages, not templates",
                "Mobile-friendly, responsive on all devices",
                "Fast load times, optimized images",
                "Built on modern, secure hosting infrastructure"
              ],
              button: { text: "Get Started", href: "/contact" }
            }
          ]
        },
        {
          id: "listings-booking",
          title: "Property & Listings Websites",
          description: "Showcase rooms, properties, or inventory with inquiry-based listings — no online payment required.",
          content: [
            {
              id: "listings-section",
              subtitle: "Put your listings in front of the right people",
              paragraphs: [
                "If you run a lodge, guesthouse, or property business, we can build a listings site showing your rooms or properties with photos, pricing, and availability. Visitors browse and enquire directly with you — you handle the booking and payment yourself, the way you do now.",
                "This is built as a content-driven listing system rather than a transactional booking engine: no payment processing or personal data storage happens on the site itself. Enquiries are routed to you via a secure contact form or WhatsApp link, keeping the site simple, fast, and free of the compliance burden that comes with handling bookings and payments directly."
              ],
              features: [
                "Photo galleries per listing",
                "Pricing and availability display",
                "Direct enquiry via form or WhatsApp",
                "No sensitive data stored on the site"
              ],
              button: { text: "Discuss Your Listings", href: "/contact" }
            }
          ]
        },
        {
          id: "payment-integration",
          title: "Payment Gateway Linking",
          description: "Accept payments through trusted, established providers like Paynow — securely linked to your site.",
          content: [
            {
              id: "payment-section",
              subtitle: "Get paid, without us handling your money",
              paragraphs: [
                "For businesses that need to accept online payments, we connect your website to established, licensed payment providers such as Paynow. Customers pay through the provider's secure system — we simply build the link between your site and that trusted service.",
                "We integrate via the payment provider's official API, meaning transactions and sensitive card or mobile-money data are handled entirely by the licensed gateway, never stored or processed on our infrastructure. This keeps your business compliant without requiring us to hold a payment services or data protection license ourselves."
              ],
              features: [
                "Integration with licensed providers (e.g. Paynow)",
                "No card or payment data stored on our side",
                "Secure redirect-based payment flow",
                "Clear confirmation and receipt handling"
              ],
              button: { text: "Ask About Payments", href: "/contact" }
            }
          ]
        },
        {
          id: "seo",
          title: "SEO",
          description: "Increase your visibility and help the right customers find you online.",
          content: [
            {
              id: "seo-section",
              subtitle: "Getting found by the people who matter",
              paragraphs: [
                "A great website only helps your business if people can actually find it. We optimize every site so it shows up when your customers search — covering your business name, location, and services.",
                "Technically, this includes clean semantic HTML structure, optimized meta titles and descriptions, sitemap and robots.txt configuration, image alt attributes, mobile-first performance tuning, and Google Search Console and Google Business Profile setup. For Growth and Pro clients, we add ongoing keyword tracking and monthly ranking reports."
              ],
              features: [
                "Search-optimized page structure and metadata",
                "Google Business Profile setup",
                "Mobile-first, fast-loading pages",
                "Monthly ranking reports (Growth/Pro tiers)"
              ]
            }
          ]
        },
        {
          id: "accessibility",
          title: "Accessibility Optimisation",
          description: "Websites that work for everyone, including people using assistive technology.",
          content: [
            {
              id: "accessibility-section",
              subtitle: "Built so nobody is left out",
              paragraphs: [
                "We design every site so it's usable by as many people as possible — including those using screen readers, keyboard navigation, or slower connections. This isn't an add-on; it's part of how we build from day one.",
                "Technically, this means semantic HTML, proper heading hierarchy, sufficient color contrast, descriptive alt text, keyboard-navigable interactive elements, and ARIA labeling where needed, tested against WCAG 2.2 AA guidelines using both automated tools (axe, Lighthouse) and manual screen-reader testing."
              ],
              features: [
                "WCAG 2.2 AA-guided design",
                "Screen reader and keyboard navigation support",
                "Color contrast and readable typography",
                "Manual + automated accessibility testing"
              ]
            }
          ]
        },
        {
          id: "maintenance",
          title: "Website Maintenance & Changes",
          description: "Keep your site accurate, current, and running smoothly after launch.",
          content: [
            {
              id: "maintenance-section",
              subtitle: "Your site stays fresh, not frozen in time",
              paragraphs: [
                "Once your site is live, we keep it updated — new prices, new photos, new services, or small text changes — so it never feels outdated. You focus on your business; we keep the website current.",
                "This covers content updates via direct code changes or a lightweight CMS where applicable, dependency and security patching, hosting monitoring, and periodic performance and accessibility re-checks, with update allowances scaled by subscription tier."
              ],
              features: [
                "Regular content updates",
                "Security and dependency patching",
                "Uptime and performance monitoring",
                "Update allowance scales with your plan"
              ]
            }
          ]
        }
      ],
        
        Values: {
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


        Team: {
          title: "Our leadership",
          content: [
            {
              id: "SBU",
              subtitle: "Demitry : Technical Back-End & Systems Specialist",
              image: "https://picsum.photos/seed/sbu/400/400",
              paragraphs: [
                "Sbu oversees our back-end architecture, platform integrations, and core infrastructure[cite: 3]. Currently pursuing a Bachelor of Science in Computer Science at the University of the People, he brings practical full-stack software development and systems engineering experience—ranging from building web platforms with Next.js, Node.js, and PostgreSQL to implementing Payload CMS integrations[cite: 3]. Sbu ensures our digital solutions are secure, seamless, and built on reliable back-end logic[cite: 3]."
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
              id: "DENZEL",
              subtitle: " DENZEL:The Boss Just The BOSS",
              image: "https://picsum.photos/seed/bigBoss/400/400",
              paragraphs: [
                "Denzel drives the core software architecture and web development workflows across our client projects[cite: 1]. Currently pursuing a BSc (Hons) in Computer Science at the University of London, Denzel brings strong full-stack engineering principles, database architecture expertise, and clean coding practices to our digital solutions[cite: 1]. From crafting dynamic front-end experiences to structuring reliable back-end logic in Node.js and SQL, Denzel ensures every website is built to high modern standards[cite: 1]."
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
              id: "PANASHE",
              subtitle: "PANASHE:Business Management & Analytics Lead",
              image: "https://picsum.photos/seed/PANPAN/400/400",
              paragraphs: [
                "Panashe oversees business strategy, operations, and financial planning across our web service operations. Holding a degree in Business Management with Auditing and Analytics from Swansea University, Panashe brings a data-driven approach to client partnerships, operations management, and business growth. His background ensures our client projects align with business goals while keeping our agency's services organized, transparent, and high-performing."
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
              id: "AIDAN",
              subtitle: "AIDAN : Sales Lead & Company Research",
              image: "https://picsum.photos/seed/donotrelease/400/400",
              paragraphs: [
                "Aidan leads client acquisition, sales outreach, and market research, helping connect businesses with the right digital web solutions. Currently acquiring certifications in DevOps and IBM technical solutions, Aidan bridges technical understanding with client needs. Additionally fluent in German, he leverages deep research and communication skills to identify new market opportunities and establish lasting partnerships for our growing agency."
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
          ]
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
                
              { label: "Instagram", href: "https://instagram.com/talos", icon: "instagram" },
              { label: "LinkedIn",  href: "https://linkedin.com/company/talos", icon: "linkedin" },
              { label: "Facebook",  href: "https://facebook.com/talos", icon: "facebook" },
              { label: "X",         href: "https://x.com/talos", icon: "x" },

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