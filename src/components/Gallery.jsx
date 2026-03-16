import { useState } from "react"
import images from "../images"
import Lightbox from "./Lightbox"

function Gallery() {

  const [currentIndex, setCurrentIndex] = useState(null)

  const openLightbox = (index) => {
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setCurrentIndex(null)
  }

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <img       key={index}        src={img}        alt=""
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      <Lightbox
        image={images[currentIndex]}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  )
}

export default Gallery