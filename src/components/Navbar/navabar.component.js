import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                    Bhubaneswar
                    <BiChevronRight/>
                    </span>
                </div>
                <div>
                <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (
        <div className="w-full flex items-center bg-white gap-3 rounded-sm">
            <BiSearch />
            <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
        </div>
    )
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2">
                    <div className="w-12 h-12">
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                        <BiSearch />
                        <input type="search" className="w-full focus:outline-none" placeholder="Search for movies, events, plays, sports and activities" />
                    </div>
                </div>
                <div>
                    <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
                        Bhubaneswar
                        <BiChevronDown />
                    </span>
                    <button className="bg-red text-white text-sm rounded px-2 py-1">Sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    )
};

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="md:hidden">
                    /* Mobile Screens*/
                    <NavSm />
                </div>
                <div className="hidden lg:hidden md:flex">
                    /* Tablet screens */
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    /*Large Screens*/
                    <NavLg />
                </div>
            </nav>
        </>
    )
};

export default NavBar;