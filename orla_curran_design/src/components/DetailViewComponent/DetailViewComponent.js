import "./DetailViewComponent.scss";
import strawberryDrawing from "../../resources/images/art/stillLife/strawyberry.png";

const DetailViewComponent = (image) => {
    return (
        <div className="detailView">
            <img src={strawberryDrawing} alt="Coloured Pencil Sketch of a Strawberry" className="fullSizeImage"/>
        </div>
    );
};

export default DetailViewComponent;

