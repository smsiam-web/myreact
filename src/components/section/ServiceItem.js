import React from "react";

const ServiceItem = ({ serviceApi }) => {
  return (
    <div className="box-container">
      {serviceApi.map((e) => {
        const { id, logo, title, desc } = e;
        return (
          <div className="box" key={id}>
            <i className={logo}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceItem;
