import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function PrivateLayout({ children, pathNameTH, path }) {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <section className="section main-section">
        <div
          style={{ minHeight: "calc(120vh - 300px)" }}
          className="p-4 break-words bg-white rounded-md shadow-xl"
        >
          {children}
          {/* <Switch>
            <Route exact path="/Authentication" component={Authen} /> 
            <Route exact path="/MainUser" component={MainUser} />
            <Route path="/MainUser/FormUser" component={FormUser} />
             <Route path="/MainProject" component={MainProject} />
            <Route path="/Project/FormProject" component={FormProject} /> 
            <Route path="/MainPlaining" component={MainPlaining} />
            <Route path="/MainPlaining/FormPlaining" component={FormPlaining} /> 
          </Switch> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

