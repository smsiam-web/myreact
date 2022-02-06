import React from "react";

const Follow = ({ followLink }) => {
  return (
    <>
      <div className="follow">
        {followLink.map((e) => {
          const { id, category, link } = e;
          return <a key={id} href={link} className={`fab fa-${category}`}></a>;
        })}
      </div>
    </>
  );
};

export default Follow;
