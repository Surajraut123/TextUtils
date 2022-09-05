import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">

            {/* We Passing a props over here */}
            {/* While clicking on textutils that time age is reloading i.e we used here link - to */}
            <a className="navbar-brand" href="#">{props.title}</a>

            {/* while deploying app in github pages */}
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* //Now here for switching the pages of Home and About we need to use Link - to  */}
                        <a className="nav-link active" aria-current="page" href="#">Home</a>

                        {/* while deploying app in github pages */}
                        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                    </li>

                    {/* while deploying app in github pages */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li> */}
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                <div className={`form-check form-switch text-${props.mode==='dark'? 'light' : '#01132e'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
 
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string
}

// If we not pass propTypes then use this default

Navbar.defaultProps = {
    title: "Set title",
    aboutText : "Set About"
}
