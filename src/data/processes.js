// Procesos académicos agrupados por tarjeta del catálogo.
// Fuente: Manual de Procesos Académicos (MPA) del IES Público "Manuel Antonio Hierro Pozo".
// Certificados y constancias (capítulo 8) viven en certificateProcesses.js.
import { CERTIFICATE_SUBPROCESSES } from './certificateProcesses.js';

const FUT = 'Anexo 1 – FUT: Formulario Único de Trámite (solicitud del proceso)';
const FOTOS2 = 'Dos (02) fotografías recientes tamaño pasaporte con fondo blanco';
const BOLETA = 'Boleta de notas del periodo anterior';
const NO_ADEUDO = 'Tener la condición de no adeudo con el IES';

const EST = 'Estudiante / Mesa de Partes';
const ING = 'Ingresante / Mesa de Partes';
const PT = 'Profesional técnico / Mesa de Partes';
const CAJA = 'Caja';
const SEC = 'Secretario Académico';
const DIR = 'Director General';
const JUA = 'Jefe de Unidad Académica / Coordinador de Área';
const COMITE = 'Jefe de Unidad Académica / Comité de Titulación';
const MINEDU = 'MINEDU';

const paso = (tipo, corto, responsable, detalle) => ({ tipo, corto, responsable, detalle });
const base = { area: 'Secretaría Académica', refrendo: 'Refrendado por Dirección General' };
const pie = (o) => ({ ...base, ...o });

