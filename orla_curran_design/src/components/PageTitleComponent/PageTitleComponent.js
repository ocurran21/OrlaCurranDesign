import "./PageTitleComponent.scss"
import {useEffect} from "react";

const getRandomBackground = () => {
    const backgroundColourList = ['#e13232','#0d4647','#956fc7','#101e6d','#4a8d3f','#e9873b']
    const randomIndex = Math.floor(Math.random() * backgroundColourList.length);
    return backgroundColourList[randomIndex];
}

const PageTitle = () => {
    useEffect(() => {
        document.body.style.backgroundColor = getRandomBackground();
    }, []);

    return (
        <h1 className="title">ORLA CURRAN DESIGN</h1>
    );
};

export default PageTitle;

