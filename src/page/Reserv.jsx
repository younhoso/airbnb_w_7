import React from 'react'
import styled from "styled-components";
import { LargeButton } from '../elem/Button'


function Reserv() {
    return (
        <Section>
            <ReservSection>
                <h1>예약하기</h1>
                <div className="box-container">
                    <CheckBox>
                        <div className="check-in">
                            <p>체크인</p>
                            <p>2022.7.18</p>
                        </div>
                        <div className="check-out">
                            <p>체크아웃</p>
                            <p>2022.7.23</p>
                        </div>
                    </CheckBox>
                    <GuestBox>
                        <p>인원</p>
                        <p>게스트 1명</p>
                    </GuestBox>
                </div>
                <ChargeBox>
                    <p>총 합계</p>
                    <p>2,200,000원</p>
                </ChargeBox>
                <div className="btn-box">
                    <LargeButton style={{ width: "345px", height: "42px", background: "#C32C65", fontSize: "12px" }}>예약하기</LargeButton>
                </div>
            </ReservSection>
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
const ReservSection = styled.section`
     max-width: 425px;
     width: 375px;
     height: 100vh;
     background-color: white;
     padding: 0 16px 16px;
     box-sizing: border-box;
     h1 {
        font-size:24px;
        font-weight:bold;
        margin-top: 80px;;
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
     .box-container {
        margin-bottom: 500px;
     }
`

const CheckBox = styled.div`
    width: 100%;
    height: 40px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border: 1px solid #c4c4c4;
    display:flex;
    .check-in {
        width: 50%;
        border-right: 1px solid #c4c4c4;
        box-sizing: border-box;
        padding-left: 6px;
        padding-top: 3px;
        p:first-child {
            font-weight: bold;
            font-size: 10px;
        }
        p:last-child {
            font-weight: bold;
            font-size: 12px;
        }
    }
    .check-out {
        width: 50%;
        box-sizing: border-box;
        padding-left: 6px;
        padding-top: 3px;
        p:first-child {
            font-weight: bold;
            font-size: 10px;
        }
        p:last-child {
            font-weight: bold;
            font-size: 12px;
        }
    }
`

const GuestBox = styled.div`
    width: 100%;
    height: 40px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid #c4c4c4;
    border-top: none;
    padding-left: 6px;
    padding-top: 3px;
    p:first-child {
        font-weight: bold;
        font-size: 10px;
    }
    p:last-child {
            font-weight: bold;
            font-size: 12px;
        }
`
const ChargeBox = styled.div`
    width: 345px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    p {
        font-size: 16px;
        font-weight: bold;
    }
`

export default Reserv