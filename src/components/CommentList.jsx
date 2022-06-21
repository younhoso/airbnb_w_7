import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Rating from '../elem/Rating';

const CommentList = ({item}) => {
	console.log(item)
	return(
		<CommentListBx> 
				<div className="img_wrap">
					<div className="item">
						<div>test@example.com</div>
						<div>2022/04/11</div>
						<div className='img_inner'>
							{item.photos.map((el, idx) => {
								return(
									<div key={idx} className="img_item">
										<img src={el} alt="댓글 섬네일"/>
									</div>
								)
							})}
						</div>
						<Rating value={item.stars}/>
						<p>{item.content}</p>
						<div></div>
					</div>
				</div>
		</CommentListBx>
	)
}

const CommentListBx = styled.li`
	max-width: 425px;
	margin: 0 auto;
	.img_wrap {
		white-space: nowrap;
		overflow-x: auto;
		.img_inner {
			overflow-x: auto;
				.img_item {
					width: 90px;
					white-space: nowrap;
					display: inline-block;
					margin-left: 10px;
				}
				.img_item:nth-child(1) {
					margin-left: 0;
				}
			}
	}
	img {
		width: 100%;
	}
`;

export default CommentList;