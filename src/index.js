// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// //import store from './stores/Store';
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <Provider>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/tailwind.css";
import PrivateLayout from "./layout/PrivateLayout";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivateLayout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
