import React, { useState } from "react";
import styled from "styled-components";

const ImageRegist = ({name, imgFileValue, onChange}) => {
	const [showImages, setShowImages] = useState([]);
	const [fileSize, setFileSize] = useState(true);
	const [num, setNum] = useState(0);
	
	// 이미지 상대경로 저장
	const handleAddImages = (e) => {
		const imageLists = e.target.files;
    let imageUrlLists = [...showImages];
		setFileSize(true);

    for (let i = 0; i < imageLists.length; i++) {
			const maxSize = 2 * 1024 * 1024; //2MB용량
			if (imageLists[i].size > maxSize){
				setFileSize(false);
				return;
			}

      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

	

		if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

		setNum(imageLists.length)
		setShowImages(imageUrlLists);
		onChange(name, imageLists)
	}

	// X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
		setNum(num - 1)
	};

	return(
		<ImageRegistBx>
			<input type="file" multiple id="file" accept="image/png, image/jpeg" onChange={handleAddImages}/>
			<label htmlFor="file">
				<div className="file-add-inner">
					<i className="ic-plus"></i>
					<p className="num num-start">{num}<span className="num num-end">/5</span></p>
				</div>
			</label> 
			{imgFileValue && <button onClick={handleDeleteImage}></button>}
			{showImages.map((image, idx) => (
				<ShowImageInner key={idx}>
					<div className="deleteBtn" onClick={() => handleDeleteImage(idx)}><i className="ic-close close"></i></div>
					<span className="bgImg" style={{backgroundImage: `url(${image})`}}></span>
				</ShowImageInner>
			))}
			{!fileSize && <p style={{color:'red'}}>2MB 이하 파일만 등록할 수 있습니다</p>}
		</ImageRegistBx>
	)
};

const ImageRegistBx = styled.div`
		white-space: nowrap;
    overflow-x: auto;
		& label {
			width: 80px;
			display: inline-block;
			border: 1px dashed #C4C4C4;
			color: #C4C4C4;
			font-size: 22px;
			font-weight: 600;
			border-radius: 0.6em;
			vertical-align: middle;
			cursor: pointer;
			text-align: center;
			.file-add-inner {
				position: relative;
				height: 80px;
				& i {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -100%);
				}
				p {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, 20%);
				}
			}
			
			.num {
				font-size: 14px;
				line-height: 1;
			}
		} 
		& input[type="file"] {
			display: none;
		}
`

const ShowImageInner = styled.span`
	width: 80px;
	height: 80px;
	display: inline-block;
	position: relative;
	text-align: center;
	margin-left: 10px;
	vertical-align: middle;
	& .close{
		font-size: 14px;
	}
	& > div {
		position: relative;
		margin: 0 0 0 10px;
	}
	& .bgImg {
		width: 80px;
		height: 80px;
		display: inline-block;
		background-size: cover;
    background-position: center;
    overflow: hidden;
    border-radius: 0.4em;
	}
	& .deleteBtn {
		width: 24px;
		height: 24px;
		line-height: 25px;
		cursor: pointer;
		background-color: #fff;
		box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
		border-radius: 50%;
		position: absolute;
		top: 5px;
		right: 5px;
	}
	& img {
		width: 100%;
		border-radius: 0.3em;
	}
`

export default ImageRegist;