// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... other type definitions remain untouched ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "PayFlow",
    badgeOuter: "Seamless payments, trusted by teams",
    titleBefore: "The modern",
    titleHighlight: "Payment Platform",
    titleAfter: "built for developers",
    subtitle:
      "PayFlow helps businesses accept payments, manage customers, track invoices, and automate subscriptions—all with developer-first APIs and robust security.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "See Platform Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "PayFlow dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Backed by world-class tech",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  benefits: {
    eyebrow: "Why PayFlow",
    heading: "Smarter payments, safer growth",
    description:
      "Focus on building your business while PayFlow handles payment rails, customer management, and secure billing.",
    items: [
      {
        icon: "Lock",
        title: "Enterprise-grade Security",
        description: "Your data—and your customers'—is encrypted and protected by best-in-class compliance.",
      },
      {
        icon: "Code",
        title: "API-first Developer Tools",
        description: "Integrate, test, and automate with strong docs, test keys, and webhooks. Launch faster.",
      },
      {
        icon: "UsersRound",
        title: "Multi-tenant, Role-based Access",
        description: "Scale with your team. Invite, manage roles, and enforce permissions the right way.",
      },
      {
        icon: "TrendingUp",
        title: "Insightful Analytics",
        description: "Understand revenue, trends, and engagement at a glance with live charts and summaries.",
      },
    ],
  },

  features: {
    eyebrow: "Platform Features",
    heading: "Everything you need to operate",
    subtitle:
      "PayFlow combines best-practice payments with smooth customer, invoicing, and developer features.",
    items: [
      { icon: "CreditCard", title: "Payment Processing", description: "Accept payments seamlessly—with simulated/demonstration flows for onboarding and testing." },
      { icon: "Users", title: "Customer Management", description: "Store contact info, notes, status, and keep every record up-to-date." },
      { icon: "ReceiptText", title: "Invoicing & Billing", description: "Automate recurring billing or send one-time invoices. Status tracking, reminders, and branded delivery." },
      { icon: "PackageCheck", title: "Product Catalog", description: "Organize products, set pricing, and track live and archived offerings." },
      { icon: "Repeat", title: "Subscriptions", description: "Flexible plans with automated billing, prorate logic, and trial support." },
      { icon: "Code2", title: "Developer APIs & Webhooks", description: "Spin up test keys, configure webhooks, and access detailed delivery logs for full integration confidence." },
    ],
  },

  services: {
    eyebrow: "More from PayFlow",
    heading: "Mission-critical capabilities",
    subtitle:
      "Modern SaaS teams need bulletproof payments and actionable analytics. PayFlow bakes in the features devs demand.",
    items: [
      { title: "Global Payments", description: "Simulated multi-currency support and fast reconciliation.", pro: true },
      { title: "Role Management", description: "Admin, manager, and developer permissions for every use case.", pro: false },
      { title: "Subscription Automation", description: "Automated proration, invoices, and status change workflows.", pro: true },
      { title: "Webhook Tester", description: "Instantly trigger, replay, and debug webhooks from your dashboard.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Trusted by modern teams",
    heading: "What our users say",
    reviews: [
      { image: "/demo-img.jpg", name: "Jasmine Park", role: "Co-founder, Uptrack", comment: "PayFlow made integrating payments actually painless. Our developers loved the API quickstart, and our finance team now has real-time visibility.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Carlos Rivera", role: "CTO, QubeCloud", comment: "We were able to onboard new clients in hours, not days. Customer management and subscriptions just work.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Audrey Chen", role: "Product Manager, Onova", comment: "Invoices, subscriptions, and webhooks in one dashboard. Support team is super responsive too.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Elijah Brown", role: "Developer, PatchOps", comment: "I had a working test environment up fast. The role-based dashboard is perfect for our multi-tenant SaaS.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Nia Williams", role: "Operations Lead, LumiPay", comment: "PayFlow’s analytics alone are worth the price—real insight into our revenue and billing health every day.", rating: 4.9 },
    ],
  },

  team: {
    eyebrow: "Meet PayFlow",
    heading: "Our team, your payments partner",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder, Platform Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Michael",
        lastName: "Holland",
        positions: ["Engineering", "CI/CD"],
        socialNetworks: [
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple plans that scale with you",
    subtitle: "Every PayFlow plan comes with full dashboard access, robust APIs, and secure multi-tenant isolation.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "For new startups and projects. Try PayFlow with no risk.",
        buttonText: "Start free",
        benefits: ["Up to 3 team seats", "Sample payment flows", "Developer dashboard", "API access", "Community support"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For growing SaaS teams—expand with advanced analytics and more power.",
        buttonText: "Start free trial",
        benefits: ["Unlimited team seats", "Live products/payments", "Invoices & subscriptions", "Priority support", "Role-based access control"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Custom needs? Dedicated support, compliance, and enterprise onboarding.",
        buttonText: "Contact sales",
        benefits: ["Dedicated onboarding", "SLA & compliance", "Custom integrations", "Phone/email support"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with PayFlow",
    description:
      "Want a demo, have questions, or need support? Reach out—our team is here to help you run payments with confidence.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Headquarters", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email", value: "hi@chirag.co" },
      hours: { label: "Support hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Integration Support", "Sales Inquiry", "Partner Request", "Other"],
    formSubmitLabel: "Contact PayFlow",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "PayFlow common questions",
    items: [
      { question: "Is PayFlow suitable for production use?", answer: "Yes. Your data is isolated, encrypted, and your team can deploy instantly." },
      { question: "How is payment processing handled?", answer: "Demo flows simulate payment success/failure. Connect your gateway when you’re ready for live receipts." },
      { question: "Can I test API keys and webhooks safely?", answer: "Absolutely. All PayFlow plans include sandbox/test environments for developers." },
      { question: "Does PayFlow support teams and roles?", answer: "Yes. Invite your team, manage roles (admin, manager, developer), and enforce permissions easily." },
      { question: "Can I track invoices and subscriptions?", answer: "Full invoicing and subscription management are built-in, with real-time status and logs." },
    ],
  },

  footer: {
    brandName: "PayFlow",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" },
          { label: "GitHub", href: "#" },
        ],
      },
      {
        heading: "Platform",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "API Docs", href: "#" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Developers",
        links: [
          { label: "GitHub", href: "#" },
        ],
      },
    ],
    copyright: "© 2026 PayFlow Inc.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "PayFlow",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Platform",
    featureImage: { src: "/hero-image-light.jpeg", alt: "PayFlow dashboard" },
    features: [
      { title: "Payments & Subscriptions", description: "One platform for processing, tracking, and invoicing—all role based and multi-tenant." },
      { title: "Dev-friendly APIs", description: "API keys, doc links, and rich webhook tooling for every team." },
      { title: "Analytics & Insights", description: "Monitor payments, revenue, ARPU, and more at a glance." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "#", ariaLabel: "View PayFlow on GitHub" }
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}