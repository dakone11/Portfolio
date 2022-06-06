import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { NavLink } from "react-router-dom";
import { URL } from "../constants/url.constants";

function Navbar() {
  const location = useLocation();
  const [enableMenu, setEnableMenu] = useState(false);

  const handleClick = () => {
    const status = !enableMenu;
    setEnableMenu(status);
  };

  const onClose = () => {
    setEnableMenu(false);
  };

  return (
    <>
      <NavContainer>
        <h2>
          CMR <span>Portfolio</span>
        </h2>
        <div className={`links ${enableMenu ? "active" : ""}`}>
          <NavLink
            to={URL.HOME}
            className={`nav-link ${location.pathname === URL.HOME ? "selected": ""}`}
            onClick={onClose}
          >
            Home
          </NavLink>
          <NavLink
            to={URL.ABOUT}
            className={`nav-link ${location.pathname === URL.ABOUT ? "selected": ""}`}
            onClick={onClose}
          >
            About
          </NavLink>
          <NavLink
            to={URL.PROJECTS}
            className={`nav-link ${location.pathname === URL.PROJECTS ? "selected": ""}`}
            onClick={onClose}
          >
            Projects
          </NavLink>
          <NavLink
            to={URL.CONTACT}
            className={`nav-link ${location.pathname === URL.CONTACT ? "selected": ""}`}
            onClick={onClose}
          >
            Contact
          </NavLink>
        </div>

        <div className="burguer">
          <BurguerButton clicked={enableMenu} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${enableMenu ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: var(--accent);
    font-weight: 400;
    span {
      font-weight: bold;
      color: var(--text-primary);
    }
  }
  padding: 0.4rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  a {
    z-index: 10;
    color: var(--text-primary);
    text-decoration: none;
    margin-right: 1rem;
  }
  .selected{
    transform:translateX(-5px);
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: var(--text-primary);
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: var(--text-primary);
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
    a {
      font-family: "Kanit", sans-serif;
      text-transform: uppercase;
      font-size: 4rem;
      color: var(--accent);
     
    }
    a:hover {
      color: var(--text-primary);
      font-weight: 700;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: var(--background-color-nav);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 10% 0%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
  }
`;
