import React from "react";
import styled from "styled-components";

function Button({name}) {
    return (
        <div>
            <Btn>Sign Up</Btn>
            <SmallBtn>{name}</SmallBtn>
        </div>
    )
}

const Btn = styled.button`
  width: 343px;
  height: 52px;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-weight: bold;
`
const SmallBtn = styled.button`
    width: 52px;
    height: 26px;
    background-color: black;
    color: white;
    border-radius: 6px;
    font-size: 11px;
`

export default Button