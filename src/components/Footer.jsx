import React from 'react';
import { asset } from '../lib/asset.js';
import { Icon } from './Icon.jsx';

export function Footer() {
  return (
    <footer className="bg-azul-footer text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-sm sm:px-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <span className="flex w-fit items-center gap-2 rounded-md bg-white px-3 py-2 text-texto">
            <img src={asset('escudo.png')} alt="" className="h-8 w-8 object-contain" />
            <span className="text-xs font-extrabold uppercase leading-tight">IESP Manuel Antonio<br />Hierro Pozo</span>
          </span>
          <p className="leading-relaxed text-slate-300">
            Formando profesionales técnicos competentes, innovadores y con sólidos principios éticos
            para contribuir al desarrollo socioeconómico de la región Ayacucho y el Perú.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Portales y Trámites</h4>
          <ul className="flex flex-col gap-2 text-slate-300">
            <li>Admisión y Matrículas</li>
            <li>Programas de Estudio</li>
            <li>Trámites y Procesos Académicos</li>
            <li>Transparencia Institucional</li>
            <li>Bolsa Laboral</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold">Contacto</h4>
          <ul className="flex flex-col gap-2.5 text-slate-300">
            <li className="flex gap-2"><Icon name="pin" size={16} className="mt-0.5 shrink-0 text-rojo" />Av. Universitaria N° 120, Ayacucho, Perú</li>
            <li className="flex gap-2"><Icon name="tel" size={16} className="mt-0.5 shrink-0 text-rojo" />Central Telefónica: (066) 285612</li>
            <li className="flex gap-2"><Icon name="mail" size={16} className="mt-0.5 shrink-0" />Mesa de Partes: mesadepartes@iespmahp.edu.pe</li>
            <li className="flex gap-2"><Icon name="web" size={16} className="mt-0.5 shrink-0" />www.tecnologicohierropozo.edu.pe</li>
            <li className="flex gap-2"><Icon name="reloj" size={16} className="mt-0.5 shrink-0" />Lunes a Viernes: 8:00am - 5:00pm</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © 2026 Instituto de Educación Superior Público “Manuel Antonio Hierro Pozo”. Todos los derechos reservados.
      </p>
    </footer>
  );
}
