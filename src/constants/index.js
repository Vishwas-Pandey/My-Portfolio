export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Type Strike',
    desc: 'A browser typing game built with React and Tailwind CSS. Words fall down the screen and you clear them by typing them before they reach the bottom. You have limited lives, and there are sound effects and pause/resume.',
    subdesc:
      'When the game ends, the score is saved to Firebase Firestore and the top three scores are shown on a leaderboard.',
    href: 'https://type-strike-eight.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'AI-HRMS – Smart Human Resource Management System',
    desc: 'An HR management system with a React frontend and a Node.js, Express and MongoDB backend. It has role-based access for admin, HR, manager and employee, and covers employees, payroll, attendance and performance reviews.',
    subdesc:
      'JWT auth with route-level role checks. The AI features (resume screening, review sentiment, an HR chatbot) call the Gemini API.',
    href: 'https://hr-management-system-eta-ten.vercel.app/login',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/java-icon.svg',
      },

      {
        id: 3,
        name: 'Tailwind CSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'DayMark – Productivity & Habit Tracking Web App',
    desc: 'A full-stack productivity app for tasks, habits with streaks, goals, a calendar, a journal and analytics. It also has an AI chat that sees a summary of your open tasks and habits. Built with React, Express 5 and MongoDB.',
    subdesc:
      'JWT access tokens with rotating httpOnly refresh cookies, Zod request validation, and per-user data isolation. There is an API test suite (Vitest, Supertest, in-memory MongoDB) that runs in GitHub Actions.',
    href: 'https://day-mark-ec3y.vercel.app/login',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
      },
      {
        id: 3,
        name: 'Express.js',
        path: '/assets/express.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
    ],
  },
  {
    title: 'hate Speech Detection',
    desc: 'A Jupyter notebook that trains a text classifier to label tweets as hate speech, offensive language, or neither.',
    subdesc:
      'Built with Python, NLTK and scikit-learn: text cleaning and lemmatization, bag-of-words features (CountVectorizer), and a comparison of a decision tree against logistic regression using accuracy, classification reports and confusion matrices.',
    href: 'https://github.com/Vishwas-Pandey/Hate-Speech-Detection',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
    ],
  },
  {
    title: 'Binary Tree Visualizer',
    desc: 'A React app for building a binary tree node by node and watching the four traversals (inorder, preorder, postorder, level order) animate one step at a time.',
    subdesc:
      'You can pause and restart a traversal and edit node values as you go.',
    href: 'https://binary-tree-visualizer-azure.vercel.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Jabsz Gaming Studio',
    pos: 'Front End Developer',
    duration: 'May 2025 - July 2025',
    title:
      'Worked as a Frontend Developer on Color Dash, a real-time reaction speed game, developing responsive UI components with React.js and TailwindCSS, and integrating smooth animations with Framer Motion to enhance gameplay experience.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Prodigy Infotech',
    pos: 'Web Developer',
    duration: 'May 2024 - June 2024',
    title:
      'Contributed to the development of responsive web applications, creating dynamic and interactive features to improve user experience. Worked on building scalable frontend components, integrating APIs, and optimizing performance while adhering to best coding practices in a collaborative team environment.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'CodSoft',
    pos: 'Web Developer',
    duration: 'May 2024 - June 2024',
    title:
      'Developed responsive and interactive web pages using HTML, CSS, and JavaScript, implementing dynamic UI components and user-friendly interfaces while ensuring cross-browser compatibility and smooth performance.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
