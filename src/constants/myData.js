export const myData = {
  name: 'Vishwas Pandey',
  email: 'Vishwaspandey440@gmail.com',
  github: 'https://github.com/Vishwas-Pandey',
  headline:
    'Final-year B.Tech CSE student with strong foundations in Data Structures & Algorithms, OOP, and full-stack development.',

  summary:
    'Final-year B.Tech CSE student skilled in system design, networking (CCNAv7 certified), and building scalable web solutions. Eager to contribute to software development, testing, and networking challenges in a fast-paced environment.',

  links: {
    github: 'https://github.com/Vishwas-Pandey',
    linkedin: 'https://www.linkedin.com/in/vishwas-pandey-tech',
    resume: 'https://drive.google.com/file/d/1Y9u6bm7yGDzNEMbVbHndDmE3-5XTryFn/view?usp=sharing',
  },

  // FIXED: This is now a single object as the chatbot expects.
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    college: 'Amity University, Noida',
    period: '2022-2026',
    cgpa: '6.88',
  },

  tech_stack: {
    languages: ['C++ (Primary)', 'Python', 'JavaScript', 'SQL'],
    frameworks_libraries: ['React.js', 'Tailwind CSS', 'Node.js', 'Three.js', 'Express.js'],
    databases: ['MongoDB'],
    core_concepts: ['Data Structures & Algorithms', 'OOP', 'System Design (basics)'],
    web_tools: ['HTML', 'CSS', 'Git', 'GitHub', 'VS Code', 'Firebase', 'Kali Linux'],
    networking: ['CCNAv7 (Routing, Switching, Fundamentals)', 'Cisco Packet Tracer'],
  },

  experience: [
    {
      title: 'Frontend Developer Intern',
      company: 'Jabsz Gaming Studios',
      period: 'May 2025 - July 2025',
      location: 'Remote',
      responsibilities: [
        'Developed Bug Buster, a real-time browser game with 100+ users, using React.js, Tailwind CSS & Firebase.',
        'Integrated Firestore DB, a real-time leaderboard, and audio effects to boost user engagement by 30%.',
        'Optimized UI reactivity and input handling with custom React hooks, reducing lag by 40%.',
        'Collaborated in a 4-member Agile team using Git and Trello, completing all sprints on time.',
      ],
    },
    {
      title: 'React Developer Intern',
      company: 'Prodigy InfoTech',
      period: 'June 2024',
      location: 'Remote',
      responsibilities: [
        'Built and deployed 3 mini React apps (weather, dashboard, to-do list) achieving a 90%+ Lighthouse score.',
        'Reused custom components and integrated REST APIs to cut development time by 40%.',
        'Ensured mobile responsiveness across 95% of screen sizes using Flexbox and Tailwind CSS.',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'CodSoft',
      period: 'May 2024',
      location: 'Remote',
      responsibilities: [
        'Developed multiple static websites and mini-games using HTML, CSS, and JavaScript, focusing on responsive layouts and optimized load speeds.',
      ],
    },
  ],

  projects: [
    {
      id: 'iphone-clone',
      name: 'iPhone Clone Website',
      description:
        'Built a 3D interactive product showcase replicating the iPhone landing page, implementing real-time 3D rendering, animations, and smooth UI transitions.',
      tech: ['React.js', 'Three.js', 'Tailwind CSS'],
      repo: '',
      live_url: '',
    },
    {
      id: 'backend-api',
      name: 'Backend API',
      description:
        'Developed a RESTful backend with authentication, user management, and CRUD operations. Integrated MongoDB for scalable data storage and implemented JWT-based authentication.',
      tech: ['Node.js', 'Express.js', 'MongoDB'],
      repo: '',
      live_url: '',
    },
    {
      id: 'binary-tree-visualizer',
      name: 'Binary Tree Visualizer',
      description:
        'Created an interactive tool to visualize insertion, deletion, and traversal algorithms in binary trees, enhancing the learning of recursion & DSA concepts.',
      tech: ['JavaScript', 'DSA'],
      repo: 'https://github.com/Vishwas-Pandey/BinaryTreeVisualizer.git',
      live_url: '',
    },
    {
      id: 'hate-speech-detection',
      name: 'Hate Speech Detection',
      description:
        'Pre-processed a raw dataset and trained ML models to detect hate speech, achieving 82% classification accuracy.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn'],
      repo: 'https://github.com/Vishwas-Pandey/Hate-Speech-Detection.git',
      live_url: '',
    },
    {
      id: 'type-strike',
      name: 'Type Strike',
      description: 'A typing speed test game to improve accuracy and speed.',
      tech: ['React.js', 'JavaScript'],
      repo: 'https://github.com/Vishwas-Pandey/Type-Strike.git',
      live_url: '',
    },
  ],

  achievements: [
    'Tata Imagination Challenge - National Semi-Finalist',
    'IET PATN 2024 - Special Recognition',
    'Core Volunteer - Amity Technical Placement Cell (ATPC)',
    'Volunteer at AICTE Pentathon, IEEE Events, and Amity Summer School 2024',
    'Participation in Adobe India Hackathon, TVS Credit E.P.I.C 6.0, and Flipkart GRiD 6.0',
  ],

  certifications: ['Cisco CCNAv7 - Introduction to Networks', 'NPTEL - Software Conceptual Design'],
};

export default myData;
