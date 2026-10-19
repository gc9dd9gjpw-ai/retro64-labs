/* Wave Race 64: Dolphin & Orca Mod v1.0 — complementary module.
   The existing assets/app.js and its four original projects remain unchanged.
   This file is deliberately loaded AFTER assets/app.js using defer.
*/
(() => {
  'use strict';
  if (typeof PROJECTS === 'undefined' || typeof ICONS === 'undefined' || typeof TRANSLATIONS === 'undefined') {
    console.error('Retro64 Labs: assets/app.js must load before wave-race.js');
    return;
  }
  const id = 'waverace';
  if (PROJECTS.some(project => project.id === id)) return;

  const base = document.baseURI;
  const url = 'https://github.com/gc9dd9gjpw-ai/retro64-labs/releases/download/wave-race-v1.0/Retro64Lab_Wave_Race_Dolphin_Orca_v1.0.bps';
  const instructions = {
    es: new URL('downloads/LEEME_Wave_Race_ES.txt', base).href,
    en: new URL('downloads/README_Wave_Race_EN.txt', base).href
  };

  TRANSLATIONS.es.mod = 'MOD / PARCHE N64';
  TRANSLATIONS.en.mod = 'N64 GAME MOD';
  TRANSLATIONS.es.filterMods = 'Mods';
  TRANSLATIONS.en.filterMods = 'Mods';

  ICONS.waverace = `<svg viewBox="0 0 110 100" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 76c22-10 33 10 51 0 15-8 23-4 40 0" stroke="#7ed9ef" stroke-width="5" stroke-linecap="round"/>
    <path d="M17 56c15-25 39-26 53-8 8 11 18 15 25 16-12 13-28 14-42 10l-9 6-4-15c-11-1-17-3-23-9Z" fill="#a6e8fa" stroke="#1b647f" stroke-width="3"/>
    <path d="M52 48 64 25l6 25" fill="#6ab3d0" stroke="#1b647f" stroke-width="3"/>
    <path d="M64 55c4-13 16-23 31-15-10 4-12 14-12 19" fill="#7ed9ef" stroke="#1b647f" stroke-width="3"/>
    <circle cx="29" cy="57" r="2.8" fill="#153b56"/><path d="M17 60 9 57l9-4" fill="#75c5da"/>
  </svg>`;

  PROJECTS.push({
    id, category: 'mod', art: 'waverace', version: '1.0',
    platform: 'Nintendo 64 · Analogue 3D',
    releaseRepo: '', releaseAssetContains: '', downloadUrl: url, sourceUrl: '',
    name: 'Wave Race 64: Dolphin & Orca Mod',
    description: {
      es: '¡Surca las olas con un delfín o una orca! En un jugador: Delfín: stick analógico hacia abajo y confirmar dos veces con A o START. Orca: mantener R, sin mover el stick analógico, y confirmar dos veces con A o START. START = moto. Parche BPS para Wave Race 64 USA Rev 1. Requiere la ROM original. VS con dos animales no incluido.',
      en: 'Ride a dolphin or an orca! In single player: Dolphin: hold the analog stick down and confirm twice with A or START. Orca: hold R, without moving the analog stick, and confirm twice with A or START. START = jet ski. BPS patch for Wave Race 64 USA Rev 1. Clean original ROM required. Independent two-animal VS is not included.'
    }
  });

  // Use the shared real GitHub Releases counters, including waverace.
  const originalOpenDetails = openDetails;
  openDetails = function(projectId, refresh = false) {
    originalOpenDetails(projectId, refresh);
    if (projectId !== id) return;
    const locale = language === 'en' ? 'en' : 'es';
    const link = document.createElement('a');
    link.className = 'button button-secondary';
    link.href = instructions[locale];
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = locale === 'es' ? 'Instrucciones ↗' : 'Instructions ↗';
    document.querySelector('#detail-actions').append(link);
    const counter = downloadsLabel(PROJECTS.find(project => project.id === id));
    document.querySelector('#detail-note').textContent = counter + '. ' + (locale === 'es'
      ? 'Se descarga solamente un parche BPS. Necesitas una ROM limpia Wave Race 64 USA Rev 1 (.z64); no incluye el juego. Modo VS con dos animales no disponible en v1.0.'
      : 'BPS patch only. Requires a clean Wave Race 64 USA Rev 1 (.z64) dump; game not included. Two-animal VS is not supported in v1.0.');
  };

  renderLanguage();
  checkDownloadCounts();
})();
