import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import "./SidebarComponent.scss"

import classNames from 'classnames';

import closeArrowRed from "../../resources/images/buttonImages/closeSidebar/LeftArrowRed.png"
import openMenuRed from "../../resources/images/buttonImages/openSidebar/MenuRed.png"
import closeArrowTeal from "../../resources/images/buttonImages/closeSidebar/LeftArrowTeal.png"
import openMenuTeal from "../../resources/images/buttonImages/openSidebar/MenuTeal.png"
import closeArrowPurple from "../../resources/images/buttonImages/closeSidebar/LeftArrowPurple.png"
import openMenuPurple from "../../resources/images/buttonImages/openSidebar/MenuPurple.png"
import closeArrowBlue from "../../resources/images/buttonImages/closeSidebar/LeftArrowBlue.png"
import openMenuBlue from "../../resources/images/buttonImages/openSidebar/MenuBlue.png"
import closeArrowGreen from "../../resources/images/buttonImages/closeSidebar/LeftArrowGreen.png"
import openMenuGreen from "../../resources/images/buttonImages/openSidebar/MenuGreen.png"
import closeArrowOrange from "../../resources/images/buttonImages/closeSidebar/LeftArrowOrange.png"
import openMenuOrange from "../../resources/images/buttonImages/openSidebar/MenuOrange.png"
import closeArrowGrey from "../../resources/images/buttonImages/closeSidebar/LeftArrowGrey.png"
import openMenuGrey from "../../resources/images/buttonImages/openSidebar/MenuGrey.png"
import {COLOURS} from "../../constants/colours";
import {ROUTES} from "../../constants/routes";

const getButtonImage = (colourClassName) => {
    switch (colourClassName.colourClassName) {
        case COLOURS.redStyle.className:
            return [closeArrowRed, openMenuRed];
        case COLOURS.tealStyle.className:
            return [closeArrowTeal, openMenuTeal];
        case COLOURS.purpleStyle.className:
            return [closeArrowPurple, openMenuPurple];
        case COLOURS.blueStyle.className:
            return [closeArrowBlue, openMenuBlue];
        case COLOURS.greenStyle.className:
            return [closeArrowGreen, openMenuGreen];
        case COLOURS.orangeStyle.className:
            return [closeArrowOrange, openMenuOrange];
        default:
            return [closeArrowGrey, openMenuGrey];
    }
}

function NavBarOptions () {
    const location = useLocation();

    const getPage = () => {
        return location.pathname;
    }

    const listGalleryClass = classNames("navSpacing", getPage() === ROUTES.gallery ? "currentPage": "");
    const listAboutClass = classNames("navSpacing", getPage() === ROUTES.about ? "currentPage": "");

    return (
        <ul>
            <li className={getPage() === ROUTES.home ? "currentPage" : ""}><Link to={ROUTES.home}>HOME</Link></li>
            <li className={listGalleryClass}><Link to={ROUTES.gallery}>GALLERY</Link></li>
            <li className={listAboutClass}><Link to={ROUTES.about}>ABOUT</Link></li>
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
        <div className={`${colourClassName.colourClassName ? colourClassName.colourClassName : "defaultSidebar"} 
        ${showSidebar ? "sidebarOpen" : ""}`}>
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