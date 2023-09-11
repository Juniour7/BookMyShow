import React from "react";
import { BiShareAlt, BiSolidStar, BiChevronRight } from "react-icons/bi";

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
                        <div className="w-64 h-96 top-10 mt-5 ml-7">
                        <img 
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                        alt= "poster"
                        className="w-full h-full rounded-xl" />
                        </div>
                        <div className=" mt-10 ">
                            <h1 className="text-xl text-white font-bold">SHANG- CHI</h1>
                            <div className="flex items-center mt-3 mb-3 gap-2">
                                <BiSolidStar />
                                <h1 className="font-bold text-white text-lg">7.4/10</h1>
                                <h5 className="text-white text-sm">605 Votes</h5>
                                < BiChevronRight />
                            </div>
                            <div className="w-96 gap-9 flex mt-3  hover:cursor-pointer h-16 px-2 py-2 rounded-md " style={{backgroundColor: "#333333"}}>
                                <div>
                                    <h2 className="text-white font-bold text-md">Add your rating & review</h2>
                                    <h3 className="text-sm">Your ratings matter</h3>
                                </div>
                                <div>
                                    <button className="bg-white px-3 py-1 rounded-md text-lg">Rate now</button>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mt-3">
                                <button className="bg-white px-2 text-sm rounded-sm">2D, 4DX</button>
                                <button className="bg-white px-2 text-sm rounded-sm">English</button>
                            </div>
                            <div className="mt-3">
                                <h4 className="text-white text-sm ">2h 3min Comedy, Family, Fantasy - 28July 2023</h4>
                            </div>
                            <button class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">Book Tickets</button>
                        </div>
                        <div className="flex items-center h-10 rounded-sm text-white ml-32 mt-4 gap-2 px-2 hover:cursor-pointer" style={{backgroundColor: "#222222cc"}}>
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