import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Star from '../elem/Star';
import { commentsGet } from '../modules/comment';

const CommentList = () => {
	const dispatch = useDispatch();
	const {reviews} = useSelector((state) => state.comment.comments)
	console.log(reviews)
		
	return(
		<CommentListBx> 
			{reviews && (
				<ul className="img_inner">
					{reviews.map((el, idx) => {
						return(
							<li key={idx} className="item">
								<div>test@example.com</div>
								<Star value={el.stars}></Star>
								<div>2022/04/11</div>
								{ el.photos.map((el, idx) => {
									return(
										<div key={idx} className="img_item">
											<img src={el} />
										</div>
									)
								})
								}
								<div>{el.content}</div>
							</li>
						)
					})}
				</ul>
			)}
		</CommentListBx>
	)
}

const CommentListBx = styled.div`
	max-width: 425px;
	margin: 0 auto;
	.img_inner {
		white-space: nowrap;
		overflow-x: auto;
		li {
				width: 100%;
				.img_item {
					width: 90px;
					overflow-x: auto;
					white-space: nowrap;
					display: inline-block;
				}
			}
	}
	img {
		width: 100%;
	}
`;

export default CommentList;