import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const Search = () => {
  return (

 <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Search</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Link className="text-dark">
            <div className="d-flex align-items-center bg-white shadow-sm rounded mb-2 p-3">
              <img src="img/search/s1.jpg" className="img-fluid rounded shadow-sm mr-3" />
              <span className="font-weight-bold">
                Japan Green Apple
                <p className="small text-muted m-0">High quality Apple fresh from Japan.</p>
              </span>
            </div>
          </Link>
          <Link className="text-dark">
            <div className="d-flex align-items-center bg-white shadow-sm rounded mb-2 p-3">
              <img src="img/search/s2.jpg" className="img-fluid rounded shadow-sm mr-3" />
              <span className="font-weight-bold">
                Japan Red Apple
                <p className="small text-muted m-0">Fresh Apple Premium item from Thailand.</p>
              </span>
            </div>
          </Link>
          <Link className="text-dark">
            <div className="d-flex align-items-center bg-white shadow-sm rounded mb-2 p-3">
              <img src="img/search/s3.jpg" className="img-fluid rounded shadow-sm mr-3" />
              <span className="font-weight-bold">
                Fresh Orange
                <p className="small text-muted m-0">Orange Great Quality item from Jamaica.</p>
              </span>
            </div>
          </Link>
          <Link className="text-dark">
            <div className="d-flex align-items-center bg-white shadow-sm rounded mb-2 p-3">
              <img src="img/search/s4.jpg" className="img-fluid rounded shadow-sm mr-3" />
              <span className="font-weight-bold">
                Fresh Tomato
                <p className="small text-muted m-0">High quality Tomato from South Korea.</p>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
<Nav/>
</div>

  )
}

export default Search