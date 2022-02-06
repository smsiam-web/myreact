import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioApi from "../Api/PortfolioApi";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  const [portfolioApi, setPortfolioApi] = useState(PortfolioApi);
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h3 className="heading">
          <span> my </span> portfolio
        </h3>
        <PortfolioItems portfolioApi={portfolioApi} />
      </section>
    </>
  );
};

export default Portfolio;
