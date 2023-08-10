import React from "react";

//components
import MovieNavBar from "../components/Navbar/movienavbar.component";

const MovieLayout = (props) => {
    return (
        <>
            <MovieNavBar />
            {props.children}
        </>
    )
};

export default MovieLayout;