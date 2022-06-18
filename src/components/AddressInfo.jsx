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
			<ContensInner height="180px" className={`contents ${isActive ? "on" : "off"}`}>
				<div className="number box">
					<Input height="40px" theme={{borderColor: "#C4C4C4"}} />
					<MediumButton width="78px" theme={{ fontColor: "#000000", bgColor: "#F4F4F4" }}>우편번호</MediumButton>
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
const ContensInner = styled.div`
	height: ${props => props.height};
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	padding: 0 20px;
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