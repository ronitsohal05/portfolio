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
      title: "NajmAI",
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
      company: "PixelForge Studios",
      desc: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
      dates: "Jan 2020 – Present",
    },
    {
      company: "BlueWave Innovators",
      desc: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
      dates: "Jun 2017 – Dec 2019",
    },
    {
      company: "TrendCraft Solutions",
      desc: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
      dates: "Mar 2015 – May 2017",
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
