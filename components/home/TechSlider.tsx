"use client";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="#ffffff" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38BDF8" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "Express", icon: <SiExpress size={50} color="#ffffff" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="#ffffff" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} color="#38BDF8" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "Express", icon: <SiExpress size={50} color="#ffffff" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
];

const TechSlider = () => {
  return (
    <div className="bg-black text-white py-10 px-6 md:px-16">
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
};

export default TechSlider;
