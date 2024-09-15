import "./PageTitleComponent.scss"
import {useState, useEffect} from "react";

const redHomePageColours = ['#e13232','#fba4b2','#ffffff']
const tealHomePageColours = ['#0d4647','#faf5d8','#70d0bd']
const purpleHomePageColours = ['#956fc7','#fbcea4','#592693']
const blueHomePageColours = ['#101e6d','#d590f5','#ffffff']
const greenHomePageColours = ['#4a8d3f','#a0f4e3','#17a4f6']
const orangeHomePageColours = ['#e9873b','#faebc3','#eec326']

const getRandomColours = (prevColours) => {
    const colourLists = [redHomePageColours,tealHomePageColours,
        purpleHomePageColours,blueHomePageColours,greenHomePageColours,orangeHomePageColours]
    let randomIndex;
    let currentColours;
    do {
        randomIndex = Math.floor(Math.random() * colourLists.length);
        currentColours = colourLists[randomIndex];
        // console.log('previous: ',prevColour);
        // console.log('current: ',currentColour);
    } while (prevColours === currentColours)
    return currentColours;
}

const getBackgroundColour = (currentColours) => {
    return currentColours[0];
}

const getAssociatedSecondaryColour = (currentColours) => {
    return currentColours[1];
}

const getAssociatedTertiaryColour = (currentColours) => {
    return currentColours[2];
}

const PageTitle = () => {
    const [prevColours, setPrevColours] = useState('');
    let currentColours = [];

    useEffect(() => {
        currentColours = getRandomColours(prevColours);
        document.body.style.backgroundColor = getBackgroundColour(currentColours);
        let title = document.getElementsByClassName('title')[0];
        title.style.color = getAssociatedSecondaryColour(currentColours);
        setPrevColours(currentColours);
    }, []);

    return (
        <h1 className="title">ORLA CURRAN DESIGN</h1>
    );
};

export default PageTitle;

