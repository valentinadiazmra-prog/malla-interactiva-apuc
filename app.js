// Datos de ejemplo (puedes mover esto a data/malla.json y cargar con fetch)
const malla = [
  {semester:1, courses:[
    {code:"AP101", name:"Introducción a la Administración", credits:6, desc:"Bases de la administración pública."},
    {code:"MT101", name:"Matemáticas I", credits:8, desc:"Álgebra y cálculo básico."}
  ]},
  {semester:2, courses:[
    {code:"AP102", name:"Teoría Organizacional", credits:6, desc:"Teorías y modelos organizacionales."},
    {code:"EC101", name:"Economía I", credits:6, desc:"Microeconomía básica."}
  ]},
  {semester:3, courses:[
    {code:"AP201", name:"Gestión Pública", credits:8, desc:"Procesos y herramientas de gestión pública."}
  ]}
];

const grid = document.getElementById('grid-container');
const detail = document.getElementById('detail-content');

function render() {
  malla.forEach(s => {
    const sec = document.createElement('div');
    sec.className = 'semester';
    sec.innerHTML = `<h3>Semestre ${s.semester}</h3>`;
    s.courses.forEach(c => {
      const card = document.createElement('div');
      card.className = 'course';
      card.tabIndex = 0;
      card.innerHTML = `<strong>${c.code}</strong> — ${c.name} <div style="font-size:12px;color:#666">${c.credits} créditos</div>`;
      card.onclick = () => showDetail(c);
      card.onkeypress = (e) => { if(e.key === 'Enter') showDetail(c); };
      sec.appendChild(card);
    });
    grid.appendChild(sec);
  });
}

function showDetail(c) {
  detail.innerHTML = `<h3>${c.name} <small>(${c.code})</small></h3>
                      <p><strong>Créditos:</strong> ${c.credits}</p>
                      <p>${c.desc}</p>`;
}

document.addEventListener('DOMContentLoaded', render);
