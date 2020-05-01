import { up } from "styled-breakpoints";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Underline } from "../styles/parts";

const HowToUse = () => {
  return (
    <Container id="how-to-use" height={400}>
      <div className="steps">
        <video /*width="80%"*/ autoPlay muted loop controls={false}>
          <source src="/video/preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="row">
          <h2>
            How does it work? <Underline>It's easy.</Underline>
          </h2>
          <ol>
            <li>Choose your essential item (e.g. hand sanitizer)</li>
            <li>Enter how many days you need the item to last</li>
            <li>Enter how much you have (e.g. 2 bottles)</li>
            <li>Enter how many people will also be using the item</li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default HowToUse;

const Container = styled.section`
  display: block;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.5em;
  letter-spacing: 0.5px;
  color: ${theme.colors.text};

  h2 {
    font-size: 1em;
    text-align: center;
  }

  .steps {
    text-align: center;

    & video {
      width: 100%;
      height: auto;
    }
  }

  ol {
    display: inline-block;
    margin: 0 auto;
    font-size: 0.75em;
    font-weight: regular;
    text-align: left;
    padding-left: 3em;
    padding-right: 0.9em;
    color: ${theme.colors.body};

    & li {
      margin-right: 1em;
      padding: 0.5em 0.3em;
    }
  }

  ${up("tablet")} {
    margin-bottom: 40px;
    font-size: 2em;

    h2 {
      font-size: 1.5em;
      font-weight: 300;
      text-align: center;
    }

    .row {
      display: block;
    }

    .steps {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;

      & video {
        display: block;
        height: 75%;
        width: auto;
        z-index: -2;
        overflow: hidden;
        margin-left: -10rem;
      }
    }

    ol {
      display: inline-block;
      margin: 0 auto;
      font-size: 0.75em;
      font-weight: regular;
      text-align: left;

      & li {
        margin-right: 1em;
        padding: 0.5em 0.3em;
      }
    }
  }
`;
