import React from 'react'
import styled from "styled-components";

function Select({item, onChange}) {
    return (
			<SelectWrapper>
				<SelectBx name="choice" value={item} onChange={onChange}>
					<option value="none">카테고리를 선택해주세요.</option>
					<option value="서핑">서핑</option>
					<option value="해변근처">해변근처</option>
					<option value="캠핑장">캠핑장</option>
					<option value="통나무집">통나무집</option>
					<option value="셰어하우스">셰어하우스</option>
				</SelectBx>
				<IconArrow>
					<i className='ic-arrow-top'></i>
				</IconArrow>
			</SelectWrapper>
    )
}
const SelectWrapper = styled.div`
	position: relative;
`;
const SelectBx = styled.select`
	width: 100%;
	height: 52px;
	border-radius: 0.5rem;
	border: 1px solid #C4C4C4;
	padding: 10px;
	&:focus {
		border: 2px solid #000;
	}
`
const IconArrow = styled.div`
	font-size: 24px;
	position: absolute;
	top: 10px;
	right: 20px;
	transform: rotate(-180deg);
`

export default Select