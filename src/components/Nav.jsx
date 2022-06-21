import React, { useState } from 'react'

import styled from "styled-components";
import Beach from "../assets/images/Beach.png"
import Surfing from "../assets/images/surfing.png"
import Camp from "../assets/images/campsite.png"
import Log from "../assets/images/log.png"
import Share from "../assets/images/share-house.png"

function Nav() {

    const [data, setData] = useState([
        { id: "서핑", url: Surfing },
        { id: "해변근처", url: Beach },
        { id: "캠핑장", url: Camp },
        { id: "통나무집", url: Log },
        { id: "셰어하우스", url: Share },
    ])

    return (
        <div>
            <NavSection>
                <div className='icon-box'>
                    {
                        data.map((c, i) => {
                            return (
                                <button >
                                    {<Img src={c.url} alt="" />}
                                    <p>{c.id}</p>
                                </button>
                            )
                        })
                    }
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