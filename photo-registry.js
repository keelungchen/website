/*  ╔══════════════════════════════════════════════════════════════╗
 *  ║  PHOTO REGISTRY — 照片資料庫（集中管理所有照片資訊）         ║
 *  ╠══════════════════════════════════════════════════════════════╣
 *  ║  ✏️ 編輯方式：                                              ║
 *  ║  1. 在 PHOTO_DB 中新增/修改照片的說明與拍攝者               ║
 *  ║  2. 在 GALLERY_PHOTOS 中加入想在首頁 Photos 區顯示的檔名    ║
 *  ║     — 可以是任何已存在於 images/ 資料夾的照片               ║
 *  ║     — 不需要上傳重複圖片！                                  ║
 *  ║  3. 用 layout 欄位控制照片在 gallery 中的大小排版            ║
 *  ╚══════════════════════════════════════════════════════════════╝
 */

/* ── 📷 所有照片的資料 ── */
const PHOTO_DB = {

  // ── Gallery 專用照片 ──
  'gallery_01_coral-reef.jpg': {
    caption:      'Coral Reef · 珊瑚礁',
    desc:         '台灣東北角的珊瑚礁生態，豐富的硬珊瑚覆蓋與多樣的礁體結構。',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_02_coral-colony.jpg': {
    caption:      'Coral Colony · 珊瑚群體',
    desc:         '近距離拍攝的珊瑚群體，可觀察到個別珊瑚蟲的觸手與骨骼紋理。',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_03_reef-fish.jpg': {
    caption:      'Reef Fish · 礁魚',
    desc:         '棲息於珊瑚礁區的礁魚，是珊瑚礁生態系中重要的組成成員。',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_04_underwater-survey.jpg': {
    caption:      'Underwater Survey · 水下調查',
    desc:         '研究人員於水下進行珊瑚礁穿越線調查，記錄珊瑚覆蓋率與物種組成。',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_05_ocean.jpg': {
    caption:      'Pacific Ocean · 太平洋',
    desc:         '台灣周邊海域的遼闊太平洋景色，攝於田野調查航程中。',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_07_marine-life.jpg': {
    caption:      'Marine Life · 海洋生物',
    desc:         '珊瑚礁區的海洋生物多樣性，展現礁體生態系的豐富面貌。',
    photographer: 'Guan-Yan Chen',
  },

  // ── Research Project 照片 ──
  'project-demography_colony-morphology.jpg': {
    caption:      'Colony Morphology · 群體形態',
    desc:         '珊瑚群體的形態多樣性，不同大小與圓度的群體展現不同的族群動態命運。',
    photographer: 'Guan-Yan Chen',
  },
  'project-demography_sfm-workflow.jpg': {
    caption:      'SfM & AI Workflow · SfM 與 AI 工作流程',
    desc:         'SfM 攝影測量重建與 AI 輔助分割，追蹤珊瑚群體的時間動態變化。',
    photographer: 'Guan-Yan Chen',
  },
  'project-demography_hero.jpg': {
    caption:      'Coral Demography · 珊瑚族群動態',
    desc:         '珊瑚礁調查樣區，用於研究群體形態與空間因子對族群動態的影響。',
    photographer: 'Guan-Yan Chen',
  },
  'project-monitoring_reef-survey.jpg': {
    caption:      'Reef Monitoring · 珊瑚礁監測',
    desc:         '進行中的珊瑚礁長期監測調查。',
    photographer: 'Guan-Yan Chen',
  },
  'project-monitoring_belt-transect.jpg': {
    caption:      'SfM Survey · 攝影測量調查',
    desc:         '水下 SfM 攝影測量珊瑚礁調查，用於建立高解析度三維模型。',
    photographer: 'Guan-Yan Chen',
  },
  'project-monitoring_hero-survey.jpg': {
    caption:      'Underwater Survey · 水下調查',
    desc:         '珊瑚礁 3D 攝影測量調查現場。',
    photographer: 'Guan-Yan Chen',
  },
  'project-octocoral_field.jpg': {
    caption:      'Octocoral Colony · 八放珊瑚',
    desc:         '八放珊瑚野外群體，是台灣珊瑚礁生態系中常見的底棲生物。',
    photographer: 'Guan-Yan Chen',
  },
  'project-octocoral_sclerite.jpg': {
    caption:      'Sclerite · 骨針顯微攝影',
    desc:         '八放珊瑚骨針的顯微攝影，用於物種鑑定的重要形態特徵。',
    photographer: 'Guan-Yan Chen',
  },
  'project-octocoral_hero.jpg': {
    caption:      'Octocoral · 八放珊瑚',
    desc:         '八放珊瑚的野外生態照。',
    photographer: 'Guan-Yan Chen',
  },
  'project-coral3d_chaojing-reef.jpg': {
    caption:      'Chaojing Bay Reef · 潮境珊瑚礁',
    desc:         '基隆潮境海灣資源保育區的珊瑚礁調查，用於建立三維立體結構模型。',
    photographer: 'Guan-Yan Chen',
  },
  'project-coral3d_hero.jpg': {
    caption:      'Coral Reef 3D · 珊瑚礁立體結構',
    desc:         '潮境海灣珊瑚礁的水下景觀，為 SfM 三維建模的研究場域。',
    photographer: 'Guan-Yan Chen',
  },
  'project-coral3d_sfm-dem.jpg': {
    caption:      'SfM DEM · 數值高程模型',
    desc:         'SfM 攝影測量產生的數值高程模型與正射影像，解析度達毫米級。',
    photographer: 'Guan-Yan Chen',
  },
  'project-sfmworkshop_hero.jpg': {
    caption:      'SfM Workshop · 工作坊',
    desc:         '潛水志工們進行大範圍水下3D攝影調查練習實作。Volunteer divers practising large-scale underwater 3D photogrammetric survey during the workshop.',
    photographer: 'Yan',
  },
  'project-sfmworkshop_session.jpg': {
    caption:      'SfM Workshop Session · 工作坊實作',
    desc:         '室內的實際模擬珊瑚礁調查操作演練。Indoor hands-on simulation of coral reef survey operations.',
    photographer: 'Crystal',
  },
  'project-sfmworkshop_delta-volunteers.jpg': {
    caption:      'SfM Workshop · 工作坊',
    desc:         '與台達電基金會志工討論3D建模流程。Discussing 3D modelling workflows with Delta Electronics Foundation volunteers.',
    photographer: 'Marco',
  },
  'project-typhoon_juvenile-coral.jpg': {
    caption:      'Juvenile Coral · 幼珊瑚',
    desc:         '颱風後新生的幼珊瑚群體。',
    photographer: 'Guan-Yan Chen',
  },

  // ── 額外 Lightbox 照片 ──
  'project-octocoral_newrecord2_sclerite.jpg': {
    caption:      'Aldersladum jengi Sclerites · 鄭氏艾達軟珊瑚骨針',
    desc:         'Distinctive figure-8 shaped sclerites of Aldersladum jengi · 鄭氏艾達軟珊瑚的特殊八字形骨針顯微攝影。',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_08_kenting-3d-survey.jpg': {
    caption:      'Kenting 3D Reef Survey · 墾丁 3D 珊瑚礁調查',
    desc:         'Fully geared up for an underwater 3D photogrammetric survey at Kenting with Tony Ye (宗旻). Every dive a data point.',
    photographer: '名祺',
  },
  'gallery_09_chaojing-surge.jpg': {
    caption:      'Firework Surge · 潮境煙火浪況',
    desc:         'The surge at Chaojing Marine Protected Area erupting like fireworks — a reminder that the reef lives on the edge of calm and chaos.',
    photographer: 'Guan-Yan Chen',
  },
  'gallery_10_urchin-spawning.jpg': {
    caption:      'Sea Urchin Spawning · 海膽生殖',
    desc:         'A chance encounter with a spawning sea urchin — gametes billowing into the water column in a fleeting, unrepeatable moment.',
    photographer: 'Guan-Yan Chen',
  },

  // ── Journal 照片 ──
  'journal_entry1_survey.jpg': {
    caption:      'Field Survey · 野外調查',
    desc:         '田野調查工作紀錄。',
    photographer: 'Guan-Yan Chen',
  },
  'journal_entry1_coral.jpg': {
    caption:      'Coral Specimen · 珊瑚標本',
    desc:         '珊瑚標本近照。',
    photographer: 'Guan-Yan Chen',
  },
  'journal_entry1_reef.jpg': {
    caption:      'Reef Documentation · 珊瑚礁紀錄',
    desc:         '珊瑚礁現場紀錄。',
    photographer: 'Guan-Yan Chen',
  },
  'journal_entry2_bleaching.jpg': {
    caption:      'Bleaching Record · 白化紀錄',
    desc:         '珊瑚白化事件田野紀錄。',
    photographer: 'Guan-Yan Chen',
  },
  'journal_entry3_conference.jpg': {
    caption:      'Conference · 學術研討會',
    desc:         '學術研討會發表。',
    photographer: 'Guan-Yan Chen',
  },
  'journal_entry3_hawaii.jpg': {
    caption:      'Hawaii Fieldwork · 夏威夷田野',
    desc:         '夏威夷海洋生物研究所的田野工作。',
    photographer: 'Guan-Yan Chen',
  },

  // ── Hero / 背景照片 ──
  'hero_coral-reef.jpg': {
    caption:      'Coral Reef · 珊瑚礁',
    desc:         '首頁主視覺珊瑚礁景觀。',
    photographer: 'Guan-Yan Chen',
  },
  'hero_photos-coral-colony.jpg': {
    caption:      'Coral Colony · 珊瑚群體',
    desc:         '照片區背景用珊瑚群體。',
    photographer: 'Guan-Yan Chen',
  },
  'hero_research-reef-fish.jpg': {
    caption:      'Reef Fish · 礁魚',
    desc:         '研究區背景用礁魚照片。',
    photographer: 'Guan-Yan Chen',
  },
  'hero_research-page-survey.jpg': {
    caption:      'Fluorescent Coral · 螢光蕈珊瑚',
    desc:         '受熱壓力影響而呈現螢光色的蕈珊瑚。Fungiid coral displaying fluorescence under thermal stress.',
    photographer: 'Yan',
  },
};


