import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import "./SidebarComponent.scss"

import classNames from 'classnames';

import closeArrowRed from "../../resources/images/buttonImages/closeSidebar/LeftArrowRed.png"
import openArrowRed from "../../resources/images/buttonImages/openSidebar/RightArrowRed.png"
import closeArrowTeal from "../../resources/images/buttonImages/closeSidebar/LeftArrowTeal.png"
import openArrowTeal from "../../resources/images/buttonImages/openSidebar/RightArrowTeal.png"
import closeArrowPurple from "../../resources/images/buttonImages/closeSidebar/LeftArrowPurple.png"
import openArrowPurple from "../../resources/images/buttonImages/openSidebar/RightArrowPurple.png"
import closeArrowBlue from "../../resources/images/buttonImages/closeSidebar/LeftArrowBlue.png"
import openArrowBlue from "../../resources/images/buttonImages/openSidebar/RightArrowBlue.png"
import closeArrowGreen from "../../resources/images/buttonImages/closeSidebar/LeftArrowGreen.png"
import openArrowGreen from "../../resources/images/buttonImages/openSidebar/RightArrowGreen.png"
import closeArrowOrange from "../../resources/images/buttonImages/closeSidebar/LeftArrowOrange.png"
import openArrowOrange from "../../resources/images/buttonImages/openSidebar/RightArrowOrange.png"
import closeArrowGrey from "../../resources/images/buttonImages/closeSidebar/LeftArrowGrey.png"
import openArrowGrey from "../../resources/images/buttonImages/openSidebar/RightArrowGrey.png"

const getButtonImage = (colourClassName) => {
    switch (colourClassName.colourClassName) {
        case "redStyle":
            return [closeArrowRed, openArrowRed];
        case "tealStyle":
            return [closeArrowTeal, openArrowTeal];
        case "purpleStyle":
            return [closeArrowPurple, openArrowPurple];
        case "blueStyle":
            return [closeArrowBlue, openArrowBlue];
        case "greenStyle":
            return [closeArrowGreen, openArrowGreen];
        case "orangeStyle":
            return [closeArrowOrange, openArrowOrange];
        default:
            return [closeArrowGrey, openArrowGrey];
    }
}

function NavBarOptions () {
    const location = useLocation();

    const getPage = () => {
        switch (location.pathname) {
            case "/":
                return "home";
            case "/gallery":
                return "gallery";
            case "/about":
                return "about";
            default:
                return "home";
        }
    }

    const listGalleryClass = classNames("navSpacing", getPage() === 'gallery' ? "currentPage": "");
    const listAboutClass = classNames("navSpacing", getPage() === 'about' ? "currentPage": "");

    return (
        <ul>
            <li className={getPage() === 'home' ? "currentPage" : ""}><Link to="/">HOME</Link></li>
            <li className={listGalleryClass}><Link to="/gallery">GALLERY</Link></li>
            <li className={listAboutClass}><Link to="/about">ABOUT</Link></li>
        </ul>)
}

const SidebarComponent = (colourClassName) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    const openSidebar = () => {
        setShowSidebar(true);
    }

    return (
        <div className={colourClassName.colourClassName ? colourClassName.colourClassName : "defaultSidebar"}>
            {showSidebar ?
                <div className="sidebarContainer">
                    <nav>
                        <NavBarOptions/>
                    </nav>
                    <button className="closeSidebarButton" onClick={closeSidebar}>
                        <img src={getButtonImage(colourClassName)[0]} alt="Close Sidebar"></img>
                    </button>
                </div> :
                <button className="openSidebarButton" onClick={openSidebar}>
                    <img src={getButtonImage(colourClassName)[1]} alt="Open Sidebar"></img>
                </button>
            }
        </div>
    );
}

export default SidebarComponent;