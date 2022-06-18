import React from 'react'
import styled from "styled-components";

function MediumButton({ width, children, color, background }) {
    return (
        <MediumBtnInner>
            <MediumBtn width={width} color={color} background={background}>{children}</MediumBtn>
        </MediumBtnInner>
    )
}

const MediumBtnInner = styled.div`
    flex-shrink: 0;
	width: auto;
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