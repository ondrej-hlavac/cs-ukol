import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import GlobalStyle from "./styled/globalStyles.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* FIXME: create theme */}
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
