import React from 'react'
import styled from "styled-components";

function Input({ id, className, width, height, theme, children, defaultValue, onChange, type }) {
    return (
        <InputBoxInner width={width}>
            <InputBox id={id} className={className} defaultValue={defaultValue} height={height} theme={theme} placeholder={children} onChange={onChange} type={type} />
        </InputBoxInner>
    )
}

const InputBoxInner = styled.div`
    width: ${props => props.width};
    display: inline-block;
    flex-grow: 0.9;
`

const InputBox = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.height};
    border-radius:0.5rem;
    border: 1px solid ${props => props.theme.borderColor};
    padding-left: 9px;
    &:focus {
        border: 2px solid ${(props) => props.borderColor || "black"}
    }
`

export default Input