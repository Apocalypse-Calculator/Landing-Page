import Head from 'next/head';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Underline, Button } from '../styles/parts';
import { up, down } from 'styled-breakpoints';

const Home = () => (
  <Page>
    <Head>
      <title>Get Restock!</title>
      <meta name='description' content='Sample description' />
      <meta property='og:title' content='Get Restock!' />
      <meta property='og:description' content='Sample description' />
      <meta property='og:image' content='/logo.png' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header>
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
    </Header>
    <About id='about'>
      <header>
        <p>Concerned about your shelf stock?</p>
        <p>Do you have everything you need in your cupboards?</p>
        <h2>
          <Underline>ReStock Can Help!</Underline>
        </h2>
        <p>
          It's time to shelf care. Take the worry out of stocking your shelves
          with ReStock. This free, <Underline>easy to use app</Underline> works
          out how much you will need of an essential item over a set time
          period.
        </p>
      </header>
      <div className='row'>
        <img src='/images/shelves.png' alt='' />
        <p>
          Keep your shelves stocked with the{' '}
          <Underline>amount you need</Underline>
        </p>
      </div>
      <div className='row reverse'>
        <p>
          <Underline>Reduce the stress of worrying</Underline> if you have
          enough supplies
        </p>
        <img src='/images/peace_of_mind.png' alt='' />
      </div>
    </About>
    <HowToUse id='how-to-use' height={400}>
      <video width='100%' autoplay muted loop controls={false}>
        <source src='/video/preview.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div>
        <p>
          How does it work? <Underline>It's easy</Underline>
        </p>
        <ol>
          <li>Choose your essential item i.e. Hand Sanitizer</li>
          <li>Enter how many days you need the item to last</li>
          <li>Enter how much you have i.e. 2 bottles</li>
          <li>Enter how many people will also be using the item</li>
        </ol>
      </div>
    </HowToUse>
    <Download id='download'>
      <div className='wrapper'>
        <h2>Get prepared and ReStock now!</h2>
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
            <img src='/images/android.png' alt='' />
            <Button as='a' href='#'>
              Download
            </Button>
          </div>
        </div>
      </div>
    </Download>
    <OurTeam id='our-team'>
      <h2>Our Team</h2>
      <ul>
        <li>Roland Zonai</li>
        <li>Jack Attewell</li>
        <li>Zach Lawrence</li>
        <li>Jon Powers</li>
        <li>Daisy Simonis</li>
        <li>Ahmed ElNahas</li>
        <li>Xiangyang Huang</li>
        <li>JinYi Yang</li>
        <li>Emily Kondziola</li>
        <li>Anna Shannon</li>
        <li>Yegor Golovnia</li>
        <li>Margaret Beardsley</li>
        <li>Ankit Joshi</li>
      </ul>
    </OurTeam>
    <ContactUs id='contact-us'>
      <h2>
        <img src='/images/contact.png' alt='' />
        Contact Us
      </h2>
      <p>
        Have a question or want to know more? <br /> Our volunteer team is here
        to help, so please do fill in the contact form below!
      </p>
      <form>
        <input type='email' name='email' placeholder='Email Address' />
        <input type='text' name='subject' placeholder='Subject' />
        <textarea rows={4} name='comments' placeholder='Comments' />
        <input type='submit' value='Submit' />
      </form>
    </ContactUs>
    <Footer>
      <h3>It's time to bring back your shelf-confidence</h3>
    </Footer>
  </Page>
);

export default Home;

const HowToUse = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 4fr;
  max-width: 1200px;
  margin: 0 auto;

  ${up('tablet')} {
    margin-bottom: 40px;
    /* font-size: 0.85em; */

    video {
      height: 100%;
    }
  }

  ol {
    padding-left: 20px;
  }
`;
const Download = styled.section`
  background: ${theme.colors.secondary};
  color: white;
  text-align: center;

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
      max-width: 800px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2,
      .row {
        max-width: 100%;
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
const OurTeam = styled.section`
  color: ${theme.colors.body};
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;

  ul {
    list-style: none;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18ch, auto));

    li {
      padding: 0.25em 0;
    }
  }
`;

const ContactUs = styled.section`
  color: ${theme.colors.body};
  padding-bottom: 40px;
  background: #efeeee;

  h2 {
    color: ${theme.colors.header};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 1.25em;
      margin-right: 0.5em;
    }
  }

  p {
    ${up('tablet')} {
      text-align: center;
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
    }
  }
`;

const Header = styled.header`
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

const About = styled.section`
  background: ${theme.colors.secondary};
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;

  ${up('tablet')} {
    margin: -200px 0;
    padding: 200px 0;
    margin-top: -500px;
    background-color: transparent;
    background-image: url('/shapes/orange_background.png');
    background-size: 110% 100%;
    background-position: top right;
    background-repeat: no-repeat;
    width: 100vw;
  }
  ${up('desktop')} {
    padding: 350px 0;
    margin: -350px 0;
    margin-top: -650px;
  }

  img {
    max-width: 70%;
    margin: 20px auto;
  }

  header {
    ${up('tablet')} {
      padding-top: 280px;
      padding-bottom: 20px;
      margin: 50px 0;

      p,
      h2 {
        width: 80%;
        margin: 40px auto;
      }
    }
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    ${up('tablet')} {
      margin: 50px 0;
    }

    &.reverse {
      flex-direction: column-reverse;
      color: #333;
    }

    &,
    &.reverse {
      ${up('tablet')} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-between;

        p {
          max-width: 28ch;
          margin: 0 auto;
        }
      }
    }
  }
`;

const Footer = styled.footer`
  background: ${theme.colors.primary};
  color: white;
  padding: 10px 20px;
  text-align: center;
`;

const Page = styled.main`
  ${up('tablet')} {
    font-size: 1.3em;
  }

  ${up('desktop')} {
    font-size: 1.5em;
  }
`;
