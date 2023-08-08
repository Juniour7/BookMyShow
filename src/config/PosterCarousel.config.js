const settings = {
    infinite: true,
    autoplay: false,
    slideToShow: 5,
    slideToScroll: 2,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slideToShow: 3,
                slideToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slideToShow: 2,
                slideToScroll: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slideToShow: 1,
                slideToScroll: 1,
            }
        }
    ]

};

export default settings;