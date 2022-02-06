import React from "react";

const ContactItem = ({ contactApi }) => {
  return (
    <>
      <div className="icons-container">
        {contactApi.map((e) => {
          const { id, icon, contactName, cLink1, cLink2 } = e;
          return (
            <div className="icons" key={id}>
              <i className={icon}></i>
              <h3>{contactName}</h3>
              <p>{cLink1}</p>
              <p>{cLink2}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactItem;
