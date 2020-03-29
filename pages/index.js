import Head from 'next/head';
import styled from 'styled-components';

import AndroidLight from '../icons/android-light.svg';
import IOSLight from '../icons/ios-light.svg';
import WebLight from '../icons/web-light.svg';
import Android from '../icons/android.svg';
import IOS from '../icons/ios.svg';
import Web from '../icons/web.svg';

const Home = () => (
  <div>
    <Head>
      <title>Get Restock!</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Navigation as='nav'>
      <a href='/'>
        <img src='/logo-light.png' alt='Restock Logo' />
      </a>
      <ul>
        <li>
          <a href='/'>Homepage</a>
        </li>
        <li>
          <a href='#product'>Product Introduction</a>
        </li>
        <li>
          <a href='#contact-us'>Contact Us</a>
        </li>
        <li>
          <a href='#webapp'>Webapp</a>
        </li>
      </ul>
    </Navigation>

    <Container as='main' slim>
      <HeroSection>
        <HeroGrid>
          <h1>Here is the slogan or mission of our product</h1>
          <div className='download'>
            <div>
              <WebLight />
              <Button light>Open</Button>
            </div>
            <div>
              <IOSLight />
              <Button light>Download</Button>
            </div>
            <div>
              <AndroidLight />
              <Button light>Download</Button>
            </div>
          </div>
          <img
            style={{ width: 350, height: 400, objectFit: 'cover' }}
            src='/placeholder.jpg'
            alt=''
          />
        </HeroGrid>
      </HeroSection>
      <ProductSection>
        <SectionTitle id='product'>Product Introduction</SectionTitle>
        <ImageRow>
          <ImageCard src='/placeholder.jpg' />
          <Content>
            <h3>Keep your shelves stocked with the amount you need</h3>
            <p>some detailed explanations of this part</p>
          </Content>
        </ImageRow>
        <ImageRow>
          <Content>
            <h3>Reduce the stress of worrying if you have enough supplies</h3>
            <p>some detailed explanations of this part</p>
          </Content>
          <ImageCard src='/placeholder.jpg' />
        </ImageRow>
        <ImageRow>
          <ImageCard src='/placeholder.jpg' />
          <Content>
            <h3>Easy to use, simple, user friendly</h3>
            <p>some detailed explanations of this part</p>
          </Content>
        </ImageRow>
      </ProductSection>
      <ContactSection>
        <SectionTitle id='contact-us'>Contact Us</SectionTitle>
        <p>here is the introduction of our team, our mission and so on</p>
        <p>
          Please do not hesitate to let us know if you have any comments or is
          you want to cooperate with us
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <label htmlFor='email'>
            <img src='/placeholder.jpg' alt='' />
            <input type='text' name='email' placeholder='input your email' />
          </label>

          <label htmlFor='message'>
            <img src='/placeholder.jpg' alt='' />
            <input
              type='text'
              name='message'
              placeholder='input your comments'
            />
          </label>
        </form>
      </ContactSection>
      <WebappSection>
        <SectionTitle id='webapp'>Webapp</SectionTitle>
        <p>
          It’s easy to use Restock on web directly or you can download the app
        </p>
        <div className='download'>
          <div>
            <Web />
            <Button>Open</Button>
          </div>
          <div>
            <IOS />
            <Button>Download</Button>
          </div>
          <div>
            <Android />
            <Button>Download</Button>
          </div>
        </div>
      </WebappSection>
    </Container>

    <Footer>
      <Container>
        <p>something else, such as the archival information</p>
      </Container>
    </Footer>
  </div>
);
export default Home;

const Container = styled.div.attrs(props => {
  if (props.slim) {
    return {
      width: '60%',
      maxWidth: '800px'
    };
  }

  return {
    width: '80%',
    maxWidth: '1280px'
  };
})`
  @media (min-width: 768px) {
    width: ${props => props.width};
    max-width: ${props => props.maxWidth};
    margin-left: auto;
    margin-right: auto;
  }
`;

const Navigation = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 20px 0;
    height: 100px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;
      &:first-of-type {
        font-size: 1.25em;
      }

      &.active,
      &:hover {
        a {
          border-bottom: 2px solid white;
        }
      }

      a {
        padding: 2px 0;
        color: white;
        text-decoration: none;
      }
    }
  }
`;

const Section = styled.section`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  margin: 40px 0;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryLight};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }
  &::before {
    margin-right: 2em;
  }
  &::after {
    margin-left: 2em;
  }
`;

const Content = styled.div`
  font-size: 24px;
  padding: 20px;

  @media (min-width: 768px) {
  }
`;

const ImageCard = styled.img`
  border-radius: 20px;
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

const ImageRow = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    ${Content} {
      order: 1;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    ${Content}, ${ImageCard} {
      width: 50%;
      margin: 0 20px;
    }
  }
`;

const HeroSection = styled.section`
  color: white;

  @media (max-width: 767px) {
    background: ${({ theme }) =>
      `linear-gradient(
        to right, 
        ${theme.colors.primaryLight}, 
        ${theme.colors.primary}
        )`};
  }

  @media (min-width: 768px) {
    position: relative;
    height: 80vh;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 95vw;
      height: 110vh;
      z-index: -1;
      border-radius: 75px;
      transform: rotate(-15deg) translate3d(-10vw, -65vh, 0);

      background: ${({ theme }) =>
        `linear-gradient(
        to right, 
        ${theme.colors.primaryLight}, 
        ${theme.colors.primary}
        )`};
    }
  }
`;

const HeroGrid = styled.div`
  padding: 40px;
  display: grid;
  grid-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 2fr;
  }

  h1 {
    font-size: 34px;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 1;
    }
  }
  div.download {
    @media (min-width: 768px) {
      grid-column: 1 / 2;
      grid-row: 2;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      align-items: flex-start;
      justify-content: flex-start;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-right: 20px;

      svg {
        margin: 10px 0;
      }
    }
  }
  img {
    @media (min-width: 768px) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }
`;

const ContactSection = styled(Section)`
  p {
    text-align: center;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      width: 90%;
      display: flex;
      align-items: center;
      margin: 10px 0;

      img,
      input {
        height: 50px;
      }

      img {
        width: 60px;
        margin-right: 20px;
        object-fit: cover;
      }

      input {
        width: 100%;
        padding: 4px 10px;
        border: 1px solid #999;
      }
    }
  }
`;

const ProductSection = styled(Section)``;

const WebappSection = styled(Section)`
  p {
    text-align: center;
  }

  .download {
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        margin: 10px 0;
      }
    }
  }
`;

const Footer = styled.footer`
  margin-top: 40px;
  background: #efeeee;
  padding: 20px;
  text-align: center;
`;

const Button = styled.button.attrs(props => ({
  main: props.light ? 'white' : props.theme.colors.primary,
  inv: props.light ? props.theme.colors.primary : 'white'
}))`
  border-radius: 25px;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.main};
  color: ${props => props.main};
  padding: 6px 18px;
  font-size: 14px;

  &:hover {
    color: ${props => props.inv};
    background-color: ${props => props.main};
  }
`;
