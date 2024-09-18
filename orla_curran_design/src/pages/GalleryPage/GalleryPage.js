import "./GalleryPage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

import strawberryDrawing from "../../resources/images/art/strawyberry.png"
import limeDrawing from "../../resources/images/art/lime.png"
import pepperDrawing from "../../resources/images/art/pepper.png"
import pomegranateDrawing from "../../resources/images/art/pomegranate.png"
import dragonTreeDrawing from "../../resources/images/art/dragonTree.png"

const GalleryPage = () => {
    return (
        <div className="galleryContainer">
            <SidebarComponent/>
            <p className="topHeader">Still Life</p>
            <section className="galleryGrid">
                <img src={strawberryDrawing} alt="Coloured Pencil Sketch of a Strawberry" className="wide"></img>
                <img src={limeDrawing} alt="Coloured Pencil Sketch of a Lime"></img>
                <img src={pepperDrawing} alt="Coloured Pencil Sketch of a Red Pepper"></img>
                <img src={pomegranateDrawing} alt="Coloured Pencil Sketch of a Pomegranate"></img>
                <img src={dragonTreeDrawing} alt="Coloured Pencil Sketch of a potted Dragin Tree" className="tall"></img>
            </section>
            <p>Portraiture</p>
            <p>Animals</p>
            <p>Paintings</p>
        </div>
    );
};

export default GalleryPage;

