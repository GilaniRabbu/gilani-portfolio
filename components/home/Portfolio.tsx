import ContainerWrapper from "@/components/common/ContainerWrapper";
import PortfolioCard from "@/components/shared/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
    <div className="py-10 bg-[#111111]">
      <ContainerWrapper>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-green-500">
          My Projects
        </h2>
        <PortfolioCard />
      </ContainerWrapper>
    </div>
  );
};

export default Portfolio;
