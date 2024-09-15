import React from 'react';
import PageTitleComponent from "../components/PageTitleComponent/PageTitleComponent";
import "./HomePage.scss"
import SidebarComponent from "../components/SidebarComponent/SidebarComponent";

const HomePage = () => {
    return (
        <header className="titleContainer">
            <PageTitleComponent/>
            <SidebarComponent/>
        </header>
    );
};

export default HomePage;

