import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Analytics } from '@vercel/analytics/react'
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const handleContextMenu = (event) => {
          if (event.target.tagName === 'IMG') {
            event.preventDefault();
          }
        };
    
        document.addEventListener('contextmenu', handleContextMenu);
    
        return () => {
          document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <Analytics>
            <Routes>
            <Route path={ROUTES.home} element={<HomePage/>} />
            <Route path={ROUTES.gallery} element={<GalleryPage/>} />
            <Route path={ROUTES.about} element={<AboutPage/>} />
        </Routes>
        </Analytics>
    );
}

export default App;