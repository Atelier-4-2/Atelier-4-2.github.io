import { createCloud } from './atelier-cloud.js';

const LANG_KEY = 'atelier-lang';
const THEME_KEY = 'atelier-theme';
const LAST_TOOL_KEY = 'atelier-last-tool';

const TOOLS = {
  terrain: { name: 'Terrain', url: 'https://atelier-4-2.github.io/site/' },
  board:   { name: 'Board',   url: 'https://atelier-4-2.github.io/board/' },
  view:    { name: 'View',    url: 'https://atelier-4-2.github.io/view/' },
  crit:    { name: 'Crit',    url: 'https://atelier-4-2.github.io/crit/' },
  share:   { name: 'Share',   url: 'https://atelier-4-2.github.io/share/' },
  quiz:    { name: 'Quiz',    url: 'https://atelier-4-2.github.io/quiz/' },
  stair:   { name: 'Stair',   url: 'https://atelier-4-2.github.io/site/stair.html' },
  trait:   { name: 'Trait',   url: 'https://atelier-4-2.github.io/site/trait.html' },
};

const STR = {
  ko: {
    pageTitle: 'Atelier 4·2 — 건축 학생을 위한 작은 도구들',
    brandAria: 'Atelier 4·2 메인페이지',
    navAria: 'Atelier 4·2 도구',
    workflowAria: '작업 흐름',
    footerAria: '안내',
    themeLabel: '테마 전환',
    heroTitle: '건축 학생을 위한<br>작은 도구들',
    heroSub: '대지를 읽고 모형을 만드는 도구, 패널을 짜는 보드, 프로젝트 자료 공유, <br>Rhino 모델 보기, 크리틱 기록, 건축사 암기 카드',
    recentLabel: '최근 사용:',
    recentResume: '이어서 열기 ›',
    wfLabel: '작업 흐름',
    wfTerrain: '대지 분석',
    wfView: '3D 검토',
    wfCrit: '크리틱',
    wfBoard: '패널 배치',
    wfShare: '자료 공유',
    projTitle: '내 프로젝트',
    projSubLoggedOut: 'Google Drive에 로그인하면 프로젝트 폴더를 여기서 바로 열 수 있습니다. 로그인 없이도 모든 도구를 쓸 수 있습니다.',
    projSubLoggedIn: '{user} · 프로젝트 {count}개',
    projEmpty: '아직 프로젝트가 없습니다. "새 프로젝트"로 첫 폴더를 만들어 보세요.',
    projLoading: '프로젝트 목록을 불러오는 중…',
    projError: '프로젝트를 불러오지 못했습니다. 다시 시도해 주세요.',
    projCreated: '프로젝트를 만들었습니다.',
    projExists: '같은 이름의 프로젝트가 이미 있습니다.',
    btnSignIn: 'Google 로그인',
    btnNewProj: '+ 새 프로젝트',
    btnSignOut: '로그아웃',
    btnCreate: '만들기',
    btnCancel: '취소',
    projNamePh: '프로젝트 이름 (예: Romainville_S6)',
    updatedAt: '수정',
    badgeTerrain: 'Board 연동',
    badgeBoard: 'Terrain 수신',
    badgeCloud: '클라우드 지원',
    badgeOffline: '오프라인 학습',
    t1Kicker: '대지 다이어그램 · 레이저 모형',
    t1Desc: '주소 하나로 IGN·지적·PLU 데이터를 모아 대지 다이어그램과 지형·건물 모형 도면을 만듭니다.',
    t1L1: '대지 다이어그램 · 3D 매스',
    t1L2: '지형 등고선 · 건물 레이저 도면',
    t1L3: 'PDF · SVG · DXF · STL · 3DM',
    t1Go: 'Terrain 열기 ›',
    t2Kicker: '패널 배치 · 핀업',
    t2Desc: '다이어그램·사진·글을 모아 A3·A1·A0 패널로 배치하고 출력합니다. Terrain에서 만든 다이어그램을 바로 보낼 수 있습니다.',
    t2L1: '자유 캔버스 · 메모 · 화살표',
    t2L2: 'A3 · A1 · A0 프레임 · 격자 정렬',
    t2L3: 'PDF · PNG · .atelier 저장',
    t2Go: 'Board 열기 ›',
    t3Kicker: 'Rhino 모델 보기 · 단면 투시',
    t3Desc: 'Rhino 파일(.3dm)을 끌어다 놓으면 브라우저에서 바로 3D로 열립니다. 단면을 잘라 선으로 그린 단면 투시도를 뽑습니다.',
    t3L1: '레이어 · 단면 · 측정',
    t3L2: '단면 투시 · 햇빛 · 분해',
    t3L3: 'PNG · AI 렌더용 캡처',
    t3Go: 'View 열기 ›',
    t4Kicker: '크리틱 녹음 · 도면 핀',
    t4Desc: '크리틱을 녹음하면서 도면을 누르면 그 순간이 핀으로 남습니다. 핀을 누르면 그 말부터 다시 듣습니다.',
    t4L1: '녹음 · 발표 타이머',
    t4L2: '도면 핀 · 메모 · 별표',
    t4L3: '요약 PDF · .crit 저장',
    t4Go: 'Crit 열기 ›',
    t5Kicker: '프로젝트 자료 공유 · 대용량',
    t5Desc: '내 클라우드(Google Drive 등)에 프로젝트 자료를 폴더째 올리고, 받는 사람은 로그인 없이 링크로 바로 받습니다. 대용량 파일도 끊기면 이어서 올립니다.',
    t5L1: '폴더째 올리기 · 끊겨도 이어 올리기',
    t5L2: '링크 · QR · 이메일로 바로 공유',
    t5L3: '자료는 내 클라우드에만 안전하게 저장',
    t5Go: 'Share 열기 ›',
    t6Kicker: '나만의 플래시카드 · 간격 반복',
    t6Desc: '엑셀·CSV나 텍스트로 암기 덱을 만들고 사진도 붙일 수 있습니다. Google 로그인하면 내 덱이 Drive에 자동 저장됩니다.',
    t6L1: '플래시카드 · 4지선다 · 간격 반복',
    t6L2: '엑셀(.xlsx)·CSV 자동 덱 업로드',
    t6L3: '예시 덱 포함 · Drive 자동 동기화',
    t6Go: 'Quiz 열기 ›',
    badgeSvgDxf: 'SVG · DXF',
    badgeLocal: '100% 로컬',
    t7Kicker: '계단 · 경사로 계산기',
    t7Desc: '층고를 입력하면 블롱델 공식(2h+g)과 프랑스·한국 법규를 자동 검사하고 1:50·1:100 평면·단면 SVG·DXF를 뽑습니다.',
    t7L1: '2h+g 최적 단수 자동 계산',
    t7L2: '프랑스 주거·ERP / 한국 기준 체크',
    t7L3: '1:50 · 1:100 SVG · DXF 바로 저장',
    t7Go: 'Stair 열기 ›',
    t8Kicker: '벡터 PDF → DXF 변환',
    t8Desc: '벡터 PDF 도면을 브라우저에서 바로 DXF로 바꿉니다. 선 굵기·색별로 레이어가 자동 정리되어 Rhino로 바로 가져옵니다.',
    t8L1: '100% 브라우저 로컬 변환 (업로드 없음)',
    t8L2: '선 굵기·색별 자동 레이어 분리',
    t8L3: '축척 지정 · DXF 즉시 다운로드',
    t8Go: 'Trait 열기 ›',
    footerTag: '설치 없이 브라우저에서 바로 쓰는 도구',
    linkAbout: '소개',
    linkPrivacy: '개인정보',
    linkLegal: '출처·법적 고지',
    linkFeedback: '피드백',
    btnInstall: '앱 설치',
    copyLink: '링크 복사',
    copied: '복사됨',
    quizDue: '오늘 복습 {n}장',
    quizDone: '복습 완료',
    calcTitle: '축척 · 용지 빠른 계산기',
    calcRealLabel: '실제 치수',
    calcModelLabel: '도면 · 모형 치수',
    calcAllScales: '현재 실제 치수의 축척별 모형 크기',
    calcColScale: '축척',
    calcColResult: '도면 · 모형 치수',
    calcPaperTitle: 'ISO 용지 규격 (A0 – A4)',
    calcColPaper: '규격',
    calcColDim: '크기 (mm)',
    calcColUse: '주 용도',
    paperA0: '최종 주리 패널',
    paperA1: '중간 발표 패널',
    paperA2: '부분 도면 · 상세',
    paperA3: '크리틱 핀업 · 포트폴리오',
    paperA4: '메모 · 보고서',
    changelogTitle: '업데이트 노트',
    feedbackPrompt: '오류 제보나 기능 제안이 있나요?',
    btnEmail: '이메일 보내기',
    cmdBtnLabel: '검색',
    cmdPh: '도구, 프로젝트, 기능 검색… (ESC 닫기)',
    cmdEmpty: '일치하는 항목이 없습니다.',
    juryUnset: '마감 · 주리 D-Day 설정',
    juryModalTitle: '마감 · 주리 D-Day 체크리스트',
    juryTitlePh: '예: 최종 주리 (Jury final)',
    checkAddPh: '산출물 추가 (예: A0 패널 2장, 1:200 모형)',
    btnAdd: '추가',
    juryLocalHint: '이 브라우저에 자동 저장됩니다.',
    juryReset: '초기화',
    tryAria: '빠른 체험',
    tryLabel: '파일 없이 바로 체험:',
    tryQuiz: '건축사 퀴즈',
    tryTerrain: '대지 분석',
    tryBrief: '프로젝트 브리프 카드',
    briefShare: '브리프 공유',
    tabScale: '축척 · 용지',
    tabRef: '기준 치수 · 레이저',
    refDimTitle: '자주 쓰는 건축 기준 치수 (프랑스 · 국제)',
    refColItem: '항목',
    refColVal: '기준 치수',
    refLaserTitle: '레이저 커팅 판재 두께 → 축척별 실제 두께',
    refColBoard: '판재 두께',
    tabArea: '면적 · CES/SDP',
    areaSiteLabel: '대지 면적 (m²)',
    areaFootprintLabel: '건축 면적 · Emprise (m²)',
    areaCircLabel: '순환 · 공용면적 가산 (%)',
    roomNamePh: '실 이름 (예: 아틀리에, 주거)',
    kpiCes: '건폐율 (CES)',
    kpiSdp: '총 연면적 (SDP)',
    kpiCos: '용적률 (COS)',
    btnCopyCsv: '면적표 CSV 복사',
    juryPreflight: '+ 인쇄 전 점검 불러오기',
    glossaryTitle: '한·불·영 건축 용어 사전',
    glossPh: '예: Plan masse, 건폐율, Linteau, PMR…',
    timerTitle: '발표 리허설 페이스 타이머',
    timerStart: '시작',
    timerPause: '일시정지',
    timerReset: '초기화',
    timerWarn: '마감 1분 전 — 핵심 결론을 정리하세요',
    timerDone: '발표 시간이 종료되었습니다',
    kitSecTitle: 'Studio Kit · 건축 실무 보조 도구',
    kitSecSub: '계산 · 도면 그래픽 · 주리 발표 유틸리티를 3개 묶음으로 정리했습니다.',
    kg1Title: '01 · 계산 · 기준',
    kg1Desc: '축척·용지 변환, 건축 기준 치수, 레이저 판재 두께, CES/SDP 면적표, 일조·그림자 길이',
    kg2Title: '02 · 도면 그래픽 키트',
    kg2Desc: '패널에 바로 붙이는 SVG 자산, 가로 단면 스케치, 선 굵기·컬러 팔레트, 로컬 이미지 압축',
    kg3Title: '03 · 주리 · 발표 키트',
    kg3Desc: '마감 D-Day·인쇄 전 점검, 발표 리허설 타이머, 한·불·영 건축 용어 사전, 브리프 & QR',
    chipSun: '일조 · 그림자 ›',
    chipScaleBar: '스케일바 · 방위표 SVG ›',
    chipStreet: '가로 단면 SVG ›',
    chipLine: '선 굵기 · 팔레트 ›',
    chipComp: '이미지 경량화 ›',
    chipJury: 'D-Day · 인쇄 점검',
    chipBrief: '브리프 · QR ›',
    linkKit: 'Studio Kit',
  },
  fr: {
    pageTitle: 'Atelier 4·2 — Petits outils pour étudiants en architecture',
    brandAria: 'Accueil Atelier 4·2',
    navAria: 'Outils Atelier 4·2',
    workflowAria: 'Flux de travail',
    footerAria: 'Informations',
    themeLabel: 'Changer le thème',
    heroTitle: 'Petits outils pour<br>l’atelier d’architecture',
    heroSub: 'Analyse de site et maquette laser, mise en page de planches, partage de fichiers, <br>visionneuse Rhino, enregistrement de corrections et cartes d’histoire',
    recentLabel: 'Récent :',
    recentResume: 'Reprendre ›',
    wfLabel: 'Parcours',
    wfTerrain: 'Site',
    wfView: '3D',
    wfCrit: 'Critique',
    wfBoard: 'Planche',
    wfShare: 'Partage',
    projTitle: 'Mes projets',
    projSubLoggedOut: 'Connectez votre Google Drive pour ouvrir vos dossiers de projet ici. Tous les outils restent accessibles sans compte.',
    projSubLoggedIn: '{user} · {count} projet(s)',
    projEmpty: 'Aucun projet pour le moment. Créez votre premier dossier avec « Nouveau projet ».',
    projLoading: 'Chargement des projets…',
    projError: 'Impossible de charger les projets. Veuillez réessayer.',
    projCreated: 'Projet créé.',
    projExists: 'Un projet portant ce nom existe déjà.',
    btnSignIn: 'Connexion Google',
    btnNewProj: '+ Nouveau projet',
    btnSignOut: 'Déconnexion',
    btnCreate: 'Créer',
    btnCancel: 'Annuler',
    projNamePh: 'Nom du projet (ex. Romainville_S6)',
    updatedAt: 'Modifié',
    badgeTerrain: 'Lien Board',
    badgeBoard: 'Depuis Terrain',
    badgeCloud: 'Cloud',
    badgeOffline: 'Hors ligne',
    t1Kicker: 'Diagrammes de site · Maquette laser',
    t1Desc: 'À partir d’une adresse, rassemblez IGN, cadastre et PLU pour générer diagrammes de site et plans de découpe laser.',
    t1L1: 'Diagrammes de site · Volumétrie 3D',
    t1L2: 'Courbes de niveau · Découpe laser',
    t1L3: 'PDF · SVG · DXF · STL · 3DM',
    t1Go: 'Ouvrir Terrain ›',
    t2Kicker: 'Planches · Pin-up',
    t2Desc: 'Assemblez diagrammes, photos et textes en planches A3, A1 ou A0. Recevez directement vos diagrammes depuis Terrain.',
    t2L1: 'Canevas libre · Notes · Flèches',
    t2L2: 'Cadres A3 · A1 · A0 · Grille',
    t2L3: 'Export PDF · PNG · .atelier',
    t2Go: 'Ouvrir Board ›',
    t3Kicker: 'Visionneuse Rhino · Coupe perspective',
    t3Desc: 'Déposez un fichier Rhino (.3dm) pour l’explorer en 3D dans le navigateur et produire des coupes perspectives au trait.',
    t3L1: 'Calques · Coupes · Mesures',
    t3L2: 'Coupe perspective · Soleil · Éclaté',
    t3L3: 'PNG · Captures pour rendu IA',
    t3Go: 'Ouvrir View ›',
    t4Kicker: 'Enregistrement de critique · Repères',
    t4Desc: 'Enregistrez la correction et cliquez sur le plan pour poser un repère. Cliquez sur un repère pour réécouter ce passage.',
    t4L1: 'Audio · Minuteur d’oral',
    t4L2: 'Repères sur plan · Notes · Favoris',
    t4L3: 'Synthèse PDF · Fichier .crit',
    t4Go: 'Ouvrir Crit ›',
    t5Kicker: 'Partage de projet · Fichiers lourds',
    t5Desc: 'Déposez des dossiers entiers sur votre cloud (Google Drive) et partagez un lien direct sans connexion pour le destinataire.',
    t5L1: 'Dossiers entiers · Reprise automatique',
    t5L2: 'Lien · QR code · Envoi par e-mail',
    t5L3: 'Fichiers stockés uniquement sur votre cloud',
    t5Go: 'Ouvrir Share ›',
    t6Kicker: 'Mes flashcards · Répétition espacée',
    t6Desc: 'Créez vos paquets depuis Excel, CSV ou texte avec images, et synchronisez automatiquement vos cartes sur Google Drive.',
    t6L1: 'Flashcards · QCM · Répétition espacée',
    t6L2: 'Import automatique Excel (.xlsx) & CSV',
    t6L3: 'Paquets d’exemple · Synchro Google Drive',
    t6Go: 'Ouvrir Quiz ›',
    badgeSvgDxf: 'SVG · DXF',
    badgeLocal: '100 % local',
    t7Kicker: 'Calculateur d’escalier & rampe',
    t7Desc: 'Saisissez la hauteur d’étage pour vérifier Blondel (2h+g) et les normes FR/KR, puis exportez plans et coupes 1/50–1/100 en SVG ou DXF.',
    t7L1: 'Calcul optimal 2h+g automatique',
    t7L2: 'Vérification normes Logement·ERP / Corée',
    t7L3: 'Export 1/50 · 1/100 en SVG & DXF',
    t7Go: 'Ouvrir Stair ›',
    t8Kicker: 'Conversion PDF vectoriel → DXF',
    t8Desc: 'Convertissez vos plans PDF vectoriels en DXF dans le navigateur avec séparation automatique des calques par épaisseur et couleur pour Rhino.',
    t8L1: 'Conversion 100 % locale (sans envoi)',
    t8L2: 'Calques auto par épaisseur et couleur',
    t8L3: 'Choix d’échelle · Téléchargement DXF',
    t8Go: 'Ouvrir Trait ›',
    footerTag: 'Outils gratuits dans le navigateur, sans installation',
    linkAbout: 'À propos',
    linkPrivacy: 'Confidentialité',
    linkLegal: 'Mentions légales',
    linkFeedback: 'Retours',
    btnInstall: 'Installer l’app',
    copyLink: 'Copier le lien',
    copied: 'Copié',
    quizDue: '{n} à réviser',
    quizDone: 'À jour',
    calcTitle: 'Calculateur d’échelle & formats',
    calcRealLabel: 'Dimension réelle',
    calcModelLabel: 'Plan · Maquette',
    calcAllScales: 'Taille en maquette selon l’échelle',
    calcColScale: 'Échelle',
    calcColResult: 'Dimension réduite',
    calcPaperTitle: 'Formats papier ISO (A0 – A4)',
    calcColPaper: 'Format',
    calcColDim: 'Dimensions (mm)',
    calcColUse: 'Usage courant',
    paperA0: 'Planche de rendu final',
    paperA1: 'Planche d’étape',
    paperA2: 'Plan partiel · détail',
    paperA3: 'Pin-up de correction · portfolio',
    paperA4: 'Notes · dossier écrit',
    changelogTitle: 'Nouveautés',
    feedbackPrompt: 'Un bug à signaler ou une idée ?',
    btnEmail: 'Envoyer un e-mail',
    cmdBtnLabel: 'Chercher',
    cmdPh: 'Outils, projets, actions… (Échap pour fermer)',
    cmdEmpty: 'Aucun résultat.',
    juryUnset: 'Définir une date de rendu',
    juryModalTitle: 'Compte à rebours & livrables',
    juryTitlePh: 'Ex. Jury final S6',
    checkAddPh: 'Ajouter un livrable (ex. 2 planches A0, maquette 1/200)',
    btnAdd: 'Ajouter',
    juryLocalHint: 'Enregistré automatiquement dans ce navigateur.',
    juryReset: 'Réinitialiser',
    tryAria: 'Essai rapide',
    tryLabel: 'Essayer sans fichier :',
    tryQuiz: 'Quiz histoire',
    tryTerrain: 'Analyse de site',
    tryBrief: 'Fiche projet partageable',
    briefShare: 'Fiche brief',
    tabScale: 'Échelle · Formats',
    tabRef: 'Repères · Laser',
    refDimTitle: 'Dimensions usuelles d’architecture (FR · ISO)',
    refColItem: 'Élément',
    refColVal: 'Repère',
    refLaserTitle: 'Épaisseur carton/bois laser → épaisseur réelle',
    refColBoard: 'Plaque',
    tabArea: 'Surfaces · CES/SDP',
    areaSiteLabel: 'Surface parcelle (m²)',
    areaFootprintLabel: 'Emprise au sol (m²)',
    areaCircLabel: 'Circulations / communs (+%)',
    roomNamePh: 'Programme (ex. Atelier, Logements)',
    kpiCes: 'CES (Emprise)',
    kpiSdp: 'SDP totale',
    kpiCos: 'COS indicatif',
    btnCopyCsv: 'Copier le tableau CSV',
    juryPreflight: '+ Checklist avant impression',
    glossaryTitle: 'Glossaire FR · KO · EN',
    glossPh: 'Ex. Plan masse, Linteau, PMR, 건폐율…',
    timerTitle: 'Minuteur de répétition d’oral',
    timerStart: 'Démarrer',
    timerPause: 'Pause',
    timerReset: 'Réinitialiser',
    timerWarn: 'Dernière minute — concluez sur l’essentiel',
    timerDone: 'Temps écoulé',
    kitSecTitle: 'Studio Kit · Utilitaires d’atelier',
    kitSecSub: 'Calculs, kit graphique vectoriel et préparation de jury regroupés en 3 ensembles.',
    kg1Title: '01 · Calculs & Repères',
    kg1Desc: 'Échelles, formats ISO, dimensions usuelles, épaisseurs laser, CES/SDP et ombres solaires',
    kg2Title: '02 · Kit graphique',
    kg2Desc: 'Barre d’échelle & nord SVG, coupe de rue SVG, épaisseurs de traits, palettes et compression d’images',
    kg3Title: '03 · Jury & Oral',
    kg3Desc: 'Compte à rebours & checklist d’impression, minuteur d’oral, glossaire FR/KO/EN et fiche QR',
    chipSun: 'Soleil · Ombres ›',
    chipScaleBar: 'Échelle · Nord SVG ›',
    chipStreet: 'Coupe de rue SVG ›',
    chipLine: 'Traits · Palettes ›',
    chipComp: 'Compresser images ›',
    chipJury: 'Rendu · Impression',
    chipBrief: 'Fiche · QR ›',
    linkKit: 'Studio Kit',
  },
};

