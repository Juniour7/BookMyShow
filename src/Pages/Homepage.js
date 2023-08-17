import React from "react";

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
                    <Premier />
                </div>
            </div>
            <div className="px-2 ">
                <PosterSlider 
                    images={PremierImages}
                    title= "Outdoor events"
                    isDark={false}
                />
            </div>
            <div className="px-2">
                <PosterSlider 
                    images={PremierImages}
                    title= "Online Streaming Events"
                    isDark={false}
                />
            </div>
            <div className="px-2">
                <PosterSlider 
                    images={PremierImages}
                    title= "Online Streaming Events"
                    isDark={false}
                />
            </div>
            <Footer />
        </>
    )
};

export default HomePage;