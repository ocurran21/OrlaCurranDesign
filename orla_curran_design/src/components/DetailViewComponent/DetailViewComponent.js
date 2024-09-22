import "./DetailViewComponent.scss";
import plumDrawing from "../../resources/images/art/stillLife/plum.png"
import {useState} from "react";

const DetailViewComponent = () => {
    const [showDetailView, setShowDetailView] = useState(true);

    const closeDetailView = () => {
        setShowDetailView(false);
    }

    if (!showDetailView) return null;

    return (
            <div className="detailView">
                <button onClick={closeDetailView}>Close</button>
                <img src={plumDrawing} alt="Coloured Pencil Sketch of a Plum" className="fullSizeImage"/>
            </div>
    );
};

export default DetailViewComponent;

