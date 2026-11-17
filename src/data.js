// All the words on the site live here. Every claim comes from my resume or from the
// project repositories themselves.

export const PROFILE = {
  name: 'Vishwas Pandey',
  email: 'Vishwaspandey440@gmail.com',
  github: 'https://github.com/Vishwas-Pandey',
  linkedin: 'https://www.linkedin.com/in/vishwas-pandey-tech',
}

export const MARQUEE = [
  'C++', 'C#', 'TypeScript', 'JavaScript', 'SQL', 'React', 'Next.js', 'Node.js', 'ASP.NET',
  'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Docker', 'GitHub Actions', 'Vitest', 'Unity',
]

// A simplified trace of one checkout in Bougsk. Shown in the hero.
export const LOG = [
  ['09:14:02', 'POST', 'create-order', 'signed-in user, rate limited'],
  ['09:14:02', 'PRICE', 'read from database', 'the browser sent ids only'],
  ['09:14:03', 'TXN', 'create_order_tx', 'order BOUGSK-000123 pending'],
  ['09:14:03', 'RZP', 'order created', 'exact total, in paise'],
  ['09:14:21', 'PAY', 'payment succeeded', 'browser calls verify-payment'],
  ['09:14:21', 'HMAC', 'sha256 verified', 'timing-safe comparison'],
  ['09:14:21', 'LOCK', 'confirm_order_payment', 'rows locked, stock re-checked'],
  ['09:14:22', 'OK', 'order confirmed', 'GST invoice issued, emails sent'],
  ['09:14:22', 'HOOK', 'razorpay webhook', 'already_paid, nothing repeated'],
]

export const BOUGSK = {
  title: 'Bougsk',
  kind: 'E-commerce platform, live at bougsk.com',
  text:
    'A candle shop I built and run: customer storefront, a separate admin dashboard and a serverless backend. Customers sign in, pay through Razorpay and get a GST invoice by email. The work that mattered most was the part where things can go wrong: prices, stock, payments and refunds.',
  stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Razorpay', 'Cloudflare Workers', 'Tailwind CSS'],
  live: 'https://bougsk.com',
  stats: [
    { value: 14, label: 'Edge Functions' },
    { value: 24, label: 'database migrations' },
    { value: 48, label: 'unit tests on pricing, refunds and signatures' },
  ],
}

export const PROJECTS = [
  {
    n: '02',
    title: 'DayMark',
    kind: 'Tasks, habits, goals and an AI assistant',
    text:
      'Full-stack productivity app. Short-lived JWT access tokens with rotating refresh cookies, bcrypt, Zod validation on every request, and 30 API tests that run against an in-memory MongoDB in CI.',
    stack: ['React', 'Express 5', 'MongoDB', 'Vitest'],
    live: 'https://day-mark-five.vercel.app',
    code: 'https://github.com/Vishwas-Pandey/DayMark',
  },
  {
    n: '03',
    title: 'AI-HRMS',
    kind: 'Role-based HR system',
    text:
      'Admin, HR, manager and employee roles with middleware-protected APIs for employees, attendance, payroll and performance reviews, plus Gemini-powered tools for insights and resume screening.',
    stack: ['React', 'Express', 'MongoDB', 'Gemini'],
    live: 'https://hr-management-system-eta-ten.vercel.app/login',
    code: 'https://github.com/Vishwas-Pandey/AI-HRMS-',
  },
  {
    n: '04',
    title: 'Release the Arrow',
    kind: 'Android puzzle game, Unity',
    text:
      'A tap puzzle with 1,500 procedurally generated levels, each checked by a solver so it can always be completed. Submitted to Google Play and in review.',
    stack: ['Unity', 'C#'],
    code: 'https://github.com/Vishwas-Pandey/Arrow-Release',
  },
  {
    n: '05',
    title: 'Flying Bird',
    kind: 'Android arcade game, Unity',
    text:
      'Tap-to-fly arcade game with local high scores, rewarded ads and consent handling. Submitted to Google Play and in review.',
    stack: ['Unity', 'C#'],
    code: 'https://github.com/Vishwas-Pandey/OneMore',
  },
  {
    n: '06',
    title: 'Type Strike',
    kind: 'Browser typing game',
    text:
      'Words fall in red circles and speed up as your score rises. Scores are saved to Firebase Firestore and the top three show on a leaderboard.',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    live: 'https://type-strike-eight.vercel.app',
    code: 'https://github.com/Vishwas-Pandey/Type-Strike',
  },
  {
    n: '07',
    title: 'Binary Tree Visualizer',
    kind: 'Learning tool',
    text:
      'Build a binary tree by hand and watch inorder, preorder, postorder and level-order traversals run one node at a time.',
    stack: ['React', 'Vite'],
    live: 'https://binary-tree-visualizer-azure.vercel.app',
    code: 'https://github.com/Vishwas-Pandey/BinaryTreeVisualizer',
  },
]

