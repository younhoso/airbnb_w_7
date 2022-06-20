import React from "react";
import styled from "styled-components";

const Star = ({selected = false, item = 0, onSelect }) => {
	const className = `Rating-star ${selected ? 'selected' : null}`;
	const handleClick = onSelect ? () => onSelect(item) : undefined

	return(
		<StarBx onClick={handleClick} className={className}>
			<i className="ic-star"></i>
		</StarBx>
	)
}
const StarBx = styled.span`
	color: #C4C4C4;
	&.selected{
		i {
			color: #36C5E7;
		}
	}
	
`
export default Star;