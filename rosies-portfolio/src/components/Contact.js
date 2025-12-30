import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_n6z8dzc",
        "template_toe8nd9",
        form.current,
        "SVRmxUfXztTjKU5WW"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container className="contact-container">
        <h2 className="section-title">Get in touch</h2>

        <p className="contact-intro">
          You are welcome to reach out, whether you have a question, an opportunity,
          or just want to say hi. <br/> I’ll do my best to get back to you✨.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="contact-status success">
              Thanks for reaching out — I’ll be in touch soon ✨
            </p>
          )}

          {status === "error" && (
            <p className="contact-status error">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
};
