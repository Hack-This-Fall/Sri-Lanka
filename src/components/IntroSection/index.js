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
import SectionHeader from "../SectionHeader";
import ImageContainer from "../ImageContainer";
import AyubowanImage from "../../assets/images/ayubowan.png";
import HtfLogo from "../../assets/images/logo.png";

const IntroSection = () => {
  return (
    <section className="base-section intro-section">
      <SectionHeader
        number={3}
        title="This Time, The Beautiful Island of \n Sri Lanka is ready for a change"
        subtitle="Get to know us better"
        highlightWord="Sri Lanka"
      />
      <div className="intro-section-content mt-6">
        <div className="columns">
          <div className="column is-4 px-6">
            <div className="intro-image-holder px-6">
              <ImageContainer src={AyubowanImage} color="green" alt="Ayubowan, Sri Lanka" />
            </div>
          </div>
          <div className="column">
            <div className="intro-content has-text-centered">
              <h3 className="title is-3">ආයුබෝවන් | வணக்கம்</h3>
              <figure className="image htf-logo is-justify-content-center">
                <img src={HtfLogo} alt="Hack This Fall" />
              </figure>
              <h4 className="subtitle is-4 mt-4">Hack for Today, Innovate for Tomorrow</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
