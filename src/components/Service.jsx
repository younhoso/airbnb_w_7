import React,{useState} from "react";
import styled from "styled-components";

const Service = () => {
	const [isActive, setActive] = useState("false");

  const [footCheck, setfootCheck] = useState(false);
  const [wiFiCheck, setWiFiCheck] = useState(false);
  const [pickUpCheck, setPickUpCheck] = useState(false);
	const [freeParkingCheck, setfreeParkingCheck] = useState(false);
	const [bbQCheck, setBbqCheck] = useState(false);
	const [parkingCheck, setParkingCheck] = useState(false);
	const [tvCheck, setTvCheck] = useState(false);
	const [airCheck, setAirCheck] = useState(false);
	const [showerCheck, setShowerCheck] = useState(false);
	const [smokingCheck, setSmokingCheck] = useState(false);
	const [dogCheck, setdogCheck] = useState(false);
	const [cookingCheck, setCookingBtnEvent] = useState(false);

	const hanleDropDownBox = () => {
		setActive(!isActive);
	}
  
  const footBtnEvent = () =>{
    if(footCheck === false) {
      setfootCheck(true)
    }else {
      setfootCheck(false)
    }
  };
  
  const WiFiBtnEvent = () =>{
    if(wiFiCheck === false) {
      setWiFiCheck(true)
    }else {
      setWiFiCheck(false)
    }
  };
  
  const PickUpBtnEvent =()=>{
    if(pickUpCheck === false) {
      setPickUpCheck(true)
    }else {
      setPickUpCheck(false)
    }
  };

	const freeParkingBtnEvent =()=>{
    if(freeParkingCheck === false) {
      setfreeParkingCheck(true)
    }else {
      setfreeParkingCheck(false)
    }
  };

	const bbqBtnEvent =()=>{
    if(bbQCheck === false) {
      setBbqCheck(true)
    }else {
      setBbqCheck(false)
    }
  };

	const parkingBtnEvent =()=>{
    if(parkingCheck === false) {
      setParkingCheck(true)
    }else {
      setParkingCheck(false)
    }
  };

	const tvBtnEvent =()=>{
    if(tvCheck === false) {
      setTvCheck(true)
    }else {
      setTvCheck(false)
    }
  };

	const airBtnEvent = () =>{
    if(airCheck === false) {
      setAirCheck(true)
    }else {
      setAirCheck(false)
    }
  };

	const showerBtnEvent = () =>{
    if(showerCheck === false) {
      setShowerCheck(true)
    }else {
      setShowerCheck(false)
    }
  };

	const smokingBtnEvent = () =>{
    if(smokingCheck === false) {
      setSmokingCheck(true)
    }else {
      setSmokingCheck(false)
    }
  };

	const dogBtnEvent = () =>{
    if(dogCheck === false) {
      setdogCheck(true)
    }else {
      setdogCheck(false)
    }
  };

	const cookingBtnEvent = () =>{
    if(cookingCheck === false) {
      setCookingBtnEvent(true)
    }else {
      setCookingBtnEvent(false)
    }
  };

	return(
		<ServiceBx>
			<div className="boxInner" onClick={hanleDropDownBox}>
				<h2>편의시설 및 서비스</h2>
				<i className={`ic-arrow-top ${isActive ? "on" : "off"}`}></i>
			</div>
			<ServiceInner height="220px" className={`contents ${isActive ? "on" : "off"}`}>
        	<div className="item">
        		<input type="checkbox" id="check1" checked={footCheck} onChange={footBtnEvent}/>
        		<label htmlFor="check1">족구장</label>
        	</div>
        	<div className="item">
        		<input type="checkbox" id="check2" checked={wiFiCheck}  onChange={WiFiBtnEvent}/>
        		<label htmlFor="check2">와이파이</label>
        	</div>
        	<div className="item">
        		<input type="checkbox" id="check3" checked={pickUpCheck}  onChange={PickUpBtnEvent}/>
        		<label htmlFor="check3">픽업가능</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check4" checked={freeParkingCheck}  onChange={freeParkingBtnEvent}/>
        		<label htmlFor="check4">무료주차</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check5" checked={bbQCheck}  onChange={bbqBtnEvent}/>
        		<label htmlFor="check5">BBQ</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check6" checked={parkingCheck}  onChange={parkingBtnEvent}/>
        		<label htmlFor="check6">주차장</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check7" checked={tvCheck}  onChange={tvBtnEvent}/>
        		<label htmlFor="check7">TV</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check8" checked={airCheck}  onChange={airBtnEvent}/>
        		<label htmlFor="check8">에어컨</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check9" checked={showerCheck}  onChange={showerBtnEvent}/>
        		<label htmlFor="check9">객실샤워실</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check10" checked={smokingCheck}  onChange={smokingBtnEvent}/>
        		<label htmlFor="check10">금연</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check11" checked={dogCheck}  onChange={dogBtnEvent}/>
        		<label htmlFor="check11">반려견동반</label>
					</div>
					<div className="item">
        		<input type="checkbox" id="check12" checked={cookingCheck}  onChange={cookingBtnEvent}/>
        		<label htmlFor="check12">객실내취사</label>
					</div>
			</ServiceInner>
		</ServiceBx>
	)
};

const ServiceBx = styled.div`
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
const ServiceInner = styled.div`
	height: ${props => props.height};
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	.item {
    flex: 1 1 30%;
		text-align: center;
		input[type=checkbox] + label {
			width: 84px;
			height: 38px;
			line-height: 38px;
			text-align: center;
			border-radius: 0.4em;
			display: inline-block;
			cursor: pointer;
			color: #fff;
			background-color: #C4C4C4;
		}
		input[type=checkbox]:checked + label {
			background: rgb(255,56,92);
			background: linear-gradient(90deg, rgba(255,56,92,0.7) 0%, rgba(255,56,92,1) 100%);
		}
		input[type=checkbox]{
			display: none;
		}
	}
`

export default Service;