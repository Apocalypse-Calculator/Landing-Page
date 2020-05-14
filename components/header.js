import React, { useState } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Button } from "../styles/parts";
import {
  MobileNavigationWrapper,
  DesktopNavigationWrapper,
  NavigationItems,
} from "../styles/parts";

const Header = () => {
  // const MobileNavigation = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const openMenu = () => {
  //     setIsOpen(true);
  //   };

  //   const closeMenu = () => {
  //     setIsOpen(false);
  //   };

  //   if (isOpen) {
  //     return (
  //       <ul className="mobileNavigationStyling">
  //         <button className="mobileNavigation" onClick={closeMenu}>
  //           X
  //         </button>
  //         <NavigationItems closeMenu={closeMenu} />
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       // <button className="mobileNavigation" onClick={openMenu}>
  //       //   ☰
  //       // </button>
  //       <div className="mobileNavigation">
  //         <input type="checkbox" />
  //         <div className="bar1"></div>
  //         <div className="bar2"></div>
  //         <div className="bar3"></div>
  //       </div>
  //     );
  //   }
  // };

  return (
    <Container>
      <nav>
        <div id="brand">
          <a href="/">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>

        <DesktopNavigationWrapper>
          <NavigationItems />
        </DesktopNavigationWrapper>

        {/* <MobileNavigationWrapper> */}
        {/* <MobileNavigation /> */}
        <div className="mobileNav">
          <input type="checkbox" />
          {/* hamburger icon */}
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>

          <ul id="menu">
            <a href="#about">
              <li>ABOUT</li>
            </a>
            <a href="#how-to-use">
              <li>HOW TO USE</li>
            </a>
            <a href="#download">
              <li>DOWNLOAD</li>
            </a>
            <a href="#contact-us">
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
        {/* </MobileNavigationWrapper> */}
      </nav>

      <Hero id="hero">
        <h1>
          Bring back your shelf-confidence with this easy stock calculator!
        </h1>
        <div className="row">
          <div>
            <img src="/images/web_light.png" alt="" />
            <Button disable>Coming Soon</Button>
          </div>
          <div>
            <img src="/images/apple_light.png" alt="" />
            <Button disable>Coming Soon</Button>
          </div>
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.zachl.restock">
              <img src="/images/android_light.png" alt="" />
            </a>
            <Button
              as="a"
              href="https://play.google.com/store/apps/details?id=com.zachl.restock"
            >
              Download
            </Button>
          </div>
        </div>
        <img src="/images/phone.png" alt="demo" />
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
  z-index: 10;

  .mobileNavigation {
    color: #fff;
    font-size: 34px;
    margin-top: 10px;
    justify-content: right;
  }

  .mobileNavigationStyling {
    background: ${theme.colors.primary};
    position: fixed; 
    top: -20px; 
    left: 20px;
    right: 0;
    bottom: 250px;
    overflow: hidden;
    z-index: 10;
    border-radius: 5px;
  }

  // hamburger icon container
  .mobileNav {
    position: fixed;
    display: block;
    cursor: pointer;
    top: 3%;
    right: 3%;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    // checkbox to assist hamburger icon
    input {
      display: block;
      width: 42px;
      height: 32px;
      position: absolute;
      top: -4px;
      left -4px;
      cursor: pointer;
      -webkit-touch-callout: none;
      // place hidden checkbox over hamburger icon
      z-index: 2;
      opacity: 0;

      &:checked ~ .bar1 {
        transform: rotate(-45deg) translate(-16px, 13px);
      }

      &:checked ~ .bar2 {
        opacity: 0;
      }
      
      &:checked ~ .bar3 {
        transform: rotate(45deg) translate(-16px, -13px);
      }

      &:checked ~ #menu {
        transform: translate(-60%, 0);
      }
    }

    // hamburger icon
    .bar1, .bar2, .bar3 {
      display: block;
      width: 32px;
      height: 4px;
      position: relative;
      background-color: white;
      border-radius: 3px;
      margin-bottom: 5px;
      z-index: 1;
      transition: transform .4s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    .bar1 {
      transform-origin: 0% 0%;
    }

    .bar3 {
      transform-origin: 0% 100%;
    }
  }

  #menu {
    position: absolute;
    width: 300px;
    margin: -100px -50px 0 0;
    padding: 50px;
    padding-top: 125px;
    background-color: ${theme.colors.primary};
    opacity: 95%;
    text-align: left;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: top right;
    transform: translate(100%, 0);
    
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
    }

    li {
      padding: 1rem;
    }
  }

  #brand {
    padding-top: 20px;
    padding-left: 30px;
    width: 55px;
  }

  ${up("tablet")} {
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

      ${up("tablet")} {
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

  ${up("tablet")} {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "title image" "links image";
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

    ${up("tablet")} {
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

    ${up("tablet")} {
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

      ${up("tablet")} {
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
    ${up("tablet")} {
      display: block;
    }
    max-width: 250px;
    margin: 0 auto;
  }
`;
