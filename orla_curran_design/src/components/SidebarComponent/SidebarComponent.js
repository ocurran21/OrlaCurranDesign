import React, {useState} from 'react';
import "./SidebarComponent.scss"
import closeArrow from "../../resources/images/buttonImages/closeSidebar/arrowOrange.png"

const SidebarComponent = (colourClassName) => {
    const [showSidebar, setShowSidebar] = useState(true);

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
                        <img src={closeArrow} alt="Close Sidebar"></img>
                    </button>
                </div> :
                <button className="openSidebarButton" onClick={openSidebar}>
                    <img src={closeArrow} alt="Open Sidebar"></img>
                </button>
            }
        </div>
    );
}

export default SidebarComponent;