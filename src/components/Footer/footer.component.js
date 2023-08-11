import React from "react";
import { GiHut } from "react-icons/gi";
import { BiLogoTwitter, BiLogoFacebookSquare, BiLogoInstagram } from "react-icons/bi"


const Footer = () => {
    return (
        <>
           <footer className="bg-gift-100 py-4 px-2">
            <div >
                <div className="flex items-center gap-6">
                    <span>
                    <GiHut />
                    </span>
                    <h5 className="flex text-xl text-white text-bold">List your show. Got a show, event, activity or a great experience? Partner with us & get listed on bookmyshow</h5>
                    <button className="bg-gift-50 text-white px-3 py-3 text-bold rounded-sm">Contact Today!</button>
                </div>
                <hr />
                <div className="flex items-center gap-10">
                   <span className="w-30">
                    <BiLogoTwitter className="w-full h-full" />
                   </span>
                   <span>
                    <BiLogoFacebookSquare />
                   </span>
                   <span>
                    <BiLogoInstagram />
                   </span>
                </div>
            </div>
           </footer>
        </>
    )
};

export default Footer;