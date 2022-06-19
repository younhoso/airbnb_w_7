import { useState } from "react";
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";
import Input from "../elem/Input";
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
    setValues(function(prevValues){
			console.log({...prevValues})
			return {
      	...prevValues,
      	[name]: value,
			}
    });
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
		// console.log(resOptions.body)
  };

	return(
		<ContainerForm onSubmit={handleSubmit}>
			<h2 className="formwriteH2">숙소등록</h2>
			<div className="image_box"><ImageRegist name="imgFile" imgFileValue={values.imgFile} onChange={handleChange}/></div>
			<div className="input_box"><Input width="100%" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }}>1박 기준으로 금액을 입력해주세요.</Input></div>
			<div className="input_box"><Input width="100%" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }}>숙소명을 입력해 주세요.(최대 30자)</Input></div>
			<div className="input_box"><Text className="txtBx" value={values.content} onChange={handleInputChange}>사장님 한마디 해주세요.(최대 1,000자)</Text></div>
			<Calender />
			<AddressInfo />
			<Service />
			<AroundInfo/>
			<Floating />
		</ContainerForm>
	)
}

const ContainerForm = styled.form`
	width: 100%;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px 0 120px 0;
	.formwriteH2 {
		font-size	: 22px;
		font-weight: 600;
		text-align: center;
	}
	.image_box, .input_box {
		margin-bottom: 10px;
	}
	
`;

export default FormWrite;