import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const PromoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div>
         <Slider {...settings}>
                <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/promo1.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/promo2.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/promo3.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/promo4.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/promo2.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            <div className="osahan-slider-item  px-2">
                <Link to="/"><img src="img/promo3.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></Link>
            </div>
            </Slider>
    </div>
  )
}


export default PromoSlider