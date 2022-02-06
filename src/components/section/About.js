import React, { useState } from "react";
import "./About.css";
import AboutSkill from "./AboutSkill";
import MySkill from "../Api/MySkillApi";
import AboutCV from "./AboutCV";
import AboutApi from "../Api/AboutApi";

const About = () => {
  const [mySkill, setMySkill] = useState(MySkill);
  const [aboutApii, setAboutApi] = useState(AboutApi);
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          about <span>me</span>
        </h1>

        <div className="row-1">
          <div className="image">
            <img src="images/about-img.jpg" alt="about image" />
          </div>

          <div className="content">
            <h3> my name is siam chowdhury & i'm a full stack web developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ullam sunt reprehenderit repudiandae iure explicabo harum sequi
              ipsum sit? Mollitia quam doloremque a blanditiis ipsa expedita
              quis autem deserunt voluptatibus!
            </p>
            <div className="box-container">
              <AboutCV aboutApii={aboutApii} />
            </div>
            <a href="#" className="btn">
              download CV
            </a>
            <a href="#" className="btn">
              hire me
            </a>
          </div>
        </div>
        <h1 className="heading">
          <span>my</span> skills
        </h1>
        <div className="row-2">
          <AboutSkill mySkill={mySkill} />
          <div className="box-container">
            <div className="box">
              <h3> ## 2+</h3>
              <p>years of experience</p>
            </div>

            <div className="box">
              <h3> ## 0+</h3>
              <p>happy clients</p>
            </div>

            <div className="box">
              <h3> ## 20+</h3>
              <p>project complete for practies porpus</p>
            </div>

            <div className="box">
              <h3> ## 0+</h3>
              <p>awards own</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
