import DownloadButton from "@/components/shared/DownloadButton";
import GithubButton from "@/components/shared/GithubButton";
import ContainerWrapper from "@/components/common/ContainerWrapper";

export default function About() {
  return (
    <div className="py-10 bg-[#111111]">
      <ContainerWrapper>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-500">About me.</h2>
          <div className="space-y-4 leading-relaxed max-w-5xl sm:text-lg text-gray-300">
            <p className="flex items-start gap-3">
              <span className="text-2xl">👋</span>
              <span>
                Hello! My name is Md. Toufiq Gilani Rabbu, a Full Stack Web
                Developer with expertise in building dynamic, functional,
                responsive, and user-friendly web solutions tailored to meet
                your unique needs.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <span>
                I come from a Management background—completed my BBA majoring in
                Management and am currently pursuing my MBA in the same field.
                This unique blend of business and tech allows me to understand
                both the functional and strategic goals behind every project.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <span>
                My mission is to deliver solutions that go beyond expectations
                by combining innovation, precision, and creativity in every
                project. I focus on writing clean, maintainable code and
                crafting engaging, accessible interfaces. Whether you&apos;re
                building a business website, e-commerce platform, or blog,
                I&apos;m here to transform your ideas into high-quality results
                that stand out.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-5 pt-4">
            <GithubButton />
            <DownloadButton />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}