/* ───────────── MATRÍCULA (capítulos 2 a 5) ───────────── */
const MATRICULA = [
  pie({
    id: 'mat-ingresantes', chip: 'Matrícula de ingresantes', code: 'MAT-2A', title: 'Matrícula de ingresantes',
    summary: 'Registra por primera vez a quien obtuvo una vacante en un programa de estudios y le da la condición de estudiante.',
    costo: 'S/ 150.00', costoNota: 'Equivale al 2.730 % de la UIT', plazo: '01 día hábil',
    requisitos: [
      FUT,
      'Recibo por derecho de admisión',
      'Constancia de ingreso',
      'Acreditar haber concluido los estudios de Educación Básica en cualquiera de sus modalidades',
      'En caso de traslado o convalidación, el documento que lo sustente',
    ],
    nota: 'Tu código de matrícula será tu DNI (o carné de extranjería / pasaporte). Pueden matricularse quienes ingresaron por admisión ordinaria, exoneración, ingreso extraordinario, traslado, convalidación o repitencia.',
    pasos: [
      paso('solicitud', 'Cronograma', ING, 'Recoge la constancia de ingreso y verifica el cronograma de matrícula.'),
      paso('caja', 'Lista y pago', CAJA, 'Verifica la lista de ingresantes en las diversas modalidades y realiza el cobro de la matrícula.'),
      paso('verificar', 'Requisitos', SEC, 'Verifica los requisitos de matrícula. Si no cumples, emite un reporte de observaciones.'),
      paso('presentar', 'Subsanación', ING, 'Si hay observaciones, las subsanas y vuelves a presentar tu documentación.'),
      paso('entrega', 'Registro y ficha', SEC, 'Registra la matrícula en el sistema y entrega la ficha de matrícula.'),
    ],
  }),
  pie({
    id: 'mat-ratificacion', chip: 'Ratificación de matrícula', code: 'MAT-2B', title: 'Ratificación de matrícula',
    summary: 'Confirma tu matrícula desde el segundo periodo académico; es indispensable para conservar la condición de estudiante.',
    costo: 'S/ 150.00', costoNota: 'Equivale al 2.730 % de la UIT', plazo: '01 día hábil',
    requisitos: [FUT, 'Recibo por derecho de ratificación de matrícula', BOLETA, NO_ADEUDO],
    nota: 'Para ratificar debes haber sido promovido al siguiente periodo (más del 51 % de unidades didácticas matriculadas aprobadas). La ratificación se hace por unidades didácticas.',
    pasos: [
      paso('solicitud', 'Notas y cronograma', EST, 'Revisa tu boleta de notas y el cronograma de matrícula.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de ratificación de matrícula.'),
      paso('presentar', 'Completa el FUT', EST, 'Completa el FUT de solicitud de matrícula.'),
      paso('entrega', 'Revisión y registro', SEC, 'Revisa el documento de ratificación y registra la matrícula en el sistema.'),
    ],
  }),
  pie({
    id: 'mat-extemporanea', chip: 'Matrícula extemporánea', code: 'MAT-2C', title: 'Matrícula extemporánea',
    summary: 'Te permite matricularte fuera del plazo regular, en cada periodo académico, para mantener la condición de estudiante.',
    costo: 'S/ 200.00', costoNota: 'Equivale al 3.637 % de la UIT', plazo: '01 día hábil',
    requisitos: [FUT, 'Recibo por derecho de matrícula extemporánea', BOLETA, NO_ADEUDO],
    nota: 'Comienza cuando termina la matrícula regular y se realiza dentro de los tres (03) días siguientes a la fecha programada para la matrícula regular.',
    pasos: [
      paso('solicitud', 'Notas y cronograma', EST, 'Revisa tu boleta de notas y el cronograma de matrícula.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de matrícula extemporánea.'),
      paso('presentar', 'Completa el FUT', EST, 'Completa el FUT de solicitud de matrícula.'),
      paso('entrega', 'Revisión y registro', SEC, 'Revisa el documento y registra la matrícula en el sistema.'),
    ],
  }),
  pie({
    id: 'mat-reserva', chip: 'Reserva de matrícula', code: 'MAT-3', title: 'Reserva de matrícula',
    summary: 'Para ingresantes que no pueden iniciar sus estudios: reserva la vacante hasta por un máximo de cuatro (04) periodos académicos.',
    costo: 'S/ 50.00', costoNota: 'Equivale al 0.910 % de la UIT', plazo: '05 días hábiles',
    requisitos: [FUT, 'Recibo por derecho de reserva de matrícula'],
    nota: 'Se concede por motivos de salud, judiciales, viajes por fuerza mayor y otros evaluables por el IES. Debe solicitarse antes de culminar el proceso de matrícula. Si no te reincorporas en el plazo máximo, pierdes el derecho a la matrícula.',
    pasos: [
      paso('solicitud', 'Información', EST, 'Se informa sobre los requisitos para solicitar la reserva de matrícula.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de reserva de matrícula.'),
      paso('presentar', 'Completa el FUT', EST, 'Completa el FUT solicitando la reserva de matrícula.'),
      paso('elaborar', 'Informe', SEC, 'Revisa la solicitud y elabora el informe de reserva de matrícula.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de reserva de matrícula.'),
      paso('entrega', 'Registro', SEC, 'Registra la reserva de matrícula en el sistema.'),
    ],
  }),
  pie({
    id: 'mat-licencia-solicitud', chip: 'Licencia a solicitud', code: 'MAT-4A', title: 'Licencia de estudios a solicitud',
    summary: 'Para estudiantes matriculados que por fuerza mayor deben ausentarse: licencia hasta por cuatro periodos académicos consecutivos.',
    costo: 'S/ 50.00', costoNota: 'Equivale al 0.910 % de la UIT', plazo: '05 días hábiles',
    requisitos: [FUT, 'Recibo por derecho de licencia de estudios'],
    nota: 'La solicitud debe hacerse antes de la quinta semana de cada periodo académico. Al terminar la licencia ratificas tu matrícula y puedes pasar por convalidación si cambió el plan de estudios.',
    pasos: [
      paso('solicitud', 'Información', EST, 'Solicita información sobre la licencia de estudios.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de licencia de estudios.'),
      paso('presentar', 'Completa el FUT', EST, 'Completa el FUT solicitando la licencia de estudios.'),
      paso('elaborar', 'Revisión e informe', SEC, 'Revisa el expediente y elabora el informe de licencia de estudios.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de licencia de estudios.'),
      paso('entrega', 'Registro', SEC, 'Registra la licencia de estudios en el sistema.'),
    ],
  }),
  pie({
    id: 'mat-licencia-parte', chip: 'Licencia de parte', code: 'MAT-4B', title: 'Licencia de estudios de parte',
    summary: 'El IES la otorga hasta por dos periodos académicos a quien suspendió sus estudios por motivos excepcionales y no pudo pedir la licencia a tiempo.',
    costo: 'S/ 50.00', costoNota: 'Equivale al 0.910 % de la UIT', plazo: '05 días hábiles',
    requisitos: [FUT, 'Recibo por derecho de licencia de estudios'],
    nota: 'Para ratificar tu matrícula después, asumirás el costo del derecho de licencia.',
    pasos: [
      paso('verificar', 'Asistencia', SEC, 'Verifica la asistencia de los estudiantes y elabora el informe de licencia de parte.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de licencia de estudios.'),
      paso('entrega', 'Registro', SEC, 'Registra la licencia de estudios en el sistema.'),
    ],
  }),
  pie({
    id: 'mat-reincorporacion', chip: 'Reincorporación', code: 'MAT-5', title: 'Reincorporación',
    summary: 'Proceso para volver al instituto después de terminar tu periodo de reserva de matrícula o de licencia de estudios.',
    costo: 'S/ 200.00', costoNota: 'S/ 50 reincorporación + S/ 150 matrícula', plazo: '03 días hábiles',
    requisitos: [
      FUT,
      'Recibo por derecho de reincorporación',
      'Boleta de notas de periodos anteriores o ficha de seguimiento académico (Anexo 3)',
      'Copia de la resolución de reserva o licencia de estudios',
      'Recibo por derecho de matrícula',
    ],
    nota: 'Puedes solicitarla antes de que termine el plazo de la reserva o licencia. Si cambió el plan de estudios, se aplican los procesos de convalidación que correspondan.',
    pasos: [
      paso('solicitud', 'Cronograma', EST, 'Verifica el cronograma de matrícula.'),
      paso('caja', 'Pago de reincorporación', CAJA, 'Realiza el cobro por derecho de reincorporación.'),
      paso('presentar', 'Completa el FUT', EST, 'Completa el FUT solicitando la reincorporación.'),
      paso('elaborar', 'Revisión e informe', SEC, 'Revisa el expediente y elabora el informe de reincorporación.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de reincorporación.'),
      paso('caja', 'Pago de matrícula', CAJA, 'Realiza el cobro por derecho de matrícula.'),
      paso('entrega', 'Registro y ficha', SEC, 'Registra la reincorporación en el sistema y entrega la ficha de matrícula.'),
    ],
  }),
];

