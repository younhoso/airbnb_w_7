import React from 'react';
import styled from "styled-components";
import Rating from '../elem/Rating';

const CommentList = ({item}) => {
	return(
		<CommentListBx> 
				<div className="img_wrap">
					<div className="item">
						<div>{item.userId}</div>
						<Rating value={item.stars}/>
						<span className='comment_day_create'>{item.createdAt}</span>
						<div className='img_inner'>
							{item.photos && (
								item.photos.map((el, idx) => {
									return(
										<div key={idx} className="img_item">
											<img src={el} alt="댓글 섬네일"/>
										</div>
									)
								})
							)}
						</div>
						<p className='txt'>{item.content}</p>
						<div></div>
					</div>
				</div>
		</CommentListBx>
	)
}

const CommentListBx = styled.li`
	max-width: 425px;
	margin: 0 auto;
	padding-bottom: 20px;
	.img_wrap {
		white-space: nowrap;
		overflow-x: auto;
		.comment_day_create {
			margin-left: 10px;
		}
		.img_inner {
			margin-top: 10px;
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
		.txt {
			margin-top: 4px;
		}
	}
	img {
		width: 100%;
	}
`;

export default CommentList;