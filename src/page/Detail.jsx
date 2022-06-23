import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SmallButton } from "../elem/Button";
import { lodgmentDel, lodgmentGetId } from "../modules/lodgment";
import { __commentsGet } from "../modules/comment";
import { userConfirm } from "../modules/user";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";
import Floating from "../components/Floating";

const Detail = ({ history, match }) => {
	const dispatch = useDispatch();
	const {userId} = useSelector((store) => store.user)
	const user = useSelector((store) => store.lodgment.lodgment)
	const lodgment = useSelector((store) => store.lodgment.lodgment)
	const comment = useSelector((store) => store.comment.comments)
	const {params: { id }} = match;
	console.log(lodgment)

	// 숙소 삭제 함수
	const handleDelete = () => {
		dispatch(lodgmentDel(id)) 
	};
	
	useEffect(() => {
		dispatch(lodgmentGetId(id));
		dispatch(__commentsGet(id));
		dispatch(userConfirm());
	}, [dispatch]);

	return(
		<DetailBx>
			{lodgment && (
					<>
						<div className="detail_tit">
							<div>
								<h1>{lodgment.accName}</h1>
								<p>{lodgment.address}</p>
							</div>
							<div className="btnInner">
								{ user?.userId === userId?.userId && (
									<>
										<Link
											to={{
												pathname: `/write/${id}`,
												state: lodgment,
											}}>
											<div className="btnItem"><SmallButton bordercolor={"#C4C4C4"} color="#000">수정</SmallButton></div>
										</Link>
										<div className="btnItem" onClick={handleDelete}><SmallButton background={"#C4C4C4"} color="#fff">삭제</SmallButton></div>
									</>
								)}
							</div>
						</div>
						<div className="detail_img">
							<ul className="img_inner">
								{lodgment.photos.map((el, idx) => {
									return(
										<li key={idx}><img src={el}/></li>
									)
								})}
							</ul>
						</div>
						<div className="desc_inner">
							<div className="detail_dosc1"><div>사장님 한마디:</div>{lodgment.desc1_hanmadi}</div>
							<div className="detail_dosc2"><div>주변정보:</div>{lodgment.desc2_surroundings}</div>
							<div className="detail_dosc3"><div>공지사항:</div>{lodgment.desc3_notice}</div>
							<div className="detail_dosc4"><div>기본정보:</div>{lodgment.desc4_basics}</div>
						</div>
						<div className="detail_btn_inner">
							<div className="like_inner"><i className="ic-like-off"></i></div>
							<div className="share_inner"><i className="ic-share"></i> 장소 공유</div>
						</div>
						<div className="detail_comment_inner">
							<div className="comment_header">
								<h3 style={{fontWeight: "600", fontSize: "18px"}}>댓글</h3>
								<SmallButton background={"#F4F4F4"} color={"#000"} className="star-write"><i className="ic-star-write"></i>댓글쓰기</SmallButton>
							</div>
							<div className="comment_write">
								<CommentWrite/>
							</div>
							<ul className="comment_inner">
								{ comment && (
									comment.map((el, idx) => {
										return(
											<CommentList key={idx} item={el}></CommentList>
										)}))
								}
							</ul>
						</div>
						<Floating openAt={lodgment.openAt} closeAt={lodgment.closeAt} charge={lodgment.charge} txt={"예약하기"}></Floating>
					</>
				)
			}
		</DetailBx>
	)
};

const DetailBx = styled.div`
	max-width: 425px;
	margin: 0 auto;
	background-color: #fff;
	padding-bottom: 40px;
	.detail_tit {
		display: flex;
		justify-content: space-between;
		padding: 20px 20px 0 20px;
		h1 {
			width: 200px;
			font-size: 1.2rem;
			font-weight: 600;
			display: inline-block;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
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
		padding: 20px 0 0 20px;
		.img_inner {
			white-space: nowrap;
			overflow-x: auto;
			li:first-child {
				margin: 0;
			}
			li {
				width: 300px;
				margin-left: 10px;
				display: inline-block;
				border-radius: 0.6em;
				overflow: hidden;
			}
		}
		img {width: 100%;}
	}

	.desc_inner {
		padding: 10px 20px 0 20px;
		.detail_dosc1 {
			>div {
				font-weight: 600;
			}
		}
		.detail_dosc2 {
			>div {
				font-weight: 600;
			}
		}
		.detail_dosc3 {
			>div {
				font-weight: 600;
			}
		}
		.detail_dosc4 {
			>div {
				font-weight: 600;
			}
		}
	}
	.detail_btn_inner {
		display: flex;
		padding: 10px 20px 0 20px;
		justify-content: space-between;
		.like_inner {
			width: 38px;
			height: 38px;
			line-height: 38px;
			text-align: center;
			border-radius: 50%;
			background-color: #F4F4F4;
		}
		.share_inner {
			width: 100px;
    	height: 38px;
			line-height: 38px;
			text-align: center;
			border-radius: 6px;
			background-color: #F4F4F4;
		}
	}
	.detail_comment_inner {
		padding: 10px 20px 0 20px;

		.comment_header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 0 10px 0;
			.star-write {
				width: 100px;
				height: 38px;
				font-size: 14px;
			}
		}
		.comment_write {
			border-top: 1px solid #C4C4C4;
			padding: 10px 0 0 0;
		}
		.satisfaction_close {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.close_btn {
				font-size: 20px;
			}
		}
		.satisfaction_info {
			display: flex;
			align-items: center;
			p {
				margin-right: 10px;
			}
			.star_inner {
				margin: 10px 0;
			}
			.Rating-star {
				font-size: 22px;
			}
		}

		.text_inner {
			margin: 10px 0;
		}

		.comment_inner {
			margin: 33px 0;
		}
	}
`

export default Detail;