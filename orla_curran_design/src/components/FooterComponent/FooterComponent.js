import "./FooterComponent.scss"

const currentYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
}

const FooterComponent = () => {
    return (
        <div className="footerContainer">
            <footer>
                <p className="footerText">© 2024-{currentYear()} Orla Curran Art. All rights reserved. All code, artwork and designs are property of Orla Curran and may not be used without permission.</p>
            </footer>
        </div>
    );
};

export default FooterComponent;