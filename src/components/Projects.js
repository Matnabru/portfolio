import React from "react";
import ImageCard from "./ImageCard";
import portfolioImg from "../images/portfolio.png"
import bookListImg from "../images/booklist.png"
import bankingImg from "../images/banking-system.png"
import tasktracker from "../images/tasktracker.png"
import loancalculatorImg from "../images/loancalculator.png"
import tictactoeImg from "../images/tic-tac-toe.png"
const Projects = () => {
    return(
        <div className={"pt-5 pb-10 bg-gray-600"}>
            <div className={"grid text-center pt-5 mb-5"}>
                <a className={"font-bold text-yellow-500 text-5xl"}>Projects</a>
            </div>
            <div className={" ml-auto mr-auto justify-items-center w-full lg:w-10/12 grid auto-cols-max grid-cols-1 lg:grid-cols-3 gap-4"}>
                <ImageCard img={portfolioImg} title={"Portfolio"} tags={"ReactJS,Tailwind"}
                           repo={"https://github.com/Matnabru/portfolio"}
                />
                <ImageCard img={bookListImg} title={"Book List Blog"} tags={"JS,HTML/CSS,PHP"}
                           demo={"https://matnabru.000webhostapp.com/"}
                           repo={"https://github.com/Matnabru/bookblog-PHP-HTML-CSS"}
                />
                <ImageCard img={bankingImg} title={"Java SWING Banking System "} tags={"Java,Swing,SQL"}
                           repo={"https://github.com/Matnabru/Java-Swing-Banking-System"}
                />
                <ImageCard img={tasktracker} title={"React Task List with LS "} tags={"ReactJS,Tailwind"}
                           repo={"https://github.com/Matnabru/react-tasklist"}
                />
                <ImageCard img={tictactoeImg} title={"Tic-Tac-Toe "} tags={"ReactJS,Tailwind"}
                    repo={"https://github.com/Matnabru/react-tic-tac-toe"}
                />
                <ImageCard img={loancalculatorImg} title={"Loan Calculator "} tags={"HTML/CSS,JS,Bootstrap"}
                           repo={"https://github.com/Matnabru/loancalculator"}
                />
            </div>
        </div>
    )
}
export default Projects