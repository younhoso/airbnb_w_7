import React,{useState} from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";


const Calender = ({startDate, endDate, onchange}) => {
	const [isActive, setActive] = useState("false");
	const [Dday, setDday] = useState("");

	const hanleDropDownBox = (e) => {
		setActive(!isActive);
	}
	
	return(
		<CalenderBx className="CalenderBx">
			<div className="boxInner" onClick={hanleDropDownBox}>
				<h2>숙소를 등록할 날짜를 선택해주세요.</h2>
			</div>
			<CalenderInner height="580px" className={`contents ${isActive ? "on" : "off"}`}>
				<p>{Dday}</p>
				<DatePicker
					onChange={onchange}
					startDate={startDate}
					endDate={endDate}
					selectsRange
					minDate={new Date()}
					locale={ko}
					inline/>
			</CalenderInner>
		</CalenderBx>
	)
};

const CalenderBx = styled.div`
	.boxInner {
		display: flex;
    justify-content: space-between;
		align-items: center;
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
		padding: 10px 0;
	}
`
const CalenderInner = styled.div`
	height: ${props => props.height};
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	
	.react-datepicker {
		width: 100%;
		.react-datepicker__header {
			background-color: #fff;
		}
		.react-datepicker__month-container {
			width: 100%;
		}
		.react-datepicker__day--in-range {
			background: rgb(239 239 239);
			border-radius: 0;
			color: #000;
		}
		.react-datepicker__day {
			border-radius: 100%;
			border: 1.5px solid transparent;
		}
		.react-datepicker__day--range-start {
			background: #000;
			color: #fff;
		}
		.react-datepicker__day--range-end {
			background: #000;
			color: #fff;
		}
		.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range), .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range), .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range), .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range){
			background: #000
		}
		.react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected{
			background: #000
		}
		.react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {
			color: #000;
			background: rgb(255, 255, 255) !important;
    	border: 1.5px solid rgb(34, 34, 34) !important;
		}
		.react-datepicker__day--in-selecting-range {
			color: #000;
			background: #eee !important;
		}
		.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
			width: 1.9rem;
			height: 1.9rem;
		}
	}
`

export default Calender;