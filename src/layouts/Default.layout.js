import React from "react";

//components
import NavBar from "../components/Navbar/navabar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (props) => {
    return (
        <>
            <NavBar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;