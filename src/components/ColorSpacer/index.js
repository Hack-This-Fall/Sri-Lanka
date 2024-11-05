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

const ColorSpacer = ({ width }) => {
  return (
    <span className="color-spacer-parent" style={{ width: width }}>
      <span className="color-spacer color-spacer-red"></span>
      <span className="color-spacer color-spacer-green"></span>
      <span className="color-spacer color-spacer-yellow"></span>
    </span>
  );
};

ColorSpacer.propTypes = {
  width: PropTypes.string,
};

export default ColorSpacer;
