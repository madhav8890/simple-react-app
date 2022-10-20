import React from 'react'
import PropTypes from 'prop-types'

export default function Nevbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg bg-${props.mode} bg-opacity-75 bg-gradient `}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand  mx-3 me-2 rounded fs-2" href="/">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link border border-primary mx-3 me-2 rounded text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href='/'>
                  Home 
                  </a>    
                </li>
              
              <li className="nav-item">
                <a className={`nav-link border border-primary mx-3 me-2 rounded text-${props.mode==='light'?'dark':'light'}`} href="/">
                {props.title2}
                </a>
                </li>
              
              <li className="nav-item">
                <a className={`nav-link border border-primary mx-3 me-2 rounded text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title3}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search" 
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="form-check form-switch mx-3 text-light">
              <input className="form-check-input" type="checkbox" onClick={props.taggelmode}  role="switch" id="flexSwitchCheckDefault"/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Nevbar.propTypes = {
    title : PropTypes.string.isRequired,
    title2 : PropTypes.string.isRequired,
}

Nevbar.defaultProps = {
    title : "Mp",
    title2 : "about",
    
}
