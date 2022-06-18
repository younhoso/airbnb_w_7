import React from "react";
import styled from "styled-components";
import { M_PointBtn } from "../elem/Button";


const Floating = () => {
	return(
		<FloatingBx>
			<div>
				<div>
					<span className="txt_m">30,000,000원</span> <span className="txt_s">/ 박</span>
				</div>
				<div>6월 19일 ~ 24일</div>
			</div>
			<M_PointBtn scolor="#471868" ecolor="#38157D" background="#C4C4C4" type="submit">등록하기</M_PointBtn>
		</FloatingBx>
	)
};

const FloatingBx = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #fff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3); 
	position: fixed;
	bottom: 0;
	left: 0;
	.txt_m {
		font-weight: 700;
		font-size: 18px;
	}
`;

export default Floating;