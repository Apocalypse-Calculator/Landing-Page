import { up } from "styled-breakpoints";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Underline } from "../styles/parts";

const About = () => {
  return (
    <Container id="about">
      <header>
        <p>Concerned about your shelf stock?</p>
        <p>Do you have everything you need in your cupboards?</p>
        <h2>
          <Underline>ReStock can help!</Underline>
        </h2>
        <p>
          It's time to shelf care. Take the worry out of stocking your shelves
          with ReStock. This free, <Underline>easy to use app</Underline> works
          out how much you will need of an essential item over a set time
          period.
        </p>
      </header>
      <div className="row">
        <img src="/images/shelves.png" alt="" />
        <h3>
          Keep your shelves stocked with the{" "}
          <Underline>amount you need</Underline>
        </h3>
      </div>
      <div className="row reverse">
        <h3>
          <Underline>Reduce the stress of worrying</Underline> if you have
          enough supplies
        </h3>
        <img src="/images/peace_of_mind_rounded.png" alt="" />
      </div>
    </Container>
  );
};
export default About;

const Container = styled.section`
  background: ${theme.colors.secondary};
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;
  letter-spacing: .5px;
  padding-left: 1em;
  padding-right: 1em;

  ${up("tablet")} {
    margin: -150px 0;
    padding: 250px 0;
    margin-top: -550px;
    background-color: transparent;
    background-image: url('/shapes/orange_background.png');
    background-size: 108% 108%;
    background-position: top right;
    background-repeat: no-repeat;
    width: 100vw;
  }
  
  ${up("desktop")} {
    padding: 250px 5%;
    margin-top: -500px;
  }

  img {
    max-width: 70%;
    margin: 3% auto;
  }

  header {
    ${up("tablet")} {
      padding-top: 450px;
      padding-bottom: 20px;
      margin: 50px auto;
      margin-top: 10em;
      max-width: 1024px;
      
      h2,
      h3 {
        width: 75%;
        margin: 5% auto;
        letter-spacing: .5px;
      }

      p {
        width: 70%;
        margin: 3% auto;
        font-size: 1.5em;
      }

      h2 {
        font-size: 3em;
      }
    }
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    ${up("tablet")} {
      margin: 10% 0;
    }

    ${up("desktop")} {
      margin: 5% 2% 10px 2%;
    }

    &.reverse {
      flex-direction: column-reverse;
      ${"" /* color: #333; */}
      color: ${theme.colors.text};
    }

    &,
    &.reverse {
      ${up("tablet")} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;

        h3 {
          max-width: 28ch;
          font-size: 1.4em;
          margin: 0 auto;
          letter-spacing: .5;
          padding-left: 1em;
          padding-right: 1em;
        }
      }
    }
  }
`;
