import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ Layout, component, ...routeProps }, key) => {
        const routeElement = Layout ? (
          <Layout>{React.createElement(component)}</Layout>
        ) : (
          React.createElement(component)
        );
        return <Route {...routeProps} key={key} element={routeElement} />;
      })}
    </Routes>
  );
};

export default Router;
