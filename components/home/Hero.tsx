import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaMastodon,
} from "react-icons/fa6";
import Link from "next/link";
import LottieAnimation from "@/components/shared/LottieAnimation";
import ContainerWrapper from "@/components/common/ContainerWrapper";

export default function Hero() {
  const socialIcons = [
    {
      id: 1,
      href: "https://github.com/GilaniRabbu",
      icon: <FaGithub className="w-4 h-4 text-white" />,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/toufiq-gilani-rabbu",
      icon: <FaLinkedinIn className="w-4 h-4 text-white" />,
    },
    {
      id: 3,
      href: "https://x.com/GilaniRabbu",
      icon: <FaXTwitter className="w-4 h-4 text-white" />,
    },
    {
      id: 4,
      href: "https://mastodon.social/@GilaniRabbu",
      icon: <FaMastodon className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen py-10 lg:px-10 bg-[#111111] text-white flex items-center justify-center">
      <ContainerWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {/* Greeting with HTML tags */}
            <div className="sm:text-lg">
              <span className="text-orange-400">{"<span>"}</span>
              <span className="ml-2">Hey, I&apos;m Gilani</span>
              <span className="text-orange-400 ml-2">{"</span>"}</span>
            </div>

            {/* Main heading */}
            <div className="space-y-0 sm:space-y-2">
              {/* Line 1 */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight block sm:inline">
                I&apos;m A{" "}
              </h1>

              {/* Line 2 */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-teal-400 block sm:inline">
                {"{Full Stack}"}
              </h1>

              {/* Line 3 */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Web Developer<span className="text-teal-400">_</span>
              </h1>
            </div>

            {/* Description paragraph */}
            <div className="text-gray-300 sm:text-lg max-w-3xl">
              <span className="text-orange-400">{"<p>"}</span>
              <span className="ml-2">
                With expertise in modern frontend technologies like React,
                Next.js, Tailwind CSS, and Redux, as well as backend
                technologies including Node.js, Express, and MongoDB.
              </span>
              <span className="text-orange-400 ml-2">{"</p>"}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                className="px-5 py-2 rounded-full font-medium transition-all text-white bg-sky-500 hover:bg-sky-600"
                href="https://drive.google.com/file/d/1-6K5tNKExOMhGGPsGMIDgwFCMTeIKo2V/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2 rounded-full font-medium transition-all text-white bg-sky-500 hover:bg-sky-600"
              >
                Hire Me
              </Link>
            </div>

            {/* Technology icons */}
            <div className="flex items-center space-x-4 pt-4">
              {socialIcons.map(({ id, icon, href }) => (
                <Link
                  href={href}
                  key={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-sky-500 hover:bg-sky-600"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          {/* Lottie Animation */}
          <div className="flex justify-center">
            <LottieAnimation />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}
