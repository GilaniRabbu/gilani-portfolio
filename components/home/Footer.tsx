import React from "react";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaCodepen,
  FaMastodon,
} from "react-icons/fa6";

export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "LinkedIn",
      link: "http://www.linkedin.com/in/toufiq-gilani-rabbu",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/GilaniRabbu",
      icon: <FaGithub size={20} />,
    },
    {
      id: 3,
      title: "Codepen",
      link: "https://codepen.io/GilaniRabbu",
      icon: <FaCodepen size={20} />,
    },
    {
      id: 4,
      title: "Mastodon",
      link: "https://mastodon.social/@GilaniRabbu",
      icon: <FaMastodon size={20} />,
    },
    {
      id: 5,
      title: "Twitter",
      link: "https://x.com/GilaniRabbu",
      icon: <FaXTwitter size={20} />,
    },
    {
      id: 6,
      title: "Facebook",
      link: "https://www.facebook.com/GilaniRabbu",
      icon: <FaFacebookF size={20} />,
    },
  ];

  return (
    <footer className="py-8 px-4 flex flex-col items-center gap-5 overflow-hidden bg-gray-900 text-white">
      <div className="flex flex-wrap justify-center gap-1">
        {footerLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded transition-all duration-300 hover:text-[#FFFFFF] hover:bg-[#377E86]"
          >
            <span className="sr-only">Social Links</span>
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-center text-2xl">
        Gilani © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
