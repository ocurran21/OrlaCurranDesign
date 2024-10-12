import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import "./AboutPage.scss"

const AboutPage = () => {
    return (
        <div className="aboutContainer">
            <SidebarComponent/>
            <div className="aboutContent">
                <h2>ABOUT</h2>
                <hr/>
                <h3>Hi, I’m Orla.</h3>
                <p>A Web Engineer based in Edinburgh.</p>
                <p>I received my MEng in Computer Science from Queen’s University Belfast in 2023.</p>
                <p>I am passionate about combining my love of art and design with technology.</p>
                <p>My favourite artists include David Hockney, Henri Matisse and Salvador Dalí.</p>
                <p>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p>Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
        </div>
    );
};

export default AboutPage;

