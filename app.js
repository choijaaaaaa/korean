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
      word.reading.toLowerCase().includes(query) ||
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
    li.textContent = `${item.word}(${item.reading}) — ${item.meaning}`;
    listEl.appendChild(li);
  });
}

function buildWordCard(word) {
  const node = template.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = `${word.level}級`;
  badge.dataset.level = word.level;

  node.querySelector(".hangul").textContent = word.hangul;
  node.querySelector(".reading").textContent = word.reading;
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
  node.querySelector(".hangul-reading").textContent = `(${word.reading})`;
  node.querySelector(".example-ko").innerHTML = highlightExample(word.example, word.hangul);
  node.querySelector(".example-reading").textContent = `(${word.exampleReading})`;

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
