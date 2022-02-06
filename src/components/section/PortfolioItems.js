import React from "react";

const PortfolioItems = ({ portfolioApi }) => {
  return (
    <>
      <div className="box-container">
        {portfolioApi.map((e) => {
          const { id, img, project, projectLink, shareLink, searchLink } = e;
          return (
            <>
              <div className="box" key={id}>
                <img src={img} alt="" />
                <h3>{project}</h3>
                <div className="icons">
                  <a href={projectLink} className="fas fa-link"></a>
                  <a href={shareLink} className="fas fa-share"></a>
                  <a href={searchLink} className="fas fa-search"></a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PortfolioItems;
