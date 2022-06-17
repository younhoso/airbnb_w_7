import React from "react";
import styled from "styled-components";

function Button() {
    return (
        <div>
            <LargeBtn>Sign Up</LargeBtn>
        </div>
    )
}

const LargeBtn = styled.button`
  width: 343px;
  height: 52px;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-weight: bold;
`

export default Button