/* ───────────── TRASLADOS Y CONVALIDACIONES (capítulos 6 y 7) ───────────── */
const TRASLADOS = [
  pie({
    id: 'tra-interno', chip: 'Traslado interno', code: 'TRA-7A', title: 'Traslado interno',
    summary: 'Cambio de un programa de estudios a otro dentro del mismo IES, en cualquier sentido, sujeto a vacantes.',
    costo: 'S/ 150.00', costoNota: 'Equivale al 2.730 % de la UIT', plazo: '05 días hábiles',
    requisitos: [
      FUT,
      'Recibo por derecho de traslado interno',
      'Resolución que autoriza el traslado',
      'Constancia de vacante',
      'Certificado de estudios originales del IES que acredite haber culminado al menos el primer periodo académico',
    ],
    nota: 'Solo si completaste el primer periodo y como máximo hasta el segundo. Pide el traslado antes de que termine la matrícula. Gestión Administrativa ↔ Administración de Redes y Comunicaciones; Electricidad Industrial ↔ Mecatrónica Automotriz.',
    pasos: [
      paso('solicitud', 'Consulta de vacante', EST, 'Verifica el cronograma de matrícula y solicita si hay vacante para traslado interno.'),
      paso('verificar', '¿Hay vacante?', SEC, 'Verifica si existe vacante en el programa solicitado. Si no hay, el trámite termina.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de traslado interno.'),
      paso('presentar', 'Presenta el FUT', EST, 'Presenta el FUT solicitando el traslado interno.'),
      paso('verificar', 'Expediente y convalidación', JUA, 'Verifica el expediente de traslado interno y realiza la convalidación.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de traslado interno.'),
      paso('entrega', 'Registro', SEC, 'Registra el traslado interno en el sistema.'),
    ],
  }),
  pie({
    id: 'tra-externo-ingreso', chip: 'Traslado externo (ingreso)', code: 'TRA-7B', title: 'Traslado externo: si vienes de otra IES',
    summary: 'Para estudiantes de otro instituto que piden transferirse al IES Hierro Pozo, siempre que existan vacantes.',
    costo: 'S/ 300.00', costoNota: 'Equivale al 5.456 % de la UIT', plazo: '07 días hábiles',
    requisitos: [
      FUT,
      'Constancia de vacante para traslado externo',
      'Recibo de pago por derecho de traslado externo',
      'Expediente de traslado: ficha de matrícula, certificado de estudios del IES de procedencia, certificado de estudios secundarios, copia de DNI, 02 fotografías pasaporte fondo blanco y resolución que autoriza el traslado',
      'Haber culminado al menos el primer periodo y como máximo hasta el segundo',
      'Sílabos para evaluar y emitir el informe de unidades didácticas convalidadas',
    ],
    nota: 'Presenta la solicitud antes de que termine la matrícula. El IES convalida primero los planes de estudio y garantiza la vacante antes de procesar la solicitud.',
    pasos: [
      paso('solicitud', 'Consulta de vacante', EST, 'Verifica el cronograma de matrícula y solicita si hay vacante para traslado externo.'),
      paso('verificar', '¿Hay vacante?', SEC, 'Verifica si existe vacante. Si no hay, el trámite termina.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de traslado externo.'),
      paso('presentar', 'Presenta el FUT', EST, 'Presenta el FUT solicitando el traslado externo.'),
      paso('verificar', 'Expediente', JUA, 'Verifica el expediente de traslado externo. Si cumple, realiza el traslado y emite informe.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de traslado externo.'),
      paso('entrega', 'Registro', SEC, 'Registra el traslado externo en el sistema.'),
    ],
  }),
  pie({
    id: 'tra-externo-salida', chip: 'Traslado externo (salida)', code: 'TRA-7C', title: 'Traslado externo: si sales a otra IES',
    summary: 'Para estudiantes del IES que piden transferirse a otro instituto.',
    costo: 'S/ 350.00', costoNota: 'Equivale al 6.364 % de la UIT', plazo: '07 días hábiles',
    requisitos: [FUT, 'Recibo de pago por derecho de traslado externo', 'Constancia de vacante de la IES de destino'],
    nota: 'Solo si completaste el primer periodo y como máximo hasta el segundo, con vacante disponible. Presenta la solicitud antes de que termine la matrícula; el IES gestiona la documentación necesaria.',
    pasos: [
      paso('solicitud', 'Información', EST, 'Solicita información sobre el traslado externo.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de traslado externo.'),
      paso('presentar', 'Presenta el FUT', EST, 'Presenta el FUT adjuntando la constancia de vacante del IES al que te trasladas.'),
      paso('verificar', 'Verificación', SEC, 'Verifica el expediente y los requisitos, y emite el informe.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de traslado externo a otra IES.'),
      paso('entrega', 'Registro y legajo', SEC, 'Registra el traslado externo en el sistema y entrega el legajo personal al estudiante.'),
    ],
  }),
  pie({
    id: 'tra-conv-planes', chip: 'Convalidación entre planes', code: 'CON-6A', title: 'Convalidación entre planes de estudio',
    summary: 'El IES reconoce unidades didácticas o módulos que ya aprobaste, al cambiar de plan o de programa de estudios.',
    costo: 'S/ 35.00', costoNota: 'Equivale al 0.637 % de la UIT', plazo: '05 días hábiles',
    requisitos: [
      FUT,
      'Resolución que autoriza el traslado (de corresponder)',
      'Recibo por derecho de convalidación entre planes y/o programas de estudio',
      'Certificado de estudios del IES de procedencia',
      'Sílabos del programa de estudios',
    ],
    nota: 'Las unidades didácticas deben estar aprobadas, tener al menos 80 % de aprendizajes similares y el mismo nivel de complejidad. Solicítala luego de ser admitido por la institución.',
    pasos: [
      paso('solicitud', 'Cronograma y consulta', EST, 'Verifica el cronograma de matrícula y consulta sobre la convalidación de estudios.'),
      paso('verificar', 'Requisitos', SEC, 'Verifica los requisitos. Si no cumples, el Jefe de Unidad Académica emite un informe de no cumplimiento.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de convalidación.'),
      paso('presentar', 'Presenta el FUT', EST, 'Presenta el FUT solicitando la convalidación entre planes y/o programas de estudio.'),
      paso('verificar', 'Convalidación', JUA, 'Verifica el expediente y realiza la convalidación.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de convalidación.'),
      paso('entrega', 'Registro', SEC, 'Registra la convalidación en el sistema.'),
    ],
  }),
  pie({
    id: 'tra-conv-competencia', chip: 'Convalidación por competencias', code: 'CON-6B', title: 'Convalidación por unidades de competencia',
    summary: 'Reconoce competencias de un certificado de competencia laboral o de un certificado modular con las de tu programa de estudios.',
    costo: 'S/ 55.00', costoNota: 'Equivale al 1.000 % de la UIT', plazo: '05 días hábiles',
    requisitos: [
      FUT,
      'Recibo por derecho de convalidación por unidad de competencia',
      'Resolución que autoriza el traslado (de corresponder)',
      'Certificado de estudios y sílabos del instituto de origen',
      'Certificado de competencia laboral o certificado modular (de corresponder)',
    ],
    nota: 'El certificado de competencia laboral debe estar vigente y emitido por un centro de certificación autorizado. Las unidades deben tener contenidos similares y el mismo nivel de complejidad.',
    pasos: [
      paso('solicitud', 'Cronograma y consulta', EST, 'Verifica el cronograma de matrícula y consulta sobre la convalidación de unidades de competencia.'),
      paso('verificar', 'Requisitos', SEC, 'Verifica los requisitos. Si no cumples, el Jefe de Unidad Académica emite un informe de no cumplimiento.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de convalidación de unidades de competencia.'),
      paso('presentar', 'Presenta el FUT', EST, 'Presenta el FUT solicitando la convalidación por unidades de competencia.'),
      paso('verificar', 'Convalidación', JUA, 'Verifica el expediente y realiza la convalidación.'),
      paso('firma', 'Firma de RD', DIR, 'Firma la RD de autorización de convalidación.'),
      paso('entrega', 'Registro', SEC, 'Registra la convalidación en el sistema.'),
    ],
  }),
];

