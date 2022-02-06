import React from "react";

const ExperienceItem = ({ experienceApi }) => {
  return (
    <>
      <div className="box-container">
        {experienceApi.map((e) => {
          const { id, period, title, desc } = e;
          return (
            <>
              {" "}
              <div className="box">
                <div className="content">
                  <span> {period} </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ExperienceItem;
