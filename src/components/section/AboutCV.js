import React from "react";

const AboutCV = ({ aboutApii }) => {
  return (
    <>
      {aboutApii.map((e) => {
        const {
          id,
          name,
          age,
          gender,
          lang,
          work,
          freelance,
          phone,
          email,
          country,
        } = e;
        return (
          <>
            <div className="box">
              <p>
                <span> age : </span> {age}
              </p>
              <p>
                <span> gender : </span> {gender}
              </p>
              <p>
                <span> language : </span> {lang}
              </p>
              <p>
                <span> work : </span> {work}
              </p>
            </div>
            <div className="box" key="8762">
              <p>
                <span> freelance : </span> {freelance}
              </p>
              <p>
                <span> phone : </span> {phone}
              </p>
              <p>
                <span> email : </span>
                <a
                  href="mailto:smsiam696@gmail.com"
                  style={{ textTransform: "lowercase" }}
                >
                  {email}
                </a>
              </p>
              <p>
                <span> country : </span> {country}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AboutCV;
