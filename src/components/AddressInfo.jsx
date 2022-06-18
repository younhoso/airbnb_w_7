import React,{useState} from "react";
import styled from "styled-components";
import Input from "../elem/Input";
import MediumButton from "../elem/MediumButton"

const AddressInfo = () => {
	const [isActive, setActive] = useState("false");

	const hanleDropDownBox = (e) => {
		setActive(!isActive);
	}

	return(
		<DropDownBx>
			<div className="boxInner" onClick={hanleDropDownBox}>
				<h2>주소 정보</h2>
				<i className={`ic-arrow-top ${isActive ? "on" : "off"}`}></i>
			</div>
			<div className={`contents ${isActive ? "on" : "off"}`}>
				<div>
					<Input width="257px" height="40px" theme={{borderColor: "#C4C4C4"}} />
					<MediumButton width="78px" theme={{ fontColor: "#000000", bgColor: "#F4F4F4" }}>우편번호</MediumButton>
				</div>
				<Input width="100%" height="40px" theme={{borderColor: "#C4C4C4"}}>주소</Input>
				<Input width="100%" height="40px" theme={{borderColor: "#C4C4C4"}}>상세주소</Input>
			</div>
		</DropDownBx>
	)
};

const DropDownBx = styled.div`
	width: 100%;
	box-shadow: rgb(0 0 0 / 8%) 0px 4px 8px;
	margin-bottom: 20px;
	border-radius: 0.8em;
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
	.contents {
		height: 150px;
		-webkit-transition: max-height 0.2s ease-in-out;
		transition: max-height 0.2s ease-in-out;
		overflow: hidden;
		padding: 0 20px;
    box-sizing: border-box;
		div {
			display: flex;
    	justify-content: space-between;
    	align-items: center;
		}
	}
	.contents.off {
		max-height: 0;
	}
	.contents.on {
		max-height: 300px;
	}
	h2 {
		font-size: 22px;
		font-weight: 600;
		padding: 10px;
	}
`

export default AddressInfo;