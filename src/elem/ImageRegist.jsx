import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ImageRegist = ({onChange}) => {
	const [showImages, setShowImages] = useState([]);
	const [fileSize, setFileSize] = useState(true);
	const [num, setNum] = useState(0);
	const fileInput = React.useRef();
	
	// 이미지 추가
	const handleAddImages = (e) => {
		const formData = new FormData();
		const file = fileInput.current.files;
		const imageLists = e.target.files;
		setFileSize(true);
		
		if(imageLists.length > 0){
			for (let i = 0; i < imageLists.length; i++) {
				const maxSize = 2 * 1024 * 1024; //2MB용량
				if (imageLists[i].size > maxSize) {
					setFileSize(false); //이미지 용량 제안
					return false;
				}

				formData.append('image', file[i]);
				const currentImageUrl = URL.createObjectURL(imageLists[i]);

				setShowImages(function(preve){
					return [...preve, currentImageUrl]
				});
			}
		}

		if(showImages.length+1 > 4){
			window.alert("이미지는 5개까지만 등록할수 있습니다.")
			setShowImages([])
		}

		axios
      .post("http://3.34.42.87/api/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
					'Authorization': "Bearer " + localStorage.getItem('token')
        },
      })
      .then((res) => {
				onChange((prevValues) => {
					return {
						...prevValues,
						photos: [...showImages, res.data.imageUrls]
					}
				})
      })
      .catch((err) => {
        console.log(err);
      });
	};

	// X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
		setNum(num - 1)
	};

	return(
		<ImageRegistBx >
			<input type="file" multiple id="file" accept="image/png, image/jpeg" ref={fileInput} onChange={handleAddImages}/>
			<label htmlFor="file">
				<div className="file-add-inner">
					<i className="ic-plus"></i>
					<p className="num num-start">{showImages.length}<span className="num num-end">/5</span></p>
				</div>
			</label> 
			{showImages && <button onClick={handleDeleteImage}></button>}
			{showImages && showImages.map((image, idx) => (
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
		overflow-y: hidden;
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