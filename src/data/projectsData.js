export const projectsData = [
  {
    id: "luxurystay",
    slug: "luxurystay",
    name: "LuxuryStay",
    tagline: "Full-Featured Luxury Hotel Booking & Vacation Rental Platform",
    category: "FrontEnd Web App",
    role: "Frontend Developer",
    timeline: "2026",
    duration: "3 Weeks",
    status: "Live & Active",
    client: "Personal Portfolio Project",
    image: "/images/Project/luxurystay.png",
    code: "https://github.com/ayan1906/LuxuryStay",
    live: "https://luxury-stay-ayan.vercel.app/",
    overview:
      "LuxuryStay is a modern, high-end hospitality reservation platform designed to give travelers an effortless booking experience. Built with React and Tailwind CSS, it features real-time room availability, customizable date selection, guest capacity controls, and seamless authentication powered by Supabase. The goal was to emulate the polished user experience of world-class platforms like Airbnb and Booking.com while maintaining instantaneous state synchronization with Redux Toolkit.",
    story:
      "Planning a luxury vacation should feel effortless from the very first click. LuxuryStay was conceived to bridge the gap between heavy, clunky hotel websites and modern, fluid single-page applications. By combining Supabase for secure identity management, Redux for synchronized reservation states, and Tailwind for responsive design, LuxuryStay delivers a refined reservation experience across all screen sizes.",
    metrics: [
      { label: "Search Latency", value: "< 250ms" },
      { label: "Mobile Responsive", value: "100%" },
      { label: "Auth Provider", value: "Supabase" },
      { label: "State Management", value: "Redux Toolkit" },
    ],
    features: [
      {
        title: "Real-Time Room Booking",
        description:
          "Interactive date-range selection with dynamic pricing calculation based on guest count, nights stayed, and seasonal discounts.",
        icon: "Calendar",
      },
      {
        title: "Secure Supabase Authentication",
        description:
          "User registration, login, and persistent sessions allowing visitors to view and manage their upcoming reservations safely.",
        icon: "ShieldCheck",
      },
      {
        title: "Smart Filter & Sorting System",
        description:
          "Filter accommodations by price tier, luxury rating, room category, and complimentary amenities (pool, spa, Wi-Fi).",
        icon: "Sliders",
      },
      {
        title: "Global Reservation State",
        description:
          "Redux Toolkit state slices ensure user selections, dates, and cart data remain persistent across seamless view transitions.",
        icon: "Layers",
      },
      {
        title: "High-Resolution Gallery & Tours",
        description:
          "Interactive photo galleries with smooth image previews and detailed room specifications.",
        icon: "Eye",
      },
      {
        title: "Mobile-First Fluid Layout",
        description:
          "Fully optimized touch navigation, collapsible drawer menus, and sticky action bars for on-the-go travelers.",
        icon: "Smartphone",
      },
    ],
    techStack: {
      frontend: ["React 19", "Tailwind CSS", "Redux Toolkit", "Lucide React", "Motion"],
      backend: ["Supabase Auth", "Supabase Database", "RESTful Endpoints"],
      tools: ["Vite", "Vercel", "Git & GitHub", "ESLint"],
    },
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router DOM",
      "React Redux",
      "Lucide React",
      "Supabase Auth",
    ],
    challenges: [
      {
        challenge: "Managing complex reservation state across disparate pages and preventing data loss on page refresh.",
        solution:
          "Constructed centralized Redux Toolkit slices with localized persistence, ensuring room selections and date ranges survive page reloads without unnecessary backend calls.",
      },
      {
        challenge: "Ensuring accurate date validation to avoid overlapping bookings and invalid date selections.",
        solution:
          "Built custom date-checking algorithms that prevent selecting past dates and dynamically calculate night totals while disabling conflicting date windows.",
      },
      {
        challenge: "Maintaining top-tier rendering performance when handling high-resolution luxury resort images.",
        solution:
          "Implemented lazy loading with blur-up placeholders and optimized modern web image formats, keeping initial page load under 1.2 seconds.",
      },
    ],
    architecture:
      "LuxuryStay adheres to a feature-driven folder architecture. The presentation layer utilizes modular Tailwind components, business logic is isolated in Redux slices, and authentication tokens are securely managed via Supabase clients with route protection guards.",
  },
  {
    id: "flowflix",
    slug: "flowflix",
    name: "FlowFlix",
    tagline: "Modern Streaming Platform & Entertainment Discovery Hub",
    category: "Entertainment & Media App",
    role: "Frontend Developer",
    timeline: "2026",
    duration: "1 Weeks",
    status: "Live & Active",
    client: "Personal Project",
    image: "/images/Project/flowflix.png",
    code: "https://github.com/ayan1906/Moviebox",
    live: "https://flowflix-jet.vercel.app/",
    overview:
      "FlowFlix is an immersive movie and TV show exploration web application inspired by leading streaming giants. Powered by the TMDB (The Movie Database) API, it gives users access to real-time trending releases, genre filtering, actor filmographies, high-definition embedded trailers, and personalized watchlists.",
    story:
      "With thousands of titles streaming across various networks, discovering what to watch next is often overwhelming. FlowFlix was designed to bring a cinematic, distraction-free discovery experience right into the browser. With dark-mode aesthetic, dynamic hero carousels, and instant debounced search, users can find trailers, plot synopses, and cast details in milliseconds.",
    metrics: [
      { label: "Data Source", value: "TMDB API" },
      { label: "Search Latency", value: "< 180ms" },
      { label: "Trailer Player", value: "HD Modal" },
      { label: "Responsiveness", value: "100%" },
    ],
    features: [
      {
        title: "Live TMDB Sync",
        description:
          "Real-time feeds for Trending Now, Top Rated, Now Playing in theaters, and upcoming blockbuster releases.",
        icon: "Flame",
      },
      {
        title: "Embedded HD Trailer Player",
        description:
          "Watch official YouTube movie trailers directly inside high-definition modal overlays without navigating away.",
        icon: "Zap",
      },
      {
        title: "Debounced Live Search",
        description:
          "Instant search bar with debounced keystrokes to minimize redundant API calls and deliver lightning-fast auto-suggestions.",
        icon: "Sliders",
      },
      {
        title: "Deep Cast & Crew Profiles",
        description:
          "Explore actor biographies, birthday info, social links, and complete filmographies with seamless navigation.",
        icon: "User",
      },
      {
        title: "Personal Watchlist",
        description:
          "Easily bookmark favorite movies and series to your browser storage to plan movie nights anytime.",
        icon: "CheckCircle2",
      },
      {
        title: "Cinematic Dark Interface",
        description:
          "Deep violet and charcoal aesthetic with backdrop blur effects and smooth motion hover animations.",
        icon: "Monitor",
      },
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "JavaScript (ES6+)", "React Router DOM", "Lucide React"],
      backend: ["TMDB API"],
      tools: ["Vite", "Vercel", "Git & GitHub"],
    },
    skills: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router DOM",
      "TMDB API",
      "Responsive Design",
    ],
    challenges: [
      {
        challenge: "Handling TMDB API rate limiting while providing snappy live search feedback.",
        solution:
          "Engineered a custom debouncing hook (350ms delay) that batches search queries and implemented in-memory caching for trending lists to avoid repeat network requests.",
      },
      {
        challenge: "Rendering large lists of movie poster assets without stuttering scrolling performance.",
        solution:
          "Applied responsive poster resolutions (w342 for mobile/grid, w780 for modals, original for hero backdrops) alongside native lazy-loading.",
      },
      {
        challenge: "Creating smooth modal transitions when opening YouTube trailer overlays.",
        solution:
          "Used Framer Motion with backdrop blur filters and locked background scroll during video playback for a truly cinematic feel.",
      },
    ],
    architecture:
      "FlowFlix is built around reusable API service hooks and modular UI cards. Dynamic routing allows every movie, genre, and cast member to have their own shareable URL.",
  },
  {
    id: "cpi-ict",
    slug: "cpi-ict",
    name: "CPI ICT Club",
    tagline: "Official Portal & Community Hub for Chittagong Polytechnic Institute ICT Club",
    category: "Community & Education Portal",
    role: "Lead Frontend Developer",
    timeline: "2026",
    duration: "2 Weeks",
    status: "Live & Maintained",
    client: "CPI ICT Club Organization",
    image: "/images/Project/cpiict.png",
    code: "https://github.com/ayan1906/cpi-ict",
    live: "https://cpi-ict-club1.vercel.app/",
    overview:
      "The official web platform designed and built for the CPI ICT Club at Chittagong Polytechnic Institute. Serving as the central communication and branding hub for hundreds of students, the website highlights upcoming tech workshops, hackathon announcements, executive leadership, photo archives, and registration forms.",
    story:
      "Student organizations require clear, engaging communication channels to keep members motivated and informed. CPI ICT Club needed a modern digital home to replace outdated social media announcements. This portal was designed from scratch to present the club's prestigious history, connect aspiring coders, and make event registration effortless.",
    metrics: [
      { label: "Community Reach", value: "500+ Members" },
      { label: "Load Time", value: "< 0.8s" },
      { label: "Accessibility", value: "95%" },
      { label: "Mobile First", value: "100%" },
    ],
    features: [
      {
        title: "Event Schedules & Countdowns",
        description:
          "Live event updates and countdown timers for upcoming seminars, programming bootcamps, and annual tech fests.",
        icon: "Calendar",
      },
      {
        title: "Member Registration System",
        description:
          "Interactive registration workflow allowing students to sign up for club memberships and specialized training tracks.",
        icon: "CheckCircle2",
      },
      {
        title: "Executive Committee Showcase",
        description:
          "Interactive leadership profiles showcasing committee members, their designations, and social/GitHub links.",
        icon: "User",
      },
      {
        title: "Media Gallery & Event Memories",
        description:
          "Curated photo galleries archiving past club workshops, trophy presentations, and campus tech meetups.",
        icon: "Eye",
      },
      {
        title: "Official Notice Board",
        description:
          "Real-time announcements and circulars accessible to all polytechnic students without login friction.",
        icon: "Sparkles",
      },
      {
        title: "Optimized Static Performance",
        description:
          "Ultra-lightweight bundle size ensuring snappy performance even over spotty campus Wi-Fi networks.",
        icon: "Zap",
      },
    ],
    techStack: {
      frontend: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)", "Lucide Icons"],
      backend: ["Static Web / Form Handling"],
      tools: ["Vercel", "Git & GitHub", "Figma"],
    },
    skills: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],
    challenges: [
      {
        challenge: "Designing a responsive structure that renders flawlessly on diverse student devices, from entry-level phones to desktop lab PCs.",
        solution:
          "Adopted a strict mobile-first design system in Tailwind CSS using fluid typography and CSS grid auto-fit patterns.",
      },
      {
        challenge: "Organizing multiple event schedules and executive directories cleanly without cluttering the page.",
        solution:
          "Created modular tabbed views and clean card components with subtle hover micro-interactions to preserve visual hierarchy.",
      },
      {
        challenge: "Achieving ultra-fast load times on low-bandwidth mobile networks.",
        solution:
          "Minified all assets, utilized modern image formats, and avoided heavy external script libraries, achieving sub-second first contentful paint.",
      },
    ],
    architecture:
      "Built with modular components, semantic HTML5, and utility-first Tailwind CSS. It is fully decoupled, lightweight, and continuously deployed via Vercel.",
  },
  {
    id: "movie-explorer",
    slug: "movie-explorer",
    name: "Movie Explorer",
    tagline: "Minimalist & Fast Movie Exploration and Discovery Web Application",
    category: "Web Application",
    role: "Frontend Developer",
    timeline: "2026",
    duration: "1 Week",
    status: "Live & Active",
    client: "Personal Project",
    image: "/images/Project/movieexplore.png",
    code: "https://github.com/ayan1906/Movieexplore",
    live: "https://ayan1906.github.io/Movieexplore/",
    overview:
      "Movie Explorer is a sleek, focused web application engineered to help film buffs explore movies, browse plot summaries, examine genre classifications, and view IMDb rating breakdowns. Designed with an emphasis on speed, clean minimalism, and responsive simplicity.",
    story:
      "Sometimes you want a fast, no-nonsense movie guide that loads instantly without endless popups or bloated scripts. Movie Explorer was created to deliver exactly that: a clean interface where visitors can search for their favorite movies, inspect ratings at a glance, and discover new titles effortlessly.",
    metrics: [
      { label: "Bundle Size", value: "< 45 KB" },
      { label: "Performance", value: "99/100" },
      { label: "Deploy Target", value: "GitHub Pages" },
      { label: "Mobile Ready", value: "100%" },
    ],
    features: [
      {
        title: "Quick-Search Engine",
        description:
          "Instant client-side search allowing users to look up titles in real time without page refreshes.",
        icon: "Sliders",
      },
      {
        title: "IMDb Rating Badges",
        description:
          "High-visibility color-coded badges to identify critically acclaimed releases at a single glance.",
        icon: "Sparkles",
      },
      {
        title: "Adaptive Responsive Grid",
        description:
          "Fluid CSS grid layout that dynamically recalculates column count according to device viewport width.",
        icon: "Monitor",
      },
      {
        title: "Rich Card Previews",
        description:
          "Clean movie cards featuring poster artwork, release dates, synopsis snippets, and genre tags.",
        icon: "Eye",
      },
      {
        title: "Single-Page Simplicity",
        description:
          "Zero unnecessary page reloads for lightning-fast interactions and smooth user browsing.",
        icon: "Zap",
      },
      {
        title: "Automated CI/CD Deploy",
        description:
          "Configured continuous deployment workflow via GitHub Actions pushing directly to GitHub Pages.",
        icon: "FolderGit2",
      },
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "JavaScript (ES6+)"],
      backend: ["Public Movie Data Source"],
      tools: ["GitHub Pages", "Git & GitHub", "Vite"],
    },
    skills: ["React", "Tailwind CSS", "JavaScript", "GitHub Pages"],
    challenges: [
      {
        challenge: "Maintaining uniform card heights across the grid when movie synopses had wildly varying lengths.",
        solution:
          "Utilized Tailwind CSS line clamping (`line-clamp-3`) and flexbox layout techniques to preserve clean vertical alignment.",
      },
      {
        challenge: "Configuring base path routing properly for GitHub Pages hosting.",
        solution:
          "Set up the Vite `base` repository configuration and automated build scripts for effortless deployment.",
      },
    ],
    architecture:
      "A lightweight single-page React app with functional components, custom state hooks, and utility styling via Tailwind CSS.",
  },
];

export const getProjectById = (idOrSlug) => {
  if (!idOrSlug) return null;
  const normalized = idOrSlug.toLowerCase().trim();
  return (
    projectsData.find(
      (p) =>
        p.id.toLowerCase() === normalized ||
        p.slug.toLowerCase() === normalized ||
        p.name.toLowerCase().replace(/\s+/g, "-") === normalized
    ) || null
  );
};

export const getAdjacentProjects = (currentId) => {
  const currentIndex = projectsData.findIndex(
    (p) => p.id === currentId || p.slug === currentId
  );
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (currentIndex + 1) % projectsData.length;
  return {
    prev: projectsData[prevIndex],
    next: projectsData[nextIndex],
  };
};
