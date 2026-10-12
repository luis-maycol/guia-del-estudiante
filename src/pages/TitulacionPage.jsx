import React from 'react';
import { ProcessDetail } from '../components/ProcessDetail.jsx';

// Página de la tarjeta "TITULACIÓN" del catálogo. URL: /titulacion y /titulacion/:tramite
export function TitulacionPage() {
  return <ProcessDetail groupId="titulacion" path="/titulacion" defaultId="tit-bachiller" />;
}
