import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import "./SidebarComponent.scss"

import classNames from 'classnames';

import { BUTTONS } from '../../constants/buttons';
import {COLOURS} from "../../constants/colours";
import {ROUTES} from "../../constants/routes";

const getButtonImage = (colourClassName) => {
    switch (colourClassName.colourClassName) {
        case COLOURS.redStyle.className:
            return [BUTTONS.redStyleButtons.closeMenu, BUTTONS.redStyleButtons.openMenu];
        case COLOURS.tealStyle.className:
            return [BUTTONS.tealStyleButtons.closeMenu, BUTTONS.tealStyleButtons.openMenu];
        case COLOURS.purpleStyle.className:
            return [BUTTONS.purpleStyleButtons.closeMenu, BUTTONS.purpleStyleButtons.openMenu];
        case COLOURS.blueStyle.className:
            return [BUTTONS.blueStyleButtons.closeMenu, BUTTONS.blueStyleButtons.openMenu];
        case COLOURS.greenStyle.className:
            return [BUTTONS.greenStyleButtons.closeMenu, BUTTONS.greenStyleButtons.openMenu];
        case COLOURS.orangeStyle.className:
            return [BUTTONS.orangeStyleButtons.closeMenu, BUTTONS.orangeStyleButtons.openMenu];
        default:
            return [BUTTONS.defaultButtons.closeMenu, BUTTONS.defaultButtons.openMenu];
    }
}

const location = useLocation();

const getPage = () => {
    return location.pathname;
}

const getHomeNavClasses = () => {
    return getPage() === ROUTES.home ? "currentPage" : "" 
}

const getGalleryNavClasses = () => {
    return classNames("navSpacing", getPage() === ROUTES.gallery ? "currentPage": "");
}

const getAboutNavClasses = () => {
    return classNames("navSpacing", getPage() === ROUTES.about ? "currentPage": "");
}

function NavBarOptions () {
    return (
        <ul>
            <li className={getHomeNavClasses}><Link to={ROUTES.home}>HOME</Link></li>
            <li className={getGalleryNavClasses}><Link to={ROUTES.gallery}>GALLERY</Link></li>
            <li className={getAboutNavClasses}><Link to={ROUTES.about}>ABOUT</Link></li>
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