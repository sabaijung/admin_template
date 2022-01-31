import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MainUser from "../views/private/users/MainUser";
import FormUser from "../views/private/users/FormUser";
import { Route, Switch } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <section className="section main-section">
        <div
          style={{ minHeight: "calc(120vh - 300px)" }}
          className="p-4 break-words bg-white rounded-md shadow-xl"
        >
          <Switch>
            <Route exact path="/" component={MainUser} />
            <Route path="/MainUser/FormUser" component={FormUser} />
          </Switch>
          {/* <MainUser /> */}
          {/* {children} */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
