import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes/Routes";
import SwitchRoute from "./layout/SwitchLayout";
import { nanoid } from "nanoid";
import "./style/tailwind.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {Routes.filter(
            (a) =>
              a.role ===
              (this.props.auth.users && this.props.auth.users !== "undefined"
                ? 1
                : 0)
          ).map((prop) => {
            return (
              <SwitchRoute
                exact
                path={prop.path}
                component={prop.component}
                layout={prop.layout}
                key={nanoid()}
                {...this.props}
                pathNameTH={prop.name}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.Authentication,
});

export default connect(mapStateToProps)(App);
