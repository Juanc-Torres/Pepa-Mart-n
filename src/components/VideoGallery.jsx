import { useState } from "react"
import videos from "../videos"
import VideoLightbox from "./VideoLightbox"

function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(null)

  const openVideo = (index) => {
    setCurrentIndex(index)
  }

  const closeVideo = () => {
    setCurrentIndex(null)
  }

  const nextVideo = () => {
    setCurrentIndex((currentIndex + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((currentIndex - 1 + videos.length) % videos.length)
  }

  return (
    <>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.pause()
              e.target.currentTime = 0
            }}
            onClick={() => openVideo(index)}
          />
        ))}
      </div>

      <VideoLightbox
        video={videos[currentIndex]}
        onClose={closeVideo}
        onNext={nextVideo}
        onPrev={prevVideo}
      />
    </>
  )
}

export default VideoGallery