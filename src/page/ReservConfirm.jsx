import React from 'react'
import styled from "styled-components";
import { LargeButton } from '../elem/Button'
import Nav from "../components/Nav";

function ReservConfirm() {
    return (
        <Section>
            <ReservConfirmSection>
                <Nav />
                <h1>예약확인</h1>
                <div className='lodge-address'>
                    <p>양평 스마일카라반펜션</p>
                    <p>경기 양평군 단월면 석산리 147-1</p>
                </div>
                <InfoBox>
                    <p className="amount">결제예정금액</p>
                    <div className="icon-box" style={{ position: "relative" }}>
                        <i className="ic-arrow-top" style={{ position: "absolute", bottom: "13px", left: "300px", cursor: "pointer" }}>
                        </i>
                    </div>
                    <p className="check-in">
                        <span>
                            체크인:
                        </span>
                        2022. 7. 18
                    </p>
                    <p className="check-out">
                        <span>
                            체크아웃:
                        </span>
                        2022. 7. 18
                    </p>
                    <Total>
                        <p>합계</p>
                        <p>2,200,000</p>
                    </Total>
                </InfoBox>
                <div className="btn-box">
                    <LargeButton style={{ width: "345px", height: "42px", background: "#C4C4C4", fontSize: "14px" }}>예약취소</LargeButton>
                </div>
            </ReservConfirmSection>
        </Section>
    )
}

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
`

const InfoBox = styled.div`
	height: 130px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); 
	-webkit-transition: max-height 0.2s ease-in-out;
	transition: max-height 0.2s ease-in-out;
	overflow: hidden;
	padding: 8px;
	box-sizing: border-box;
	border-radius: 0.8em;
    .amount {
        font-weight: bold;
        margin-bottom: 10px;
        font-size: 16px;
    } 
    .check-in {
        margin-bottom: 8px;
        span {
            font-weight: bold;
            font-size: 16px;
        }
    }
    .check-out {
        margin-bottom: 10px;
        span {
            font-weight: bold;
            font-size: 16px;
        }
    }
`

const Total = styled.div`
    display:flex;
    justify-content: space-between;
    p:first-child {
        font-weight: bold;
        font-size: 16px;
    }
    p:last-child {
        color: #FF5170;
        font-weight: bold;
    }
`

const ReservConfirmSection = styled.section`
     max-width: 425px;
     width: 375px;
     height: 100vh;
     background-color: white;
     padding: 0 16px 16px;
     box-sizing: border-box;
     .lodge-address {
        margin-bottom: 18px;
        p:first-child{
            font-weight: bold;
            margin-bottom: 10px;
        }
        p:last-child{
            font-weight: bold;
            color: #c4c4c4;
            font-size: 13px;
        }
     }
     h1 {
        font-size:24px;
        font-weight:bold;
        margin-top: 110px;;
        margin-bottom: 32px;
     }
     .btn-box {
        position: fixed;
        width: 100%;
        border-top: 1px solid #c4c4c4;
        padding: 16px 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        background-color: white;
     }
`

export default ReservConfirm