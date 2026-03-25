# 圖片管理指南 · Image Management Guide

所有圖片請放在這個 `images/` 資料夾中。
依照下方的命名對照表，將你的照片改成對應的檔名，上傳後網站就會自動顯示。

> **支援格式：** `.jpg` / `.jpeg` / `.png` / `.webp`
> **命名規則：** `位置_說明.jpg`（全小寫、用連字號 `-` 分隔英文單字）

---

## 替換圖片的方法（How to Replace）

1. 準備好你想要的照片
2. 將照片重新命名為下方表格中對應的「檔名」（必須完全一樣）
3. 放進這個 `images/` 資料夾，覆蓋原本的 demo 圖片
4. 用 GitHub Desktop 將變更 Commit 並 Push 到 GitHub
5. 等待 1–2 分鐘，重新整理網站即可看到更新

> **範例：** 想換首頁大圖 → 把你的照片命名為 `hero_coral-reef.jpg` → 丟進 `images/` 資料夾覆蓋 → Commit & Push

---

## 命名對照總表

### 首頁 `index.html`

#### 背景圖（Hero / Section）

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 | 說明 |
|------|---------|---------|---------|------|
| `hero_coral-reef.jpg` | 首頁最上方大圖（Hero） | 1800×1000px 以上 | ⭐ demo 圖（珊瑚礁） | 網站第一眼看到的背景，建議用你最漂亮的水下全景照 |
| `hero_research-reef-fish.jpg` | About 關於我區塊背景 | 1600×900px | ⭐ demo 圖（礁魚） | 關於我區塊的背景圖，水下場景最佳 |
| `hero_photos-coral-colony.jpg` | Photos 照片區塊背景 | 1600×900px | ⭐ demo 圖（珊瑚群） | 照片展示區塊的背景 |

#### 首頁研究預覽卡片（兩張）

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 |
|------|---------|---------|---------|
| `project-thermal_coral-bleaching.jpg` | 首頁 → 研究卡片 1（熱耐受/白化） | 600×400px | ⭐ demo 圖 |
| `project-monitoring_reef-survey.jpg` | 首頁 → 研究卡片 2（長期監測） | 600×400px | ⭐ demo 圖 |

#### 首頁照片牆 Photos Gallery（7 張）

依序為照片牆從左到右、從上到下的位置：

| 檔名 | 位置 | 版型 | 目前狀態 | 說明 |
|------|------|------|---------|------|
| `gallery_01_coral-reef.jpg` | 第 1 格（左上，高圖） | 直式（tall） | ⭐ demo 圖 | 建議用直式構圖的照片 |
| `gallery_02_coral-colony.jpg` | 第 2 格 | 正方 | ⭐ demo 圖 | — |
| `gallery_03_reef-fish.jpg` | 第 3 格 | 正方 | ⭐ demo 圖 | — |
| `gallery_04_underwater-survey.jpg` | 第 4 格（寬圖） | 橫式（wide） | ⭐ demo 圖 | 建議用橫式構圖的照片 |
| `gallery_05_ocean.jpg` | 第 5 格 | 正方 | ⭐ demo 圖 | — |
| `gallery_06_bleached-coral.jpg` | 第 6 格 | 正方 | ⚠️ 目前用 `project-thermal_coral-bleaching.jpg` | 若要獨立照片，新增此檔案並修改 index.html |
| `gallery_07_marine-life.jpg` | 第 7 格 | 正方 | ⭐ demo 圖 | — |

> ➕ **想新增照片？** 開啟 `index.html`，搜尋 `gallery_07`，在它下方複製一個 `<div class="photo-item">` 區塊，命名新圖片為 `gallery_08_說明.jpg`。

---

### 研究頁 `research.html`

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 |
|------|---------|---------|---------|
| `hero_research-page-survey.jpg` | 研究頁最上方 Hero 背景 | 1800×1000px | ⭐ demo 圖 |
| `project-thermal_coral-bleaching.jpg` | 計畫卡片：熱耐受研究 | 700×450px | ⭐ demo 圖 |
| `project-monitoring_reef-survey.jpg` | 計畫卡片：長期監測 | 700×450px | ⭐ demo 圖 |
| `project-typhoon_coral-recovery.jpg` | 計畫卡片：颱風復原 | 700×450px | ⭐ demo 圖 |
| `project-fish_reef-fish.jpg` | 計畫卡片：礁魚群聚 | 700×450px | ⭐ demo 圖 |

---

### 日誌頁 `journal.html`

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 | 說明 |
|------|---------|---------|---------|------|
| `hero_journal-ocean.jpg` | 日誌頁 Hero 背景 | 1800×1000px | ⭐ demo 圖（海洋/波浪） | 海洋場景背景圖 |
| `journal_entry1_survey.jpg` | 日誌 1 的第 1 張圖 | 500×350px | ⭐ demo 圖 | 調查現場照片 |
| `journal_entry1_coral.jpg` | 日誌 1 的第 2 張圖 | 500×350px | ⭐ demo 圖 | 珊瑚特寫 |
| `journal_entry1_reef.jpg` | 日誌 1 的第 3 張圖 | 500×350px | ⭐ demo 圖 | 礁體全景 |
| `journal_entry2_bleaching.jpg` | 日誌 2 的主圖 | 900×500px | ⭐ demo 圖 | 白化事件照片 |
| `journal_entry3_conference.jpg` | 日誌 3 的第 1 張圖 | 500×350px | ⭐ demo 圖 | 研討會照片 |
| `journal_entry3_hawaii.jpg` | 日誌 3 的第 2 張圖 | 500×350px | ⭐ demo 圖 | 夏威夷/會議地點照片 |

