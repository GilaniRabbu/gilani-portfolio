import { Code, Database, Globe, Settings } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          {/* Greeting with HTML tags */}
          <div className="text-lg">
            <span className="text-orange-400">{"<span>"}</span>
            <span className="ml-2">Hey, I&apos;m John</span>
            <span className="text-orange-400 ml-2">{"</span>"}</span>
          </div>

          {/* Main heading */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              I&apos;m A <span className="text-teal-400">{"{Full Stack}"}</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Web Developer<span className="text-teal-400">_</span>
            </h1>
          </div>

          {/* Description paragraph */}
          <div className="text-gray-400 text-lg max-w-3xl">
            <span className="text-orange-400">{"<p>"}</span>
            <span className="ml-2">
              With expertise in modern frontend technologies like React,
              Next.js, Tailwind CSS, and Redux, as well as backend technologies
              including Node.js, Express, and MongoDB.
            </span>
            <span className="text-orange-400 ml-2">{"</p>"}</span>
          </div>

          {/* Technology icons */}
          <div className="flex items-center space-x-4 pt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Globe className="w-4 h-4 text-gray-300" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Code className="w-4 h-4 text-gray-300" />
            </div>
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <Database className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Settings className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
