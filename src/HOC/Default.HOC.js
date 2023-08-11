// Transforms component into another component
// Adding additional functionalities to the existing components.

import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";

export const DefaultHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
      <DefaultLayout />
    </>
  );
};

export default DefaultHOC;