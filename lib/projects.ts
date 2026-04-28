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
  aboutTheClient?: {
    name: string;
    label?: string;
    description: string;
  };
};

export const projects: Project[] = [
  {
    slug: "kenya-scooter-app",
    title: "Kenya Scooter App",
    subtitle: "Developed for De Ontdekfabriek",
    summary:
      "Working directly for our clients, Hugo Vrijdag and Igino van Haandel from De Ontdekfabriek, my team and I are developing an immersive Electric Scooter Simulator. Our mission is to bridge the gap between a simple game and a realistic simulator, providing children with an authentic sense of what it’s like to operate a vehicle in a high-stakes environment.\n" +
        "\n" +
        "The game is designed for iPad and integrated into a physical steering setup; children navigate the scooter through the Kenyan savanna by physically tilting the tablet like a steering wheel. We inherited this project from previous developers, and our task is to refactor the functionality and completely redesign the environment to ensure the physics, steering, and road obstacles feel real enough to provide a genuine driving experience.",
    year: "2026",
    period: "February 2026 - In progress",
    role: "Mobile App Developer & Designer",
    heroImage: {
      src: "/img_4.png",
      alt: "Kenya scooter app preview",
    },
    demoUrl: "https://example.com/kenya-scooter-app",
    repoUrl: "https://github.com/example/kenya-scooter-app",
    demoVideoUrl: "https://www.youtube.com/embed/kenyaScooterDemo",
    stack: ["Flutter"],
    highlights: [
      " ",
    ],
    whatILearned: [
      " Codebase Handover & Refactoring: I gained experience taking over an existing project from a previous team.",
    ],
      aboutTheClient: {
          name: "De Ontdekfabriek (The Discovery Factory), Eindhoven. As a major innovation hub in the Brainport region, they focus on inspiring children through interactive technology and creative storytelling.\n ",
          description: "Problem:: The client needed a realistic tool to help 12–14-year-olds identify if they have a natural interest in machinery and technical career paths.The existing version of the game was unfinished and lacked the realism needed to keep children engaged."
      }
  },
  {
    slug: "temp-component-lab",
    title: "Koldinghus app",
    subtitle: "Developed for International IBA, Denmark, Inclusive by design program",
    summary:
      "I participated in the International Multimedia/ICT Week at IBA International Business Academy in Denmark. Working in a multicultural team, we developed an inclusive mobile concept for the Koldinghus Museum designed specifically for intergenerational groups. Our app acts as a navigator through the museum, bridging the gap between children and adults by providing a shared, immersive journey. Our concept ensures that visitors of all ages can explore the castle’s history together without barriers. The project concluded with a final presentation to a board of international teachers, for which I was awarded a formal Certificate of participation.",
    year: "2026",
    period: "March 2026",
    role: "Group Leader & UI/UX Designer",
    heroImage: {
      src: "/img_5.png",
      alt: "Temporary component lab project preview",
    },
    demoUrl: "https://example.com/temp-component-lab",
    repoUrl: "https://github.com/example/temp-component-lab",
    demoVideoUrl: "/Screen Recording 2026-04-28 132217.mp4",
    stack: ["Figma"],
    highlights: [],
    whatILearned: [
      "Strategic Problem-Solving:  improved my communication skills by gaining hands-on experience co-working with a team from diverse backgrounds and different skillsets. This taught me how to collaborate effectively with people I didn't know.",
      "Intercultural Communication: Working with a diverse, international team taught me to bridge communication gaps and integrate different mindsets into a single, cohesive concept.",
      "Time Management Under Pressure: The strict one-week deadline forced me to improve my ability to prioritize essential tasks and keep the team organized.",
      "Strategic Problem-Solving: I learned to design solutions for a highly diverse target group."
    ],
    aboutTheClient: {
      name: "",
      description: "Client: Koldinghus Museum, a historic 13th-century Danish royal castle and museum.\nProblem: As a complex historical site, Koldinghus faced accessibility barriers that made it difficult for diverse visitors to navigate and engage with its history. We were tasked with identifying real-world barriers within the castle and developing a solution using Inclusive Design and Generative AI that ensures all visitors, regardless of their background, can engage with the museum's history."
    },
  },
  {
    slug: "saas-dashboard-suite",
    title: "StepQuest App",
    subtitle: "Individual project",
    summary:
      "StepQuest is an individual project focused on the design and development of a mobile exergame. The project objective was to create a platform that replaces sedentary phone usage with gamified physical activity for young adults who lack motivation. Built with Flutter, the app transforms the user's environment into a digital battlefield where they claim real-world territory through movement. To drive engagement, users can walk to specific points of interest to capture areas or challenge bot rivals to 'walking battles,' where the first to reach the step goal wins the territory.",
    year: "2024",
    period: "February 2026- April 2026",
    role: "App Developer & UX Designer",
    heroImage: {
      src: "/img_2.png",
      alt: "SaaS dashboard project preview",
    },
    demoUrl: "https://example.com/saas-dashboard-demo",
    repoUrl: "https://github.com/krisss96/stepquest_app",
    demoVideoUrl: "/Video Project 5.mp4",
    stack: ["Flutter"],
    highlights: [],
    whatILearned: [
      "First-Time App Development: This was my first experience developing a mobile application from start to finish. I learned how to manage the unique lifecycle of a mobile product.",
      "Learning Flutter: As my first project using Flutter, I taught myself the framework and the Dart language.",
      "Google Maps API Integration: I gained experience integrating the Google Maps API with device location services."
    ],
  },
  {
    slug: "creative-portfolio-platform",
    title: "Photography portfolio",
    subtitle: "Multi-page portfolio templates for creators",
    summary:
      "I designed and developed this interactive portfolio to transition a collaborator’s photography from social media to a custom web experience. My goal was to create a minimalistic environment that prioritizes high-resolution visuals through an infinite-scroll layout. To make the platform sustainable, I implemented a full-stack system using Supabase, including an admin interface that allows the photographer to manage and upload her work independently.",
    year: "2026",
    period: "December 2025 - January 2026",
    role: "Full-Stack Developer & UX Designer",
    heroImage: {
      src: "/img_3.png",
      alt: "Creative portfolio platform project preview",
    },
    demoUrl: "https://nara-kupenova-photography.vercel.app/",
    repoUrl: "https://github.com/krisss96/nara-kupenova-photography",
    demoVideoUrl: "/Screen Recording 2026-04-28 130248.mp4",
    stack: ["React", "Supabase", "PostgreSQL"],
    highlights: [],
    whatILearned: [
      "SQL Database: This project was my first time bridging a React frontend with a PostgreSQL database. I learned how to structure data tables in Supabase and build an authentication-protected Admin Dashboard."
    ],
    aboutTheClient: {
      name: "Nara Kupenova is a hobbyist photographer, specialising in neo-street and surrealism photography, based in Varna, Bulgaria.",
      label: "About the collaborator:",
      description: `Problem:\nStandard social media platforms limited the photographer’s control over image quality and presentation. I needed to build a solution that removed these distractions and allowed the photography to be viewed in a high-fidelity, professional setting.`
    }
  },
  {
    slug: "temp-interactive-landing",
    title: "Pac-xon flipboard game",
    subtitle: "Developed for OWOW company",
    summary:
      "I worked in a team of four to develop a playable Pac-Xon game for our client - OWOW's 84x28 pixel flip-dot matrix display. I was responsible for the UI, UX and the custom animations. My focus was creating a polished design that aligned with the client’s professional standards and creative identity.",
    year: "2026",
    period: "September 2025 - December 2025",
    role: "UI/UX Designer",
    heroImage: {
      src: "/img.png",
      alt: "Temporary interactive landing project preview",
    },
    demoUrl: "https://example.com/temp-interactive-landing",
    repoUrl: "https://github.com/Bloxmine/node-flipdots",
    demoVideoUrl: "/a72b935c-3f31-4e8d-96ec-1f29d0466e63.mov",
    stack: ["Next.js", "Figma"],
    highlights: [],
    whatILearned: [
      "Client Communication & Alignment: I gained experience in presenting my ideas to a professional agency and learning how to adapt based on their specific requirements.",
      "Problem-Solving: I learned to align my design decisions with the client's business goals and improved my problem-solving skills by analyzing a technical limitation and developing a creative solution for it."
    ],
    aboutTheClient: {
      name: "",
      description: `The Omnipresent World of Wizkids is a Dutch creative technology company that builds scalable digital products for global clients.\nProblem: The agency has a custom 84x28 pixel flip-dot matrix display that acted as dead space in their office. They needed a functional and entertaining solution to transform this hardware into an engaging tool for employees and visiting clients.`
    },
  },
  {
    slug: "temp-data-visualization",
    title: "Virtual gallery",
    subtitle: "Individual project",
    summary:
      "This individual project is an interactive 3D gallery built to showcase a collection of Renaissance paintings. Moving away from traditional 2D layouts, I used this project to experiment with immersive web environments. The gallery features a custom-built 3D space with classical architectural elements where users can navigate freely using keyboard and mouse controls. To complete the experience, I integrated ambient music and interactive descriptions that appear as the user approaches each artwork.",
    year: "2026",
    period: "June 2025",
    role: "Creative Developer & Designer",
    heroImage: {
      src: "/Group_7.png",
      alt: "Temporary data visualization preview",
    },
    demoUrl: "https://project-x-phi-five.vercel.app/",
    repoUrl: "https://github.com/krisss96/virtual-gallery",
    demoVideoUrl: "/galvideo.mp4",
    stack: ["Three.js", "JavaScript", "HTML", "CSS", "Licensed 3D Textures"],
    highlights: [],
    whatILearned: [
      "Self-Taught 3D Frameworks: This was my first time working with Three.js. I taught myself how to build a 3D environment from scratch,",
      "Multisensory UX Design: I learned how to balance visual, auditory and informational elements, making the space more interactive and informative for the user.",
      "Performance & Visual Balance: I learned to balance high-quality 3D rendering with web performance by optimizing lighting and shadows.",
    ],
  },
  {
    slug: "temp-animation-studio",
    title: "Belco Allience website",
    subtitle: "Developed for Belco Alliance",
    summary:
      "This project is a complete redesign of the official website for our client, BELCO Alliance, a European university consortium focused on international education. Working with a teammate, we developed a fully functional, modern and user-friendly website designed to serve as a digital hub for students and partners. The redesigned platform effectively communicates our client’s mission and academic offerings. By focusing on an immersive and visually appealing interface, we delivered a consistent final product that enhances BELCO’s global presence and provides a seamless experience for program exploration and engagement.",
    year: "2026",
    period: "May-June 2025",
    role: "Web Designer & Web Developer",
    heroImage: {
      src: "/belcohero.png",
      alt: "Temporary animation studio preview",
    },
    demoUrl: "https://belco-alliance-ashy.vercel.app/",
    repoUrl: "https://github.com/krisss96/BelcoAllianceWebsite",
    demoVideoUrl: "/belcovideo.mp4",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [],
    whatILearned: [
      "Proactive Client Collaboration: Since this was my first time working with a professional organization, I learned how to actively suggest design improvements. I gained confidence in pitching ideas and justifying my technical choices to ensure they truly aligned with the stakeholder needs.",
      "Balancing Immersion and Usability: I focused on creating a consistent visual identity and learned how to integrate immersive elements and smooth interactions while maintaining high standards of user-friendliness.",
    ],
    aboutTheClient: {
      name: "BELCO Alliance is a non-profit consortium of five leading European universities from France, Germany, the Netherlands, Finland, and Denmark. As part of a global network of 20 institutions, they promote internationalization by offering high-quality academic modules, joint research, and student exchanges to a worldwide audience.",
      description: "Problem:The Alliance's original platform was largely non-functional, creating a fractured user experience that failed to represent the network's prestige. Critical barriers - including incomplete functionality, significant content gaps, and complex navigation - made it difficult for visitors to engage with the consortium's offerings. These technical and design issues directly hindered BELCO's mission by preventing effective international collaboration and program discovery."
    }
  }
  /*{
    slug: "bookstore-website",
    title: "Bookstore Website",
    subtitle: "E-commerce platform for independent booksellers",
    summary:
      "A responsive web platform for a local bookstore, featuring inventory management, online ordering, and a blog for book reviews.",
    year: "2026",
    period: "March 2026 - May 2026",
    role: "Full-Stack Developer",
    heroImage: {
      src: "/img_1.png",
      alt: "Bookstore website preview",
    },
    demoUrl: "https://example.com/bookstore-website",
    repoUrl: "https://github.com/example/bookstore-website",
    demoVideoUrl: "https://www.youtube.com/embed/bookstoreDemo",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Built a custom admin dashboard for inventory management.",
      "Integrated Stripe for secure payments.",
      "Added a blog system for book reviews.",
    ],
    whatILearned: [
      "How to design scalable e-commerce data models.",
      "How to implement secure authentication and payments.",
    ],
  },*/
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
