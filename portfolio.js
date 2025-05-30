import emoji from "react-easy-emoji";

export const greetings = {
  name: "Karthick V",
  title: "Hi all, I'm Karthick",
  description:
    "A Mechanical Engineer turned Web Developer, Passionate towards new creation and keeping myself up to Date on techs",
  resumeLink: "https://drive.google.com/file/d/1rzcpecLYTb1PRZqWJmiC5RqxslsLdN-3/view?usp=sharing",
};

export const openSource = {
  githubUserName: "KarthyV",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/karthi.karthick.330",
  instagram: "https://www.instagram.com/call_me_karthy",
  // twitter: "https://twitter.com/karthy_V_",
  github: "https://github.com/KarthyV",
  linkedin: "https://www.linkedin.com/in/karthick-v-663252157",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "NEWBIE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) in React.js"),
        emoji("⚡ Building RESTful APIs with Node & Express"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Node",
          fontAwesomeClassname: "vscode-icons:file-type-node",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:folder-type-mongodb-opened",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "vscode-icons:file-type-firebase",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend",
    progressPercentage: "90",
  },
  {
    Stack: "Backend",
    progressPercentage: "75",
  },
  {
    Stack: "Programming",
    progressPercentage: "65",
  },
];

export const educationInfo = [
  {
    schoolName: "SRM University",
    subHeader: "Bachelor of Technology in Mechanical",
    duration: "July 2020 - Nov 2023",
    descBullets: ["Completed with First Class - 8.73 CGPA"],
  },
  {
    schoolName: "Central Polytechnic College",
    subHeader: "Diploma in Mechanical Engineering",
    duration: "May 2015 - Jun 2018",
    descBullets: ["Completed with First Class - 83%"],
  },
];

export const experience = [
  {
    role: "Senior Executive",
    company: "Godrej & Boyce Mfg Co Ltd",
    companylogo: "/img/icons/common/download.png",
    date: "Aug 2019 – Feb 2022",
    // desc: "Senior purchase executive at Godrej & Boyce Mfg Co Ltd",
  },
  {
    role: "Full Stack Developer - Intern",
    company: "Tolemy",
    companylogo:
      "/img/icons/common/logo-placeholder.png",
    date: "Sep 2022 - Dec 2022",
    // desc: "Full Stack Development Training program",
  },
  {
    role: "Full Stack Developer - Intern",
    company: "Klenty",
    companylogo:
    "/img/icons/common/klenty-logo.jpg",
    date: "Dec 2022 - Jan 2023",
    // desc: "Full Stack Developer - Intern",
  },
  {
    role: "Full Stack Developer - Full Time",
    company: "Remitbee India private",
    companylogo: "/img/icons/common/remitbee_logo.jpg",
    date: "Mar 2023 - Present",
    // desc: "Full Stack Developer - Intern",
  },
];

// Added alt text for images and improved descriptions for SEO
export const projects = [
  {
    name: "Amigo (E-commerce)",
    desc: "A responsive e-commerce platform for gadget enthusiasts, built with React and Redux.",
    tech: ["React", "Redux", "BootStrap", "Mongoose", "MongoDB Atlas", "Stripe", "Socket.io"],
    imageURL: "/assets/amigo.PNG",
    altText: "Amigo E-commerce platform screenshot",
    link: "https://karthyv-e-app.netlify.app",
    FrontEnd: "https://github.com/KarthyV/e-commerce-client",
    BackEnd: "https://github.com/KarthyV/e-commerce-server",
  },
  {
    name: "Kanban",
    desc: "A task management web app with a clean and responsive design.",
    tech: ["React", "vite", "Mongoose", "MongoDB Atlas", "Razorpay", "NodeMailer"],
    imageURL: "/assets/kanban.png",
    altText: "Kanban task management app screenshot",
    link: "https://kanban-client-beta.vercel.app",
    FrontEnd: "https://github.com/KarthyV/kanban-client",
    BackEnd: "https://github.com/KarthyV/kanban-server",
  },
  {
    name: "Foodzie",
    desc: "A recipe app with user authentication and a responsive interface.",
    tech: ["React", "Auth0", "Material UI", "MongoDB Atlas", "Node", "JWT", "Mongoose", "Netlify", "Heroku"],
    imageURL: "/assets/foodzie.PNG",
    altText: "Foodzie recipe app screenshot",
    link: "https://foodzie-app.netlify.app",
    FrontEnd: "https://github.com/KarthyV/foodzie-frontEnd",
    BackEnd: "https://github.com/KarthyV/foodzie-server",
  },
  {
    name: "Blog App",
    desc: "A minimalist blog app with responsive design and secure authentication.",
    tech: ["React", "Redux", "BootStrap", "Tailwind css", "Mongoose", "MongoDB Atlas", "JWT"],
    imageURL: "/assets/blog.PNG",
    altText: "Blog app screenshot",
    link: "https://karthyv-blogapp.netlify.app",
    FrontEnd: "https://github.com/KarthyV/Blog---Frontend",
    BackEnd: "https://github.com/KarthyV/Blog---Backend",
  },
  {
    name: "YTC - Lite",
    desc: "An entertainment app leveraging YouTube API and Firebase for a seamless experience.",
    tech: ["React", "Firebase", "Material UI", "FireStore", "Redux"],
    imageURL: "/assets/ytc.PNG",
    altText: "YTC Lite entertainment app screenshot",
    link: "https://clone-4d027.web.app",
    FrontEnd: "https://github.com/KarthyV/youtube-clone",
  },
  {
    name: "StackOverflow (Clone)",
    desc: "A StackOverflow-inspired web app with responsive design and robust backend.",
    tech: ["React", "Firebase", "Material UI", "MongoDB Atlas", "Mongoose", "Node", "Redux"],
    imageURL: "/assets/stack.PNG",
    altText: "StackOverflow clone screenshot",
    link: "https://coruscating-faloodeh-10cdab.netlify.app",
    FrontEnd: "https://github.com/KarthyV/stackoverflow",
    BackEnd: "https://github.com/KarthyV/stackoverflow-backend",
  },
];

export const feedbacks = [
  {
    name: "JLT Reward - Godrej",
    feedback:
      "Received a Just Like That reward for automating the PR process which was manually done.",
  },
  {
    name: "Champion Award - Godrej",
    feedback:
      "Received an Champ award for FY 20-21 as Best operational Executive in Procurement team",
  },
  {
    name: "Employee of the Month - Remitbee",
    feedback:
      "Recognized as Employee of the Month Q3 2024 for outstanding contributions and teamwork.",
  },
  {
    name: "Employee of the Month - Remitbee",
    feedback:
      "Recognized as Employee of the Month Q4 2024 for exceptional performance and dedication.",
  }
];
