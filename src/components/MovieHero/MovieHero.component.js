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
                <div className=" flex absolute z-30 w-56 h-96 left-64 top-10">
                    <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                    className="w-full h-full rounded-xl" />
                </div>
                <img 
                 src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                 alt="poster"
                 className="w-full h-full" />
                <div className="flex absolute z-30">
                    <h1 className="text-bold text-xl text-white">OMG 2</h1>
                    <div className="bg-gray-500">
                        <h3 className="font-bold text-md text-white">Add Your rating & review</h3>
                        <h5 className="text-gray-200 text-sm font-bold">Your ratings matter</h5>
                        <span>
                            <button className="bg-white text-gray-600 rounded-md px-3 py-2 hover:cursor-pointer">Rate Now</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieHero;