import PageTitleComponent from "../../components/PageTitleComponent/PageTitleComponent";
import "./HomePage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import React, {useState, useEffect} from "react";
import {COLOURS} from "../../constants/colours";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const getRandomColours = () => {
    const colourList = [
        COLOURS.redStyle,
        COLOURS.tealStyle,
        COLOURS.purpleStyle,
        COLOURS.blueStyle,
        COLOURS.greenStyle,
        COLOURS.orangeStyle
    ];

    const randomIndex = Math.floor(Math.random() * colourList.length);

    return colourList[randomIndex];
}

export const dynamicClassName = (currentColours) => {
    return currentColours ? currentColours.className : COLOURS.defaultStyle.className;
}

const HomePage = () => {
    const [colourClassName, setColourClassName] = useState('');
    const titleClassName = colourClassName + "Title";
    let currentColours = "";

    useEffect(() => {
        currentColours = getRandomColours();
        setColourClassName(dynamicClassName(currentColours));
        document.getElementsByClassName('homePage')[0].style.backgroundColor = currentColours.primary;
        document.getElementsByClassName('footerText')[0].style.color = currentColours.secondary;
    }, []);

    return (
        <div className="homePage">
            <header className="homeContainer">
                <SidebarComponent colourClassName={colourClassName}/>
                <div className="homeContent">
                    <PageTitleComponent colourClassName={titleClassName}/>
                    <FooterComponent/>
                </div>
            </header>
        </div>
    );
};

export default HomePage;