/* ───────────── TITULACIÓN (capítulos 9 a 12) ───────────── */
const REQ_TITULO = [
  FUT,
  'Cuatro (04) fotografías recientes tamaño pasaporte con fondo blanco',
  'Recibo por derecho de título profesional técnico',
  'Certificado de estudios que acredite haber culminado el programa de estudios',
  'Haber obtenido el grado de bachiller técnico',
];
const OPCIONAL_TITULO = [
  'Constancia de no adeudo',
  'Constancia de haber aprobado el curso de actualización, en caso corresponda',
  'Constancia de complementación de aprendizaje con fines de titulación, en caso corresponda',
];

const pasosTitulo = (accionSustentacion, tituloPaso) => [
  paso('solicitud', 'Requisitos', PT, 'Solicita los requisitos para obtener el título profesional técnico.'),
  paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de titulación.'),
  paso('presentar', 'Presenta el FUT', PT, 'Presenta el FUT para solicitar la titulación.'),
  paso('verificar', 'Asesor y comité', COMITE, 'Designa al asesor del egresado y al comité de titulación.'),
  paso('verificar', 'Expediente', SEC, 'Verifica el expediente y proyecta la resolución que lo declara expedito.'),
  paso('firma', 'Expedito', DIR, 'Firma la RD que declara expedito al egresado.'),
  paso('elaborar', tituloPaso, COMITE, accionSustentacion),
  paso('verificar', 'Resultados', SEC, 'Verifica el informe del comité y publica los resultados.'),
  paso('firma', 'RD de otorgamiento', DIR, 'Emite y firma la RD para el otorgamiento del título profesional técnico.'),
  paso('elaborar', 'Caligrafiado', SEC, 'Realiza el caligrafiado del título profesional técnico.'),
  paso('firma', 'Firma del título', DIR, 'Firma el título profesional técnico.'),
  paso('verificar', 'Registro en TITULA', SEC, 'Registra el título en el sistema TITULA.'),
  paso('verificar', 'Código MINEDU', MINEDU, 'Emite el código del título previa verificación.'),
  paso('firma', 'Informe MINEDU', DIR, 'Recibe el informe del MINEDU.'),
  paso('entrega', 'Registro y entrega', SEC, 'Registra el título en el libro y lo entrega al titulado.'),
];

