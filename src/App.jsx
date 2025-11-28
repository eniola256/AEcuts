import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './HomePage.jsx'
import ServicePage from "./ServicePage.jsx";
import GalleryPage from "./GalleryPage.jsx";
import BookingPage from "./BookingPage.jsx";
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
