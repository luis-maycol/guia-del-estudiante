// Datos reales extraídos del Manual de Procesos Académicos (MPA) del IES Público
// "Manuel Antonio Hierro Pozo" — Capítulo 8: Obtención de certificados y/o constancias.
// tipo = icono del nodo en la línea de tiempo (ver components/Icon.jsx)

const FUT = 'Anexo 1 – FUT: Formulario Único de Trámite (solicitud del proceso)';
const FOTOS = 'Dos (02) fotografías recientes tamaño pasaporte con fondo blanco';

const MP = 'Estudiante / Mesa de Partes';
const CAJA = 'Caja';
const SEC = 'Secretario Académico';
const DIR = 'Director General';

const paso = (tipo, corto, responsable, detalle) => ({ tipo, corto, responsable, detalle });

export const CERTIFICATE_SUBPROCESSES = [
  {
    id: 'ingreso',
    chip: 'Constancia de ingreso',
    code: 'CER-8A',
    title: 'Constancia de ingreso',
    summary:
      'Documento oficial para quien obtuvo una vacante en el IES tras aprobar el examen de admisión, sin importar la modalidad por la que ingresó.',
    costo: 'S/ 10.00',
    costoNota: 'Equivale al 0.182 % de la UIT',
    plazo: '01 día hábil',
    area: 'Secretaría Académica',
    refrendo: 'Refrendado por Dirección General',
    requisitos: [FUT, 'Recibo por derecho de constancia de ingreso'],
    nota: 'Se entrega a quien aprobó el examen de admisión y obtuvo una vacante.',
    pasos: [
      paso('solicitud', 'Solicitud', 'Ingresante / Mesa de Partes', 'Solicita la constancia de ingreso presentando tu FUT y el recibo de pago.'),
      paso('verificar', 'Verificación', SEC, 'Verifica la lista de ingresantes y elabora la constancia de ingreso.'),
      paso('firma', 'Firma', DIR, 'Firma la constancia de ingreso.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega la constancia de ingreso.'),
    ],
  },
  {
    id: 'egreso',
    chip: 'Constancia de egreso',
    code: 'CER-8B',
    title: 'Constancia de egreso',
    summary:
      'Acredita que concluiste satisfactoriamente todas las unidades didácticas y las EFSRT de tu programa de estudios.',
    costo: 'S/ 25.00',
    costoNota: 'Equivale al 0.455 % de la UIT',
    plazo: '01 día hábil',
    area: 'Secretaría Académica',
    refrendo: 'Refrendado por Dirección General',
    requisitos: [
      FUT,
      'Recibo por derecho de constancia de egreso',
      'Ficha de seguimiento académico (Anexo 3)',
      'No tener deudas pendientes con el IES',
    ],
    nota: 'Se otorga al egresado que finalizó los periodos de estudio y los módulos de las EFSRT.',
    pasos: [
      paso('solicitud', 'Requisitos', MP, 'Verifica que cumples los requisitos de la constancia de egreso.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de constancia de egreso.'),
      paso('presentar', 'Presenta el FUT', MP, 'Presenta el FUT para solicitar la constancia de egreso.'),
      paso('verificar', 'Verificación', SEC, 'Verifica el expediente y elabora la constancia de egreso.'),
      paso('firma', 'Firma', DIR, 'Firma la constancia de egreso.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega la constancia de egreso.'),
    ],
  },
  {
    id: 'noadeudar',
    chip: 'Constancia de no adeudar',
    code: 'CER-8C',
    title: 'Constancia de no adeudar',
    summary:
      'Acredita que no tienes obligaciones pendientes con el instituto durante los periodos académicos de tu programa.',
    costo: 'S/ 25.00',
    costoNota: 'Equivale al 0.455 % de la UIT',
    plazo: '03 días hábiles',
    area: 'Secretaría Académica',
    refrendo: 'Refrendado por Dirección General',
    requisitos: [FUT, 'Recibo por derecho de constancia de no adeudar'],
    nota: 'Puedes solicitarla una vez que concluiste todos los requisitos académicos y administrativos de tu formación.',
    pasos: [
      paso('solicitud', 'Solicitud', MP, 'Solicita la constancia de no adeudar.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de constancia de no adeudar.'),
      paso('presentar', 'Presenta el FUT', MP, 'Presenta el FUT para solicitar la constancia de no adeudar.'),
      paso('verificar', 'Informe administrativo', 'Jefe de Unidad Administrativa', 'Verifica que no tengas cuentas pendientes y emite el informe de no adeudar por parte de administración.'),
      paso('verificar', 'Informe académico', 'Coordinador de Área Académica', 'Verifica que no tengas cuentas pendientes y emite el informe de no adeudar del área académica.'),
      paso('elaborar', 'Elaboración', SEC, 'Verifica los informes de no adeudar y elabora la constancia.'),
      paso('firma', 'Firma', DIR, 'Firma la constancia de no adeudar.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega la constancia de no adeudar.'),
    ],
  },
  {
    id: 'estudios',
    chip: 'Constancia de estudios',
    code: 'CER-8D',
    title: 'Constancia de estudios',
    summary:
      'Acredita que cursaste estudios hasta la fecha de tu solicitud dentro de un programa académico específico.',
    costo: 'S/ 15.00',
    costoNota: 'Equivale al 0.273 % de la UIT',
    plazo: '03 días hábiles',
    area: 'Secretaría Académica',
    refrendo: 'Refrendado por Dirección General',
    requisitos: [FUT, 'Recibo por derecho de constancia de estudios'],
    nota: 'Se emite según el modelo establecido por el propio IES.',
    pasos: [
      paso('solicitud', 'Solicitud', MP, 'Solicita la constancia de estudios.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de constancia de estudios.'),
      paso('presentar', 'Presenta el FUT', MP, 'Presenta el FUT para solicitar la constancia de estudios.'),
      paso('elaborar', 'Elaboración', SEC, 'Elabora la constancia de estudios.'),
      paso('firma', 'Firma', DIR, 'Firma la constancia de estudios.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega la constancia de estudios.'),
    ],
  },
  {
    id: 'cert-estudios',
    chip: 'Certificado de estudios',
    code: 'CER-8E',
    title: 'Certificado de estudios',
    summary:
      'Documento que acredita las calificaciones que obtuviste en las unidades didácticas desarrolladas hasta el momento de tu solicitud.',
    costo: 'S/ 120.00',
    costoNota: 'Por periodo académico concluido · 2.182 % de la UIT',
    plazo: '03 días hábiles',
    area: 'Secretaría Académica',
    refrendo: 'Refrendado por Dirección General',
    requisitos: [FUT, 'Recibo por derecho de certificado de estudios', FOTOS],
    nota: 'Solo lo obtienen estudiantes o egresados que completaron sus estudios o periodos académicos. Se emite con el modelo único nacional y se registra en Secretaría Académica.',
    pasos: [
      paso('solicitud', 'Solicitud', MP, 'Solicita el certificado de estudios.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de certificado de estudios.'),
      paso('presentar', 'Presenta el FUT', MP, 'Presenta el FUT para solicitar el certificado de estudios.'),
      paso('elaborar', 'Elaboración', SEC, 'Elabora el certificado de estudios.'),
      paso('firma', 'Firma', DIR, 'Firma el certificado de estudios.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega el certificado de estudios.'),
    ],
  },
  {
    id: 'modular',
    chip: 'Certificado modular',
    code: 'CER-8F',
    title: 'Certificado modular',
    summary:
      'Certifica el logro de las competencias de un módulo formativo, con todas las unidades didácticas aprobadas y las experiencias formativas completadas.',
    costo: 'S/ 35.00',
    costoNota: 'Equivale al 0.636 % de la UIT',
    plazo: '07 días hábiles',
    area: 'Secretaría Académica',
    refrendo: 'Refrendado por Dirección General',
    requisitos: [
      FUT,
      'Recibo por derecho de certificado modular',
      FOTOS,
      'Ficha de seguimiento académico (Anexo 3)',
      'Fotocopia de DNI o carné de extranjería',
      'Informe del coordinador de área académica sobre las EFSRT',
    ],
    nota: 'Exige nota mínima de trece (13) en las unidades didácticas. Solo se obtiene en el IES donde concluiste los estudios y usa el modelo único nacional.',
    pasos: [
      paso('solicitud', 'Solicitud', MP, 'Solicita el certificado modular.'),
      paso('caja', 'Pago en Caja', CAJA, 'Realiza el cobro por derecho de certificado modular.'),
      paso('presentar', 'Presenta el FUT', MP, 'Presenta el FUT para solicitar el certificado modular.'),
      paso('verificar', 'Expediente', 'Coordinador de Área Académica', 'Organiza el expediente del certificado modular.'),
      paso('elaborar', 'Elaboración', SEC, 'Verifica el expediente y elabora el certificado modular.'),
      paso('firma', 'Firma', DIR, 'Firma el certificado modular.'),
      paso('entrega', 'Registro y entrega', SEC, 'Registra y entrega el certificado modular.'),
    ],
  },
];
