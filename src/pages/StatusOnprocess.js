import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const StatusOnprocess = () => {
  return (

        <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">My order</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <ul className="nav nav-tabs custom-tabs border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <Link className="nav-link border-0 text-dark py-3" to="" role="tab">
                <i className="icofont-check-alt mr-2 text-success mb-0" /> Completed</Link>
            </li>
            <li className="nav-item border-top" role="presentation">
              <Link className="nav-link border-0 text-dark py-3 active" to="" role="tab">
                <i className="icofont-wall-clock mr-2 text-warning mb-0" /> On Progress</Link>
            </li>
            <li className="nav-item border-top" role="presentation">
              <Link className="nav-link border-0 text-dark py-3" to="" role="tab">
                <i className="icofont-close-line mr-2 text-danger mb-0" /> Canceled</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <section className="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
            <div className="container-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-status">
                    <div className="p-3 status-order border-bottom bg-white">
                      <p className="small m-0"><i className="icofont-ui-calendar" /> 16 June, 11:30AM</p>
                    </div>
                    <div className="p-3 border-bottom">
                      <h6 className="font-weight-bold">Order Status</h6>
                      <div className="tracking-wrap">
                        <div className="my-1 step active">
                          <span className="icon text-success"><i className="icofont-check-circled" /></span>
                          <span className="text small">Preparing order</span>
                        </div>
                        <div className="my-1 step active">
                          <span className="icon text-danger"><i className="icofont-close-circled" /></span>
                          <span className="text small">Ready to collect</span>
                        </div>
                        <div className="my-1 step">
                          <span className="icon text-danger"><i className="icofont-close-circled" /></span>
                          <span className="text small">On the way </span>
                        </div>
                        <div className="my-1 step">
                          <span className="icon text-danger"><i className="icofont-close-circled" /></span>
                          <span className="text small">Delivered Order</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom bg-white">
                      <h6 className="font-weight-bold">Destination</h6>
                      <p className="m-0 small">554 West 142nd Street, New York, NY 10031</p>
                    </div>
                    <div className="p-3 border-bottom">
                      <p className="font-weight-bold small mb-1">Courier</p>
                      <img src="img/logo.svg" className="img-fluid sc-osahan-logo mr-2" /> <span className="small text-success font-weight-bold">Grocery Courier
                      </span>
                    </div>
                    <div className="p-3 border-bottom bg-white">
                      <div className="d-flex align-items-center mb-2">
                        <h6 className="font-weight-bold mb-1">Total Cost</h6>
                        <h6 className="font-weight-bold ml-auto mb-1">$8.52</h6>
                      </div>
                      <p className="m-0 small text-muted">You can check your order detail here,<br />Thank you for order.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
<Nav/>
</div>

 
  )
}

export default StatusOnprocess