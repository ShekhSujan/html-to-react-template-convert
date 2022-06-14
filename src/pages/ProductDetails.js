import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
const ProductDetails = () => {
  return (
 
  <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link to="/" className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Product details</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="recommend-slider mb-3">
            <div className="osahan-slider-item">
              <img src="img/recommend/r1.jpg" className="img-fluid mx-auto shadow-sm rounded" alt="Responsive image" />
            </div>
         
          </div>
          <div className="pd-f d-flex align-items-center mb-3">
            <Link to="/cart" className="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"><i className="icofont-plus m-0 mr-2" /> ADD TO CART</Link>
            <Link to="/cart" className="btn btn-success p-3 rounded btn-block d-flex align-items-center justify-content-center btn-lg m-0"><i className="icofont-cart m-0 mr-2" /> BUY NOW</Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 bg-white rounded shadow-sm">
            <div className="pt-0">
              <h2 className="font-weight-bold">Valencia Orange - Imported</h2>
              <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                Product MRP : <b className="h6 text-dark m-0">$263.00</b>
                <span className="badge badge-danger ml-2">50% OFF</span>
              </p>
              <Link to="/review">
                <div className="rating-wrap d-flex align-items-center mt-2">
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="icofont-star text-warning" />
                      <i className="icofont-star text-warning" />
                      <i className="icofont-star text-warning" />
                      <i className="icofont-star text-warning" />
                      <i className="icofont-star" />
                    </li>
                  </ul>
                  <p className="label-rating text-muted ml-2 small"> (245 Reviews)</p>
                </div>
              </Link>
            </div>
            <div className="pt-2">
              <div className="row">
                <div className="col-6">
                  <p className="font-weight-bold m-0">Delivery</p>
                  <p className="text-muted m-0">Free</p>
                </div>
                <div className="col-6 text-right">
                  <p className="font-weight-bold m-0">Available in:</p>
                  <p className="text-muted m-0">1 kg, 2 kg, 5 kg</p>
                </div>
              </div>
            </div>
            <div className="details">
              <div className="pt-3 bg-white">
                <div className="d-flex align-items-center">
                  <div className="btn-group osahan-radio btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                      <input type="radio" name="options" id="option1" defaultChecked /> 4 pcs
                    </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="options" id="option2" /> 6 pcs
                    </label>
                    <label className="btn btn-secondary">
                      <input type="radio" name="options" id="option3" /> 1 kg
                    </label>
                  </div>
                  <Link className="ml-auto" href="#">
                    <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
                      <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                      <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                      <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                    </form>
                  </Link>
                </div>
              </div>
              <div className="pt-3">
                <div className="input-group mb-3 border rounded shadow-sm overflow-hidden bg-white">
                  <div className="input-group-prepend">
                    <button className="border-0 btn btn-outline-secondary text-success bg-white"><i className="icofont-search" /></button>
                  </div>
                  <input type="text" className="shadow-none border-0 form-control form-control-lg pl-0" placeholder="Type your city (e.g Chennai, Pune)" aria-label aria-describedby="basic-addon1" />
                </div>
                <p className="font-weight-bold mb-2">Product Details</p>
                <p className="text-muted small mb-0">High quality Fresh Orange fruit exporters from South Korea for sale. All citrus trees belong to the single genus Citrus and remain almost entirely interfertile. This includes grapefruits, lemons, limes, oranges, and various other types and hybrids. The fruit of any citrus tree is considered a hesperidium, a kind of modified berry; it is covered by a rind wall.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mt-3 mb-3">Maybe You Like this.</h5>
      <div className="row">
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Chilli</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample1">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Onion</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$1.8/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample2">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">5%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v3.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Tomato</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$1/kg</h6>
                  </Link><Link className="ml-auto" href="#">
                    <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v4.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Cabbage</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample3">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
      <div className="row">
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Cauliflower</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$1.8/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample4">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v6.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Carrot</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample5">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v7.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Star Anise</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$2.5/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample6">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
        <div className="col-sm-3 col-md-3 mb-3">
          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <Link to="/product-details" className="text-dark">
                <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
              </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                  <img src="img/listing/v8.jpg" className="img-fluid item-img w-100 mb-3" />
                  <h6>Brinjal</h6>
                </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                    <h6 className="price m-0 text-success">$0.8/kg</h6>
                  </Link><Link data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" className="btn btn-success btn-sm ml-auto">+</Link>
                  <div className="collapse qty_show" id="collapseExample7">
                    <div>
                      <span className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
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
  </section>
 <Nav/>
</div>

  )
}

export default ProductDetails