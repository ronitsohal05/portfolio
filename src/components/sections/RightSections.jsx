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
      subtitle: "SaaS Framer Template",
      img: "https://picsum.photos/seed/najmai/160/160",
    },
    {
      title: "Damas",
      subtitle: "Free Framer Template",
      img: "https://picsum.photos/seed/damas/160/160",
    },
    {
      title: "Faseelh",
      subtitle: "Free Framer Template",
      img: "https://picsum.photos/seed/faseelh/160/160",
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
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Framer-logo.svg",
      name: "Framer",
      sub: "Website Builder",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      name: "Figma",
      sub: "Design Tool",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      name: "ChatGPT",
      sub: "AI Assistant",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      name: "Nextjs",
      sub: "React framework",
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
