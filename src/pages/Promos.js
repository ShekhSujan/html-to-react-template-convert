import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Promos = () => {
  return (

        <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link to="/" className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Promos</li>
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
              <p className="small text-muted m-0"><Link className="">[email&nbsp;protected]</Link></p>
            </div>
            <div className="account-sections">
              <ul className="list-group">
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-user osahan-icofont bg-danger" />My Account
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-sale-discount osahan-icofont bg-success" />Promos
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-address-book osahan-icofont bg-dark" />My Address
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-info-circle osahan-icofont bg-primary" />Terms, Privacy &amp; Policy
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-warning" />Help &amp; Support
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex align-items-center p-3">
                    <i className="icofont-phone osahan-icofont bg-success" />Ticket
                    <span className="badge badge-success p-1 badge-pill ml-auto"><i className="icofont-simple-right" /></span>
                  </li>
                </Link>
                <Link to="" className="text-decoration-none text-dark">
                  <li className="border-bottom bg-white d-flex  align-items-center p-3">
                    <i className="icofont-lock osahan-icofont bg-danger" /> Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
          <div className="osahan-promos">
            <h4 className="mb-4 profile-title">Avaiable Promos</h4>
            <div className="pb-3">
              <Link to="" className="text-decoration-none text-white my-3">
              </Link><div className="rounded bg-success shadow-sm p-3 text-white"><Link to="" className="text-decoration-none text-white my-3">
                </Link><div className="row align-items-center"><Link to="" className="text-decoration-none text-white my-3">
                  </Link><div className="col-9"><Link to="" className="text-decoration-none text-white my-3">
                      <div className="d-flex align-items-center">
                        <img className="pp-osahan-logo" src="img/logo.svg" />
                        <div className="brand ml-2">
                          <h5 className="m-0">Grocery</h5>
                        </div>
                      </div>
                      <div className="mt-2 mb-3">
                        <p className="text-white m-0">BANANA'S 25% OFF</p>
                      </div>
                    </Link><Link to="" className="btn btn-outline-light btn-sm"><i className="icofont-sale-discount" /> CHECK NOW</Link>
                </div>
                  <div className="col-3 text-center">
                    <Link to=""><img src="img/promos/p1.png" className="img-fluid" /></Link>
               </div>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <Link to="" className="text-decoration-none text-white">
              </Link><div className="rounded bg-info shadow-sm p-3 text-white"><Link to="" className="text-decoration-none text-white">
                </Link><div className="row align-items-center"><Link to="" className="text-decoration-none text-white">
                  </Link><div className="col-9"><Link to="" className="text-decoration-none text-white">
                      <div className="d-flex align-items-center">
                        <img className="pp-osahan-logo" src="img/logo.svg" />
                        <div className="brand ml-2">
                          <h5 className="m-0">Grocery</h5>
                        </div>
                      </div>
                      <div className="mt-2 mb-3">
                        <p className="text-white m-0">FREE LETTUCE ON EVERY PURCHASE</p>
                      </div>
                    </Link><Link to="" className="btn btn-outline-light btn-sm"><i className="icofont-sale-discount" /> CHECK NOW</Link>
               </div>
                  <div className="col-3 text-center">
                    <Link to=""><img src="img/promos/p2.png" className="img-fluid" /></Link>
            </div>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <Link to="" className="text-decoration-none text-white">
              </Link><div className="rounded bg-danger shadow-sm p-3 text-white"><Link to="" className="text-decoration-none text-white">
                </Link><div className="row align-items-center"><Link to="" className="text-decoration-none text-white">
                  </Link><div className="col-9"><Link to="" className="text-decoration-none text-white">
                      <div className="d-flex align-items-center">
                        <img className="pp-osahan-logo" src="img/logo.svg" />
                        <div className="brand ml-2">
                          <h5 className="m-0">Grocery</h5>
                        </div>
                      </div>
                      <div className="mt-2 mb-3">
                        <p className="text-white m-0">FREE DELIVERY ON BUY BREAD</p>
                      </div>
                    </Link><Link to="" className="btn btn-light btn-sm"><i className="icofont-sale-discount" /> CHECK NOW</Link>
               </div>
                  <div className="col-3 text-center">
                    <Link to=""><img src="img/promos/p3.png" className="img-fluid" /></Link>
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

export default Promos