/* ══════════════════════════════════════════════════════════════
 *  🖼️ GALLERY 照片清單 — 控制首頁 Photos 區要顯示哪些照片
 *  ──────────────────────────────────────────────────────────
 *  ✏️ 編輯方式：
 *    • 把 images/ 資料夾裡任一圖檔名稱加進這個陣列即可
 *    • 用 layout 控制大小：'normal'（預設）、'tall'、'wide'
 *    • 順序 = 顯示順序
 *    • 想新增研究計畫的照片？直接把檔名貼進來就好！
 *
 *  範例：想把 project-monitoring 的調查照片也放到 gallery：
 *    { file: 'project-monitoring_belt-transect.jpg', layout: 'wide' },
 * ═══════════════════════════════════════════════════════════ */
const GALLERY_PHOTOS = [
  { file: 'project-monitoring_reef-survey.jpg',      layout: 'tall' },
  { file: 'project-sfmworkshop_delta-volunteers.jpg', layout: 'normal' },
  { file: 'project-sfmworkshop_session.jpg',          layout: 'normal' },
  { file: 'project-sfmworkshop_hero.jpg',             layout: 'wide' },
  { file: 'journal_entry1_survey.jpg',                layout: 'normal' },
  { file: 'project-octocoral_field.jpg',              layout: 'normal' },
  { file: 'hero_research-page-survey.jpg',            layout: 'normal' },
];

