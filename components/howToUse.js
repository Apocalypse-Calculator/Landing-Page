import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Underline } from '../styles/parts';

const HowToUse = () => {
  return (
    <Container id='how-to-use' height={400}>
      <video width='100%' autoPlay muted loop controls={false}>
        <source src='/video/preview.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div>
        <h2>
          How does it work? <Underline>It's easy.</Underline>
        </h2>
        <ol>
          <li>Choose your essential item i.e. hand sanitizer</li>
          <li>Enter how many days you need the item to last</li>
          <li>Enter how much you have i.e. 2 bottles</li>
          <li>Enter how many people will also be using the item</li>
        </ol>
      </div>
    </Container>
  );
};

export default HowToUse;

const Container = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 4fr;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.5em;
  letter-spacing: .5px;
  color: ${theme.colors.text};

  h2 {
    font-size: 1.5em;
  }

  ${up('tablet')} {
    margin-bottom: 40px;
    /* font-size: 0.85em; */

    video {
      height: 100%;
    }
  }

  ol {
    padding-left: 30px;
    font-size: 1em;
    font-weight: regular;
  }
`;
