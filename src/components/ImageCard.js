import PropTypes from "prop-types";
import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const ImageCard = ({repo,demo,img,tags,title}) => {
    ImageCard.defaultProps = {
        title: " ",
        repo: "#",
        demo: "#",
        img: "",
        tags: "",
    }
    ImageCard.propTypes = {
        title: PropTypes.string,
        repo: PropTypes.string,
        demo: PropTypes.string,
        img: PropTypes.string,
        tags: PropTypes.string,
    }
    let repoBtn = (repo != null ? "Click here" : "");
    let demoBtn = (demo != null ? "Click here" : "")
    const tag = tags.split(',');
    return (
        <Router>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-300 p-3">
                <img src={img} alt="" className="w-full"/>
                <div className="mt-2 px-6 py-4 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    <div className="font-bold text-purple-500 text-xl mb-2 ">
                        {title}
                    </div>
                    <ul>
                        <li>
                            <strong>Github Link: </strong>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=repo;
                                }}
                            > {repoBtn}</button>
                        </li>
                        <li>
                            <strong>Demo: </strong>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href=demo;
                                }}
                            > {demoBtn}</button>
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-4">
                    {tag.map((tg, index) => (
                        <span key={index} className="mb-1 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tg}
        </span>
                    ))}
                </div>
            </div>
        </Router>
    )
}

export default ImageCard;