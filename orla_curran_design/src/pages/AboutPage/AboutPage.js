import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import "./AboutPage.scss"

const AboutPage = () => {
    return (
        <div className="aboutContainer">
            <SidebarComponent/>
            <main className="aboutContent" aria-label="About Page Content">
                <div className="aboutText">
                    <h2>ABOUT</h2>
                    <h3>I’m Orla.</h3>
                    <p>A Web Engineer based in Edinburgh.</p>
                    <p>I received my MEng in Computer Science from Queen’s University Belfast in 2023.</p>
                    <p>My favourite artists include Hockney, Matisse and Dalí.</p>
                    <p>I love anything and everything colourful. Not Mark Rothko though, he can get out of here with his horrible browns. Bleh.</p>
                    <p>I am passionate about all things art, technology, music, food and comedy.</p>
                    <p>But I only have so much time so I love combining my hobbies into one big mega-hobby.</p>
                    <p>So until edible computers are a thing I am stuck with digital drawings and artsy websites.</p>
                    <p className="emailStyle"><u>If you like what you see contact me at: <em>orlajcurran@gmail.com</em></u></p>
                </div>
                <FooterComponent aria-label="About Page Footer"/>
            </main>
        </div>
    );
};

export default AboutPage;

