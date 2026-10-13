/* RETRO64 LABS — EDIT ONLY THIS CONFIG AND THE PROJECTS ARRAY TO PUBLISH YOUR SITE. */
const SITE = {
  brand: "RETRO64 LABS",
  author: "Alejandro Lázaro", // Change to the public name or nickname you want displayed.
  // Optional: You can put a GitHub profile URL here later.
};

/*
 * Published project downloads can be configured in TWO ways:
 *   releaseRepo: "user/repository" => the site requests GitHub's latest release and
 *                                     offers its .zip/.exe download asset.
 *   downloadUrl: "https://..." => use a direct, known-good download URL.
 * Leave both blank until you have actually published a release. No fake links.
 * When using releaseRepo, set releaseAssetContains: "Windows" / ".zip" etc.
 * GitHub may rate-limit visitors; on failure the download shows as unavailable.
 */
const PROJECTS = [
  {
    id: "ocarina", category: "editor", art: "ocarina", version: "3.2.1",
    platform: "Windows · Analogue 3D", releaseRepo: "", releaseAssetContains: "", downloadUrl: "https://github.com/gc9dd9gjpw-ai/Ocarina-Memory-Editor-Analogue-3D/releases/download/v3.2.1/Ocarina-Memory-Editor-v3.2.1-Windows.zip", sourceUrl: "https://github.com/gc9dd9gjpw-ai/Ocarina-Memory-Editor-Analogue-3D/releases/tag/v3.2.1",
    name: "Ocarina Memory Editor",
    description: {
      es: "Editor de Memories de The Legend of Zelda: Ocarina of Time. Explora y modifica partidas guardadas dentro de las capturas de Analogue 3D.",
      en: "A Memory editor for The Legend of Zelda: Ocarina of Time. Inspect and edit save data inside Analogue 3D snapshots."
    }
  },
  {
    id: "majora", category: "editor", art: "majora", version: "1.2.4",
    platform: "Windows · Analogue 3D", releaseRepo: "", releaseAssetContains: "", downloadUrl: "https://github.com/gc9dd9gjpw-ai/majora-memory-studio/releases/download/1.2.4/Majora-Memory-Studio-v1.2.4-Windows.zip", sourceUrl: "https://github.com/gc9dd9gjpw-ai/majora-memory-studio/releases/tag/1.2.4",
    name: "Majora Memory Studio",
    description: {
      es: "Herramienta para trabajar con las partidas de Majora's Mask recuperadas de Memories de Analogue 3D.",
      en: "A tool for working with Majora's Mask save data recovered from Analogue 3D Memories."
    }
  },
  {
    id: "manager", category: "utility", art: "manager", version: "",
    platform: "Windows · SummerCart64", releaseRepo: "", releaseAssetContains: "", downloadUrl: "", sourceUrl: "",
    name: "SC64 Enhanced Manager",
    description: {
      es: "Prepara tu biblioteca N64 desde Windows: detección de ROMs, carátulas y gestión de códigos GameShark para SummerCart64.",
      en: "Prepare your N64 library on Windows: ROM detection, box art and GameShark cheat management for SummerCart64."
    }
  },
  {
    id: "premium", category: "menu", art: "premium", version: "",
    platform: "Nintendo 64 · SummerCart64", releaseRepo: "", releaseAssetContains: "", downloadUrl: "", sourceUrl: "",
    name: "SC64 PREMIUM",
    description: {
      es: "Menú visual para SummerCart64 con una biblioteca de carátulas 5×5, navegación con mando y lanzamiento de juegos.",
      en: "A visual SummerCart64 menu with a 5×5 box-art library, controller navigation and game launching."
    }
  }
];

