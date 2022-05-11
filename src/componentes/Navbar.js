import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Link } from 'react-router-dom';

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>CMR <span>Portfolio</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <Link to="/">Home</Link>
			      <Link to="/about">About</Link>
            <Link to="/about">Projects</Link>
            <Link to="/about">Contact</Link>
        </div>
         <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
         </div>
             <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: #222;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:10;
  
  
  a{
    z-index:10;
    color:#222;
    text-decoration: none;
    margin-right: 1rem;
    
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
      
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #222;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index:10;
    a{
      font-family: 'Kanit', sans-serif;
      text-transform:uppercase;
      font-size: 3rem;
      color:#9401B1;
      border-bottom:#f8f7f7e8 1px solid;
      margin-top:1rem;
    }
    a:hover {
      /*color: white !important;*/
      webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color:#9401B1;
      -webkit-text-fill-color: transparent;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #cccbcbe8;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 10% 0%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
   
  }
`