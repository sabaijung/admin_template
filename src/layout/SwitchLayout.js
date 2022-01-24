import React from "react";
import { Route } from "react-router";

export default function SwitchLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props} {...rest}>
          <Component {...props} {...rest} />
        </Layout>
      )}
    />
  );
}
