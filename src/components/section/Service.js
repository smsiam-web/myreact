import React, { useState } from "react";
import "./Service.css";
import ServiceApi from "../Api/ServiceApi";
import ServiceItem from "./ServiceItem";

const Service = () => {
  const [serviceApi, setServiceApi] = useState(ServiceApi);

  return (
    <>
      <section className="service" id="service">
        <h1 className="heading">
          <span> my </span> service{" "}
        </h1>
        <ServiceItem serviceApi={serviceApi} />
      </section>
    </>
  );
};

export default Service;
