import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
    <styledFooter>A coookbook for gentlemen of distinction</styledFooter>
  )
}

const styledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Footer