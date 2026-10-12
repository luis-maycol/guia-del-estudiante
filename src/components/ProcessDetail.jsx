import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GROUPS } from '../data/processes.js';
import { Icon } from './Icon.jsx';
import { Timeline } from './Timeline.jsx';

function Stat({ icon, bg, label, value, note }) {
  return (
    <div className="flex flex-1 basis-56 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${bg}`}>{icon}</span>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-wider text-plomo">{label}</p>
        <p className="text-lg font-extrabold leading-tight">{value}</p>
        <p className="text-xs text-plomo">{note}</p>
      </div>
    </div>
  );
}

// Vista de detalle: SIN hero. El escudo se repite en mosaico detrás de todo el contenido.
// Props: groupId (clave de GROUPS), path (ruta de la página, ej. '/matricula'), defaultId (trámite inicial).
// El trámite elegido vive en la URL: /matricula/mat-reserva
export function ProcessDetail({ groupId, path, defaultId }) {
  const grupo = GROUPS[groupId];
  const procesos = grupo.procesos;
  const { tramite } = useParams();
  const navigate = useNavigate();
  const proceso = procesos.find((p) => p.id === tramite) ?? procesos.find((p) => p.id === defaultId) ?? procesos[0];
  const [stepState, setStepState] = useState({ id: proceso.id, step: 0 });
  const step = stepState.id === proceso.id ? stepState.step : 0;
  const setStep = (n) => setStepState({ id: proceso.id, step: n });

  useEffect(() => {
    document.title = `${proceso.title} · Guía del Estudiante`;
  }, [proceso.title]);

  const elegir = (nuevo) => navigate(`${path}/${nuevo}`);

  return (
    <div className="escudo-mosaico">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-8 sm:py-12">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] font-medium text-slate-600">
          <span>
            Inicio › Catálogo de trámites › {grupo.titulo} › <strong className="text-rojo">{proceso.title}</strong>
          </span>
          <Link to="/landing" className="flex min-h-11 items-center gap-2 text-[13px] font-bold uppercase text-azul hover:text-rojo">
            <Icon name="volver" size={16} /> Volver al catálogo
          </Link>
        </div>

        {/* Banner del trámite */}
        <header className="flex flex-wrap items-end justify-between gap-6 rounded-2xl bg-gradient-to-r from-azul to-[#0f2438] p-6 text-white shadow-lg sm:p-9">
          <div className="max-w-3xl">
            <span className="inline-block rounded-md bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              Código MPA: {proceso.code} · Trámite presencial
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{proceso.title}</h1>
            <p className="mt-3 text-[15px] leading-relaxed text-blue-100">{proceso.summary}</p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-texto hover:bg-slate-100"
          >
            <Icon name="imprimir" size={18} /> Imprimir ficha
          </button>
        </header>

        {/* Filtro de los 6 subprocesos */}
        <div role="group" aria-label="Elegir trámite" className="flex flex-wrap gap-2">
          {procesos.map((p) => {
            const on = p.id === proceso.id;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={on}
                onClick={() => elegir(p.id)}
                className={`min-h-11 rounded-full border px-5 text-sm font-bold transition ${
                  on ? 'border-azul bg-azul text-white' : 'border-slate-300 bg-white text-slate-800 hover:border-azul'
                }`}
              >
                {p.chip}
              </button>
            );
          })}
        </div>

        {/* Datos clave */}
        <div className="flex flex-wrap gap-4">
          <Stat icon={<span className="text-base font-extrabold">S/</span>} bg="bg-rojo" label="Costo" value={proceso.costo} note={proceso.costoNota} />
          <Stat icon={<Icon name="caja" />} bg="bg-azul" label="Modalidad de pago" value="Efectivo en Caja" note="Presencial, en el IES" />
          <Stat icon={<Icon name="reloj" />} bg="bg-amarillo" label="Plazo de expedición" value={proceso.plazo} note="Desde que presentas el FUT" />
          <Stat icon={<Icon name="edificio" />} bg="bg-plomo" label="Área competente" value={proceso.area} note={proceso.refrendo} />
        </div>

        {/* Línea de tiempo interactiva (reinicia al cambiar de trámite) */}
        <Timeline key={proceso.id} proceso={proceso} step={step} onStep={setStep} />

        {/* Requisitos: lista simple, sin casillas */}
        <section className="rounded-2xl border border-slate-200 border-t-4 border-t-rojo bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-extrabold">Qué debes presentar</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {proceso.requisitos.map((r) => (
              <li key={r} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-800">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rojo" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-plomo">
            El monto puede ajustarse; el IES lo comunica antes del pago. El pago se hace directamente con el responsable de Caja.
          </p>
          <a
            href="lading"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-rojo px-5 text-sm font-bold text-white hover:bg-[#7f1616]"
          >
            <Icon name="descargar" size={18} /> Descargar Formato FUT (PDF)
          </a>
        </section>
      </div>
    </div>
  );
}
