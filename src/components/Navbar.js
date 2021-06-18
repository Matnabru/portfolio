import React, {useEffect} from "react";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import {Route} from "react-router-dom";
const Navbar = () => {
    const [scrolled,setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 1){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('sticky inset-0')
    }

    return(
        <div id={"navbar"} className={navbarClasses.join(" ")}>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">

                                <a className={"font-bold text-yellow-500 px-2 text-xl"}>
                                    Matnabru
                                </a>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <a href="#"
                                       className={"text-gray-300 hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"}
                                       aria-current="page">
                                        <HashLink smooth to={'/page#header'}>
                                            Home
                                        </HashLink>
                                    </a>

                                    <a id={"skillsBtn"} href="#"
                                       className={"text-gray-300 hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"}>
                                        <HashLink smooth to={'/page#skills'}>
                                            Skills
                                        </HashLink>
                                    </a>

                                    <a id={"projectsBtn"} href="#"
                                       className="text-gray-300 hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                                        <HashLink smooth to={'/page#projects'}>
                                            Projects
                                        </HashLink>
                                    </a>

                                    <a id={"contactBtn"} href="#"
                                       className="text-gray-300 hover:bg-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">
                                        <HashLink smooth to={'/page#contact'}>
                                            Contact
                                        </HashLink>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pb-3 space-y-1">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-1 rounded-md text-base font-medium"
                           aria-current="page">
                            <HashLink smooth to={'/page#header'}>
                            Home
                            </HashLink>
                        </a>

                        <a
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-1 rounded-md text-base font-medium">
                            <HashLink smooth to={'/page#skills'}>
                                Skills
                            </HashLink>
                            </a>

                        <a
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-1 rounded-md text-base font-medium">
                            <HashLink smooth to={'/page#projects'}>
                                Projects
                            </HashLink>
                            </a>

                        <a href="#"
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-1 rounded-md text-base font-medium">
                            <HashLink smooth to={'/page#contact'}>
                                Contact
                            </HashLink>
                            </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar