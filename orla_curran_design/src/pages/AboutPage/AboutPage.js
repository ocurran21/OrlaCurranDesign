import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import "./AboutPage.scss"

const AboutPage = () => {
    return (
        <div className="aboutContainer">
            <SidebarComponent/>
            <main className="aboutContent" aria-label="About Page Content">
                <h2>ABOUT</h2>
                <h3>Hi, I’m Orla.</h3>
                <p>A Web Engineer based in Edinburgh.</p>
                <p>I received my MEng in Computer Science from Queen’s University Belfast in 2023.</p>
                <p>My favourite artists include David Hockney, Henri Matisse and Salvador Dalí.</p>
                <p>For my art I mostly use colouring pencils but also love watercolours and markers.</p>
                <p>I am passionate about combining my love of art and design with technology.</p>
                <p>Currently, I'm focused on creating websites that highlight this unique combination.</p>
                <FooterComponent aria-label="About Page Footer"/>
            </main>
        </div>
    );
};

export default AboutPage;

