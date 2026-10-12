import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage.jsx';
import { CATALOG_PAGES } from './pages/index.js';
import { Footer } from './components/Footer.jsx';

// Al cambiar de página, vuelve al inicio del scroll (solo si cambió la ruta base, no el trámite).
function ScrollToTop() {
  const { pathname } = useLocation();
  const section = pathname.split('/')[1];
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [section]);
  return null;
}

// Rutas: "/landing" (inicio) y una por tarjeta del catálogo ("/matricula", "/matricula/mat-reserva", …).
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path="/landing" element={<LandingPage />} />
          {Object.entries(CATALOG_PAGES).flatMap(([id, Page]) => [
            <Route key={id} path={`/${id}`} element={<Page />} />,
            <Route key={`${id}-tramite`} path={`/${id}/:tramite`} element={<Page />} />,
          ])}
          <Route path="*" element={<Navigate to="/landing" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
