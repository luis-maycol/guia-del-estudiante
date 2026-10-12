import { MatriculaPage } from './MatriculaPage.jsx';
import { TrasladosPage } from './TrasladosPage.jsx';
import { ConstanciasPage } from './ConstanciasPage.jsx';
import { CertificadosPage } from './CertificadosPage.jsx';
import { TitulacionPage } from './TitulacionPage.jsx';
import { EnfermeriaPage } from './EnfermeriaPage.jsx';

// id de la tarjeta del catálogo (src/data/catalog.js) → página que abre.
export const CATALOG_PAGES = {
  matricula: MatriculaPage,
  traslados: TrasladosPage,
  constancias: ConstanciasPage,
  certificados: CertificadosPage,
  titulacion: TitulacionPage,
  enfermeria: EnfermeriaPage,
};
