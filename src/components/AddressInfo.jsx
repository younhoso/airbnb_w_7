import React,{useState} from "react";
import styled from "styled-components";
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Input from "../elem/Input";
import {MediunButton} from "../elem/Button"

const AddressInfo = () => {
	const [isActive, setActive] = useState("false");
	const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

	const handleComplete = (data) => {
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
		console.log(data);
    // console.log(fullAddress);
		// console.log(extraAddress);
  };

	const handleClick = () => {
    open({ onComplete: handleComplete });
  };

	const hanleDropDownBox = (e) => {
		setActive(!isActive);
	}

	return(
		<DropDownBx>
			<div className="boxInner" onClick={hanleDropDownBox}>
				<h2>주소 정보</h2>
				<i className={`ic-arrow-top ${isActive ? "on" : "off"}`}></i>
			</div>
			<ContensInner height="180px" className={`contents ${isActive ? "on" : "off"}`}>
				<div className="number box">
					<Input height="40px" theme={{borderColor: "#C4C4C4"}} />
					<MediunButton width="78px" theme={{ fontColor: "#000000", bgColor: "#F4F4F4" }} onClick={handleClick}>우편번호</MediunButton>
				</div>
				<div className="box">
					<Input width="100%" height="40px" theme={{borderColor: "#C4C4C4"}}>주소</Input>
				</div>
				<div className="box">
					<Input width="100%" height="40px" theme={{borderColor: "#C4C4C4"}}>상세주소</Input>
				</div>
			</ContensInner>

		</DropDownBx>
	)
};

const DropDownBx = styled.div`
	width: 100%;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); 
	margin-bottom: 20px;
	border-radius: 0.8em;
	padding: 0 20px;
	.boxInner {
		display: flex;
    justify-content: space-between;
		align-items: center;
		i {
			font-size: 24px;
			padding: 10px;
			transition: transform .25s ease-in-out;
		}
		i.off {
			transform:rotate(180deg)
		}
	}
	.contents.off {
		max-height: 0;
	}
	.contents.on {
		max-height: 300px;
	}
	h2 {
		font-size: 18px;
		font-weight: 600;
		padding: 10px;
	}
`
const ContensInner = styled.div`
	height: ${props => props.height};
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	padding: 0 10px;
	box-sizing: border-box;
	.number {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.box {
		margin: 8px 0;
	}
`

export default AddressInfo;