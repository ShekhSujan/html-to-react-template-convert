import React from 'react'
import { Link } from 'react-router-dom'
import Nav from "../components/Nav";
const Successfull = () => {
  return (

<div>
  <nav aria-label="breadcrumb" className="breadcrumb mb-0">
    <div className="container">
      <ol className="d-flex align-items-center mb-0 p-0">
        <li className="breadcrumb-item"><Link className="text-success">Home</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Successful</li>
      </ol>
    </div>
  </nav>
  <div className="row d-flex justify-content-center">
    <div className="col-md-6">
      <div className="p-5 text-center">
        <i className="icofont-check-circled display-1 text-warning" />
        <h1 className="text-white font-weight-bold">Osahan, Your order has been successful 🎉</h1>
        <p className="text-white">Check your order status in <Link to='/' className="font-weight-bold text-decoration-none text-white">My Order</Link> about next steps information.</p>
      </div>
      <div className="bg-white rounded p-3 m-5 text-center">
        <h6 className="font-weight-bold mb-2">Preparing your order</h6>
        <p className="small text-muted">Your order will be prepared and will come soon</p>
        <Link className="btn rounded btn-warning btn-lg btn-block">Track My Order</Link>
      </div>
    </div>
  </div>
 <Nav/>
</div>


  )
}

export default Successfull