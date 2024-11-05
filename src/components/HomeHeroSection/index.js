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
import React from "react";
import "./index.css";
import NavBar from "../NavBar";
import welcomeTextImage from "../../assets/images/welcomeText.png";
import mapImage from "../../assets/images/map.png";

const HomeHeroSection = () => {
  return (
    <section className="hero is-fullheight hero-section">
      <NavBar />
      <div className="hero-body">
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <div className="has-text-centered">
              <img className="welcome-image" src={welcomeTextImage} alt="Hack This Fall" />
              <button className="button is-large is-gradient-button">Get Started</button>
            </div>
          </div>
          <div className="column is-3">
            <img className="map-image" src={mapImage} alt="Sri Lanka Map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