const TRANSLATIONS = {
  es: {
    navProjects:"Proyectos",navAbout:"Acerca de",explore:"Explorar software",eyebrow:"LABORATORIO INDEPENDIENTE · N64 / ANALOGUE 3D",
    hero1:"El pasado merece",hero2:"herramientas del futuro.",heroLead:"Editores de partidas, gestores de trucos y experiencias nuevas para Nintendo 64. Proyectos creados con pasión por el hardware original.",
    viewProjects:"Ver proyectos",learnMore:"Conocer el laboratorio",projectsStat:"PROYECTOS",platformsStat:"PLATAFORMAS",curiosityStat:"CURIOSIDAD",labCollection:"LA COLECCIÓN",projectsHead1:"Software hecho para",projectsHead2:"seguir jugando.",
    projectsDescription:"Explora las aplicaciones y proyectos del laboratorio. Cada herramienta tiene su propia historia.",filterAll:"Todos",filterEditors:"Editores",filterUtility:"Herramientas",filterMenus:"Menús",
    noResults:"No hay proyectos que coincidan.",trySearch:"Prueba otra palabra o elimina el filtro.",aboutEyebrow:"SOBRE EL LABORATORIO",aboutTitle:"Hecho por una persona. Para toda una comunidad.",
    aboutText:"Retro64 Labs reúne proyectos personales de software para Nintendo 64, SummerCart64 y Analogue 3D: herramientas para conservar partidas, experimentar con el hardware y disfrutar de los clásicos de otra forma.",
    byAuthor:"Desarrollado por",footerDesc:"Un laboratorio independiente para una consola inolvidable.",independent:"Proyecto independiente, no afiliado a Nintendo ni Analogue.",
    editor:"EDITOR DE MEMORIES",utility:"HERRAMIENTA WINDOWS",menu:"MENÚ PARA N64",unpublished:"Descarga por publicar",published:"Descarga disponible",seeDetails:"Ver detalles",download:"Descargar",source:"Código fuente",
    noDownload:"Los enlaces se activarán al publicar los programas y añadir sus URLs en la configuración.",platform:"PLATAFORMA",version:"VERSIÓN",pending:"Por anunciar",search:"Buscar proyectos..."
  },
  en: {
    navProjects:"Projects",navAbout:"About",explore:"Explore software",eyebrow:"INDEPENDENT LAB · N64 / ANALOGUE 3D",
    hero1:"The past deserves",hero2:"tools from the future.",heroLead:"Save editors, cheat managers and new experiences for Nintendo 64. Projects made with a passion for original hardware.",
    viewProjects:"View projects",learnMore:"Discover the lab",projectsStat:"PROJECTS",platformsStat:"PLATFORMS",curiosityStat:"CURIOSITY",labCollection:"THE COLLECTION",projectsHead1:"Software made to",projectsHead2:"keep playing.",
    projectsDescription:"Discover the lab's apps and projects. Every tool has its own story.",filterAll:"All",filterEditors:"Editors",filterUtility:"Utilities",filterMenus:"Menus",
    noResults:"No matching projects found.",trySearch:"Try another search or clear the filter.",aboutEyebrow:"ABOUT THE LAB",aboutTitle:"Made by one person. For an entire community.",
    aboutText:"Retro64 Labs brings together personal software projects for Nintendo 64, SummerCart64 and Analogue 3D: tools to preserve game saves, experiment with hardware and enjoy classics in new ways.",
    byAuthor:"Created by",footerDesc:"An independent lab for an unforgettable console.",independent:"Independent project, not affiliated with Nintendo or Analogue.",
    editor:"MEMORY EDITOR",utility:"WINDOWS UTILITY",menu:"N64 MENU",unpublished:"Download coming soon",published:"Download available",seeDetails:"View details",download:"Download",source:"Source code",
    noDownload:"Downloads will become available once the programs are published and their URLs are entered into the configuration.",platform:"PLATFORM",version:"VERSION",pending:"To be announced",search:"Search projects..."
  }
};

