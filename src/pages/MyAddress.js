import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const MyAddress = () => {
  return (
    <div>
      <div>
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
              <p className="small text-muted m-0"><Link >[email&nbsp;protected]</Link></p>
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
                    <p className="pt-2 m-0 text-right"><span className="small"><Link href="#" data-toggle="modal" data-target="#exampleModal" className="text-decoration-none text-success"><i className="icofont-edit" /> Edit</Link></span>
                      <span className="small ml-3"><Link href="#" data-toggle="modal" data-target="#Delete" className="text-decoration-none text-danger"><i className="icofont-trash" /> Delete</Link></span>
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
                    <p className="pt-2 m-0 text-right"><span className="small"><Link href="#" data-toggle="modal" data-target="#exampleModal" className="text-decoration-none text-success"><i className="icofont-edit" /> Edit</Link></span>
                      <span className="small ml-3"><Link href="#" data-toggle="modal" data-target="#Delete" className="text-decoration-none text-danger"><i className="icofont-trash" /> Delete</Link></span>
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

    </div>
  )
}

export default MyAddress