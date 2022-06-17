import React from 'react'
import styled from "styled-components";

function SmallButto() {
  return (
    <div>
      <SmallBtn>중복확인</SmallBtn>
    </div>
  )
}

const SmallBtn = styled.button`
    width: 52px;
    height: 26px;
    background-color: black;
    color: white;
    border-radius: 6px;
    font-size: 11px;
`

export default SmallButto