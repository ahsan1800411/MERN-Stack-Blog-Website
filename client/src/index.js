import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./context/Context";

import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById("root")
);
