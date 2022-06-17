import React from 'react'
import styled from "styled-components";

function MediumButton() {
    return (
        <div>
            <MediumBtn>등록하기</MediumBtn>
        </div>
    )
}

const MediumBtn = styled.button`
    width: 80px;
    height: 37px;
    background-color: #471868;
    color: white;
    border-radius: 6px;
    font-size: 10px;
`

export default MediumButton