const CHANGELOG = [
  {
    date: '2026-11-26',
    koTitle: '허브 v2 — PWA · 축척 계산기 · 프로젝트 카드 · FR/KO · 다크모드',
    frTitle: 'Hub v2 — PWA · Calculateur d’échelle · Projets · FR/KO · Mode sombre',
    koBody: '홈 화면 설치(PWA)와 오프라인 실행, 축척·용지 계산기, Google Drive 프로젝트 카드(항목 수·링크 복사), Quiz 복습 배지, 6개 도구 상단 메뉴 통일을 추가했습니다.',
    frBody: 'Ajout de l’installation PWA hors ligne, du calculateur d’échelle et formats ISO, des cartes projets Google Drive avec compteurs et copie de lien, du badge de révision Quiz et de la navigation unifiée.',
  },
  {
    date: '2026-11-23',
    koTitle: 'View · Crit · Share 3개 도구 추가',
    frTitle: 'Ajout de View, Crit et Share',
    koBody: 'Rhino 3D 뷰어·단면 투시(View), 크리틱 녹음·도면 핀(Crit), 대용량 폴더 공유(Share)를 허브에 연결했습니다.',
    frBody: 'Intégration de la visionneuse Rhino (View), de l’enregistrement de critiques avec repères (Crit) et du partage de dossiers lourds (Share).',
  },
  {
    date: '2026-11-18',
    koTitle: 'Atelier 4·2 허브 공개 (Terrain · Board · Quiz)',
    frTitle: 'Lancement d’Atelier 4·2 (Terrain · Board · Quiz)',
    koBody: '대지 다이어그램·레이저 모형(Terrain), 패널 배치(Board), 건축사 암기 카드(Quiz)를 한곳에서 여는 메인 허브를 열었습니다.',
    frBody: 'Ouverture du portail regroupant Terrain, Board et Quiz pour les étudiants en architecture.',
  },
];

