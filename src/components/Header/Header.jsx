import React from 'react';
import { headerLinks } from "../../static/index";
import { SiSamsung } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";



const Header = () => {
    return (
        <header className="site_header border-b border-[#ddd]">
            <div className="container">
              
                <nav className="header_nav px-[15px] lg:px-[28px] flex items-center justify-between h-[55px] lg:h-[60px]">
                    <div className="header_nav_left flex items-center gap-[42px]">
                        <div className="header_nav_logo flex items-center justify-center">
                            <SiSamsung className="size-[100px] lg:size-[120px]" />
                        </div>
                        <ul className="header_nav_list hidden xl:flex items-center gap-[20px]">
                            {
                                headerLinks?.map((headerLink, index) => (
                                    <li key={index} className="header_nav_item header_link text-[14px] lg:text-[16px] "><a href="#"><span className="text-nowrap">{headerLink}</span></a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="header_nav_right flex items-center gap-[24px]">
                        <form className="relative hidden sm:block w-[300px] h-[42px] rounded-[100px] px-[13px] py-[8px] bg-[#e2e1e1]" action="">
                            <span className="absolute top-[50%] -translate-y-[50%] left-[13px]">
                                <CiSearch />
                            </span>
                            <input className="header_input w-full h-full outline-none pl-[24px]" type="text" placeholder="Search" />
                        </form>
                        <div className="flex items-center gap-[16px]">
                            <span className="sm:hidden">
                                <CiSearch className="w-[28px] h-[28px]" />
                            </span>
                            <span>
                                <BsCart2 className="w-[23px] h-[23px]" />
                            </span>
                          
                            <span>
                                <CiMenuBurger className="w-[21px] h-[21px]" />
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;