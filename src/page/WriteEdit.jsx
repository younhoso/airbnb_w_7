import React from "react";
import styled from "styled-components";
import FormEdit from "../components/FormEdit"

const WriteEdit = () => {
	return(
		<WriteEditBx>
			<FormEdit />
		</WriteEditBx>
	)
};

const WriteEditBx = styled.div`
	max-width: 425px;
	margin: 0 auto;
	padding: 0 20px;
	background-color: #fff;
`

export default WriteEdit;