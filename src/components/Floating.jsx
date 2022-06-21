import React from "react";
import styled from "styled-components";
import { M_PointBtn } from "../elem/Button";
import {comma} from '../shared/common';

const Floating = ({charge, Dday}) => {
	return(
		<FloatingBx>
			<div>
				<div>
					<span className="txt_m"> {comma(charge)}원</span> <span className="txt_s">/ 박</span>
					<div>{Dday}</div>
				</div>
				<M_PointBtn scolor="#471868" ecolor="#38157D" background="#C4C4C4" color="#fff" type="submit">등록하기</M_PointBtn>
			</div>
		</FloatingBx>
	)
};

const FloatingBx = styled.div`
	width: 100%;
	padding: 0 20px;
	background-color: #fff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); 
	position: fixed;
	bottom: 0;
	left: 0;
	.txt_m {
		font-weight: 700;
		font-size: 18px;
	}
	>div {
		max-width: 425px;
		margin: 0 auto;
		padding: 10px;
		box-sizing: border-box;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default Floating;