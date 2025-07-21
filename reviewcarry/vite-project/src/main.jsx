import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CarryProvider from "./components/carryprovider"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CarryProvider>
    <App />
  </CarryProvider>
);
