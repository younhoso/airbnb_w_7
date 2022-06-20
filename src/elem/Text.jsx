import React from "react";
import styled from "styled-components";

const Text = ({value, onChange, children}) => {
	return(
		<TextBx name="desc1_hanmadi" value={value} onChange={onChange} placeholder={children}></TextBx>
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