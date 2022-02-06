import React, { useState } from "react";
import "./Experience.css";
import ExperienceItem from "./ExperienceItem";
import ExperienceApi from "../Api/ExperienceApi";

const Experience = () => {
  const [experienceApi, setExperienceApi] = useState(ExperienceApi);
  return (
    <>
      <section className="experience" id="experience">
        <h3 className="heading">
          <span> my</span> experience
        </h3>
        <ExperienceItem experienceApi={experienceApi} />
      </section>
    </>
  );
};

export default Experience;
