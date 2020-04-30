import { up } from "styled-breakpoints";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Underline } from "../styles/parts";

const HowToUse = () => {
  return (
    <Container id="how-to-use" height={400}>
      <div className="row">
        <h2>
          How does it work? <Underline>It's easy.</Underline>
        </h2>
      </div>
      <div className="row steps">
        <video width="100%" autoPlay muted loop controls={false}>
          <source src="/video/preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ol>
          <li>Choose your essential item (e.g. hand sanitizer)</li>
          <li>Enter how many days you need the item to last</li>
          <li>Enter how much you have (e.g. 2 bottles)</li>
          <li>Enter how many people will also be using the item</li>
        </ol>
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
    font-size: 1.5em;
    text-align: center;
  }

  .steps {
    text-align: center;
  }

  ol {
    display: inline-block;
    margin: 0 auto;
    font-size: 0.8em;
    font-weight: regular;
    text-align: left;

    & li {
      padding: 0.5em;
    }
  }

  ${up("tablet")} {
    margin-bottom: 40px;
    /* font-size: 0.85em; */

    .row {
      display: block;
    }

    .steps {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;

      & video {
        height: auto;
      }
    }
  }
`;
