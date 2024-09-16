import React from 'react';
import "./SidebarComponent.scss"

const SidebarComponent = () => {
    return (
        // <button onClick="openSidebar()">
        //     ->
        // </button>
        <div className="sidebarContainer">
            <ul>
                <li>HOME</li>
                <li className="navSpacing">GALLERY</li>
                <li className="navSpacing">ABOUT</li>
            </ul>
        </div>
    );
}

const openSidebar = () => {

}

export default SidebarComponent;