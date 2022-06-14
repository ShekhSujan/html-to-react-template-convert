import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Faq = () => {
  return (

        <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
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
              <p className="small text-muted m-0"><Link className="__cf_email__" data-cfemail="">[email&nbsp;protected]</Link></p>
            </div>
            <div className="account-sections">
              <ul className="list-group">
                <Link className="text-decoration-none text-dark">
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
          <h4 className="mb-4 profile-title">FAQ - Basics</h4>
          <div id="basics">
            <div id="basicsAccordion">
              <div className="box border rounded mb-1 bg-white">
                <div id="basicsHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex align-items-center justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                      Do you have any built-in caching? <i className="icofont-simple-down" />
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseOne" className="collapse show" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion" style={{}}>
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                  </div>
                </div>
              </div>
              <div className="box border rounded mb-1 bg-white">
                <div id="basicsHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex align-items-center justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                      Can I add/upgrade my plan at any time? <i className="icofont-simple-down" />
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseTwo" className="collapse" aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion" style={{}}>
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                  </div>
                </div>
              </div>
              <div className="box border rounded mb-1 bg-white">
                <div id="basicsHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex align-items-center justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseThree" aria-expanded="false" aria-controls="basicsCollapseThree">
                      What access comes with hosting plan? <i className="icofont-simple-down" />
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseThree" className="collapse" aria-labelledby="basicsHeadingThree" data-parent="#basicsAccordion" style={{}}>
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
                  </div>
                </div>
              </div>
              <div className="box border rounded mb-1 mb-2 bg-white">
                <div id="basicsHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex align-items-center justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                      How do I change my password? <i className="icofont-simple-down" />
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseFour" className="collapse" aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid ...
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

export default Faq