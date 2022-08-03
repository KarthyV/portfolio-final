import emoji from "react-easy-emoji";

export const greetings = {
  name: "Karthick V",
  title: "Hi all, I'm Karthick",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with React.js, Node and MongoDB .",
  resumeLink:
    "https://drive.google.com/file/d/16qB7_SQuy5-UtWUl60IRSXmfzzDVhUvI/view?usp=sharing",
};

export const openSource = {
  githubUserName: "KarthyV",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/karthi.karthick.330",
  instagram: "https://www.instagram.com/call_me_karthy",
  twitter: "https://twitter.com/karthy_V_",
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
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
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
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
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
    name: "Foodzie",
    desc: "A continental Recipe App,  easy to make your favorite recipe on your own.",
    tech: [
      "React",
      "Auth0",
      "Material UI",
      "MongoDB Atlas",
      "Node",
      "JWT",
      "Netlify",
      "Heroku",
    ],
    link: "https://foodzie-app.netlify.app",
    FrontEnd: "https://github.com/KarthyV/foodzie-frontEnd",
    BackEnd: "https://github.com/KarthyV/foodzie-server",
  },
  {
    name: "Youtube (Lite version)",
    desc: "A lite version of youtube made with youtube API and firebase",
    tech: ["React", "Firebase", "Material UI", "FireStore", "Redux"],
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
      "Node",
      "Redux",
    ],
    link: "https://stackoverflow-clone-41d61.firebaseapp.com",
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
