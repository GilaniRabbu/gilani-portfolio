import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiJquery,
  SiFramer,
} from "react-icons/si";

const LogoColor = "#0084D1";

const techStack = [
  { name: "HTML", icon: <FaHtml5 size={50} color={LogoColor} /> },
  { name: "CSS", icon: <FaCss3Alt size={50} color={LogoColor} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color={LogoColor} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={50} color={LogoColor} /> },
  { name: "Javascript", icon: <FaJs size={50} color={LogoColor} /> },
  { name: "Jquery", icon: <SiJquery size={50} color={LogoColor} /> },
  { name: "React", icon: <FaReact size={50} color={LogoColor} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color={LogoColor} /> },
  { name: "Typescript", icon: <SiTypescript size={50} color={LogoColor} /> },
  { name: "Redux", icon: <SiRedux size={50} color={LogoColor} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color={LogoColor} /> },
  { name: "Express", icon: <SiExpress size={50} color={LogoColor} /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color={LogoColor} /> },
  { name: "Figma", icon: <FaFigma size={50} color={LogoColor} /> },
  { name: "Framer", icon: <SiFramer size={50} color={LogoColor} /> },
  { name: "Git", icon: <FaGitAlt size={50} color={LogoColor} /> },
  { name: "Github", icon: <FaGithub size={50} color={LogoColor} /> },
  { name: "Firebase", icon: <SiFirebase size={50} color={LogoColor} /> },
];

export default function TechSlider() {
  return (
    <div className="bg-[#111111] text-white py-10 px-8 md:px-16">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between gap-10">
        <Marquee gradient={false} speed={60}>
          {techStack.map((tech, index) => (
            <div key={index} className="mx-6 flex flex-col items-center">
              {tech.icon}
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
