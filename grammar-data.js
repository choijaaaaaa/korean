// @purpose  TOPIK初級〜中級の韓国語基礎文法パターン学習データ（日本語話者向け解説）

const GRAMMAR = [
  { level: "1", pattern: "-이에요/예요", title: "〜です（丁寧な断定）",
    explanation: "名詞について丁寧に「〜です」と言うときに使う。パッチムがある名詞には「이에요」、ない名詞には「예요」をつける。",
    examples: [
      { korean: "저는 학생이에요.", japanese: "私は学生です。" },
      { korean: "이건 커피예요.", japanese: "これはコーヒーです。" }
    ] },
  { level: "1", pattern: "-이/가", title: "〜が（主格助詞）",
    explanation: "主語を表す助詞。パッチムがある名詞には「이」、ない名詞には「가」をつける。",
    examples: [
      { korean: "친구가 와요.", japanese: "友達が来ます。" },
      { korean: "책이 있어요.", japanese: "本があります。" }
    ] },
  { level: "1", pattern: "-은/는", title: "〜は（主題助詞）",
    explanation: "主題・対比を表す助詞。パッチムがある名詞には「은」、ない名詞には「는」をつける。",
    examples: [
      { korean: "저는 한국어를 배워요.", japanese: "私は韓国語を習っています。" },
      { korean: "오늘은 바빠요.", japanese: "今日は忙しいです。" }
    ] },
  { level: "1", pattern: "-을/를", title: "〜を（目的格助詞）",
    explanation: "目的語を表す助詞。パッチムがある名詞には「을」、ない名詞には「를」をつける。",
    examples: [
      { korean: "밥을 먹어요.", japanese: "ご飯を食べます。" },
      { korean: "영화를 봐요.", japanese: "映画を見ます。" }
    ] },
  { level: "1", pattern: "-에", title: "〜に（場所・時間）",
    explanation: "存在の場所、行き先、時間を表す助詞。",
    examples: [
      { korean: "학교에 가요.", japanese: "学校に行きます。" },
      { korean: "세 시에 만나요.", japanese: "3時に会いましょう。" }
    ] },
  { level: "1", pattern: "-에서", title: "〜で（動作の場所）",
    explanation: "動作が行われる場所を表す助詞。「에」は存在・到着点、「에서」は動作の場所という違いがある。",
    examples: [
      { korean: "식당에서 밥을 먹어요.", japanese: "食堂でご飯を食べます。" },
      { korean: "집에서 쉬어요.", japanese: "家で休みます。" }
    ] },
  { level: "1", pattern: "-도", title: "〜も",
    explanation: "「〜も」に相当する助詞。他の助詞（이/가、을/를など）の代わりに使われる。",
    examples: [
      { korean: "저도 가요.", japanese: "私も行きます。" },
      { korean: "이것도 주세요.", japanese: "これもください。" }
    ] },
  { level: "1", pattern: "-하고/-와/-과", title: "〜と",
    explanation: "名詞を並列するときの助詞。「하고」は話し言葉、「와/과」は書き言葉でよく使われる（와はパッチムなし、과はパッチムあり）。",
    examples: [
      { korean: "친구하고 영화를 봐요.", japanese: "友達と映画を見ます。" },
      { korean: "빵과 우유를 샀어요.", japanese: "パンと牛乳を買いました。" }
    ] },
  { level: "1", pattern: "-고 싶다", title: "〜したい",
    explanation: "動詞の語幹について希望を表す。",
    examples: [
      { korean: "한국에 가고 싶어요.", japanese: "韓国に行きたいです。" },
      { korean: "쉬고 싶어요.", japanese: "休みたいです。" }
    ] },
  { level: "1", pattern: "-고 있다", title: "〜している（進行）",
    explanation: "動作の進行・継続を表す。",
    examples: [
      { korean: "지금 밥을 먹고 있어요.", japanese: "今ご飯を食べています。" },
      { korean: "한국어를 공부하고 있어요.", japanese: "韓国語を勉強しています。" }
    ] },
  { level: "1", pattern: "-지 않다", title: "〜ない（否定）",
    explanation: "動詞・形容詞の語幹について否定を表す。「안 + 動詞」の形と同じ意味だが、こちらの方がやや書き言葉的。",
    examples: [
      { korean: "오늘은 바쁘지 않아요.", japanese: "今日は忙しくないです。" },
      { korean: "매워서 먹지 않아요.", japanese: "辛いので食べません。" }
    ] },
  { level: "2", pattern: "-(으)ㄹ 거예요", title: "〜するつもりです／〜でしょう（未来・推量）",
    explanation: "未来の予定や推量を表す。パッチムがある語幹には「을 거예요」、ない語幹には「ㄹ 거예요」をつける。",
    examples: [
      { korean: "내일 만날 거예요.", japanese: "明日会うつもりです。" },
      { korean: "비가 올 거예요.", japanese: "雨が降るでしょう。" }
    ] },
  { level: "1", pattern: "-았/었-", title: "〜た（過去形）",
    explanation: "語幹の最後の母音がㅏ、ㅗのときは「았」、それ以外は「었」をつける。하다は「했다」になる。",
    examples: [
      { korean: "어제 영화를 봤어요.", japanese: "昨日映画を見ました。" },
      { korean: "밥을 먹었어요.", japanese: "ご飯を食べました。" }
    ] },
  { level: "1", pattern: "-(으)세요", title: "〜してください（依頼・尊敬の命令）",
    explanation: "丁寧な命令・依頼を表す。尊敬の意味も含む。",
    examples: [
      { korean: "여기 앉으세요.", japanese: "ここに座ってください。" },
      { korean: "천천히 말씀하세요.", japanese: "ゆっくりお話しください。" }
    ] },
  { level: "2", pattern: "-(으)ㄹ까요?", title: "〜しましょうか（提案・推量）",
    explanation: "相手の意向を尋ねたり、一緒に何かをする提案をするときに使う。",
    examples: [
      { korean: "같이 갈까요?", japanese: "一緒に行きましょうか。" },
      { korean: "뭘 먹을까요?", japanese: "何を食べましょうか。" }
    ] },
  { level: "1", pattern: "-(으)ㅂ시다", title: "〜しましょう（勧誘）",
    explanation: "相手に一緒に何かをすることを勧める表現。目上の人には使わない方がよい。",
    examples: [
      { korean: "같이 점심 먹읍시다.", japanese: "一緒に昼ご飯を食べましょう。" },
      { korean: "이제 시작합시다.", japanese: "さあ始めましょう。" }
    ] },
  { level: "2", pattern: "-지만", title: "〜だが／〜けれど（逆接）",
    explanation: "前の内容と対立・対比する内容を続けるときに使う。",
    examples: [
      { korean: "비싸지만 맛있어요.", japanese: "高いけどおいしいです。" },
      { korean: "피곤하지만 괜찮아요.", japanese: "疲れているけど大丈夫です。" }
    ] },
  { level: "2", pattern: "-아서/어서", title: "〜ので／〜て（理由・順序）",
    explanation: "理由や動作の先後関係を表す。語幹の母音がㅏ、ㅗのときは「아서」、それ以外は「어서」。",
    examples: [
      { korean: "배가 고파서 밥을 먹었어요.", japanese: "お腹が空いたのでご飯を食べました。" },
      { korean: "친구를 만나서 이야기했어요.", japanese: "友達に会って話しました。" }
    ] },
  { level: "2", pattern: "-(으)면", title: "〜れば／〜たら（条件）",
    explanation: "仮定・条件を表す。パッチムがある語幹には「으면」、ない語幹には「면」をつける。",
    examples: [
      { korean: "시간이 있으면 연락하세요.", japanese: "時間があれば連絡してください。" },
      { korean: "날씨가 좋으면 산책해요.", japanese: "天気がよければ散歩します。" }
    ] },
  { level: "2", pattern: "-기 전에 / -(으)ㄴ 후에", title: "〜する前に／〜した後に",
    explanation: "動作の前後関係を表す表現。「기 전에」は動詞の語幹にそのままつき、「(으)ㄴ 후에」は過去連体形の後につく。",
    examples: [
      { korean: "밥을 먹기 전에 손을 씻어요.", japanese: "ご飯を食べる前に手を洗います。" },
      { korean: "숙제를 한 후에 놀아요.", japanese: "宿題をした後に遊びます。" }
    ] },
];
