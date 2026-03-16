import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Video from "./pages/Video"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
      <Analytics />
    </div>
  )
}

export default App