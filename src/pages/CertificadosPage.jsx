import React from 'react';
import { ProcessDetail } from '../components/ProcessDetail.jsx';

// Página de la tarjeta "CERTIFICADOS" del catálogo. URL: /certificados y /certificados/:tramite
export function CertificadosPage() {
  return <ProcessDetail groupId="certificados" path="/certificados" defaultId="cert-estudios" />;
}
