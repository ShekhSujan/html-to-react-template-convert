import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Condition = () => {
  return (

      <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link to="/" className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Terms &amp; Conditions</li>
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
              <p className="small text-muted m-0"><Link  className="__cf_email__" data-cfemail="93faf2fefce0f2fbf2fdd3f4fef2faffbdf0fcfe">[email&nbsp;protected]</Link></p>
            </div>
            <div className="account-sections">
              <ul className="list-group">
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-user osahan-icofont bg-danger" />My Account
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-sale-discount osahan-icofont bg-success" />Promos
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-address-book osahan-icofont bg-dark" />My Address
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-info-circle osahan-icofont bg-primary" />Terms, Privacy &amp; Policy
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-warning" />Help &amp; Support
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-success" />Ticket
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link  className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex  align-items-center p-3">
                    <i className="icofont-lock osahan-icofont bg-danger" /> Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
          <h4 className="mb-4 profile-title">Terms &amp; Conditions</h4>
          <div id="terms_conditions">
            <p className="text-muted">Grocery may give refunds for some item purchases, depending on the refund policies. You can also contact us directly.<br /><br />If a purchase was accidentally made by a friend or family member using your account, request a refund on the grocery website.<br /><br /> If you find a grocery purchase on your card or other payment method that you did'nt make and that wasn't made by anyone you know, report unauthorized charges within 120 days of the transaction.<br /><br />If you've had a refund request accepted, check how long your refund will take.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
 <Nav/>
</div>

  )
}

export default Condition