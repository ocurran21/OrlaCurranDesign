import React, {useState} from 'react';
import "./SidebarComponent.scss"
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
            return [closeArrowRed, openArrowRed];
    }
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
        <div className={colourClassName.colourClassName}>
            {showSidebar ?
                <div className="sidebarContainer">
                    <ul>
                        <li>HOME</li>
                        <li className="navSpacing">GALLERY</li>
                        <li className="navSpacing">ABOUT</li>
                    </ul>
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