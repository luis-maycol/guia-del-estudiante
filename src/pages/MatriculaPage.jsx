import React from 'react';
import { ProcessDetail } from '../components/ProcessDetail.jsx';

// Página de la tarjeta "MATRÍCULA" del catálogo. URL: /matricula y /matricula/:tramite
export function MatriculaPage() {
  return <ProcessDetail groupId="matricula" path="/matricula" defaultId="mat-ingresantes" />;
}