const TITULACION = [
  pie({
    id: 'tit-bachiller', chip: 'Grado de bachiller técnico', code: 'GRA-9', title: 'Grado de bachiller técnico',
    summary: 'Reconocimiento académico para el egresado que culminó satisfactoriamente un programa de estudios del nivel profesional técnico.',
    costo: 'S/ 600.00', costoNota: 'Equivale al 10.909 % de la UIT', plazo: '30 días hábiles',
    requisitos: [
      FUT,
      'Recibo por derecho del grado de bachiller técnico',
      'Haber aprobado el programa de estudios con un mínimo de 120 créditos',
      'Constancia de haber cumplido con las EFSRT',
      FOTOS2,
      'Documento que acredite el conocimiento de un idioma extranjero o de una lengua originaria',
    ],
    nota: 'Se emite con el modelo único nacional del MINEDU, que registra el grado. Si presentas un trabajo, se revisa manualmente que no supere 25 % de similitud con las referencias.',
    pasos: [
      paso('solicitud', 'Requisitos', PT, 'Solicita los requisitos para obtener el grado de bachiller técnico.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de grado de bachiller técnico.'),
      paso('presentar', 'Presenta el FUT', PT, 'Presenta el FUT para solicitar el grado de bachiller técnico.'),
      paso('verificar', 'Verificación', SEC, 'Verifica los requisitos del expediente y emite el grado de bachiller técnico.'),
      paso('firma', 'Firma', DIR, 'Firma el grado de bachiller técnico.'),
      paso('entrega', 'MINEDU y entrega', SEC, 'Informa al MINEDU para su autorización, registra y entrega el grado.'),
    ],
  }),
  pie({
    id: 'tit-trabajo', chip: 'Título: trabajo de aplicación', code: 'TIT-10A', title: 'Título profesional técnico por trabajo de aplicación',
    summary: 'Das solución técnica a una problemática del quehacer profesional de tu programa y la sustentas ante un jurado.',
    costo: 'S/ 1 550.00', costoNota: 'Equivale al 28.182 % de la UIT', plazo: '60 días hábiles',
    requisitos: [...REQ_TITULO, 'Acta de haber aprobado un trabajo de aplicación', ...OPCIONAL_TITULO],
    nota: 'Se asigna un docente asesor. Puede hacerse hasta entre 4 bachilleres (multidisciplinario) o 2 del mismo programa. El jurado tiene de 3 a 5 miembros. Tienes hasta 6 años desde tu egreso para solicitar la titulación.',
    pasos: pasosTitulo('El egresado sustenta el trabajo de aplicación profesional ante el comité.', 'Sustentación'),
  }),
  pie({
    id: 'tit-examen', chip: 'Título: examen de suficiencia', code: 'TIT-10B', title: 'Título profesional técnico por examen de suficiencia',
    summary: 'Demuestras tus conocimientos teórico-prácticos con una evaluación escrita (30 %) y otra práctica o demostrativa (70 %).',
    costo: 'S/ 1 550.00', costoNota: 'Equivale al 28.182 % de la UIT', plazo: '60 días hábiles',
    requisitos: [...REQ_TITULO, 'Acta de haber aprobado un examen de suficiencia profesional', ...OPCIONAL_TITULO],
    nota: 'El jurado tiene de 2 a 4 miembros. Tienes hasta tres (3) oportunidades de evaluación; si las superas, debes optar por otra modalidad de titulación.',
    pasos: pasosTitulo('El comité aplica el examen de suficiencia profesional.', 'Examen'),
  }),
  pie({
    id: 'tit-duplicado', chip: 'Duplicado de grado o título', code: 'DUP-11', title: 'Duplicado de grado o título',
    summary: 'Se emite únicamente por pérdida, siniestro o deterioro del grado de bachiller técnico o del título profesional técnico original.',
    costo: 'S/ 800.00', costoNota: 'Título · Bachiller técnico: S/ 400.00', plazo: '60 días hábiles',
    requisitos: [
      FUT,
      'Recibo por derecho de duplicado',
      'RD suscrita por el director general con los datos del grado o título primigenio',
      FOTOS2,
      'Certificado de denuncia policial de pérdida o robo',
      'En caso de deterioro, adjuntar el título original',
    ],
    nota: 'El duplicado anula automáticamente el original, pero no sus efectos. Reproduce el documento tal cual, salvo la fecha de emisión y los datos del director en funciones. Genera un código interno en TITULA, no un nuevo Código Único de Registro.',
    pasos: [
      paso('solicitud', 'Requisitos', PT, 'Solicita los requisitos para el duplicado del grado de bachiller técnico y/o título profesional técnico.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de duplicado.'),
      paso('presentar', 'Presenta el FUT', PT, 'Presenta el FUT para solicitar el duplicado.'),
      paso('verificar', 'Verificación', SEC, 'Verifica los requisitos del expediente y emite el informe de duplicado.'),
      paso('firma', 'Aprobación con RD', DIR, 'Verifica el expediente y aprueba el otorgamiento del duplicado con RD.'),
      paso('verificar', 'Oficio MINEDU', MINEDU, 'Verifica y aprueba con oficio el duplicado.'),
      paso('firma', 'Recibe oficio', DIR, 'Recibe el oficio e informa a Secretaría Académica.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega el duplicado.'),
    ],
  }),
  pie({
    id: 'tit-rectificacion', chip: 'Rectificación de datos', code: 'REC-12', title: 'Rectificación de datos',
    summary: 'Corrige nombres, apellidos u otros datos del grado o título cuando hay una resolución que lo ordena o por errores materiales.',
    costo: 'S/ 500.00', costoNota: 'Título · Bachiller técnico: S/ 250.00', plazo: '45 días hábiles',
    requisitos: [FUT, 'Recibo por derecho de rectificación de datos', 'Documento que acredite los datos a rectificar'],
    nota: 'El pago no aplica cuando el error material es del IES. Se rectifica por resolución administrativa o judicial, o por errores materiales; genera un código interno en TITULA.',
    pasos: [
      paso('solicitud', 'Requisitos', PT, 'Solicita los requisitos para la rectificación de datos.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de rectificación de datos.'),
      paso('presentar', 'Presenta el FUT', PT, 'Presenta el FUT para solicitar la rectificación de datos.'),
      paso('verificar', 'Verificación', SEC, 'Verifica los requisitos del expediente y emite el informe de rectificación.'),
      paso('firma', 'Aprobación con RD', DIR, 'Verifica el expediente y aprueba la rectificación con RD.'),
      paso('verificar', 'Oficio MINEDU', MINEDU, 'Verifica y aprueba con oficio la rectificación.'),
      paso('firma', 'Recibe oficio', DIR, 'Recibe el oficio e informa a Secretaría Académica.'),
      paso('entrega', 'Emisión y entrega', SEC, 'Emite los documentos rectificados, los registra y los entrega.'),
    ],
  }),
];

/* ───────────── Grupos que abren desde el catálogo ───────────── */
export const GROUPS = {
  // Matrícula incluye también la convalidación a) entre planes y b) por unidades de competencia (capítulo 6 del MPA).
  matricula: { titulo: 'Matrícula', procesos: [...MATRICULA, ...TRASLADOS.filter((p) => p.id.startsWith('tra-conv'))] },
  traslados: { titulo: 'Traslados y convalidaciones', procesos: TRASLADOS },
  certificados: { titulo: 'Certificados y constancias', procesos: CERTIFICATE_SUBPROCESSES },
  titulacion: { titulo: 'Titulación', procesos: TITULACION },
};
