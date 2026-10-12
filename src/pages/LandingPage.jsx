import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero.jsx';
import { Catalog } from '../components/Catalog.jsx';

// Página de inicio. URL: /landing
export function LandingPage() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = 'Guía del Estudiante - IESP Manuel Antonio Hierro Pozo';
  }, []);

  const handleSearch = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero query={query} onQuery={setQuery} onSearch={handleSearch} />
      <Catalog query={query} />
    </>
  );
}
