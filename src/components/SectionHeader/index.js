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
import PropTypes from "prop-types";
import "./index.css";

const SectionHeader = ({ number, title, subtitle, highlightWord }) => {
  // Note: @Suvink: Splitting with an additional \ to handle String escaping
  const titleLines = title.split("\\n");
  console.log(titleLines);
  const applyHighlighting = (text) => {
    const titleFragments = text.split(new RegExp(`(${highlightWord})`, "gi"));
    return titleFragments.map((fragment, index) =>
      fragment.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={index} className="highlighted-word">
          {fragment}
        </span>
      ) : (
        fragment
      )
    );
  };

  return (
    <div className="section-header">
      <div className="columns">
        <div className="column is-one-third">
          <div className="header-column-content has-text-centered">
            <h6 className="subtitle is-6 section-header-subtitle mb-1">{subtitle}</h6>
            <div className="pagination-items">
              {/* Note: @Suvink: Prepending 0 as React doesnt allow having octals in the code */}
              <h3 className="title is-3 is-bold mb-0">0{number}</h3>
              <span className="pagination-separator"></span>
              <h3 className="subtitle is-3">05</h3>
            </div>
          </div>
        </div>
        <div className="column is-two-thirds">
          <div className="header-column-content has-text-centered">
            {titleLines.map((line, index) => (
              <h2 className="title is-2 mb-0" key={index}>
                {applyHighlighting(line)}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  highlightWord: PropTypes.string.isRequired,
};

export default SectionHeader;
