import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";
import Input from "../elem/Input";
import Select from "../elem/Select";
import Text from "../elem/Text";
import { lodgmentAdd } from "../modules/lodgment";
import AddressInfo from "./AddressInfo";
import AroundInfo from "./AroundInfo";
import Calender from "./Calender";
import Floating from "./Floating";
import Service from "./Service";


const INITIAL_VALUES = {
  photos: [],
	category: '',
  accName: '',
	openAt: '',
	closeAt: '',
	address: '',
  desc1_hanmadi: '',
	desc2_surroundings: '',
	desc3_notice: '',
	desc4_basics: '',
	facilities: [],
	charge: 0,
  rating: 0,
};

const FormWrite = () => {
	const [checkedList, setCheckedList] = useState([]);
	const [values, setValues] = useState(INITIAL_VALUES);
	const dispatch = useDispatch();

	const handleChange = (name, value) => {
    setValues(function(prevValues){
			return {
      	...prevValues,
      	[name]: value,
			}
    });
  };

	const handlerChecked = (checked, id) => {
    if (checked) {
			setCheckedList([...checkedList, id])
    } else {
      setCheckedList(checkedList.filter((el) => el !== id));
    }
		
		setValues((prevValue) => {
			return{
				...prevValue,
				facilities: [...checkedList, id]
			}
		})
  };

	const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

	const handleSelect = (e) => {
		setValues((prevValues => {
			return {
				...prevValues,
				category: e.target.value
			}
		}))
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
    const {photos} = values;
		for (let i = 0; i < photos.length; i++) {
			formData.append('photos', values.photos[i])
		};

		const resOptions = {
			body: values
		};

		try {
			console.log(checkedList)
			dispatch(lodgmentAdd(formData))
			dispatch(lodgmentAdd(resOptions))
    } catch (error) {

      return;
    } finally {

    }
  };

	return(
		<ContainerForm onSubmit={handleSubmit}>
			<h2 className="formwriteH2">숙소등록</h2>
			<div className="image_box"><ImageRegist name="photos" imgFileValue={values.photos} onChange={handleChange}/></div>
			<div className="input_box"><Select onChange={handleSelect} /></div>
			<div className="input_box"><Input width="100%" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} onChange={handleInputChange} name="charge" value={values.charge}>1박 기준으로 금액을 입력해주세요.</Input></div>
			<div className="input_box"><Input width="100%" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} onChange={handleInputChange} name="accName" value={values.title}>숙소명을 입력해 주세요.(최대 30자)</Input></div>
			<div className="input_box"><Text className="txtBx" onChange={handleInputChange} value={values.desc1_hanmadi}>사장님 한마디 해주세요.(최대 1,000자)</Text></div>
			<Calender />
			<AddressInfo />
			<Service oncheck={handlerChecked}/>
			<AroundInfo />
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