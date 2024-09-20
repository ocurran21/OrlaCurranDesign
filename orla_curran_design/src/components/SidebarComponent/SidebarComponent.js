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
import {COLOURS} from "../../constants/colours";
import {ROUTES} from "../../constants/routes";

const getButtonImage = (colourClassName) => {
    switch (colourClassName.colourClassName) {
        case COLOURS.redStyle.className:
            return [closeArrowRed, openArrowRed];
        case COLOURS.tealStyle.className:
            return [closeArrowTeal, openArrowTeal];
        case COLOURS.purpleStyle.className:
            return [closeArrowPurple, openArrowPurple];
        case COLOURS.blueStyle.className:
            return [closeArrowBlue, openArrowBlue];
        case COLOURS.greenStyle.className:
            return [closeArrowGreen, openArrowGreen];
        case COLOURS.orangeStyle.className:
            return [closeArrowOrange, openArrowOrange];
        default:
            return [closeArrowGrey, openArrowGrey];
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