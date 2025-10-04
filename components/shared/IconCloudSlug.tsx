import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "mongodb",
  "bootstrap",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postman",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitbook",
  "php",
  "sass",
  "figma",
];

export default function IconCloudSlug() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} color="#FFF" />
    </div>
  );
}
