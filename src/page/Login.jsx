import React, { useState } from "react";
import styled from "styled-components";
import Input from '../elem/Input';
import { LargeButton } from '../elem/Button'
import { useDispatch } from "react-redux";
import { loginDB } from "../modules/user";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    dispatch(loginDB(email, password))
  }

  return (
    <AccountSection>
      <FormSection>
        <h1>Log In</h1>
        <label htmlFor="id" >
          <p>이메일(ID)</p>
          <Input width="343px" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} type="email" required children="test@example.com" onChange={(e) => { setEmail(e.target.value) }} />
        </label>
        <label htmlFor="pw" style={{ marginBottom: "15px" }}>
          <p>비밀번호</p>
          <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="pw" required type="password" children="비밀번호" onChange={(e) => { setPassword(e.target.value) }} />
        </label>
        <div>
          <p>아이디 찾기</p>
          <p>비밀번호 찾기</p>
        </div>
        <LargeButton onClick={handleLogin}>Log In</LargeButton>
        <LoginZoneText>계정이 없으신가요?</LoginZoneText>
        <LargeButton onClick={() => history.push("/signup")}>Sign Up</LargeButton>
      </FormSection>
    </AccountSection >
  )
};

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
  label>p{
      margin:5px 0;
      text-align: left;
      font-weight: bold;
  }
  div {
	display: flex;
  }
  div>p {
	font-size: 12px;
	font-weight: 400px;
	margin-right: 13px;
	margin-top: -6px;
	margin-bottom: 10px;
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

export default Login;