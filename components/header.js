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

        <MobileNavigationWrapper>
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
        </MobileNavigationWrapper>
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
  // z-index: 10;

  // hamburger icon container
  .mobileNav {
    display: inline-block;
    cursor: pointer;
    margin: -2rem 1rem;
    float: right;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    // checkbox to assist hamburger icon
    input {
      display: inline-block;
      width: 42px;
      height: 32px;
      position: absolute;
      float: right;
      // top: -4px;
      // left -4px;
      cursor: pointer;
      -webkit-touch-callout: none;
      // place hidden checkbox over hamburger icon
      z-index: 3;
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
        transform: translate(-85%, 5%);
      }
    }

    // hamburger icon
    .bar1, .bar2, .bar3 {
      display: block;
      width: 32px;
      height: 4px;
      position: relative;
      background-color: #fff;
      border-radius: 3px;
      margin-bottom: 5px;
      z-index: 1;
      transition: transform .4s cubic-bezier(0.77, 0.2, 0.05, 1), opacity .4s ease;
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
    width: 110vw;
    margin-top: -10px;
    float: left;
    padding: 20px;
    background-color: ${theme.colors.primary};
    opacity: 98%;
    border-radius: 10px;
    text-align: left;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    // transform-origin: top left;
    transform: translate(-85%, -130%);
    transition: transform .5s cubic-bezier(0.77, 0.2, 0.05, 1);
    z-index: -2;
    
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
    }

    li {
      padding-left: 5rem;
      padding-bottom: 1rem;
    }
    
  }

  #brand {
    padding-top: 20px;
    padding-left: 30px;
    width: 55px;
  }

  .sticky {
    position: fixed;
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
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0%;
    padding-bottom: 2%;
    width: 100%;
    background-color: ${theme.colors.primary};
    opacity: 95%;
    z-index: 2;
    
    img {
      display: flex;
      width: 90px;
    }

    ${up("tablet")} {
      display: flex;
      position: relative;
      background-color: transparent;
      // margin-bottom: 100px;
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
  margin-top: 4.5rem;

  ${up("tablet")} {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "title image" "links image";
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin-top: 0;

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
