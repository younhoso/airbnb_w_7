import React from 'react'
import styled from "styled-components";

function Input() {
    return (
        <div>
            <InputBox placeholder='아이디(이메일)' />
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
`

export default Input