import React, { useState } from 'react';
import styled from "styled-components";
import ImageRegist from "../elem/ImageRegist";
import Star from "../elem/Star";
import { LargeButton } from "../elem/Button";
import Text from "../elem/Text";

const RATINGS = [1, 2, 3, 4, 5];

const CommentWrite = ({name, values, onChange }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const handleSelect = (nextValue) => onChange(name, nextValue);

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
									selected={values >= item}
									rating={values}
									item={item}
									onSelect={handleSelect}/>
								)
							})
						}
					</div>
				</div>
				<ImageRegist name="imgFile" imgFileValue={values.imgFile} onChange={onChange}></ImageRegist>
				<div className="text_inner"><Text>리뷰를 작성해주세요.(최대 1,000자)</Text></div>
			</div>
			<LargeButton background="#000" type="submit">저장하기</LargeButton>
		</CommentForm>
	)
}
const CommentForm = styled.form`
	
`
export default CommentWrite;