import { useState } from "react";
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";
import Text from "../elem/Text";

const FormWrite = () => {
	const [values, setValues] = useState({
		content: '',
    imgFile: null,
  });

	const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

	const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

	const handleSubmit = (e) => {
		e.preventDefault();
    const {imgFile} = values;

		const formData = new FormData();
		for (let i = 0; i < imgFile.length; i++) {
			formData.append('imgFile', imgFile[i])
		};

		const resOptions = {
			body: values
		};
		console.log(resOptions.body)
  };

	return(
		<ContainerForm onSubmit={handleSubmit}>
			<ImageRegist name="imgFile" imgFileValue={values.imgFile} onChange={handleChange}/>
			<Text value={values.content} onChange={handleInputChange} />
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