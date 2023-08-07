import React from "react";
import Poster from "../Poster/poster.component";

//config
import settings from "../../config/PosterCarousel.config";

import Slider from "react-slick";

const PosterSlider = (props) => {
    return (
        <>
            <div>
                <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800" }`
            }>{props.title}</h3>
                <p className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-800" }`
            } ></p>
            </div>
            <Slider {...settings}>
                {props.image.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    )
};

export default PosterSlider;