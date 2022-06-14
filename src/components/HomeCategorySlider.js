import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class HomeCategorySlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
    <div>
        <Slider {...settings}>
        <           div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/1.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/2.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/3.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Meat</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/4.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Seafood</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/5.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Milk &amp; Egg</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/6.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Bread</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/7.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Frozen</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/8.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Organic</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/1.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Vegetables</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/2.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Fruits</p>
                            </Link>
                        </div>
                        </div>
                        <div className="col-c">
                        <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <Link to="/">
                            <img src="img/categorie/3.svg" className="img-fluid px-2 mx-auto" />
                            <p className="m-0 pt-2 text-muted text-center">Meat</p>
                            </Link>
                        </div>
                        </div>
                        </Slider>
                        </div>
  )

}
}