import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage"
import AboutPage from "./pages/AboutPage/AboutPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/about" element={<AboutPage/>} />
        </Routes>
    );
}

export default App;