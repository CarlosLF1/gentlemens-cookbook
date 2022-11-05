import React from 'react'
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import styled from "styled-components";
import Category from "./Category";
import Search from "./Search";


function NavBar() {
  return (
    <>
    <Nav className=''>
          <div className="flex space-x-3">
            <GiKnifeFork />
            <Logo to={"/"}>The Gentlemen's Cookbook</Logo>
            </div>
            <div className='flex flex-row'>
              <Link to={"/login"} style={{textDecoration: 'none'}}><Button>Log in</Button></Link>
              <Link to={"/profile"} style={{textDecoration: 'none'}}><Button>Profile</Button></Link>
            </div>
      </Nav>
        <Search />
        <Category />
    </>
  )
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
 &:hover {
        color: #C1121F;
        font-weight: 500;
 }
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 3rem;
margin-right: 3rem;
svg {
  font-size: 2.5rem;
}
`

const Button = styled.button`
    background: linear-gradient(35deg, #035784, #003049);
    color: white;
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px;
    border-radius: 10px;
    outline: 0;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 10rem;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background 250ms;
    &:hover {
        background: linear-gradient(to right, #f27121, #e94057);
        font-weight: 800;
    }
`

export default NavBar;