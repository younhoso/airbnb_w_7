import React from 'react'
import styled from "styled-components";

function Input(props) {
    const { placeholder, borderColor } = props;
    return (
        <div>
            <InputBox borderColor={borderColor} placeholder={placeholder} />
        </div>
    )
}

const InputBox = styled.input`
    box-sizing: border-box;
    width: 343px;
    height: 52px;
    border-radius: 10px;
    border: 2px solid #eeee;
    padding-left: 9px;
    &:focus {
        border: 2px solid ${(props) => props.borderColor || "black"}
    }
`

export default Input