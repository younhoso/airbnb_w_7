import React from 'react'
import styled from "styled-components";
import Input from '../elem/Input';
import { LargeButton } from '../elem/Button'

function SignUp() {
    return (
        <AccountSection>
            <FormSection>
                <h1>Sign Up</h1>
                <label htmlFor="id">
                    <p>이메일(ID)</p>
                    <Input id="id" type="email" required placeholder="아이디(이메일)" />
                </label>
                <label htmlFor="pw">
                    <p>비밀번호</p>
                    <Input id="pw" required type="password" placeholder="비밀번호 입력" />
                </label>
                <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                    <Input id="pw2" type="password" required placeholder="비밀번호 확인" />
                </label>
                <label htmlFor="nic">
                    <p>이름</p>
                    <Input id="nic" required placeholder="이름을 입력해주세요." />
                </label>
                <label htmlFor="nic">
                    <p>생년월일</p>
                    <Input id="nic" required placeholder="생년월일 ex) 19780401" />
                </label>
                <label htmlFor="nic">
                    <p>성별</p>
                    <Input id="nic" required placeholder="성별" />
                </label>
                <LargeButton>Sign Up</LargeButton>
                <LoginZoneText>계정이 있으신가요?</LoginZoneText>
                <LargeButton>로그인</LargeButton>
            </FormSection>
        </AccountSection>
    )
}

const FormSection = styled.form`
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  max-width: 425px;
  min-width: 375px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  h1 {
      text-align: left;
      margin-bottom: 40px;
  }
  label {
      width: 80%;
      display:flex;
      flex-direction:column;
      align-items: center;
  }
  label:nth-child(7) {
    margin-bottom: 15px;
  }
  label>p{
      margin:5px 0;
      text-align: left;
  }
`

const LoginZoneText = styled.p`
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

const UserBtn = styled.button`
  width: 40%;
  background-color:#000000;
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin: 10px 0;
  transition: all 0.5s;
  &:hover {
    background-color: #666666;
  }
`

const AccountSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SignUp
