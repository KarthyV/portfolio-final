import emoji from "react-easy-emoji";

export const greetings = {
  name: "Karthick V",
  title: "Hi all, I'm Karthick",
  description:
    "A Mechanical Engineer turned Web Developer, Passionate towards new creation and keeping myself up to Date on techs",
  resumeLink: "https://1drv.ms/b/s!AvBAJrn56exbhK8dCFjbLUTf8sfckg?e=5dYht8",
};

export const openSource = {
  githubUserName: "KarthyV",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/karthi.karthick.330",
  // instagram: "https://www.instagram.com/call_me_karthy",
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
    descBullets: ["Part Time Course - Pursuing Currently"],
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
    role: "Junior Executive",
    company: "Godrej & Boyce Mfg Co Ltd",
    companylogo: "/img/icons/common/download.png",
    date: "July 2018 – Aug 2019",
    desc: "Started my career as an junior purchase executive at Godrej & Boyce Mfg Co Ltd",
  },
  {
    role: "Senior Executive",
    company: "Godrej & Boyce Mfg Co Ltd",
    companylogo: "/img/icons/common/download.png",
    date: "Aug 2019 – Feb 2022",
    desc: "Promoted as Senior purchase executive at Godrej & Boyce Mfg Co Ltd",
  },
];

export const projects = [
  {
    name: "Amigo (E-commerce)",
    desc: "An PitStop for gadget lovers",
    tech: [
      "React",
      "Redux",
      "BootStrap",
      "Mongoose",
      "MongoDB Atlas",
      "Stripe",
      "Socket.io",
    ],
    imageURL: "/assets/amigo.PNG",
    link: "https://karthyv-e-app.netlify.app",
    FrontEnd: "https://github.com/KarthyV/e-commerce-client",
    BackEnd: "https://github.com/KarthyV/e-commerce-server",
  },
  {
    name: "Foodzie",
    desc: "A continental Recipe App,  easy to make your favorite recipe on your own.",
    tech: [
      "React",
      "Auth0",
      "Material UI",
      "MongoDB Atlas",
      "Node",
      "JWT",
      "Mongoose",
      "Netlify",
      "Heroku",
    ],
    imageURL: "/assets/foodzie.PNG",
    link: "https://foodzie-app.netlify.app",
    FrontEnd: "https://github.com/KarthyV/foodzie-frontEnd",
    BackEnd: "https://github.com/KarthyV/foodzie-server",
  },
  {
    name: "Blog App",
    desc: "An minimalist blog app made with react,redux,mongodb",
    tech: [
      "React",
      "Redux",
      "BootStrap",
      "Tailwind css",
      "Mongoose",
      "MongoDB Atlas",
      "JWT",
    ],
    imageURL: "/assets/blog.PNG",
    link: "https://karthyv-blogapp.netlify.app",
    FrontEnd: "https://github.com/KarthyV/Blog---Frontend",
    BackEnd: "https://github.com/KarthyV/Blog---Backend",
  },

  {
    name: "YTC - Lite",
    desc: "A entertainment app made with youtube API and firebase",
    tech: ["React", "Firebase", "Material UI", "FireStore", "Redux"],
    imageURL: "/assets/ytc.PNG",
    link: "https://clone-4d027.web.app",
    FrontEnd: "https://github.com/KarthyV/youtube-clone",
  },
  {
    name: "StackOverflow (Clone)",
    desc: "An Web App made just like stackoverflow",
    tech: [
      "React",
      "Firebase",
      "Material UI",
      "MongoDB Atlas",
      "Mongoose",
      "Node",
      "Redux",
    ],
    imageURL: "/assets/stack.PNG",
    link: "https://coruscating-faloodeh-10cdab.netlify.app",
    FrontEnd: "https://github.com/KarthyV/stackoverflow",
    BackEnd: "https://github.com/KarthyV/stackoverflow-backend",
  },
];

export const feedbacks = [
  {
    name: "JLT Reward",
    feedback:
      "Received a Just Like That reward for automating the PR process which was manually done.",
  },
  {
    name: "Champion Award",
    feedback:
      "Received an Champ award for FY 20-21 as Best operational Executive in Procurement team",
  },
];
