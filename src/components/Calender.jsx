import React,{useState} from "react";
import styled from "styled-components";

const Calender = () => {
	const [isActive, setActive] = useState("false");

	const hanleDropDownBox = (e) => {
		setActive(!isActive);
	}

	return(
		<CalenderBx>
			<div className="boxInner" onClick={hanleDropDownBox}>
				<h2>켈린더 입력</h2>
				<i className={`ic-arrow-top ${isActive ? "on" : "off"}`}></i>
			</div>
			<CalenderInner height="180px" className={`contents ${isActive ? "on" : "off"}`}>
				{/* 켈린더 라이브러리 연결할 곳 */}
			</CalenderInner>
		</CalenderBx>
	)
};

const CalenderBx = styled.div`
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
const CalenderInner = styled.div`
	height: ${props => props.height};
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	padding: 0 20px;
	box-sizing: border-box;
`

export default Calender;