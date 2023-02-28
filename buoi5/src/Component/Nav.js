import React, { Component } from 'react'
import { Routes,Route,Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">React-Router</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/about">Giới thiệu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/product">Dự án</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
  }
}
