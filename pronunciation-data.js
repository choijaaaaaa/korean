// @purpose  韓国語の代表的な発音変化規則データ（表記と実際の発音が異なるケースを集中的に扱う）
// WHY: ハングルは表音文字だが、パッチムの後に続く音によって実際の発音が表記と変わる規則が多く、
// 日本語話者はここでつまずきやすいため、単語学習とは別に規則単位でまとめて練習できるようにする。

const PRONUNCIATION_RULES = [
  { name: "連音化（れんおんか）", explanation: "パッチムの後に母音で始まる助詞・語尾が続くと、パッチムが次の音節の初声として発音される。",
    examples: [
      { written: "책이", pronounced: "채기", meaning: "本が" },
      { written: "옷을", pronounced: "오슬", meaning: "服を" },
      { written: "밥은", pronounced: "바븐", meaning: "ご飯は" },
      { written: "안에", pronounced: "아네", meaning: "中に" },
      { written: "집에", pronounced: "지베", meaning: "家に" },
      { written: "꽃이", pronounced: "꼬치", meaning: "花が" },
      { written: "있어요", pronounced: "이써요", meaning: "あります" },
      { written: "읽어요", pronounced: "일거요", meaning: "読みます" }
    ] },
  { name: "激音化（げきおんか）", explanation: "パッチムㅎと、ㄱ・ㄷ・ㅂ・ㅈで始まる音が隣り合うと、激音（ㅋ・ㅌ・ㅍ・ㅊ）になる。",
    examples: [
      { written: "좋다", pronounced: "조타", meaning: "良い" },
      { written: "축하", pronounced: "추카", meaning: "祝賀" },
      { written: "입학", pronounced: "이팍", meaning: "入学" },
      { written: "못하다", pronounced: "모타다", meaning: "できない" },
      { written: "백화점", pronounced: "배콰점", meaning: "百貨店" },
      { written: "국화", pronounced: "구콰", meaning: "菊（国花）" },
      { written: "어떻게", pronounced: "어떠케", meaning: "どのように" },
      { written: "그렇지", pronounced: "그러치", meaning: "そうだね" }
    ] },
  { name: "濃音化（のうおんか）", explanation: "パッチムㄱ・ㄷ・ㅂの後にㄱ・ㄷ・ㅂ・ㅅ・ㅈが続くと、濃音（ㄲ・ㄸ・ㅃ・ㅆ・ㅉ）になる。",
    examples: [
      { written: "학교", pronounced: "학꾜", meaning: "学校" },
      { written: "잡지", pronounced: "잡찌", meaning: "雑誌" },
      { written: "식당", pronounced: "식땅", meaning: "食堂" },
      { written: "국밥", pronounced: "국빱", meaning: "クッパ" },
      { written: "듣기", pronounced: "듣끼", meaning: "聞き取り" },
      { written: "몹시", pronounced: "몹씨", meaning: "非常に" },
      { written: "젓가락", pronounced: "저까락", meaning: "箸" },
      { written: "숫자", pronounced: "숟짜", meaning: "数字" }
    ] },
  { name: "鼻音化（びおんか）", explanation: "パッチムㄱ・ㄷ・ㅂの後にㄴ・ㅁが続くと、それぞれㅇ・ㄴ・ㅁに変わる。",
    examples: [
      { written: "국물", pronounced: "궁물", meaning: "スープ" },
      { written: "몇 명", pronounced: "면 명", meaning: "何名" },
      { written: "십 년", pronounced: "심 년", meaning: "十年" },
      { written: "작년", pronounced: "장년", meaning: "去年" },
      { written: "앞문", pronounced: "암문", meaning: "正面の門" },
      { written: "한국말", pronounced: "한궁말", meaning: "韓国語" },
      { written: "합니다", pronounced: "함니다", meaning: "します（丁寧形）" },
      { written: "십만", pronounced: "심만", meaning: "十万" }
    ] },
  { name: "流音化（りゅうおんか）", explanation: "ㄴとㄹが隣り合うと、どちらも「ㄹㄹ」で発音される。",
    examples: [
      { written: "신라", pronounced: "실라", meaning: "新羅" },
      { written: "논리", pronounced: "놀리", meaning: "論理" },
      { written: "설날", pronounced: "설랄", meaning: "旧正月" },
      { written: "관람", pronounced: "괄람", meaning: "観覧" },
      { written: "전라도", pronounced: "절라도", meaning: "全羅道" },
      { written: "연락", pronounced: "열락", meaning: "連絡" },
      { written: "원래", pronounced: "월래", meaning: "元来・もともと" }
    ] },
  { name: "ㅎ弱化・脱落", explanation: "パッチムㅎの後に母音が続くと、ㅎの音がほぼ聞こえなくなる（弱化・脱落する）。",
    examples: [
      { written: "좋아요", pronounced: "조아요", meaning: "良いです" },
      { written: "많아요", pronounced: "마나요", meaning: "多いです" },
      { written: "넣어요", pronounced: "너어요", meaning: "入れます" },
      { written: "놓아요", pronounced: "노아요", meaning: "置きます" },
      { written: "좋은", pronounced: "조은", meaning: "良い（連体形）" },
      { written: "싫어요", pronounced: "시러요", meaning: "嫌です" },
      { written: "낳아요", pronounced: "나아요", meaning: "産みます" }
    ] },
  { name: "口蓋音化（こうがいおんか）", explanation: "パッチムㄷ・ㅌの後に「이」が続くと、ㅈ・ㅊの音に変わる。",
    examples: [
      { written: "굳이", pronounced: "구지", meaning: "あえて" },
      { written: "같이", pronounced: "가치", meaning: "一緒に" },
      { written: "붙이다", pronounced: "부치다", meaning: "貼る" },
      { written: "해돋이", pronounced: "해도지", meaning: "日の出" },
      { written: "미닫이", pronounced: "미다지", meaning: "引き戸" },
      { written: "닫히다", pronounced: "다치다", meaning: "閉められる" }
    ] },
  { name: "二重パッチムの発音", explanation: "パッチムが二つの子音からなる場合、後ろに何も続かないときはどちらか一方だけが発音される。",
    examples: [
      { written: "값", pronounced: "갑", meaning: "値段" },
      { written: "앉다", pronounced: "안따", meaning: "座る" },
      { written: "없다", pronounced: "업따", meaning: "ない" },
      { written: "닭", pronounced: "닥", meaning: "鶏" },
      { written: "여덟", pronounced: "여덜", meaning: "八つ" },
      { written: "몫", pronounced: "목", meaning: "取り分" },
      { written: "넓다", pronounced: "널따", meaning: "広い" },
      { written: "젊다", pronounced: "점따", meaning: "若い" }
    ] },
];
