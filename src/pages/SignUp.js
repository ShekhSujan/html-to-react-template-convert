import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
const SignUp = () => {
  return (
    <div className="p-5 mb-5">
  <div className="border-bottom d-none mobile-nav">
    <div className="title d-flex align-items-center">
      <Link  className="text-decoration-none text-dark d-flex align-items-center">
        <img className="osahan-logo mr-2" src="img/logo.svg" />
        <h4 className="font-weight-bold text-success m-0">Grocery</h4>
      </Link>
      <p className="ml-auto m-0">
        <Link  className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center">
          <i className="text-dark icofont-sale-discount" />
          <span className="badge badge-danger p-1 ml-1 small">50%</span>
        </Link>
      </p>
      <Link className="toggle ml-3" ><i className="icofont-navigation-menu" /></Link>
    </div>
    <Link className="text-decoration-none">
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
      <input type="checkbox" id="checkbox" />
      <div className="slider round" />
      <i className="icofont-moon" />
    </label>
    <em>Enable Dark Mode!</em>
  </div>
  <section className="osahan-main-body pb-5">
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center vh-100">
        <div className="landing-page shadow-sm bg-success col-lg-6">
          <Link className="position-absolute btn-sm btn btn-outline-light m-4 zindex" >Skip <i className="icofont-bubble-right" /></Link> 
          <div className="osahan-slider m-0">
            <div className="osahan-slider-item text-center">
              <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
                <i className="icofont-sale-discount display-1 text-warning" />
                <h4 className="my-4 text-white">Best Prices &amp; Offers</h4>
                <p className="text-center text-white-50 mb-5 px-4">Cheaper prices than your local<br />supermarket, great cashback offers to top it off.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pl-lg-5">
          <div className="osahan-signup shadow bg-white p-4 rounded">
            <div className="p-3">
              <h2 className="my-0">Let's get started</h2>
              <p className="small mb-4">Create account to see our top picks for you!</p>
              <form>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input placeholder="Enter Name" type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone Number</label>
                  <input placeholder="Enter Phone Number" type="number" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input placeholder="Enter Email" type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input placeholder="Enter Password" type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Confirmation Password</label>
                  <input placeholder="Enter Confirmation Password" type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success rounded btn-lg btn-block">Create Account</button>
              </form>
              <p className="text-muted text-center small py-2 m-0">or</p>
              <Link  className="btn btn-dark btn-block rounded btn-lg btn-apple">
                <i className="icofont-brand-apple mr-2" /> Sign up with Apple
              </Link>
              <Link  className="btn btn-light border btn-block rounded btn-lg btn-google">
                <i className="icofont-google-plus text-danger mr-2" /> Sign up with Google
              </Link>
              <p className="text-center mt-3 mb-0"><Link className="text-dark">Already have an account! Sign in</Link></p>
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

export default SignUp