let lang = 'ko';
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'fr' || saved === 'ko') lang = saved;
  else if ((navigator.language || '').toLowerCase().startsWith('fr')) lang = 'fr';
} catch (e) {}

const t = (key) => (STR[lang] && STR[lang][key]) || STR.ko[key] || key;

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    el.setAttribute('placeholder', t(el.dataset.i18nPh));
  });
  document.querySelectorAll('.lang button[data-lang]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.setAttribute('aria-label', t('themeLabel'));
    themeBtn.title = t('themeLabel');
  }
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) calcBtn.title = t('calcTitle');
  renderRecentBar();
  renderQuizBadge();
  renderScaleSummary();
  renderPaperTable();
  renderRefTables();
  renderAreaCalc();
  renderGlossary();
  renderTimer();
  renderJury();
  renderChangelog();
  renderProjectsHeader();
  if (cachedProjects) renderProjectsList(cachedProjects);
}

document.querySelectorAll('.lang button[data-lang]').forEach((b) => {
  b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    applyLang();
  });
});

/* ===================== Theme toggle ===================== */
function currentEffectiveTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'dark' || explicit === 'light') return explicit;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  const btn = document.getElementById('themeBtn');
  const dark = currentEffectiveTheme() === 'dark';
  if (btn) btn.setAttribute('aria-pressed', String(dark));
  if (!icon) return;
  icon.innerHTML = dark
    ? '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
    : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
}

document.getElementById('themeBtn')?.addEventListener('click', () => {
  const next = currentEffectiveTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  updateThemeIcon();
});
updateThemeIcon();

/* ===================== Recent tool tracking ===================== */
document.querySelectorAll('a[data-tool]').forEach((a) => {
  a.addEventListener('click', () => {
    try {
      localStorage.setItem(LAST_TOOL_KEY, JSON.stringify({ id: a.dataset.tool, at: Date.now() }));
    } catch (e) {}
  });
});

function renderRecentBar() {
  const bar = document.getElementById('recentBar');
  const label = document.getElementById('recentLabel');
  const link = document.getElementById('recentLink');
  if (!bar || !label || !link) return;
  try {
    const raw = JSON.parse(localStorage.getItem(LAST_TOOL_KEY) || 'null');
    if (!raw || !TOOLS[raw.id]) { bar.hidden = true; return; }
    const info = TOOLS[raw.id];
    label.textContent = t('recentLabel');
    link.href = info.url;
    link.textContent = `${info.name} ${t('recentResume')}`;
    bar.hidden = false;
  } catch (e) {
    bar.hidden = true;
  }
}

document.getElementById('recentClose')?.addEventListener('click', () => {
  try { localStorage.removeItem(LAST_TOOL_KEY); } catch (e) {}
  const bar = document.getElementById('recentBar');
  if (bar) bar.hidden = true;
});

/* ===================== My Projects (atelier-cloud.js) ===================== */
const cfg = window.ATELIER_HOME_CONFIG || {};
const cloud = createCloud({
  googleClientId: cfg.GOOGLE_CLIENT_ID || '',
  msClientId: cfg.MS_CLIENT_ID || '',
  rootName: cfg.ROOT_FOLDER_NAME || 'Atelier 4·2 Share',
});

let currentUser = null;
let cachedProjects = null;
const projectDetailsCache = new Map();

const elSub = document.getElementById('projectsSub');
const elStatus = document.getElementById('projectsStatus');
const elGrid = document.getElementById('projectsGrid');
const btnSignIn = document.getElementById('btnSignIn');
const btnNewProj = document.getElementById('btnNewProj');
const btnSignOut = document.getElementById('btnSignOut');
const createForm = document.getElementById('projCreateForm');
const nameInput = document.getElementById('projNameInput');
const btnCancelCreate = document.getElementById('btnCancelCreate');

function setStatus(msg) {
  if (!elStatus) return;
  elStatus.textContent = msg || '';
  elStatus.hidden = !msg;
}

function renderProjectsHeader() {
  if (!elSub) return;
  if (!currentUser) {
    elSub.textContent = t('projSubLoggedOut');
    if (btnSignIn) btnSignIn.hidden = false;
    if (btnNewProj) btnNewProj.hidden = true;
    if (btnSignOut) btnSignOut.hidden = true;
    if (createForm) createForm.hidden = true;
    if (elGrid) elGrid.hidden = true;
    return;
  }
  const count = Array.isArray(cachedProjects) ? cachedProjects.length : 0;
  const userLabel = currentUser.name || currentUser.email || 'Google Drive';
  elSub.textContent = t('projSubLoggedIn')
    .replace('{user}', userLabel)
    .replace('{count}', String(count));
  if (btnSignIn) btnSignIn.hidden = true;
  if (btnNewProj) btnNewProj.hidden = false;
  if (btnSignOut) btnSignOut.hidden = false;
}

function formatDate(iso) {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'ko-KR', {
      year: 'numeric', month: 'short', day: 'numeric',
    }).format(new Date(iso));
  } catch (e) {
    return String(iso).slice(0, 10);
  }
}

function renderProjectsList(list) {
  if (!elGrid) return;
  elGrid.innerHTML = '';
  if (!list || !list.length) {
    elGrid.hidden = true;
    setStatus(t('projEmpty'));
    return;
  }
  setStatus('');
  const sorted = [...list].sort((a, b) => String(b.modifiedTime || '').localeCompare(String(a.modifiedTime || '')));
  for (const p of sorted.slice(0, 9)) {
    const li = document.createElement('li');
    li.className = 'proj-card';

    const title = document.createElement('p');
    title.className = 'proj-name';
    title.textContent = p.name;
    title.title = p.name;

    const meta = document.createElement('p');
    meta.className = 'proj-meta';
    meta.textContent = p.modifiedTime ? `${t('updatedAt')} · ${formatDate(p.modifiedTime)}` : 'Google Drive';

    const counts = document.createElement('div');
    counts.className = 'proj-counts';
    renderProjectCounts(counts, projectDetailsCache.get(p.id));

    const links = document.createElement('div');
    links.className = 'proj-links';
    const targets = [
      { label: 'Share', url: 'https://atelier-4-2.github.io/share/' },
      { label: 'View',  url: 'https://atelier-4-2.github.io/view/' },
      { label: 'Crit',  url: 'https://atelier-4-2.github.io/crit/' },
      { label: 'Board', url: 'https://atelier-4-2.github.io/board/' },
    ];
    for (const item of targets) {
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;
      a.addEventListener('click', () => {
        try { cloud.rememberProject(p, item.label.toLowerCase()); } catch (e) {}
      });
      links.appendChild(a);
    }

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.textContent = t('copyLink');
    copyBtn.addEventListener('click', async () => {
      try {
        const handle = await cloud.openProject(p);
        const url = handle.openUrl();
        if (url && navigator.clipboard) {
          await navigator.clipboard.writeText(url);
          copyBtn.textContent = t('copied');
          setTimeout(() => { copyBtn.textContent = t('copyLink'); }, 1600);
        }
      } catch (e) {}
    });
    links.appendChild(copyBtn);

    const briefBtn = document.createElement('button');
    briefBtn.type = 'button';
    briefBtn.textContent = t('briefShare');
    briefBtn.addEventListener('click', async () => {
      try {
        const handle = await cloud.openProject(p);
        const info = projectDetailsCache.get(p.id) || {};
        const payload = {
          title: p.name,
          subtitle: p.modifiedTime ? formatDate(p.modifiedTime) : '',
          driveUrl: handle.openUrl() || '',
          counts: info,
        };
        const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(payload)))));
        window.open(`./brief.html#${encoded}`, '_blank', 'noopener');
      } catch (e) {}
    });
    links.appendChild(briefBtn);

    li.append(title, meta, counts, links);
    elGrid.appendChild(li);

    if (!projectDetailsCache.has(p.id)) {
      loadProjectDetails(p, counts);
    }
  }
  elGrid.hidden = false;
}

function renderProjectCounts(container, info) {
  if (!container || !info) return;
  container.innerHTML = '';
  const items = [
    ['Board', info.board],
    ['Crit', info.crit],
    ['3DM', info.models],
    ['Files', info.files],
  ].filter(([, n]) => n > 0);
  for (const [label, n] of items) {
    const span = document.createElement('span');
    span.className = 'proj-count-pill';
    span.textContent = `${label} ${n}`;
    container.appendChild(span);
  }
}

async function loadProjectDetails(node, countsEl) {
  try {
    const p = await cloud.openProject(node);
    const [board, crit, models, files] = await Promise.all([
      p.list('board').catch(() => []),
      p.list('crit').catch(() => []),
      p.list('models').catch(() => []),
      p.list('files').catch(() => []),
    ]);
    const info = { board: board.length, crit: crit.length, models: models.length, files: files.length };
    projectDetailsCache.set(node.id, info);
    renderProjectCounts(countsEl, info);
  } catch (e) {}
}

async function refreshProjects() {
  setStatus(t('projLoading'));
  try {
    cachedProjects = await cloud.listProjects();
    renderProjectsHeader();
    renderProjectsList(cachedProjects);
  } catch (e) {
    setStatus(t('projError'));
  }
}

btnSignIn?.addEventListener('click', async () => {
  btnSignIn.disabled = true;
  setStatus('');
  try {
    currentUser = await cloud.signIn('google');
    await refreshProjects();
  } catch (e) {
    if (e && e.code !== 'popup_closed') setStatus(t('projError'));
  } finally {
    btnSignIn.disabled = false;
  }
});

btnSignOut?.addEventListener('click', async () => {
  await cloud.signOut();
  currentUser = null;
  cachedProjects = null;
  setStatus('');
  renderProjectsHeader();
});

btnNewProj?.addEventListener('click', () => {
  if (!createForm) return;
  createForm.hidden = !createForm.hidden;
  if (!createForm.hidden && nameInput) nameInput.focus();
});

btnCancelCreate?.addEventListener('click', () => {
  if (createForm) createForm.hidden = true;
  if (nameInput) nameInput.value = '';
});

createForm?.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const name = (nameInput?.value || '').trim();
  if (!name) return;
  try {
    await cloud.createProject(name);
    if (nameInput) nameInput.value = '';
    createForm.hidden = true;
    await refreshProjects();
    setStatus(t('projCreated'));
  } catch (e) {
    setStatus(e && e.code === 'exists' ? t('projExists') : t('projError'));
  }
});

