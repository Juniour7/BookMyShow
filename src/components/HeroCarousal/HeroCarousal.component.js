import React from "react";
import HeroSlider from "react-slick";

//components
import { NextArrow, PrevArrow } from "./Arrow.component";

//Imoprt css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slideToShow: 1,
        slideToScroll:1,
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

    const images = [
        "https://images.unsplash.com/photo-1690669249460-65a76daaf698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=794&q=80",
        "https://images.unsplash.com/photo-1689850543263-01a52ccc6943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1687360441372-757f8b2b6835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://plus.unsplash.com/premium_photo-1686157758105-b100bd44945c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ]

    return (
        <>
            <div>
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-64 md:h-80 py-3">
                                <img src={image} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider> 
            </div>
            <div className="hidden lg:block">
            <HeroSlider {...settingsLg}>
                {
                    images.map((image) => (
                        <div className="w-full h-64">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousal;