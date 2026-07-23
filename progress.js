// @purpose  単語学習の進捗管理（ライトナー式復習システム）。アカウント不要、端末のlocalStorageのみで完結する。
// WHY: バックエンドがないため、学習履歴・復習スケジュールはすべて端末内のlocalStorageで管理する。
// ライトナーボックス方式（5段階）を採用：正解するたびに箱が進み復習間隔が伸び、間違えると箱1に戻る。

const PROGRESS_KEY = "korean-progress-v1";
const STREAK_KEY = "korean-streak-v1";
const BOX_INTERVAL_DAYS = [1, 3, 7, 14, 30];
const DAY_MS = 24 * 60 * 60 * 1000;

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // localStorage unavailable (private browsing等) — 保存できないだけで学習自体は継続可能
  }
}

let progressData = loadJSON(PROGRESS_KEY, {});
let streakData = loadJSON(STREAK_KEY, { streak: 0, lastDate: null, todayCount: 0 });

function wordKey(word) {
  return `${word.level}_${word.hangul}`;
}

function getWordProgress(word) {
  return progressData[wordKey(word)] || null;
}

function isMastered(word) {
  const p = getWordProgress(word);
  return !!p && p.box >= BOX_INTERVAL_DAYS.length - 1;
}

function isDueForReview(word) {
  const p = getWordProgress(word);
  if (!p) return false;
  return p.nextReview <= Date.now();
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function bumpStreak() {
  const today = todayStr();
  if (streakData.lastDate === today) {
    streakData.todayCount += 1;
  } else {
    const yesterday = new Date(Date.now() - DAY_MS).toISOString().slice(0, 10);
    streakData.streak = streakData.lastDate === yesterday ? streakData.streak + 1 : 1;
    streakData.lastDate = today;
    streakData.todayCount = 1;
  }
  saveJSON(STREAK_KEY, streakData);
}

function markWord(word, knew) {
  const key = wordKey(word);
  const existing = progressData[key] || { box: 0, correctCount: 0, wrongCount: 0 };
  let box = existing.box;
  if (knew) {
    box = Math.min(box + 1, BOX_INTERVAL_DAYS.length - 1);
    existing.correctCount += 1;
  } else {
    box = 0;
    existing.wrongCount += 1;
  }
  const now = Date.now();
  progressData[key] = {
    box,
    correctCount: existing.correctCount,
    wrongCount: existing.wrongCount,
    lastReviewed: now,
    nextReview: now + BOX_INTERVAL_DAYS[box] * DAY_MS,
  };
  saveJSON(PROGRESS_KEY, progressData);
  bumpStreak();
}

function getOverallStats() {
  const keys = Object.keys(progressData);
  const studied = keys.length;
  const mastered = keys.filter((k) => progressData[k].box >= BOX_INTERVAL_DAYS.length - 1).length;
  return { studied, mastered, streak: streakData.streak, todayCount: streakData.todayCount };
}

function getLevelStats(level) {
  let studied = 0;
  let mastered = 0;
  let total = 0;
  VOCAB.forEach((w) => {
    if (w.level !== level) return;
    total += 1;
    const p = getWordProgress(w);
    if (p) studied += 1;
    if (p && p.box >= BOX_INTERVAL_DAYS.length - 1) mastered += 1;
  });
  return { studied, mastered, total };
}

// ---------- その他セクション用の簡易チェック（既読/未読の二値管理） ----------
// WHY: 単語セクションは「隠して自己採点」するクイズ形式のためライトナー箱が適するが、
// 文法・慣用句などは常に内容が見えている一覧形式のため、シンプルな既知トグルの方がUXに合う。

const ITEM_PROGRESS_KEY = "korean-item-progress-v1";
let itemProgressData = loadJSON(ITEM_PROGRESS_KEY, {});

function itemKey(section, id) {
  return `${section}::${id}`;
}

function isItemKnown(section, id) {
  return !!itemProgressData[itemKey(section, id)];
}

function toggleItemKnown(section, id) {
  const key = itemKey(section, id);
  if (itemProgressData[key]) {
    delete itemProgressData[key];
  } else {
    itemProgressData[key] = { markedAt: Date.now() };
    bumpStreak();
  }
  saveJSON(ITEM_PROGRESS_KEY, itemProgressData);
  return !!itemProgressData[key];
}

function getSectionStats(section, allIds) {
  const known = allIds.filter((id) => isItemKnown(section, id)).length;
  return { known, total: allIds.length };
}
