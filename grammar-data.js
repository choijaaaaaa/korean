// @purpose  TOPIK1級〜6級の韓国語文法パターン・助詞学習データ（日本語話者向け解説）
// WHY: levelはTOPIKの実級（1〜6）に対応させている。助詞は基本的なものから難易度順に各級へ配置。

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

  // ---------- 助詞（助詞パターンまとめ） ----------
  { level: "2", pattern: "-부터/-까지", title: "〜から／〜まで",
    explanation: "範囲の始点・終点を表す助詞。時間・場所どちらにも使える。",
    examples: [
      { korean: "아홉 시부터 여섯 시까지 일해요.", japanese: "9時から6時まで働きます。" },
      { korean: "여기부터 저기까지가 공원이에요.", japanese: "ここからそこまでが公園です。" }
    ] },
  { level: "2", pattern: "-만", title: "〜だけ／〜のみ",
    explanation: "限定を表す助詞。他の助詞の代わりに直接名詞につく。",
    examples: [
      { korean: "저는 커피만 마셔요.", japanese: "私はコーヒーだけ飲みます。" },
      { korean: "오늘만 특별 할인이에요.", japanese: "今日だけ特別割引です。" }
    ] },
  { level: "2", pattern: "-처럼/-같이", title: "〜のように／〜みたいに",
    explanation: "比喩・類似を表す助詞。ほぼ同じ意味で置き換えられる。",
    examples: [
      { korean: "가수처럼 노래를 잘해요.", japanese: "歌手のように歌が上手です。" },
      { korean: "눈같이 하얘요.", japanese: "雪のように白いです。" }
    ] },
  { level: "2", pattern: "-보다", title: "〜より（比較）",
    explanation: "比較の基準を表す助詞。「더」と一緒に使われることが多い。",
    examples: [
      { korean: "여름보다 겨울을 좋아해요.", japanese: "夏より冬が好きです。" },
      { korean: "생각보다 어려워요.", japanese: "思ったより難しいです。" }
    ] },
  { level: "2", pattern: "-(으)로", title: "〜で／〜へ（手段・方向）",
    explanation: "手段・道具・方向・変化の結果などを表す助詞。パッチムがある名詞には「으로」、ない名詞・ㄹパッチムには「로」。",
    examples: [
      { korean: "지하철로 회사에 가요.", japanese: "地下鉄で会社に行きます。" },
      { korean: "왼쪽으로 가세요.", japanese: "左に行ってください。" }
    ] },
  { level: "2", pattern: "-에게/-한테", title: "〜に（人・動物への対象）",
    explanation: "人や動物が動作の対象・受け手であることを表す助詞。「한테」は話し言葉的。",
    examples: [
      { korean: "친구에게 선물을 줬어요.", japanese: "友達にプレゼントをあげました。" },
      { korean: "동생한테 물어봐요.", japanese: "弟に聞いてみます。" }
    ] },
  { level: "3", pattern: "-께", title: "〜に（尊敬の対象）",
    explanation: "「에게/한테」の尊敬形。目上の人に対して使う。",
    examples: [
      { korean: "선생님께 여쭤봤어요.", japanese: "先生にお伺いしました。" },
      { korean: "부모님께 편지를 썼어요.", japanese: "両親にお手紙を書きました。" }
    ] },
  { level: "3", pattern: "-마다", title: "〜ごとに／毎〜",
    explanation: "反復・周期を表す助詞。",
    examples: [
      { korean: "아침마다 운동해요.", japanese: "毎朝運動します。" },
      { korean: "사람마다 생각이 달라요.", japanese: "人によって考えが違います。" }
    ] },
  { level: "3", pattern: "-밖에", title: "〜しか（＋否定）",
    explanation: "「それ以外はない」という限定を表す助詞。必ず否定表現と一緒に使う。",
    examples: [
      { korean: "천 원밖에 없어요.", japanese: "千ウォンしかありません。" },
      { korean: "한 명밖에 안 왔어요.", japanese: "一人しか来ませんでした。" }
    ] },
  { level: "3", pattern: "-이나/나", title: "〜も（数量の多さ）／〜か（選択）",
    explanation: "予想より多い数量への驚きや、複数の選択肢からの選択を表す助詞。",
    examples: [
      { korean: "커피를 세 잔이나 마셨어요.", japanese: "コーヒーを3杯も飲みました。" },
      { korean: "영화나 볼까요?", japanese: "映画でも見ましょうか。" }
    ] },
  { level: "3", pattern: "-(이)라도", title: "〜でも（最低限の選択）",
    explanation: "最善ではないが受け入れられる選択を表す助詞。",
    examples: [
      { korean: "시간이 없으면 전화라도 해요.", japanese: "時間がなければ電話でもしてください。" },
      { korean: "물이라도 좀 주세요.", japanese: "水でも少しください。" }
    ] },
  { level: "4", pattern: "-조차", title: "〜さえ／〜すら",
    explanation: "予想外の程度を強調する助詞。主に否定的な文脈で使う。",
    examples: [
      { korean: "이름조차 몰라요.", japanese: "名前すら知りません。" },
      { korean: "생각조차 하고 싶지 않아요.", japanese: "考えたくもありません。" }
    ] },
  { level: "4", pattern: "-마저", title: "〜まで／〜すら（最後の一つ）",
    explanation: "残っていた最後のものまで含まれることを表す助詞。「조차」と似ているが「最後の一つが」というニュアンスが強い。",
    examples: [
      { korean: "친구마저 나를 떠났어요.", japanese: "友達まで私を離れていきました。" },
      { korean: "비마저 와서 더 우울해요.", japanese: "雨まで降ってもっと憂鬱です。" }
    ] },
  { level: "4", pattern: "-뿐", title: "〜だけ／〜のみ（強調）",
    explanation: "「만」より書き言葉的で強い限定を表す。「-뿐만 아니라」の形でもよく使われる。",
    examples: [
      { korean: "믿을 사람은 너뿐이야.", japanese: "信じられる人はお前だけだ。" },
      { korean: "노력할 뿐이에요.", japanese: "努力するだけです。" }
    ] },
  { level: "5", pattern: "-이야말로", title: "〜こそ",
    explanation: "強調して「まさにこれだ」ということを表す助詞。",
    examples: [
      { korean: "이것이야말로 진짜 문제예요.", japanese: "これこそが本当の問題です。" },
      { korean: "지금이야말로 결단할 때예요.", japanese: "今こそ決断する時です。" }
    ] },

  // ---------- 中級文法（TOPIK 2〜3級） ----------
  { level: "2", pattern: "-는데", title: "〜だが／〜のに（背景説明）",
    explanation: "後ろの内容の背景・状況を説明したり、軽い対比を表す。",
    examples: [
      { korean: "비가 오는데 우산이 없어요.", japanese: "雨が降っているのに傘がありません。" },
      { korean: "맛있는데 조금 비싸요.", japanese: "美味しいけど少し高いです。" }
    ] },
  { level: "2", pattern: "-(으)ㄹ 수 있다/없다", title: "〜できる／〜できない",
    explanation: "可能・不可能を表す表現。",
    examples: [
      { korean: "한국어를 조금 할 수 있어요.", japanese: "韓国語が少しできます。" },
      { korean: "오늘은 갈 수 없어요.", japanese: "今日は行けません。" }
    ] },
  { level: "2", pattern: "-아/어야 하다", title: "〜しなければならない",
    explanation: "義務・必要性を表す。",
    examples: [
      { korean: "숙제를 해야 해요.", japanese: "宿題をしなければなりません。" },
      { korean: "일찍 일어나야 해요.", japanese: "早く起きなければなりません。" }
    ] },
  { level: "2", pattern: "-(으)ㄴ 적이 있다/없다", title: "〜したことがある／ない",
    explanation: "経験の有無を表す。",
    examples: [
      { korean: "제주도에 가 본 적이 있어요.", japanese: "済州島に行ったことがあります。" },
      { korean: "이 음식을 먹어 본 적이 없어요.", japanese: "この料理を食べたことがありません。" }
    ] },
  { level: "2", pattern: "-(으)면서", title: "〜しながら",
    explanation: "二つの動作が同時に行われることを表す。",
    examples: [
      { korean: "음악을 들으면서 공부해요.", japanese: "音楽を聞きながら勉強します。" },
      { korean: "웃으면서 이야기했어요.", japanese: "笑いながら話しました。" }
    ] },
  { level: "2", pattern: "-(으)러", title: "〜しに（目的、移動動詞と共に）",
    explanation: "移動の目的を表す。後ろには가다・오다などの移動動詞が来る。",
    examples: [
      { korean: "밥을 먹으러 식당에 가요.", japanese: "ご飯を食べに食堂に行きます。" },
      { korean: "친구를 만나러 왔어요.", japanese: "友達に会いに来ました。" }
    ] },
  { level: "2", pattern: "-기 때문에", title: "〜だから／〜のために（理由）",
    explanation: "「-아서/어서」よりやや書き言葉的な理由表現。名詞には「때문에」を直接つける。",
    examples: [
      { korean: "비가 오기 때문에 못 나가요.", japanese: "雨が降っているので外出できません。" },
      { korean: "시간이 없기 때문에 서둘러요.", japanese: "時間がないので急ぎます。" }
    ] },
  { level: "2", pattern: "-게 되다", title: "〜することになる／〜するようになる",
    explanation: "状況の変化や結果として、ある状態になったことを表す。",
    examples: [
      { korean: "한국에서 살게 됐어요.", japanese: "韓国で暮らすことになりました。" },
      { korean: "매운 음식을 좋아하게 됐어요.", japanese: "辛い食べ物が好きになりました。" }
    ] },
  { level: "2", pattern: "-(으)ㄴ/는 것 같다", title: "〜のようだ／〜みたいだ（推量）",
    explanation: "推量・柔らかい断定を表す。動詞の現在は「는」、過去は「(으)ㄴ」、形容詞は「(으)ㄴ」につく。",
    examples: [
      { korean: "밖에 비가 오는 것 같아요.", japanese: "外は雨が降っているようです。" },
      { korean: "이 옷이 더 예쁜 것 같아요.", japanese: "この服のほうがかわいいと思います。" }
    ] },
  { level: "2", pattern: "-(으)ㄹ게요", title: "〜します（意志・約束）",
    explanation: "自分の意志や約束を伝える表現。相手への配慮を含む。",
    examples: [
      { korean: "제가 계산할게요.", japanese: "私が会計します。" },
      { korean: "이따가 전화할게요.", japanese: "後で電話します。" }
    ] },

  // ---------- 中上級文法（TOPIK 3〜4級） ----------
  { level: "3", pattern: "-자마자", title: "〜するとすぐに",
    explanation: "ある動作の直後に次の動作が起こることを表す。",
    examples: [
      { korean: "집에 도착하자마자 잠들었어요.", japanese: "家に着くとすぐに寝てしまいました。" },
      { korean: "눈을 뜨자마자 휴대폰을 봐요.", japanese: "目が覚めるとすぐに携帯を見ます。" }
    ] },
  { level: "3", pattern: "-는 동안", title: "〜している間",
    explanation: "ある動作が続いている期間を表す。",
    examples: [
      { korean: "제가 요리하는 동안 청소해 주세요.", japanese: "私が料理している間掃除してください。" },
      { korean: "방학 동안 여행을 갔어요.", japanese: "休みの間旅行に行きました。" }
    ] },
  { level: "3", pattern: "-다가", title: "〜している途中で",
    explanation: "ある動作をしている途中で別の動作・状況に変わることを表す。",
    examples: [
      { korean: "길을 가다가 친구를 만났어요.", japanese: "道を歩いている途中で友達に会いました。" },
      { korean: "티브이를 보다가 잠들었어요.", japanese: "テレビを見ているうちに眠ってしまいました。" }
    ] },
  { level: "3", pattern: "-(으)ㄹ까 봐", title: "〜するかと思って／〜しないか心配で",
    explanation: "心配・不安から来る行動の理由を表す。",
    examples: [
      { korean: "늦을까 봐 택시를 탔어요.", japanese: "遅れるかと思ってタクシーに乗りました。" },
      { korean: "비가 올까 봐 우산을 챙겼어요.", japanese: "雨が降るかもしれないので傘を持ちました。" }
    ] },
  { level: "3", pattern: "-는 대신에", title: "〜する代わりに",
    explanation: "一つの行為・状態を別のものに置き換えることを表す。",
    examples: [
      { korean: "밥 대신에 빵을 먹었어요.", japanese: "ご飯の代わりにパンを食べました。" },
      { korean: "늦게 자는 대신에 늦게 일어나요.", japanese: "遅く寝る代わりに遅く起きます。" }
    ] },
  { level: "3", pattern: "-(으)므로", title: "〜なので（書き言葉的な理由）",
    explanation: "「기 때문에」よりも書き言葉・公式な場でよく使われる理由表現。",
    examples: [
      { korean: "규정을 위반하였으므로 처벌합니다.", japanese: "規定に違反したので処罰します。" },
      { korean: "시간이 부족하므로 서둘러야 해요.", japanese: "時間が不足しているので急がなければなりません。" }
    ] },
  { level: "3", pattern: "-았/었더니", title: "〜したところ／〜したら（発見）",
    explanation: "ある行動をした結果、新しい事実に気づいたことを表す。",
    examples: [
      { korean: "창문을 열었더니 시원해졌어요.", japanese: "窓を開けたら涼しくなりました。" },
      { korean: "일찍 잤더니 개운해요.", japanese: "早く寝たらすっきりしています。" }
    ] },
  { level: "3", pattern: "-는 김에", title: "〜するついでに",
    explanation: "ある行為をする機会を利用して別のことも行うことを表す。",
    examples: [
      { korean: "나가는 김에 편지도 부칠게요.", japanese: "出かけるついでに手紙も出します。" },
      { korean: "청소하는 김에 정리도 했어요.", japanese: "掃除するついでに整理もしました。" }
    ] },
  { level: "3", pattern: "-(으)ㄹ 줄 알다/모르다", title: "〜する方法を知っている／知らない",
    explanation: "能力・方法の有無を表す。「-(으)ㄹ 수 있다」は可能性、「-(으)ㄹ 줄 알다」はやり方を知っていることに焦点がある。",
    examples: [
      { korean: "저는 운전할 줄 알아요.", japanese: "私は運転できます（やり方を知っています）。" },
      { korean: "한자를 쓸 줄 몰라요.", japanese: "漢字を書く方法を知りません。" }
    ] },
  { level: "3", pattern: "-는 대로", title: "〜するとおりに／〜したらすぐに",
    explanation: "動作の直後、または指示・方法どおりであることを表す。",
    examples: [
      { korean: "도착하는 대로 연락할게요.", japanese: "着いたらすぐに連絡します。" },
      { korean: "시키는 대로 했어요.", japanese: "言われたとおりにやりました。" }
    ] },

  // ---------- 上級文法（TOPIK 4〜5級） ----------
  { level: "4", pattern: "-는 반면에", title: "〜する一方で",
    explanation: "対照的な二つの事実を並べて述べる表現。",
    examples: [
      { korean: "값이 싼 반면에 품질이 낮아요.", japanese: "値段が安い一方で品質が低いです。" },
      { korean: "일은 힘든 반면에 보람이 있어요.", japanese: "仕事は大変な一方でやりがいがあります。" }
    ] },
  { level: "4", pattern: "-(으)ㄹ지도 모르다", title: "〜かもしれない",
    explanation: "確信のない推量を表す。",
    examples: [
      { korean: "내일은 비가 올지도 몰라요.", japanese: "明日は雨が降るかもしれません。" },
      { korean: "그 사람은 이미 갔을지도 몰라요.", japanese: "その人はもう行ったかもしれません。" }
    ] },
  { level: "4", pattern: "-는 셈이다", title: "〜も同然だ／〜ようなものだ",
    explanation: "実質的には述べる内容とほぼ同じであることを表す。",
    examples: [
      { korean: "이 정도면 성공한 셈이에요.", japanese: "この程度なら成功したようなものです。" },
      { korean: "거의 다 끝난 셈이에요.", japanese: "ほぼ終わったようなものです。" }
    ] },
  { level: "4", pattern: "-기 마련이다", title: "〜するものだ（当然の理）",
    explanation: "当然の道理・自然な結果であることを表す。",
    examples: [
      { korean: "사람은 누구나 실수하기 마련이에요.", japanese: "人は誰でも間違えるものです。" },
      { korean: "시간이 지나면 잊히기 마련이에요.", japanese: "時間が経てば忘れられるものです。" }
    ] },
  { level: "4", pattern: "-치고", title: "〜としては（例外を示す）",
    explanation: "その範囲に属するものの中では例外的であることを表す。",
    examples: [
      { korean: "초보자치고 잘하네요.", japanese: "初心者にしては上手ですね。" },
      { korean: "겨울 날씨치고 따뜻해요.", japanese: "冬の天気としては暖かいです。" }
    ] },
  { level: "4", pattern: "-다시피", title: "〜するとおり／〜するように",
    explanation: "相手も既に知っている・見ている事実に言及する表現。",
    examples: [
      { korean: "아시다시피 상황이 복잡해요.", japanese: "ご存知のとおり状況が複雑です。" },
      { korean: "보시다시피 다 준비됐어요.", japanese: "ご覧のとおり全部準備できています。" }
    ] },
  { level: "4", pattern: "-는 통에", title: "〜のせいで（騒がしい状況）",
    explanation: "騒がしい・混乱した状況が原因で何かが起こったことを表す。",
    examples: [
      { korean: "아이들이 떠드는 통에 잠을 못 잤어요.", japanese: "子供たちが騒ぐせいで眠れませんでした。" },
      { korean: "정신없는 통에 지갑을 놓고 왔어요.", japanese: "慌てていたせいで財布を忘れてきました。" }
    ] },
  { level: "4", pattern: "-기에", title: "〜なので（書き言葉的）",
    explanation: "理由を表す書き言葉的な表現。会話でも使われる。",
    examples: [
      { korean: "날씨가 좋기에 산책을 했어요.", japanese: "天気が良かったので散歩をしました。" },
      { korean: "궁금하기에 물어봤어요.", japanese: "気になったので聞いてみました。" }
    ] },
  { level: "4", pattern: "-고자", title: "〜しようと（目的、書き言葉）",
    explanation: "「-(으)려고」よりも書き言葉的な目的表現。",
    examples: [
      { korean: "문제를 해결하고자 노력했어요.", japanese: "問題を解決しようと努力しました。" },
      { korean: "사실을 알리고자 이 글을 씁니다.", japanese: "事実を知らせようとこの文章を書きます。" }
    ] },
  { level: "4", pattern: "-(으)되", title: "〜だが、ただし",
    explanation: "前の内容を認めつつ、条件や制限を加える表現。",
    examples: [
      { korean: "참여는 하되 발언은 자제해 주세요.", japanese: "参加はしても発言は控えてください。" },
      { korean: "이해는 하되 동의할 수 없어요.", japanese: "理解はしても同意できません。" }
    ] },

  // ---------- 最上級文法（TOPIK 5〜6級） ----------
  { level: "5", pattern: "-는 한", title: "〜する限り",
    explanation: "条件・範囲の限界を表す。",
    examples: [
      { korean: "제가 아는 한 그건 사실이 아니에요.", japanese: "私が知る限りそれは事実ではありません。" },
      { korean: "포기하지 않는 한 기회는 있어요.", japanese: "諦めない限り機会はあります。" }
    ] },
  { level: "5", pattern: "-는 이상", title: "〜する以上は",
    explanation: "既に決まった状況・事実を前提として、それに従うべきことを表す。",
    examples: [
      { korean: "약속을 한 이상 지켜야 해요.", japanese: "約束をした以上守らなければなりません。" },
      { korean: "여기까지 온 이상 끝까지 해 봐요.", japanese: "ここまで来た以上最後までやってみます。" }
    ] },
  { level: "5", pattern: "-기 나름이다", title: "〜次第だ",
    explanation: "結果が主体の取り組み方・やり方によって決まることを表す。",
    examples: [
      { korean: "성공은 노력하기 나름이에요.", japanese: "成功は努力次第です。" },
      { korean: "생각하기 나름이에요.", japanese: "考え方次第です。" }
    ] },
  { level: "5", pattern: "-는 법이다", title: "〜するものだ（自然の道理）",
    explanation: "「기 마련이다」に似た、当然の道理であることを表す書き言葉的表現。",
    examples: [
      { korean: "노력한 만큼 결과가 나오는 법이에요.", japanese: "努力した分だけ結果が出るものです。" },
      { korean: "세월이 지나면 변하는 법이에요.", japanese: "月日が経てば変わるものです。" }
    ] },
  { level: "5", pattern: "-을 따름이다", title: "〜するばかりだ／〜にすぎない",
    explanation: "それ以外の何もないことを強調する、やや硬い表現。",
    examples: [
      { korean: "감사할 따름이에요.", japanese: "感謝するばかりです。" },
      { korean: "최선을 다할 따름이에요.", japanese: "最善を尽くすだけです。" }
    ] },
  { level: "5", pattern: "-건대", title: "〜すると／〜思うに（意見の前置き）",
    explanation: "自分の考えや判断を述べる前に使う書き言葉的な表現。「내가 보건대」「생각하건대」などの形で使われる。",
    examples: [
      { korean: "제가 보건대 이 계획은 무리예요.", japanese: "私が見る限り、この計画は無理です。" },
      { korean: "생각하건대 다른 방법이 있을 거예요.", japanese: "思うに、別の方法があるはずです。" }
    ] },
  { level: "5", pattern: "-나 보다/-는가 보다", title: "〜みたいだ（他者の様子からの推量）",
    explanation: "自分が直接体験していないことを、外部の様子から推量する表現。",
    examples: [
      { korean: "밖이 시끄러운 걸 보니 무슨 일이 있나 봐요.", japanese: "外がうるさいのを見ると何かあるみたいです。" },
      { korean: "얼굴이 안 좋은 걸 보니 아픈가 봐요.", japanese: "顔色が悪いのを見ると具合が悪いみたいです。" }
    ] },
  { level: "5", pattern: "-느니", title: "〜するよりは（むしろ）",
    explanation: "二つの選択肢のうち、どちらもよくないが、あえて選ぶならという意味を表す。",
    examples: [
      { korean: "이렇게 사느니 차라리 떠나겠어요.", japanese: "こうして生きるよりはむしろ去ります。" },
      { korean: "포기하느니 끝까지 해 볼게요.", japanese: "諦めるよりは最後までやってみます。" }
    ] },
  { level: "5", pattern: "-기는 하지만", title: "〜するにはするが",
    explanation: "事実を一旦認めながらも、それに反する内容を続ける表現。",
    examples: [
      { korean: "가기는 하지만 별로 기대는 안 해요.", japanese: "行くには行きますが、あまり期待はしていません。" },
      { korean: "맛있기는 하지만 너무 비싸요.", japanese: "美味しいには美味しいですが、高すぎます。" }
    ] },
  { level: "5", pattern: "-자니", title: "〜しようとすると（ジレンマ）",
    explanation: "ある行動を取ろうとすると、迷いや困難が生じることを表す。",
    examples: [
      { korean: "말을 하자니 힘들고 안 하자니 답답해요.", japanese: "話すとすると大変だし、話さないとすると心が詰まります。" },
      { korean: "혼자 하자니 시간이 오래 걸려요.", japanese: "一人でやろうとすると時間がかかります。" }
    ] },
  { level: "6", pattern: "-을 뿐만 아니라", title: "〜だけでなく",
    explanation: "「뿐」に「만 아니라」を加えて範囲を広げる、追加を表す表現。",
    examples: [
      { korean: "값이 쌀 뿐만 아니라 품질도 좋아요.", japanese: "値段が安いだけでなく品質も良いです。" },
      { korean: "그는 노래를 잘할 뿐만 아니라 춤도 잘 춰요.", japanese: "彼は歌が上手いだけでなく、ダンスも上手です。" }
    ] },
  { level: "6", pattern: "-는 마당에", title: "〜という状況で（切迫した状況）",
    explanation: "既に切迫した、あるいは決定的な状況を前提として述べる表現。",
    examples: [
      { korean: "다 끝난 마당에 후회해도 소용없어요.", japanese: "全て終わった状況で後悔しても無駄です。" },
      { korean: "회사가 망하는 마당에 무슨 여유가 있겠어요.", japanese: "会社が潰れる状況で何の余裕があるでしょうか。" }
    ] },
  { level: "6", pattern: "-(으)ㅁ에도 불구하고", title: "〜にもかかわらず",
    explanation: "予想に反する結果であることを強調する、硬い書き言葉的表現。",
    examples: [
      { korean: "노력했음에도 불구하고 실패했어요.", japanese: "努力したにもかかわらず失敗しました。" },
      { korean: "어려움에도 불구하고 끝까지 해냈어요.", japanese: "困難にもかかわらず最後までやり遂げました。" }
    ] },
  { level: "6", pattern: "-기 십상이다", title: "〜しがちだ／〜しやすい",
    explanation: "望ましくない結果になりやすいことを表す。",
    examples: [
      { korean: "서두르면 실수하기 십상이에요.", japanese: "急ぐと間違えがちです。" },
      { korean: "그런 식으로 하면 오해받기 십상이에요.", japanese: "そんな風にすると誤解されやすいです。" }
    ] },
  { level: "6", pattern: "-는 족족", title: "〜するたびに（例外なく）",
    explanation: "ある動作をするたびに、例外なく同じ結果が繰り返されることを表す。",
    examples: [
      { korean: "돈이 들어오는 족족 다 써 버려요.", japanese: "お金が入るたびに全部使ってしまいます。" },
      { korean: "만드는 족족 다 팔려요.", japanese: "作るたびに全部売れます。" }
    ] },
  { level: "6", pattern: "-기에 앞서", title: "〜するに先立って",
    explanation: "何かをする前に、それに先立って行うべきことを表す、公式な場でよく使う表現。",
    examples: [
      { korean: "발표하기에 앞서 자료를 배포하겠습니다.", japanese: "発表するに先立って資料を配布します。" },
      { korean: "결정하기에 앞서 충분히 논의해야 해요.", japanese: "決定するに先立って十分議論すべきです。" }
    ] },
  { level: "6", pattern: "-을 계기로", title: "〜を機に",
    explanation: "ある出来事が変化・決断のきっかけになったことを表す。",
    examples: [
      { korean: "이번 사고를 계기로 안전 규정이 강화됐어요.", japanese: "今回の事故を機に安全規定が強化されました。" },
      { korean: "유학을 계기로 진로를 바꿨어요.", japanese: "留学を機に進路を変えました。" }
    ] },
  { level: "6", pattern: "-와/과 더불어", title: "〜と共に／〜に伴って",
    explanation: "一つの変化・事実と同時に別のことも進行することを表す、硬い書き言葉的表現。",
    examples: [
      { korean: "경제 성장과 더불어 소득도 늘었어요.", japanese: "経済成長と共に所得も増えました。" },
      { korean: "나이와 더불어 책임도 커져요.", japanese: "年齢と共に責任も大きくなります。" }
    ] },
  { level: "6", pattern: "-음으로써", title: "〜することによって",
    explanation: "手段・方法を強調する書き言葉的表現。「-아/어서」より硬く、論文・演説などでよく使われる。",
    examples: [
      { korean: "꾸준히 노력함으로써 목표를 이뤘어요.", japanese: "地道に努力することによって目標を成し遂げました。" },
      { korean: "대화를 나눔으로써 오해를 풀었어요.", japanese: "対話をすることによって誤解を解きました。" }
    ] },
];