/* ══════════════════════════════════════════════════════════════
 *  🖼️ LIGHTBOX 照片清單 — 控制點進去後可以左右滑動的所有照片
 *  ──────────────────────────────────────────────────────────
 *  ✏️ 編輯方式：
 *    • 把想在 lightbox 裡瀏覽的照片加進這個陣列
 *    • 順序 = 滑動順序；前七張對應格子裡的照片，保持一致
 *    • 新增照片時同步在 PHOTO_DB 補上說明即可
 *    • 新照片命名建議：gallery_08_描述.jpg、gallery_09_描述.jpg …
 * ═══════════════════════════════════════════════════════════ */
const LIGHTBOX_PHOTOS = [
  // ── 格子裡的七張（固定，保持與 GALLERY_PHOTOS 相同順序）──
  { file: 'project-monitoring_reef-survey.jpg' },
  { file: 'project-sfmworkshop_delta-volunteers.jpg' },
  { file: 'project-sfmworkshop_session.jpg' },
  { file: 'project-sfmworkshop_hero.jpg' },
  { file: 'journal_entry1_survey.jpg' },
  { file: 'project-octocoral_field.jpg' },
  { file: 'hero_research-page-survey.jpg' },
  // ── 額外照片（只在 lightbox 出現，格子不顯示）── ✏️ 在這裡新增
  { file: 'project-octocoral_newrecord2_sclerite.jpg' },
  { file: 'gallery_08_kenting-3d-survey.jpg' },
  { file: 'gallery_09_chaojing-surge.jpg' },
  { file: 'gallery_10_urchin-spawning.jpg' },
];


/* ── 🔧 工具函式 ── */

/** 從 PHOTO_DB 取得照片資訊（含預設值） */
function getPhotoInfo(filename) {
  return PHOTO_DB[filename] || {
    caption: filename.replace(/[-_]/g, ' ').replace(/\.\w+$/, ''),
    desc: '',
    photographer: '',
  };
}

