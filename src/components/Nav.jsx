import React from 'react'
import styled from "styled-components";

function Nav() {
    return (
        <div>
            <NavSection>
                <div className='icon-box'>
                    <button>
                        <Img src="/images/surfing.png" alt="" />
                        <p>서핑</p>
                    </button>
                    <button>
                        <Img src="/images/Beach.png" alt="" />
                        <p>해변근처</p>
                    </button>
                    <button>
                        <Img src="/images/campsite.png" alt="" />
                        <p>캠핑장</p>
                    </button>
                    <button>
                        <Img src="/images/log.png" alt="" />
                        <p>통나무집</p>
                    </button>
                    <button>
                        <Img src="/images/share-house.png" alt="" />
                        <p>셰어하우스</p>
                    </button>
                </div>
            </NavSection>
        </div>
    )
}

const NavSection = styled.nav`
    position: fixed;
	top:0;
	width: 100%;
	padding: 10px;
	padding-left: 20px;
	box-sizing: border-box;
	background-color: white;
	box-shadow: rgb(0 0 0 / 15%) 0 2px 3px -2px;
	z-index: 2;
	/* border: 1px solid red; */
	/* box-shadow: 0 2px 3px -2px rgba(0,0,0,.2); */
    .icon-box {
        width: 375px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        button {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
                font-size: 12px;
                font-weight: bold;
                margin-top: 10px;
            }
        }
    }
`


const Img = styled.img`
	width: 30px;
	height: 30px;
`

export default Nav