export const FLOW = [
  {
    node: 'Browser',
    tag: 'Cart',
    title: 'The browser says what, never how much',
    text:
      'The cart stores product ids and quantities. Prices are never sent, so there is no price to tamper with.',
  },
  {
    node: 'Edge Function',
    tag: 'create-order',
    title: 'The server checks everything again',
    text:
      'Signed-in users only, rate limited, input validated at the boundary. Prices, stock and delivery are read or calculated from the database on the server.',
  },
  {
    node: 'PostgreSQL',
    tag: 'create_order_tx',
    title: 'One transaction writes the order',
    text:
      'The pending order and its items are written together. Totals and GST are computed in numeric, not floats, and order numbers come from a sequence so they never collide.',
  },
  {
    node: 'Razorpay',
    tag: 'Payment',
    title: 'The charge matches the database to the paisa',
    text:
      'The Razorpay order is created from the total the database returned, converted to paise. The customer pays in Razorpay Checkout.',
  },
  {
    node: 'Two paths',
    tag: 'HMAC-SHA256',
    title: 'The browser and the webhook both confirm',
    text:
      'verify-payment recomputes the signature with a timing-safe comparison. Razorpay also calls a webhook, verified on the raw body. If the customer closes the tab, the order is still confirmed.',
  },
  {
    node: 'Confirm',
    tag: 'confirm_order_payment',
    title: 'One function, so they can never disagree',
    text:
      'Rows are locked in a fixed order, stock is re-checked and deducted, the order is marked paid and an invoice number is issued. If a candle sold out meanwhile, the customer is refunded automatically. A repeat call just returns already_paid.',
  },
]

export const EXPERIENCE = [
  {
    when: 'Mar 2026 – Jun 2026',
    role: 'Programmer Analyst Trainee',
    org: 'Cognizant',
    points: [
      'Led a 4-person team building an IoT predictive-maintenance app from scratch: simulated sensor readings come in, and tickets are created automatically when values cross configurable thresholds.',
      'Owned it end to end: object-oriented architecture, sprint planning in Jira, and reviewing teammates’ code before every merge.',
      'Built the backend with ASP.NET, Entity Framework and C# on SQL Server, a React frontend, and containerised it with Docker.',
    ],
  },
  {
    when: 'May 2025 – Jul 2025',
    role: 'Frontend Developer Intern',
    org: 'Jabsz Gaming Studios (remote)',
    points: [
      'Built and deployed a real-time browser game with React and Firebase, with event-driven gameplay.',
      'Wrote reusable UI components and tuned client-side state for smooth performance.',
      'Designed a real-time leaderboard on Firestore for low-latency updates across concurrent players.',
    ],
  },
  {
    when: 'May 2024 – Jun 2024',
    role: 'Web Developer Intern',
    org: 'Prodigy Infotech and CodSoft',
    points: ['Two short web development internships: responsive pages and interactive components in HTML, CSS and JavaScript.'],
  },
]

export const SKILLS = [
  { group: 'Languages', items: ['C++', 'C#', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['ASP.NET', 'Entity Framework', 'Node.js', 'Express', 'REST APIs', 'JWT', 'Supabase Edge Functions'] },
  { group: 'Data', items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { group: 'Practice', items: ['Git', 'GitHub Actions', 'Docker', 'Jira', 'Vitest', 'Postman', 'Unity'] },
  { group: 'Core CS', items: ['Data structures and algorithms', 'OOP', 'Operating systems', 'DBMS', 'Computer networks'] },
]