/* ===================== Quiz Due Count Badge ===================== */
function renderQuizBadge() {
  const badge = document.getElementById('quizBadge');
  if (!badge) return;
  try {
    const raw = JSON.parse(localStorage.getItem('atelier42_quiz_srs_v2') || 'null');
    if (!raw || typeof raw !== 'object') {
      badge.classList.remove('due');
      badge.textContent = t('badgeOffline');
      return;
    }
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    const limit = endOfToday.getTime();
    let total = 0;
    let due = 0;
    for (const [k, rec] of Object.entries(raw)) {
      if (k === '_migratedV1' || !rec || typeof rec !== 'object') continue;
      total++;
      if (rec.status === 'review' || (rec.dueDate > 0 && rec.dueDate <= limit)) due++;
    }
    if (due > 0) {
      badge.classList.add('due');
      badge.textContent = t('quizDue').replace('{n}', String(due));
    } else if (total > 0) {
      badge.classList.remove('due');
      badge.textContent = t('quizDone');
    } else {
      badge.classList.remove('due');
      badge.textContent = t('badgeOffline');
    }
  } catch (e) {
    badge.classList.remove('due');
    badge.textContent = t('badgeOffline');
  }
}

/* ===================== Scale & Paper Calculator ===================== */
const COMMON_SCALES = [20, 50, 100, 200, 500, 1000];
let activeScale = 100;

const realInput = document.getElementById('realInput');
const realUnit = document.getElementById('realUnit');
const modelInput = document.getElementById('modelInput');
const modelUnit = document.getElementById('modelUnit');
const scaleCustom = document.getElementById('scaleCustom');

function fmtNum(n) {
  if (!Number.isFinite(n)) return '0';
  const r = Math.round(n * 100) / 100;
  return String(r);
}

function realToMm() {
  const v = parseFloat(realInput?.value || '0');
  if (!Number.isFinite(v)) return 0;
  return realUnit?.value === 'cm' ? v * 10 : v * 1000;
}

function updateModelFromReal() {
  const realMm = realToMm();
  const modelMm = activeScale > 0 ? realMm / activeScale : 0;
  if (modelInput) {
    modelInput.value = fmtNum(modelUnit?.value === 'cm' ? modelMm / 10 : modelMm);
  }
  renderScaleSummary();
}

function updateRealFromModel() {
  const v = parseFloat(modelInput?.value || '0');
  const modelMm = Number.isFinite(v) ? (modelUnit?.value === 'cm' ? v * 10 : v) : 0;
  const realMm = modelMm * activeScale;
  if (realInput) {
    realInput.value = fmtNum(realUnit?.value === 'cm' ? realMm / 10 : realMm / 1000);
  }
  renderScaleSummary();
}

function renderScaleSummary() {
  const tbody = document.getElementById('scaleSummaryBody');
  if (!tbody) return;
  const realMm = realToMm();
  tbody.innerHTML = '';
  for (const s of COMMON_SCALES) {
    const mm = realMm / s;
    const cm = mm / 10;
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = `1 / ${s}`;
    const td2 = document.createElement('td');
    td2.textContent = `${fmtNum(mm)} mm (${fmtNum(cm)} cm)`;
    tr.append(td1, td2);
    tbody.appendChild(tr);
  }
}

function renderPaperTable() {
  const tbody = document.getElementById('paperTableBody');
  if (!tbody) return;
  const rows = [
    ['A0', '841 × 1189', t('paperA0')],
    ['A1', '594 × 841', t('paperA1')],
    ['A2', '420 × 594', t('paperA2')],
    ['A3', '297 × 420', t('paperA3')],
    ['A4', '210 × 297', t('paperA4')],
  ];
  tbody.innerHTML = '';
  for (const [name, dim, use] of rows) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td'); td1.textContent = name;
    const td2 = document.createElement('td'); td2.textContent = dim;
    const td3 = document.createElement('td'); td3.textContent = use;
    tr.append(td1, td2, td3);
    tbody.appendChild(tr);
  }
}

function setScale(s) {
  if (!Number.isFinite(s) || s < 1) return;
  activeScale = s;
  if (scaleCustom && Number(scaleCustom.value) !== s) scaleCustom.value = String(s);
  document.querySelectorAll('#scalePills .scale-pill').forEach((b) => {
    b.setAttribute('aria-pressed', String(Number(b.dataset.scale) === s));
  });
  updateModelFromReal();
}

document.querySelectorAll('#scalePills .scale-pill').forEach((b) => {
  b.addEventListener('click', () => setScale(Number(b.dataset.scale)));
});
scaleCustom?.addEventListener('input', () => {
  const v = parseFloat(scaleCustom.value);
  if (v >= 1) setScale(v);
});
realInput?.addEventListener('input', updateModelFromReal);
realUnit?.addEventListener('change', updateModelFromReal);
modelInput?.addEventListener('input', updateRealFromModel);
modelUnit?.addEventListener('change', updateModelFromReal);

/* ===================== Changelog & Modal Wiring ===================== */
function renderChangelog() {
  const list = document.getElementById('changelogList');
  if (!list) return;
  list.innerHTML = '';
  for (const item of CHANGELOG) {
    const li = document.createElement('li');
    li.className = 'changelog-item';
    const dt = document.createElement('div');
    dt.className = 'changelog-date';
    dt.textContent = item.date;
    const h3 = document.createElement('h3');
    h3.textContent = lang === 'fr' ? item.frTitle : item.koTitle;
    const p = document.createElement('p');
    p.textContent = lang === 'fr' ? item.frBody : item.koBody;
    li.append(dt, h3, p);
    list.appendChild(li);
  }
}

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.hidden = false;
  el.querySelector('.modal-close')?.focus();
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = true;
}

document.getElementById('calcBtn')?.addEventListener('click', () => openModal('calcModal'));
document.getElementById('footerCalcBtn')?.addEventListener('click', () => openModal('calcModal'));
document.getElementById('changelogBtn')?.addEventListener('click', () => openModal('changelogModal'));

document.querySelectorAll('[data-close-modal]').forEach((btn) => {
  btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
});
document.querySelectorAll('.modal-backdrop').forEach((bd) => {
  bd.addEventListener('click', (ev) => {
    if (ev.target === bd) bd.hidden = true;
  });
});
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop').forEach((bd) => { bd.hidden = true; });
  }
});

/* ===================== PWA Service Worker & Install Prompt ===================== */
let deferredInstallPrompt = null;
const btnInstallPwa = document.getElementById('btnInstallPwa');

window.addEventListener('beforeinstallprompt', (ev) => {
  ev.preventDefault();
  deferredInstallPrompt = ev;
  if (btnInstallPwa) btnInstallPwa.hidden = false;
});

btnInstallPwa?.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  try { await deferredInstallPrompt.userChoice; } catch (e) {}
  deferredInstallPrompt = null;
  btnInstallPwa.hidden = true;
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

/* ===================== Calculator Tabs & Reference Tables ===================== */
document.querySelectorAll('[data-calc-tab]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const which = tab.dataset.calcTab;
    document.querySelectorAll('[data-calc-tab]').forEach((b) => {
      b.setAttribute('aria-selected', String(b.dataset.calcTab === which));
    });
    const sEl = document.getElementById('calcTabScale');
    const rEl = document.getElementById('calcTabRef');
    const aEl = document.getElementById('calcTabArea');
    if (sEl) sEl.hidden = which !== 'scale';
    if (rEl) rEl.hidden = which !== 'ref';
    if (aEl) aEl.hidden = which !== 'area';
  });
});

