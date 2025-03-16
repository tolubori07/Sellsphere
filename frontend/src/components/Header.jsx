/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ToggleSwitch from "./ToggleSwitch";
import { useSearchParams, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [showDrawer, setShowDrawer] = useState(false);

    const onChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ category: searchQuery });
        navigate(`/all/?category=${searchQuery}`);
    };

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    };

    const headerBg =
        "bg-white text-black  h-[20%] w-full p-5 text-2xl border-black border-4";
    const sQuery = searchQuery;

    return (
        <header className={headerBg}>


            <div className="flex flex-row items-center justify-between mb-3">

                <Link to={"/"}>
                    <h1 className="bigtext md:text-5xl lg:text-5xl xl:text-7xl sm:text-4xl text-black font-extrabold">
                        SellSphere
                    </h1>
                </Link>

                <img className="w-10 stroke-1" src="public/sphere.svg" alt="" />

                <ToggleSwitch />

                <Dropdown />

                <button
                    role="button"
                    aria-label="Toggle Drawer"
                    onClick={toggleDrawer}
                    className="block cursor-pointer items-center rounded-md border-2 border-black bg-main px-3 py-3  p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none lg:hidden xl:hidden md:hidden">
                    <GiHamburgerMenu />
                </button>
            </div>


            <form onSubmit={onSubmit}>
                <input
                    type="search"
                    name="q"
                    value={sQuery}
                    placeholder="Search for products"
                    onChange={onChange}
                    className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none focus:w-full w-4/5"
                />
            </form>


            <div className="flex flex-row items-center justify-between font-extrabold mt-3 sm:hidden md:flex lg:flex xl:flex">
                <Link className="inline text-[#A6BFF2]  hover:text-mainAccent" to={"/all"}>
                    <h3 className="text-center inline">Market</h3>
                </Link>

                <Link to={"/uploaditem"} className="inline text-[#A6BFF2]  hover:text-mainAccent">
                    <h3 className="text-center inline">Upload An Item</h3>
                </Link>

                <Link to={"/cart"} className="inline text-[#a6bff2] hover:text-mainAccent">
                    <h3 className="text-center inline">Bag</h3>
                </Link>

                <Link className="inline  hover:text-mainAccent text-[#A6BFF2] mr-3"to={"/all/?category=shirts"}>
                    <h3 className="text-center inline">Shirts</h3>
                </Link>
                <Link className="inline  hover:text-mainAccent text-[#A6BFF2] mr-3"to={"/all/?category=sports"}>
                    <h3 className="text-center inline">Sports</h3>
                </Link>
                <Link className="inline hover:text-mainAccent text-[#A6BFF2]"to={"/all/?category=trousers"}>
                    <h3 className="text-center inline">Trousers</h3>
                </Link>
            </div>
            {showDrawer && <Drawer active={showDrawer} setActive={setShowDrawer} />}
        </header>
    );
};

export default Header;
