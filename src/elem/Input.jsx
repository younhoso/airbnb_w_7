import React from 'react'
import styled from "styled-components";

function Input({width, height, theme, children}) {
    return (
        <InputBoxInner width={width}>
            <InputBox height={height} theme={theme} placeholder={children} />
        </InputBoxInner>
    )
}

const InputBoxInner = styled.div`
    width: ${props => props.width};
    display: inline-block;
`

const InputBox = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.height};
    border-radius: 0.5em;
    border: 1px solid ${props => props.theme.borderColor};
    padding-left: 9px;
`

export default Input