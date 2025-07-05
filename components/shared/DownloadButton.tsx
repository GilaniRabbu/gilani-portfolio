import Link from "next/link";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function DownloadButton() {
  return (
    <InteractiveHoverButton>
      <Link
        href="/files/GilaniRabbu_Mern_Stack_Developer.pdf"
        download="GilaniRabbu_Mern_Stack_Developer.pdf"
      >
        Download CV
      </Link>
    </InteractiveHoverButton>
  );
}
