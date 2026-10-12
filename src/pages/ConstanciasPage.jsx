import React from 'react';
import { ProcessDetail } from '../components/ProcessDetail.jsx';

// Página de la tarjeta "CONSTANCIAS" del catálogo. URL: /constancias y /constancias/:tramite
export function ConstanciasPage() {
  return <ProcessDetail groupId="certificados" path="/constancias" defaultId="ingreso" />;
}
