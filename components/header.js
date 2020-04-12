import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Button } from '../styles/parts';

const Header = () => {
  return (
    <Container>
      <nav>
        <div id='brand'>
          <a href='/'>
            <img src='/images/logo.png' alt='' />
          </a>
        </div>
        <ul>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>How to Use</a>
          </li>
          <li>
            <a href='#'>Download</a>
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </nav>

      <Hero id='hero'>
        <h1>
          Bring back your shelf confidence with this easy stock calculator!
        </h1>
        <div className='row'>
          <div>
            <img src='/images/web_light.png' alt='' />
            <Button disable>Coming Soon</Button>
          </div>
          <div>
            <img src='/images/apple_light.png' alt='' />
            <Button disable>Coming Soon</Button>
          </div>
          <div>
            <img src='/images/android_light.png' alt='' />
            <Button as='a' href='#'>
              Download
            </Button>
          </div>
        </div>
        <img src='/images/phone.png' alt='demo' />
      </Hero>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background: ${theme.colors.primary};
  padding: 10px 30px;
  position: relative;
  z-index: 2;

  ${up('tablet')} {
    background-color: transparent;
    background-image: url('/shapes/green_header.png');
    background-size: cover;
    background-position: 50% center;
    background-repeat: no-repeat;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 90px;
    }

    ul {
      list-style: none;
      padding: 0;
      text-align: right;

      ${up('tablet')} {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        li {
          margin: 0 5px;
        }
      }

      li {
        a {
          color: white;
          text-decoration: none;
          font-weight: 200;
          display: block;
          margin: 0.5em 0;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
const Hero = styled.section`
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;

  ${up('tablet')} {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'title image' 'links image';
    align-items: center;
    justify-content: center;
    grid-gap: 10px;

    h1 {
      grid-area: title;
    }
    & > div {
      grid-area: links;
    }

    & > img {
      grid-area: image;
    }
  }

  h1 {
    margin: 0;
    padding: 30px;
    background: ${theme.colors.primary};
    color: white;
    text-align: center;

    ${up('tablet')} {
      background: transparent;
    }
  }

  .row {
    padding: 20px 30px;
    background: white;

    ${up('tablet')} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background: transparent;
    }

    & > div {
      margin: 20px 0 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${up('tablet')} {
        margin: 20px;
      }

      img {
        width: 80px;
        height: 70px;
        object-fit: contain;
        margin-bottom: 20px;
      }

      button {
        margin-bottom: 20px;
      }
    }
  }

  & > img {
    display: none;
    ${up('tablet')} {
      display: block;
    }
    max-width: 250px;
    margin: 0 auto;
  }
`;
