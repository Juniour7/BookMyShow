import React from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import  Premier  from "../components/Premier/premier.component";
import PosterSlider from "../components/Poster slider/Posterslider.component";

//config
import PremierImages from "../config/TempPostersconfig";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
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
            <div>
                <PosterSlider 
                    images={PremierImages}
                    title= "Outdoor events"
                    isDark={false}
                />
            </div>
            <div>
                <PosterSlider 
                    images={PremierImages}
                    title= "Online Streaming Events"
                    isDark={false}
                />
            </div>
        </>
    )
};

export default HomePage;