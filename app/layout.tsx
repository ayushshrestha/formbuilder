import React from "react";
import ReactDOM from "react-dom";
import Page from "./page";
import { AuthProvider } from "./provider/AuthProvider";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
