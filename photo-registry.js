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
  'project-thermal_coral-bleaching.jpg': {
    caption:      'Bleaching Event · 白化事件',
    desc:         '珊瑚白化現象，因海水溫度異常升高導致珊瑚排出共生藻而呈現白色。',
    photographer: 'Guan-Yan Chen',
  },
  'project-thermal_healthy-reef.jpg': {
    caption:      'Healthy Reef · 健康礁體',
    desc:         '對照基準的健康珊瑚礁體，作為白化研究的比較對象。',
    photographer: 'Guan-Yan Chen',
  },
  'project-thermal_hero-bleaching.jpg': {
    caption:      'Coral Bleaching · 珊瑚白化',
    desc:         '大範圍珊瑚白化事件的空拍全景。',
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
  'project-fish_reef-fish.jpg': {
    caption:      'Reef Fish Survey · 礁魚調查',
    desc:         '綠島水下目視調查樣線，記錄珊瑚礁魚類群聚組成。',
    photographer: 'Guan-Yan Chen',
  },
  'project-fish_reef-fish-hero.jpg': {
    caption:      'Reef Fish · 珊瑚礁魚類',
    desc:         '珊瑚礁區域的魚類生態。',
    photographer: 'Guan-Yan Chen',
  },
  'project-fish_complex-reef-structure.jpg': {
    caption:      'Reef Structure · 礁體結構',
    desc:         '高複雜度礁體結構，提供魚類更多棲息與覓食的微棲地。',
    photographer: 'Guan-Yan Chen',
  },
  'project-typhoon_hero-coral.jpg': {
    caption:      'Coral Recovery · 珊瑚復原',
    desc:         '颱風擾動後的珊瑚礁復原過程。',
    photographer: 'Guan-Yan Chen',
  },
  'project-typhoon_coral-recovery.jpg': {
    caption:      'Workshop · 工作坊',
    desc:         '水下 3D 攝影測量工作坊實作課程。',
    photographer: 'Guan-Yan Chen',
  },
  'project-typhoon_juvenile-coral.jpg': {
    caption:      'Juvenile Coral · 幼珊瑚',
    desc:         '颱風後新生的幼珊瑚群體。',
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
  { file: 'gallery_01_coral-reef.jpg',              layout: 'tall' },
  { file: 'gallery_02_coral-colony.jpg',             layout: 'normal' },
  { file: 'gallery_03_reef-fish.jpg',                layout: 'normal' },
  { file: 'gallery_04_underwater-survey.jpg',        layout: 'wide' },
  { file: 'gallery_05_ocean.jpg',                    layout: 'normal' },
  { file: 'project-thermal_coral-bleaching.jpg',     layout: 'normal' },
  { file: 'gallery_07_marine-life.jpg',              layout: 'normal' },
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
    div.setAttribute('data-index', i);
    div.onclick = function () { openLightbox(this); };
    div.innerHTML =
      '<img src="images/' + entry.file + '" alt="' + (info.caption || '') + '" loading="lazy" />' +
      '<div class="photo-caption">' + info.caption + '</div>';

    grid.appendChild(div);
  });
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
