import React from "react";
import styled from "styled-components";

const Text = ({name, value, onChange, currentValue, defaultValue, children}) => {
	return(
		<TextBx name={name} value={value} onChange={onChange} currentValue={currentValue} placeholder={children} defaultValue={defaultValue}></TextBx>
	)
}
const TextBx = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 10px;
	border: 1px solid #C4C4C4;
	border-radius: 0.6em;
	resize: none;
	&:focus {
		border: 2px solid ${(props) => props.borderColor || "black"}
	}
`
export default Text;