/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Aryan Majeed",
  title: "Hi all, I'm Aryan",
  subTitle: emoji(

    "Dynamic and self-motivated Full Stack Developer 🚀 with expertise in Next.js, React.js, TypeScript, Tailwind CSS, and MongoDB. Proven track record in designing responsive user interfaces and building scalable solutions. Adept at collaborating with cross-functional teams to deliver high-quality software that meets user needs. Committed to continuous learning and adapting to new technologies in the Continuously advancing tech landscape."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AryanScripts",
  linkedin: "https://www.linkedin.com/in/aryan-majeed-3055b0242/",
  gmail: "aryanmajeed264@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/aryan.majeed.7/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE AND EFFICIENT APPLICATIONS",
  skills: [
    emoji("⚡ Develop highly interactive and responsive Frontend User Interfaces with Next.js, React.js, and Tailwind CSS for web and mobile applications"),
    emoji("⚡ Create robust and scalable Backend services using Node.js, NestJS, and MongoDB"),
    emoji("⚡ Build Progressive Web Applications (PWAs) and Single Page Applications (SPAs) for an enhanced user experience"),
    emoji("⚡ Integrate third-party services such as Firebase, AWS, and Digital Ocean for optimized performance and functionality"),
    emoji("⚡ Ensure seamless API handling, component rendering, and responsive design across platforms")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "SASS",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "TypeScript",
    fontAwesomeClassname: "fab fa-js" // Font Awesome doesn't have a TypeScript icon, using JS as a substitute
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Next.js",
    fontAwesomeClassname: "fas fa-layer-group" // Substituted icon as Font Awesome doesn’t have a Next.js icon
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "NestJS",
    fontAwesomeClassname: "fas fa-cube" // Substituted icon as Font Awesome doesn’t have a NestJS icon
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Tailwind CSS",
    fontAwesomeClassname: "fab fa-css3-alt" // Using CSS icon as substitute since Tailwind doesn’t have a dedicated icon
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Education",
      logo: require("./assets/images/universityofeducation.png"),
      subHeader: "Bachelor of Science in Information Technology (BSIT)",
      duration: "August 2021 - April 2025",
      desc: "Currently pursuing my Bachelor's degree in Information Technology, with a focus on full-stack development and emerging technologies.",
      descBullets: [
        "Gaining expertise in frontend and backend technologies such as Next.js, React.js, TypeScript, and MongoDB",
        "Developing strong foundations in data structures, algorithms, and software engineering principles",
        "Participating in collaborative projects to build practical solutions and enhance team-oriented skills"
      ]
    }
    ,
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Engineer Intern",
      company: "Code Encoders",
      companylogo: require("./assets/images/Code-Encoders.png"),
      date: "June 2022 – Sep 2022",
      desc: "Focused on building interactive, responsive user interfaces for web applications, collaborating with senior developers to learn industry best practices.",
      descBullets: [
        "Worked on creating reusable and modular components with HTML, CSS, and JavaScript",
        "Assisted in optimizing frontend performance and debugging code for a better user experience",
        "Gained exposure to version control with Git and participated in code reviews"
      ]
    },
    {
      role: "Front-End Developer",
      company: "CodersDiv",
      companylogo: require("./assets/images/CoderDivs.jpeg"),
      date: "Aug 2023 – Sep 2024",
      desc: "Led frontend development projects focusing on high-performance web applications and interactive user experiences.",
      descBullets: [
        "Spearheaded the development of responsive web interfaces using React.js, Tailwind CSS, and JavaScript",
        "Collaborated with cross-functional teams to implement design mockups and refine features based on user feedback",
        "Enhanced page load speed and optimized applications for various devices and screen sizes"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Geeksforce",
      companylogo: require("./assets/images/geeksforce_logo.jpeg"),
      date: "Aug 2024 – Present",
      desc: "Developing full-stack applications with a focus on scalability and seamless user experience, utilizing modern frameworks and best practices.",
      descBullets: [
        "Building both frontend (Next.js, TypeScript) and backend (Node.js, NestJS, MongoDB) features for web applications",
        "Collaborating with UX/UI teams to ensure alignment with project goals and deliver optimized, user-friendly solutions",
        "Integrating third-party services and APIs, continuously researching new tools to improve development efficiency"
      ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/Spanlight.png"),
      projectName: "Spanlight",
      projectDesc: "Developed a responsive frontend for a lighting solutions platform using React.js and Bootstrap to enhance user engagement and interaction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spanlite.com/"
        }
      ]
    },
    {
      image: require("./assets/images/pet-daily-kit.png"),
      projectName: "Pet Daily Kit",
      projectDesc: "Built a comprehensive pet management platform, utilizing React.js for the frontend and Node.js with MongoDB for backend functionality, ensuring efficient data handling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://petdailykit.com/"
        }
      ]
    },
    {
      image: require("./assets/images/pedigree-mangager.png"),
      projectName: "Pedigree Manager",
      projectDesc: "Led the development of a pet pedigree management system, using Next.js for optimal page rendering and performance, with robust API integration for data flow and user authentication.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pedigreemanager.co.uk/"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch ☎️"),
  subtitle:
    "I'm available to discuss projects, collaboration opportunities, or answer any questions you may have. Feel free to reach out via phone or email.",
  number: "+92 303 0498275",
  email_address: "aryanmajeed264@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
