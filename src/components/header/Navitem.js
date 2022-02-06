import React from "react";

const Navitem = ({ navItem }) => {
  return (
    <>
      <nav className="navbar">
        {navItem.map((e) => {
          const { id, item } = e;
          return (
            <>
              <a href={`#${item}`} key={item}>
                {item}
              </a>
            </>
          );
        })}
      </nav>
    </>
  );
};

export default Navitem;
