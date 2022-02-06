import React from "react";

const AboutSkill = ({ mySkill }) => {
  return (
    <>
      <div className="skills">
        {mySkill.map((e) => {
          const { id, skillTitle, ability } = e;
          const wd = {
            width: ability,
          };
          return (
            <div className="progress" key={id}>
              <h3>
                {skillTitle} <span>{ability}</span>
              </h3>
              <div className="bar">
                <span style={wd}></span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutSkill;
