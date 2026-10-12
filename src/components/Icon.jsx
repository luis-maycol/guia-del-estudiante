import React from 'react';

const PATHS = {
  solicitud: <><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  caja: <><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M6 9v.01M18 15v.01" /></>,
  presentar: <><path d="M12 16V4m0 0l-4 4m4-4l4 4" /><path d="M5 15v3a2 2 0 002 2h10a2 2 0 002-2v-3" /></>,
  verificar: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 12l2.5 2.5L16 9" /></>,
  elaborar: <><path d="M4 7h10M4 12h7M4 17h5" /><path d="M15 19l1-4 5-5 3 3-5 5z" transform="translate(-3 -1)" /></>,
  firma: <><path d="M4 20h16" /><path d="M5 16c2-6 4-9 5-9s0 6 2 6 2-3 4-3 1 3 3 3" /></>,
  entrega: <><circle cx="12" cy="9" r="5" /><path d="M9 13.5L8 21l4-2 4 2-1-7.5" /></>,
  reloj: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  edificio: <><path d="M4 21V5a1 1 0 011-1h9a1 1 0 011 1v16M15 10h4a1 1 0 011 1v10M3 21h18M8 8h3M8 12h3M8 16h3" /></>,
  buscar: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  flecha: <path d="M5 12h14m-6-6l6 6-6 6" />,
  volver: <path d="M19 12H5m6-6l-6 6 6 6" />,
  imprimir: <><path d="M7 9V4h10v5M7 17H5a1 1 0 01-1-1v-5a2 2 0 012-2h12a2 2 0 012 2v5a1 1 0 01-1 1h-2" /><rect x="7" y="14" width="10" height="6" /></>,
  descargar: <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />,
  alerta: <><path d="M12 3l10 18H2z" /><path d="M12 10v5M12 18v.01" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  tel: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  web: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></>,
  usuario: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /></>,
};

export function Icon({ name, size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.solicitud}
    </svg>
  );
}
