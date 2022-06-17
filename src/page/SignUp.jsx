import React from 'react'
import styled from "styled-components";
import Input from '../elem/Input';

function SignUp() {
    return (
        <AccountSection>
            <FormSection>
                <h1>Sign Up</h1>
                <label htmlFor="id">
                    <p>이메일(ID)</p>
                    <Input id="id" type="email" required placeholder="이메일 형식에 맞게 작성해 주세요(@)" />
                </label>
                <label htmlFor="pw">
                    <p>비밀번호</p>
                    <Input id="pw" required type="password" placeholder="비밀번호 영문/숫자 포함(8_20자) 작성해 주세요" />
                </label>
                <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                    <Input id="pw2" type="password" required placeholder="비밀번호 한 번 더 입력해 주세요" />
                </label>
                <label htmlFor="nic">
                    <p>이름</p>
                    <Input id="nic" required placeholder="닉네임 영문/숫자 -,_ 포함 작성해 주세요" />
                </label>
                <label htmlFor="nic">
                    <p>생년월일</p>
                    <Input id="nic" required placeholder="닉네임 영문/숫자 -,_ 포함 작성해 주세요" />
                </label>
                <label htmlFor="nic">
                    <p>성별</p>
                    <Input id="nic" required placeholder="닉네임 영문/숫자 -,_ 포함 작성해 주세요" />
                </label>
                <UserBtn type="submit">회원가입</UserBtn>
                <LoginZoneText>계정이 있으신가요?</LoginZoneText>
                <UserBtn>로그인</UserBtn>
            </FormSection>
        </AccountSection>
    )
}

const FormSection = styled.form`
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  padding: 15px 0;
  h1 {
      text-align: left;
      margin-bottom: 40px;
  }
  label {
      width: 80%;
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