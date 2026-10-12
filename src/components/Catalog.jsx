import React from 'react';
import { Link } from 'react-router-dom';
import { CATALOG } from '../data/catalog.js';
import { asset } from '../lib/asset.js';
import { Icon } from './Icon.jsx';

const BTN = { azul: 'bg-azul hover:bg-[#152a65]', rojo: 'bg-rojo hover:bg-[#7f1616]', amarillo: 'bg-amarillo hover:bg-[#b45f05]' };
const FADE = { azul: 'from-azul/80', rojo: 'from-rojo/80', amarillo: 'from-amarillo/80' };

export function Catalog({ query }) {
  const q = query.trim().toLowerCase();
  const items = q
    ? CATALOG.filter((c) => `${c.title} ${c.desc}`.toLowerCase().includes(q))
    : CATALOG;

  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-4 py-16 sm:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Catálogo de <span className="text-azul">Trámites</span>
        </h2>
        <p className="mt-2 text-sm text-plomo">
          Gestiona tus solicitudes y servicios académicos de manera rápida, transparente y sencilla.
        </p>
      </div>

      {items.length === 0 && (
        <p className="text-center text-sm font-semibold text-rojo">
          Ningún trámite coincide con tu búsqueda. Prueba con “constancia” o “certificado”.
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <article key={c.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
            <div
              className="relative flex h-36 items-center justify-center bg-slate-700 bg-cover bg-center"
              style={c.image ? { backgroundImage: `url('${asset(c.image)}')` } : undefined}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${FADE[c.color]} to-slate-900/60`} />
              <h3 className="relative text-2xl font-extrabold tracking-wide text-white drop-shadow">{c.title}</h3>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <p className="text-[15px] font-bold">{c.desc}</p>
              <p className="flex items-center gap-2 text-xs text-plomo"><Icon name="reloj" size={14} className="text-amarillo" />{c.dias}</p>
              <p className="flex items-center gap-2 text-xs text-plomo"><Icon name="edificio" size={14} className="text-azul" />{c.area}</p>
              <Link
                to={`/${c.id}`}
                className={`mt-2 flex min-h-11 items-center justify-center rounded-lg text-sm font-bold text-white transition ${BTN[c.color]}`}
              >
                Ver más
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
