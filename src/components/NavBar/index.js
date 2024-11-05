/*
 * Copyright (c) 2024, Hack This Fall Sri Lanka. (https://hackthisfall.tech/). All Rights Reserved.
 *
 * This software is the property of Hack This Fall Sri Lanka. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein is strictly forbidden, unless permitted by Hack This Fall in accordance with
 * the Hack This Fall Commercial License available at https://hackthisfall.tech/coc.
 * For specific language governing the permissions and limitations under
 * this license, please see the license as well as any agreement you’ve
 * entered into with Hack This Fall governing the purchase of this software and any
 * associated services.
 */

// Note: @Suvink: Disabling due to Bulma's default behaviour of using anchor tags without hrefs.
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import HTFLogo from "../../assets/images/logo.png";
import "./index.css";

const NavBar = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={HTFLogo} alt="Hack This Fall" />
        </a>
        <a
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="site-navbar"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={() => {
            setisActive(!isActive);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="site-navbar" className={`navbar-menu ${isActive ? "is-active" : ""} px-5`}>
        <div className="navbar-end">
          <a className="navbar-item">Our Mission</a>
          <a className="navbar-item">About Us</a>
          <a className="navbar-item">Community</a>
          <a className="navbar-item">Join Us</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
