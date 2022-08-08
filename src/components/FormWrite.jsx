import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import ImageRegist from "../elem/ImageRegist";
import Input from "../elem/Input";
import Select from "../elem/Select";
import Text from "../elem/Text";
import { lodgmentAdd, lodgmentEdit } from "../modules/lodgment";
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
	zonecode: '',
	address: '',
	detailAddress:'',
  desc1_hanmadi: '',
	desc2_surroundings: '',
	desc3_notice: '',
	desc4_basics: '',
	facilities: [],
	charge: 0
};

const FormWrite = ({props}) => {
	const {history, location,} = props;
	const data = location.state;
	const [startDate, setStartDate] = useState(new Date());
  	const [endDate, setEndDate] = useState(new Date());
	const [checkedList, setCheckedList] = useState([]);
	const [values, setValues] = useState(data ? data : INITIAL_VALUES);
	const [Dday, setDday] = useState("");
	const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
	const dispatch = useDispatch();

    const handleChange = (name, value) => {
      setValues(function(prevValues){
        return {
      	 ...prevValues,
      	 [name]: value
	}
      });
    };

	const handlerChecked = (checked, name) => {
    if (checked) {
	setCheckedList([...checkedList, name])
    } else {
      setCheckedList(checkedList.filter((el) => el !== name));
    }
		
	setValues((prevValue) => {
		return{
			...prevValue,
			facilities: [...checkedList, name]
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

	// 달력 시작날짜, 끝나는 날짜 설정 함수
	const changeCalender = (dates) => {
		const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
		
	 	const Smonth = start === null ? "" : start.getMonth()+1;
		const Emonth = end === null ? "" : end.getMonth()+1;
		const Sday = start === null ? "" : start.getDate()
		const Eday = end === null ? "" : end.getDate()
		
		const date = `${Smonth}월 ${Sday}일 ~ ${Emonth}월 ${Eday}일`;
		setDday(date)

		setValues((prevValue) => {
			return{
				...prevValue,
				openAt: start,
				closeAt: end
			}
		})
  };

	//주소 입력 우편번호 함수
	const handlePostcode = (data) => {
		const {zonecode} = data;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
		setValues((prevValue) => {
			return{
				...prevValue,
				address: fullAddress,
				zonecode: zonecode
			}
		})
  };

	const handlePost = () => {
    open({ onComplete: handlePostcode });
  };

	// 수정하는 함수
  const updateLodgment = (e) => {
    e.preventDefault();
		const resOptions = {
			data: values
		};
		console.log(resOptions.data)
		dispatch(lodgmentEdit(data.accId, resOptions.data))
  };
	
	// 등록하는 함수
	const handleSubmit = (e) => {
		e.preventDefault();
		const resOptions = {
			data: values
		};
		dispatch(lodgmentAdd(resOptions.data))
  };

	return(
		<ContainerForm onSubmit={ data ? updateLodgment : handleSubmit}>
			<h2 className="formwriteH2"> {data ? "숙소 수정" : "숙소 등록"}</h2>
			<Link to="/"><div className="arrow_inner"><i className="ic-arrow-top"></i></div></Link>
			<div className="image_box"><ImageRegist imgs={data && data.photos} onChange={setValues}/></div>
			<div className="input_box"><Select item={data && data.category} onChange={handleSelect} /></div>
			<div className="input_box"><Input width="100%" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} onChange={handleInputChange} name="charge" currentValue={data && data.charge} defaultValue={data && data.charge}>1박 기준으로 금액을 입력해주세요.</Input></div>
			<div className="input_box"><Input width="100%" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} onChange={handleInputChange} name="accName" currentValue={data && data.accName} defaultValue={data && data.accName}>숙소명을 입력해 주세요.(최대 30자)</Input></div>
			<div className="input_box"><Text className="txtBx" onChange={handleInputChange} name="desc1_hanmadi" currentValue={data && data.desc1_hanmadi} defaultValue={data && data.desc1_hanmadi}>사장님 한마디 해주세요.(최대 1,000자)</Text></div>
			<Calender startDate={startDate} endDate={endDate} onchange={changeCalender}/>
			<AddressInfo address={data ? data.address: values.address} detailAddress={data ? data.detailAddress : values.detailAddress} zonecode={data ? data.zonecode : values.zonecode} onChange={handleInputChange} handlePost={handlePost} />
			<Service checkedName={data ? data.facilities : ""} oncheck={handlerChecked}/>
			<div className="input_box"><AroundInfo tit={"주변정보"} txt={"숙소 주변 정보를 입력해 주세요.(최대 1,000자)"} onChange={handleInputChange} name="desc2_surroundings" currentValue={data && data.desc2_surroundings} defaultValue={data && data.desc2_surroundings}/></div>
			<div className="input_box"><AroundInfo tit={"공지사항"} txt={"전체 공지 사항을 남겨주세요.(최대 1,000자)"} onChange={handleInputChange} name="desc3_notice" currentValue={data && data.desc3_notice} defaultValue={data && data.desc3_notice}/></div>
			<div className="input_box"><AroundInfo tit={"기본 정보"} txt={"숙소에 대한 기본적인 정보를 입력해 주세요.(최대 1,000자)"} onChange={handleInputChange} name="desc4_basics" currentValue={data && data.desc4_basics} defaultValue={data && data.desc4_basics}/></div>
			<Floating Dday={ data ? (data.openAt, data.closeAt) : Dday} charge={data ? data.charge : values.charge} txt={"등록하기"}/>
		</ContainerForm>
	)
};

const ContainerForm = styled.form`
	width: 100%;
	border-radius: 10px;
	background-color: #fff;
	padding: 20px 0 80px 0;
	position: relative;
	.formwriteH2 {
		font-size	: 22px;
		font-weight: 600;
		text-align: center;
		margin-bottom: 20px;
	}
	.image_box, .input_box {
		margin-bottom: 15px;
	}
	.arrow_inner {
		position: absolute;
		top: 20px;
		right: 0px;
		transform: rotate(-90deg);
		font-size: 28px;
	}
`;

export default FormWrite;
