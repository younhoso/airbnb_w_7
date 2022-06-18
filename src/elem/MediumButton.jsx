import React from 'react'
import styled from "styled-components";

function MediumButton({width, theme, children}) {
    return (
        <MediumBtnInner>
            <MediumBtn width={width} theme={theme}>{children}</MediumBtn>
        </MediumBtnInner>
    )
}

const MediumBtnInner = styled.div`
    display: inline-block;
`

const MediumBtn = styled.button`
    width: ${props => props.width};
    height: 37px;
    background-color: ${props => props.theme.bgColor}; 
    color: ${props => props.theme.fontColor};
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
`

export default MediumButton