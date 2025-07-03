import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaMastodon,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          {/* Greeting with HTML tags */}
          <div className="text-lg">
            <span className="text-orange-400">{"<span>"}</span>
            <span className="ml-2">Hey, I&apos;m Gilani</span>
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
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
              <FaGithub className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
              <FaLinkedinIn className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
              <FaXTwitter className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
              <FaMastodon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
