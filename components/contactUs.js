import { up } from "styled-breakpoints";
import styled from "styled-components";
import { theme } from "../styles/theme";

const ContactUs = () => {
  function onSubmit(e) {
    e.preventDefault();
    window.location.href = url;

    window.fetch("getform.io/forms/16946", {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify(""), // e.g. {email, name}
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .then(display);
  }

  return (
    <Container id="contact-us">
      <h2>
        <img src="/images/contact.png" alt="" />
        Contact Us
      </h2>
      <p>
        Have a question or want to know more? <br /> Our volunteer team is here
        to help, so please do fill in the contact form below!
      </p>
      <form
        action="https://getform.io/f/bdda47df-89fa-45e6-ba16-4b5c03e05a51"
        method="POST"
        name="contact-form"
      >
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea rows={4} name="comments" placeholder="Comments" required />
        <input type="submit" value="Contact us" />
      </form>
    </Container>
  );
};

export default ContactUs;

const Container = styled.section`
  color: ${theme.colors.body};
  padding-bottom: 40px;
  background: #fff;

  h2 {
    color: ${theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;

    img {
      height: 1.25em;
      margin-right: 0.5em;
    }
  }

  p {
    ${up("tablet")} {
      text-align: center;
      font-size: 1.5em;
      letter-spacing: 0.3px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1000px;
    margin: 0 auto;

    ${up("tablet")} {
      max-width: 60ch;
      margin: 0 auto;
    }

    input,
    textarea {
      appearance: none;
      outline: none;
      border: none;
      resize: none;
      width: 100%;
      margin: 0.5em 0;
      padding: 0.5em;

      border: 1px solid #55555580;
      font-size: 0.9rem;

      &::placeholder {
        color: #555;
        font-size: 0.85em;
        font-family: sans-serif;
      }
    }

    input[type="submit"] {
      background: ${theme.colors.primary};
      color: white;
      padding: 0.5em;
    }
  }
`;
