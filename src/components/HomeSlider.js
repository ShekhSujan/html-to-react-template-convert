import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
         <Slider {...settings}>
                     <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/recommend/r12.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/recommend/r11.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/recommend/r10.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            </Slider>
    </div>
  )
}


export default HomeSlider