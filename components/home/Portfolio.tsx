import React from "react";
import Card from "../shared/Card";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-4" id="portfolio">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 text-3xl">My Projects</h2>
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
