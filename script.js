const semestres = [
    // -------------------------------
    // 1° SEMESTRE
    // -------------------------------
    {
        nombre: "1° Semestre",
        cursos: [
            { name: "Precálculo", code: "MAT1000", credits: 10, prereq: [] },
            { name: "Introducción a la Ciencia Política", code: "ICP101", credits: 10, prereq: [] },
            { name: "Gestión Pública I", code: "ADP002G", credits: 10, prereq: [] },
            { name: "Justicia y Bien Común", code: "ADP001G", credits: 10, prereq: [] },
            { name: "Filosofía ¿Para qué?", code: "FIL2001", credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 2° SEMESTRE
    // -------------------------------
    {
        nombre: "2° Semestre",
        cursos: [
            { name: "Cálculo I", code: "MAT1100", credits: 10, prereq: ["MAT1000"] },
            { name: "Introducción a la Microeconomía", code: "EAE11A", credits: 10, prereq: [] },
            { name: "Comportamiento Organizacional", code: "ADP001S", credits: 10, prereq: [] },
            { name: "Introducción al Derecho", code: "ADP001D", credits: 10, prereq: [] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 3° SEMESTRE
    // -------------------------------
    {
        nombre: "3° Semestre",
        cursos: [
            { name: "Probabilidad y Estadística", code: "EYP1010", credits: 10, prereq: ["MAT1100"] },
            { name: "Fundamentos de la Macroeconomía", code: "ADP001E", credits: 10, prereq: [] },
            { name: "Gestión Pública II", code: "ADP003G", credits: 10, prereq: [] },
            { name: "Introducción a las Políticas Públicas", code: "GOB1001", credits: 10, prereq: [] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 4° SEMESTRE
    // -------------------------------
    {
        nombre: "4° Semestre",
        cursos: [
            { name: "Métodos Aplicados a la Gestión Pública", code: "ADP004G", credits: 10, prereq: ["EYP1010"] },
            { name: "Economía del Sector Público", code: "ADP002E", credits: 10, prereq: ["ADP001E"] },
            { name: "Introducción a la Política Comparada", code: "ICP103", credits: 10, prereq: [] },
            { name: "Instituciones y Garantías del Estado", code: "ADP002D", credits: 10, prereq: [] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 5° SEMESTRE
    // -------------------------------
    {
        nombre: "5° Semestre",
        cursos: [
            { name: "Evidencias para la Gestión Pública", code: "ADP005G", credits: 10, prereq: [] },
            { name: "Contabilidad I", code: "EAA1210", credits: 10, prereq: [] },
            { name: "Política en Gestión y PP", code: "ADP201C", credits: 10, prereq: ["ICP101"] },
            { name: "Régimen Jurídico de la Administración del Estado", code: "ADP201D", credits: 10, prereq: ["ADP002D"] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 6° SEMESTRE
    // -------------------------------
    {
        nombre: "6° Semestre",
        cursos: [
            { name: "Operaciones de Servicios Públicos", code: "ADP201I", credits: 10, prereq: ["EYP1010"] },
            { name: "Evaluación de Programas Públicos", code: "ADP201G", credits: 10, prereq: ["ADP004G"] },
            { name: "Administración Financiera del Estado", code: "ADP202G", credits: 10, prereq: ["EAE11A", "ADP001E"] },
            { name: "Minor I", code: "MINOR1", credits: 10, prereq: [] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 7° SEMESTRE
    // -------------------------------
    {
        nombre: "7° Semestre",
        cursos: [
            { name: "Gestión de Innovación y Tecnología", code: "ADP202I", credits: 10, prereq: [] },
            { name: "Gestión de Personas en el Sector Público", code: "ADP201E", credits: 10, prereq: ["ADP001S"] },
            { name: "Minor II", code: "MINOR2", credits: 10, prereq: [] },
            { name: "Minor III", code: "MINOR3", credits: 10, prereq: [] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 8° SEMESTRE
    // -------------------------------
    {
        nombre: "8° Semestre",
        cursos: [
            { name: "Transformación Digital", code: "ADP203I", credits: 10, prereq: [] },
            { name: "Gestión de Proyectos Públicos (Capstone)", code: "ADP203G", credits: 10, prereq: ["ADP201I"] },
            { name: "Minor IV", code: "MINOR4", credits: 10, prereq: [] },
          { name: "Minor V", code: "MINOR5", credits: 10, prereq: [] },
          { name: "Optativo de Formación General", code: "FG" + crypto.randomUUID(), credits: 10, prereq: [] }
        ]
    },

    // -------------------------------
    // 9° SEMESTRE
    // -------------------------------
    {
        nombre: "9° Semestre",
        cursos: [
            { name: "Ética y Políticas Públicas", code: "ADP301G", credits: 5, prereq: [] },
            { name: "Probidad y Transparencia", code: "ADP302G", credits: 5, prereq: [] },
            { name: "Habilidades Directivas", code: "ADP301E", credits: 10, prereq: [] },
            { name: "Auditoría Gubernamental", code: "ADP303G", credits: 10, prereq: [] },
            { name: "Optativo de Profundización", code: "OPT-PROF", credits: 20, prereq: [] }
        ]
    },

    // -------------------------------
    // 10° SEMESTRE
    // -------------------------------
    {
        nombre: "10° Semestre",
        cursos: [
            { name: "Práctica Profesional", code: "ADP306G", credits: 35, prereq: ["ADP203G"] },
            { name: "Entorno y Relación con el Medio", code: "ADP305G", credits: 10, prereq: [] },
            { name: "Ética Profesional", code: "ADP304G", credits: 5, prereq: [] }
        ]
    }
];
// ----------------------------------------
//  CREAR LA UI
// ----------------------------------------

let approved = new Set();
const semestresContainer = document.getElementById("semestres");
const svg = document.getElementById("lineas");
const tooltip = document.getElementById("tooltip");

// Crear columnas por semestre
semestres.forEach((sem) => {
    const col = document.createElement("div");
    col.className = "semestre";

    const title = document.createElement("div");
    title.className = "semestre-title";
    title.textContent = sem.nombre;
    col.appendChild(title);

    sem.cursos.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("course");
        if (c.prereq.length) div.classList.add("locked");

        div.id = c.code;
        div.dataset.code = c.code;
        div.dataset.desc = c.desc || "";
        div.dataset.credits = c.credits;

        div.textContent = c.name;

        // Click aprobar
        div.onclick = () => toggleCourse(c);

        // Tooltip
        div.onmousemove = (e) => showTooltip(e, c);
        div.onmouseleave = () => tooltip.style.display = "none";

        col.appendChild(div);
    });

    semestresContainer.appendChild(col);
});

// ----------------------------------------
//  ACTUALIZAR BLOQUEOS
// ----------------------------------------

function toggleCourse(course) {
    const el = document.getElementById(course.code);

    if (el.classList.contains("locked")) return;

    if (approved.has(course.code)) {
        approved.delete(course.code);
        el.classList.remove("approved");
    } else {
        approved.add(course.code);
        el.classList.add("approved");
    }

    updateLocks();
    drawLines();
}

function updateLocks() {
    semestres.forEach(sem =>
        sem.cursos.forEach(c => {
            const el = document.getElementById(c.code);
            const unmet = c.prereq.some(req => !approved.has(req));

            if (unmet) {
                el.classList.add("locked");
                el.classList.remove("approved");
            } else {
                el.classList.remove("locked");
            }
        })
    );
}

// ----------------------------------------
//  CONEXIONES SVG ENTRE PRERREQUISITOS
// ----------------------------------------

function drawLines() {
    svg.innerHTML = "";

    semestres.forEach(sem =>
        sem.cursos.forEach(c => {
            const target = document.getElementById(c.code);
            const rect2 = target.getBoundingClientRect();

            c.prereq.forEach(req => {
                const origin = document.getElementById(req);
                const rect1 = origin.getBoundingClientRect();

                // Coordenadas
                const x1 = rect1.left + rect1.width / 2 + window.scrollX;
                const y1 = rect1.bottom + window.scrollY;

                const x2 = rect2.left + rect2.width / 2 + window.scrollX;
                const y2 = rect2.top + window.scrollY;

                const line = document.createElementNS("http://www.w3.org/2000/svg","line");
                line.setAttribute("x1", x1);
                line.setAttribute("y1", y1);
                line.setAttribute("x2", x2);
                line.setAttribute("y2", y2);
                line.setAttribute("stroke", "#512a79");
                line.setAttribute("stroke-width", "3");

                svg.appendChild(line);
            });
        })
    );
}

setTimeout(drawLines, 400);

// ----------------------------------------
//  TOOLTIP
// ----------------------------------------

function showTooltip(e, course) {
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";

    tooltip.innerHTML = `
        <strong>${course.name}</strong><br>
        Sigla: ${course.code}<br>
        Créditos: ${course.credits}<br>
        Reqs: ${course.prereq.length ? course.prereq.join(", ") : "Ninguno"}
    `;
}
