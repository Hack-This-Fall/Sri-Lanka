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
import ColorSpacer from "../ColorSpacer";
import SigiriyaLong from "../../assets/images/sigiriyaLong.png";
import SigiriyaShort from "../../assets/images/sigiriyaShort.png";
import ImageContainer from "../ImageContainer";

const HistorySection = () => {
  return (
    <section className="base-section history-section">
      <SectionHeader
        number={2}
        title="A Sneak Peak into \n Our Humble Beginnings"
        subtitle="Get to know us better"
        highlightWord="Beginnings"
      />
      <div className="history-section-content mt-6">
        <div className="columns">
          <div className="column is-4 px-6">
            <div className="history-image-holder has-text-centered px-6">
              <ImageContainer src={SigiriyaLong} color="green" alt="Sigiriya, Sri Lanka" />
              <div className="mb-4"></div>
              <ImageContainer src={SigiriyaShort} color="red" alt="Sigiriya, Sri Lanka" />
            </div>
          </div>
          <div className="column">
            <ColorSpacer width="20%" />
            <h3 className="title is-3 mt-2 mb-6">It all started like this</h3>
            <p className="subtitle is-5 has-text-justified">
              Hack This Fall is among India's most welcoming, inclusive, and thriving hacker communities. It began its journey in 2020 with
              a mindset of encouraging new hackers to build unique projects regardless of the technology or field.
            </p>
            <p className="subtitle is-5 has-text-justified">
              The primary focus of Hack This Fall is to create meaningful experiences using technology and enjoy the process of building
              them while solving societal and environmental issues through the projects.
            </p>
            <p className="subtitle is-5 has-text-justified">
              We aim to help hackers succeed in their professional journey by giving them a platform to showcase their skills, network with
              like-minded individuals, learn in public, and grow together.
            </p>
            <p className="subtitle is-5 has-text-justified">
              The Hack This Fall community strongly embodies the values of inclusivity and diversity at its core and reflects these values
              across all its community events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
