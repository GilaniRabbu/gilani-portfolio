import GithubButton from "@/components/shared/GithubButton";
import ContainerWrapper from "@/components/common/ContainerWrapper";

export default function About() {
  return (
    <div className="py-20 bg-[#111111]">
      <ContainerWrapper>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-500">About me.</h2>
          <ul className="list-disc list-inside space-y-4 leading-relaxed max-w-5xl sm:text-lg text-gray-300">
            <li>
              Hello! My name is Md. Toufiq Gilani Rabbu, a Full Stack Web
              Developer with expertise in building dynamic, functional,
              responsive, and user-friendly web solutions tailored to meet your
              unique needs.
            </li>
            <li>
              I come from a Management background completed my BBA majoring in
              Management and am currently pursuing my MBA in the same field.
            </li>
            <li>
              My mission is to deliver solutions that go beyond expectations by
              combining innovation, precision, and creativity in every project.
              I focus on writing clean, maintainable code and crafting engaging,
              accessible interfaces.
            </li>
          </ul>
          <div className="pt-4">
            <GithubButton />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
}