const ICONS = {
  ocarina:`<svg viewBox="0 0 96 96" fill="none" aria-hidden="true"><path d="M48 13 84 77H12L48 13Z" fill="#eccb6a" stroke="#ffe89a" stroke-width="3"/><path d="M48 13 66 45H30L48 13Z" fill="#ffe1a0"/><path d="m30 45 18 32H12l18-32Z" fill="#dab45b"/><path d="M66 45 48 77h36L66 45Z" fill="#a9813e"/><path d="M48 44 57 61H39l9-17Z" fill="#193d35"/></svg>`,
  majora:`<svg viewBox="0 0 96 96" fill="none" aria-hidden="true"><path d="M48 12C33 25 18 14 15 34 12 60 24 76 48 85c24-9 36-25 33-51-3-20-18-9-33-22Z" fill="#7d53c3" stroke="#e9b8ff" stroke-width="3"/><path d="M23 44 9 24m64 20 14-20M26 23 17 8m53 15 9-15" stroke="#f1b7ff" stroke-width="5"/><path d="M23 46 40 40l-4 17-13-11Zm50 0-17-6 4 17 13-11Z" fill="#f9d973" stroke="#542581" stroke-width="3"/><circle cx="32" cy="47" r="4" fill="#e34558"/><circle cx="64" cy="47" r="4" fill="#e34558"/><path d="M41 67c4 6 10 6 14 0" stroke="#efb7f6" stroke-width="3" stroke-linecap="round"/></svg>`,
  manager:`<svg viewBox="0 0 100 85" fill="none" aria-hidden="true"><rect x="5" y="6" width="90" height="70" rx="9" fill="#0b2036" stroke="#5fe3f3" stroke-width="3"/><path d="M5 23h90" stroke="#5fe3f3" stroke-width="3"/><circle cx="18" cy="15" r="3" fill="#eb789e"/><circle cx="29" cy="15" r="3" fill="#f2d66f"/><circle cx="40" cy="15" r="3" fill="#75e6c6"/><path d="m18 39 12 10-12 10M37 59h18" stroke="#8bebf2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M61 38h21M61 48h21M61 58h12" stroke="#6f8aac" stroke-width="3"/></svg>`,
  premium:`<svg viewBox="0 0 100 80" fill="none" aria-hidden="true"><rect x="4" y="4" width="92" height="72" rx="7" fill="#13213a" stroke="#d1baff" stroke-width="2"/>${Array.from({length:15},(_,i)=>`<rect x="${12+(i%5)*16}" y="${11+Math.floor(i/5)*20}" width="12" height="16" rx="1" fill="${['#b95787','#70bbd4','#dcb575','#83b889','#9b81d7'][i%5]}" stroke="${i===7?'#83fff5':'#ffffff7a'}" stroke-width="${i===7?3:1}"/>`).join('')}<path d="M10 70h78" stroke="#8bc7fa" stroke-width="1.5"/></svg>`
};

