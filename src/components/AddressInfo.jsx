import React,{useState} from "react";
import styled from "styled-components";
import Input from "../elem/Input";
import {MediunButton} from "../elem/Button"

const AddressInfo = ({name, address, zonecode, detailAddress, handlePost, onChange}) => {
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
					<Input height="40px" defaultValue={zonecode} theme={{borderColor: "#C4C4C4"}} />
					<a href="#0" className="postLink" onClick={handlePost}>우편번호</a>
				</div>
				<div className="box">
					<Input width="100%" height="40px" defaultValue={address} theme={{borderColor: "#C4C4C4"}}>주소</Input>
				</div>
				<div className="box">
					<Input width="100%" height="40px" name="detailAddress" onChange={onChange} defaultValue={detailAddress} theme={{borderColor: "#C4C4C4"}}>상세주소</Input>
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
	.postLink {
		width: 78px;
    height: 37px;
		line-height: 37px;
		text-align: center;
    font-size: 12px;
		font-weight: 600;
		display: inline-block;
    background-color: #F4F4F4;
    color: #000000;
    border-radius: 6px;
	}
`

export default AddressInfo;