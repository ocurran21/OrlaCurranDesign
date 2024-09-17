import PageTitleComponent from "../../components/PageTitleComponent/PageTitleComponent";
import "./HomePage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import React, {useState, useEffect} from "react";

const redHomePageColour = '#e13232';
const tealHomePageColour = '#0d4647';
const purpleHomePageColour = '#956fc7';
const blueHomePageColour = '#101e6d';
const greenHomePageColour = '#4a8d3f';
const orangeHomePageColour = '#e9873b';

const getRandomColours = () => {
    const colourList = [
        redHomePageColour,
        tealHomePageColour,
        purpleHomePageColour,
        blueHomePageColour,
        greenHomePageColour,
        orangeHomePageColour
    ];

    const randomIndex = Math.floor(Math.random() * colourList.length);

    return colourList[randomIndex];
}

const dynamicClassName = (currentColours) => {
    switch (currentColours) {
        case redHomePageColour:
            return "redStyle";
        case tealHomePageColour:
            return "tealStyle";
        case purpleHomePageColour:
            return "purpleStyle";
        case blueHomePageColour:
            return "blueStyle";
        case greenHomePageColour:
            return "greenStyle";
        case orangeHomePageColour:
            return "orangeStyle";
        default:
            return "redStyle";
    }
}

const HomePage = () => {
    const [colourClassName, setColourClassName] = useState('');
    const titleClassName = colourClassName + "Title";
    let currentColours = "";

    useEffect(() => {
        currentColours = getRandomColours();
        setColourClassName(dynamicClassName(currentColours));
        document.body.style.backgroundColor = currentColours;
    }, []);

    return (
        <header className="homeContainer">
            <SidebarComponent colourClassName={colourClassName}/>
            <PageTitleComponent colourClassName={titleClassName}/>
        </header>
    );
};

export default HomePage;

