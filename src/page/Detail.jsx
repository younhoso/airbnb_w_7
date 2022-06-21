import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SmallButton } from "../elem/Button";
import { lodgmentGetId } from "../modules/lodgment";
import { commentsGet } from "../modules/comment";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const Detail = ({ history, match }) => {
	const dispatch = useDispatch();
	const lodgment = useSelector((store) => store.lodgment.lodgment)
	const comment = useSelector((store) => store.comment.comments.review)
	// console.log(lodgment)
	// console.log(comment)
	const {params: { id }} = match;
	const [values, setValues] = useState({
		content: '',
    imgFile: null,
		rating: 0
  });
	
	const handleChange = (name, value) => {
    setValues(function(prevValues){
			return {
      	...prevValues,
      	[name]: value,
			}
    });
  };
	
	useEffect(() => {
		dispatch(lodgmentGetId(id));
		dispatch(commentsGet(id));
	}, [id]);

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
								<div className="btnItem"><SmallButton bordercolor={"#C4C4C4"} color="#000">수정</SmallButton></div>
								<div className="btnItem"><SmallButton background={"#C4C4C4"} color="#fff">삭제</SmallButton></div>
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
						<div className="detail_doc"><p>{lodgment.desc1_hanmadi}</p></div>
						<div className="detail_btn_inner">
							<div>like</div>
							<div>장소 공유</div>
						</div>
						<div className="detail_comment_inner">
							<div className="comment_header">
								<h3 style={{fontWeight: "600", fontSize: "18px"}}>댓글</h3>
								<SmallButton background={"#F4F4F4"} color={"#000"} className="star-write"><i className="ic-star-write"></i>댓글쓰기</SmallButton>
							</div>
							<div className="comment_write">
								<CommentWrite name="rating" values={values.rating} onChange={handleChange}/>
							</div>
							<ul>
								{ comment && (
									comment.map((el, idx) => {
										return(
											<CommentList key={idx} item={el}></CommentList>
										)
									})
									)
								}
							</ul>
						</div>
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

	.detail_doc {
		padding: 10px 20px 0 20px;
	}
	.detail_btn_inner {
		padding: 10px 20px 0 20px;
	}
	.detail_comment_inner {
		padding: 10px 20px 0 20px;

		.comment_header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 0 10px 0;
			.star-write {
				font-size: 11px;
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
	}
`

export default Detail;