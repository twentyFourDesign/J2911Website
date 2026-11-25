// All site copy lives here so it can be edited without touching layout code.

export const company = {
  name: "J2911 Resources LLC",
  shortName: "J2911",
  tagline: "Your Resourceful Partner",
  summary:
    "An ICT, education, business development and policy consultancy helping organisations plan, build and grow with confidence.",
  address: ["1A, Road 3, Ikota Villa Estate", "Lekki, Lagos, Nigeria"],
  phone: "+234 704 454 4455",
  phoneHref: "tel:+2347044544455",
  email: "info@j2911.com.ng",
  // Add profile URLs here to show social icons in the footer. Empty values are hidden.
  social: {
    linkedin: "",
    x: "",
    facebook: "",
    instagram: "",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const home = {
  hero: {
    eyebrow: "Your Resourceful Partner",
    title: "Empowering organisations for a dynamic future",
    body:
      "We help businesses, institutions and government agencies get more from technology, sharpen their strategy, navigate policy and build the partnerships that move them forward.",
    primaryCta: { label: "Book a free consultation", to: "/contact" },
    secondaryCta: { label: "Explore our services", to: "/services" },
    image: { src: "team-table", alt: "A team collaborating around a table with laptops and tablets" },
  },
  intro: {
    eyebrow: "Who we are",
    title: "One partner across technology, strategy and policy",
    lead:
      "J2911 Resources LLC is a consultancy working at the point where technology, business and regulation meet.",
    body:
      "Most growth challenges don't sit neatly in one department. A new system needs a sound business case, a new partnership needs the right policy framework, and a new programme needs people trained to deliver it. We bring those threads together so your organisation can move with clarity.",
    cta: { label: "More about us", to: "/about" },
    image: { src: "growth-tiles", alt: "Letter tiles spelling the word growth" },
  },
  whyTitle: "Why organisations work with us",
  whyBody:
    "We are not just consultants. We work as an extension of your team, taking time to understand your challenges and building solutions that deliver real results.",
  closing: "Let's guide you every step of the way.",
};

export const values = [
  {
    title: "Expertise",
    body: "Seasoned professionals with backgrounds across ICT, business development, policy and strategic partnerships.",
  },
  {
    title: "Tailored solutions",
    body: "Every organisation is different. Our recommendations are built around your specific challenges and opportunities.",
  },
  {
    title: "Proven delivery",
    body: "We have guided organisations through growth, change and new partnerships, with a focus on outcomes that last.",
  },
  {
    title: "Innovation",
    body: "A forward-looking approach that keeps you ahead of the technologies and trends shaping your sector.",
  },
  {
    title: "Client-centred",
    body: "Your success is the priority. We work collaboratively, communicate openly and stay close to your objectives.",
  },
];

// Practice areas. `id` is used for the anchor on the Services page.
export const services = [
  {
    id: "ict",
    title: "ICT Consulting",
    icon: "monitor",
    summary:
      "Make your digital infrastructure more efficient and effective, from system integration to cybersecurity, with solutions aligned to your business goals.",
    image: { src: "tech-console", alt: "A laptop running control software beside illuminated hardware" },
    groups: [
      {
        title: "Software Development",
        items: [
          ["Custom applications", "Software built around your specific needs and integrated cleanly with your existing systems."],
          ["Mobile apps", "Robust, user-friendly applications for iOS and Android that extend your reach."],
          ["Web development", "Fast, responsive websites and web applications that serve your users and support growth."],
        ],
      },
      {
        title: "Project Management",
        items: [
          ["IT project management", "Delivery from initiation to completion, on time, within scope and within budget."],
          ["Agile and Scrum", "Frameworks that make projects more flexible, responsive and efficient."],
          ["Risk management", "Identifying, assessing and mitigating the risks that threaten project outcomes."],
        ],
      },
      {
        title: "Software Architecture",
        items: [
          ["Architectural design", "Scalable, efficient architectures that support today's processes and tomorrow's growth."],
          ["Architecture review", "Assessing and optimising existing systems for performance, reliability and scale."],
          ["Microservices", "Modular, resilient systems that let teams build and release independently."],
        ],
      },
      {
        title: "Enterprise Systems",
        items: [
          ["ERP systems", "Implementation and customisation that streamline operations end to end."],
          ["CRM systems", "Deployments that improve customer engagement, retention and satisfaction."],
          ["Database management", "Design and upkeep of databases that keep data secure, accurate and available."],
        ],
      },
    ],
  },
  {
    id: "education",
    title: "Education Consulting",
    icon: "book",
    summary:
      "Tailored support for schools, universities, non-profits and government agencies responding to the changing needs of the education sector.",
    image: { src: "boardroom", alt: "Participants seated around a long table during a training session" },
    groups: [
      {
        title: "What we offer",
        items: [
          ["Training and capacity building", "Professional development programmes that strengthen educators' skills and knowledge."],
          ["Government partnerships", "Bridging institutions and government agencies to enable collaboration and secure resources."],
          ["EdTech advisory", "Selecting and implementing education technology so it is adopted well and improves learning outcomes."],
        ],
      },
    ],
  },
  {
    id: "business-development",
    title: "Business Development",
    icon: "chart",
    summary:
      "Strategic insight, market analysis and growth strategies designed to move your organisation forward.",
    image: { src: "growth-tiles", alt: "Letter tiles spelling the word growth" },
    groups: [
      {
        title: "What we offer",
        items: [
          ["Market analysis", "A clear view of your market, customers and competitors to ground every decision."],
          ["Growth strategy", "Practical plans for new markets, products and revenue streams."],
          ["Strategic advisory", "An experienced outside perspective for leadership teams at key moments."],
        ],
      },
    ],
  },
  {
    id: "policy",
    title: "Policy Development",
    icon: "document",
    summary:
      "Navigate regulation with confidence. We work with you to develop and implement policies that ensure compliance, reduce risk and support your operations.",
    image: { src: "office-desk", alt: "Document binders and a calculator on an office desk" },
    groups: [
      {
        title: "What we offer",
        items: [
          ["Policy design", "Internal and sector policies drafted around your goals and obligations."],
          ["Regulatory compliance", "Understanding the rules that apply to you and putting the right controls in place."],
          ["Implementation support", "Rolling policies out so they are understood and followed in practice."],
        ],
      },
    ],
  },
  {
    id: "partnerships",
    title: "Strategic Partnerships",
    icon: "handshake",
    summary:
      "Build the connections that strengthen your market position. We identify, negotiate and nurture partnerships that create value for everyone involved.",
    image: { src: "team-table", alt: "A team collaborating around a table with laptops and tablets" },
    groups: [
      {
        title: "What we offer",
        items: [
          ["Partner identification", "Finding organisations whose goals and strengths complement yours."],
          ["Negotiation", "Structuring agreements that are fair, clear and built to last."],
          ["Partnership management", "Keeping relationships productive long after the agreement is signed."],
        ],
      },
    ],
  },
];

export const about = {
  title: "About J2911 Resources",
  intro:
    "J2911 Resources LLC is a consultancy specialising in ICT, education, business development, policy and strategic partnerships. We combine practical experience with a genuine commitment to our clients' long-term growth.",
  vision: {
    eyebrow: "Our vision",
    title: "Empowering organisations for a dynamic future",
    body:
      "We envision a future where organisations move beyond boundaries and embrace innovation to thrive in a changing world. Our aim is to be the catalyst that helps them meet challenges, use technology well, build strong collaborations and achieve lasting success.",
    image: { src: "team-table", alt: "A team collaborating around a table with laptops and tablets" },
  },
  mission: {
    eyebrow: "Our mission",
    title: "Guiding excellence, driving innovation",
    body:
      "We guide organisations towards excellence through tailored work in ICT, education, business development, policy and strategic partnerships. We are committed to driving innovation, building lasting relationships and making sure our clients are ready to adapt, grow and lead in their industries.",
    image: { src: "boardroom", alt: "Participants seated around a long table during a working session" },
  },
};

export const contact = {
  eyebrow: "Contact us",
  title: "Let's shape the future together",
  body:
    "Tell us what you're working on, whether it's modernising your ICT, planning for growth, navigating regulation or building a partnership. We'll arrange a free consultation to talk through your needs.",
  serviceOptions: [
    "ICT Consulting",
    "Education Consulting",
    "Business Development",
    "Policy Development",
    "Strategic Partnerships",
    "Not sure yet",
  ],
};
