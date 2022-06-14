import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const MyAccount = () => {
  return (
 
        <div>
  <div className="bg-white shadow-sm osahan-main-nav">
    <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
      <Link className="navbar-brand mr-0" href="home.html"><img className="img-fluid logo-img rounded-pill border shadow-sm" src="img/logo.svg" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="ml-3 d-flex align-items-center">
        <div className="dropdown mr-3">
          <Link className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <input type="text" className="form-control form-control-sm" id="inlineFormInputGroupUsername2" placeholder="Search Location" />
                <div className="input-group-prepend">
                  <div className="btn btn-success rounded-right btn-sm"><i className="icofont-location-arrow" /> Detect</div>
                </div>
              </div>
            </form>
            <div className="city pt-2">
              <h6>Top Citys</h6>
              <p className="border-bottom m-0 py-1"><Link className="text-dark">Banglore</Link></p>
              <p className="border-bottom m-0 py-1"><Link className="text-dark">Noida</Link></p>
              <p className="border-bottom m-0 py-1"><Link className="text-dark">Delhi</Link></p>
              <p className="m-0 py-1"><Link className="text-dark">Mumbai</Link></p>
            </div>
          </div>
        </div>
        <div className="input-group mr-sm-2 col-lg-12">
          <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Search for Products.." />
          <div className="input-group-prepend">
            <div className="btn btn-success rounded-right"><i className="icofont-search" /></div>
          </div>
        </div>
      </div>
      <div className="ml-auto d-flex align-items-center">
        <Link  data-toggle="modal" data-target="#login" className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
          <i className="icofont-login" />
        </Link>
        <div className="dropdown mr-3">
          <Link  className="dropdown-toggle text-dark" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="img/user.png" className="img-fluid rounded-circle header-user mr-2" /> Hi Osahan
          </Link>
          <div className="dropdown-menu dropdown-menu-right top-profile-drop" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" href="my_account.html">My account</Link>
            <Link className="dropdown-item" href="promos.html">Promos</Link>
            <Link className="dropdown-item" href="my_address.html">My address</Link>
            <Link className="dropdown-item" href="terms_conditions.html">Terms &amp; conditions</Link>
            <Link className="dropdown-item" href="help_support.html">Help &amp; support</Link>
            <Link className="dropdown-item" href="help_ticket.html">Help ticket</Link>
            <Link className="dropdown-item" href="signin.html">Logout</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link  className="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">
            </i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main" aria-labelledby="dropdownMenuNotification">
            <div className="osahan-notifications bg-white border-bottom p-2">
              <div className="position-absolute ml-n1 py-2"><i className="icofont-check-circled text-white bg-success rounded-pill p-1" /></div>
              <Link href="status_complete.html" className="text-decoration-none text-dark">
                <div className="notifiction small">
                  <div className="ml-3">
                    <p className="font-weight-bold mb-1">Yay! Order Complete</p>
                    <p className="small m-0"><i className="icofont-ui-calendar" /> Today, 05:14 AM</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="osahan-notifications bg-white border-bottom p-2">
              <Link href="status_onprocess.html" className="text-decoration-none text-muted">
                <div className="notifiction small">
                  <div className="ml-3">
                    <p className="font-weight-bold mb-1">Yipiee. order Success</p>
                    <p className="small m-0"><i className="icofont-ui-calendar" /> Monday, 08:30 PM</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="osahan-notifications bg-white p-2">
              <Link href="status_onprocess.html" className="text-decoration-none text-muted">
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
        <Link href="cart.html" className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
          <i className="icofont-shopping-cart" />
        </Link>
      </div>
    </nav>
    <div className="bg-color-head">
      <div className="container menu-bar d-flex align-items-center">
        <ul className="list-unstyled form-inline mb-0">
          <li className="nav-item active">
            <Link className="nav-link text-white pl-0" href="home.html">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="listing.html">Listing</Link>
              <Link className="dropdown-item" href="product_details.html">Detail</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" href="picks_today.html">Trending</Link>
              <Link className="dropdown-item" href="recommend.html">Recommended</Link>
              <Link className="dropdown-item" href="fresh_vegan.html">Most Popular</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Checkout Process
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="cart.html">Cart</Link>
              <Link className="dropdown-item" href="checkout.html">Checkout</Link>
              <Link className="dropdown-item" href="successful.html">Successful</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My Order
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="my_order.html">My order</Link>
              <Link className="dropdown-item" href="status_complete.html">Status Complete</Link>
              <Link className="dropdown-item" href="status_onprocess.html">Status on Process</Link>
              <Link className="dropdown-item" href="status_canceled.html">Status Canceled</Link>
              <Link className="dropdown-item" href="review.html">Review</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Extra Pages
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="verification.html">Verification</Link>
              <Link className="dropdown-item" href="promos.html">Promos</Link>
              <Link className="dropdown-item" href="promo_details.html">Promo Details</Link>
              <Link className="dropdown-item" href="terms_conditions.html">Terms &amp; Conditions</Link>
              <Link className="dropdown-item" href="privacy.html">Privacy</Link>
              <Link className="dropdown-item" href="terms%26conditions.html">Conditions</Link>
              <Link className="dropdown-item" href="help_support.html">Help Support</Link>
              <Link className="dropdown-item" href="help_ticket.html">Help Ticket</Link>
              <Link className="dropdown-item" href="refund_payment.html">Refund Payment</Link>
              <Link className="dropdown-item" href="faq.html">FAQ</Link>
              <Link className="dropdown-item" href="signin.html">Sign In</Link>
              <Link className="dropdown-item" href="signup.html">Sign Up</Link>
              <Link className="dropdown-item" href="search.html">Search</Link>
            </div>
          </li>
        </ul>
        <div className="list-unstyled form-inline mb-0 ml-auto">
          <Link href="picks_today.html" className="text-white px-3 py-2">Trending</Link>
          <Link href="promos.html" className="text-white bg-offer px-3 py-2"><i className="icofont-sale-discount h6" />Promos</Link>
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">My address</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="osahan-account bg-white rounded shadow-sm overflow-hidden">
            <div className="p-4 profile text-center border-bottom">
              <img src="img/user.png" className="img-fluid rounded-pill" />
              <h6 className="font-weight-bold m-0 mt-2">Askbootstrap</h6>
              <p className="small text-muted m-0"><Link>[email&nbsp;protected]</Link></p>
            </div>
            <div className="account-sections">
              <ul className="list-group">
                <Link href="my_account.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-user osahan-icofont bg-danger" />My Account
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link href="promos.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-sale-discount osahan-icofont bg-success" />Promos
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link href="my_address.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-address-book osahan-icofont bg-dark" />My Address
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link href="terms_conditions.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-info-circle osahan-icofont bg-primary" />Terms, Privacy &amp; Policy
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link href="help_support.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-warning" />Help &amp; Support
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link href="help_ticket.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-success" />Ticket
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link href="signin.html" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex  align-items-center p-3">
                    <i className="icofont-lock osahan-icofont bg-danger" /> Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
          <div className="osahan-my_address">
            <h4 className="mb-4 profile-title">My Addresses</h4>
            <div className="custom-control custom-radio px-0 mb-3 position-relative border-custom-radio">
              <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" defaultChecked />
              <label className="custom-control-label w-100" htmlFor="customRadioInline1">
                <div>
                  <div className="p-3 bg-white rounded shadow-sm w-100">
                    <div className="d-flex align-items-center mb-2">
                      <p className="mb-0 h6">Home</p>
                      <p className="mb-0 badge badge-success ml-auto">Default</p>
                    </div>
                    <p className="small text-muted m-0">1001 Veterans Blvd</p>
                    <p className="small text-muted m-0">Redwood City, CA 94063</p>
                    <p className="pt-2 m-0 text-right"><span className="small"><Link data-toggle="modal" data-target="#exampleModal" className="text-decoration-none text-success"><i className="icofont-edit" /> Edit</Link></span>
                      <span className="small ml-3"><Link data-toggle="modal" data-target="#Delete" className="text-decoration-none text-danger"><i className="icofont-trash" /> Delete</Link></span>
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div className="custom-control custom-radio px-0 mb-3 position-relative border-custom-radio">
              <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
              <label className="custom-control-label w-100" htmlFor="customRadioInline2">
                <div>
                  <div className="p-3 rounded bg-white shadow-sm w-100">
                    <div className="d-flex align-items-center mb-2">
                      <p className="mb-0 h6">Work</p>
                    </div>
                    <p className="small text-muted m-0">Model Town, Ludhiana</p>
                    <p className="small text-muted m-0">Punjab 141002, India</p>
                    <p className="pt-2 m-0 text-right"><span className="small"><Link data-toggle="modal" data-target="#exampleModal" className="text-decoration-none text-success"><i className="icofont-edit" /> Edit</Link></span>
                      <span className="small ml-3"><Link data-toggle="modal" data-target="#Delete" className="text-decoration-none text-danger"><i className="icofont-trash" /> Delete</Link></span>
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="modal fade" id="Delete" tabIndex={-1} role="dialog" aria-labelledby="DeleteModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="DeleteModalLabel">Delete</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body text-center d-flex align-items-center">
          <div className="w-100 px-3">
            <i className="icofont-trash text-danger display-1 mb-5" />
            <h6>Are you sure you want to delete this?</h6>
            <p className="small text-muted m-0">1001 Veterans Blvd</p>
            <p className="small text-muted m-0">Redwood City, CA 94063</p>
          </div>
        </div>
        <div className="modal-footer p-0 border-0">
          <div className="col-6 m-0 p-0">
            <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
          </div>
          <div className="col-6 m-0 p-0">
            <button type="button" className="btn btn-danger btn-lg btn-block">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Delivery Address</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form className>
            <div className="form-row">
              <div className="col-md-12 form-group">
                <label className="form-label">Delivery Area</label>
                <div className="input-group">
                  <input placeholder="Delivery Area" type="text" className="form-control" />
                  <div className="input-group-append"><button id="button-addon2" type="button" className="btn btn-outline-secondary"><i className="icofont-pin" /></button></div>
                </div>
              </div>
              <div className="col-md-12 form-group"><label className="form-label">Complete Address</label><input placeholder="Complete Address e.g. house number, street name, landmark" type="text" className="form-control" /></div>
              <div className="col-md-12 form-group"><label className="form-label">Delivery Instructions</label><input placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" type="text" className="form-control" /></div>
              <div className="mb-0 col-md-12 form-group">
                <label className="form-label">Nickname</label>
                <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                  <label className="btn btn-outline-secondary active">
                    <input type="radio" name="options" id="option1" defaultChecked /> Home
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="option2" /> Work
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="option3" /> Other
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer p-0 border-0">
          <div className="col-6 m-0 p-0">
            <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
          </div>
          <div className="col-6 m-0 p-0">
            <button type="button" className="btn btn-success btn-lg btn-block">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
<Nav/>
</div>

  )
}

export default MyAccount