function renderRefTables() {
  const dimBody = document.getElementById('refDimBody');
  if (dimBody) {
    const rows = lang === 'fr' ? [
      ['Escalier (Blondel)', '2H + G = 60 – 64 cm (H ≈ 17, G ≈ 28)'],
      ['Rampe PMR', '≤ 5 % (≤ 8 % sur 2 m, palier 1,40 m)'],
      ['Aire de rotation PMR', 'Ø 150 cm'],
      ['Porte / Couloir PMR', 'Porte ≥ 90 cm (passage 83) · Couloir ≥ 120 cm'],
      ['Place de stationnement', '2,50 × 5,00 m (PMR : 3,30 × 5,00 m)'],
      ['Hauteur sous plafond', 'Logement ≥ 2,50 m · Public ≥ 2,70 – 3,00 m'],
      ['Garde-corps', 'H ≥ 100 cm (110 cm si chute > 12 m)'],
    ] : [
      ['계단 (Blondel 공식)', '2H + G = 60 – 64 cm (H ≈ 17, G ≈ 28)'],
      ['경사로 기울기 (PMR)', '5% 이하 (2m 이하 구간 8%, 참 1.40m)'],
      ['휠체어 회전 반경 (PMR)', 'Ø 1500 mm'],
      ['출입문 · 복도 폭', '문 ≥ 900 mm (유효 830) · 복도 ≥ 1200 mm'],
      ['주차 구획', '2.5 × 5.0 m (장애인 3.3 × 5.0 m)'],
      ['천장고 (기준)', '주거 ≥ 2.5 m · 공공 ≥ 2.7 – 3.0 m'],
      ['난간 높이', '1000 mm 이상 (추락고 큰 구간 1100 mm)'],
    ];
    dimBody.innerHTML = '';
    for (const [k, v] of rows) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td'); td1.textContent = k;
      const td2 = document.createElement('td'); td2.textContent = v;
      tr.append(td1, td2);
      dimBody.appendChild(tr);
    }
  }
  const laserBody = document.getElementById('refLaserBody');
  if (laserBody) {
    const thicknesses = [1, 1.5, 2, 3];
    const scales = [50, 100, 200, 500];
    laserBody.innerHTML = '';
    for (const mm of thicknesses) {
      const tr = document.createElement('tr');
      const td0 = document.createElement('td'); td0.textContent = `${mm} mm`;
      tr.appendChild(td0);
      for (const s of scales) {
        const realCm = (mm * s) / 10;
        const td = document.createElement('td');
        td.textContent = realCm >= 100 ? `${fmtNum(realCm / 100)} m` : `${fmtNum(realCm)} cm`;
        tr.appendChild(td);
      }
      laserBody.appendChild(tr);
    }
  }
}

/* ===================== Jury D-Day & Deliverable Checklist ===================== */
const JURY_KEY = 'atelier-jury-v1';

function loadJury() {
  try {
    const d = JSON.parse(localStorage.getItem(JURY_KEY) || 'null');
    if (d && typeof d === 'object') {
      return { title: d.title || '', date: d.date || '', items: Array.isArray(d.items) ? d.items : [] };
    }
  } catch (e) {}
  return { title: '', date: '', items: [] };
}

function saveJury(data) {
  try { localStorage.setItem(JURY_KEY, JSON.stringify(data)); } catch (e) {}
}

function calcDday(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return null;
  const target = new Date(parts[0], parts[1] - 1, parts[2]);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target - today) / 86400000);
}

function renderJury() {
  const data = loadJury();
  const badge = document.getElementById('juryDdayBadge');
  const summary = document.getElementById('jurySummaryText');
  const titleIn = document.getElementById('juryTitleInput');
  const dateIn = document.getElementById('juryDateInput');
  const listEl = document.getElementById('checkList');

  if (titleIn && document.activeElement !== titleIn) titleIn.value = data.title;
  if (dateIn && document.activeElement !== dateIn) dateIn.value = data.date;

  const diff = calcDday(data.date);
  if (badge) {
    if (diff === null) badge.textContent = 'D-Day';
    else if (diff === 0) badge.textContent = 'D-Day!';
    else if (diff > 0) badge.textContent = `D-${diff}`;
    else badge.textContent = `D+${Math.abs(diff)}`;
  }

  const doneCount = data.items.filter((i) => i.done).length;
  const totalCount = data.items.length;
  if (summary) {
    if (!data.title && !data.date && !totalCount) {
      summary.textContent = t('juryUnset');
    } else {
      const namePart = data.title || (lang === 'fr' ? 'Rendu' : '마감');
      const progPart = totalCount ? ` (${doneCount}/${totalCount})` : '';
      summary.textContent = `${namePart}${progPart}`;
    }
  }

  if (listEl) {
    listEl.innerHTML = '';
    data.items.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'check-item' + (item.done ? ' done' : '');
      const lbl = document.createElement('label');
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = !!item.done;
      cb.addEventListener('change', () => {
        const cur = loadJury();
        if (cur.items[idx]) cur.items[idx].done = cb.checked;
        saveJury(cur);
        renderJury();
      });
      const sp = document.createElement('span');
      sp.textContent = item.text;
      lbl.append(cb, sp);
      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'check-del';
      del.textContent = '×';
      del.setAttribute('aria-label', '삭제');
      del.addEventListener('click', () => {
        const cur = loadJury();
        cur.items.splice(idx, 1);
        saveJury(cur);
        renderJury();
      });
      li.append(lbl, del);
      listEl.appendChild(li);
    });
  }
}

document.getElementById('juryBtn')?.addEventListener('click', () => {
  renderJury();
  openModal('juryModal');
});
document.getElementById('juryTitleInput')?.addEventListener('input', (e) => {
  const cur = loadJury(); cur.title = e.target.value; saveJury(cur); renderJury();
});
document.getElementById('juryDateInput')?.addEventListener('change', (e) => {
  const cur = loadJury(); cur.date = e.target.value; saveJury(cur); renderJury();
});
document.getElementById('checkAddForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const inp = document.getElementById('checkAddInput');
  const txt = (inp?.value || '').trim();
  if (!txt) return;
  const cur = loadJury();
  cur.items.push({ text: txt, done: false });
  saveJury(cur);
  if (inp) inp.value = '';
  renderJury();
});
document.getElementById('juryResetBtn')?.addEventListener('click', () => {
  try { localStorage.removeItem(JURY_KEY); } catch (e) {}
  renderJury();
});

document.getElementById('juryPreflightBtn')?.addEventListener('click', () => {
  const presets = lang === 'fr' ? [
    'Flèche du nord & barre d’échelle sur chaque plan',
    'Repères de coupe cohérents (A-A\', B-B\')',
    'Hiérarchie des épaisseurs de traits & contraste',
    'Marges, fonds perdus & polices vectorisées (PDF)',
    'Test d’impression réduit en A3 à bout de bras',
    'Test des 30 secondes avec un regard extérieur',
  ] : [
    '모든 도면에 방위표 · 스케일바 확인',
    '단면 기호·명칭(A-A\', B-B\') 일치 확인',
    '선 굵기 위계 및 흑백 대비 점검',
    '여백·재단선·PDF 폰트 임베드 확인',
    'A0 패널을 A3로 축소 출력해 가독성 테스트',
    '처음 보는 사람 기준 30초 시선 흐름 테스트',
  ];
  const cur = loadJury();
  const existing = new Set(cur.items.map((x) => x.text));
  for (const text of presets) {
    if (!existing.has(text)) cur.items.push({ text, done: false });
  }
  saveJury(cur);
  renderJury();
});

/* ===================== Area CES/SDP Calculator ===================== */
const AREA_KEY = 'atelier-area-v1';
function loadArea() {
  try {
    const d = JSON.parse(localStorage.getItem(AREA_KEY) || 'null');
    if (d && Array.isArray(d.rooms)) return d;
  } catch (e) {}
  return {
    site: 1200,
    footprint: 480,
    circ: 15,
    rooms: [
      { name: 'RDC · 공간/아틀리에', area: 320 },
      { name: 'R+1 · 주거/실', area: 420 },
    ],
  };
}
function saveArea(d) { try { localStorage.setItem(AREA_KEY, JSON.stringify(d)); } catch (e) {} }

function renderAreaCalc() {
  const d = loadArea();
  const siteIn = document.getElementById('siteAreaIn');
  const fpIn = document.getElementById('footprintIn');
  const circIn = document.getElementById('circPctIn');
  const listEl = document.getElementById('roomList');
  if (siteIn && document.activeElement !== siteIn) siteIn.value = d.site;
  if (fpIn && document.activeElement !== fpIn) fpIn.value = d.footprint;
  if (circIn && document.activeElement !== circIn) circIn.value = d.circ;

  const netSum = d.rooms.reduce((acc, r) => acc + (Number(r.area) || 0), 0);
  const sdp = netSum * (1 + (Number(d.circ) || 0) / 100);
  const ces = d.site > 0 ? (d.footprint / d.site) * 100 : 0;
  const cos = d.site > 0 ? sdp / d.site : 0;

  const elCes = document.getElementById('kpiCesVal');
  const elSdp = document.getElementById('kpiSdpVal');
  const elCos = document.getElementById('kpiCosVal');
  if (elCes) elCes.textContent = `${fmtNum(ces)}%`;
  if (elSdp) elSdp.textContent = `${fmtNum(sdp)} m²`;
  if (elCos) elCos.textContent = cos.toFixed(2);

  if (listEl) {
    listEl.innerHTML = '';
    d.rooms.forEach((r, idx) => {
      const li = document.createElement('li');
      li.className = 'check-item';
      const sp = document.createElement('span');
      sp.textContent = `${r.name} — ${fmtNum(r.area)} m²`;
      const del = document.createElement('button');
      del.type = 'button'; del.className = 'check-del'; del.textContent = '×';
      del.addEventListener('click', () => {
        const cur = loadArea(); cur.rooms.splice(idx, 1); saveArea(cur); renderAreaCalc();
      });
      li.append(sp, del);
      listEl.appendChild(li);
    });
  }
}

