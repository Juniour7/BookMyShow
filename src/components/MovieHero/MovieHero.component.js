import React from "react";

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg" 
                    alt="poster" />
            </div>
            <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1691040121412_gadar2desktop.jpg" 
                    alt="poster" />
            </div>
            <div className="relative hidden lg:block" style={{height: "40rem"}}>
                <div className="absolute h-full h-full z-10"
                style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}} />
            </div>
            <div className="hidden lg:block"></div>
        </>
    )
};

export default MovieHero;