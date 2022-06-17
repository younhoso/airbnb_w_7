import React from "react";
import styled from "styled-components";

const Text = () => {
	return(
		<TextBx placeholder="사장님 한마디 해주세요.(최대 1,000자)"></TextBx>
	)
}
const TextBx = styled.textarea`
	width: 100%;
	height: 100px;
	padding: 10px;
	border: 1px solid #C4C4C4;
	border-radius: 0.6em;
	resize: none;
`
export default Text;