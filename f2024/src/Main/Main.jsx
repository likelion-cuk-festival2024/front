import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as HeaderSVG } from "./Header.svg";
import "./Main.css";
import lionImage from "./likelion_cuk.png";
import test from "./liontest.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Main = () => {
  return (
    <div className="page">
      <div>
        <HeaderSVG />
      </div>

      <div className="slider-container">
        <Slider {...settings} arrows={false}>
          <div>
            <img src={lionImage} alt="lion" width={340} height={256}/>
          </div>
          <div>
            <img src={test} alt="test" width={340} height={256}/>
          </div>
        </Slider>
      </div>

      <div className="select">
        <div className="info_text">infomation</div>
        <Link to="/notice" className="box_text link">
          공지사항
          <div className="box_text_2">Notice</div>
        </Link>
        <Link to="/performance" className="box_text link">
          공연
          <div className="box_text_2">Performance</div>
        </Link>
        <Link to="/map" className="box_text link">
          학교지도
          <div className="box_text_2">Map</div>
        </Link>
        <Link to="/booth-info" className="box_text link">
          부스정보
          <div className="box_text_2">Booth Infomation</div>
        </Link>
      </div>

      <div className="insta">
          <div className="insta-item">
            만든 사람들
          <div className="insta-item2">Creators</div>
      </div>
      <div className="insta-item">
            인스타그램
          <div className="insta-item2">Instagram</div>
      </div>
      </div>

    </div>
  );
};

export default Main;
