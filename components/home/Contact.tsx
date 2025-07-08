import ContainerWrapper from "@/components/common/ContainerWrapper";

export default function Contact() {
  return (
    <section className="py-20 bg-[#111111]">
      <ContainerWrapper>
        <h2 className="text-4xl font-bold text-center mb-10 text-green-500">
          Contact Me
        </h2>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-10 w-full md:w-3/5 mx-auto sm:text-lg tracking-wide text-pretty text-left text-gray-300 md:text-balance md:text-center">
            I&#39;m eager to join a collaborative team where I can contribute my
            skills and learn from others. If you have an exciting project,
            let&#39;s discuss how I can be a valuable asset. I&#39;m actively
            seeking a new opportunity to apply my skills and continue growing!
          </p>
          <a
            className="text-2xl px-6 py-3 rounded-full border flex items-center justify-center mail-btn"
            target="_blank"
            title="toufiqjilanirabbu7@gmail.com"
            href="mailto:toufiqjilanirabbu7@gmail.com"
          >
            Send Mail
          </a>
        </div>
      </ContainerWrapper>
    </section>
  );
}
