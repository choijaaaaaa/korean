// @purpose  韓国語敬語（尊敬語・謙譲語の語彙置き換え）と話者待遇（話体）の学習データ
// WHY: 日本語の敬語は「相対敬語」（相手との関係で変わる）だが、韓国語は目上の人には
// 常に敬語を使う「絶対敬語」に近い性質を持つ。この構造の違いと、-시-のような文法規則だけでなく
// 単語自体が丸ごと置き換わる語彙敬語（尊敬語・謙譲語）は別立てで整理する必要がある。

const SPEECH_LEVELS = [
  {
    name: "합쇼체（합니다体）",
    usage: "最も格式が高い丁寧体。ニュース、発表、軍隊、接客業などで使う。",
    example: "감사합니다. / 안녕하십니까?",
  },
  {
    name: "해요체（해요体）",
    usage: "最も一般的な丁寧体。日常会話・教科書の基本形。初対面や目上の人にも使える万能な文体。",
    example: "감사해요. / 안녕하세요?",
  },
  {
    name: "해체（반말）",
    usage: "親しい友人・年下・親しい家族に使うタメ口。目上の人に使うと失礼にあたる。",
    example: "고마워. / 안녕?",
  },
  {
    name: "해라체（하라体）",
    usage: "書き言葉（新聞見出し、本の指示文、アプリのボタンなど）や、親が子に使う古風なタメ口。会話ではあまり使わない。",
    example: "감사히 받아라. / 여기를 눌러라.",
  },
];

const HONORIFIC_WORDS = [
  {
    id: "subject",
    name: "尊敬語（主体を高める語彙）",
    explanation: "目上の人の動作・状態そのものを高めて表現する、単語自体が入れ替わる敬語。日本語の尊敬語（いらっしゃる、召し上がる等）に近い。",
    pairs: [
      { casual: "있다", honorific: "계시다", meaning: "いらっしゃる（居る）" },
      { casual: "없다", honorific: "안 계시다", meaning: "いらっしゃらない（居ない）" },
      { casual: "먹다/마시다", honorific: "드시다 / 잡수시다", meaning: "召し上がる" },
      { casual: "자다", honorific: "주무시다", meaning: "お休みになる" },
      { casual: "말하다", honorific: "말씀하시다", meaning: "おっしゃる" },
      { casual: "죽다", honorific: "돌아가시다", meaning: "お亡くなりになる" },
      { casual: "아프다", honorific: "편찮으시다", meaning: "ご気分がすぐれない" },
      { casual: "이름", honorific: "성함", meaning: "お名前" },
      { casual: "나이", honorific: "연세", meaning: "お年" },
      { casual: "집", honorific: "댁", meaning: "お宅" },
      { casual: "생일", honorific: "생신", meaning: "お誕生日" },
      { casual: "병", honorific: "병환", meaning: "ご病気" },
      { casual: "사람", honorific: "분", meaning: "方（かた）" },
      { casual: "밥", honorific: "진지", meaning: "お食事" },
    ],
  },
  {
    id: "object",
    name: "謙譲語（自分を低めて相手を高める語彙）",
    explanation: "自分の動作をへりくだって表現することで、間接的に相手（動作の対象）を高める敬語。日本語の謙譲語（申す、伺う等）に近い。",
    pairs: [
      { casual: "주다", honorific: "드리다", meaning: "差し上げる" },
      { casual: "묻다", honorific: "여쭈다 / 여쭙다", meaning: "お伺いする（尋ねる）" },
      { casual: "만나다（目上の人に）", honorific: "뵙다 / 뵈다", meaning: "お目にかかる" },
      { casual: "데리고 가다", honorific: "모시고 가다", meaning: "お連れする" },
      { casual: "나 / 저", honorific: "저", meaning: "私（謙譲の一人称）" },
      { casual: "우리", honorific: "저희", meaning: "私ども（謙譲の一人称複数）" },
    ],
  },
];
