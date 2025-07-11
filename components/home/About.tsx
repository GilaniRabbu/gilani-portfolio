import Image from "next/image";
import GithubButton from "@/components/shared/GithubButton";
import ContainerWrapper from "@/components/common/ContainerWrapper";

export default function About() {
  return (
    <div className="py-20 bg-[#111111]">
      <ContainerWrapper>
        <div className="text-left lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-400">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight leading-8 text-gray-300">
            Full Stack Web Developer
          </p>
          <p className="mt-4 text-xl max-w-2xl lg:mx-auto text-gray-400">
            Combining innovation, precision, and creativity to deliver solutions
            that exceed expectations.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="flex justify-center">
              <Image
                width={480}
                height={480}
                className="rounded-full object-cover border-4"
                src="/about/logo.png"
                alt="Author Image"
              />
            </div>
            <div className="space-y-6">
              <p className="mt-2 text-gray-400">
                Hello! My name is Md. Toufiq Gilani Rabbu. I am a Full Stack Web
                Developer with expertise in building dynamic, functional,
                responsive, and user-friendly web solutions tailored to meet
                your unique needs.
              </p>
              <p className="mt-4 text-gray-400">
                I come from a Management background, having completed my BBA
                with a major in Management, and I am currently pursuing my MBA
                in the same field.
              </p>
              <p className="mt-4 text-gray-400">
                My mission is to deliver solutions that go beyond expectations
                by combining innovation, precision, and creativity in every
                project. I focus on writing clean, maintainable code and
                crafting engaging, accessible interfaces.
              </p>
              <div className="pt-4">
                <GithubButton />
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}
