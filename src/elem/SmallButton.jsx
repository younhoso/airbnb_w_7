import React from 'react'
import styled from "styled-components";

function SmallButto({ children }) {
  return (
    <div>
      <SmallBtn >{children}</SmallBtn>
    </div>
  )
}

const SmallBtn = styled.button`
    width: 52px;
    height: 26px;
    background-color: black;
    color: white;
    border-radius: 6px;
    font-size: 9px;
`

export default SmallButto