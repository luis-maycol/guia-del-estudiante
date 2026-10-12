import React from 'react';
import { Icon } from './Icon.jsx';

// Línea de tiempo interactiva: clic en cada etapa o usa Anterior / Siguiente.
export function Timeline({ proceso, step, onStep }) {
  const total = proceso.pasos.length;
  const actual = proceso.pasos[step];
  const progreso = Math.round(((step + 1) / total) * 100);
  const num = (n) => String(n).padStart(2, '0');

  return (
    <section className="lienzo-puntos rounded-2xl border border-slate-200 p-4 sm:p-8">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-azul">· Proceso de atención oficial ·</span>
        <h3 className="text-2xl font-extrabold">Etapas del flujo interactivo del trámite</h3>
        <p className="text-sm text-plomo">Haz clic sobre cada etapa para consultar responsables, acciones y validaciones.</p>
        <div className="mt-2 w-full max-w-md">
          <div className="mb-1 flex justify-between text-[11px] font-bold text-plomo">
            <span>Progreso del trámite</span>
            <span>{progreso}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-azul transition-all duration-500" style={{ width: `${progreso}%` }} />
          </div>
        </div>
      </div>

      {/* Nodos */}
      <div className="overflow-x-auto pb-2">
        <ol className="relative mx-auto flex" style={{ minWidth: `${total * (total > 8 ? 104 : 132)}px` }}>
          <div
            className="absolute top-8 h-0.5 bg-slate-200"
            style={{ left: `${50 / total}%`, right: `${50 / total}%` }}
            aria-hidden="true"
          />
          <div
            className="absolute top-8 h-0.5 bg-azul transition-all duration-500"
            style={{ left: `${50 / total}%`, width: `${(step / total) * 100}%` }}
            aria-hidden="true"
          />
          {proceso.pasos.map((p, i) => {
            const activo = i === step;
            const hecho = i < step;
            return (
              <li key={i} className="relative flex flex-1 justify-center">
                <button
                  type="button"
                  onClick={() => onStep(i)}
                  aria-current={activo ? 'step' : undefined}
                  className="flex w-full flex-col items-center gap-2 px-1 text-center"
                >
                  <span
                    className={`relative flex items-center justify-center rounded-full transition-all ${
                      activo
                        ? 'h-16 w-16 bg-azul text-white shadow-lg shadow-azul/30'
                        : hecho
                          ? 'h-14 w-14 mt-1 bg-blue-100 text-azul'
                          : 'h-14 w-14 mt-1 bg-plomo-claro text-plomo hover:bg-slate-200'
                    }`}
                  >
                    <Icon name={p.tipo} size={activo ? 26 : 22} />
                    <span
                      className={`absolute -bottom-1 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full text-[10px] font-extrabold text-white ${
                        activo ? 'bg-amarillo' : 'bg-plomo'
                      }`}
                    >
                      {i + 1}
                    </span>
                  </span>
                  <span className={`mt-1 text-xs font-bold leading-tight ${activo ? 'text-texto' : 'text-slate-600'}`}>
                    {i + 1}. {p.corto}
                  </span>
                  <span className="text-[11px] leading-tight text-plomo">{p.responsable}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detalle de la etapa */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 text-xs">
          <span className="flex items-center gap-3">
            <span className="rounded bg-blue-50 px-2 py-1 font-extrabold uppercase text-azul">
              {step === 0 ? 'Fase inicial' : step === total - 1 ? 'Fase final' : 'En curso'}
            </span>
            <span className="font-semibold text-plomo">Paso {num(step + 1)} de {num(total)}</span>
          </span>
          <span className="flex items-center gap-1.5 text-plomo">
            <Icon name="reloj" size={14} className="text-amarillo" />
            Plazo total del trámite: <strong className="text-texto">{proceso.plazo}</strong>
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-6">
          <div className="min-w-0 flex-[1.6_1_320px]">
            <h4 className="text-2xl font-extrabold">{actual.corto}</h4>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{actual.detalle}</p>
          </div>

          <aside className="flex min-w-0 flex-[1_1_260px] flex-col gap-3">
            <div className="rounded-xl bg-plomo-claro p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-plomo">Responsable de esta etapa</span>
              <p className="mt-2 flex items-center gap-3 text-sm font-extrabold text-texto">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-azul"><Icon name="edificio" size={18} /></span>
                {actual.responsable}
              </p>
            </div>
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
              <p className="flex items-center gap-2 font-extrabold text-amber-800"><Icon name="alerta" size={16} />Ten en cuenta</p>
              <p className="mt-1 leading-relaxed">{proceso.nota}</p>
            </div>
          </aside>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => onStep(step - 1)}
            className="min-h-11 rounded-lg px-4 text-sm font-bold text-plomo disabled:opacity-40 enabled:hover:bg-plomo-claro"
          >
            ← Paso anterior
          </button>
          <span className="text-xs font-bold text-plomo">{step + 1}/{total}</span>
          <button
            type="button"
            disabled={step === total - 1}
            onClick={() => onStep(step + 1)}
            className="min-h-11 rounded-lg bg-azul px-5 text-sm font-bold text-white disabled:opacity-40 enabled:hover:bg-[#152a65]"
          >
            Siguiente paso →
          </button>
        </div>
      </div>
    </section>
  );
}
