import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

function FooterComp(prop) {
    return <nav className="navbar bg-light">
    <div className="container-fluid">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
}

export default FooterComp;