import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Authen from "../views/public/authentication/Authen";
import MainUser from "../views/private/users/MainUser";
import FormUser from "../views/private/users/FormUser";
import MainProject from "../views/private/project/MainProject"
import FormProject from "../views/private/project/FormProject";
import MainPlaining from "../views/private/plaining/MainPlaining";
import FormPlaining from "../views/private/plaining/FormPlaining";
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
            <Route exact path="/Authentication" component={Authen} />
            <Route path="/MainUser" component={MainUser} />
            <Route path="/MainUser/FormUser" component={FormUser} />
            <Route path="/MainProject" component={MainProject} />
            <Route path="/Project/FormProject" component={FormProject} />
            <Route path="/MainPlaining" component={MainPlaining} />
            <Route path="/MainPlaining/FormPlaining" component={FormPlaining} />
          </Switch>
        </div>
      </section>
      <Footer />
    </div>
  );
}
