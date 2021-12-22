import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            exact
          >
            <h3 className="display-6">Welcome To Code Review Shop</h3>
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-center">
            <li>
              <Link to="/" className="nav-link text-white" exact>
                <i className="bi d-block mx-auto mb-1 bi bi-house-fill navbar__icon"></i>
                Home
              </Link>
            </li>
            <li>
              <Link to="/orders" className="nav-link text-white">
                <i className="bi d-block mx-auto mb-1 bi bi-table navbar__icon"></i>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link text-white">
                <i className="bi d-block mx-auto mb-1 bi bi-cart-fill navbar__icon"></i>
                Services
              </Link>
            </li>
            <li>
              <Link to="/community" className="nav-link text-white">
                <i className="bi d-block mx-auto mb-1 bi bi-people-fill navbar__icon"></i>
                Community
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link text-white">
                <i className="bi d-block mx-auto mb-1 bi bi-info-circle navbar__icon"></i>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;