import "./PageTitleComponent.scss"

const PageTitle = (colourClassName) => {
    return (
        <section className="titleContainer">
            <h1 className={colourClassName.colourClassName}>ORLA CURRAN DESIGN</h1>
        </section>
    );
};

export default PageTitle;

