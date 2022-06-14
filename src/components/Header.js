import React from "react";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <div>
         <div className="border-bottom p-3 d-none mobile-nav">
    <div className="title d-flex align-items-center">
      <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
        <img className="osahan-logo mr-2" src="img/logo.svg" alt="img"/>
               <h4 className="font-weight-bold text-success m-0">Grocery</h4>
      </Link>
      <p className="ml-auto m-0">
        <Link  className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center">
          <i className="text-dark icofont-sale-discount" />
          <span className="badge badge-danger p-1 ml-1 small">50%</span>
        </Link>
      </p>
      <Link className="toggle ml-3" to="/"><i className="icofont-navigation-menu" /></Link>
    </div>
    <Link to="/" className="text-decoration-none">
      <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
        <div className="input-group-prepend">
          <button className="border-0 btn btn-outline-secondary text-success bg-white"><i className="icofont-search" /></button>
        </div>
        <input type="text" className="shadow-none border-0 form-control pl-0" placeholder="Search for Products.." aria-label aria-describedby="basic-addon1" />
      </div>
    </Link>
  </div>
  <div className="theme-switch-wrapper">
    <label className="theme-switch" htmlFor="checkbox">
      <input type="checkbox" id="checkbox"/>
      <div className="slider round" />
      <i className="icofont-moon" />
    </label>
    <em>Enable Dark Mode!</em>
  </div>
  <div className="bg-white shadow-sm osahan-main-nav">
    <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
      <Link className="navbar-brand mr-0" to="/"><img className="img-fluid logo-img rounded-pill border shadow-sm" src="img/logo.svg" alt="img"/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="ml-3 d-flex align-items-center">
        <div className="dropdown mr-3">
          <Link className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div><i className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2" /></div>
            <div>
              <p className="text-muted mb-0 small">Select Location</p>
              Maharashtra India...
            </div>
          </Link>
          <div className="dropdown-menu osahan-select-loaction p-3" aria-labelledby="navbarDropdown">
            <span>Select your city to start shopping</span>
            <form className="form-inline my-2">
              <div className="input-group p-0 col-lg-12">
                <input type="text" className="form-control form-control-sm" placeholder="Search Location" />
                <div className="input-group-prepend">
                  <div className="btn btn-success rounded-right btn-sm"><i className="icofont-location-arrow" /> Detect</div>
                </div>
              </div>
            </form>
            <div className="city pt-2">
              <h6>Top Citys</h6>
              <p className="border-bottom m-0 py-1"><Link to="/" className="text-dark">Banglore</Link></p>
              <p className="border-bottom m-0 py-1"><Link to="/" className="text-dark">Noida</Link></p>
              <p className="border-bottom m-0 py-1"><Link to="/" className="text-dark">Delhi</Link></p>
              <p className="m-0 py-1"><Link to="/" className="text-dark">Mumbai</Link></p>
            </div>
          </div>
        </div>
        <div className="input-group mr-sm-2 col-lg-12">
          <input type="text" className="form-control" placeholder="Search for Products.." />
          <div className="input-group-prepend">
            <div className="btn btn-success rounded-right"><i className="icofont-search" /></div>
          </div>
        </div>
      </div>
      <div className="ml-auto d-flex align-items-center">
        <Link to="/" data-toggle="modal" data-target="#login" className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
          <i className="icofont-login" />
        </Link>
        <div className="dropdown">
          <Link to="/" className="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">
            </i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main" aria-labelledby="dropdownMenuNotification">
            <div className="osahan-notifications bg-white border-bottom p-2">
              <div className="position-absolute ml-n1 py-2"><i className="icofont-check-circled text-white bg-success rounded-pill p-1" /></div>
              <Link to="/" className="text-decoration-none text-dark">
                <div className="notifiction small">
                  <div className="ml-3">
                    <p className="font-weight-bold mb-1">Yay! Order Complete</p>
                    <p className="small m-0"><i className="icofont-ui-calendar" /> Today, 05:14 AM</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="osahan-notifications bg-white border-bottom p-2">
              <Link to="/" className="text-decoration-none text-muted">
                <div className="notifiction small">
                  <div className="ml-3">
                    <p className="font-weight-bold mb-1">Yipiee. order Success</p>
                    <p className="small m-0"><i className="icofont-ui-calendar" /> Monday, 08:30 PM</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="osahan-notifications bg-white p-2">
              <Link to="/" className="text-decoration-none text-muted">
                <div className="notifiction small">
                  <div className="ml-3">
                    <p className="font-weight-bold mb-1">New Promos Coming</p>
                    <p className="small m-0"><i className="icofont-ui-calendar" /> Sunday, 10:30 AM</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/" className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
          <i className="icofont-shopping-cart" />
        </Link>
      </div>
    </nav>
    <div className="bg-color-head">
      <div className="container menu-bar d-flex align-items-center">
        <ul className="list-unstyled form-inline mb-0">
          <li className="nav-item active">
            <Link className="nav-link text-white pl-0" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/listing">Listing</Link>
              <Link className="dropdown-item" to="/product-details">Detail</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/trending">Trending</Link>
              <Link className="dropdown-item" to="/recomended">Recommended</Link>
              <Link className="dropdown-item" to="/popular">Most Popular</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Checkout Process
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/cart">Cart</Link>
              <Link className="dropdown-item" to="/checkout">Checkout</Link>
              <Link className="dropdown-item" to="/successfull">Successful</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My Order
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/my-order">My order</Link>
              <Link className="dropdown-item" to="/status-complete">Status Complete</Link>
              <Link className="dropdown-item" to="/status-onprocess">Status on Process</Link>
              <Link className="dropdown-item" to="/status-canceled">Status Canceled</Link>
              <Link className="dropdown-item" to="/review">Review</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle" to="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Extra Pages
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/verification">Verification</Link>
              <Link className="dropdown-item" to="/promos">Promos</Link>
              <Link className="dropdown-item" to="/promo-details">Promo Details</Link>
              <Link className="dropdown-item" to="/terms-condition">Terms &amp; Conditions</Link>
              <Link className="dropdown-item" to="/privacy">Privacy</Link>
              <Link className="dropdown-item" to="/condition">Conditions</Link>
              <Link className="dropdown-item" to="/help">Help Support</Link>
              <Link className="dropdown-item" to="/ticket">Help Ticket</Link>
              <Link className="dropdown-item" to="/refund">Refund Payment</Link>
              <Link className="dropdown-item" to="/faq">FAQ</Link>
              <Link className="dropdown-item" to="/signin">Sign In</Link>
              <Link className="dropdown-item" to="/signup">Sign Up</Link>
              <Link className="dropdown-item" to="/search">Search</Link>
            </div>
          </li>
        </ul>
        <div className="list-unstyled form-inline mb-0 ml-auto">
          <Link to="/trending" className="text-white px-3 py-2">Trending</Link>
          <Link to="/promos" className="text-white bg-offer px-3 py-2"><i className="icofont-sale-discount h6" />Promos</Link>
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0 d-none">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link to="/" className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page" />
      </ol>
    </div>
  </nav>
    </div>
  )
}

export default Header