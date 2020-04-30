import React, { useState } from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Button } from '../styles/parts';
import { MobileNavigationWrapper, DesktopNavigationWrapper, NavigationItems } from '../styles/parts';

const Header = () => {

  const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
  const openMenu = () => {
    setIsOpen(true);
  };
  
   const closeMenu = () => {
    setIsOpen(false);
  };

    if (isOpen) {
      return (
        <ul className='mobileNavigationStyling'>

          <button className='mobileNavigation' onClick={closeMenu}>
          X
          </button>
          <NavigationItems closeMenu={closeMenu} />

        </ul>
      );
    } else {
      return <button className='mobileNavigation' onClick={openMenu}>
      ☰
      </button>;
    }
  };

  return (
    <Container>
      <nav>
        <div id='brand'>
          <a href='/'>
            <img src='/images/logo.png' alt='' />
          </a>
        </div>

        <DesktopNavigationWrapper>
        <ul>
          <NavigationItems />
        </ul>
        </DesktopNavigationWrapper>

        <MobileNavigationWrapper>

        <MobileNavigation />

      </MobileNavigationWrapper>
      </nav>

      <Hero id='hero'>
        <h1>
          Bring back your shelf-confidence with this easy stock calculator!
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
  padding: 10% 24px 30px 24px;
  margin-top: -10%;
  position: relative;
  z-index: 0;

  .mobileNavigation {
    color: #fff;
    font-size: 34px;
    padding: 8px;
    padding-top: 14px;
    padding-right: 24px;
    justify-content: right;
  }

  .mobileNavigationStyling {
    background: ${theme.colors.primary};
    position: fixed; 
    top: 0; 
    left: 20px;
    right: 0;
    bottom: 250px;
    overflow: hidden;
    Zindex: 1;
    border-radius: 5px;

  }

  #brand {
    padding-top: 20px;
    padding-left: 30px;
    width: 55px;
  }

  ${up('tablet')} {
    padding: 11% 40px 0 80px;
    background-color: transparent;
    background-image: url('/shapes/green_header.png');
    background-size: 100% 100%;
    background-position: 50% center;
    background-repeat: no-repeat;

    #brand {
      width: 100px;

    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;


    img {
      width: 90px;
    }
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
          padding: 23px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const Hero = styled.section`
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
    padding-bottom: 30px;
    background: ${theme.colors.primary};
    color: white;
    text-align: center;
    letter-spacing: 0.7px;
    font-size: 20px;

    ${up('tablet')} {
      background: transparent;
      letter-spacing: 0.7px;
      padding-bottom: 30px;
      padding-top: 5px;
      font-size: 28px;
    }
  }

  .row {
    padding: 5px 10px;
    background: white;
    border-radius: 60px;

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
        margin: 35px;
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