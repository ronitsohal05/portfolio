import HomeSection from "./HomeSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ToolsSection from "./ToolsSection.jsx";

export default function RightSections() {
  const stats = [
  { value: "12+", label: "PROJECTS BUILT" },
  { value: "300+", label: "BUGS FIXED" },
  { value: "100+", label: "LATE NIGHTS DEBUGGING" },
];


  const projects = [
  {
    title: "Guardian",
    subtitle: "Real-Time Computer Vision & Event Processing System",
    img: "icons/guardian.png",
    link: "https://github.com/ronitsohal05/Guardian"
  },
  {
    title: "GymBro AI",
    subtitle: "Multimodal AI Fitness Assistant",
    img: "icons/gymbro.png",
    link: "https://github.com/ronitsohal05/gymbro"
  },
  {
    title: "HopMatch",
    subtitle: "Scalable Team Matching Platform",
    img: "/icons/hophacks.png",
    link: "https://github.com/HopHacks/hophacks-flask"
  },
  {
    title: "WordLink",
    subtitle: "Word Game made for my First Year Seminar class",
    img: "icons/wordlink.png",
    link: "https://wordlinkfys.netlify.app/"
  },
  {
    title: "Connect",
    subtitle: "Congressional App Challenge Winner",
    img: "/icons/connect.png",
    link: "https://www.congressionalappchallenge.us/22-fl25/"
  },

];


  const experience = [
  {
    company: "Johns Hopkins University",
    desc: "Undergraduate Research Assistant working on applied machine learning and multimodal AI systems, focusing on real-world data pipelines, model evaluation, and system-level integration.",
    dates: "2024 – Present",
  },
  {
    company: "Johns Hopkins Medicine",
    desc: "Teaching Assistant for Data Structures, supporting students through office hours, code reviews, and concept explanations covering algorithms, complexity analysis, and implementation details.",
    dates: "2024 – Present",
  },
  {
    company: "HopHacks",
    desc: "Website Team Lead responsible for building and maintaining the official hackathon platform, collaborating with designers and organizers to deliver a scalable, reliable experience for hundreds of participants.",
    dates: "2023 – Present",
  },
];


  const tools = [
  // Languages
  {
    icon: "/icons/java.png",
    name: "Java",
    sub: "Programming Language",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    name: "Python",
    sub: "Programming Language",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    name: "C / C++",
    sub: "Systems Programming",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "JavaScript",
    sub: "Web Programming",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    name: "TypeScript",
    sub: "Typed JavaScript",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    name: "HTML / CSS",
    sub: "Web Markup & Styling",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    name: "SQL",
    sub: "Relational Databases",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
    name: "R",
    sub: "Statistical Computing",
  },

  // Frameworks & Libraries
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    name: "React",
    sub: "Frontend Framework",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
    name: "Flask",
    sub: "Backend API Framework",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    name: "Spring Boot",
    sub: "Java Backend Framework",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    name: "Keras",
    sub: "Deep Learning",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    name: "TensorFlow",
    sub: "Machine Learning",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    name: "Scikit-learn",
    sub: "Machine Learning",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png",
    name: "Selenium",
    sub: "Browser Automation",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/LangChain_logo.png",
    name: "LangChain",
    sub: "LLM Orchestration",
  },

  // Tools & Platforms
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    name: "AWS",
    sub: "Cloud Infrastructure",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    name: "MongoDB",
    sub: "NoSQL Database",
  },
  {
    icon: "https://cdn.simpleicons.org/firebase",
    name: "Firebase",
    sub: "Backend Platform",
  },
  {
    icon: "/icons/java.png",
    name: "Pinecone",
    sub: "Vector Database",
  },
  {
    icon: "https://cdn.simpleicons.org/git",
    name: "Git",
    sub: "Version Control",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    name: "VS Code",
    sub: "Code Editor",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
    name: "Postman",
    sub: "API Testing",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    name: "Linux",
    sub: "Operating System",
  },
  {
    icon: "icons/docker.png",
    name: "Docker",
    sub: "Containers",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    name: "OpenAI API",
    sub: "LLMs & AI APIs",
  },
];


  return (
    <div className="space-y-24">
      <HomeSection stats={stats} />
      <ProjectsSection projects={projects} />
      <ExperienceSection items={experience} />
      <ToolsSection tools={tools} />
    </div>
  );
}
