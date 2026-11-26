(function () {
  const LANG_KEY = 'atelier-lang';
  let lang = 'ko';
  try {
    const s = localStorage.getItem(LANG_KEY);
    if (s === 'fr' || s === 'ko') lang = s;
    else if ((navigator.language || '').toLowerCase().startsWith('fr')) lang = 'fr';
  } catch (e) {}

  const STR = {
    ko: {
      title: 'Studio Kit',
      sub: '도면 SVG 자산, 가로 단면 스케치, 일조·그림자 계산, 이미지 경량화를 브라우저에서 바로 씁니다.',
      gDraw: '도면 그래픽 키트',
      gCalc: '일조 · 그림자 계산',
      gJury: '주리 · 발표 바로가기',
      sbTitle: '스케일바 & 방위표 SVG 생성기',
      sbDesc: '축척과 방위각을 고르면 Illustrator·InDesign·Board에 바로 붙일 수 있는 흑백 벡터 SVG를 만듭니다.',
      northAngleLabel: '북쪽 회전각 (°)',
      northStyleLabel: '방위표 스타일',
      copySvg: 'SVG 복사',
      copied: '복사됨',
      dlSvg: 'SVG 다운로드',
      stTitle: '미니 가로 단면 스케처 (SVG)',
      stDesc: '보도·자전거·차도·식수대 폭을 조절해 대지 앞 가로 단면도를 벡터 SVG로 내려받습니다.',
      stSwL: '좌측 보도', stBike: '자전거길', stRoad: '차도', stTree: '식수대 · 주차', stSwR: '우측 보도', stBldgH: '인접 건물 높이',
      dlStreetSvg: '가로 단면 SVG 다운로드',
      totalWidth: '총 폭',
      lwTitle: '도면 선 굵기 & 다이어그램 팔레트',
      lwDesc: 'Rhino·Illustrator 표준 선 위계표와 저채도 건축 다이어그램 컬러(클릭 시 HEX 복사).',
      lwColW: '선 굵기', lwColSample: '미리보기', lwColUse: '권장 용도',
      compTitle: '렌더 경량화 & 인쇄 DPI 검사기 (100% 로컬)',
      compDesc: '이미지를 올리면 목표 판형(A0~A4) 기준 인쇄 DPI 적합 여부를 자동 진단하고, 제출용으로 경량화합니다.',
      compPrintFmt: '인쇄 판형 (DPI 검사)',
      compMaxW: '최대 가로(px)', compFmt: '출력 포맷', compQual: '품질',
      compDropText: '여기에 PNG · JPG 이미지를 끌어다 놓거나 클릭해서 선택하세요',
      dpiOk: '인쇄 최적', dpiMid: '최소 충족', dpiLow: '해상도 부족',
      photoPalTitle: '사진 → 건축 컬러 팔레트 자동 추출',
      photoPalDrop: '레퍼런스 · 대지 사진을 올려 5색 팔레트 추출',
      palSvgDl: '팔레트 SVG 다운로드',
      refTitle: '미니 레퍼런스 스크랩북 (Are.na 스타일)',
      refDesc: '설계 레퍼런스 이미지·URL·메모를 태그별로 모아두고 Markdown으로 내보내거나 Board에서 바로 활용합니다.',
      refAll: '전체', refExportMd: 'Markdown 복사', refAddBtn: '+ 블록 추가',
      refEmpty: '아직 저장된 레퍼런스가 없습니다. 위 폼에서 첫 레퍼런스를 추가해 보세요.',
      refOpenLink: '원본 링크', refDel: '삭제',
      dl: '다운로드',
      sunTitle: '그림자 길이 · 태양 고도 빠른 계산기',
      sunDesc: '위도와 건물 높이를 입력하면 하지·춘추분·동지 정오 기준 태양 고도와 그림자 길이를 바로 계산합니다.',
      sunLatLabel: '위도 (°N)', sunHLabel: '건물 높이 (m)',
      sunColSeason: '절기 (정오)', sunColAlt: '태양 고도각', sunColRatio: '그림자 배율 (L/H)', sunColLen: '그림자 길이 (m)',
      summer: '하지 (6월 21일)', equinox: '춘·추분 (3/9월)', winter: '동지 (12월 21일)',
      jCard1: '허브 계산기 · 주리 체크리스트 · 타이머 · 용어사전',
      jCard1Desc: '축척·CES/SDP 계산기, 주리 D-Day 및 인쇄 전 점검, 발표 리허설 타이머, 한·불·영 건축 용어 사전은 메인 허브에서 ⌘K로 바로 열 수 있습니다.',
      goHub: '허브로 돌아가기 ›', goBrief: '프로젝트 브리프 & QR 만들기 ›',
      jCard2: '외부 무료 참고 도구 (리서치 추천)',
      jCard2Desc: 'Atelier 4·2와 함께 쓰기 좋은 무료 브라우저 건축 도구들입니다.',
    },
    fr: {
      title: 'Studio Kit',
      sub: 'Échelles & nord SVG, coupe de rue, calcul d’ombres et compression d’images directement dans le navigateur.',
      gDraw: 'Kit graphique',
      gCalc: 'Soleil · Ombres',
      gJury: 'Jury · Raccourcis',
      sbTitle: 'Barre d’échelle & Nord (SVG)',
      sbDesc: 'Générez une barre d’échelle et une flèche du nord vectorielles prêtes pour Illustrator, InDesign ou Board.',
      northAngleLabel: 'Rotation du nord (°)',
      northStyleLabel: 'Style du nord',
      copySvg: 'Copier SVG',
      copied: 'Copié',
      dlSvg: 'Télécharger SVG',
      stTitle: 'Coupe de rue rapide (SVG)',
      stDesc: 'Ajustez trottoirs, piste cyclable, chaussée et plantations pour exporter une coupe urbaine vectorielle.',
      stSwL: 'Trottoir G', stBike: 'Vélo', stRoad: 'Chaussée', stTree: 'Arbres · Stat.', stSwR: 'Trottoir D', stBldgH: 'Hauteur bâti',
      dlStreetSvg: 'Télécharger coupe SVG',
      totalWidth: 'Largeur totale',
      lwTitle: 'Épaisseurs de traits & Palettes',
      lwDesc: 'Hiérarchie standard Rhino/Illustrator et palettes sobres pour diagrammes (clic = copier HEX).',
      lwColW: 'Trait', lwColSample: 'Aperçu', lwColUse: 'Usage conseillé',
      compTitle: 'Compression d’images & Contrôle DPI (100 % local)',
      compDesc: 'Vérifiez automatiquement les DPI pour votre format d’impression (A0–A4) et réduisez vos rendus en local.',
      compPrintFmt: 'Format d’impression (DPI)',
      compMaxW: 'Largeur max (px)', compFmt: 'Format', compQual: 'Qualité',
      compDropText: 'Déposez vos images PNG/JPG ici ou cliquez pour choisir',
      dpiOk: 'Optimal', dpiMid: 'Acceptable', dpiLow: 'DPI insuffisant',
      photoPalTitle: 'Photo → Extraction de palette (5 couleurs)',
      photoPalDrop: 'Déposez une photo de site ou référence pour extraire 5 teintes',
      palSvgDl: 'Télécharger palette SVG',
      refTitle: 'Carnet de références minimal (style Are.na)',
      refDesc: 'Archivez vos références (image, lien, note) par tag et exportez-les en Markdown ou ouvrez Board.',
      refAll: 'Tous', refExportMd: 'Copier Markdown', refAddBtn: '+ Ajouter',
      refEmpty: 'Aucune référence enregistrée. Ajoutez votre premier bloc ci-dessus.',
      refOpenLink: 'Lien', refDel: 'Supprimer',
      dl: 'Télécharger',
      sunTitle: 'Calculateur d’ombres & hauteur solaire',
      sunDesc: 'Estimez l’angle solaire et la portée d’ombre au midi solaire (solstices et équinoxes).',
      sunLatLabel: 'Latitude (°N)', sunHLabel: 'Hauteur du bâtiment (m)',
      sunColSeason: 'Période (midi)', sunColAlt: 'Hauteur solaire', sunColRatio: 'Ratio ombre (L/H)', sunColLen: 'Longueur d’ombre (m)',
      summer: 'Solstice d’été (21 juin)', equinox: 'Équinoxes (mars/sept.)', winter: 'Solstice d’hiver (21 déc.)',
      jCard1: 'Calculateur · Checklist jury · Minuteur · Glossaire',
      jCard1Desc: 'Retrouvez les calculateurs d’échelle/CES, la checklist d’impression, le minuteur d’oral et le glossaire via ⌘K sur l’accueil.',
      goHub: 'Retour à l’accueil ›', goBrief: 'Créer une fiche projet & QR ›',
      jCard2: 'Outils web gratuits complémentaires',
      jCard2Desc: 'Sélection d’outils gratuits utiles en complément d’Atelier 4·2.',
    },
  };
  const t = (k) => (STR[lang] && STR[lang][k]) || STR.ko[k] || k;

  /* ---------- Group Tabs ---------- */
  function setGroup(g) {
    const valid = ['draw', 'calc', 'jury'].includes(g) ? g : 'draw';
    document.querySelectorAll('.group-tab').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.group === valid));
    });
    document.getElementById('panelDraw').hidden = valid !== 'draw';
    document.getElementById('panelCalc').hidden = valid !== 'calc';
    document.getElementById('panelJury').hidden = valid !== 'jury';
    if (location.hash.slice(1) !== valid) history.replaceState(null, '', '#' + valid);
  }
  document.querySelectorAll('.group-tab').forEach((b) => {
    b.addEventListener('click', () => setGroup(b.dataset.group));
  });

  /* ---------- 1. Scale bar & North arrow SVG ---------- */
  let sbScale = 100;
  let currentSbSvg = '';

  function buildScaleBarSvg() {
    const angle = parseFloat(document.getElementById('northAngle').value) || 0;
    const style = document.getElementById('northStyle').value;
    const totalMeters = sbScale <= 50 ? 5 : sbScale <= 100 ? 10 : sbScale <= 200 ? 20 : sbScale <= 500 ? 50 : 100;
    const step = totalMeters / 5;
    const barW = 240;
    const segW = barW / 5;
    let rects = '';
    for (let i = 0; i < 5; i++) {
      const fill = i % 2 === 0 ? '#111111' : '#ffffff';
      rects += `<rect x="${16 + i * segW}" y="38" width="${segW}" height="7" fill="${fill}" stroke="#111111" stroke-width="1"/>`;
    }
    let labels = `<text x="16" y="60" font-family="sans-serif" font-size="10" fill="#111111">0</text>`;
    labels += `<text x="${16 + segW}" y="60" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#111111">${step}</text>`;
    labels += `<text x="${16 + segW * 2}" y="60" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#111111">${step * 2}</text>`;
    labels += `<text x="${16 + barW}" y="60" font-family="sans-serif" font-size="10" text-anchor="end" fill="#111111">${totalMeters} m</text>`;

    let north = '';
    if (style === 'circle') {
      north = `<circle cx="0" cy="0" r="16" fill="none" stroke="#111111" stroke-width="1.2"/>
               <polygon points="0,-14 5,4 0,0 -5,4" fill="#111111"/>
               <text x="0" y="-19" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#111111">N</text>`;
    } else if (style === 'split') {
      north = `<polygon points="0,-16 0,12 -9,12" fill="#111111"/>
               <polygon points="0,-16 9,12 0,12" fill="#ffffff" stroke="#111111" stroke-width="1"/>
               <text x="0" y="-20" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#111111">N</text>`;
    } else {
      north = `<line x1="0" y1="14" x2="0" y2="-14" stroke="#111111" stroke-width="1.5"/>
               <polyline points="-5,-7 0,-15 5,-7" fill="none" stroke="#111111" stroke-width="1.5"/>
               <text x="0" y="-19" font-family="sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#111111">N</text>`;
    }

    currentSbSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 76" width="340" height="76">
  <text x="16" y="26" font-family="sans-serif" font-size="11" font-weight="700" fill="#111111">1 / ${sbScale}</text>
  ${rects}
  ${labels}
  <g transform="translate(302 42) rotate(${angle})">${north}</g>
</svg>`;
    document.getElementById('sbStage').innerHTML = currentSbSvg;
  }

  document.querySelectorAll('#sbScalePills .pill').forEach((b) => {
    b.addEventListener('click', () => {
      sbScale = Number(b.dataset.sbScale) || 100;
      document.querySelectorAll('#sbScalePills .pill').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      buildScaleBarSvg();
    });
  });
  document.getElementById('northAngle').addEventListener('input', buildScaleBarSvg);
  document.getElementById('northStyle').addEventListener('change', buildScaleBarSvg);
  document.getElementById('sbCopyBtn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentSbSvg);
      const b = document.getElementById('sbCopyBtn');
      b.textContent = t('copied');
      setTimeout(() => { b.textContent = t('copySvg'); }, 1500);
    } catch (e) {}
  });
  document.getElementById('sbDlBtn').addEventListener('click', () => {
    const blob = new Blob([currentSbSvg], { type: 'image/svg+xml;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `scale_1-${sbScale}_north.svg`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  /* ---------- 2. Street Section SVG ---------- */
  let currentStreetSvg = '';
  function buildStreetSvg() {
    const swL = parseFloat(document.getElementById('stSwL').value);
    const bike = parseFloat(document.getElementById('stBike').value);
    const road = parseFloat(document.getElementById('stRoad').value);
    const tree = parseFloat(document.getElementById('stTree').value);
    const swR = parseFloat(document.getElementById('stSwR').value);
    const bh = parseFloat(document.getElementById('stBldgH').value);

    document.getElementById('vSwL').textContent = `${swL.toFixed(1)} m`;
    document.getElementById('vBike').textContent = `${bike.toFixed(1)} m`;
    document.getElementById('vRoad').textContent = `${road.toFixed(1)} m`;
    document.getElementById('vTree').textContent = `${tree.toFixed(1)} m`;
    document.getElementById('vSwR').textContent = `${swR.toFixed(1)} m`;
    document.getElementById('vBldgH').textContent = `${bh} m`;

    const total = swL + bike + road + tree + swR;
    document.getElementById('streetTotal').textContent = `${t('totalWidth')}: ${total.toFixed(1)} m`;

    const padX = 48;
    const scale = Math.min(22, 340 / Math.max(total, 1));
    const groundY = 165;
    const bldgPx = Math.min(130, bh * scale * 0.55);
    const W = Math.round(total * scale + padX * 2);
    const H = 205;

    const segs = [
      { w: swL, label: `${swL}m`, fill: '#e5e5ea', yOff: -3 },
      { w: bike, label: `${bike}m`, fill: '#d4e9d7', yOff: -1 },
      { w: road, label: `${road}m`, fill: '#d2d2d7', yOff: 0 },
      { w: tree, label: `${tree}m`, fill: '#dce8d5', yOff: -2 },
      { w: swR, label: `${swR}m`, fill: '#e5e5ea', yOff: -3 },
    ].filter((s) => s.w > 0);

    let x = padX;
    let body = '';
    // Left & right building cut facades
    body += `<rect x="4" y="${groundY - bldgPx}" width="${padX - 4}" height="${bldgPx}" fill="#f5f5f7" stroke="#111111" stroke-width="1.5"/>`;
    body += `<rect x="${W - padX}" y="${groundY - bldgPx}" width="${padX - 4}" height="${bldgPx}" fill="#f5f5f7" stroke="#111111" stroke-width="1.5"/>`;
    body += `<text x="${padX / 2}" y="${groundY - bldgPx - 6}" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#666">${bh}m</text>`;

    for (const s of segs) {
      const pw = s.w * scale;
      body += `<rect x="${x}" y="${groundY + s.yOff}" width="${pw}" height="8" fill="${s.fill}" stroke="#111111" stroke-width="0.8"/>`;
      body += `<line x1="${x}" y1="${groundY + 18}" x2="${x + pw}" y2="${groundY + 18}" stroke="#111111" stroke-width="0.8"/>`;
      body += `<line x1="${x}" y1="${groundY + 14}" x2="${x}" y2="${groundY + 22}" stroke="#111111" stroke-width="0.8"/>`;
      body += `<line x1="${x + pw}" y1="${groundY + 14}" x2="${x + pw}" y2="${groundY + 22}" stroke="#111111" stroke-width="0.8"/>`;
      body += `<text x="${x + pw / 2}" y="${groundY + 32}" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#111111">${s.label}</text>`;
      if (s.fill === '#dce8d5' && pw >= 16) {
        const cx = x + pw / 2;
        body += `<line x1="${cx}" y1="${groundY - 2}" x2="${cx}" y2="${groundY - 38}" stroke="#111111" stroke-width="1.4"/>`;
        body += `<circle cx="${cx}" cy="${groundY - 46}" r="14" fill="none" stroke="#111111" stroke-width="1.1"/>`;
      }
      x += pw;
    }

    currentStreetSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  ${body}
  <line x1="4" y1="${groundY + 8}" x2="${W - 4}" y2="${groundY + 8}" stroke="#111111" stroke-width="2"/>
  <text x="${W / 2}" y="18" font-family="sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#111111">Street Section · ${total.toFixed(1)} m</text>
</svg>`;
    document.getElementById('streetStage').innerHTML = currentStreetSvg;
  }

  ['stSwL', 'stBike', 'stRoad', 'stTree', 'stSwR', 'stBldgH'].forEach((id) => {
    document.getElementById(id).addEventListener('input', buildStreetSvg);
  });
  document.getElementById('streetDlBtn').addEventListener('click', () => {
    const blob = new Blob([currentStreetSvg], { type: 'image/svg+xml;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'street-section.svg';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  /* ---------- 3. Lineweights & Palettes ---------- */
  function renderLineweightsAndPalettes() {
    const lwRows = lang === 'fr' ? [
      ['0.05 mm', 1, 'Hachures, trame, mobilier, lignes de rappel'],
      ['0.13 mm', 1.5, 'Vues en projection, menuiseries, escaliers'],
      ['0.25 mm', 2.5, 'Cloisons coupées, éléments secondaires'],
      ['0.35 mm', 3.5, 'Murs porteurs coupés, structure principale'],
      ['0.50 mm', 5, 'Ligne de sol (coupe), contour de parcelle'],
    ] : [
      ['0.05 mm', 1, '해치, 그리드, 가구, 치수 보조선'],
      ['0.13 mm', 1.5, '입면 투영선, 창호, 계단 디딤판'],
      ['0.25 mm', 2.5, '비내력 칸막이벽 절단선, 2차 부재'],
      ['0.35 mm', 3.5, '구조벽·기둥 절단선 (평면/단면 중심)'],
      ['0.50 mm', 5, '지반선(GL), 대지 경계 강조선'],
    ];
    const tbody = document.getElementById('lwBody');
    tbody.innerHTML = '';
    for (const [w, px, use] of lwRows) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td><b>${w}</b></td><td><span class="lw-sample" style="height:${px}px"></span></td><td>${use}</td>`;
      tbody.appendChild(tr);
    }

    const palettes = [
      { name: 'Editorial Mono + Red (Existing / New)', colors: ['#1D1D1F', '#6E6E73', '#D2D2D7', '#F5F5F7', '#C83E37'] },
      { name: 'Urban Ecology & Site Diagram', colors: ['#2C3E35', '#6B8E78', '#B8C9B9', '#E6DFD3', '#C98A5B'] },
      { name: 'Timber & Concrete Minimal', colors: ['#2B2927', '#8C7B6B', '#CBBBA8', '#EAE4DC', '#4F6D7A'] },
    ];
    const box = document.getElementById('palettesBox');
    box.innerHTML = '';
    for (const p of palettes) {
      const row = document.createElement('div');
      row.className = 'pal-row';
      const title = document.createElement('div');
      title.className = 'pal-name';
      title.textContent = p.name;
      const sw = document.createElement('div');
      sw.className = 'swatches';
      for (const hex of p.colors) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'swatch';
        btn.style.background = hex;
        const lum = parseInt(hex.slice(1, 3), 16) * 0.299 + parseInt(hex.slice(3, 5), 16) * 0.587 + parseInt(hex.slice(5, 7), 16) * 0.114;
        btn.style.color = lum > 150 ? '#1d1d1f' : '#ffffff';
        btn.textContent = hex;
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(hex);
            btn.textContent = t('copied');
            setTimeout(() => { btn.textContent = hex; }, 1100);
          } catch (e) {}
        });
        sw.appendChild(btn);
      }
      row.append(title, sw);
      box.appendChild(row);
    }
  }

  /* ---------- 4. Local Image Compressor ---------- */
  function fmtBytes(b) {
    if (b < 1024) return `${b} B`;
    if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
    return `${(b / 1048576).toFixed(2)} MB`;
  }

  async function compressFile(file) {
    const maxW = Number(document.getElementById('compMaxW').value) || 2400;
    const fmt = document.getElementById('compFmt').value || 'image/jpeg';
    const qual = Math.min(0.95, Math.max(0.5, parseFloat(document.getElementById('compQual').value) || 0.82));
    const url = URL.createObjectURL(file);
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url; });
    URL.revokeObjectURL(url);
    const ratio = img.width > maxW ? maxW / img.width : 1;
    const w = Math.round(img.width * ratio);
    const h = Math.round(img.height * ratio);
    const cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    const ctx = cv.getContext('2d');
    if (fmt === 'image/jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w, h); }
    ctx.drawImage(img, 0, 0, w, h);
    const blob = await new Promise((res) => cv.toBlob(res, fmt, qual));
    const ext = fmt === 'image/webp' ? 'webp' : 'jpg';
    const base = file.name.replace(/\.[^.]+$/, '');
    // Print DPI check against chosen ISO sheet (orienting sheet to match image orientation)
    const fmtStr = (document.getElementById('compPrintFmt')?.value || '297x420').split('x').map(Number);
    const sheetLong = Math.max(fmtStr[0], fmtStr[1]);
    const sheetShort = Math.min(fmtStr[0], fmtStr[1]);
    const imgLong = Math.max(img.width, img.height);
    const imgShort = Math.min(img.width, img.height);
    const dpi = Math.round(Math.min(imgLong / (sheetLong / 25.4), imgShort / (sheetShort / 25.4)));
    return { name: `${base}_lite.${ext}`, origSize: file.size, newSize: blob.size, w, h, origW: img.width, origH: img.height, dpi, blob };
  }

  async function handleFiles(files) {
    const list = document.getElementById('compList');
    for (const f of Array.from(files || [])) {
      if (!f.type.startsWith('image/')) continue;
      try {
        const res = await compressFile(f);
        const pct = Math.max(0, Math.round((1 - res.newSize / res.origSize) * 100));
        const li = document.createElement('li');
        li.className = 'comp-item';
        const info = document.createElement('span');
        info.textContent = `${res.name} (${res.origW}×${res.origH} → ${res.w}×${res.h}) · ${fmtBytes(res.origSize)} → ${fmtBytes(res.newSize)} (-${pct}%)`;
        const badge = document.createElement('span');
        badge.className = 'dpi-badge ' + (res.dpi >= 250 ? 'dpi-ok' : res.dpi >= 150 ? 'dpi-mid' : 'dpi-low');
        badge.textContent = `${res.dpi} DPI · ${res.dpi >= 250 ? t('dpiOk') : res.dpi >= 150 ? t('dpiMid') : t('dpiLow')}`;
        info.appendChild(badge);
        const a = document.createElement('a');
        a.className = 'btn';
        a.href = URL.createObjectURL(res.blob);
        a.download = res.name;
        a.textContent = t('dl');
        li.append(info, a);
        list.prepend(li);
      } catch (e) {}
    }
  }

  const drop = document.getElementById('compDrop');
  const inp = document.getElementById('compInput');
  inp.addEventListener('change', () => { handleFiles(inp.files); inp.value = ''; });
  ['dragenter', 'dragover'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.remove('over'); }));
  drop.addEventListener('drop', (e) => handleFiles(e.dataTransfer.files));

  /* ---------- 5. Sun & Shadow Calculator ---------- */
  function renderSunCalc() {
    const lat = Math.max(0, Math.min(75, parseFloat(document.getElementById('sunLat').value) || 48.86));
    const h = Math.max(1, parseFloat(document.getElementById('sunH').value) || 15);
    const seasons = [
      { key: 'summer', decl: 23.44, color: '#d97706' },
      { key: 'equinox', decl: 0, color: '#6e6e73' },
      { key: 'winter', decl: -23.44, color: '#2563eb' },
    ];
    const tbody = document.getElementById('sunBody');
    tbody.innerHTML = '';

    const baseX = 70;
    const groundY = 148;
    const bH = 68;
    const maxLen = Math.max(1, h / Math.tan(Math.max(5, 90 - lat - 23.44) * Math.PI / 180));
    const pxPerM = Math.min(18, 250 / maxLen);
    let rays = '';

    for (const s of seasons) {
      const alt = Math.max(2, Math.min(89.9, 90 - Math.abs(lat - s.decl)));
      const ratio = 1 / Math.tan((alt * Math.PI) / 180);
      const len = h * ratio;
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${t(s.key)}</td><td class="num">${alt.toFixed(1)}°</td><td class="num">${ratio.toFixed(2)}×</td><td class="num"><b>${len.toFixed(1)} m</b></td>`;
      tbody.appendChild(tr);

      const sx = baseX + Math.min(260, len * pxPerM);
      rays += `<line x1="${baseX}" y1="${groundY - bH}" x2="${sx}" y2="${groundY}" stroke="${s.color}" stroke-width="1.4" stroke-dasharray="4 3"/>`;
      rays += `<circle cx="${sx}" cy="${groundY}" r="3" fill="${s.color}"/>`;
      rays += `<text x="${sx}" y="${groundY + 14}" font-family="sans-serif" font-size="9" text-anchor="middle" fill="${s.color}">${len.toFixed(1)}m</text>`;
    }

    document.getElementById('sunStage').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 172" width="380" height="172">
  <rect width="380" height="172" fill="#ffffff"/>
  <rect x="${baseX - 36}" y="${groundY - bH}" width="36" height="${bH}" fill="#1d1d1f"/>
  <text x="${baseX - 18}" y="${groundY - bH - 6}" font-family="sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#1d1d1f">${h}m</text>
  ${rays}
  <line x1="16" y1="${groundY}" x2="364" y2="${groundY}" stroke="#1d1d1f" stroke-width="2"/>
</svg>`;
  }

  document.querySelectorAll('#cityPills .pill').forEach((b) => {
    b.addEventListener('click', () => {
      document.getElementById('sunLat').value = Number(b.dataset.lat).toFixed(2);
      document.querySelectorAll('#cityPills .pill').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      renderSunCalc();
    });
  });
  document.getElementById('sunLat').addEventListener('input', renderSunCalc);
  document.getElementById('sunH').addEventListener('input', renderSunCalc);

  /* ---------- 6. Photo -> 5-Color Architectural Palette Extractor ---------- */
  let lastExtractedHexes = [];

  async function extractPaletteFromFile(file) {
    const url = URL.createObjectURL(file);
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url; });
    URL.revokeObjectURL(url);
    const cv = document.createElement('canvas');
    const size = 48;
    cv.width = size; cv.height = size;
    const ctx = cv.getContext('2d');
    ctx.drawImage(img, 0, 0, size, size);
    const data = ctx.getImageData(0, 0, size, size).data;
    const buckets = new Map();
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 128) continue;
      const r = Math.round(data[i] / 24) * 24;
      const g = Math.round(data[i + 1] / 24) * 24;
      const b = Math.round(data[i + 2] / 24) * 24;
      const key = `${Math.min(255, r)},${Math.min(255, g)},${Math.min(255, b)}`;
      buckets.set(key, (buckets.get(key) || 0) + 1);
    }
    const sorted = [...buckets.entries()].sort((a, b) => b[1] - a[1]);
    const picked = [];
    for (const [key] of sorted) {
      const rgb = key.split(',').map(Number);
      const tooClose = picked.some((p) => Math.hypot(p[0] - rgb[0], p[1] - rgb[1], p[2] - rgb[2]) < 52);
      if (!tooClose) picked.push(rgb);
      if (picked.length >= 5) break;
    }
    while (picked.length < 5 && sorted.length) {
      picked.push(sorted[picked.length % sorted.length][0].split(',').map(Number));
    }
    return picked.map(([r, g, b]) => '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase());
  }

  function renderExtractedPalette(hexes) {
    lastExtractedHexes = hexes;
    const box = document.getElementById('extractedSwatches');
    const act = document.getElementById('extractedActions');
    if (!box || !act) return;
    box.innerHTML = '';
    for (const hex of hexes) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      btn.style.background = hex;
      const lum = parseInt(hex.slice(1, 3), 16) * 0.299 + parseInt(hex.slice(3, 5), 16) * 0.587 + parseInt(hex.slice(5, 7), 16) * 0.114;
      btn.style.color = lum > 150 ? '#1d1d1f' : '#ffffff';
      btn.textContent = hex;
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(hex);
          btn.textContent = t('copied');
          setTimeout(() => { btn.textContent = hex; }, 1100);
        } catch (e) {}
      });
      box.appendChild(btn);
    }
    box.hidden = false;
    act.hidden = false;
  }

  const palInput = document.getElementById('palInput');
  const palDrop = document.getElementById('palDrop');
  palInput?.addEventListener('change', async () => {
    const f = palInput.files && palInput.files[0];
    if (f) renderExtractedPalette(await extractPaletteFromFile(f));
    palInput.value = '';
  });
  ['dragenter', 'dragover'].forEach((ev) => palDrop?.addEventListener(ev, (e) => { e.preventDefault(); palDrop.classList.add('over'); }));
  ['dragleave', 'drop'].forEach((ev) => palDrop?.addEventListener(ev, (e) => { e.preventDefault(); palDrop.classList.remove('over'); }));
  palDrop?.addEventListener('drop', async (e) => {
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f && f.type.startsWith('image/')) renderExtractedPalette(await extractPaletteFromFile(f));
  });
  document.getElementById('palSvgDlBtn')?.addEventListener('click', () => {
    if (!lastExtractedHexes.length) return;
    const w = 500, h = 120, sw = w / lastExtractedHexes.length;
    const parts = lastExtractedHexes.map((hex, i) =>
      `<rect x="${i * sw}" y="0" width="${sw}" height="86" fill="${hex}"/><text x="${i * sw + sw / 2}" y="108" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="#1d1d1f">${hex}</text>`
    ).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="#ffffff"/>${parts}</svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'atelier-palette.svg';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  /* ---------- 7. Reference Scrapbook (Are.na style) ---------- */
  const REF_KEY = 'atelier-refs-v1';
  let refFilter = 'all';

  function loadRefs() {
    try {
      const d = JSON.parse(localStorage.getItem(REF_KEY) || '[]');
      if (Array.isArray(d)) return d;
    } catch (e) {}
    return [];
  }
  function saveRefs(list) { try { localStorage.setItem(REF_KEY, JSON.stringify(list)); } catch (e) {} }

  async function makeThumbDataUrl(file) {
    const url = URL.createObjectURL(file);
    const img = new Image();
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url; });
    URL.revokeObjectURL(url);
    const maxW = 320;
    const ratio = img.width > maxW ? maxW / img.width : 1;
    const cv = document.createElement('canvas');
    cv.width = Math.round(img.width * ratio);
    cv.height = Math.round(img.height * ratio);
    cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
    return cv.toDataURL('image/jpeg', 0.72);
  }

  function renderRefs() {
    const grid = document.getElementById('refGrid');
    if (!grid) return;
    const all = loadRefs();
    const list = refFilter === 'all' ? all : all.filter((r) => r.tag === refFilter);
    grid.innerHTML = '';
    if (!list.length) {
      const li = document.createElement('li');
      li.style.gridColumn = '1 / -1';
      li.style.fontSize = '13px';
      li.style.color = 'var(--muted)';
      li.textContent = t('refEmpty');
      grid.appendChild(li);
      return;
    }
    list.forEach((r) => {
      const li = document.createElement('li');
      li.className = 'ref-card';
      if (r.img) {
        const im = document.createElement('img');
        im.className = 'ref-thumb';
        im.src = r.img;
        im.alt = r.title;
        li.appendChild(im);
      }
      const body = document.createElement('div');
      body.className = 'ref-body';
      const top = document.createElement('div');
      top.className = 'ref-top';
      const tag = document.createElement('span');
      tag.className = 'ref-tag';
      tag.textContent = r.tag;
      top.appendChild(tag);
      const title = document.createElement('p');
      title.className = 'ref-title';
      title.textContent = r.title;
      body.append(top, title);
      if (r.note) {
        const note = document.createElement('p');
        note.className = 'ref-note';
        note.textContent = r.note;
        body.appendChild(note);
      }
      const acts = document.createElement('div');
      acts.className = 'ref-actions';
      if (r.url && /^https?:\/\//i.test(r.url)) {
        const a = document.createElement('a');
        a.href = r.url; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = t('refOpenLink');
        acts.appendChild(a);
      }
      const boardA = document.createElement('a');
      boardA.href = 'https://atelier-4-2.github.io/board/';
      boardA.textContent = 'Board ›';
      acts.appendChild(boardA);
      const del = document.createElement('button');
      del.type = 'button';
      del.textContent = t('refDel');
      del.addEventListener('click', () => {
        saveRefs(loadRefs().filter((x) => x.id !== r.id));
        renderRefs();
      });
      acts.appendChild(del);
      body.appendChild(acts);
      li.appendChild(body);
      grid.appendChild(li);
    });
  }

  document.getElementById('refForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = (document.getElementById('refTitleIn')?.value || '').trim();
    if (!title) return;
    const tag = document.getElementById('refTagIn')?.value || '구조';
    const url = (document.getElementById('refUrlIn')?.value || '').trim();
    const note = (document.getElementById('refNoteIn')?.value || '').trim();
    const imgIn = document.getElementById('refImgIn');
    let img = '';
    if (imgIn && imgIn.files && imgIn.files[0]) {
      try { img = await makeThumbDataUrl(imgIn.files[0]); } catch (err) {}
    }
    const list = loadRefs();
    list.unshift({ id: Date.now() + Math.random(), title, tag, url, note, img });
    saveRefs(list);
    e.target.reset();
    renderRefs();
  });

  document.querySelectorAll('#refFilterPills .pill').forEach((b) => {
    b.addEventListener('click', () => {
      refFilter = b.dataset.refFilter || 'all';
      document.querySelectorAll('#refFilterPills .pill').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      renderRefs();
    });
  });

  document.getElementById('refExportMdBtn')?.addEventListener('click', async () => {
    const list = loadRefs();
    const md = list.map((r) => `- **[${r.tag}] ${r.title}**${r.url ? ` (${r.url})` : ''}${r.note ? `\n  ${r.note}` : ''}`).join('\n');
    try {
      await navigator.clipboard.writeText(md || '# References');
      const b = document.getElementById('refExportMdBtn');
      b.textContent = t('copied');
      setTimeout(() => { b.textContent = t('refExportMd'); }, 1500);
    } catch (e) {}
  });

  /* ---------- Language wiring ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('.lang button[data-lang]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    buildScaleBarSvg();
    buildStreetSvg();
    renderLineweightsAndPalettes();
    renderSunCalc();
    renderRefs();
  }

  document.querySelectorAll('.lang button[data-lang]').forEach((b) => {
    b.addEventListener('click', () => {
      lang = b.dataset.lang;
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      applyLang();
    });
  });

  setGroup(location.hash.slice(1) || 'draw');
  applyLang();
})();
