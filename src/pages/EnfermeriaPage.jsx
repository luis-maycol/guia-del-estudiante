import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon.jsx';

// Página de la tarjeta "ENFERMERÍA". URL: /enfermeria
// El Manual de Procesos Académicos no incluye este servicio: cuando se reciban los datos
// del tópico, conviértela en un ProcessDetail como las demás.
export function EnfermeriaPage() {
  useEffect(() => {
    document.title = 'Enfermería · Guía del Estudiante';
  }, []);

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amarillo text-white">
        <Icon name="alerta" size={30} />
      </span>
      <h1 className="text-4xl font-extrabold tracking-tight">Enfermería · Tópico</h1>
      <p className="max-w-xl text-base leading-relaxed text-slate-700">
        Este servicio no figura en el Manual de Procesos Académicos, por lo que aún no tenemos sus
        requisitos, costos ni plazos. Los publicaremos cuando el tópico institucional nos entregue la información.
      </p>
      <Link to="/landing" className="flex min-h-11 items-center rounded-lg bg-azul px-6 text-sm font-bold text-white hover:bg-[#152a65]">
        ← Volver al catálogo
      </Link>
    </section>
  );
}
