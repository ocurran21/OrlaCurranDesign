import "./DetailViewComponent.scss";
import {useRef, useEffect} from "react";

const DetailViewComponent = ({ image }) => {

    const imgRef = useRef(null);

    useEffect(() => {
        if (imgRef.current) {
        const { width, height } = imgRef.current;
        if (width < 300 || height < 300) { // Example size threshold
            imgRef.current.style.setProperty('--scale-factor', '1.5');
        } else if ( width > 600 || height > 600 ) {
            imgRef.current.style.setProperty('--scale-factor', '0.5');
        } else {
            imgRef.current.style.setProperty('--scale-factor', '1');
        }
        }
    }, [image]);

    return (
        <div className="detailView">
            <img 
                ref={imgRef}
                src={image.src} 
                alt={image.alt} 
                className="detailImage"
            />
        </div>
    );
};

export default DetailViewComponent;

