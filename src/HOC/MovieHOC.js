import React from "react";


//Transforms component into another component
//Adding additional functionalities to the existing components.

//Layouts
import MovieLayout from "../layouts/Movielayout";

export const MovieHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
      <MovieLayout />
    </>
  );
};

export default MovieHOC;