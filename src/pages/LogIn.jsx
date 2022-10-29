import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function LogIn() {

    const handleClick = () => {
        console.log('Hello gentlemen!');
    }

  return (
      <div>
          <button onclick={handleClick}>Log in</button>
        </div>
  )
}

const Button = styled.button`
    background: linear-gradient(35deg, #6b6a6a, #313131);
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background 250ms;
    &:hover {
        background: linear-gradient(35deg, #6b6a6a, #43326b);

    }
`

export default LogIn