import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

//components
import { NextArrow } from "../HeroCarousal/Arrow.component";

//Imoprt css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestImages = async() => {
            const getImages = await axios.get("/tv/on_the_air");
            setImages(getImages.data.results);
        };
        requestImages();
    }, []);

    const settings = {
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        nextArrow: <NextArrow />
    };

    

    return (
        <>
          <div className="py-3">
          <h1 className="font-bold text-lg mb-4 px-3">The Cast</h1>
            <Slider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-64 h-40 px-2">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                             alt="cast" 
                             className="w-full h-full rounded-full"
                            />
                        </div>
                    ))
                }
            </Slider>
          </div>
        </>
    );
};

export default MovieCarousel;