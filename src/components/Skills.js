import React from "react";
import {SkillBar} from 'react-skills'

const Skills = () => {
    return (
        <div id={"skills"} className={"pt-20 pb-10 bg-gray-700"}>
            <div className={"grid text-center pt-5"}>
                <a className={"font-bold text-yellow-500 text-5xl"}>Skills</a>
            </div>

            <div className={"w-full pl-5 pr-5 lg:w-8/12 lg:ml-auto lg:mr-auto mt-5 inline-grid grid-cols-1 lg:grid-cols-2"}>
                <div className={" text-center lg:text-right mr-3"}>
                    <a className={"text-gray-300 text-2xl"}>Java</a>
                </div>
                <div className={"rounded ml-2"}>
                    <SkillBar levelProgress={5} duration={5} labelWidth={0} name={""} level={45} color={"orange"}/>
                </div>
            </div>

            <div className={"w-full pl-5 pr-5 lg:w-8/12 lg:ml-auto lg:mr-auto mt-5 inline-grid grid-cols-1 lg:grid-cols-2"}>
                <div className={" text-center lg:text-right mr-3"}>
                    <a className={"text-gray-300 text-2xl"}>HTML/CSS/JS</a>
                </div>
                <div className={"rounded ml-2"}>
                    <SkillBar levelProgress={5} duration={5} labelWidth={0} name={""} level={40} color={"red"}/>
                </div>
            </div>

            <div className={"w-full pl-5 pr-5 lg:w-8/12 lg:ml-auto lg:mr-auto mt-5 inline-grid grid-cols-1 lg:grid-cols-2"}>
                <div className={" text-center lg:text-right mr-3"}>
                    <a className={"text-gray-300 text-2xl"}>Tailwind/Bootstrap/Sass</a>
                </div>
                <div className={"rounded ml-2"}>
                    <SkillBar levelProgress={5} duration={5} labelWidth={0} name={""} level={30} color={"#f72585"}/>
                </div>
            </div>

            <div className={"w-full pl-5 pr-5 lg:w-8/12 lg:ml-auto lg:mr-auto mt-5 inline-grid grid-cols-1 lg:grid-cols-2"}>
                <div className={" text-center lg:text-right mr-3"}>
                    <a className={"text-gray-300 text-2xl"}>ReactJS</a>
                </div>
                <div className={"rounded ml-2"}>
                    <SkillBar levelProgress={5} duration={5} labelWidth={0} name={""} level={25} color={"#2a9d8f"}/>
                </div>
            </div>

            <div className={"w-full pl-5 pr-5 lg:w-8/12 lg:ml-auto lg:mr-auto mt-5 inline-grid grid-cols-1 lg:grid-cols-2"}>
                <div className={" text-center lg:text-right mr-3"}>
                    <a className={"text-gray-300 text-2xl"}>C++</a>
                </div>
                <div className={"rounded ml-2"}>
                    <SkillBar levelProgress={5} duration={5} labelWidth={0} name={""} level={20} color={"#457b9d"}/>
                </div>
            </div>

            <div className={"w-full pl-5 pr-5 lg:w-8/12 lg:ml-auto lg:mr-auto mt-5 inline-grid grid-cols-1 lg:grid-cols-2"}>
                <div className={" text-center lg:text-right mr-3"}>
                    <a className={"text-gray-300 text-2xl"}>PHP</a>
                </div>
                <div className={"rounded ml-2"}>
                    <SkillBar levelProgress={5} duration={5} labelWidth={0} name={""} level={15} color={"purple"}/>
                </div>
            </div>
        </div>
    )
}
export default Skills