import React from 'react'

const Nav = () => {
  return (
    <div>
    <nav id="main-nav">
      <ul classname="second-nav">
        <li><link to="/" /><i classname="icofont-smart-phone mr-2"> Home</i></li><i classname="icofont-smart-phone mr-2">
          <li>
            <link /><i classname="icofont-login mr-2"> Authentication
              <ul>
                <li><link classname="dropdown-item" to="/signin" />Sign In</li>
                <li><link classname="dropdown-item" to="/signup" />Sign Up</li>
                <li><link to="/verification" />Verification</li>
              </ul>
            </i></li><i classname="icofont-login mr-2">
            <li><link classname="dropdown-item" to="/listing" />Listing</li>
            <li><link classname="dropdown-item" to="/product-details" />Detail</li>
            <li><link classname="dropdown-item" to="/trending" />Trending</li>
            <li><link classname="dropdown-item" to="/recomended" />Recommended</li>
            <li><link classname="dropdown-item" to="/popular" />Most Popular</li>
            <li><link classname="dropdown-item" to="/cart" />Cart</li>
            <li><link classname="dropdown-item" to="/checkout" />Checkout</li>
            <li><link classname="dropdown-item" to="/successfull" />Successful</li>
            <li>
              <link /><i classname="icofont-sub-listing mr-2"> My Order
                <ul>
                  <li><link classname="dropdown-item" to="/my-order" />My order</li>
                  <li><link classname="dropdown-item" to="/status-complete" />Status Complete</li>
                  <li><link classname="dropdown-item" to="/status-onprocess" />Status on Process</li>
                  <li><link classname="dropdown-item" to="/status-canceled" />Status Canceled</li>
                  <li><link classname="dropdown-item" to="/review" />Review</li>
                </ul>
              </i></li><i classname="icofont-sub-listing mr-2">
              <li>
                <link /><i classname="icofont-ui-user mr-2"> My Account
                  <ul>
                    <li><link classname="dropdown-item" to="/myaccount" />My account</li>
                    <li><link classname="dropdown-item" to="/promos" />Promos</li>
                    <li><link classname="dropdown-item" to="/myaddress" />My address</li>
                    <li><link classname="dropdown-item" to="/terms-condition" />Terms &amp; conditions</li>
                    <li><link classname="dropdown-item" to="/help" />Help &amp; support</li>
                    <li><link classname="dropdown-item" to="/ticket" />Help ticket</li>
                    <li><link classname="dropdown-item" to="/signin" />Logout</li>
                  </ul>
                </i></li><i classname="icofont-ui-user mr-2">
                <li>
                  <link /><i classname="icofont-page mr-2"> Pages
                    <ul>
                      <li><link classname="dropdown-item" to="/verification" />Verification</li>
                      <li><link classname="dropdown-item" to="/promos" />Promos</li>
                      <li><link classname="dropdown-item" to="/product-details" />Promo Details</li>
                      <li><link classname="dropdown-item" to="/terms-condition" />Terms &amp; Conditions</li>
                      <li><link classname="dropdown-item" to="/privacy" />Privacy</li>
                      <li><link classname="dropdown-item" to="/condition" />Conditions</li>
                      <li><link classname="dropdown-item" to="/help" />Help Support</li>
                      <li><link classname="dropdown-item" to="/ticket" />Help Ticket</li>
                      <li><link classname="dropdown-item" to="/refund" />Refund Payment</li>
                      <li><link classname="dropdown-item" to="/faq" />FAQ</li>
                      <li><link classname="dropdown-item" to="/signin" />Sign In</li>
                      <li><link classname="dropdown-item" to="/signup" />Sign Up</li>
                      <li><link classname="dropdown-item" to="/search" />Search</li>
                    </ul>
                  </i></li><i classname="icofont-page mr-2">
                  <li>
                    <link /><i classname="icofont-link mr-2"> Navigation Link Example
                      <ul>
                        <li>
                          <link />Link Example 1
                          <ul>
                            <li>
                              <link />Link Example 1.1
                              <ul>
                                <li><link />Link</li>
                                <li><link />Link</li>
                                <li><link />Link</li>
                                <li><link />Link</li>
                                <li><link />Link</li>
                              </ul>
                            </li>
                            <li>
                              <link />Link Example 1.2
                              <ul>
                                <li><link />Link</li>
                                <li><link />Link</li>
                                <li><link />Link</li>
                                <li><link />Link</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li><link />Link Example 2</li>
                        <li><link />Link Example 3</li>
                        <li><link />Link Example 4</li>
                        <li data-nav-custom-content>
                          <div classname="custom-message">
                            You can add any custom content to your navigation items. This text is just an example.
                          </div>
                        </li>
                      </ul>
                    </i></li><i classname="icofont-link mr-2">
                  </i></i></i></i></i></i></ul><i classname="icofont-smart-phone mr-2"><i classname="icofont-login mr-2"><i classname="icofont-sub-listing mr-2"><i classname="icofont-ui-user mr-2"><i classname="icofont-page mr-2"><i classname="icofont-link mr-2">
                  <ul classname="bottom-nav">
                    <li classname="email">
                      <link classname="text-success"  />
                      <p classname="h5 m-0"><i classname="icofont-home text-success" /></p><i classname="icofont-home text-success">
                        Home
                      </i></li><i classname="icofont-home text-success">
                      <li classname="github">
                        <link  />
                        <p classname="h5 m-0"><i classname="icofont-cart" /></p><i classname="icofont-cart">
                          CART
                        </i></li><i classname="icofont-cart">
                        <li classname="ko-fi">
                          <link to="/ticket" />
                          <p classname="h5 m-0"><i classname="icofont-headphone" /></p><i classname="icofont-headphone">
                            Help
                          </i></li><i classname="icofont-headphone">
                        </i></i></i></ul><i classname="icofont-home text-success"><i classname="icofont-cart"><i classname="icofont-headphone">
                      </i></i></i></i></i></i></i></i></i></nav><i classname="icofont-smart-phone mr-2"><i classname="icofont-login mr-2"><i classname="icofont-sub-listing mr-2"><i classname="icofont-ui-user mr-2"><i classname="icofont-page mr-2"><i classname="icofont-link mr-2"><i classname="icofont-home text-success"><i classname="icofont-cart"><i classname="icofont-headphone">
                    </i></i></i></i></i></i></i></i></i></div>
  
  )
}

export default Nav