let language = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es';
let filter = 'all';
let searchTerm = '';
let currentProjectId = null;
const releases = new Map();
const $ = selector => document.querySelector(selector);
const t = key => TRANSLATIONS[language][key] || key;
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const safeHttpUrl = value => { try {const u=new URL(value);return (u.protocol==='https:'||u.protocol==='http:')?u.href:'';}catch{return '';} };
function projectArt(project) {
  return `<div class="art-decoration ${project.art}">${ICONS[project.art]}</div>`;
}
function categoryLabel(project) {return t(project.category);}
function projectRelease(project) {
  const latest = releases.get(project.id);
  return {
    url:latest?.url || safeHttpUrl(project.downloadUrl),
    version:latest?.version || project.version || t('pending')
  };
}
function card(project){
  const release = projectRelease(project);
  const summary = project.description[language];
  return `<article class="project-card"><div class="card-art" data-art="${project.art}"><span class="art-top-label">RETRO64 / ${escapeHTML(project.id.toUpperCase())}</span>${projectArt(project)}<span class="art-artifact">${escapeHTML(project.id.toUpperCase())}</span></div>
    <div class="project-body"><div class="card-tags"><span class="type-tag">${escapeHTML(categoryLabel(project))}</span><span class="platform-tag">${escapeHTML(project.platform)}</span></div><h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(summary)}</p>
    <div class="card-footer"><span class="status ${release.url?'available':''}">${release.url?t('published'):t('unpublished')}</span><div class="card-actions"><button class="card-link" data-details="${project.id}" aria-label="${escapeHTML(t('seeDetails')+' '+project.name)}">${t('seeDetails')} →</button></div></div></div></article>`;
}
function renderProjects() {
  const matches=PROJECTS.filter(p=>(filter==='all'||p.category===filter)&&(`${p.name} ${p.platform} ${p.description.es} ${p.description.en}`.toLowerCase().includes(searchTerm)));
  $('#project-grid').innerHTML=matches.map(card).join('');
  $('#empty-state').hidden=matches.length!==0;
  document.querySelectorAll('[data-details]').forEach(button=>button.addEventListener('click',()=>openDetails(button.dataset.details)));
  $('#project-count').textContent=String(PROJECTS.length).padStart(2,'0');
}
function renderLanguage(){
  document.documentElement.lang=language;
  document.title=language==='es'?'RETRO64 LABS — Software y proyectos':'RETRO64 LABS — Projects and downloads';
  $('#language-label').textContent=language==='es'?'EN':'ES';
  document.querySelectorAll('[data-i18n]').forEach(element=>{element.textContent=t(element.dataset.i18n);});
  $('#search').placeholder=t('search');
  $('#search').setAttribute('aria-label',t('search'));
  $('#author-name').textContent=SITE.author;
  renderProjects();
  if(currentProjectId && $('#detail-dialog').open) openDetails(currentProjectId, true);
}
function openDetails(id, refresh=false) {
  const p=PROJECTS.find(p=>p.id===id);
  if(!p)return;
  currentProjectId=p.id;
  const release=projectRelease(p);
  $('#dialog-visual').dataset.art=p.art;
  $('#dialog-visual').innerHTML=projectArt(p);
  $('#detail-tag').textContent=categoryLabel(p);
  $('#detail-title').textContent=p.name;
  $('#detail-description').textContent=p.description[language];
  $('#detail-platform').textContent=p.platform;
  $('#detail-version').textContent=release.version;
  let actions='';
  if(release.url){actions+=`<a class="button button-primary" target="_blank" rel="noopener noreferrer" href="${escapeHTML(release.url)}">↓ ${t('download')}</a>`;}
  else{actions+=`<button class="button unavailable" disabled>↓ ${t('unpublished')}</button>`;}
  if(safeHttpUrl(p.sourceUrl)) actions+=`<a class="button button-secondary" target="_blank" rel="noopener noreferrer" href="${escapeHTML(p.sourceUrl)}">${t('source')} ↗</a>`;
  $('#detail-actions').innerHTML=actions;
  $('#detail-note').textContent=release.url?'':t('noDownload');
  if(!refresh && !$('#detail-dialog').open)$('#detail-dialog').showModal();
}
async function checkReleases() {
  // GitHub Releases lookup is optional; no external service needed for site to work.
  await Promise.all(PROJECTS.filter(p=>p.releaseRepo && /^[\w.-]+\/[\w.-]+$/.test(p.releaseRepo)).map(async p=>{
    try {
      const response=await fetch(`https://api.github.com/repos/${p.releaseRepo}/releases/latest`,{headers:{Accept:'application/vnd.github+json'}});
      if(!response.ok) return;
      const release=await response.json();
      const assets=(release.assets||[]).filter(a=>a.browser_download_url);
      const matching=p.releaseAssetContains ? assets.find(a=>a.name.toLowerCase().includes(p.releaseAssetContains.toLowerCase())) : assets.find(a=>/\.(exe|zip|7z|n64|z64|v64)$/i.test(a.name));
      if(matching){releases.set(p.id,{url:safeHttpUrl(matching.browser_download_url),version:release.tag_name||p.version});}
    } catch { /* Missing internet or GitHub rate limit: keep truthful unavailable state. */ }
  }));
  renderProjects();
  if(currentProjectId && $('#detail-dialog').open)openDetails(currentProjectId,true);
}
function init(){
  $('#year').textContent=new Date().getFullYear();
  $('#filters').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
    filter=button.dataset.filter;
    $('#filters').querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===button));
    renderProjects();
  }));
  $('#search').addEventListener('input',e=>{searchTerm=e.target.value.trim().toLowerCase();renderProjects();});
  $('#language').addEventListener('click',()=>{language=language==='es'?'en':'es';renderLanguage();});
  $('#close-dialog').addEventListener('click',()=>{$('#detail-dialog').close();});
  $('#detail-dialog').addEventListener('click',e=>{if(e.target===$('#detail-dialog'))$('#detail-dialog').close();});
  $('#detail-dialog').addEventListener('close',()=>{currentProjectId=null;});
  renderLanguage();
  checkReleases();
}
init();
