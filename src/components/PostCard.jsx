import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

function PostCard() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Card>
                <ImgSlider>
                    <Slider {...settings}>
                        <CardImg src="/images/summer.png" />
                        <CardImg src="/images/summer.png" />
                        <CardImg src="/images/summer.png" />
                    </Slider>
                </ImgSlider>
                <div className="content-text">
                    <CardTitle>양평 스마일카라반펜션</CardTitle>
                    <ReservText>6월 23~30 (최근 예약 가능한 날짜)</ReservText>
                </div>
                <ChargeText>79,000 / 박</ChargeText>
            </Card>
        </div>
    )
}

const Card = styled.article`
  width: 347px;
  height: 315px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 20px;
  &:nth-child(2){
	margin-top: 100px;
  }
  .content-text {
	padding: 8px 8px 0;
	margin-bottom:10px;
  }
`
const ImgSlider = styled.div`
 width: 347px;
 height: 70%;
 .slick-slider  {
	height: 100%;
 }
 .slick-slider .slick-initialized  {
	width: 100%;
	height: 100%;
    & > div {
		height: 100%;
        display: flex;
    }
}
.slick-slider {
	.slick-list {
		width: 100%;
		height: 100%;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		overflow: hidden;
	}
	.slick-track {
		height: 100%;
	}
	.slick-initialized{
		height: 100%;
		.slick-slide {
			height: 100%;
		}
	}
	div {
		height: 100%;
	}
}

  .slick-prev {
    left: 15px !important;
    z-index: 1;
  }
  .slick-next {
    right: 15px !important;
  }

.slick-arrow{
	top: 125px;
}
  .slick-dots {
    bottom:7px;
    li button {
      &:before {
        color: #fff;
      }
    }
  }
`

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit:cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  `
const CardTitle = styled.p`
  font-size: 17px;
  font-weight: bold;
`

const ReservText = styled.p`
  font-size: 11px;
  font-weight: 400;
`
const ChargeText = styled.p`
  font-size: 11px;
  font-weight: 400;
  padding-left: 8px;
`

export default PostCard