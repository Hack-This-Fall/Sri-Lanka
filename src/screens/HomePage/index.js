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
import MissionSection from "../../components/MissionSection";
import HistorySection from "../../components/HistorySection";
import StatsSection from "../../components/StatsSection";
import IntroSection from "../../components/IntroSection";
import DiscordSection from "../../components/DiscordSection";
import EventsSection from "../../components/EventsSection";
import HomeHeroSection from "../../components/HomeHeroSection";

const HomePage = () => {
  return (
    <div>
      {/* Content padding is not applicable for the hero */}
      <HomeHeroSection />
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-10 px-6">
          <MissionSection />
          <HistorySection />
          <StatsSection />
          <IntroSection />
          <DiscordSection />
          <EventsSection />
        </div>
        <div className="column is-1"></div>
      </div>
    </div>
  );
};

export default HomePage;
