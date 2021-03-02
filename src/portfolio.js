/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Chetan",
  title: "Hi all, I'm Chetan",
  subTitle: emoji(
    "A passionate Android Developer 🚀 having an experience of building Mobile and Web applications with Android / Flutter / Reactjs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h70M8bmLsatT3XulDfa-TDt9LarTV7fJ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/csj5483",
  linkedin: "https://www.linkedin.com/in/chetan-b8a79116a/",
  gmail: "csj5483@gmail.com",
  
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ANDROID DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Android Application for your mobile"
    ),
    emoji("⚡ Hybrid Application(Cross-platform) in Flutter and React Native"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "google-maps",
      fontAwesomeClassname: "fas fa-map-marked-alt"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chandigarh Group of Colleges",
      logo: require("./assets/images/cgc.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2017 - Present",
     
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Native App Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Hybrid App Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "75%"
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
      role: "Android Developer",
      company: "Volumetree",
      companylogo: require("./assets/images/volumetree.png"),
      date: "January 2021 – Present",
      desc:
        "Develop Android Applications for Clients",
      descBullets: [
        "Android",
        "RestApi",
        "Google Maps",
        
      ]
    },{
      role: "Android Developer",
      company: "Myemmo",
      companylogo: require("./assets/images/download1.png"),
      date: "June 2020 – July 2020",
      desc:
        "Develop Admin App in Android",
      descBullets: [
        "Android",
        "Volley",
        "SQL",
        
      ]
    },
    
    
    {
      role: "Wordpress Developer",
      company: "Vibha Chopra",
      companylogo: require("./assets/images/vibha.jpg"),
      date: "May 2020 – June 2020",
      desc:
        "Develop Website in Wordpress",
        descBullets: [
          "Wordpress",
          "HTML",
          "CSS",
          
        ]
    },{
      role: "Flutter Developer",
      company: "J&B Technology",
      companylogo: require("./assets/images/jb.jpg"),
      date: "Jan 2020 – Feb 2020",
      desc:
        "Develop Cross-Platform App in Flutter",
        descBullets: [
          "Flutter",
          "SQLite",
          "Local Notifications",
          
        ]
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "csj5483", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/medicine.jpg"),
      projectName: "Medicine Reminder",
      projectS:"Cross-Platform App using Flutter",
      projectDesc: "Allow users to put a reminder for medicine.",
      techstack:"1.Flutter 2.SQLite 3.Local Notifications",
      
      
    },
    {
      image: require("./assets/images/donation.jpg"),
      projectName: "Online Charity",
      projectS:"Native Application using Android",
      projectDesc: "People can donate extra things in a particular radius",
      techstack:"1.Android 2.GeoFire 3.Google Maps",
      
    },{
      image: require("./assets/images/farmer.jpg"),
      projectName: "Farmer's Market",
      projectS:"Android Application",
      projectDesc: "Allow farmers to sell their crops directly to consumer",
      techstack:"1.Android 2.Firebase 3.GeoFire",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};




const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8708354391",
  email_address: "csj5483@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "csj5483", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails
};
