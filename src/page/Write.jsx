import React from "react";
import styled from "styled-components";
import FormWrite from "../components/FormWrite";

const Write = () => {
	return(
		<WriteBx>
			<FormWrite />
		</WriteBx>
	)
};

const WriteBx = styled.div`
	max-width: 425px;
  min-width: 375px;
	margin: 0 auto;
`

export default Write;