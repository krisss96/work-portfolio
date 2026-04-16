export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  year: string;
  period: string;
  role: string;
  heroImage: {
    src: string;
    alt: string;
  };
  demoUrl: string;
  repoUrl: string;
  demoVideoUrl: string;
  stack: string[];
  highlights: string[];
  whatILearned: string[];
};

export const projects: Project[] = [
  {
    slug: "luxury-retail-web",
    title: "Luxury Retail Web",
    subtitle: "E-commerce redesign and conversion uplift",
    summary:
      "A premium storefront revamp focused on navigation clarity, faster checkout, and stronger mobile shopping performance.",
    year: "2025",
    period: "March 2025 - June 2025",
    role: "Lead Web Developer & UI/UX Designer",
    heroImage: {
      src: "/img_1.png",
      alt: "Luxury retail project preview",
    },
    demoUrl: "https://example.com/luxury-retail-demo",
    repoUrl: "https://github.com/example/luxury-retail-web",
    demoVideoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    highlights: [
      "Redesigned core shopping flow and reduced checkout drop-off.",
      "Improved mobile performance with image and route optimizations.",
      "Introduced reusable design system blocks for faster launch cycles.",
    ],
    whatILearned: [
      "How to balance premium branding with a fast, conversion-friendly experience.",
      "How to structure reusable UI sections for a bigger product catalog.",
    ],
  },
  {
    slug: "saas-dashboard-suite",
    title: "SaaS Dashboard Suite",
    subtitle: "Data-heavy dashboard with modular widgets",
    summary:
      "A scalable analytics dashboard that helps teams track KPIs, collaborate in real time, and monitor business health at a glance.",
    year: "2024",
    period: "August 2024 - December 2024",
    role: "Frontend Architect",
    heroImage: {
      src: "/img_2.png",
      alt: "SaaS dashboard project preview",
    },
    demoUrl: "https://example.com/saas-dashboard-demo",
    repoUrl: "https://github.com/example/saas-dashboard-suite",
    demoVideoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    stack: ["Next.js", "React", "Recharts", "Zustand"],
    highlights: [
      "Built a modular widget architecture for rapid feature delivery.",
      "Added role-based visibility and custom dashboard presets.",
      "Cut initial load time through route-level code splitting.",
    ],
    whatILearned: [
      "How to present dense information clearly without overwhelming the user.",
      "How to separate reusable widgets from page-specific content.",
    ],
  },
  {
    slug: "creative-portfolio-platform",
    title: "Creative Portfolio Platform",
    subtitle: "Multi-page portfolio templates for creators",
    summary:
      "A template-driven portfolio platform for designers and artists, with fast setup, rich typography controls, and SEO-friendly pages.",
    year: "2026",
    period: "January 2026 - April 2026",
    role: "Product Designer & Frontend Developer",
    heroImage: {
      src: "/img_3.png",
      alt: "Creative portfolio platform project preview",
    },
    demoUrl: "https://example.com/creative-portfolio-demo",
    repoUrl: "https://github.com/example/creative-portfolio-platform",
    demoVideoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    stack: ["Next.js", "TypeScript", "CSS Modules", "Vercel"],
    highlights: [
      "Designed and shipped multiple premium portfolio themes.",
      "Built an easy content model to publish project stories quickly.",
      "Improved discoverability with structured metadata support.",
    ],
    whatILearned: [
      "How to keep a visual system consistent while still allowing each project to feel unique.",
      "How to design a flexible page structure that works across many project types.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3) {
  return projects.slice(0, limit);
}

export function getProjectNavigation(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1 || projects.length < 2) {
    return null;
  }

  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return { previous, next };
}

