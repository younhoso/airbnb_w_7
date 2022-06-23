import React,{useState} from "react";
import styled from "styled-components";
import Text from "../elem/Text";

const AroundInfo = ({name, tit, txt, value, onChange, defaultValue, currentValue}) => {
	const [isActive, setActive] = useState("false");

	const hanleDropDownBox = (e) => {
		setActive(!isActive);
	}

	return(
		<AroundInfoBx>
			<div className="boxInner" onClick={hanleDropDownBox}>
				<h2>{tit}</h2>
				<i className={`ic-arrow-top ${isActive ? "on" : "off"}`}></i>
			</div>
			<ContensInner height="140px" className={`contents ${isActive ? "on" : "off"}`}>
				<Text name={name} value={value} onChange={onChange} defaultValue={defaultValue} currentValue={currentValue}>{txt}</Text>
			</ContensInner>
		</AroundInfoBx>
	)
};

const AroundInfoBx = styled.div`
	height: ${props => props.height};
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); 
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	padding: 0 20px;
	box-sizing: border-box;
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
		padding: 0 10px;
	}
	.contents.off {
		max-height: 0;
	}
	.contents.on {
		max-height: 300px;
	}
	.box {
		margin: 8px 0;
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
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
`

export default AroundInfo;