import React from 'react';
import { ProcessDetail } from '../components/ProcessDetail.jsx';

// Página de la tarjeta "TRASLADOS" del catálogo. URL: /traslados y /traslados/:tramite
export function TrasladosPage() {
  return <ProcessDetail groupId="traslados" path="/traslados" defaultId="tra-interno" />;
}