document.getElementById('siteAreaIn')?.addEventListener('input', (e) => {
  const cur = loadArea(); cur.site = parseFloat(e.target.value) || 0; saveArea(cur); renderAreaCalc();
});
document.getElementById('footprintIn')?.addEventListener('input', (e) => {
  const cur = loadArea(); cur.footprint = parseFloat(e.target.value) || 0; saveArea(cur); renderAreaCalc();
});
document.getElementById('circPctIn')?.addEventListener('input', (e) => {
  const cur = loadArea(); cur.circ = parseFloat(e.target.value) || 0; saveArea(cur); renderAreaCalc();
});
document.getElementById('roomAddForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const nEl = document.getElementById('roomNameIn');
  const aEl = document.getElementById('roomAreaIn');
  const name = (nEl?.value || '').trim();
  const area = parseFloat(aEl?.value || '0');
  if (!name || !(area > 0)) return;
  const cur = loadArea(); cur.rooms.push({ name, area }); saveArea(cur);
  if (nEl) nEl.value = '';
  if (aEl) aEl.value = '';
  renderAreaCalc();
});
document.getElementById('copyAreaCsvBtn')?.addEventListener('click', async () => {
  const d = loadArea();
  const netSum = d.rooms.reduce((acc, r) => acc + (Number(r.area) || 0), 0);
  const sdp = netSum * (1 + (Number(d.circ) || 0) / 100);
  const ces = d.site > 0 ? (d.footprint / d.site) * 100 : 0;
  const lines = [
    'Item,Area_m2',
    ...d.rooms.map((r) => `"${r.name.replace(/"/g, '""')}",${fmtNum(r.area)}`),
    `Net_Sum,${fmtNum(netSum)}`,
    `Circulation_${d.circ}%,${fmtNum(sdp - netSum)}`,
    `Total_SDP,${fmtNum(sdp)}`,
    `Site_Area,${fmtNum(d.site)}`,
    `Footprint_Emprise,${fmtNum(d.footprint)}`,
    `CES_%,${fmtNum(ces)}`,
  ];
  try {
    await navigator.clipboard.writeText(lines.join('\n'));
    const b = document.getElementById('copyAreaCsvBtn');
    if (b) { b.textContent = t('copied'); setTimeout(() => { b.textContent = t('btnCopyCsv'); }, 1500); }
  } catch (e) {}
});

/* ===================== Studio Glossary (FR / KO / EN) ===================== */
const GLOSSARY = [
  ['Plan masse', '배치도', 'Site plan', '대지 경계, 주변 도로, 지붕면과 외부 공간을 보여주는 도면'],
  ['Plan de situation', '위치도', 'Location plan', '도시·지구 스케일에서 대지 위치를 표시하는 도면'],
  ['Emprise au sol (CES)', '건축면적 · 건폐율', 'Building footprint', '건물의 수평 투영 면적과 대지 대비 비율'],
  ['Surface de plancher (SDP)', '연면적', 'Gross floor area', '각 층 바닥면적의 합계 (벽체 내측 기준)'],
  ['RDC / R+1', '지상 1층 / 2층', 'Ground / 1st floor', '프랑스 표기법: Rez-de-chaussée가 한국 1층'],
  ['Coupe longitudinale', '종단면도', 'Longitudinal section', '건물의 긴 축을 따라 자른 단면도'],
  ['Coupe transversale', '횡단면도', 'Cross section', '건물의 짧은 축을 따라 자른 단면도'],
  ['Élévation / Façade', '입면도', 'Elevation', '건물 외벽을 정면에서 투영한 도면'],
  ['Axonométrie', '액소노메트릭', 'Axonometric', '축척이 유지되는 평행 투영 3D 도면'],
  ['Pignon', '박공벽 · 측벽', 'Gable wall', '지붕 경사 아래 삼각형 외벽 또는 인접 대지 측벽'],
  ['Linteau', '인방보', 'Lintel', '창·문 개구부 상단의 하중을 받는 수평 부재'],
  ['Trame', '구조 그리드 · 모듈', 'Structural grid', '기둥·벽체의 반복 간격 체계'],
  ['Seuil', '문턱 · 전이 공간', 'Threshold', '공공과 사적 영역, 외부와 내부가 만나는 경계'],
  ['Parvis', '전면 광장', 'Forecourt / Plaza', '공공건물 앞 진입 광장'],
  ['Îlot', '도시 블록 · 가구', 'Urban block', '도로로 둘러싸인 도시 필지 묶음'],
  ['PLU / OAP', '도시계획규정 / 개발지침', 'Zoning plan', '프랑스 지자체 건축 높이·후퇴·용도 규정'],
  ['Gabarit', '건축 외곽선 · 높이 제한', 'Building envelope', '도로 폭·경계선에 따른 허용 건축 볼륨'],
  ['Garde-corps', '난간', 'Guardrail / Balustrade', '발코니·계단 추락 방지 난간 (보통 H ≥ 1.0m)'],
  ['Acrotère', '파라펫', 'Parapet wall', '평지붕 외곽을 둘러싸는 낮은 벽체'],
  ['Refend', '내력 칸막이벽', 'Shear / Load-bearing wall', '슬래브 하중을 지지하는 내부 구조벽'],
  ['Poteau-poutre', '기둥-보 구조', 'Post-and-beam', '기둥과 보로 하중을 전달하는 라멘 골조'],
  ['Loggia / Patio', '로지아 / 중정', 'Loggia / Courtyard', '건물 볼륨 안으로 파인 반외부 공간 / 내부 마당'],
  ['Brise-soleil', '차양 루버', 'Sun shading', '직사광선을 조절하는 외피 차양 장치'],
  ['PMR', '무장애 · 장애인 접근성', 'Accessibility', 'Personne à Mobilité Réduite 기준 (Ø150cm 등)'],
];

function renderGlossary() {
  const listEl = document.getElementById('glossList');
  if (!listEl) return;
  const q = (document.getElementById('glossInput')?.value || '').trim().toLowerCase();
  const rows = q ? GLOSSARY.filter((g) => g.join(' ').toLowerCase().includes(q)) : GLOSSARY;
  listEl.innerHTML = '';
  if (!rows.length) {
    const li = document.createElement('li'); li.className = 'cmd-empty'; li.textContent = t('cmdEmpty');
    listEl.appendChild(li); return;
  }
  for (const [fr, ko, en, note] of rows) {
    const li = document.createElement('li'); li.className = 'gloss-item';
    const top = document.createElement('div'); top.className = 'gloss-top';
    const f = document.createElement('span'); f.className = 'gloss-fr'; f.textContent = fr;
    const e = document.createElement('span'); e.className = 'gloss-en'; e.textContent = en;
    top.append(f, e);
    const k = document.createElement('p'); k.className = 'gloss-ko'; k.textContent = ko;
    const n = document.createElement('p'); n.className = 'gloss-note'; n.textContent = note;
    li.append(top, k, n);
    listEl.appendChild(li);
  }
}

document.getElementById('glossaryBtn')?.addEventListener('click', () => {
  renderGlossary(); openModal('glossaryModal'); document.getElementById('glossInput')?.focus();
});
document.getElementById('glossInput')?.addEventListener('input', renderGlossary);

/* ===================== Jury Rehearsal Pace Timer ===================== */
const TIMER_STAGES = [
  { ko: '도입', fr: 'Intro', pct: 0.10 },
  { ko: '대지', fr: 'Site', pct: 0.20 },
  { ko: '개념', fr: 'Concept', pct: 0.25 },
  { ko: '공간', fr: 'Espaces', pct: 0.30 },
  { ko: '디테일', fr: 'Détail', pct: 0.15 },
];
let timerTotalSec = 600;
let timerLeftSec = 600;
let timerHandle = null;

function fmtClock(sec) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

