import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
const Popular = () => {
  return (
 
        <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link to="/" className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Most Popular</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="osahan-listing">
            <div className="d-flex align-items-center mb-3">
              <h4>Pick's Today</h4>
              <div className="m-0 text-center ml-auto">
                <Link data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1" /> Filter</Link>
                <Link data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white"><i className="icofont-signal mr-1" /> Sort</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-3 mb-3">
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
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
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
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Cauliflower</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$1.8/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample3">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v6.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Carrot</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$0.8/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample4">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">5%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v3.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Tomato</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$1/kg</h6>
                        </Link><Link className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v4.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Cabbage</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$0.8/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample5">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">5%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v7.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Star Anise</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$2.5/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample6">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v8.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Brinjal</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$0.8/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample7">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v9.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Capsicum</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$2.5/kg</h6>
                        </Link><Link className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v10.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Lady Finger</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$0.8/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample8" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample8">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v11.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Garlic</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$2.5/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample9" role="button" aria-expanded="false" aria-controls="collapseExample9" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample9">
                          <div>
                            <span className="ml-auto" to="#">
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
              <div className="col-6 col-md-3 mb-3">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <Link to="/product-details" className="text-dark">
                      <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                    </Link><div className="p-3"><Link to="/product-details" className="text-dark">
                        <img src="img/listing/v12.jpg" className="img-fluid item-img w-100 mb-3" />
                        <h6>Ginger</h6>
                      </Link><div className="d-flex align-items-center"><Link to="/product-details" className="text-dark">
                          <h6 className="price m-0 text-success">$0.8/kg</h6>
                        </Link><Link data-toggle="collapse" href="#collapseExample10" role="button" aria-expanded="false" aria-controls="collapseExample10" className="btn btn-success btn-sm ml-auto">+</Link>
                        <div className="collapse qty_show" id="collapseExample10">
                          <div>
                            <span className="ml-auto" to="#">
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
        </div>
      </div>
    </div>
  </section>
<Nav/>
</div>


  )
}

export default Popular