import React from "react";
import { Link } from 'react-router-dom'
import HomeCategorySlider from '../components/HomeCategorySlider'
import HomeSlider from '../components/HomeSlider'
import Nav from "../components/Nav";
import PromoSlider from '../components/PromoSlider'

const Home = () => {
  return (
   
    <div>
        <section className="py-4 osahan-main-body">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="osahan-home-page">
             
                    <div className="osahan-body">

                    <div className="py-3 osahan-promos">
                        <div className="promo-slider pb-0 mb-0">
                       <HomeSlider/>
                        </div>
                    </div>

                    <div className="pt-3 pb-2  osahan-categories">
                    <div className="d-flex align-items-center mb-2">
                        <h5 className="m-0">What do you looking for?</h5>
                        <Link to="/" className="ml-auto btn btn-outline-success btn-sm">See more</Link>
                    </div>
                    <div className="categories-slider">
                    <HomeCategorySlider/>
                    </div>
                    </div>

                    <div className="py-3 osahan-promos">
                        <div className="d-flex align-items-center mb-3">
                        <h5 className="m-0">Promos for you</h5>
                        <Link to="/" className="ml-auto btn btn-outline-success btn-sm">See more</Link>
                        </div>
                        <div className="promo-slider pb-0 mb-0">
                       <PromoSlider/>
                        </div>
                    </div>
                    <div className="title d-flex align-items-center py-3">
                        <h5 className="m-0">Pick's Today</h5>
                        <Link className="ml-auto btn btn-outline-success btn-sm" href="picks_today.html">See more</Link>
                    </div>
                    <div className="pick_today">
                        <div className="row">
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Chilli</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample1">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Onion</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$1.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample2">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Cauliflower</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$1.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample3">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v6.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Carrot</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample4">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">5%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v3.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Tomato</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$1/kg</h6>
                                    </Link><Link className="ml-auto" href="#">
                                    <form  className="cart-items-number d-flex" method="POST" action="#">
                                        <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                        <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                        <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                    </form>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v4.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Cabbage</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample5">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Chilli</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample6">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                                <Link to="/" className="text-dark">
                                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                                </Link><div className="p-3"><Link to="/" className="text-dark">
                                    <img src="img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                    <h6>Onion</h6>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark">
                                    <h6 className="price m-0 text-success">$1.8/kg</h6>
                                    </Link><Link data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" className="btn btn-success btn-sm ml-auto">+</Link>
                                    <div className="collapse qty_show" id="collapseExample7">
                                    <div>
                                        <span className="ml-auto" href="#">
                                        <form  className="cart-items-number d-flex" method="POST" action="#">
                                            <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                            <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                            <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                        </form>
                                        </span>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="title d-flex align-items-center py-3">
                        <h5 className="m-0">Recommend for You</h5>
                        <Link className="ml-auto btn btn-outline-success btn-sm" href="recommend.html">26 more</Link>
                    </div>
                    <div className="osahan-recommend">
                        <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                            <Link to="/" className="text-dark text-decoration-none">
                            </Link><div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><Link to="/" className="text-dark text-decoration-none">
                                <div className="recommend-slider2 rounded mb-0">
                                <div className="osahan-slider-item m-2 rounded">
                                    <img src="img/recommend/r1.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                <div className="osahan-slider-item m-2 rounded">
                                    <img src="img/recommend/r2.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                <div className="osahan-slider-item m-2 rounded">
                                    <img src="img/recommend/r3.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                </div>
                            </Link><div className="p-3 position-relative"><Link to="/" className="text-dark text-decoration-none">
                                <h6 className="mb-1 font-weight-bold text-success">Fresh Orange
                                </h6>
                                <p className="text-muted">Orange Great Quality item from Jamaica.</p>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark text-decoration-none">
                                    <h6 className="m-0">$8.8/kg</h6>
                                </Link><Link className="ml-auto" href="#">
                                    <form  className="cart-items-number d-flex" method="POST" action="#">
                                    <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                    <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                    <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                    </form>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <Link to="/" className="text-dark text-decoration-none">
                            </Link><div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><Link to="/" className="text-dark text-decoration-none">
                                <div className="recommend-slider2 rounded mb-0">
                                <div className="osahan-slider-item m-2">
                                    <img src="img/recommend/r4.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                <div className="osahan-slider-item m-2">
                                    <img src="img/recommend/r5.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                <div className="osahan-slider-item m-2">
                                    <img src="img/recommend/r6.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                </div>
                            </Link><div className="p-3 position-relative"><Link to="/" className="text-dark text-decoration-none">
                                <h6 className="mb-1 font-weight-bold text-success">Green Apple</h6>
                                <p className="text-muted">Green Apple Premium item from Vietnam.</p>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark text-decoration-none">
                                    <h6 className="m-0">$10.8/kg</h6>
                                </Link><Link className="ml-auto" href="#">
                                    <form  className="cart-items-number d-flex" method="POST" action="#">
                                    <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                    <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                    <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                    </form>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <Link to="/" className="text-dark text-decoration-none">
                            </Link><div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><Link to="/" className="text-dark text-decoration-none">
                                <div className="recommend-slider2 rounded mb-0">
                                <div className="osahan-slider-item m-2">
                                    <img src="img/recommend/r7.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                <div className="osahan-slider-item m-2">
                                    <img src="img/recommend/r8.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                <div className="osahan-slider-item m-2">
                                    <img src="img/recommend/r9.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                                </div>
                                </div>
                            </Link><div className="p-3 position-relative"><Link to="/" className="text-dark text-decoration-none">
                                <h6 className="mb-1 font-weight-bold text-success">Fresh Apple
                                </h6>
                                <p className="text-muted">Fresh Apple Premium item from Thailand.</p>
                                </Link><div className="d-flex align-items-center"><Link to="/" className="text-dark text-decoration-none">
                                    <h6 className="m-0">$12.8/kg</h6>
                                </Link><Link className="ml-auto" href="#">
                                    <form  className="cart-items-number d-flex" method="POST" action="#">
                                    <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                                    <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                                    <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                                    </form>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
     <Nav/>
    </div>

  )
}

export default Home