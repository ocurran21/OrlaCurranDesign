import "./DetailViewComponent.scss";
import {useState} from "react";
import sections from "../../constants/images";
import previousButton from "../../resources/images/buttonImages/navigatePrevious.png"
import nextButton from "../../resources/images/buttonImages/navigateNext.png"

const DetailViewComponent = ({ image }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(image.id);
    let currentImage;
    let totalNumberOfImages = sections.reduce((acc, section) => acc + section.images.length, 0);

    const getImageById = (id) => {
        for (let section of sections) {
            for (let img of section.images) {
                if (img.id === id) {
                    return img;
                }
            }
        }
    };

    const handleNext = () => {
        if (currentImageIndex < totalNumberOfImages - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const handlePrev = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    currentImage = getImageById(currentImageIndex);

    return (
        <div className="detailView">
            { currentImageIndex >= 1 && (
                <div>
                    <button className="previousButton" onClick={handlePrev}><img src={previousButton} alt="previous arrow"/></button>
                </div>
            )}
            <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="detailImage"
                            />
            { currentImageIndex < totalNumberOfImages-1 && (
                <div>
                    <button className="nextButton" onClick={handleNext}><img src={nextButton} alt="next arrow"/></button>
                </div>
            )}
        </div>
    );
};

export default DetailViewComponent;

