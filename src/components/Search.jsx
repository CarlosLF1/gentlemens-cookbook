import styled from "styled-components";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };


  return (
      <FormStyle onSubmit={submitHandler}>
          <div>
              <FaSearch></FaSearch>
              <StyledInput
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  value={input}
                  autoFocus={true}
              />
            </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 2rem;

    div {
        width: 100%;
        position: relative;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
        height: 1.5rem;
        width: 1.5rem;
    }
`

const StyledInput = styled.input`
    border: none;
    background: linear-gradient(35deg, #046294, #003049);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px orange;
    }
`;

export default Search