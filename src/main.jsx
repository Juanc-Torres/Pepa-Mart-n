import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import "./styles/global.css"
import "./styles/navbar.css"
import "./styles/gallery.css"
import "./styles/lightbox.css"
import "./styles/about.css"
import "./styles/footer.css"
import "./styles/videoGallery.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)