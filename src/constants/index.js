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

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Type Strike',
    desc: 'Type Strike is a fast-paced, interactive web-based typing game built using React and Tailwind CSS. Players eliminate falling words by typing them accurately before they reach the bottom, earning points while managing limited lives. The game delivers a smooth and engaging experience through fluid animations, immersive sound effects, real-time score tracking, and intuitive pause/resume controls.',
    subdesc:
      'Designed with a strong focus on UI/UX and performance, Type Strike demonstrates effective state management, responsive design, and component-based architecture. The project showcases the ability to build polished, interactive web applications while paying close attention to user experience, gameplay flow, and frontend best practices.',
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
    desc: 'AI-HRMS is a modern web-based Human Resource Management System designed to streamline employee and administrative workflows. The platform enables efficient employee data management, role-based access, and automated HR operations through a clean and responsive interface. Built with a scalable frontend architecture, the project focuses on usability, performance, and real-world enterprise use cases.',
    subdesc:
      'A full-stack oriented HRMS project built for practical learning and portfolio demonstration, showcasing modern frontend development, API integration, and structured application design.',
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
        path: '/assets/javascript.svg',
      },
      {
        id: 3,
        name: 'Axios',
        path: '/assets/axios.svg',
      },
      {
        id: 4,
        name: 'Tailwind CSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'DayMark – Productivity & Habit Tracking Web App',
    desc: 'DayMark is a full-stack productivity web application designed to help users manage daily tasks and build consistent habits. The platform provides secure user authentication, task creation and tracking, and habit management features through a clean and intuitive interface. Built with a modern web stack, DayMark focuses on performance, usability, and real-world application architecture.',
    subdesc:
      'A full-stack project showcasing authentication, REST API integration, and structured frontend-backend communication, built to demonstrate practical web development and system design skills.',
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
      {
        id: 5,
        name: 'JWT Authentication',
        path: '/assets/jwt.svg',
      },
    ],
  },
  {
    title: 'hate Speech Detection',
    desc: 'A machine learning model designed to automatically detect and classify hate speech in text data. It helps identify offensive, abusive, or harmful content across social media platforms and online forums. The model leverages natural language processing techniques for accurate content moderation.',
    subdesc:
      'Built using Python and popular ML libraries, the model preprocesses text, extracts features, and classifies messages into hate speech or safe content. It can be integrated into web apps or social media tools for real-time moderation.',
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
      {
        id: 2,
        name: 'Machine Learning',
        path: '/assets/ml.svg',
      },
      {
        id: 3,
        name: 'NLP',
        path: '/assets/nlp.svg',
      },
      {
        id: 4,
        name: 'Scikit-learn',
        path: '/assets/sklearn.svg',
      },
    ],
  },
  {
    title: 'Binary Tree Visualizer',
    desc: 'An interactive and educational tool that visually represents binary trees, allowing users to explore and understand tree structures in a dynamic way. It demonstrates key operations such as insertion, deletion, and different traversal methods with real-time animations. This visualizer is ideal for students, educators, and coding enthusiasts looking to strengthen their understanding of data structures through hands-on experience.',
    subdesc:
      'The tool allows users to input custom trees or use predefined examples, providing step-by-step visualization of how each operation affects the tree. It makes complex concepts in binary trees accessible and engaging for learners of all levels.',
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
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
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
