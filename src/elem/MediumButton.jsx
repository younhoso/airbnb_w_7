import React from 'react'
import styled from "styled-components";

function MediumButton({ children, color, background }) {
    return (
        <div>
            <MediumBtn color={color} background={background}>{children}</MediumBtn>
        </div>
    )
}

const MediumBtnInner = styled.div`
    display: inline-block;
`

const MediumBtn = styled.button`
    width: ${props => props.width};
    height: 37px;
    background: ${(props) => props.bg || "#C4C4C4"};
    color: ${(props) => props.color || "white"};
    border-radius: 6px;
    font-size: 10px;
    font-weight: bold;
`

export default MediumButton