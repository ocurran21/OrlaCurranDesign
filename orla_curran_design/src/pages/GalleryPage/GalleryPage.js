import "./GalleryPage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

import strawberryDrawing from "../../resources/images/art/stillLifes/strawyberry.png"
import limeDrawing from "../../resources/images/art/stillLifes/lime.png"
import pepperDrawing from "../../resources/images/art/stillLifes/pepper.png"
import pomegranateDrawing from "../../resources/images/art/stillLifes/pomegranate.png"
import dragonTreeDrawing from "../../resources/images/art/stillLifes/dragonTree.png"

import blueNude from "../../resources/images/art/lifeDrawing/blueLifeDrawing.png"
import goldNude from "../../resources/images/art/lifeDrawing/goldenLifeDrawing.png"
import greenNude from "../../resources/images/art/lifeDrawing/greenLifeDrawing.png"
import pencilSketchNude from "../../resources/images/art/lifeDrawing/lifeDrawingPencil.png"

import owenProfile from "../../resources/images/art/portraiture/owenOrange.png"

import blueSquirrel from "../../resources/images/art/animals/blueSquirrel.png"

import stemWatercolour from "../../resources/images/art/watercolour/watercolourStems.jpg"
import cavtatWatercolour from "../../resources/images/art/watercolour/cavtat.png"

const GalleryPage = () => {
    return (
            <div>
                <SidebarComponent/>
                <div className="galleryContainer">
                    <p className="topHeader">Still Life</p>
                    <section className="galleryGrid">
                        <img src={strawberryDrawing} alt="Coloured Pencil Sketch of a Strawberry"
                             className="wide"></img>
                        <img src={limeDrawing} alt="Coloured Pencil Sketch of a Lime"></img>
                        <img src={pepperDrawing} alt="Coloured Pencil Sketch of a Red Pepper"></img>
                        <img src={pomegranateDrawing} alt="Coloured Pencil Sketch of a Pomegranate"></img>
                        <img src={dragonTreeDrawing} alt="Coloured Pencil Sketch of a potted Dragin Tree"
                             className="tall"></img>
                    </section>
                    <p>Life Drawing</p>
                    <section className="galleryGrid">
                        <img src={blueNude} alt="Blue life drawing of a man" className="tall"></img>
                        <img src={goldNude} alt="Gold life drawing of a woman" className="wide"></img>
                        <img src={greenNude} alt="Green life drawing of a woman" className="tall"></img>
                        <img src={pencilSketchNude} alt="Pencil Sketch life drwaing of a woman"></img>
                    </section>
                    <p>Portraiture</p>
                    <section className="galleryGrid">
                        <img src={owenProfile} alt="Orange pencil sketch of a man's side profile"></img>
                    </section>
                    <p>Animals</p>
                    <section className="galleryGrid">
                        <img src={blueSquirrel} alt="Blue pencil drawing of a squirrel"></img>
                    </section>
                    <p>Watercolours</p>
                    <section className="galleryGrid">
                        <img src={stemWatercolour} alt="Stylised watercolour of green stems"></img>
                        <img src={cavtatWatercolour} alt="Stylised watercolour of a Kayak in Croatia"></img>
                    </section>
                    <p>Oils</p>
                </div>
            </div>
    );
};

export default GalleryPage;

