import DownloadButton from "../shared/DownloadButton";
import GithubButton from "../shared/GithubButton";

export default function About() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-4xl mx-auto p-5">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">About me.</h1>
          <div className="space-y-4 leading-relaxed text-balance text-gray-700">
            <p>
              👋 Hello! My name is Md. Toufiq Gilani Rabbu, a Full Stack Web
              Developer with expertise in building dynamic, functional,
              responsive, and user-friendly web solutions tailored to meet your
              unique needs.
            </p>
            <p>
              🎓 I come from a Management background—completed my BBA majoring
              in Management and am currently pursuing my MBA in the same field.
              This unique blend of business and tech allows me to understand
              both the functional and strategic goals behind every project.
            </p>
            <p>
              🚀 My mission is to deliver solutions that go beyond expectations
              by combining innovation, precision, and creativity in every
              project. I focus on writing clean, maintainable code and crafting
              engaging, accessible interfaces. Whether you&apos;re building a
              business website, e-commerce platform, or blog, I&apos;m here to
              transform your ideas into high-quality results that stand out.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-4">
            <GithubButton />
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}
