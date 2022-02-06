import React, { useState } from "react";
import "./Contact.css";
import ContactItem from "./ContactItem";
import ContactApi from "../Api/ContactApi";

const Contact = () => {
  const [contactApi, setContactApi] = useState(ContactApi);
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          contact <span> me </span>
        </h1>
        <ContactItem contactApi={contactApi} />
        <div className="row">
          <form action="">
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="number" className="box" />

            <textarea
              name=""
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <input type="submit" value="send message" className="btn" />
          </form>

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14483.247504767785!2d89.26153810312078!3d24.836106292824365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUwJzEwLjAiTiA4OcKwMTYnMDcuMyJF!5e0!3m2!1sen!2sbd!4v1630016681401!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
