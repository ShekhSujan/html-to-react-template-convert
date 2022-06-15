import React from 'react'
import Nav from '../components/Nav'

const Recomended = () => {
  return (

        <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><a href="#" className="text-success">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Recommended</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="osahan-listing">
            <div className="d-flex align-items-center mb-3">
              <h4>Recommended</h4>
              <div className="m-0 text-center ml-auto">
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1" /> Filter</a>
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white"><i className="icofont-signal mr-1" /> Sort</a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <a href="product_details.html" className="text-dark text-decoration-none">
                </a><div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><a href="product_details.html" className="text-dark text-decoration-none">
                    <div className="recommend-slider rounded m-0">
                      <div className="osahan-slider-item m-2 rounded">
                        <img src="img/recommend/r1.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                      </div>
                    </div>
                  </a><div className="p-3 position-relative"><a href="product_details.html" className="text-dark text-decoration-none">
                      <h6 className="mb-1 font-weight-bold text-success">Fresh Orange
                      </h6>
                      <p className="text-muted">Orange Great Quality item from Jamaica.</p>
                    </a><div className="d-flex align-items-center"><a href="product_details.html" className="text-dark text-decoration-none">
                        <h6 className="m-0">$8.8/kg</h6>
                      </a><a className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
                          <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                          <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                          <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                        </form>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <a href="product_details.html" className="text-dark text-decoration-none">
                </a><div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><a href="product_details.html" className="text-dark text-decoration-none">
                    <div className="recommend-slider rounded m-0">
                      <div className="osahan-slider-item m-2">
                        <img src="img/recommend/r4.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                      </div>
                    </div>
                  </a><div className="p-3 position-relative"><a href="product_details.html" className="text-dark text-decoration-none">
                      <h6 className="mb-1 font-weight-bold text-success">Green Apple</h6>
                      <p className="text-muted">Green Apple Premium item from Vietnam.</p>
                    </a><div className="d-flex align-items-center"><a href="product_details.html" className="text-dark text-decoration-none">
                        <h6 className="m-0">$10.8/kg</h6>
                      </a><a className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
                          <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                          <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                          <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                        </form>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <a href="product_details.html" className="text-dark text-decoration-none">
                </a><div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"><a href="product_details.html" className="text-dark text-decoration-none">
                    <div className="recommend-slider rounded m-0">
                      <div className="osahan-slider-item m-2">
                        <img src="img/recommend/r7.jpg" className="img-fluid mx-auto rounded shadow-sm" alt="Responsive image" />
                      </div>
                    </div>
                  </a><div className="p-3 position-relative"><a href="product_details.html" className="text-dark text-decoration-none">
                      <h6 className="mb-1 font-weight-bold text-success">Fresh Apple
                      </h6>
                      <p className="text-muted">Fresh Apple Premium item from Thailand.</p>
                    </a><div className="d-flex align-items-center"><a href="product_details.html" className="text-dark text-decoration-none">
                        <h6 className="m-0">$12.8/kg</h6>
                      </a><a className="ml-auto" href="#">
                        <form id="myform" className="cart-items-number d-flex" method="POST" action="#">
                          <input type="button" defaultValue="-" className="qtyminus btn btn-success btn-sm" field="quantity" />
                          <input type="text" name="quantity" defaultValue={1} className="qty form-control" />
                          <input type="button" defaultValue="+" className="qtyplus btn btn-success btn-sm" field="quantity" />
                        </form>
                      </a>
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

export default Recomended