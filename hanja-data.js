// @purpose  韓国語漢字語と日本語漢字語の音対応パターン学習データ
// WHY: 韓国語と日本語は漢字語彙の割合が高く、パッチム（韻尾）の対応規則さえ覚えれば
// 日本語話者は他言語話者より遥かに速く韓国語漢字語を推測・習得できる。この対応関係自体を
// 独立した学習コンテンツとして扱う（単なる単語暗記ではなく規則の理解を目的とする）。

const HANJA_PATTERNS = [
  {
    id: "g",
    pattern: "パッチム「ㄱ」→ 促音（っ）＋か行",
    explanation: "韓国語のパッチムㄱ（入声）で終わる漢字音は、日本語では「っ」＋か行の音になることが多い。",
    pairs: [
      { hanja: "學校", korean: "학교", japanese: "がっこう", meaning: "学校" },
      { hanja: "國家", korean: "국가", japanese: "こっか", meaning: "国家" },
      { hanja: "目的", korean: "목적", japanese: "もくてき", meaning: "目的" },
      { hanja: "各自", korean: "각자", japanese: "かくじ", meaning: "各自" },
    ],
  },
  {
    id: "l",
    pattern: "パッチム「ㄹ」→ 促音（っ）／つ＋た・ぱ行",
    explanation: "韓国語のパッチムㄹ（入声）で終わる漢字音は、日本語では「つ」、後ろの音によっては促音「っ」になる。",
    pairs: [
      { hanja: "發音", korean: "발음", japanese: "はつおん", meaning: "発音" },
      { hanja: "失敗", korean: "실패", japanese: "しっぱい", meaning: "失敗" },
      { hanja: "結婚", korean: "결혼", japanese: "けっこん", meaning: "結婚" },
      { hanja: "活動", korean: "활동", japanese: "かつどう", meaning: "活動" },
    ],
  },
  {
    id: "m",
    pattern: "パッチム「ㅁ」→ ん",
    explanation: "韓国語のパッチムㅁで終わる漢字音は、日本語では撥音「ん」になる。",
    pairs: [
      { hanja: "感謝", korean: "감사", japanese: "かんしゃ", meaning: "感謝" },
      { hanja: "男女", korean: "남녀", japanese: "だんじょ", meaning: "男女" },
      { hanja: "心理", korean: "심리", japanese: "しんり", meaning: "心理" },
      { hanja: "音樂", korean: "음악", japanese: "おんがく", meaning: "音楽" },
    ],
  },
  {
    id: "n",
    pattern: "パッチム「ㄴ」→ ん",
    explanation: "韓国語のパッチムㄴで終わる漢字音も、日本語では撥音「ん」になる（ㅁと同じ結果になるので区別が必要）。",
    pairs: [
      { hanja: "安全", korean: "안전", japanese: "あんぜん", meaning: "安全" },
      { hanja: "電話", korean: "전화", japanese: "でんわ", meaning: "電話" },
      { hanja: "新聞", korean: "신문", japanese: "しんぶん", meaning: "新聞" },
      { hanja: "運轉", korean: "운전", japanese: "うんてん", meaning: "運転" },
    ],
  },
  {
    id: "ng",
    pattern: "パッチム「ㅇ」→ 長音（う／い）",
    explanation: "韓国語のパッチムㅇ（鼻音ŋ）で終わる漢字音は、日本語では長音になることが多い。",
    pairs: [
      { hanja: "空港", korean: "공항", japanese: "くうこう", meaning: "空港" },
      { hanja: "映畫", korean: "영화", japanese: "えいが", meaning: "映画" },
      { hanja: "放送", korean: "방송", japanese: "ほうそう", meaning: "放送" },
      { hanja: "成功", korean: "성공", japanese: "せいこう", meaning: "成功" },
    ],
  },
  {
    id: "none",
    pattern: "パッチムなし → そのまま対応",
    explanation: "パッチムがない開音節の漢字音は、日本語でも比較的近い形で対応することが多い。",
    pairs: [
      { hanja: "家具", korean: "가구", japanese: "かぐ", meaning: "家具" },
      { hanja: "料理", korean: "요리", japanese: "りょうり", meaning: "料理" },
      { hanja: "地圖", korean: "지도", japanese: "ちず", meaning: "地図" },
      { hanja: "無理", korean: "무리", japanese: "むり", meaning: "無理" },
    ],
  },
  {
    id: "dueum",
    pattern: "頭音法則：語頭の「라/러/로/료/리」「냐/녀」→「나/노/요/이」「야/여」",
    explanation: "同じ漢字でも、単語の一番最初に来るときだけ発音（表記）が変わる韓国語独自の規則。ㄹで始まる漢字音は語頭でㄴまたはㅇに、ㄴ＋야行の漢字音は語頭でㅇに変わる。単語の途中（二文字目以降）では元の音のまま。日本語の音読みにはこの現象がないため、対応パターンとして知っておくと語頭変化した単語も推測しやすくなる。",
    pairs: [
      { hanja: "女子", korean: "여자（語中: 남녀の녀のまま）", japanese: "じょし", meaning: "女子" },
      { hanja: "老人", korean: "노인（語中: 경로の로のまま）", japanese: "ろうじん", meaning: "老人" },
      { hanja: "理由", korean: "이유（語中: 무리の리のまま）", japanese: "りゆう", meaning: "理由" },
      { hanja: "良心", korean: "양심（語中: 불량の량のまま）", japanese: "りょうしん", meaning: "良心" },
      { hanja: "樂園", korean: "낙원（語中: 쾌락の락のまま）", japanese: "らくえん", meaning: "楽園" },
      { hanja: "歷史", korean: "역사（語中: 경력の력のまま）", japanese: "れきし", meaning: "歴史" },
    ],
  },
];
