import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <span className="hi">hi there...</span>
          <h3>
            i am <span> siam chowdhury</span>
          </h3>
          <p className="info">
            i am a full stack <span>react.</span>JS web developer
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            rem aut ipsam ullam inventore dolores provident, porro minus a
            omnis.
          </p>
          <a href="#about" className="btn">
            about me
          </a>
        </div>
        <div className="image">
          <img src="images/home-img.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