function renderTimer() {
  const clock = document.getElementById('timerClock');
  const stageNow = document.getElementById('timerStageNow');
  const display = document.getElementById('timerDisplay');
  const stagesEl = document.getElementById('timerStages');
  const startBtn = document.getElementById('timerStartBtn');
  if (clock) clock.textContent = fmtClock(timerLeftSec);
  if (startBtn) startBtn.textContent = timerHandle ? t('timerPause') : t('timerStart');

  const elapsed = timerTotalSec - timerLeftSec;
  let acc = 0;
  let activeIdx = TIMER_STAGES.length - 1;
  for (let i = 0; i < TIMER_STAGES.length; i++) {
    acc += timerTotalSec * TIMER_STAGES[i].pct;
    if (elapsed < acc) { activeIdx = i; break; }
  }
  const activeStage = TIMER_STAGES[activeIdx];
  const stageName = lang === 'fr' ? activeStage.fr : activeStage.ko;

  if (display) display.classList.toggle('warn', timerLeftSec > 0 && timerLeftSec <= 60);
  if (stageNow) {
    if (timerLeftSec === 0) stageNow.textContent = t('timerDone');
    else if (timerLeftSec <= 60) stageNow.textContent = `${stageName} · ${t('timerWarn')}`;
    else stageNow.textContent = stageName;
  }

  if (stagesEl) {
    stagesEl.innerHTML = '';
    TIMER_STAGES.forEach((st, i) => {
      const div = document.createElement('div');
      div.className = 'timer-stage' + (i === activeIdx && timerLeftSec > 0 ? ' active' : '');
      const strong = document.createElement('strong');
      strong.textContent = lang === 'fr' ? st.fr : st.ko;
      const dur = document.createElement('span');
      dur.textContent = fmtClock(Math.round(timerTotalSec * st.pct));
      div.append(strong, dur);
      stagesEl.appendChild(div);
    });
  }
}

document.querySelectorAll('#timerPresets .scale-pill').forEach((b) => {
  b.addEventListener('click', () => {
    if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
    const mins = Number(b.dataset.mins) || 10;
    timerTotalSec = mins * 60;
    timerLeftSec = timerTotalSec;
    document.querySelectorAll('#timerPresets .scale-pill').forEach((x) => {
      x.setAttribute('aria-pressed', String(x === b));
    });
    renderTimer();
  });
});

document.getElementById('timerStartBtn')?.addEventListener('click', () => {
  if (timerHandle) {
    clearInterval(timerHandle); timerHandle = null; renderTimer(); return;
  }
  if (timerLeftSec <= 0) timerLeftSec = timerTotalSec;
  timerHandle = setInterval(() => {
    timerLeftSec = Math.max(0, timerLeftSec - 1);
    if (timerLeftSec === 0) { clearInterval(timerHandle); timerHandle = null; }
    renderTimer();
  }, 1000);
  renderTimer();
});

document.getElementById('timerResetBtn')?.addEventListener('click', () => {
  if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
  timerLeftSec = timerTotalSec;
  renderTimer();
});

document.getElementById('timerBtn')?.addEventListener('click', () => {
  renderTimer(); openModal('timerModal');
});

/* Grouped Studio Kit chips on Hub */
document.querySelectorAll('[data-open-calc]').forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal('calcModal');
    document.querySelector(`[data-calc-tab="${btn.dataset.openCalc}"]`)?.click();
  });
});
document.getElementById('kitJuryBtn')?.addEventListener('click', () => { renderJury(); openModal('juryModal'); });
document.getElementById('kitTimerBtn')?.addEventListener('click', () => { renderTimer(); openModal('timerModal'); });
document.getElementById('kitGlossBtn')?.addEventListener('click', () => {
  renderGlossary(); openModal('glossaryModal'); document.getElementById('glossInput')?.focus();
});

/* ===================== Command Palette (Cmd+K / Ctrl+K) ===================== */
const cmdModal = document.getElementById('cmdModal');
const cmdInput = document.getElementById('cmdInput');
const cmdList = document.getElementById('cmdList');
let cmdIndex = 0;
let cmdMatches = [];

function getCmdActions() {
  const actions = [
    { label: 'Terrain', sub: t('t1Kicker'), run: () => { location.href = TOOLS.terrain.url; } },
    { label: 'Board', sub: t('t2Kicker'), run: () => { location.href = TOOLS.board.url; } },
    { label: 'View', sub: t('t3Kicker'), run: () => { location.href = TOOLS.view.url; } },
    { label: 'Crit', sub: t('t4Kicker'), run: () => { location.href = TOOLS.crit.url; } },
    { label: 'Share', sub: t('t5Kicker'), run: () => { location.href = TOOLS.share.url; } },
    { label: 'Quiz', sub: t('t6Kicker'), run: () => { location.href = TOOLS.quiz.url; } },
    { label: 'Stair', sub: t('t7Kicker'), run: () => { location.href = TOOLS.stair.url; } },
    { label: 'Trait', sub: t('t8Kicker'), run: () => { location.href = TOOLS.trait.url; } },
    { label: t('calcTitle'), sub: '1/20 – 1/1000 · A0–A4', run: () => openModal('calcModal') },
    { label: t('tabRef'), sub: 'PMR · Blondel · Laser', run: () => { openModal('calcModal'); document.querySelector('[data-calc-tab="ref"]')?.click(); } },
    { label: t('tabArea'), sub: 'CES · SDP · CSV', run: () => { openModal('calcModal'); document.querySelector('[data-calc-tab="area"]')?.click(); } },
    { label: t('chipSun'), sub: 'Studio Kit', run: () => { location.href = './kit.html#calc'; } },
    { label: t('chipScaleBar'), sub: 'Studio Kit', run: () => { location.href = './kit.html#draw'; } },
    { label: t('chipStreet'), sub: 'Studio Kit', run: () => { location.href = './kit.html#draw'; } },
    { label: t('chipLine'), sub: 'Studio Kit', run: () => { location.href = './kit.html#draw'; } },
    { label: t('chipComp'), sub: 'Studio Kit', run: () => { location.href = './kit.html#draw'; } },
    { label: t('glossaryTitle'), sub: 'FR · KO · EN', run: () => { renderGlossary(); openModal('glossaryModal'); document.getElementById('glossInput')?.focus(); } },
    { label: t('timerTitle'), sub: '5 / 10 / 15 min', run: () => { renderTimer(); openModal('timerModal'); } },
    { label: t('juryModalTitle'), sub: 'D-Day', run: () => { renderJury(); openModal('juryModal'); } },
    { label: t('tryBrief'), sub: 'brief.html', run: () => { location.href = './brief.html'; } },
    { label: t('changelogTitle'), sub: 'Atelier 4·2', run: () => openModal('changelogModal') },
    { label: lang === 'fr' ? 'Passer en coréen (KO)' : '프랑스어로 전환 (FR)', sub: 'Language', run: () => {
      lang = lang === 'fr' ? 'ko' : 'fr';
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
      applyLang();
    }},
    { label: t('themeLabel'), sub: 'Light / Dark', run: () => document.getElementById('themeBtn')?.click() },
  ];
  if (Array.isArray(cachedProjects)) {
    for (const p of cachedProjects.slice(0, 6)) {
      actions.push({
        label: p.name,
        sub: 'Project → Share',
        run: () => { try { cloud.rememberProject(p, 'share'); } catch (e) {} location.href = TOOLS.share.url; },
      });
    }
  }
  return actions;
}

function renderCmdList() {
  if (!cmdList) return;
  const q = (cmdInput?.value || '').trim().toLowerCase();
  const all = getCmdActions();
  cmdMatches = q ? all.filter((a) => `${a.label} ${a.sub}`.toLowerCase().includes(q)) : all;
  if (cmdIndex >= cmdMatches.length) cmdIndex = 0;
  cmdList.innerHTML = '';
  if (!cmdMatches.length) {
    const li = document.createElement('li');
    li.className = 'cmd-empty';
    li.textContent = t('cmdEmpty');
    cmdList.appendChild(li);
    return;
  }
  cmdMatches.forEach((a, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cmd-item';
    btn.setAttribute('aria-selected', String(i === cmdIndex));
    const sp = document.createElement('span'); sp.textContent = a.label;
    const sm = document.createElement('small'); sm.textContent = a.sub;
    btn.append(sp, sm);
    btn.addEventListener('click', () => { closeModal('cmdModal'); a.run(); });
    li.appendChild(btn);
    cmdList.appendChild(li);
  });
}

function openCmd() {
  if (!cmdModal) return;
  cmdModal.hidden = false;
  if (cmdInput) { cmdInput.value = ''; cmdInput.focus(); }
  cmdIndex = 0;
  renderCmdList();
}

document.getElementById('cmdBtn')?.addEventListener('click', openCmd);
cmdInput?.addEventListener('input', () => { cmdIndex = 0; renderCmdList(); });
cmdInput?.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); cmdIndex = (cmdIndex + 1) % Math.max(1, cmdMatches.length); renderCmdList(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); cmdIndex = (cmdIndex - 1 + Math.max(1, cmdMatches.length)) % Math.max(1, cmdMatches.length); renderCmdList(); }
  else if (e.key === 'Enter' && cmdMatches[cmdIndex]) { e.preventDefault(); closeModal('cmdModal'); cmdMatches[cmdIndex].run(); }
});
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (cmdModal && !cmdModal.hidden) closeModal('cmdModal');
    else openCmd();
  }
});

applyLang();

// Silently restore existing tab session (shared with /share/, /view/, /crit/)
(async () => {
  try {
    const user = await cloud.restore();
    if (user) {
      currentUser = user;
      await refreshProjects();
    }
  } catch (e) {}
})();
