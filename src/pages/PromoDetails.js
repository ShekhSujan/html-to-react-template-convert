import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

const PromoDetails = () => {
  return (
   
  <div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Promo details</li>
      </ol>
    </div>
  </nav>
  <section className="py-4 osahan-main-body">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="bg-success rounded shadow-sm text-center p-2">
            <div className="bg-white rounded shadow-sm p-4 mb-3">
              <img src="img/promos/p1.png" className="img-fluid" />
            </div>
            <img className="p-osahan-logo" src="img/logo.svg" />
            <h5 className="mt-2 mb-1 text-white">Grocery</h5>
            <div className="pt-3">
              <p className="btn btn-warning btn-lg btn-block mb-0"><i className="icofont-tag mr-1" /> OSAHAN50 OFF</p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="osahan-promo overflow-hidden rounded shadow-sm bg-white">
            <div className="promo_detail">
              <div className="title p-3 bg-white shadow-sm d-flex align-items-center">
                <div className="title">
                  <h5 className="font-weight-bold text-success">Get 25% off buying Banana</h5>
                  <p className="small text-muted m-0">Available until 24 July 2020</p>
                </div>
                <div className="ml-auto">
                  <Link to="" className="btn btn-lg btn-danger bg-danger px-5 border-0">Buy Now</Link>
                </div>
              </div>
              <div className="p-3 bg-light">
                <p className="font-weight-bold mb-2">Highlights</p>
                <p className="small m-0">Enjoy free delivery every buy long bread, only at New York. Thank You for choosing Grocery 😊</p>
              </div>
              <div className="p-3">
                <p className="font-weight-bold mb-2">Terms $ Conditions</p>
                <ul className="pl-3 mb-0">
                  <li className="text-muted">Easypromos only uses detials of its users to facilitate the successful operation of the promotions.<br />Easypromos will never utilize detials of registered users for any other reason.
                  </li>
                  <li className="text-muted">Easypromos cannot be held responsible for the prizes, products or services offered to useres thorugh the promotions.</li>
                  <li className="text-muted">Easypromos cannot be held responsible for the prizes, products or services offered to useres thorugh the promotions.</li>
                  <li className="text-muted">Easypromos only uses detials of its users to facilitate the successful operation of the promotions.<br />Easypromos will never utilize detials of registered users for any other reason.
                  </li>
                  <li className="text-muted">Easypromos cannot be held responsible for the prizes, products or services offered to useres thorugh the promotions.</li>
                </ul>
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

export default PromoDetails