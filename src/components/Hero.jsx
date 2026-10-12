import React from 'react';
import { asset } from '../lib/asset.js';
import { Icon } from './Icon.jsx';

// Hero de la LANDING (ancho completo). No se usa dentro de la vista de proceso.
export function Hero({ query, onQuery, onSearch }) {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-[#0b1220] text-white">
      {/* Foto de fondo a pantalla completa: public/hero.webp */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${asset('hero.webp')}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/90 via-[#0b1220]/65 to-[#0b1220]/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/40 via-transparent to-[#0b1220]/60" />

      {/* Escudo + nombre, arriba a la derecha */}
      <div className="absolute right-4 top-6 flex items-center gap-3 sm:right-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/25 bg-black">
          <img src={asset('escudo.png')} alt="Escudo del IESP Manuel Antonio Hierro Pozo" className="h-10 w-10 object-contain invert" />
        </span>
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300">
            Instituto de Educación Superior Público
          </span>
          <span className="text-[15px] font-extrabold uppercase">Manuel Antonio Hierro Pozo</span>
        </span>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-28 sm:px-12 lg:px-24">
        <h1 className="text-5xl font-extrabold leading-none tracking-tight drop-shadow-lg sm:text-7xl">
          Guía del Estudiante
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-200">
          Aquí encontrarás de forma clara y estructurada todos los requisitos, procedimientos y
          consideraciones necesarias para gestionar tus trámites con éxito.
        </p>

        <form
          className="mt-3 flex max-w-xl flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
        >
          <label htmlFor="buscar-tramite" className="text-[15px] font-bold">
            Para empezar, busca tu trámite o servicio institucional
          </label>
          <div className="flex flex-wrap gap-2.5">
            <input
              id="buscar-tramite"
              type="text"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Buscar trámite… ej. constancia, modular"
              className="h-13 min-w-0 flex-1 basis-64 rounded-md bg-white px-4 text-[15px] text-texto outline-none focus:ring-2 focus:ring-amarillo"
            />
            <button
              type="submit"
              className="flex h-13 items-center gap-2 rounded-md border border-white/25 bg-azul px-6 text-[15px] font-bold hover:bg-[#152a65]"
            >
              <Icon name="buscar" size={18} />
              Buscar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
