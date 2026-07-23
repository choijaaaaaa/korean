// @purpose  韓国語の二つの数詞体系（固有語数詞・漢字語数詞）と助数詞（単位名詞）の学習データ
// WHY: 韓国語には日本語と同じ「二つの数え方」があるが、どちらをいつ使うかの規則が日本語と微妙に異なり、
// 初級者が最もつまずきやすいポイントの一つ。助数詞ごとにどちらの数詞と組み合わさるかも合わせて整理する。

const NUMBER_SYSTEMS = [
  {
    id: "native",
    name: "固有語数詞（純ハングル数詞）",
    usage: "物の個数、年齢、時刻の「時」、人数などを数えるときに使う。99までしかなく、100以上は漢字語数詞を使う。",
    numbers: [
      { hangul: "하나（한）", value: "1" }, { hangul: "둘（두）", value: "2" },
      { hangul: "셋（세）", value: "3" }, { hangul: "넷（네）", value: "4" },
      { hangul: "다섯", value: "5" }, { hangul: "여섯", value: "6" },
      { hangul: "일곱", value: "7" }, { hangul: "여덟", value: "8" },
      { hangul: "아홉", value: "9" }, { hangul: "열", value: "10" },
      { hangul: "스물（스무）", value: "20" }, { hangul: "서른", value: "30" },
      { hangul: "마흔", value: "40" }, { hangul: "쉰", value: "50" },
      { hangul: "예순", value: "60" }, { hangul: "일흔", value: "70" },
      { hangul: "여든", value: "80" }, { hangul: "아흔", value: "90" },
    ],
    note: "括弧内は助数詞の直前に来るときの形（例: 한 개＝1個、두 명＝2人、세 시＝3時、스무 살＝20歳）。1〜4と20だけ形が変わることに注意。",
  },
  {
    id: "sino",
    name: "漢字語数詞",
    usage: "日付、金額、分・秒、電話番号、階数、番号など。100以上の数はすべてこちら。",
    numbers: [
      { hangul: "일", value: "1" }, { hangul: "이", value: "2" },
      { hangul: "삼", value: "3" }, { hangul: "사", value: "4" },
      { hangul: "오", value: "5" }, { hangul: "육", value: "6" },
      { hangul: "칠", value: "7" }, { hangul: "팔", value: "8" },
      { hangul: "구", value: "9" }, { hangul: "십", value: "10" },
      { hangul: "백", value: "100" }, { hangul: "천", value: "1,000" },
      { hangul: "만", value: "10,000" }, { hangul: "십만", value: "100,000" },
      { hangul: "백만", value: "1,000,000" }, { hangul: "억", value: "100,000,000" },
      { hangul: "조", value: "1,000,000,000,000" },
    ],
    note: "日本語と違い「일만（1万）」ではなく「만」だけで1万を表す。ただし「일억（1億）」は「억」だけでもよいが「일억」の形もよく使われる。金額は必ず漢字語数詞＋「원」。",
  },
];

const COUNTERS = [
  { word: "개", meaning: "〜個（物全般）", numberType: "native", example: "사과 세 개（りんご3個）" },
  { word: "명 / 분", meaning: "〜名（분は敬語）", numberType: "native", example: "학생 두 명（学生2名）／ 손님 세 분（お客様3名様）" },
  { word: "마리", meaning: "〜匹・頭・羽（動物）", numberType: "native", example: "강아지 한 마리（子犬1匹）" },
  { word: "장", meaning: "〜枚（紙・写真・チケット等）", numberType: "sino又は固有語", example: "종이 다섯 장（紙5枚）" },
  { word: "권", meaning: "〜冊（本）", numberType: "native", example: "책 두 권（本2冊）" },
  { word: "대", meaning: "〜台（車・機械・電子機器）", numberType: "native", example: "자동차 한 대（車1台）" },
  { word: "벌", meaning: "〜着（服のセット）", numberType: "native", example: "정장 한 벌（スーツ1着）" },
  { word: "켤레", meaning: "〜足（靴・靴下等ペアのもの）", numberType: "native", example: "신발 두 켤레（靴2足）" },
  { word: "그릇", meaning: "〜杯（器に入った料理）", numberType: "native", example: "밥 한 그릇（ご飯1杯）" },
  { word: "잔", meaning: "〜杯（飲み物）", numberType: "native", example: "커피 두 잔（コーヒー2杯）" },
  { word: "병", meaning: "〜本（瓶）", numberType: "native", example: "맥주 세 병（ビール3本）" },
  { word: "살", meaning: "〜歳", numberType: "native", example: "스무 살（20歳）" },
  { word: "시 / 분 / 초", meaning: "〜時／〜分／〜秒", numberType: "시=固有語、분・초=漢字語", example: "세 시 십오 분（3時15分）" },
  { word: "층", meaning: "〜階", numberType: "sino", example: "삼 층（3階）" },
  { word: "번", meaning: "〜回／〜番", numberType: "native（回）・sino（番）", example: "세 번（3回）／ 삼 번（3番）" },
  { word: "달 / 개월", meaning: "〜か月", numberType: "달=固有語、개월=漢字語", example: "세 달 ＝ 삼 개월（3か月）" },
  { word: "년", meaning: "〜年間・〜年（西暦）", numberType: "sino", example: "이천이십육 년（2026年）" },
  { word: "채", meaning: "〜軒（家・建物）", numberType: "native", example: "집 한 채（家1軒）" },
  { word: "통", meaning: "〜通（手紙・電話）", numberType: "native", example: "편지 두 통（手紙2通）" },
  { word: "곡", meaning: "〜曲", numberType: "sino", example: "노래 삼 곡（歌3曲）" },
  { word: "번째", meaning: "〜番目（順番）", numberType: "native", example: "첫 번째（1番目）／ 두 번째（2番目）" },
  { word: "인분", meaning: "〜人前（食事の量）", numberType: "sino", example: "삼겹살 이 인분（サムギョプサル2人前）" },
  { word: "학년", meaning: "〜年生（学年）", numberType: "sino", example: "삼 학년（3年生）" },
];
