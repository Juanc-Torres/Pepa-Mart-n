import { useEffect, useMemo, useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Video from "./pages/Video"
import images from "./images"
import videos from "./videos"
import aboutImage from "./assets/profileimage/pepa-about.jpg"

const loadedAssets = new Set()

function preloadImage(src) {
  if (!src || loadedAssets.has(src)) return Promise.resolve()

  return new Promise((resolve) => {
    const img = new Image()

    img.onload = () => {
      loadedAssets.add(src)
      resolve()
    }

    img.onerror = () => resolve()
    img.src = src

    if (img.complete) {
      loadedAssets.add(src)
      resolve()
    }
  })
}

function preloadVideoMetadata(src) {
  if (!src || loadedAssets.has(src)) return Promise.resolve()

  return new Promise((resolve) => {
    const video = document.createElement("video")

    const finish = () => {
      loadedAssets.add(src)
      video.removeAttribute("src")
      video.load()
      resolve()
    }

    video.preload = "auto"
    video.onloadeddata = finish
    video.onerror = () => resolve()
    video.src = src
  })
}

function withTimeout(promise, ms = 12000) {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(resolve, ms))
  ])
}

function AppContent() {
  const { pathname } = useLocation()
  const [isRouteReady, setIsRouteReady] = useState(false)

  const assetsForRoute = useMemo(() => {
    if (pathname === "/about") {
      return { images: [aboutImage], videos: [] }
    }

    if (pathname === "/video") {
      return { images: [], videos }
    }

    return { images, videos: [] }
  }, [pathname])

  useEffect(() => {
    let isCancelled = false

    const preloadRoute = async () => {
      const pendingImages = assetsForRoute.images.filter((src) => !loadedAssets.has(src))
      const pendingVideos = assetsForRoute.videos.filter((src) => !loadedAssets.has(src))

      if (pendingImages.length === 0 && pendingVideos.length === 0) {
        setIsRouteReady(true)
        return
      }

      setIsRouteReady(false)

      const tasks = [
        ...pendingImages.map((src) => preloadImage(src)),
        ...pendingVideos.map((src) => preloadVideoMetadata(src))
      ]

      await withTimeout(Promise.all(tasks))

      if (!isCancelled) {
        setIsRouteReady(true)
      }
    }

    preloadRoute()

    return () => {
      isCancelled = true
    }
  }, [assetsForRoute])

  if (!isRouteReady) {
    return (
      <div className="page-loader" role="status" aria-live="polite">
        <div className="page-loader__spinner" />
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  )
}

export default App
