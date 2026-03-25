# 圖片管理指南 · Image Management Guide

所有圖片請放在這個 `images/` 資料夾中。
依照下方的命名對照表，將你的照片改成對應的檔名，上傳後網站就會自動顯示。

> **支援格式：** `.jpg` / `.jpeg` / `.png` / `.webp`
> **命名規則：** `位置_說明.jpg`（全小寫、用連字號 `-` 分隔英文單字）

---

## 命名對照總表

### 首頁 `index.html`

#### 背景圖（Hero / Section）

| 檔名 | 顯示位置 | 建議尺寸 | 說明 |
|------|---------|---------|------|
| `hero_coral-reef.jpg` | 首頁最上方大圖（Hero） | 1800×1000px 以上 | 網站第一眼看到的背景，建議用你最漂亮的水下全景照 |
| `hero_research-reef-fish.jpg` | Research 研究區塊背景 | 1600×900px | 研究區塊的背景圖，水下場景最佳 |
| `hero_photos-coral-colony.jpg` | Photos 照片區塊背景 | 1600×900px | 照片展示區塊的背景 |

#### 首頁研究預覽卡片（兩張）

| 檔名 | 顯示位置 | 建議尺寸 |
|------|---------|---------|
| `project-thermal_coral-bleaching.jpg` | 首頁 → 研究卡片 1（熱耐受/白化） | 600×400px |
| `project-monitoring_reef-survey.jpg` | 首頁 → 研究卡片 2（長期監測） | 600×400px |

#### 首頁照片牆 Photos Gallery（7 張）

依序為照片牆從左到右、從上到下的位置：

| 檔名 | 位置 | 版型 | 說明 |
|------|------|------|------|
| `gallery_01_coral-reef.jpg` | 第 1 格（左上，高圖） | 直式（tall） | 建議用直式構圖的照片 |
| `gallery_02_coral-colony.jpg` | 第 2 格 | 正方 | — |
| `gallery_03_reef-fish.jpg` | 第 3 格 | 正方 | — |
| `gallery_04_underwater-survey.jpg` | 第 4 格（寬圖） | 橫式（wide） | 建議用橫式構圖的照片 |
| `gallery_05_ocean.jpg` | 第 5 格 | 正方 | — |
| `gallery_06_bleached-coral.jpg` | 第 6 格 | 正方 | — |
| `gallery_07_marine-life.jpg` | 第 7 格 | 正方 | — |

> ➕ **想新增照片？** 開啟 `index.html`，搜尋 `gallery_07`，在它下方複製一個 `<div class="photo-item">` 區塊，命名新圖片為 `gallery_08_說明.jpg`。

---

### 研究頁 `research.html`

| 檔名 | 顯示位置 | 建議尺寸 |
|------|---------|---------|
| `hero_research-page-survey.jpg` | 研究頁最上方 Hero 背景 | 1800×1000px |
| `project-thermal_coral-bleaching.jpg` | 計畫卡片：熱耐受研究 | 700×450px |
| `project-monitoring_reef-survey.jpg` | 計畫卡片：長期監測 | 700×450px |
| `project-typhoon_coral-recovery.jpg` | 計畫卡片：颱風復原 | 700×450px |
| `project-fish_reef-fish.jpg` | 計畫卡片：礁魚群聚 | 700×450px |

---

### 日誌頁 `journal.html`

| 檔名 | 顯示位置 | 建議尺寸 | 說明 |
|------|---------|---------|------|
| `hero_journal-ocean.jpg` | 日誌頁 Hero 背景 | 1800×1000px | 海洋場景背景圖 |
| `journal_entry1_survey.jpg` | 日誌 1 的第 1 張圖 | 500×350px | 調查現場照片 |
| `journal_entry1_coral.jpg` | 日誌 1 的第 2 張圖 | 500×350px | 珊瑚特寫 |
| `journal_entry1_reef.jpg` | 日誌 1 的第 3 張圖 | 500×350px | 礁體全景 |
| `journal_entry2_bleaching.jpg` | 日誌 2 的主圖 | 900×500px | 白化事件照片 |
| `journal_entry3_conference.jpg` | 日誌 3 的第 1 張圖 | 500×350px | 研討會照片 |
| `journal_entry3_hawaii.jpg` | 日誌 3 的第 2 張圖 | 500×350px | 夏威夷/會議地點照片 |

> ➕ **新增日誌時：** 新日誌的圖片命名為 `journal_entry4_說明.jpg`（數字依序遞增）

---

### 計畫詳細頁

#### `project-thermal.html`（熱耐受研究）

| 檔名 | 顯示位置 | 建議尺寸 |
|------|---------|---------|
| `project-thermal_hero-bleaching.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px |
| `project-thermal_coral-bleaching.jpg` | 內文圖 1（白化珊瑚） | 700×450px |
| `project-thermal_healthy-reef.jpg` | 內文圖 2（健康礁體對照） | 700×450px |

#### `project-monitoring.html`（長期監測）

| 檔名 | 顯示位置 | 建議尺寸 |
|------|---------|---------|
| `project-monitoring_hero-survey.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px |
| `project-monitoring_belt-transect.jpg` | 內文主圖（帶狀樣線調查） | 1400×700px（寬圖） |

#### `project-typhoon.html`（颱風復原）

| 檔名 | 顯示位置 | 建議尺寸 |
|------|---------|---------|
| `project-typhoon_hero-coral.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px |
| `project-typhoon_coral-recovery.jpg` | 內文圖 1（颱風後礁體） | 700×450px |
| `project-typhoon_juvenile-coral.jpg` | 內文圖 2（幼珊瑚補招） | 700×450px |

#### `project-fish.html`（礁魚群聚）

| 檔名 | 顯示位置 | 建議尺寸 |
|------|---------|---------|
| `project-fish_reef-fish-hero.jpg` | 頁面頂部 Hero 大圖背景 | 1800×1000px |
| `project-fish_reef-fish.jpg` | 內文圖 1（UVC 樣線調查） | 700×450px |
| `project-fish_complex-reef-structure.jpg` | 內文圖 2（複雜礁石結構） | 700×450px |

---

## 操作步驟

1. 將照片重新命名為上方表格中對應的檔名
2. 把圖片檔案放進這個 `images/` 資料夾
3. 用 GitHub Desktop 將變更 Commit 並 Push 到 GitHub
4. 等待 1–2 分鐘，重新整理網站即可看到更新

## 圖片處理建議

- **大小：** 建議壓縮至 500KB 以下，可用 [Squoosh](https://squoosh.app/) 或 [TinyJPG](https://tinyjpg.com/) 免費壓縮
- **格式：** 一般照片用 `.jpg`，有透明背景用 `.png`
- **尺寸：** Hero 背景建議 1800px 寬；卡片圖建議 700px 寬

---

*最後更新：2026-03-24*
