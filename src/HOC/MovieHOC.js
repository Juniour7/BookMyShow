import React from "react";
import { Route } from "react-router-dom";

//Transforms component into another component
//Adding additional functionalities to the existing components.

//Layouts
import MovieLayout from "../layouts/Movielayout";

export const MovieHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
    <Route>
    component = {(props) => (
      <MovieLayout>
       <Component {...props} />
      </MovieLayout>
    )}
    </Route>
    </>
  );
};

export default MovieHOC;