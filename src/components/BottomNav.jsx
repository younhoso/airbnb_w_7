import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import Home from "../assets/images/home.png"
import Search from "../assets/images/search.png"
import User from "../assets/images/user.png"

function BottomNav() {
    return (
        <div>
            <BottomNavSection>
                <div className='icon-box'>
                    <Link to="/">
                        <Img src={Home} alt="" />
                    </Link>
                    <button>
                        <Img src={Search} alt="" />
                    </button>
                    <Link to="/login">
                        <Img src={User} alt="" />
                    </Link>
                </div>
            </BottomNavSection>
        </div>
    )
}

const BottomNavSection = styled.nav`
    position: fixed;
	bottom:0;
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	/* box-shadow: 0px -2px 3px -2px rgba(0,0,0,.2); */
	box-shadow: rgb(0 0 0 / 15%) 0px -2px 3px -2px;
	background-color: white;
    .icon-box {
        width: 375px;
        display: flex;
	    justify-content: space-evenly;
        margin: auto;
    }
`
const Img = styled.img`
	width: 30px;
	height: 30px;
`

export default BottomNav