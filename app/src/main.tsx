import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import GlobalStyle from "./styled/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* FIXME: create theme */}
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
