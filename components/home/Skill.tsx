"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaUsers,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import {
  MdAccessTime,
  MdOutlineHandshake,
  MdPsychologyAlt,
} from "react-icons/md";

const technicalSkills = [
  { name: "React", icon: <FaReact size={24} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={24} color="#fff" /> },
  { name: "Node.js", icon: <FaNodeJs size={24} color="#68A063" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#38BDF8" /> },
  { name: "MongoDB", icon: <SiMongodb size={24} color="#4DB33D" /> },
  { name: "JavaScript", icon: <FaJs size={24} color="#F7DF1E" /> },
  { name: "HTML", icon: <FaHtml5 size={24} color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt size={24} color="#264DE4" /> },
];

const softSkills = [
  { name: "Communication", icon: <FaUsers size={24} /> },
  { name: "Time Management", icon: <MdAccessTime size={24} /> },
  { name: "Collaboration", icon: <MdOutlineHandshake size={24} /> },
  { name: "Problem Solving", icon: <MdPsychologyAlt size={24} /> },
];

const projects = [
  {
    title: "E-commerce App",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    description:
      "A modern online store with authentication, filtering, and shopping cart functionality.",
    github: "https://github.com/yourname/ecommerce",
    live: "https://ecommerce.vercel.app",
  },
  {
    title: "Portfolio Website",
    tech: ["Next.js", "Framer Motion"],
    description: "My personal portfolio built with animations and dark UI.",
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.vercel.app",
  },
];

const SkillCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex items-center gap-3 rounded-lg border border-[#3d4c5c] bg-[#1f262e] p-4 hover:shadow-lg transition">
    <div className="text-white">{icon}</div>
    <h2 className="text-white text-base font-bold">{name}</h2>
  </div>
);

export default function PortfolioSections() {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-20 space-y-24">
      {/* About Me */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image (optional) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I&apos;m a MERN Stack Developer passionate about building
              performant and user-friendly web applications using technologies
              like React, Next.js, Tailwind CSS, Node.js, and MongoDB. I enjoy
              solving real-world problems with clean and scalable code.
            </p>
            <div className="text-gray-400">
              <h4 className="font-semibold mb-2">Soft Skills:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Strong Communication</li>
                <li>Time Management</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="min-h-screen w-full bg-[#14191f] text-white font-[Manrope,'Noto Sans',sans-serif] overflow-x-hidden"
        id="skills"
      >
        <div className="flex flex-col px-6 md:px-40 py-10">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="min-w-72 flex flex-col gap-3">
              <p className="text-[32px] font-bold leading-tight">Skills</p>
              <p className="text-[#9dadbe] text-sm">
                I&apos;m constantly learning and expanding my skillset. Here are
                some of my core competencies:
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <h3 className="text-lg font-bold px-4 pb-2 pt-4">Technical Skills</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {technicalSkills.map((skill, i) => (
              <SkillCard key={i} icon={skill.icon} name={skill.name} />
            ))}
          </div>

          {/* Soft Skills */}
          <h3 className="text-lg font-bold px-4 pb-2 pt-4">Soft Skills</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {softSkills.map((skill, i) => (
              <SkillCard key={i} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-300 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-800 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-green-400 hover:underline"
                  >
                    Live Site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section className="bg-zinc-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <motion.form
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="bg-zinc-800 p-3 rounded-md outline-none text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-zinc-800 p-3 rounded-md outline-none text-white placeholder-gray-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="bg-zinc-800 p-3 rounded-md outline-none text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-md font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
