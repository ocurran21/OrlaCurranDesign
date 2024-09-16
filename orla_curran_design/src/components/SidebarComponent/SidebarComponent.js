import React, {useState} from 'react';
import "./SidebarComponent.scss"
import closeArrow from "../../resources/images/buttonImages/closeSidebar/arrowOrange.png"

let showSidebar = true;

const SidebarComponent = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const closeSidebar = () => {
        setShowSidebar(false);
    }

    return (
        <div>
            { showSidebar &&
                <div className="sidebarContainer">
                    <ul>
                        <li>HOME</li>
                        <li className="navSpacing">GALLERY</li>
                        <li className="navSpacing">ABOUT</li>
                    </ul>
                    <button className="closeSidebarButton" onClick={closeSidebar}>
                        <img src={closeArrow} alt="Close Sidebar"></img>
                    </button>
                </div>
            }
        </div>
    );
}

export default SidebarComponent;