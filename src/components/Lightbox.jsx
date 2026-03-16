import { useEffect } from "react"

function Lightbox({ image, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }

    document.addEventListener("keydown", handleKey)

    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }, [onClose, onNext, onPrev])

  if (!image) return null

  return (
    <div className="lightbox">
      <div className="lightbox__zone lightbox__zone--left" onClick={onPrev}></div>
      <div className="lightbox__zone lightbox__zone--right" onClick={onNext}></div>

      <button className="close" onClick={onClose}>
        ✕
      </button>

      <button
        className="prev"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
      >
        ‹
      </button>

      <div className="lightbox__image-wrapper">
        <img src={image} alt="photo" />
      </div>

      <button
        className="next"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
      >
        ›
      </button>
    </div>
  )
}

export default Lightbox