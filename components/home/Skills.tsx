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
        <div className="space-y-5 text-left md:text-center text-gray-300">
          <h2 className="text-4xl font-bold text-green-500">Skills Of Mine</h2>
          <p className="max-w-4xl md:mx-auto sm:text-lg">
            I work with modern tools like React, Next.js, TypeScript, and
            Tailwind CSS to deliver responsive, accessible, and polished user
            experiences.
          </p>
          <p className="max-w-4xl md:mx-auto sm:text-lg">
            Whether it&apos;s integrating a headless CMS, managing state, or
            building reusable UI components — I focus on writing clean,
            maintainable code that scales.
          </p>
        </div>
        <div className="container mx-auto">
          <IconCloudSlug />
        </div>
        <div>
          {/* <TooltipProvider>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
              {Object.entries(technologies).map(([section, items]) => (
                <div key={section} className="border rounded">
                  <div className="border-b">
                    <h3 className="text-xl font-semibold capitalize p-4 text-white">
                      {section}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-5 p-4">
                    {items.map((tech) => {
                      const IconComponent = tech.icon;
                      return (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger asChild>
                            <div className="group cursor-pointer">
                              <div className="w-16 h-16 rounded flex items-center justify-center bg-white">
                                <IconComponent
                                  className={`w-8 h-8 ${tech.color}`}
                                />
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="relative text-xs px-3 py-2 rounded text-stone-950 bg-white"
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
          </TooltipProvider> */}
          <TooltipProvider>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 mt-8">
              {Object.entries(technologies).map(([section, items]) => (
                <div
                  key={section}
                  className="bg-gray-950 border border-gray-700 rounded-lg overflow-hidden font-mono"
                >
                  {/* Code block header */}
                  <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      {section}.js
                    </span>
                  </div>

                  {/* Code content */}
                  <div className="p-4">
                    <div className="text-purple-400 text-sm mb-2">
                      <span className="text-gray-500">01</span>{" "}
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-yellow-300">{section}</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-green-400">{"{"}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 ml-4 mb-2">
                      {items.map((tech) => {
                        const IconComponent = tech.icon;
                        return (
                          <Tooltip key={tech.name}>
                            <TooltipTrigger asChild>
                              <div className="cursor-pointer">
                                <div className="w-12 h-12 rounded bg-gray-800 border border-gray-600 flex items-center justify-center hover:border-gray-500 transition-colors">
                                  <IconComponent
                                    className={`w-6 h-6 ${tech.color}`}
                                  />
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="bg-gray-800 text-green-400 border border-gray-600 font-mono text-xs"
                            >
                              <p>{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        );
                      })}
                    </div>

                    <div className="text-green-400 text-sm mt-6">
                      <span className="text-gray-500">0{items.length + 1}</span>{" "}
                      <span className="text-green-400">{"}"}</span>
                    </div>
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
