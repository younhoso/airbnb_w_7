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
		border: 1px dashed #C4C4C4;
		border-radius: 0.6em;
		& label {
			width: 20px;
			height: 20px;
			line-height: 20px;
			display: inline-block;
			color: #C4C4C4;
			vertical-align: middle;
			cursor: pointer;
			border: 1px solid #C4C4C4;
			border-radius:50%;
			& i {
				vertical-align: inherit;
			}
		}
		& input[type="file"] {
			display: none;
		}
`

export default ImageRegist;