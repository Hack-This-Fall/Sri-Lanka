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
import ReactDOM from "react-dom/client";
import "./base/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
