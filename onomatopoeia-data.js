// @purpose  韓国語の擬声語（音を表す語）・擬態語（様子を表す語）学習データ
// WHY: 韓国語は日本語よりもさらに豊富な擬声語・擬態語の体系を持ち、対応する日本語表現がない場合も多い。
// 単語一つでは体系的に学びにくいため、意味カテゴリー別にまとめて練習できるようにする。

const ONOMATOPOEIA = [
  {
    id: "sound-animal",
    theme: "擬声語：動物の鳴き声",
    items: [
      { word: "멍멍", katakana: "モンモン", meaning: "ワンワン（犬の鳴き声）" },
      { word: "야옹", katakana: "ヤオン", meaning: "ニャー（猫の鳴き声）" },
      { word: "꼬끼오", katakana: "コッキオ", meaning: "コケコッコー（鶏の鳴き声）" },
      { word: "음매", katakana: "ウムメ", meaning: "モー（牛の鳴き声）" },
      { word: "짹짹", katakana: "チェクチェク", meaning: "チュンチュン（小鳥の鳴き声）" },
      { word: "개굴개굴", katakana: "ケグルケグル", meaning: "ケロケロ（カエルの鳴き声）" },
    ],
  },
  {
    id: "sound-object",
    theme: "擬声語：物・状況の音",
    items: [
      { word: "똑똑", katakana: "トクトク", meaning: "コンコン（ドアをノックする音）" },
      { word: "쿵쿵", katakana: "クンクン", meaning: "ドンドン（重い物が落ちる・足音の音）" },
      { word: "쨍그랑", katakana: "チェングラン", meaning: "ガチャン（ガラスや陶器が割れる音）" },
      { word: "삐걱삐걱", katakana: "ピゴクピゴク", meaning: "ギシギシ（木や床が軋む音）" },
      { word: "부글부글", katakana: "プグルプグル", meaning: "グツグツ（水が沸騰する音）" },
      { word: "철벅철벅", katakana: "チョルボクチョルボク", meaning: "ピチャピチャ（水しぶきの音）" },
      { word: "우르릉", katakana: "ウルルン", meaning: "ゴロゴロ（雷の音）" },
      { word: "딸랑딸랑", katakana: "タルランタルラン", meaning: "チリンチリン（鈴の音）" },
    ],
  },
  {
    id: "mimetic-motion",
    theme: "擬態語：動き・様子",
    items: [
      { word: "반짝반짝", katakana: "パンチャクパンチャク", meaning: "キラキラ（輝く様子）" },
      { word: "흔들흔들", katakana: "フンドゥルフンドゥル", meaning: "ゆらゆら（揺れる様子）" },
      { word: "뒤뚱뒤뚱", katakana: "ティトゥンティトゥン", meaning: "よちよち（不安定に歩く様子、アヒル歩き）" },
      { word: "데굴데굴", katakana: "テグルテグル", meaning: "コロコロ（転がる様子）" },
      { word: "느릿느릿", katakana: "ヌリンヌリッ", meaning: "のろのろ（動きが遅い様子）" },
      { word: "뭉게뭉게", katakana: "ムンゲムンゲ", meaning: "もくもく（雲が湧き上がる様子）" },
      { word: "알록달록", katakana: "アルロクタルロク", meaning: "色とりどり、カラフルな様子" },
    ],
  },
  {
    id: "mimetic-feeling",
    theme: "擬態語：気持ち・状態",
    items: [
      { word: "두근두근", katakana: "トゥグントゥグン", meaning: "ドキドキ（緊張・興奮で胸が高鳴る様子）" },
      { word: "조마조마", katakana: "チョマジョマ", meaning: "ハラハラ（不安で落ち着かない様子）" },
      { word: "쭈뼛쭈뼛", katakana: "チュビョッチュビョッ", meaning: "もじもじ（恥ずかしがってためらう様子）" },
      { word: "대충대충", katakana: "テチュンテチュン", meaning: "適当に、いい加減に（雑に済ませる様子）" },
      { word: "방긋방긋", katakana: "パングッパングッ", meaning: "にこにこ（明るく微笑む様子）" },
      { word: "씩씩", katakana: "シクシク", meaning: "ハアハア（怒りや興奮で荒く息をする様子）" },
    ],
  },
];
