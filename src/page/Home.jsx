import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";
import PostCard from "../components/PostCard";

const Home = () => {
	return (
		<Section>
			<Main>
				<Nav />
				<PostCard />
				<BottomNav />
				<div className="btn-wrap">
					<Link to="/write"><AddBtn><i className="ic-plus"></i></AddBtn></Link>
				</div>
			</Main>
		</Section>
	)
};

const Section = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items:center;
`
const Main = styled.div`
    width: 375px;
	max-width: 425px;
	/* width: 100%; */
	height: 100vh;
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