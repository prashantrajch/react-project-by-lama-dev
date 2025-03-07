import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="left">
        <img src="./assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
          {message && <span>Thanks, I&apos;ll reply ASAP :) </span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
