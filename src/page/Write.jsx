import React from "react";
import styled from "styled-components";
import FormWrite from "../components/FormWrite";

const Write = (props) => {
	return(
		<WriteBx>
			<FormWrite props={props}/>
		</WriteBx>
	)
};

const WriteBx = styled.div`
	max-width: 425px;
	margin: 0 auto;
	padding: 0 20px;
	background-color: #fff;
`

export default Write;