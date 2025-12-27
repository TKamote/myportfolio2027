export const portfolioData = {
  personal: {
    name: "David Verano",
    title: "Solopreneur & Mobile App Developer",
    tagline: "Building complete mobile solutions from scratch",
    location: "Singapore",
    email: "david@pdfreportmaker.com",
    emails: [
      "david@pdfreportmaker.com",
      "admin@tkamot.com",
      "support@tournatracker.com",
    ],
    github: "https://github.com/TKamote",
    keyHighlight: "Started coding in 2020 in a journey that as of today (Dec 2025 @57yo) has 2 apps live on the Apple App Store.",
  },
  about: {
    brief: "I'm a solopreneur who builds mobile apps from concept to App Store. From designing logos to managing infrastructure, I handle every aspect of the development process. Started coding in 2020 in a journey that as of today (Dec 2025 @57yo) has 2 apps live on the Apple App Store.",
    full: `I started my coding journey in 2020 at the age of 52, proving that it's never too late to learn something new. Now at 57, I've built and launched 2 mobile applications on the Apple App Store, with over 75 repositories on GitHub.

As a solopreneur, I handle every aspect of mobile app development from initial concept to App Store submission. This includes designing logos, developing the apps, building supporting websites, managing hosting infrastructure, and maintaining email services. My deployment workflows are fully automated and habitual - from creating a Next.js folder to pushing to GitHub, automating Vercel deployment and pointing to my Hostinger domain, or deploying mobile apps from Cursor IDE through EAS Expo to App Connect and the Apple App Store.

My approach to development combines modern tools with AI-assisted workflows, using Cursor IDE and GitHub Copilot to enhance productivity. I specialize in mobile app development for iOS and Android, with expertise in React Native, Expo, and Firebase.

As a Singapore Permanent Resident, I'm passionate about creating practical applications that solve real-world problems, from field report generation to tournament tracking systems.`,
    achievements: [
      "2 apps live on Apple App Store",
      "75+ GitHub repositories",
      "Active livestreamer with custom overlay technology",
      "Specialized in mobile app development",
    ],
  },
  skills: {
    categories: [
      {
        name: "Mobile",
        items: ["React Native", "Expo", "TypeScript", "iOS", "Android"],
      },
      {
        name: "Backend",
        items: ["Firebase", "Firestore", "Auth", "Functions", "Storage"],
      },
      {
        name: "Design",
        items: ["Logo design", "UI/UX", "Brand identity"],
      },
      {
        name: "Infrastructure",
        items: ["Web hosting", "Email services", "Domain management"],
      },
      {
        name: "Deployment",
        items: ["Vercel", "EAS", "App Store", "Automated workflows"],
      },
      {
        name: "Tools",
        items: ["Cursor IDE", "GitHub", "OBS Studio", "EAS Expo"],
      },
    ],
  },
  whatIDo: [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "iOS & Android apps with React Native and Expo",
    },
    {
      icon: "🎨",
      title: "Logo & Brand Design",
      description: "Creating logos and brand identity for apps",
    },
    {
      icon: "🌐",
      title: "Website Development",
      description: "Portfolio sites and project websites",
    },
    {
      icon: "☁️",
      title: "Infrastructure Management",
      description: "Hostinger hosting, Titan email, domain management",
    },
    {
      icon: "🚀",
      title: "Automated Deployment",
      description: "Next.js/Vercel and EAS/App Store workflows",
    },
    {
      icon: "🔥",
      title: "Firebase Backend",
      description: "Firestore, Auth, Functions, Storage",
    },
    {
      icon: "📺",
      title: "Live Streaming Tech",
      description: "Custom overlay systems and OBS integration",
    },
  ],
  projects: [
    {
      id: "pdf-report-maker",
      title: "PDF Report Maker",
      description: "Professional field report generator for inspections and audits",
      shortDescription: "Professional field report generator with templates and photo integration",
      tech: ["React Native", "Expo", "Firebase"],
      status: "Live on App Store",
      website: "https://pdfreportmaker.com/",
      appStore: "https://apps.apple.com/sg/app/pdf-report-maker/id6746045625",
      github: "#",
      features: [
        "Multiple professional templates",
        "Photo integration",
        "Customizable input fields",
        "Shareable PDF generation",
      ],
    },
    {
      id: "tourtrack",
      title: "TourTrack",
      description: "Billiard tournament tracking and management system",
      shortDescription: "Tournament tracking and management for billiard competitions",
      tech: ["React Native", "Expo", "Firebase"],
      status: "Live on App Store",
      website: "https://www.tournatracker.com/",
      appStore: "https://apps.apple.com/app/id674856576",
      github: "#",
      features: [
        "Tournament management",
        "Live scoring",
        "Player tracking",
        "Match scheduling",
      ],
    },
    {
      id: "live-streaming-overlay",
      title: "Live Streaming Overlay System",
      description: "Custom overlay application for professional billiard livestreams",
      shortDescription: "Professional livestream overlays with real-time data visualization",
      tech: ["React", "TypeScript", "OBS Studio"],
      status: "In Use",
      website: "#",
      youtube: "https://www.youtube.com/@PinoySGBilliards",
      github: "#",
      features: [
        "Live scoring overlay with real-time updates",
        "Turn indicators",
        "Ball tracking (visual tracking of all 9 balls)",
        "OBS Studio integration",
        "4K video support",
      ],
      hasImages: true,
    },
  ],
  content: {
    youtube: {
      name: "Pinoy SG Billiards",
      url: "https://www.youtube.com/@PinoySGBilliards",
      description: "Livestreaming billiard tournaments with custom overlay technology",
    },
    facebook: {
      name: "Pinoy SG Billiards",
      url: "https://www.facebook.com/share/1Ze8kWN3N8/?mibextid=wwXIfr",
      description: "Billiard tournament livestreams with professional overlays",
    },
    textToSpeech: {
      name: "Text to Speech",
      url: "#",
      description: "AI-powered text-to-speech application using Google Cloud services",
      status: "In Development",
    },
  },
  deployment: {
    nextjs: {
      title: "Next.js Web Deployment",
      workflow: [
        "Create project folder",
        "Push to GitHub",
        "Automated Vercel deployment",
        "Point to Hostinger domain",
      ],
      description: "Fully automated workflow from development to production",
    },
    mobile: {
      title: "Mobile App Deployment",
      workflow: [
        "Develop in Cursor IDE",
        "EAS Expo dev tools",
        "Build and submit via App Connect",
        "Automatic upload to Apple App Store",
      ],
      description: "Habitual workflow done efficiently with AI assistance",
    },
  },
  learningJourney: {
    url: "https://tkamote.github.io/MyPortfolio/",
    description: "View my detailed learning journey timeline (2019-2021)",
  },
};

