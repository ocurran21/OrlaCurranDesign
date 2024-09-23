import "./DetailViewComponent.scss";
import plumDrawing from "../../resources/images/art/stillLife/plum.png"

const DetailViewComponent = () => {

    return (
        <div className="detailView">
            <img src={plumDrawing} alt="Coloured Pencil Sketch of a Plum" className="fullSizeImage"/>
        </div>
    );
};

export default DetailViewComponent;

