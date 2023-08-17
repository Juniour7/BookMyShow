import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//components
import { NextArrow, PrevArrow } from "./Arrow.component";

//Imoprt css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now-playing");
            console.log(getImages);
        };
        requestNowPlayingMovies();
    })

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll:1,
        centerPadding: "300px",
        infinite: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };


    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-64 md:h-80 py-3">
                                <img src={image} alt="testing" className="w-full h-full " />
                            </div>
                        ))
                    }
                </HeroSlider> 
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
                {
                    images.map((image) => (
                        <div className="w-full h-64 gap-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full " />
                        </div>
                    ))
                }
            </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousal;