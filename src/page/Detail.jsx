import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";
import { LargeButton, SmallButton } from "../elem/Button";
import { lodgmentGetId } from "../modules/lodgment";
import Star from "../elem/Star";
import Text from "../elem/Text";

const RATINGS = [1, 2, 3, 4, 5];

const Detail = ({ history, match }) => {
	const dispatch = useDispatch();
	const lodgment = useSelector((store) => store.lodgment.lodgment)
	const {params: { id }} = match;
	const [values, setValues] = useState({
		content: '',
    imgFile: null,
		rating: 0
  });
	
	const handleChange = (name, value) => {
    setValues(function(prevValues){
			console.log({...prevValues})
			console.log(1)
			return {
      	...prevValues,
      	[name]: value,
			}
    });
  };
	
	const handleSelect = (nextValue) => handleChange("rating", nextValue);

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	useEffect(() => {
		dispatch(lodgmentGetId(id));
	}, [id]);

	return(
		<DetailBx>
			{!lodgment
				? null
				: (
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
								<CommentForm onSubmit={handleSubmit}>
									<div className="satisfaction_inner">
										<div className="satisfaction_close">
											<p>만족도를 알려주세요.</p>
											<button className="close_btn"><i className="ic-close"></i></button>
										</div>
										<div className="satisfaction_info">
											<p>만족도</p>
											<div className="star_inner">
												{
													RATINGS.map((item, idx) => {
														return( 
															<Star key={idx} 
															selected={values.rating >= item}
															rating={values.rating}
															item={item}
															onSelect={handleSelect}/>
														)
													})
												}
											</div>
										</div>
										<ImageRegist name="imgFile" imgFileValue={values.imgFile} onChange={handleChange}></ImageRegist>
										<Text>리뷰를 작성해주세요.(최대 1,000자)</Text>
									</div>
									<LargeButton background="#000" type="submit">저장하기</LargeButton>
								</CommentForm>
							</div>
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
	}
`

const CommentForm = styled.form`
	
`

export default Detail;