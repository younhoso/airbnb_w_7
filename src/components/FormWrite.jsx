import { useState } from "react";
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";

const FormWrite = () => {
	const [values, setValues] = useState({
    imgFile: [],
    title: '',
    content: '',
  });

	const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

	return(
		<ContainerForm onSubmit={handleSubmit}>
			<ImageRegist values={setValues}/>
			<button type="submit">확인</button>
		</ContainerForm>
	)
}

const ContainerForm = styled.form`
	width: 100%;
	border-radius: 10px;
	background-color: #fff;
`;

export default FormWrite;