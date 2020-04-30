import React, { useState, useRef } from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import axios from 'axios';

const ContactUs = () => {
  // if (typeof window !== 'undefined') {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState();
  const emailRef = useRef();
  const subjectRef = useRef();
  const commentRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const submission = {
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      comment: commentRef.current.value,
    };

    setIsSubmitting(true);

    axios
      .post(
        'https://getform.io/f/f468834f-6d24-46fb-8b76-441914432f20',
        submission,
        { headers: { Accept: 'application/json' } }
      )
      .then(function (response) {
        // show success message
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch(function (error) {
        setError('Oops, something went wrong. Please try again later.');
        setIsSubmitting(false);
      });
  };

  const buttonText = isSubmitting ? 'Submitting...' : 'Contact us';

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
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        <input
          ref={subjectRef}
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          ref={commentRef}
          rows={4}
          name="comments"
          placeholder="Comments"
          required
        />
        {!isSubmitted && (
          <input
            disabled={isSubmitted || isSubmitting}
            type="submit"
            value={buttonText}
          />
        )}
        {isSubmitted && <p>Thank you!</p>}
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
    ${up('tablet')} {
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

    ${up('tablet')} {
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

    input[type='submit'] {
      background: ${theme.colors.primary};
      color: white;
      padding: 0.5em;

      &:disabled {
        background: ${theme.colors.body};
      }
    }
  }
`;
