import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2022 - Present",
    role: "Software Engineer",
    company: "Punjab Rural Support Programme",
    description: `As a Software Engineer at PRSP, I build and manage websites, 
focusing on a major Angular project for interactive sites. I develop 
APIs with Dot NET WebCore, handle SQL database tasks, and 
enhance functionality with React.js. I oversee project 
maintenance, optimize ERP system performance, assist the CM IT, 
and deploy websites using IIS.`,
    technologies: ["Angular", "React.js", ".net web core", "MsSQL"],
  },
  {
    year: "August 2020 -  Sep 2022",
    role: "Full Stack Developer",
    company: "Evelogics",
    description: `During my tenure at Evelogics Islamabad, I actively engaged in 
various tasks related to my field, consistently delivering results to my 
manager. I spearheaded the development of a responsive 
dashboard with Angular, CSS/Bootstrap, Node.js, and Mongoose 
DB, while also resolving frontend bugs in Flutter applications. 
Additionally, I designed user interfaces with Firebase authentication 
using Flutter, contributing to seamless user experiences.`,
    technologies: ["HTML", "CSS", "Angular", "Node.js","Flutter","Firebase"],
  },

  {
    year: "3 month",
    role: "Internship",
    company: "CT Products (Pvt.) Ltd",
    description: `During my internship at CT Products (Pvt.) Ltd., I specialized in 
graphic design and digital marketing, creating engaging content 
for various platforms and creating website in wordpress.`,
    technologies: ["HTML", "CSS", "wordpress", "AdobePS","AdobeAE","AdobePP"],
  },
 
];
export const EDUCATION = [

  {
    year: "2016 - 2020",
    Degree: "BS Computer Science",
    Uni: "University of Agriculture Faisalabad - Pakistan",
 
  },

]
export const PROJECTS = [
  {
    title: "PHCIP",
    image: project1,
    description:
      "This project, built using Angular for the frontend, .NET Web Core for the backend, and MSSQL for database management, focuses on scheduling and managing meetings efficiently. It allows users to schedule meetings based on roles and geographical areas, ensuring that the right participants are involved. The system is designed to handle diverse meeting requirements, from school visit reviews to administrative discussions, with a streamlined process that promotes effective coordination and accountability. This solution enhances productivity by automating scheduling tasks and providing a centralized platform for meeting management.",
    technologies: ["Angular", ".net web core", "MSSQL","Chart.js"],
  },
  {
    title: "PSSP",
    image: project2,
    description:
      " PSSP is a comprehensive solution designed to manage and monitor school performance effectively. The project involves a mobile app for field officers to record key details during school visits, such as the number of functioning rooms, student and teacher attendance, and overall school operations. This data is seamlessly synced to a centralized dashboard, where administrators can review and analyze the information in real time. By enabling accurate data collection and streamlined reporting, the PSSP ensures transparency, enhances accountability, and supports informed decision-making to improve the quality of education in schools.",
      technologies: ["Angular", ".net web core", "MSSQL","Apexchart"],
  },
  {
    title: "PRSP Website",
    image: project3,
    description:
      "I developed a React-based website with an admin panel, integrating two languages for accessibility and leveraging UI8 for a modern design. The platform allows users to upload job advertisements and update website content easily, ensuring a seamless and user-friendly experience for both administrators and visitors.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap",".net web core", "MSSQL","Apexchart"],
  },
  {
    title: "RTN",
    image: project4,
    description:
      "I developed a fully non-profit RTN website aimed at empowering teachers to manage their students effectively across different areas. The platform features role-based access and enables teachers to organize classes, mark tests, and manage student progress efficiently. Designed to streamline educational management, this system fosters better organization and collaboration, supporting teachers in their mission to enhance student learning outcomes.",
      technologies: ["Angular", ".net web core", "MSSQL","Chart.js"],
  },

  {
    title: "Netlex",
    image: project2,
    description:
      "I contributed to Netlex, an admin and lawyer management system that allows lawyers to register their profiles, manage client cases online, and submit applications efficiently. My responsibilities included designing and developing user-friendly UI/UX pages, integrating RESTful APIs, and managing data storage using MongoDB. Additionally, I worked on building and enhancing the backend using Node.js APIs to ensure seamless functionality and a robust system for legal management.",
      technologies: ["Angular", "Nodejs", "Mongoose"],
  },

  {
    title: "Flutter Applications with Firebase Authentication",
    image: project4,
    description:
      "I have worked on multiple Flutter applications integrated with Firebase Authentication, implementing secure and efficient user authentication systems. These applications support various authentication methods, such as email/password, phone authentication, and third-party logins like Google or Facebook.",
      technologies: ["Flutter", "FirebaseAuth"],
  },

  {
    title: "TubeDownloader",
    image: project1,
    description:
      "TubeDownloader simplifies the process of saving YouTube videos to your device. Easily copy and paste video links, and enjoy downloading your favorite content hassle-free. With TubeDownloader, access your videos offline anytime, anywhere.",
      technologies: ["Next.js", "RapidAPI"],
  },

  {
    title: "SummifyAI",
    image: project3,
    description:
      "Make sense of the web with Summize, your trusted companion for distilling lengthy articles into easily digestible summaries. Unlock the power of knowledge without the overwhelming clutter.",
      technologies: ["Next.js", "RapidAPI"],
  },
];

export const CONTACT = {
  address: "Lahore, Pakistan",
  phoneNo: "+92 3030072101",
  email: "tahrar101@gmail.com",
};
