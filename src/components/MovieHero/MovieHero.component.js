import React from "react";
import { BiShareAlt } from "react-icons/bi";

//components
import NavBar from "../Navbar/navabar.component";

const MovieHero = () => {
    return (
        <>
            <NavBar />
            <div className="md:hidden ">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg" 
                 alt="poster"
                />
            </div>
            <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg" 
                    alt="poster"
                     />
            </div>
            <div>
                <div className="relative hidden lg:block" style={{height: "32rem"}}>
                    <div className="absolute w-full h-full z-10"
                    style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
                    />
                    <div className="flex gap-5 absolute z-30">
                        <div className="w-64 h-96 top-10 mt-7 ml-7">
                        <img 
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt= "poster"
                        className="w-full h-full rounded-xl" />
                        </div>
                        <div className=" mt-10 ">
                            <h1 className="text-xl text-white font-bold">SHANG- CHI</h1>
                            <div className="w-96 gap-9 flex mt-3 hover:cursor-pointer h-20 px-2 py-2 rounded-md " style={{backgroundColor: "#333333"}}>
                                <div className="">
                                    <h2 className="text-white font-bold text-md">Add your rating & review</h2>
                                    <h3 className="text-sm">Your ratings matter</h3>
                                </div>
                                <div className="flex">
                                    <button className="bg-white rounded-md px-3 text-lg">Rate now</button>
                                </div>
                            </div>
                            <button class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">Book Tickets</button>
                        </div>
                        <div className="flex items-center h-10 rounded-sm mr-4 mt-4 gap-2 px-2" style={{backgroundColor: "#222222cc"}}>
                            <BiShareAlt />
                            <h3>Share</h3>
                        </div>
                    </div>
                    <img 
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" 
                    alt= "poster"
                    className="w-full h-full" />
                </div>
            </div>
        </>
    )
};

export default MovieHero;