//---------------------------------------------------------
//  DATOS COMPLETOS DE LOS SEMESTRES 1 AL 10
//---------------------------------------------------------

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
            { name: "Optativo de Profundización", code: "OPTPROF" + crypto.randomUUID(), credits: 20, prereq: [] }
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


//---------------------------------------------------------
//  ELEMENTOS DEL DOM
//---------------------------------------------------------

let approved = new Set();
const semestresContainer = document.getElementById("semestres");
const svg = document.getElementById("lineas");
const tooltip = document.getElementById("tooltip");
const buscador = document.getElementById("buscador");
const progresoBar = document.getElementById("progreso-bar");
const progresoText = document.getElementById("progreso-text");


//---------------------------------------------------------
//  CREAR INTERFAZ DE SEMESTRES Y CURSOS
//---------------------------------------------------------

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
        div.dataset.credits = c.credits;
        div.dataset.name = c.name;

        div.textContent = c.name;

        div.onclick = () => toggleCourse(c);

        div.onmousemove = (e) => showTooltip(e, c);
        div.onmouseleave = () => tooltip.style.display = "none";

        col.appendChild(div);
    });

    semestresContainer.appendChild(col);
});


//---------------------------------------------------------
//  APROBAR / DESAPROBAR CURSO
//---------------------------------------------------------

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
    updateProgress();
}


//---------------------------------------------------------
//  BLOQUEOS SEGÚN PRERREQUISITOS
//---------------------------------------------------------

function updateLocks() {
    semestres.forEach(sem =>
        sem.cursos.forEach(c => {
            const el = document.getElementById(c.code);
            const unmet = c.prereq.some(req => !approved.has(req));

            if (unmet) {
                el.classList.add("locked");
                el.classList.remove("approved");
                approved.delete(c.code);
            } else {
                el.classList.remove("locked");
            }
        })
    );
}


//---------------------------------------------------------
//  LÍNEAS SVG ENTRE PRERREQUISITOS
//---------------------------------------------------------

function drawLines() {
    svg.innerHTML = "";

    // Definir marcador de flecha (solo se agrega una vez)
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "12");
    marker.setAttribute("markerHeight", "12");
    marker.setAttribute("refX", "6");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");

    const arrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrowPath.setAttribute("d", "M 0 0 L 6 3 L 0 6 z");
    arrowPath.setAttribute("fill", "#9998cd");

    marker.appendChild(arrowPath);
    defs.appendChild(marker);
    svg.appendChild(defs);

    // Dibujar líneas curvas con flecha
    semestres.forEach(sem =>
        sem.cursos.forEach(c => {
            const target = document.getElementById(c.code);
            const rect2 = target.getBoundingClientRect();

            c.prereq.forEach(req => {
                const origin = document.getElementById(req);
                if (!origin) return;

                const rect1 = origin.getBoundingClientRect();

                // Coordenadas de inicio / fin
                const x1 = rect1.left + rect1.width / 2 + window.scrollX;
                const y1 = rect1.bottom + window.scrollY;

                const x2 = rect2.left + rect2.width / 2 + window.scrollX;
                const y2 = rect2.top + window.scrollY;

                // Curva suave
                const cx1 = x1;
                const cy1 = (y1 + y2) / 2;

                const cx2 = x2;
                const cy2 = (y1 + y2) / 2;

                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                const d = `M ${x1},${y1} C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
                path.setAttribute("d", d);

                // Estilo de la línea
                path.setAttribute("stroke", "#9998cd");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("fill", "none");
                path.setAttribute("stroke-linecap", "round");
                path.setAttribute("marker-end", "url(#arrowhead)");

                // Animación de línea suave
                path.style.strokeDasharray = "6";
                path.style.animation = "dash 2s linear infinite";

                svg.appendChild(path);
            });
        })
    );
}


//---------------------------------------------------------
//  TOOLTIP
//---------------------------------------------------------

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


//---------------------------------------------------------
//  BUSCADOR DE CURSOS
//---------------------------------------------------------

buscador.addEventListener("input", () => {
    const query = buscador.value.toLowerCase();

    document.querySelectorAll(".course").forEach(c => {
        const name = c.dataset.name.toLowerCase();
        c.style.display = name.includes(query) ? "block" : "none";
    });

    drawLines();
});


//---------------------------------------------------------
//  PROGRESO
//---------------------------------------------------------

function updateProgress() {
    const total = document.querySelectorAll(".course").length;
    const aprobados = document.querySelectorAll(".course.approved").length;

    const porcentaje = Math.round((aprobados / total) * 100);

    progresoBar.style.width = porcentaje + "%";
    progresoText.textContent = `Avance: ${porcentaje}%`;
}


//---------------------------------------------------------
//  MODO OSCURO
//---------------------------------------------------------

const toggleDark = document.getElementById("dark-toggle");

toggleDark.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});


//---------------------------------------------------------
//  EXPORTAR PDF
//---------------------------------------------------------

document.getElementById("pdf-btn").addEventListener("click", async () => {
    const area = document.body;

    const canvas = await html2canvas(area);
    const img = canvas.toDataURL("image/png");

    const pdf = new jspdf.jsPDF("p", "mm", "a4");
    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("malla_AP_UC.pdf");
});
