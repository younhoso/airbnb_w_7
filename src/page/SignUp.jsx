import React, { useState } from 'react'
import styled from "styled-components";
import Input from '../elem/Input';
import { LargeButton, SmallButton } from '../elem/Button'

function SignUp() {
    const [dropdown, setDropdown] = useState(false);
    const [genderData, setGenderData] = useState("")
    const [arrow, setArrow] = useState(false)

    const handleSelect = (e) => {
        setGenderData(e.target.textContent)
        setDropdown(false)
    }

    const handleArrow = () => {
        setDropdown(!dropdown)
        setArrow(true)
    }

    return (
        <AccountSection>
            <FormSection>
                <h1>Sign Up</h1>
                <label htmlFor="id" >
                    <p>이메일(ID)</p>
                    <Input width="343px" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} type="email" required children="아이디(이메일)" />
                </label>
                <div style={{ position:"relative"}}>
                    <div style={{ position:"absolute", top: "-37px", right: "-160px"}}>
                        <SmallButton>중복확인</SmallButton>
                    </div>
                </div>
                <label htmlFor="pw" style={{ marginBottom: "10px" }}>
                    <p>비밀번호</p>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="pw" required type="password" children="비밀번호 입력" />
                </label>
                <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="pw2" type="password" required children="비밀번호 확인" />
                {/* <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                </label> */}
                <label htmlFor="nic">
                    <p>이름</p>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="nic" required children="이름을 입력해주세요." />
                </label>
                <label htmlFor="nic">
                    <p>생년월일</p>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="nic" required children="생년월일 ex) 19780401" />
                </label>
                <label htmlFor="gender">
                    <p>성별</p>
                    <Input defaultValue={genderData} width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} className="dropdown" id="gender" children="성별" />
                </label>
                <div className="icon-box" style={{ position: "relative" }}>
                    <i className={`ic-arrow-top ${!dropdown ? "on" : "off"}`} style={{ position: "absolute", bottom: "30px", left: " 140px", cursor: "pointer" }} onClick={handleArrow}>
                    </i>
                </div>
                {dropdown === true ? <ul className="dropdown-items">
                    <li className="dropdown-item" onClick={handleSelect}>
                        <button className="dropdown-option" >남자</button>
                    </li>
                    <li className="dropdown-item" onClick={handleSelect}>
                        <button className="dropdown-option" >여자</button>
                    </li>
                </ul> : null}
                <LargeButton>Sign Up</LargeButton>
                <LoginZoneText>계정이 있으신가요?</LoginZoneText>
                <LargeButton>Log In</LargeButton>
            </FormSection>
        </AccountSection >
    )
}

const FormSection = styled.div`
  /* box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%); */
  max-width: 425px;
  min-width: 375px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  h1 {
      align-self: flex-start;
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 36px;
      padding: 0 38px;
  }
  label:nth-child(8) {
    margin-bottom: 15px;
  }
  label>p{
      margin:5px 0;
      text-align: left;
      font-weight: bold;
  }
  label:nth-child(-n+7) p:after {
        display:inline-block;
        content:"";
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: tomato;
        vertical-align: middle;
        margin-left: 5px;
      }
  .dropdown-items {
        margin-top: -10px;
        margin-bottom: 13px;
        width: 343px;
        border-radius: 10px;
        height: 63px;
        box-shadow: 0 2px 5px 1px rgba(64 60 67 / 16%);
        transition: border-color 200ms ease-in, padding 200ms ease-in,max-height 200ms ease-in,box-shadow 200ms ease-in;
        padding-top: 6px;
        box-sizing: border-box;
        .dropdown-item {
            width: 100%;
            height: 25px;
            line-height: 25px;
            text-align: center;
            cursor:pointer;
            &:hover {
                background-color: #c4c4c4;
                transition: all 0.5s;
            }
        }
     }
    /* .dropdown-items.show {
        max-height: 63px;
        padding: 8px;
        box-shadow: 0 2px 5px 1px rgba(64 60 67 / 16%);
        border-color: rgba(224,226,231,0.5);
    } */
      i.off{
            transform:rotate(180deg)
        }
`

const LoginZoneText = styled.p`
   margin: 15px 0;
  &::before {
      display:inline-block;
      content:"";
      width: 100px;
      margin-right: 8px;
      vertical-align: middle;
      height: 1px;
      background-color: lightgrey;   
  }
  &::after {
      display:inline-block;
      content:"";
      width: 100px;
      margin-left: 8px;
      vertical-align: middle;
      height: 1px;
      background-color: lightgrey;
  }
`

// const Input = styled.input`
//   width: 100%;
//   box-sizing: border-box;
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 2px solid  #e6e3e3;
//   border-radius: 6px;
//   box-shadow: inset 0 1px 4px 0 rgb(64 60 67 / 16%);
//   &:focus {
//       outline:none;
//       border-color: #666666;
//   }
// `

const AccountSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SignUp
