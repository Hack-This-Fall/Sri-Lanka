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

const StatsSection = () => {
  return (
    <section className="base-section stats-section">
      {/* Note: @Suvink: The color of this subtitle is overridden */}
      <h2 className="subtitle is-2">Hack This Fall 2024 in Numbers</h2>
      <div className="stats-holder">
        <div className="stats-item">
          <h3 className="title is-3">1000+</h3>
          <p className="subtitle is-5">Participants</p>
        </div>
        <div className="stats-item">
          <h3 className="title is-3">100+</h3>
          <p className="subtitle is-5">Mentors</p>
        </div>
        <div className="stats-item">
          <h3 className="title is-3">50+</h3>
          <p className="subtitle is-5">Workshops</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
