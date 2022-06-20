import React, { useState } from 'react'
import styled from "styled-components";
import Input from '../elem/Input';
import { LargeButton, SmallButton } from '../elem/Button'
import { useDispatch } from 'react-redux';
import { signupDB, idcheckDB } from '../modules/user';
import { useHistory } from 'react-router-dom';

function SignUp() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [dropdown, setDropdown] = useState(false);
    const [genderData, setGenderData] = useState("")
    const [arrow, setArrow] = useState(false)

    // 회원가입 정보 저장
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("")
    const [birth, setBirth] = useState("")

    // 에러메세지 상태 저장
    const [idMessage, setIdMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("")
    const [pw2Message, setPw2Message] = useState("")
    const [birthMessage, setBirthMessage] = useState("")

    // 중복 체크
    const [idCurrent, setIdCurrent] = useState("");
    const [pwCurrent, setPwCurrent] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState()
    const [isPw, setIsPw] = useState()
    const [isPw2, setIsPw2] = useState()
    const [isbirth, setIsBirth] = useState()

    const handleSelect = (e) => {
        setGenderData(e.target.textContent)
        setDropdown(false)
    }

    const handleArrow = () => {
        setDropdown(!dropdown)
        setArrow(true)
    }

    // 회원가입 유효성 검사
    const idCheck = (e) => {
        setEmail(e.target.value);
        const regId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const idCurrent = e.target.value;
        setIdCurrent(idCurrent);

        if (!regId.test(idCurrent)) {
            setIdMessage("이메일 형식에 맞게 입력해주세요")
            setIsId(false)
        } else {
            setIdMessage("올바른 이메일 형식 입니다")
            setIsId(true)
        }
    }

    // 영문 숫자 포함해서 6~20 이내로
    const pwCheck = (e) => {
        setPassword(e.target.value)
        const regPw = /^.{6,20}$/
        const pwCurrent = e.target.value;
        setPwCurrent(pwCurrent)

        if (!regPw.test(pwCurrent)) {
            setPwMessage("6~20자로 입력해주세요")
            setIsPw(false)
        } else {
            setPwMessage("올바른 비밀번호 입니다")
            setIsPw(true)
        }
    }

    const isSamePw = (e) => {
        setPasswordCheck(e.target.value)

        if (password === e.target.value) {
            setPw2Message("비밀번호가 일치합니다")
            setIsPw2(true)
        } else {
            setPw2Message("비밀번호가 일치하지 않습니다")
            setIsPw2(false)
        }
    }

    const userNameCheck = (e) => {
        setName(e.target.value)
    }

    const birthCheck = (e) => {
        setBirth(e.target.value)
        const regBd = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/
        const birtCurrent = e.target.value
        if (!regBd.test(birtCurrent)) {
            setBirthMessage("생년월일 형식이 옳지 않습니다")
            setIsBirth(false)
        } else {
            setBirthMessage("올바른 형식입니다")
            setIsBirth(true)
        }
    }

    //회원가입
    const handleSignUp = () => {
        if (email === "" || password === "" || passwordCheck === "" || name === "" || birth === "") {
            return window.alert("필수 입력사항들은 모두 입력해주세요")
        }
        dispatch(signupDB(email, password, passwordCheck, name, birth, genderData))
        console.log(email, password, passwordCheck, name, birth, genderData)
    }

    // 중복체크
    const idDupCheck = () => {
        let reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
        if (!reg.test(email)) {
            setIdMessage("이메일 형식에 맞게 입력해주세요")
            setIsId(false)
        }
        dispatch(idcheckDB(email))
    }


    return (
        <AccountSection>
            <FormSection>
                <h1>Sign Up</h1>
                <label htmlFor="id" >
                    <p className="required">이메일(ID)</p>
                    <Input width="343px" height="52px" id="id" theme={{ borderColor: "#C4C4C4" }} type="email" required children="아이디(이메일)" onChange={idCheck} />
                    <div style={{ position: "relative", top: "-38px", right: "60px", width: "343px", textAlign: "end" }}>
                        <SmallButton style={{ background: "black", color: "white", position: "absolute" }} onClick={idDupCheck}>중복확인</SmallButton>
                    </div>
                </label>
                {email.length > 0 && (
                    <>
                        <Message className={`${isId ? "success" : "error"}`}>
                            {idMessage}
                        </Message>
                    </>
                )}
                <label htmlFor="pw">
                    <p className="required">비밀번호</p>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="pw" required type="password" children="비밀번호 입력" onChange={pwCheck} />
                </label>
                {password.length > 0 && (
                    <>
                        <Message className={`${isPw ? "success" : "error"}`}>
                            {pwMessage}
                        </Message>
                    </>
                )}
                <div style={{ marginTop: "10px" }}>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="pw2" type="password" required children="비밀번호 확인" onChange={isSamePw} />
                </div>
                {passwordCheck.length > 0 && (
                    <>
                        <Message className={`${isPw2 ? "success" : "error"}`}>
                            {pw2Message}
                        </Message>
                    </>
                )}
                {/* <label htmlFor="pw2">
                    <p>비밀번호 확인</p>
                </label> */}
                <label htmlFor="nic">
                    <p className="required">이름</p>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="nic" required children="이름을 입력해주세요." onChange={userNameCheck} />
                </label>
                <label htmlFor="birth">
                    <p className="required">생년월일</p>
                    <Input width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="birth" required children="생년월일 ex) 19780401" onChange={birthCheck} />
                </label>
                {birth.length > 0 && (
                    <>
                        <Message className={`${isbirth ? "success" : "error"}`}>
                            {birthMessage}
                        </Message>
                    </>
                )}
                <label htmlFor="gender">
                    <p>성별</p>
                    <Input defaultValue={genderData} width="343px" height="52px" theme={{ borderColor: "#C4C4C4" }} id="gender" className="dropdown" children="성별" />
                </label>
                <div className="icon-box" style={{ position: "relative" }}>
                    <i className={`ic-arrow-top ${!dropdown ? "on" : "off"}`} style={{ position: "absolute", bottom: "30px", left: " 140px", cursor: "pointer" }} onClick={handleArrow}>
                    </i>
                </div>
                {dropdown === true ? <ul className="dropdown-items">
                    <li className="dropdown-item" onClick={handleSelect}>
                        <button className="dropdown-option" >male</button>
                    </li>
                    <li className="dropdown-item" onClick={handleSelect}>
                        <button className="dropdown-option" >female</button>
                    </li>
                </ul> : null}
                <LargeButton onClick={handleSignUp}>Sign Up</LargeButton>
                <LoginZoneText>계정이 있으신가요?</LoginZoneText>
                <LargeButton onClick={() => history.replace("/login")}>Log In</LargeButton>
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
  /* label:nth-child(8) {
    margin-bottom: 15px;
  } */
  label>p{
      margin:5px 0;
      text-align: left;
      font-weight: bold;
  }
  #id {
    position:relative;
  }
  .dropdown {
    margin-bottom: 15px;
  }
  .required:after {
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
      i.off{
            transform:rotate(180deg)
        }
`

const Message = styled.p`
  font-size: 13px;
  align-self: flex-start;
  padding: 2px 42px;
  color: ${(props) => (props.className === "success" ? "green" : "red")}
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

const AccountSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SignUp
