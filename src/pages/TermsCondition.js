import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const TermsCondition = () => {
  return (
  
        <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Terms &amp; Privacy</li>
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
              <p className="small text-muted m-0"><Link  className="__cf_email__" data-cfemail="82ebe3efedf1e3eae3ecc2e5efe3ebeeace1edef">[email&nbsp;protected]</Link></p>
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
                <Link className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-success" />Ticket
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex  align-items-center p-3">
                    <i className="icofont-lock osahan-icofont bg-danger" /> Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
          <h4 className="mb-4 profile-title">Terms &amp; Privacy</h4>
          <div className="help_support">
            <div className="mb-1">
              <Link  className="text-decoration-none"><button className="p-3 btn-light border d-flex align-items-center btn w-100" type="button">
                  Terms &amp; Conditions
                  <i className="text-success icofont-rounded-right ml-auto" />
                </button></Link>
            </div>
            <div className="mb-1">
              <Link  className="text-decoration-none"><button className="p-3 btn-light border d-flex align-items-center btn w-100" type="button">
                  Privacy
                  <i className="text-success icofont-rounded-right ml-auto" />
                </button></Link>
            </div>
            <div className="mb-1">
              <Link  className="text-decoration-none"><button className="p-3 btn-light border d-flex align-items-center btn w-100" type="button">
                  FAQ
                  <i className="text-success icofont-rounded-right ml-auto" />
                </button></Link>
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

export default TermsCondition