import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EbookProvider } from "./hooks/useEbook";

ReactDOM.createRoot(document.getElementById("root")).render(
  <EbookProvider>
    <App />
  </EbookProvider>
);
