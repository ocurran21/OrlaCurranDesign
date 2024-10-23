import "./GalleryPage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import sections from "../../constants/images";
import DetailViewComponent from "../../components/DetailViewComponent/DetailViewComponent";
import {useState} from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const GalleryPage = (images) => {
    const [showDetailView, setShowDetailView] = useState(false);

    const openDetailView = () => {
        setShowDetailView(true);
    }

    const closeDetailView = () => {
        setShowDetailView(false);
    }

    return (
            <div className="galleryPage">
                <div className="galleryContainer">
                    <SidebarComponent/>
                    <div className="displayGallery">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <p className={index === 0 ? "topHeader" : ""}>{section.header}</p>
                                <section className="galleryGrid">
                                    {section.images.map((image) => (
                                        <img
                                            key={image.id}
                                            src={image.src}
                                            alt={image.alt}
                                            className={image.styles}
                                        />
                                    ))}
                                </section>
                            </div>
                        ))}
                        {/* <p className="topHeader">Still Life</p>
                        <section className="galleryGrid">
                            <img src={strawberryDrawing} alt="Coloured Pencil Sketch of a Strawberry"
                                className="wide" onClick={() => openDetailView()}></img>
                            <img src={limeDrawing} alt="Coloured Pencil Sketch of a Lime"></img>
                            <img src={pepperDrawing} alt="Coloured Pencil Sketch of a Red Pepper"></img>
                            <img src={pomegranateDrawing} alt="Coloured Pencil Sketch of a Pomegranate" className="tall wide"></img>
                            <img src={dragonTreeDrawing} alt="Coloured Pencil Sketch of a potted Dragon Tree"
                                className="tall"></img>
                            <img src={plumDrawing} alt="Coloured Pencil Sketch of a Plum" className="tall"
                                onClick={() => openDetailView()}/>
                        </section>
                        <p>Portraiture & Life Drawing</p>
                        <section className="galleryGrid">
                            <img src={owenProfile} alt="Orange pencil sketch of a man's side profile" className="tall wide"></img>
                            <img src={blueNude} alt="Blue life drawing of a man" className="tall"></img>
                            <img src={goldNude} alt="Gold life drawing of a man" className="wide"></img>
                            <img src={greenNude} alt="Green life drawing of a woman" className="tall"></img>
                            <img src={pencilSketchNude} alt="Pencil Sketch life drawing of a woman"></img>
                        </section>
                        <p>Animals</p>
                        <section className="galleryGrid">
                            <img src={blueSquirrel} alt="Blue pencil drawing of a squirrel" className="wide"></img>
                            <img src={tanithProfile} alt="Pencil drawing of a Siamese cat" className="tall"></img>
                            <img src={tanithPortrait} alt="Pencil drawing of a Siamese cat" className="wide"></img>
                            <img src={bobPortrait} alt="Pencil drawing of Bob" className="wide tall"></img>
                            <img src={jasperPortrait} alt="Pencil drawing of a white cat with ginger patches"></img>
                        </section>
                        <p>Paintings</p>
                        <section className="galleryGrid">
                            <img src={killywoolFoyleView} alt="Oil painting of the view over the Foyle river" className="wide"></img>
                            <img src={churchPoint} alt="Oil painting of the view of Castleward Bay at sunset" className="wide tall"></img>
                            <img src={caledonianMacBrayne} alt="Oil painting of the Ferry in Ullapool" className="wide"></img>
                            <img src={honeyPortrait} alt="Oil painting of a dog on the beach" className="wide"></img>
                            <img src={cavtatWatercolour} alt="Stylised watercolour of a Kayak in Croatia"></img>
                            <img src={stemWatercolour} alt="Stylised watercolour of green stems"></img>
                        </section> */}
                        <FooterComponent/>
                        {showDetailView ?
                            <div>
                                <DetailViewComponent/>
                                <button onClick={closeDetailView}>Close</button>
                            </div>
                            : ""
                        }
                    </div>
                </div>
            </div>
    );
};

export default GalleryPage;

