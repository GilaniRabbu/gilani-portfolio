"use client";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const cardData = [
  {
    id: 1,
    title: "FoodieBite",
    description:
      "Developed a Full-Stack Restaurant Booking system using the MERN stack.",
    image: "/portfolio/portfolio_1.jpg",
    tech: [
      "Next.js",
      "Tailwind",
      "Redux",
      "ShadCN UI",
      "Express.js",
      "Mongoose",
      "MongoDB",
    ],
    link: "https://foodiebite.vercel.app",
    github: "https://github.com/GilaniRabbu/foodiebite.git",
    server: "https://github.com/GilaniRabbu/foodiebite-server.git",
  },
  {
    id: 2,
    title: "FastFix",
    description:
      "Fully responsive freelancing platform for service providers and clients.",
    image: "/portfolio/portfolio_2.jpg",
    tech: ["Next.js", "Tailwind", "Redux", "Express.js", "Mongoose", "MongoDB"],
    link: "https://fastfix-client.vercel.app",
    github: "https://github.com/GilaniRabbu/fastfix-client.git",
    server: "https://github.com/GilaniRabbu/fastfix-server.git",
  },
  {
    id: 3,
    title: "FurStore",
    description:
      "Fully responsive e-commerce platform for seamless online shopping.",
    image: "/portfolio/portfolio_3.jpg",
    tech: ["Typescript", "Next.js", "Tailwind", "Swiper.js"],
    link: "https://ecommerce-furstore.vercel.app",
    github: "https://github.com/GilaniRabbu/ecommerce-furstore.git",
  },
  {
    id: 4,
    title: "Dua Ruqyah",
    description: "Authentic Dua Ruqyah for healing and protection.",
    image: "/portfolio/portfolio_4.jpg",
    tech: [
      "Typescript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Express.js",
      "Mongoose",
      "NoSql",
    ],
    link: "https://duaruqyah-client-web.vercel.app",
    github: "https://github.com/GilaniRabbu/duaruqyah-client-web.git",
    server: "https://github.com/GilaniRabbu/duaruqyah-server-api.git",
  },
  {
    id: 5,
    title: "Air Nexa",
    description:
      "Smart flight search app for quick and affordable travel booking.",
    image: "/portfolio/portfolio_5.jpg",
    tech: ["Typescript", "Next.js", "Tailwind", "Axios", "Amadeus API"],
    link: "https://airnexa.vercel.app",
    github: "https://github.com/GilaniRabbu/airnexa-flight-search-web-app.git",
  },
];

export default function PortfolioCard() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {cardData.map((card) => (
        <CardContainer key={card.id} className="inter-var">
          <CardBody className="relative w-auto h-auto rounded-xl p-5 border sm:w-[30rem] group/card bg-white/10 border-white/[0.1]">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm max-w-sm mt-2 line-clamp-1 text-gray-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image || "/placeholder.svg"}
                height={768}
                width={1080}
                className="w-full object-cover rounded-md group-hover/card:shadow-xl"
                alt={`${card.title} thumbnail`}
              />
            </CardItem>
            <CardItem translateZ="80" className="w-full mt-5">
              <div className="flex flex-wrap gap-2">
                {card.tech.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs text-white"
              >
                Visit →
              </CardItem>
              <div className="flex gap-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs bg-black text-white"
                >
                  Client
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.github}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs bg-black text-white"
                >
                  Server
                </CardItem>
              </div>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
