import { useState } from "react";
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";
import Text from "../elem/Text";
import AddressInfo from "./AddressInfo";
import AroundInfo from "./AroundInfo";
import Calender from "./Calender";
import Floating from "./Floating";
import Service from "./Service";

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
			<Text className="txtBx" value={values.content} onChange={handleInputChange}>사장님 한마디 해주세요.(최대 1,000자)</Text>
			<Calender />
			<AddressInfo />
			<Service />
			<AroundInfo />
			<Floating />
		</ContainerForm>
	)
}

const ContainerForm = styled.form`
	width: 100%;
	border-radius: 10px;
	background-color: #fff;
	padding-bottom: 120px;
`;

export default FormWrite;