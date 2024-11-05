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
import ImageContainer from "../ImageContainer";
import HackathonImage from "../../assets/images/hackathon.png";
import PeraharaImage from "../../assets/images/perahara.png";
import GroupWorkImage from "../../assets/images/groupwork.png";

const MissionSection = () => {
  return (
    <section className="base-section mission-section">
      <SectionHeader
        number={1}
        title="You and I, Making Memories \n Around the Country Together"
        subtitle="What we are trying to do"
        highlightWord="Together"
      />
      <div className="mission-section-content mt-6">
        <div className="columns">
          <div className="column is-4">
            <ColorSpacer />
            <h2 className="subtitle is-2 has-sindi-text">Namasthe Sri Lanka</h2>
            <p className="subtitle is-5 has-text-justified">
              Hailing from India, Hack This Fall is one of India’s most prominent hacker communities gathering talented, thriving, and
              relentless hackers from across the globe, setting foot on the Island of Ingenuity, Sri Lanka.
            </p>
            <p className="subtitle is-5 has-text-justified mt-6">
              Hailing from India, Hack This Fall is one of India’s most prominent hacker communities gathering talented, thriving, and
              relentless hackers from across the globe, setting foot on the Island of Ingenuity, Sri Lanka.
            </p>
          </div>
          {/* Not setting an explicit column width will make the column take up the remaining space. */}
          <div className="column px-6">
            <div className="mission-image-holder has-text-centered px-6">
              <ImageContainer src={HackathonImage} color="green" alt="Hack This Fall Hackathon" />
              <div className="columns mt-4">
                <div className="column is-half">
                  <ImageContainer src={PeraharaImage} color="red" alt="Hack This Fall Hackathon" />
                </div>
                <div className="column is-half">
                  <ImageContainer src={GroupWorkImage} color="yellow" alt="Hack This Fall Hackathon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
