import "./GalleryPage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";

import strawberryDrawing from "../../resources/images/art/stillLife/strawyberry.png"
import limeDrawing from "../../resources/images/art/stillLife/lime.png"
import pepperDrawing from "../../resources/images/art/stillLife/pepper.png"
import pomegranateDrawing from "../../resources/images/art/stillLife/pomegranate.png"
import dragonTreeDrawing from "../../resources/images/art/stillLife/dragonTree.png"
import plumDrawing from "../../resources/images/art/stillLife/plum.png"

import blueNude from "../../resources/images/art/lifeDrawing/blueLifeDrawing.png"
import goldNude from "../../resources/images/art/lifeDrawing/goldenLifeDrawing.png"
import greenNude from "../../resources/images/art/lifeDrawing/greenLifeDrawing.png"
import pencilSketchNude from "../../resources/images/art/lifeDrawing/lifeDrawingPencil.png"

import owenProfile from "../../resources/images/art/portraiture/owenOrange.png"

import blueSquirrel from "../../resources/images/art/animals/blueSquirrel.png"
import tanithProfile from "../../resources/images/art/animals/tanithProfile.png"

import DetailViewComponent from "../../components/DetailViewComponent/DetailViewComponent";
import {useState} from "react";

const GalleryPage = () => {
    const [showDetailView, setShowDetailView] = useState(false);

    const openDetailView = () => {
        setShowDetailView(true);
    }

    const closeDetailView = () => {
        setShowDetailView(false);
    }

    return (
            <div className="galleryContainer">
                <SidebarComponent className="scrollableSidebar"/>
                <div className="displayGallery">
                    <p className="topHeader">Still Life</p>
                    <section className="galleryGrid">
                        <img src={strawberryDrawing} alt="Coloured Pencil Sketch of a Strawberry"
                             className="wide" onClick={() => openDetailView()}></img>
                        <img src={limeDrawing} alt="Coloured Pencil Sketch of a Lime"></img>
                        <img src={pepperDrawing} alt="Coloured Pencil Sketch of a Red Pepper"></img>
                        <img src={pomegranateDrawing} alt="Coloured Pencil Sketch of a Pomegranate" className="tall wide"></img>
                        <img src={dragonTreeDrawing} alt="Coloured Pencil Sketch of a potted Dragon Tree"
                             className="tall"></img>
                        <img src={plumDrawing} alt="Coloured Pencil Sketch of a potted a Plum" className="tall"
                             onClick={() => openDetailView()}/>
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
                        <img src={owenProfile} alt="Orange pencil sketch of a man's side profile" className="tall wide"></img>
                    </section>
                    <p>Animals</p>
                    <section className="galleryGrid">
                        <img src={blueSquirrel} alt="Blue pencil drawing of a squirrel" className="wide"></img>
                        <img src={tanithProfile} alt="Pencil drawing of a Siamese cat" className="tall"></img>
                    </section>
                    {/*<p>Watercolours</p>*/}
                    {/*<section className="galleryGrid">*/}
                    {/*    <img src={stemWatercolour} alt="Stylised watercolour of green stems"></img>*/}
                    {/*    <img src={cavtatWatercolour} alt="Stylised watercolour of a Kayak in Croatia"></img>*/}
                    {/*</section>*/}
                    {/*<p>Oils</p>*/}
                    {showDetailView ?
                        <div>
                            <DetailViewComponent/>
                            <button onClick={closeDetailView}>Close</button>
                        </div>
                        : ""
                    }
                </div>
            </div>
    );
};

export default GalleryPage;

