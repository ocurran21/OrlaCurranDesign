import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage"
import AboutPage from "./pages/AboutPage/AboutPage"

function App() {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<HomePage/>} />
            <Route path={ROUTES.gallery} element={<GalleryPage/>} />
            <Route path={ROUTES.about} element={<AboutPage/>} />
        </Routes>
    );
}

export default App;