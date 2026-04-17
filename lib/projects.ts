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
  {
    slug: "temp-interactive-landing",
    title: "Temp Interactive Landing",
    subtitle: "Motion-first marketing page prototype",
    summary:
      "A temporary concept project used to test animated sections, scroll transitions, and responsive content blocks.",
    year: "2026",
    period: "April 2026",
    role: "Frontend Developer",
    heroImage: {
      src: "/img.png",
      alt: "Temporary interactive landing project preview",
    },
    demoUrl: "https://example.com/temp-interactive-landing",
    repoUrl: "https://github.com/example/temp-interactive-landing",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stack: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    highlights: [
      "Tested hero motion patterns and staggered reveal timing.",
      "Built reusable layout blocks for rapid landing page variants.",
      "Validated responsive spacing and typography behavior.",
    ],
    whatILearned: [
      "How to tune animation intensity without harming readability.",
      "How to structure temporary prototypes so they can be productionized later.",
    ],
  },
  {
    slug: "temp-component-lab",
    title: "Temp Component Lab",
    subtitle: "UI patterns sandbox for portfolio sections",
    summary:
      "A temporary internal project for experimenting with card systems, CTA styles, and section composition before final integration.",
    year: "2026",
    period: "April 2026",
    role: "UI Engineer",
    heroImage: {
      src: "/img_5.png",
      alt: "Temporary component lab project preview",
    },
    demoUrl: "https://example.com/temp-component-lab",
    repoUrl: "https://github.com/example/temp-component-lab",
    demoVideoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    stack: ["Next.js", "React", "TypeScript", "Three.js"],
    highlights: [
      "Compared multiple card proportions for visual hierarchy.",
      "Benchmarked spacing systems across desktop and mobile breakpoints.",
      "Created a temporary token set for fast iteration.",
    ],
    whatILearned: [
      "How to evaluate component variants quickly with realistic content.",
      "How to keep experiments isolated while sharing a common data model.",
    ],
  },
  {
    slug: "temp-animation-studio",
    title: "Temp Animation Studio",
    subtitle: "Motion design prototyping workspace",
    summary:
      "A temporary project space for exploring advanced animation patterns, timing functions, and keyframe orchestration across complex UI states.",
    year: "2026",
    period: "April 2026",
    role: "Motion Designer",
    heroImage: {
      src: "/img_1.png",
      alt: "Temporary animation studio preview",
    },
    demoUrl: "https://example.com/temp-animation-studio",
    repoUrl: "https://github.com/example/temp-animation-studio",
    demoVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stack: ["Next.js", "Framer Motion", "TypeScript", "CSS"],
    highlights: [
      "Developed smooth transitions between complex application states.",
      "Built a library of reusable animation primitives.",
      "Tested performance optimizations for high-frequency frame updates.",
    ],
    whatILearned: [
      "How to balance motion delights with accessibility constraints.",
      "How performant animations improve perceived app responsiveness.",
    ],
  },
  {
    slug: "temp-data-visualization",
    title: "Temp Data Visualization",
    subtitle: "Real-time metrics dashboard prototype",
    summary:
      "A temporary exploration of interactive data visualization techniques, live metrics rendering, and responsive chart layouts for monitoring workflows.",
    year: "2026",
    period: "April 2026",
    role: "Data Visualization Engineer",
    heroImage: {
      src: "/img_2.png",
      alt: "Temporary data visualization preview",
    },
    demoUrl: "https://example.com/temp-data-visualization",
    repoUrl: "https://github.com/example/temp-data-visualization",
    demoVideoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    stack: ["Next.js", "D3.js", "TypeScript", "React"],
    highlights: [
      "Built dynamic, real-time chart updates without jank.",
      "Implemented accessible color palettes for colorblind users.",
      "Created responsive breakpoint strategies for dashboard layouts.",
    ],
    whatILearned: [
      "How to present dense data clearly under performance constraints.",
      "How to choose the right visualization for each metric type.",
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

