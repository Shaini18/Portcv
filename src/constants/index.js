import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a final-year engineering student at NIT Arunachal Pradesh in the ECE department with a passion for both web development and software development.I have developed strong front-end skills using HTML, CSS, JavaScript, and React, as well as back-end expertise in Node.js, SQL, and MySQL. Alongside my web development pursuits, I am also interested in robotics and signals, aiming to apply my technical knowledge to create innovative solutions and impactful projects.`;

export const ABOUT_TEXT = `To support myself, I have taken on several freelancing projects, where I quickly adapt to new challenges and deliver quality work. A quick learner by nature, I thrive in dynamic environments. Alongside my technical pursuits, I’ve held leadership positions in college clubs and served as a student body-elected representative, showcasing my ability to balance multiple responsibilities. I'm also interested in finance and always look for innovative solutions to complex problems..`;

export const EXPERIENCES = [
  {
    Duration: "Dec 2023- Feb 2024",
    role: "Full Stack Developer Intern",
    company: "GETMAX SOLUTIONS",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs . Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["CSS", "Javascript", "React.js", "Next.js"],
    link : ["https://drive.google.com/file/d/1tvNQhcrY9T7yxQSqU88lOB9IU3lJ12Ea/view?usp=drivesdk"]
  },
  {
    Duration: "Feb 2023-June2023",
    role: "Research Intern",
    company: "NIT Arunachal Pradesh",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    link :["https://drive.google.com/file/d/1twb2NmRGJaC_3yXJPT-PWjFcVCJ71p2G/view?usp=drivesdk "],
  },
 

];

export const PROJECTS = [
  {
    title: "HealthCare RCM",
    image: project1,
    description:
      "A website for Getmax Solutions company which help users to clain medical health insurance and manage billings .",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    link : ["https://gms-rcm.vercel.app/"],
  },
  {
    title: "SHEC",
    image: project2,
    description:
      "A website for a dubai based construction company showcasing their projects, way to contact and Portfolio.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    link : ["https://shec-alpha.vercel.app/"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Robot ARM Manipulation",
    image: project4,
    description:
      "A robotic arm able to move according to hand gestures.",
    technologies: ["Arduino IDE", "Raspberry Pi", "Jupiter Notebook", "Python"],
  },
];

export const CONTACT = {
  address: "Gaya, Bihar, India ",
  phoneNo: "+91 9142650082 ",
  email: "ayushgaya7454@gmail.com",
};
