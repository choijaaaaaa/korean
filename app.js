// @purpose  単語一覧の描画、級/検索フィルタリング、カードモード、カタカナ発音表示切り替え、韓国語TTS再生
// WHY: バックエンドがないため、発音再生はブラウザ内蔵のWeb Speech API（speechSynthesis）で処理する。

const state = {
  level: "ALL",
  query: "",
  mode: "card", // "card" | "list"
  order: VOCAB.map((_, i) => i),
  cardIndex: 0,
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

function buildQuizCard(word) {
  const node = quizTemplate.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = `${word.level}級`;
  badge.dataset.level = word.level;

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

// ---------- 文法パターンセクション ----------

const grammarState = { level: "ALL" };

function renderGrammarPatterns() {
  const listEl = document.getElementById("grammar-list");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const filtered = GRAMMAR.filter((g) => grammarState.level === "ALL" || g.level === grammarState.level);

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

// ---------- 発音規則セクション ----------

function renderPronunciationRules() {
  const listEl = document.getElementById("pronunciation-list");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  PRONUNCIATION_RULES.forEach((rule) => {
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
    rule.examples.forEach((ex) => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="example-pair-ko">${escapeHtml(ex.written)} → [${escapeHtml(ex.pronounced)}]</span>
        <span class="example-pair-ja">${escapeHtml(ex.meaning)}</span>`;
      exampleList.appendChild(li);
    });
    card.appendChild(exampleList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
}

// ---------- 不規則活用セクション ----------

function renderIrregulars() {
  const listEl = document.getElementById("irregular-list");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  IRREGULARS.forEach((group) => {
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
    group.examples.forEach((ex) => {
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
}

// ---------- 敬語セクション ----------

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
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  HONORIFIC_WORDS.forEach((group) => {
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
    group.pairs.forEach((pair) => {
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
}

// ---------- 新造語・流行語セクション ----------

function renderSlang() {
  const listEl = document.getElementById("slang-list");
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();

  SLANG.forEach((group) => {
    const card = document.createElement("article");
    card.className = "pattern-card";

    const title = document.createElement("h3");
    title.textContent = group.era;
    card.appendChild(title);

    const termList = document.createElement("ul");
    termList.className = "slang-term-list";
    group.terms.forEach((t) => {
      const li = document.createElement("li");
      li.className = "slang-term-item";
      li.innerHTML = `<div class="slang-term-head">
          <span class="hanja-korean">${escapeHtml(t.term)}</span>
          <span class="katakana-reading slang-katakana">${escapeHtml(t.katakana)}</span>
        </div>
        <p class="meaning">${escapeHtml(t.meaning)}</p>
        <p class="pattern-explanation">${escapeHtml(t.origin)}</p>
        <p class="example-ko">${escapeHtml(t.example)}</p>`;
      termList.appendChild(li);
    });
    card.appendChild(termList);

    fragment.appendChild(card);
  });

  listEl.appendChild(fragment);
}

// ---------- セクション切り替え ----------

const sections = {
  word: document.getElementById("word-section"),
  hanja: document.getElementById("hanja-section"),
  grammar: document.getElementById("grammar-section"),
  pronunciation: document.getElementById("pronunciation-section"),
  irregular: document.getElementById("irregular-section"),
  honorific: document.getElementById("honorific-section"),
  slang: document.getElementById("slang-section"),
};

const sectionRenderers = {
  hanja: renderHanjaPatterns,
  grammar: renderGrammarPatterns,
  pronunciation: renderPronunciationRules,
  irregular: renderIrregulars,
  honorific: renderHonorifics,
  slang: renderSlang,
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
