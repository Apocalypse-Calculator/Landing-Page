import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Button } from '../styles/parts';

const Download = () => (
  <Container id='download'>
    <div className='wrapper'>
      <h2>Get prepared and ReStock now!</h2>
      <p>What's your experience using ReStock? We'd love to <bold>hear your <a href='https://docs.google.com/forms/d/e/1FAIpQLSfzY1YI8eKwEakUzFbkEeSjwQShDMHcrsoFpa-wOw0BSvedCg/viewform'>
      feedback.
      </a></bold></p>

      <div className='row'>
        <div>
          <img src='/images/desktop.png' alt='' />
          <Button disable>Coming Soon</Button>
        </div>
        <div>
          <img src='/images/apple.png' alt='' />
          <Button disable>Coming Soon</Button>
        </div>
        <div>
          <a href='https://play.google.com/store/apps/details?id=com.zachl.restock'>
          <img src='/images/android_light.png' alt=''/>
          </a>
          <Button as='a' href='https://play.google.com/store/apps/details?id=com.zachl.restock'>
            Download
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default Download;

const Container = styled.section`
  background: ${theme.colors.secondary};
  color: white;
  text-align: center;

  bold {
    font-weight: bold;
  }

  ${up('tablet')} {
    position: relative;
    width: 100vw;
    z-index: 1;
    padding-top: 150px;
    height: 600px;
    background-color: transparent;
    background-image: url('/shapes/orange_bottom.png');
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  div.wrapper {
    ${up('desktop')} {
      max-width: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2,
      .row {
        max-width: 100%;
        letter-spacing: .7px;
        font-size: 1.5em;
      }
    }
  }

  .row {
    padding: 20px 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    ${up('tablet')} {
      width: 60%;
      margin: 0 auto;
    }
    ${up('desktop')} {
      width: 80%;
      margin: 0;
    }
    & > div {
      width: 150px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${up('tablet')} {
        width: auto;
      }

      img {
        width: 80px;
        height: 80px;
        object-fit: contain;

        margin-bottom: 20px;
      }

      button {
        margin-bottom: 20px;
      }
    }
  }
`;
