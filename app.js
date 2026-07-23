// @purpose  単語一覧の描画、級/検索フィルタリング、カードモード、カタカナ発音表示切り替え、韓国語TTS再生
// WHY: バックエンドがないため、発音再生はブラウザ内蔵のWeb Speech API（speechSynthesis）で処理する。

const state = {
  level: "ALL",
  query: "",
  mode: "card", // "card" | "list"
  order: VOCAB.map((_, i) => i),
  cardIndex: 0,
  reviewMode: false,
};

function shuffleOrder() {
  for (let i = state.order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
}

const listView = document.getElementById("list-view");
const cardView = document.getElementById("card-view");
const cardSlot = document.getElementById("card-slot");
const cardPosition = document.getElementById("card-position");
const emptyState = document.getElementById("empty-state");
const ttsWarning = document.getElementById("tts-warning");
const template = document.getElementById("word-card-template");
const quizTemplate = document.getElementById("quiz-card-template");

const speechSupported = "speechSynthesis" in window;
if (!speechSupported) {
  ttsWarning.hidden = false;
}

function speak(text) {
  if (!speechSupported || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  window.speechSynthesis.speak(utterance);
}

function getFilteredWords() {
  const query = state.query.trim().toLowerCase();

  const source = state.order.map((i) => VOCAB[i]).filter((word) => state.level === "ALL" || word.level === state.level);

  return source.filter((word) => {
    if (state.reviewMode && !isDueForReview(word)) return false;
    if (!query) return true;
    return (
      word.hangul.toLowerCase().includes(query) ||
      word.katakana.toLowerCase().includes(query) ||
      word.meaning.toLowerCase().includes(query)
    );
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function textIncludes(text, query) {
  return String(text || "").toLowerCase().includes(query);
}

// WHY: 文法・漢字語・慣用句などの一覧セクションは常に内容が見えているため、
// 単語のクイズ形式（隠して自己採点）ではなく「既知」を押すだけの軽量トグルで進捗を管理する。
function buildKnownToggle(section, id) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "item-check-btn";
  const applyState = (known) => {
    btn.textContent = known ? "✅ 既知" : "☆ 未チェック";
    btn.setAttribute("aria-pressed", String(known));
  };
  applyState(isItemKnown(section, id));
  btn.addEventListener("click", () => {
    const nowKnown = toggleItemKnown(section, id);
    applyState(nowKnown);
    updateSectionStatsDisplay(section);
  });
  return btn;
}

const sectionStatsConfig = {};

function registerSectionStats(section, elId, getAllIds) {
  sectionStatsConfig[section] = { elId, getAllIds };
}

function updateSectionStatsDisplay(section) {
  const config = sectionStatsConfig[section];
  if (!config) return;
  const el = document.getElementById(config.elId);
  if (!el) return;
  const stats = getSectionStats(section, config.getAllIds());
  el.textContent = `✅ 既知 ${stats.known} / ${stats.total}`;
}

// WHY: 例文中の見出し語は活用形（語尾変化・音韻変化など）で現れることが多く
// 完全一致しない場合がある。見出し語の末尾から最大2文字まで削りながらマッチを試みる。
function highlightExample(example, hangul) {
  if (!hangul) return escapeHtml(example);
  const minLen = Math.max(1, hangul.length - 2);
  for (let len = hangul.length; len >= minLen; len--) {
    const fragment = hangul.slice(0, len);
    const idx = example.indexOf(fragment);
    if (idx !== -1) {
      const before = example.slice(0, idx);
      const match = example.slice(idx, idx + fragment.length);
      const after = example.slice(idx + fragment.length);
      return `${escapeHtml(before)}<span class="example-highlight">${escapeHtml(match)}</span>${escapeHtml(after)}`;
    }
  }
  return escapeHtml(example);
}

function renderBreakdown(listEl, breakdown) {
  listEl.innerHTML = "";
  if (!breakdown || breakdown.length === 0) {
    listEl.hidden = true;
    return;
  }
  listEl.hidden = false;
  breakdown.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.word} — ${item.meaning}`;
    listEl.appendChild(li);
  });
}

function buildWordCard(word) {
  const node = template.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = `${word.level}級`;
  badge.dataset.level = word.level;

  node.querySelector(".hangul").textContent = word.hangul;
  node.querySelector(".meaning").textContent = word.meaning;

  const katakanaEl = node.querySelector(".katakana-reading");
  katakanaEl.textContent = word.katakana;
  const katakanaToggleBtn = node.querySelector(".katakana-toggle-btn:not(.example-katakana-toggle)");
  katakanaToggleBtn.addEventListener("click", () => {
    const isShown = !katakanaEl.hidden;
    katakanaEl.hidden = isShown;
    katakanaToggleBtn.setAttribute("aria-pressed", String(!isShown));
  });

  const ttsBtn = node.querySelector(".tts-btn:not(.example-tts)");
  ttsBtn.disabled = !speechSupported;
  ttsBtn.addEventListener("click", () => speak(word.hangul));

  node.querySelector(".example-ko").innerHTML = highlightExample(word.example, word.hangul);
  node.querySelector(".example-meaning").textContent = word.exampleMeaning;

  const exampleKatakanaEl = node.querySelector(".example-katakana");
  exampleKatakanaEl.textContent = word.exampleKatakana;
  const exampleKatakanaToggleBtn = node.querySelector(".example-katakana-toggle");
  exampleKatakanaToggleBtn.addEventListener("click", () => {
    const isShown = !exampleKatakanaEl.hidden;
    exampleKatakanaEl.hidden = isShown;
    exampleKatakanaToggleBtn.setAttribute("aria-pressed", String(!isShown));
  });

  const exampleTtsBtn = node.querySelector(".example-tts");
  exampleTtsBtn.disabled = !speechSupported;
  exampleTtsBtn.addEventListener("click", () => speak(word.example));

  renderBreakdown(node.querySelector(".breakdown-list"), word.breakdown);

  return node;
}

function renderBoxIndicator(node, word) {
  const progress = getWordProgress(word);
  const box = progress ? progress.box : -1;
  node.querySelectorAll(".box-segment").forEach((seg, i) => {
    seg.classList.toggle("is-filled", i <= box);
  });
  const labelEl = node.querySelector(".box-label");
  if (!progress) {
    labelEl.textContent = "🆕 未学習";
  } else if (box >= BOX_INTERVAL_DAYS.length - 1) {
    labelEl.textContent = "🏆 マスター済み";
  } else {
    labelEl.textContent = `📦 復習ボックス ${box + 1}/${BOX_INTERVAL_DAYS.length}`;
  }
}

function buildQuizCard(word) {
  const node = quizTemplate.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = `${word.level}級`;
  badge.dataset.level = word.level;

  renderBoxIndicator(node, word);

  node.querySelector(".hangul").textContent = word.hangul;
  node.querySelector(".example-ko").innerHTML = highlightExample(word.example, word.hangul);

  node.querySelector(".katakana-reading").textContent = word.katakana;
  node.querySelector(".meaning").textContent = word.meaning;
  node.querySelector(".example-katakana").textContent = word.exampleKatakana;
  node.querySelector(".example-meaning").textContent = word.exampleMeaning;

  const answerEl = node.querySelector(".quiz-answer");
  const revealBtn = node.querySelector(".reveal-btn");
  revealBtn.addEventListener("click", () => {
    const isShown = !answerEl.hidden;
    answerEl.hidden = isShown;
    revealBtn.setAttribute("aria-pressed", String(!isShown));
    revealBtn.textContent = isShown ? "答えを確認" : "答えを隠す";
  });

  const wordTtsBtn = node.querySelector(".tts-word-btn");
  wordTtsBtn.disabled = !speechSupported;
  wordTtsBtn.addEventListener("click", () => speak(word.hangul));

  const exampleTtsBtn = node.querySelector(".tts-example-btn");
  exampleTtsBtn.disabled = !speechSupported;
  exampleTtsBtn.addEventListener("click", () => speak(word.example));

  renderBreakdown(node.querySelector(".breakdown-list"), word.breakdown);

  const wrongBtn = node.querySelector(".srs-wrong-btn");
  const knownBtn = node.querySelector(".srs-known-btn");
  const handleSrsChoice = (knew) => {
    markWord(word, knew);
    updateStatsUI();
    state.cardIndex += 1;
    render();
  };
  wrongBtn.addEventListener("click", () => handleSrsChoice(false));
  knownBtn.addEventListener("click", () => handleSrsChoice(true));

  return node;
}

function renderList(words) {
  listView.innerHTML = "";
  const fragment = document.createDocumentFragment();
  words.forEach((word) => fragment.appendChild(buildWordCard(word)));
  listView.appendChild(fragment);
}

function renderCard(words) {
  cardSlot.innerHTML = "";
  if (words.length === 0) {
    cardPosition.textContent = "0 / 0";
    return;
  }
  if (state.cardIndex >= words.length) state.cardIndex = 0;
  if (state.cardIndex < 0) state.cardIndex = words.length - 1;

  const word = words[state.cardIndex];
  cardSlot.appendChild(buildQuizCard(word));
  cardPosition.textContent = `${state.cardIndex + 1} / ${words.length}`;
}

function render() {
  const words = getFilteredWords();
  emptyState.hidden = words.length !== 0;

  if (state.mode === "list") {
    listView.hidden = words.length === 0;
    cardView.hidden = true;
    renderList(words);
  } else {
    listView.hidden = true;
    cardView.hidden = words.length === 0;
    renderCard(words);
  }
}

// WHY: マスター済み（box満タン）は反映まで数週間かかり、押しても即座に数字が動かないため
// 「反応していないように見える」という誤解を招く。レベルタブは押すたびに即動く「学習済み」数を表示し、
// 長期的なマスター状況は上部の統計バー（学習済み・マスター済み両方表示）で確認する構成にする。
function updateLevelTabLabels() {
  document.querySelectorAll(".level-tab").forEach((tab) => {
    if (!tab.dataset.baseLabel) {
      tab.dataset.baseLabel = tab.textContent;
    }
    const level = tab.dataset.level;
    if (level === "ALL") {
      const stats = getOverallStats();
      tab.textContent = `${tab.dataset.baseLabel}（${stats.studied}/${VOCAB.length}）`;
    } else {
      const stats = getLevelStats(level);
      tab.textContent = `${tab.dataset.baseLabel}（${stats.studied}/${stats.total}）`;
    }
  });
}

function renderStatsBar() {
  const statsBar = document.getElementById("stats-bar");
  if (!statsBar) return;
  const stats = getOverallStats();
  statsBar.textContent = `📊 学習済み ${stats.studied.toLocaleString()}語 ・ マスター済み ${stats.mastered.toLocaleString()}語 ・ 今日の復習 ${stats.todayCount}語 ・ 連続学習 ${stats.streak}日`;
}

function updateStatsUI() {
  renderStatsBar();
  updateLevelTabLabels();
}

document.querySelectorAll(".level-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".level-tab").forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");
    state.level = tab.dataset.level;
    state.cardIndex = 0;
    render();
  });
});

document.getElementById("review-toggle").addEventListener("click", (e) => {
  state.reviewMode = !state.reviewMode;
  e.currentTarget.setAttribute("aria-pressed", String(state.reviewMode));
  state.cardIndex = 0;
  render();
});

document.getElementById("search-input").addEventListener("input", (e) => {
  state.query = e.target.value;
  state.cardIndex = 0;
  render();
});

const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener("click", () => {
  state.mode = state.mode === "card" ? "list" : "card";
  modeToggleBtn.textContent = state.mode === "card" ? "📚 単語帳表示" : "🔀 カードクイズ";
  modeToggleBtn.setAttribute("aria-pressed", String(state.mode === "list"));
  render();
});

document.getElementById("shuffle-btn").addEventListener("click", () => {
  shuffleOrder();
  state.cardIndex = 0;
  render();
});

document.getElementById("card-prev").addEventListener("click", () => {
  state.cardIndex -= 1;
  render();
});

document.getElementById("card-next").addEventListener("click", () => {
  state.cardIndex += 1;
  render();
});

shuffleOrder();
render();
updateStatsUI();

// ---------- 漢字語対応セクション ----------
// WHY: パターン数が増えるとカードを全部開いたまま並べるとスクロールが膨大になるため、
// デフォルトは折りたたみ（アコーディオン）にし、検索時のみ該当パターンを自動展開する。

const hanjaState = { query: "" };

function buildHanjaPairItem(pair) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="hanja-hanja">${escapeHtml(pair.hanja)}</span>
    <span class="hanja-korean">${escapeHtml(pair.korean)}</span>
    <span class="hanja-arrow">→</span>
    <span class="hanja-japanese">${escapeHtml(pair.japanese)}</span>
    <span class="hanja-meaning">${escapeHtml(pair.meaning)}</span>`;
  return li;
}

function renderHanjaPatterns() {
  const listEl = document.getElementById("hanja-list");
  const emptyState = document.getElementById("hanja-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = hanjaState.query.trim().toLowerCase();
  const matchesQuery = (pair) =>
    !query ||
    pair.hanja.toLowerCase().includes(query) ||
    pair.korean.toLowerCase().includes(query) ||
    pair.japanese.toLowerCase().includes(query) ||
    pair.meaning.toLowerCase().includes(query);

  let visibleGroupCount = 0;

  HANJA_PATTERNS.forEach((group) => {
    const pairs = query ? group.pairs.filter(matchesQuery) : group.pairs;
    if (query && pairs.length === 0) return;
    visibleGroupCount += 1;

    const card = document.createElement("article");
    card.className = "pattern-card";

    const header = document.createElement("button");
    header.type = "button";
    header.className = "pattern-header";
    header.setAttribute("aria-expanded", query ? "true" : "false");
    header.innerHTML = `<span class="pattern-header-text">
        <span class="pattern-title">${escapeHtml(group.pattern)}</span>
        <span class="pattern-count">${pairs.length}件</span>
      </span>
      <span class="pattern-chevron">▶</span>`;
    card.appendChild(header);

    const explanation = document.createElement("p");
    explanation.className = "pattern-explanation";
    explanation.textContent = group.explanation;
    card.appendChild(explanation);

    const pairList = document.createElement("ul");
    pairList.className = "hanja-pair-list";
    pairList.hidden = !query;
    pairs.forEach((pair) => pairList.appendChild(buildHanjaPairItem(pair)));
    card.appendChild(pairList);

    header.addEventListener("click", () => {
      const isHidden = pairList.hidden;
      pairList.hidden = !isHidden;
      header.setAttribute("aria-expanded", String(isHidden));
    });

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyState.hidden = visibleGroupCount !== 0;
}

document.getElementById("hanja-search").addEventListener("input", (e) => {
  hanjaState.query = e.target.value;
  renderHanjaPatterns();
});

function renderFalseFriends() {
  const listEl = document.getElementById("false-friends-list");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  FALSE_FRIENDS.forEach((ff) => {
    const card = document.createElement("article");
    card.className = "pattern-card false-friend-card";

    const title = document.createElement("h3");
    title.innerHTML = `<span class="grammar-pattern-text">${escapeHtml(ff.hanja)}</span> <span class="grammar-title-ja">（${escapeHtml(ff.korean)} / ${escapeHtml(ff.japaneseReading)}）</span>`;
    card.appendChild(title);

    const compare = document.createElement("div");
    compare.className = "false-friend-compare";
    compare.innerHTML = `<div class="false-friend-side">
        <span class="false-friend-flag">🇰🇷 韓国語</span>
        <p>${escapeHtml(ff.koreanMeaning)}</p>
      </div>
      <div class="false-friend-side">
        <span class="false-friend-flag">🇯🇵 日本語</span>
        <p>${escapeHtml(ff.japaneseMeaning)}</p>
      </div>`;
    card.appendChild(compare);

    const note = document.createElement("p");
    note.className = "irregular-note";
    note.textContent = ff.note;
    card.appendChild(note);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
}

function renderHanjaSection() {
  renderHanjaPatterns();
  renderFalseFriends();
}

// ---------- 文法パターンセクション ----------

const grammarState = { level: "ALL", query: "" };

function renderGrammarPatterns() {
  const listEl = document.getElementById("grammar-list");
  const emptyStateEl = document.getElementById("grammar-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = grammarState.query.trim().toLowerCase();
  const filtered = GRAMMAR.filter((g) => grammarState.level === "ALL" || g.level === grammarState.level).filter((g) => {
    if (!query) return true;
    return (
      textIncludes(g.pattern, query) ||
      textIncludes(g.title, query) ||
      textIncludes(g.explanation, query) ||
      g.examples.some((ex) => textIncludes(ex.korean, query) || textIncludes(ex.japanese, query))
    );
  });

  filtered.forEach((g) => {
    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.innerHTML = `<span class="grammar-pattern-text">${escapeHtml(g.pattern)}</span> <span class="grammar-title-ja">${escapeHtml(g.title)}</span>`;
    card.appendChild(title);

    const explanation = document.createElement("p");
    explanation.className = "pattern-explanation";
    explanation.textContent = g.explanation;
    card.appendChild(explanation);

    const exampleList = document.createElement("ul");
    exampleList.className = "example-pair-list";
    g.examples.forEach((ex) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="example-pair-ko">${escapeHtml(ex.korean)}</span>
        <span class="example-pair-ja">${escapeHtml(ex.japanese)}</span>`;
      exampleList.appendChild(li);
    });
    card.appendChild(exampleList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyStateEl.hidden = filtered.length !== 0;
}

document.querySelectorAll(".grammar-level-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".grammar-level-tab").forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");
    grammarState.level = tab.dataset.level;
    renderGrammarPatterns();
  });
});

document.getElementById("grammar-search").addEventListener("input", (e) => {
  grammarState.query = e.target.value;
  renderGrammarPatterns();
});

// ---------- 発音規則セクション ----------

const pronunciationState = { query: "" };

function renderPronunciationRules() {
  const listEl = document.getElementById("pronunciation-list");
  const emptyStateEl = document.getElementById("pronunciation-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = pronunciationState.query.trim().toLowerCase();
  let visibleCount = 0;

  PRONUNCIATION_RULES.forEach((rule) => {
    const ruleMatches = !query || textIncludes(rule.name, query) || textIncludes(rule.explanation, query);
    const examples = !query || ruleMatches
      ? rule.examples
      : rule.examples.filter((ex) => textIncludes(ex.written, query) || textIncludes(ex.pronounced, query) || textIncludes(ex.meaning, query));
    if (query && examples.length === 0) return;
    visibleCount += 1;

    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = rule.name;
    card.appendChild(title);

    const explanation = document.createElement("p");
    explanation.className = "pattern-explanation";
    explanation.textContent = rule.explanation;
    card.appendChild(explanation);

    const exampleList = document.createElement("ul");
    exampleList.className = "example-pair-list";
    examples.forEach((ex) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="example-pair-ko">${escapeHtml(ex.written)} → [${escapeHtml(ex.pronounced)}]</span>
        <span class="example-pair-ja">${escapeHtml(ex.meaning)}</span>`;
      exampleList.appendChild(li);
    });
    card.appendChild(exampleList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyStateEl.hidden = visibleCount !== 0;
}

document.getElementById("pronunciation-search").addEventListener("input", (e) => {
  pronunciationState.query = e.target.value;
  renderPronunciationRules();
});

// ---------- 不規則活用セクション ----------

const irregularState = { query: "" };

function renderIrregulars() {
  const listEl = document.getElementById("irregular-list");
  const emptyStateEl = document.getElementById("irregular-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = irregularState.query.trim().toLowerCase();
  let visibleCount = 0;

  IRREGULARS.forEach((group) => {
    const groupMatches = !query || textIncludes(group.name, query) || textIncludes(group.explanation, query);
    const examples = !query || groupMatches
      ? group.examples
      : group.examples.filter((ex) => textIncludes(ex.hangul, query) || textIncludes(ex.meaning, query) || textIncludes(ex.change, query));
    if (query && examples.length === 0) return;
    visibleCount += 1;

    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = group.name;
    card.appendChild(title);

    const explanation = document.createElement("p");
    explanation.className = "pattern-explanation";
    explanation.textContent = group.explanation;
    card.appendChild(explanation);

    const exampleList = document.createElement("ul");
    exampleList.className = "example-pair-list";
    examples.forEach((ex) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="example-pair-ko">${escapeHtml(ex.hangul)}（${escapeHtml(ex.meaning)}）</span>
        <span class="example-pair-ja">${escapeHtml(ex.change)}</span>`;
      exampleList.appendChild(li);
    });
    card.appendChild(exampleList);

    if (group.regularNote) {
      const note = document.createElement("p");
      note.className = "irregular-note";
      note.textContent = group.regularNote;
      card.appendChild(note);
    }

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyStateEl.hidden = visibleCount !== 0;
}

document.getElementById("irregular-search").addEventListener("input", (e) => {
  irregularState.query = e.target.value;
  renderIrregulars();
});

// ---------- 敬語セクション ----------

const honorificState = { query: "" };

function renderHonorifics() {
  const levelListEl = document.getElementById("speech-level-list");
  levelListEl.innerHTML = "";
  const levelFragment = document.createDocumentFragment();

  SPEECH_LEVELS.forEach((lv) => {
    const card = document.createElement("article");
    card.className = "pattern-card honorific-level-card";

    const title = document.createElement("h3");
    title.textContent = lv.name;
    card.appendChild(title);

    const usage = document.createElement("p");
    usage.className = "pattern-explanation";
    usage.textContent = lv.usage;
    card.appendChild(usage);

    const example = document.createElement("p");
    example.className = "example-ko";
    example.textContent = lv.example;
    card.appendChild(example);

    levelFragment.appendChild(card);
  });
  levelListEl.appendChild(levelFragment);

  const listEl = document.getElementById("honorific-list");
  const emptyStateEl = document.getElementById("honorific-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = honorificState.query.trim().toLowerCase();
  let visibleCount = 0;

  HONORIFIC_WORDS.forEach((group) => {
    const groupMatches = !query || textIncludes(group.name, query) || textIncludes(group.explanation, query);
    const pairs = !query || groupMatches
      ? group.pairs
      : group.pairs.filter((p) => textIncludes(p.casual, query) || textIncludes(p.honorific, query) || textIncludes(p.meaning, query));
    if (query && pairs.length === 0) return;
    visibleCount += 1;

    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = group.name;
    card.appendChild(title);

    const explanation = document.createElement("p");
    explanation.className = "pattern-explanation";
    explanation.textContent = group.explanation;
    card.appendChild(explanation);

    const pairList = document.createElement("ul");
    pairList.className = "hanja-pair-list";
    pairs.forEach((pair) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="hanja-korean">${escapeHtml(pair.casual)}</span>
        <span class="hanja-arrow">→</span>
        <span class="hanja-japanese">${escapeHtml(pair.honorific)}</span>
        <span class="hanja-meaning">${escapeHtml(pair.meaning)}</span>`;
      pairList.appendChild(li);
    });
    card.appendChild(pairList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyStateEl.hidden = visibleCount !== 0;
}

document.getElementById("honorific-search").addEventListener("input", (e) => {
  honorificState.query = e.target.value;
  renderHonorifics();
});

// ---------- 数詞・助数詞セクション ----------

const numberState = { query: "" };

function renderNumbers() {
  const systemListEl = document.getElementById("number-system-list");
  systemListEl.innerHTML = "";
  const systemFragment = document.createDocumentFragment();

  NUMBER_SYSTEMS.forEach((system) => {
    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = system.name;
    card.appendChild(title);

    const usage = document.createElement("p");
    usage.className = "pattern-explanation";
    usage.textContent = system.usage;
    card.appendChild(usage);

    const grid = document.createElement("ul");
    grid.className = "number-grid";
    system.numbers.forEach((n) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="hanja-korean">${escapeHtml(n.hangul)}</span>
        <span class="hanja-meaning">${escapeHtml(n.value)}</span>`;
      grid.appendChild(li);
    });
    card.appendChild(grid);

    const note = document.createElement("p");
    note.className = "irregular-note";
    note.textContent = system.note;
    card.appendChild(note);

    systemFragment.appendChild(card);
  });
  systemListEl.appendChild(systemFragment);

  const listEl = document.getElementById("counter-list");
  const emptyStateEl = document.getElementById("number-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = numberState.query.trim().toLowerCase();
  const filteredCounters = COUNTERS.filter(
    (c) => !query || textIncludes(c.word, query) || textIncludes(c.meaning, query) || textIncludes(c.example, query)
  );

  if (filteredCounters.length > 0) {
    const card = document.createElement("article");
    card.className = "pattern-card";
    const title = document.createElement("h3");
    title.textContent = "主な助数詞（単位名詞）";
    card.appendChild(title);

    const counterList = document.createElement("ul");
    counterList.className = "hanja-pair-list";
    filteredCounters.forEach((c) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="hanja-korean">${escapeHtml(c.word)}</span>
        <span class="hanja-meaning">${escapeHtml(c.meaning)}</span>
        <span class="counter-type">${escapeHtml(c.numberType)}</span>
        <span class="hanja-japanese counter-example">${escapeHtml(c.example)}</span>`;
      counterList.appendChild(li);
    });
    card.appendChild(counterList);
    fragment.appendChild(card);
  }

  listEl.appendChild(fragment);
  emptyStateEl.hidden = filteredCounters.length !== 0;
}

document.getElementById("number-search").addEventListener("input", (e) => {
  numberState.query = e.target.value;
  renderNumbers();
});

// ---------- 慣用句セクション ----------

const idiomState = { query: "" };

function renderIdioms() {
  const listEl = document.getElementById("idiom-list");
  const emptyStateEl = document.getElementById("idiom-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = idiomState.query.trim().toLowerCase();
  let visibleCount = 0;

  IDIOMS.forEach((group) => {
    const items = !query
      ? group.items
      : group.items.filter(
          (item) => textIncludes(item.phrase, query) || textIncludes(item.literal, query) || textIncludes(item.meaning, query) || textIncludes(item.example, query)
        );
    if (query && items.length === 0) return;
    visibleCount += 1;

    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = group.theme;
    card.appendChild(title);

    const itemList = document.createElement("ul");
    itemList.className = "idiom-item-list";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "idiom-item";
      li.innerHTML = `<div class="idiom-head">
          <span class="hanja-korean">${escapeHtml(item.phrase)}</span>
          <span class="idiom-literal">（直訳: ${escapeHtml(item.literal)}）</span>
        </div>
        <p class="meaning">${escapeHtml(item.meaning)}</p>
        <p class="example-ko">${escapeHtml(item.example)}</p>`;
      itemList.appendChild(li);
    });
    card.appendChild(itemList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyStateEl.hidden = visibleCount !== 0;
}

document.getElementById("idiom-search").addEventListener("input", (e) => {
  idiomState.query = e.target.value;
  renderIdioms();
});

// ---------- 擬声語・擬態語セクション ----------

const onomatopoeiaState = { query: "" };

function renderOnomatopoeia() {
  const listEl = document.getElementById("onomatopoeia-list");
  const emptyStateEl = document.getElementById("onomatopoeia-empty-state");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const query = onomatopoeiaState.query.trim().toLowerCase();
  let visibleCount = 0;

  ONOMATOPOEIA.forEach((group) => {
    const items = !query
      ? group.items
      : group.items.filter((item) => textIncludes(item.word, query) || textIncludes(item.katakana, query) || textIncludes(item.meaning, query));
    if (query && items.length === 0) return;
    visibleCount += 1;

    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = group.theme;
    card.appendChild(title);

    const itemList = document.createElement("ul");
    itemList.className = "hanja-pair-list";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="hanja-korean">${escapeHtml(item.word)}</span>
        <span class="onomatopoeia-katakana">${escapeHtml(item.katakana)}</span>
        <span class="hanja-meaning">${escapeHtml(item.meaning)}</span>`;
      itemList.appendChild(li);
    });
    card.appendChild(itemList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
  emptyStateEl.hidden = visibleCount !== 0;
}

document.getElementById("onomatopoeia-search").addEventListener("input", (e) => {
  onomatopoeiaState.query = e.target.value;
  renderOnomatopoeia();
});

// ---------- セクション切り替え ----------

const sections = {
  word: document.getElementById("word-section"),
  hanja: document.getElementById("hanja-section"),
  grammar: document.getElementById("grammar-section"),
  pronunciation: document.getElementById("pronunciation-section"),
  irregular: document.getElementById("irregular-section"),
  honorific: document.getElementById("honorific-section"),
  number: document.getElementById("number-section"),
  idiom: document.getElementById("idiom-section"),
  onomatopoeia: document.getElementById("onomatopoeia-section"),
};

const sectionRenderers = {
  hanja: renderHanjaSection,
  grammar: renderGrammarPatterns,
  pronunciation: renderPronunciationRules,
  irregular: renderIrregulars,
  honorific: renderHonorifics,
  number: renderNumbers,
  idiom: renderIdioms,
  onomatopoeia: renderOnomatopoeia,
};

const renderedSections = new Set();

document.querySelectorAll(".section-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".section-tab").forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");

    const target = tab.dataset.section;
    Object.entries(sections).forEach(([key, el]) => {
      el.hidden = key !== target;
    });

    if (sectionRenderers[target] && !renderedSections.has(target)) {
      sectionRenderers[target]();
      renderedSections.add(target);
    }
  });
});
