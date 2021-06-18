import React from "react";
import background from "../images/glasses.jpg"
import ReactTyped from "react-typed";
import {HashLink} from "react-router-hash-link";
const Header = () => {
    return (
        <div id={"header"} style={{
            height: `90vh`,
        }}>
            <div style={{
                backgroundImage: `url(${background})`,
                height: `100%`,
                width: `100%`,
                backgroundSize: `cover`,
                backgroundPosition: `bottom`,
            }} className={"h-screen"}>
                {/* Content */}
                <div className={"grid  text-center"}>
                    <ReactTyped
                        className={"text-yellow-500 font-extrabold text-4xl lg:text-6xl w-8/12 lg:w-5/12 ml-auto mt-20 pb-20 mr-auto"}
                        strings={["Hi! I'm Mateusz","Aspiring Dev","CS Freshman","Check my work"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </div>
                <div className={"grid"}>
                    <a className={"font-bold text-gray-300 m-1 p-3 text-xl hover:bg-yellow-600 bg-yellow-500 w-8/12 lg:w-4/12 ml-auto mr-auto text-center rounded"}>
                        <HashLink smooth to={'/page#contact'}>
                            Contact Me
                        </HashLink>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Header