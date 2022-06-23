import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import BottomNav from "../components/BottomNav";
import PostCard from "../components/PostCard";

import { apis } from "../shared/api"
import { getpostDB } from "../modules/post";
import { useDispatch, useSelector } from "react-redux";

//icons
import Beach from "../assets/images/Beach.png"
import Surfing from "../assets/images/surfing.png"
import Camp from "../assets/images/campsite.png"
import Log from "../assets/images/log.png"
import Share from "../assets/images/share-house.png"
import { loginCheck } from "../modules/user";

const Home = () => {
	const dispatch = useDispatch()
	const postList = useSelector((state) => state.post.list.accommodations)
	const isLogin = localStorage.getItem("token")
	const islogin = useSelector((state) => state.user.is_login)

	const categories = [
		{ id: "서핑", url: Surfing },
		{ id: "해변근처", url: Beach },
		{ id: "캠핑장", url: Camp },
		{ id: "통나무집", url: Log },
		{ id: "셰어하우스", url: Share },
	]

	useEffect(() => {
		dispatch(getpostDB())
		dispatch(loginCheck());
	}, [dispatch])

	return (
		<Section>
			<NavSection>
				<div className='icon-box'>
					{
						categories.map((c, i) => {
							return (
								<button onClick={() => { dispatch(getpostDB(c.id)) }} key={i}>
									{<Img src={c.url} alt="" />}
									<p>{c.id}</p>
								</button>
							)
						})
					}
				</div>
			</NavSection>
			<Main>
				{postList &&
					postList.map((post, i) => {
						return <PostCard post={post} key={i} />
					})
				}
				{isLogin !== null && <div className="btn-wrap">
					<Link to="/write"><AddBtn><i className="ic-plus"></i></AddBtn></Link>
				</div>}
			</Main>
			<BottomNav />
		</Section>
	)
};

const Section = styled.div`
	width: 100%;
	display: flex;
	min-height: 950px;
	flex-direction: column;
	align-items:center;
	div {
		width: 100%;
	}
`
const Main = styled.div`
    width: 375px;
	max-width: 425px;
	min-height: 950px;
	padding-bottom: 60px;
	background-color: white;
	.btn-wrap {
		position: fixed;
        width: 375px;
        height: 50px;
        bottom: 70px;
		display: flex;
        justify-content: flex-end;
		padding-right: 6px;
	}
`

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
        width: 342px;
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


const AddBtn = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: white;
  font-size: 30px;
  font-weight: 500;
  color: #212121;
  display: flex;
  justify-content: center;
	align-items: center;
  line-height: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`

export default Home;