<<<<<<< Updated upstream
import React from "react";
import styled from "styled-components";

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
					<AddBtn>+</AddBtn>
				</div>
			</Main>
		</Section>
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lodgmentsGet } from "../modules/lodgment";

const Home = () => {
	const dispatch = useDispatch();
	const lodgment = useSelector((store) => store.lodgment.list)



	return(
		<div>
			메인 페이지
		</div>
>>>>>>> Stashed changes
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  font-size: 40px;
  font-weight: 500;
  color: #212121;
  display: flex;
  justify-content: center;
  line-height: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`

export default Home;