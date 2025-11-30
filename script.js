// ----- LISTA COMPLETA DE RAMOS + REQUISITOS -----
const courses = [
  { name: "Precálculo", code: "MAT1000", prereq: [] },
  { name: "Introducción a la Ciencia Política", code: "ICP101", prereq: [] },
  { name: "Gestión Pública I", code: "ADP002G", prereq: [] },
  { name: "Justicia y Bien Común", code: "ADP001G", prereq: [] },
  { name: "Filosofía ¿Para qué?", code: "FIL2001", prereq: [] },
  { name: "Examen de Comunicación Escrita", code: "VRA100C", prereq: [] },
  { name: "English Alte Test", code: "VRA2000", prereq: [] },
  { name: "Integridad Académica", code: "VRA4000", prereq: [] },

  { name: "Cálculo I", code: "MAT1100", prereq: ["MAT1000"] },
  { name: "Introducción a la Microeconomía", code: "EAE11A", prereq: [] },
  { name: "Comportamiento Organizacional", code: "ADP001S", prereq: [] },
  { name: "Introducción al Derecho", code: "ADP001D", prereq: [] },
  { name: "Optativo FG", code: "OPT-FG-1", prereq: [] },

  { name: "Probabilidad y Estadística", code: "EYP1010", prereq: ["MAT1100"] },
  { name: "Fundamentos de la Macroeconomía", code: "ADP001E", prereq: [] },
  { name: "Gestión Pública II", code: "ADP003G", prereq: [] },
  { name: "Introducción a las Políticas Públicas", code: "GOB1001", prereq: [] },
  { name: "Optativo FG", code: "OPT-FG-2", prereq: [] },

  { name: "Métodos Aplicados a la Gestión Pública", code: "ADP004G", prereq: ["EYP1010"] },
  { name: "Economía del Sector Público", code: "ADP002E", prereq: ["ADP001E"] },
  { name: "Introducción a la Política Comparada", code: "ICP103", prereq: [] },
  { name: "Instituciones y Garantías del Estado", code: "ADP002D", prereq: [] },
  { name: "Optativo FG", code: "OPT-FG-3", prereq: [] },

  { name: "Evidencias para la Gestión Pública", code: "ADP005G", prereq: [] },
  { name: "Contabilidad I", code: "EAA1210", prereq: [] },
  { name: "Política en Gestión y Políticas Públicas", code: "ADP201C", prereq: ["ICP101"] },
  { name: "Régimen Jurídico de la Administración del Estado", code: "ADP201D", prereq: ["ADP002D"] },
  { name: "Optativo FG", code: "OPT-FG-4", prereq: [] },

  { name: "Operaciones de Servicios Públicos", code: "ADP201I", prereq: ["EYP1010"] },
  { name: "Evaluación de Programas Públicos", code: "ADP201G", prereq: ["ADP004G"] },
  { name: "Administración Financiera del Estado", code: "ADP202G", prereq: ["EAE11A", "ADP001E"] },
  { name: "Minor", code: "MINOR-1", prereq: [] },
  { name: "Optativo FG", code: "OPT-FG-5", prereq: [] },

  { name: "Gestión de Innovación y Tecnología", code: "ADP202I", prereq: [] },
  { name: "Gestión de Personas en el Sector Público", code: "ADP201E", prereq: ["ADP001S"] },
  { name: "Minor", code: "MINOR-2", prereq: [] },
  { name: "Minor", code: "MINOR-3", prereq: [] },
  { name: "Optativo FG", code: "OPT-FG-6", prereq: [] },

  { name: "Transformación Digital", code: "ADP203I", prereq: [] },
  { name: "Gestión de Proyectos Públicos (Capstone)", code: "ADP203G", prereq: ["ADP201I"] },

  { name: "Ética y Políticas Públicas", code: "ADP301G", prereq: [] },
  { name: "Probidad y Transparencia", code: "ADP302G", prereq: [] },
  { name: "Habilidades Directivas", code: "ADP301E", prereq: [] },
  { name: "Auditoría Gubernamental", code: "ADP303G", prereq: [] },
  { name: "Optativo de Profundización", code: "OPT-PROF", prereq: [] },

  { name: "Práctica Profesional", code: "ADP306G", prereq: ["ADP203G"] },
  { name: "Entorno y Relación con el Medio", code: "ADP305G", prereq: [] },
  { name: "Ética Profesional", code: "ADP304G", prereq: [] },
];

// ----- ESTADO -----
let approved = new Set();

// ----- CREAR GRID -----
const grid = document.getElementById("grid");

courses.forEach(c => {
  const div = document.createElement("div");
  div.classList.add("course");

  if (c.prereq.length > 0) div.classList.add("locked");

  div.id = c.code;
  div.textContent = c.name;

  div.onclick = () => toggleCourse(c);

  grid.appendChild(div);
});

// ----- APROBAR / DESAPROBAR -----
function toggleCourse(course) {
  const element = document.getElementById(course.code);

  if (element.classList.contains("locked")) return;

  // Alternar estado
  if (approved.has(course.code)) {
    approved.delete(course.code);
    element.classList.remove("approved");
  } else {
    approved.add(course.code);
    element.classList.add("approved");
  }

  updateLocks();
}

// ----- BLOQUEAR / DESBLOQUEAR SEGÚN PRERREQUISITOS -----
function updateLocks() {
  courses.forEach(c => {
    const el = document.getElementById(c.code);

    const unmet = c.prereq.some(req => !approved.has(req));

    if (unmet) {
      el.classList.add("locked");
      el.classList.remove("approved");
      approved.delete(c.code);
    } else {
      el.classList.remove("locked");
    }
  });
}

