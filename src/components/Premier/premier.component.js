import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//config
import settings from "../../config/PosterCarousel.config";

//images
import PremierImages from "../../config/TempPostersconfig";

export const Premier = () => {
    
    return (
        <>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDrak />
                ))}
            </Slider>
        </>
    )
};

export default Premier;