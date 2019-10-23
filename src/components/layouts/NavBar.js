import React from 'react'


const NavBar =(props) => {
        return (
            <nav>
            <div className="nav-wrapper">
              <a href="https://here" className="brand-logo left">
              &nbsp; <i className="fa fa-github"></i>
              {props.title}</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="badges.html">About</a></li>
                <li><a href="collapsible.html">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        );
}
NavBar.defaultProps={
  title:"oxTrust"
}

export default NavBar