/** 動態產生首頁 Gallery 照片牆 */
function renderGallery() {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  grid.innerHTML = '';
  GALLERY_PHOTOS.forEach((entry, i) => {
    const info = getPhotoInfo(entry.file);
    const layoutClass = entry.layout === 'tall' ? ' tall' : entry.layout === 'wide' ? ' wide' : '';

    const div = document.createElement('div');
    div.className = 'photo-item' + layoutClass;
    const lbIndex = LIGHTBOX_PHOTOS.findIndex(p => p.file === entry.file);
    div.setAttribute('data-index', lbIndex >= 0 ? lbIndex : i);
    div.onclick = function () { openLightbox(this); };
    div.innerHTML =
      '<img class="img-a active" src="images/' + entry.file + '" alt="' + (info.caption || '') + '" />' +
      '<img class="img-b" src="images/' + entry.file + '" alt="' + (info.caption || '') + '" />' +
      '<div class="photo-caption">' + info.caption + '</div>';

    grid.appendChild(div);
  });
}

/** 照片牆格子輪播 — 每次只換一個格子，crossfade 過渡，不重複顯示同張照片 */
function startGalleryCycle() {
  var pool = LIGHTBOX_PHOTOS.map(function(p) { return p.file; });
  var cells = Array.from(document.querySelectorAll('#photo-grid .photo-item'));

  // 每格的狀態：currentFile、useA、imgA、imgB
  var states = cells.map(function(cell) {
    return {
      cell: cell,
      imgA: cell.querySelector('.img-a'),
      imgB: cell.querySelector('.img-b'),
      currentFile: cell.querySelector('.img-a').src.split('/').pop(),
      useA: true,
    };
  });

  // 追蹤目前所有格子正在顯示的照片，避免重複
  var activeFiles = new Set(states.map(function(s) { return s.currentFile; }));

  function cycleOne() {
    // 隨機挑一個格子
    var s = states[Math.floor(Math.random() * states.length)];

    // 排除所有格子當前顯示的照片
    var candidates = pool.filter(function(f) { return !activeFiles.has(f); });
    if (!candidates.length) {
      candidates = pool.filter(function(f) { return f !== s.currentFile; });
    }
    if (!candidates.length) { scheduleNext(); return; }

    var nextFile = candidates[Math.floor(Math.random() * candidates.length)];

    // 立即更新共享 Set
    activeFiles.delete(s.currentFile);
    activeFiles.add(nextFile);
    s.currentFile = nextFile;

    var hiddenImg = s.useA ? s.imgB : s.imgA;
    var activeImg = s.useA ? s.imgA : s.imgB;

    var preload = new Image();
    preload.onload = function() {
      hiddenImg.src = 'images/' + nextFile;
      hiddenImg.alt = getPhotoInfo(nextFile).caption || '';

      setTimeout(function() {
        hiddenImg.classList.add('active');
        activeImg.classList.remove('active');
        s.useA = !s.useA;

        var info = getPhotoInfo(nextFile);
        var captionEl = s.cell.querySelector('.photo-caption');
        if (captionEl) captionEl.textContent = info.caption || '';

        var lbIndex = LIGHTBOX_PHOTOS.findIndex(function(p) { return p.file === nextFile; });
        s.cell.setAttribute('data-index', lbIndex >= 0 ? lbIndex : 0);
      }, 50);
    };
    preload.src = 'images/' + nextFile;

    scheduleNext();
  }

  function scheduleNext() {
    // 每隔 4–7 秒換一個格子
    setTimeout(cycleOne, Math.random() * 3000 + 4000);
  }

  // 初始延遲 3 秒後開始
  setTimeout(cycleOne, 3000);
}

/** 在 project 分頁中，自動為 img 補上拍攝者資訊 */
function applyProjectCaptions() {
  document.querySelectorAll('.project-photo-pair .photo-item, .project-photo-full').forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;

    const filename = img.src.split('/').pop();
    const info = PHOTO_DB[filename];
    if (!info) return;

    // 如果已有 photo-credit 則跳過
    if (container.querySelector('.photo-credit')) return;

    const credit = document.createElement('p');
    credit.className = 'photo-credit';
    credit.textContent = '📷 ' + info.photographer;

    // 插入在 caption 之後
    const caption = container.querySelector('.photo-caption');
    if (caption) {
      caption.insertAdjacentElement('afterend', credit);
    } else {
      container.appendChild(credit);
    }
  });
}
