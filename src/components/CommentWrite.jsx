import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import ImageRegist from "../elem/ImageRegist";
import Star from "../elem/Star";
import { LargeButton } from "../elem/Button";
import Text from "../elem/Text";
import { __commentAdd, __commentsGet } from '../modules/comment';

const RATINGS = [1, 2, 3, 4, 5];
const CommentWrite = () => {
	const dispatch = useDispatch();
	const id = useParams().id;
	const [commentValues, setCommentValues] = useState({
		photos: [],
		stars: 0,
    content: ''
  });
	
	const handleChange = (name, value) => {
    setCommentValues(function(prevValues){
			return {
      	...prevValues,
      	[name]: value,
			}
    });
  };

	const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(__commentAdd(id, commentValues))
	}

	const handleSelect = (nextValue) => handleChange('stars', nextValue);

	return(
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
									selected={commentValues.stars >= item}
									rating={commentValues.stars}
									item={item}
									onSelect={handleSelect}/>
								)
							})
						}
					</div>
				</div>
				<ImageRegist onChange={setCommentValues} />
				<div className="text_inner"><Text name="content" value={commentValues.content} onChange={handleInputChange}>리뷰를 작성해주세요.(최대 1,000자)</Text></div>
			</div>
			<LargeButton background="#000" type="submit">저장하기</LargeButton>
		</CommentForm>
	)
}
const CommentForm = styled.form`
	
`
export default CommentWrite;