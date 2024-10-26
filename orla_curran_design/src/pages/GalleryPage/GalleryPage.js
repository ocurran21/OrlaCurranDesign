import "./GalleryPage.scss"
import SidebarComponent from "../../components/SidebarComponent/SidebarComponent";
import DetailViewComponent from "../../components/DetailViewComponent/DetailViewComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import sections from "../../constants/images";
import {useState} from "react";

import closeButton from "../../resources/images/buttonImages/close.png"

const GalleryPage = () => {
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openDetailView = (image) => {
    setSelectedImage(image);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
    setSelectedImage(null);
  };

  return (
    <div className="galleryPage">
      <div className="galleryContainer">
        <SidebarComponent />
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
                    onClick={() => openDetailView(image)}
                  />
                ))}
              </section>
            </div>
          ))}
          {showDetailView && selectedImage && (
            <div>
              <DetailViewComponent image={selectedImage}/>
              <button onClick={closeDetailView} className="closeButton"><img src={closeButton}/></button>
            </div>
          )}
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
