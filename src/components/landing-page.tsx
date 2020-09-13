import React from "react"
import "./static/css/landing-page.scss"
import { Image } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div id="landing-page" className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">Punny headline</h1>
        <p className="lead font-weight-normal">

        </p>
        <a className="btn btn-outline-secondary" href="#">

        </a>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  )
}

export default LandingPage
