import "./DetailViewComponent.scss";

const DetailViewComponent = ({ image }) => {

    return (
        <div className="detailView">
            <img 
                src={image.src} 
                alt={image.alt} 
                className="detailImage"
            />
        </div>
    );
};

export default DetailViewComponent;

