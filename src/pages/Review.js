import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav';
const Review = () => {
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
              <Link className="nav-link border-0 text-dark py-3 active" to="" role="tab">
                <i className="icofont-check-alt mr-2 text-success mb-0" /> Completed</Link>
            </li>
            <li className="nav-item border-top" role="presentation">
              <Link className="nav-link border-0 text-dark py-3" to="" role="tab">
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
                  <div className="my-5 py-5 px-3 text-center">
                    <h4>Rate your order experience</h4>
                    <p>24 July 2020</p>
                    <div className="p-2">
                      <p className="text-muted">Give me what you feel after you finish your order</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <form>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                          <label className="btn btn-outline-success active btn-lg">
                            <input type="radio" name="options" id="option1" defaultChecked /> <i className="icofont-sad" />
                          </label>
                          <label className="btn btn-outline-success btn-lg">
                            <input type="radio" name="options" id="option2" /> <i className="icofont-expressionless" />
                          </label>
                          <label className="btn btn-outline-success btn-lg">
                            <input type="radio" name="options" id="option3" /> <i className="icofont-heart-eyes font-weight-bold" />
                          </label>
                        </div>
                        <Link href="status_complete.html" className="btn btn-success mt-3 btn-block">Submit</Link>
                      </form>
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

export default Review