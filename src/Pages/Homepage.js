import axios from "axios";
import React, { useState, useEffect } from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import  Premier  from "../components/Premier/premier.component";
import PosterSlider from "../components/Poster slider/Posterslider.component";
import NavBar from "../components/Navbar/navabar.component";
import Footer from "../components/Footer/footer.component";


//config
import PremierImages from "../config/TempPostersconfig";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);
    
 
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const requestUpcomingMovies = async() => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);
   
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        const requestTopMovies = async() => {
            const getTopMovies = await axios.get("/movie/top_rated");
            setTopMovies(getTopMovies.data.results);
        };
        requestTopMovies();
    }, []);

    const [todayMovies, setTodayMovies] = useState([]);

    useEffect(() => {
        const requestTodayMovies = async() => {
            const getTodayMovies = await axios.get("/tv/airing_today");
            setTodayMovies(getTodayMovies.data.results);
        };
        requestTodayMovies();
    }, []);

    return (
        <>
            <NavBar />
            <HeroCarousal />
            <div className="flex felx-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            </div>
            <div className="bg-gift-400 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                        alt="Razourpay" className="w-full h-full" />
                    </div>
                    <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Releases Every Friday" isDark/>
                </div>
            </div>
            <div className="px-2 ">
                <PosterSlider 
                    images={upcomingMovies}
                    title= "Outdoor events"
                    isDark={false}
                />
            </div>
            <div className="px-2">
                <PosterSlider 
                    images={topMovies}
                    title= "Online Streaming Events"
                    isDark={false}
                />
            </div>
            <div className="px-2">
                <PosterSlider 
                    images={todayMovies}
                    title= "Online Streaming Events"
                    isDark={false}
                />
            </div>
            <Footer />
        </>
    )
};

export default HomePage;