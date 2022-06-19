import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SmallButton } from "../elem/Button";
import { lodgmentGetId } from "../modules/lodgment";

const Detail = ({ history, match }) => {
	const dispatch = useDispatch();
	const lodgment = useSelector((store) => store.lodgment.lodgment)
	console.log(lodgment.accName)
	const {params: { id },} = match;

	useEffect(() => {
		dispatch(lodgmentGetId(id));
	}, []);

	return(
		<DetailBx>
			<div className="detail_tit">
				<div>
					<h1>{}</h1>
					<p>{}</p>
				</div>
				<div className="btnInner">
					<div className="btnItem"><SmallButton bordercolor={"#C4C4C4"} color="#000">수정</SmallButton></div>
					<div className="btnItem"><SmallButton background={"#C4C4C4"} color="#fff">삭제</SmallButton></div>
				</div>
			</div>
			<div className="detail_img">

			</div>
			<div className="detail_doc"></div>
			<div className="detail_btn_inner"></div>
			<div className="detail_comment_inner">
				<div className="comment_write">
				</div>
				<div className="comment_list">
				</div>
			</div>
		</DetailBx>
	)
};

const DetailBx = styled.div`
	max-width: 425px;
	margin: 0 auto;
	.detail_tit {
		display: flex;
		justify-content: space-between;
		padding: 20px 20px 0 20px;
		h1 {
			font-size: 1.2rem;
			font-weight: 600;
		}
		p {
			font-size: 12px;
			font-weight: 500;
			color: #A3A3A3;
		}
		.btnInner {
			display: flex;
			.btnItem:first-child{
				margin: 0;
			}
			.btnItem {
				margin-left: 10px;
			}
		}
	}

	.detail_img {
		
	}
`

export default Detail;