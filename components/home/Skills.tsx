"use client";

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
  SiNotion,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import IconCloudSlug from "../shared/IconCloudSlug";
import ContainerWrapper from "../common/ContainerWrapper";

const technologies = {
  frontend: [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Gatsby", icon: FaBootstrap, color: "text-purple-600" },
    { name: "Framer", icon: SiFramer, color: "text-black dark:text-white" },
    { name: "Redux", icon: SiRedux, color: "text-black dark:text-white" },
    { name: "Jquery", icon: SiJquery, color: "text-black dark:text-white" },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Github", icon: FaGithub, color: "text-black" },
    { name: "Figma", icon: FaFigma, color: "text-purple-500" },
    { name: "Notion", icon: SiNotion, color: "text-black dark:text-white" },
  ],
};

export default function Skills() {
  return (
    <section className="py-10 bg-[#111111]">
      <ContainerWrapper>
        <div className="space-y-5 text-left md:text-center mb-10 text-white">
          <h2 className="text-3xl">Skills Of Mine</h2>
          <p className="max-w-lg md:mx-auto">
            I work with modern tools like React, Next.js, TypeScript, and
            Tailwind CSS to deliver responsive, accessible, and polished user
            experiences.
          </p>
          <p className="max-w-lg md:mx-auto">
            Whether it&apos;s integrating a headless CMS, managing state, or
            building reusable UI components — I focus on writing clean,
            maintainable code that scales.
          </p>
        </div>
        <div className="container mx-auto">
          <IconCloudSlug />
        </div>
        <div className="">
          <TooltipProvider>
            <div className="space-y-8">
              {Object.entries(technologies).map(([section, items]) => (
                <div key={section}>
                  <h3 className="text-xl font-semibold capitalize mb-4 text-white">
                    {section}
                  </h3>
                  <div className="flex flex-wrap gap-5">
                    {items.map((tech) => {
                      const IconComponent = tech.icon;
                      return (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <div className="group cursor-pointer">
                              <div className="w-16 h-16 rounded-full shadow flex items-center justify-center bg-white">
                                <IconComponent
                                  className={`w-8 h-8 ${tech.color}`}
                                />
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="relative text-xs px-3 py-2 rounded text-white bg-gray-900"
                          >
                            <p>{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </ContainerWrapper>
    </section>
  );
}