> ➕ **新增日誌時：** 新日誌的圖片命名為 `journal_entry4_說明.jpg`（數字依序遞增）

---

### 計畫詳細頁

#### `project-thermal.html`（熱耐受研究）

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 |
|------|---------|---------|---------|
| `project-thermal_hero-bleaching.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px | ⭐ demo 圖 |
| `project-thermal_coral-bleaching.jpg` | 內文圖 1（白化珊瑚） | 700×450px | ⭐ demo 圖 |
| `project-thermal_healthy-reef.jpg` | 內文圖 2（健康礁體對照） | 700×450px | ⭐ demo 圖 |

#### `project-monitoring.html`（長期監測）

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 |
|------|---------|---------|---------|
| `project-monitoring_hero-survey.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px | ⭐ demo 圖 |
| `project-monitoring_belt-transect.jpg` | 內文主圖（帶狀樣線調查） | 1400×700px（寬圖） | ⭐ demo 圖 |

#### `project-typhoon.html`（颱風復原）

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 |
|------|---------|---------|---------|
| `project-typhoon_hero-coral.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px | ⭐ demo 圖 |
| `project-typhoon_coral-recovery.jpg` | 內文圖 1（颱風後礁體） | 700×450px | ⭐ demo 圖 |
| `project-typhoon_juvenile-coral.jpg` | 內文圖 2（幼珊瑚補招） | 700×450px | ⭐ demo 圖 |

#### `project-fish.html`（礁魚群聚）

| 檔名 | 顯示位置 | 建議尺寸 | 目前狀態 |
|------|---------|---------|---------|
| `project-fish_reef-fish-hero.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px | ⭐ demo 圖 |
| `project-fish_reef-fish.jpg` | 內文圖 1（UVC 樣線調查） | 700×450px | ⭐ demo 圖 |
| `project-fish_complex-reef-structure.jpg` | 內文圖 2（複雜礁石結構） | 700×450px | ⭐ demo 圖 |

---

### About 頭像（特殊）

首頁 About 區塊的頭像目前是「佔位符號」（虛線圓圈），尚未設定圖片。

**替換方式：** 開啟 `index.html`，搜尋 `about-avatar-placeholder`，將整段：
```html
<div class="about-avatar-placeholder">
  <svg>...</svg>
  YOUR PHOTO
</div>
```
替換為：
```html
<img class="about-avatar" src="images/about_avatar.jpg" alt="Yan Chen">
```
然後將你的大頭照命名為 `about_avatar.jpg` 放進 `images/` 資料夾。

---

## 圖片處理建議

- **大小：** 建議壓縮至 500KB 以下，可用 [Squoosh](https://squoosh.app/) 或 [TinyJPG](https://tinyjpg.com/) 免費壓縮
- **格式：** 一般照片用 `.jpg`，有透明背景用 `.png`
- **尺寸：** Hero 背景建議 1800px 寬；卡片圖建議 700px 寬

---

## 所有 demo 圖片清單（⭐ = 目前已有 demo 圖，可直接覆蓋替換）

```
images/
├── hero_coral-reef.jpg              ⭐ 首頁 Hero 大圖
├── hero_research-reef-fish.jpg      ⭐ About 區塊背景
├── hero_photos-coral-colony.jpg     ⭐ Photos 區塊背景
├── hero_research-page-survey.jpg    ⭐ 研究頁 Hero
├── hero_journal-ocean.jpg           ⭐ 日誌頁 Hero
├── gallery_01_coral-reef.jpg        ⭐ 照片牆 #1
├── gallery_02_coral-colony.jpg      ⭐ 照片牆 #2
├── gallery_03_reef-fish.jpg         ⭐ 照片牆 #3
├── gallery_04_underwater-survey.jpg ⭐ 照片牆 #4
├── gallery_05_ocean.jpg             ⭐ 照片牆 #5
├── gallery_06_bleached-coral.jpg    ⭐ 照片牆 #6（備用）
├── gallery_07_marine-life.jpg       ⭐ 照片牆 #7
├── project-thermal_hero-bleaching.jpg    ⭐ 熱耐受 Hero
├── project-thermal_coral-bleaching.jpg   ⭐ 熱耐受 內文圖
├── project-thermal_healthy-reef.jpg      ⭐ 熱耐受 對照圖
├── project-monitoring_hero-survey.jpg    ⭐ 監測 Hero
├── project-monitoring_reef-survey.jpg    ⭐ 監測 卡片圖
├── project-monitoring_belt-transect.jpg  ⭐ 監測 內文圖
├── project-typhoon_hero-coral.jpg        ⭐ 颱風 Hero
├── project-typhoon_coral-recovery.jpg    ⭐ 颱風 內文圖1
├── project-typhoon_juvenile-coral.jpg    ⭐ 颱風 內文圖2
├── project-fish_reef-fish-hero.jpg       ⭐ 礁魚 Hero
├── project-fish_reef-fish.jpg            ⭐ 礁魚 內文圖1
├── project-fish_complex-reef-structure.jpg ⭐ 礁魚 內文圖2
├── journal_entry1_survey.jpg        ⭐ 日誌1 圖1
├── journal_entry1_coral.jpg         ⭐ 日誌1 圖2
├── journal_entry1_reef.jpg          ⭐ 日誌1 圖3
├── journal_entry2_bleaching.jpg     ⭐ 日誌2 主圖
├── journal_entry3_conference.jpg    ⭐ 日誌3 圖1
└── journal_entry3_hawaii.jpg        ⭐ 日誌3 圖2
```

---

*最後更新：2026-03-24*
