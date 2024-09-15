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
                <li>GALLERY</li>
                <li>ABOUT</li>
            </ul>
        </div>
    );
}

const openSidebar = () => {

}

export default SidebarComponent;