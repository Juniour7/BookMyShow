import React from "react";

//components
import NavBar from "../Navbar/navabar.component";

const MovieHero = () => {
    return (
        <>
            <NavBar />
            <div className="md:hidden ">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg" 
                    alt="poster"
                    className="" />
            </div>
            <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg" 
                    alt="poster"
                    className="" />
            </div>
            <div className="relative hidden lg:block" style={{height: "32rem"}}>
                <div className="absolute h-full w-full z-10"
                style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
                />
                <div className=" absolute z-30 w-56 h-96 left-64 top-10">
                    <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                    className="w-full h-full rounded-xl" />
                </div>
                <img 
                 src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                 alt="poster"
                 className="w-full h-full" />
               
            </div>
        </>
    )
};

export default MovieHero;