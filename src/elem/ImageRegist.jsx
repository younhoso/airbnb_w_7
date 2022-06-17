import React from "react";
import styled from "styled-components";

const ImageRegist = () => {
	return(
		<ImageRegistBx>
			<label htmlFor="file"><i className="ic-plus"></i></label> 
			<input type="file" id="file" />
		</ImageRegistBx>
	)
};

const ImageRegistBx = styled.div`
		width: 80px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		& label {
			width: 80px;
			height: 80px;
			line-height: 80px;
			display: inline-block;
			border: 1px dashed #C4C4C4;
			color: #C4C4C4;
			font-size: 22px;
			font-weight: 600;
			border-radius: 0.6em;
			vertical-align: middle;
			cursor: pointer;
			& i {
				vertical-align: inherit;
			}
		}
		& input[type="file"] {
			display: none;
		}
`

export default ImageRegist;