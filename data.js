// @purpose  TOPIK 1級〜6級の韓国語単語・例文データ。日本語話者向け（ハングル＋発音表記＋カタカナ発音＋日本語訳）
// WHY: TOPIK公式語彙は級ごとに区分されていないことが多いため、実在する韓国語能力試験対策語彙集（topikguide.com等）を基準に
// 実際に出題・使用される単語のみを追加していく方針とする（japanessプロジェクトと同じ方針）。

const VOCAB = [
  { level: "1", hangul: "가격", reading: "가격", katakana: "カギョク", meaning: "価格",
    example: "이 가방의 가격이 얼마예요?", exampleReading: "이 가방의 가격이 얼마예요?", exampleKatakana: "イ カバンエ カギョギ オルマエヨ", exampleMeaning: "このかばんの価格はいくらですか。",
    breakdown: [
      { word: "가방", reading: "가방", meaning: "かばん" },
      { word: "얼마", reading: "얼마", meaning: "いくら" }
    ] },
  { level: "1", hangul: "가구", reading: "가구", katakana: "カグ", meaning: "家具",
    example: "새 가구를 샀어요.", exampleReading: "새 가구를 샀어요.", exampleKatakana: "セ カグルル サッソヨ", exampleMeaning: "新しい家具を買いました。",
    breakdown: [
      { word: "새", reading: "새", meaning: "新しい" },
      { word: "샀어요", reading: "샀어요", meaning: "買いました" }
    ] },
  { level: "1", hangul: "가방", reading: "가방", katakana: "カバン", meaning: "かばん",
    example: "가방이 무거워요.", exampleReading: "가방이 무거워요.", exampleKatakana: "カバンイ ムゴウォヨ", exampleMeaning: "かばんが重いです。",
    breakdown: [
      { word: "무겁다", reading: "무겁다", meaning: "重い" }
    ] },
  { level: "1", hangul: "가을", reading: "가을", katakana: "カウル", meaning: "秋",
    example: "가을에 단풍이 예뻐요.", exampleReading: "가을에 단풍이 예뻐요.", exampleKatakana: "カウレ タンプンイ イェッポヨ", exampleMeaning: "秋には紅葉がきれいです。",
    breakdown: [
      { word: "단풍", reading: "단풍", meaning: "紅葉" },
      { word: "예쁘다", reading: "예쁘다", meaning: "きれいだ" }
    ] },
  { level: "1", hangul: "가족", reading: "가족", katakana: "カジョク", meaning: "家族",
    example: "우리 가족은 네 명이에요.", exampleReading: "우리 가족은 네 명이에요.", exampleKatakana: "ウリ カジョグン ネ ミョンイエヨ", exampleMeaning: "私たちの家族は4人です。",
    breakdown: [
      { word: "우리", reading: "우리", meaning: "私たち" },
      { word: "명", reading: "명", meaning: "〜人（人数）" }
    ] },
  { level: "1", hangul: "강", reading: "강", katakana: "カン", meaning: "川",
    example: "강에서 낚시를 해요.", exampleReading: "강에서 낚씨를 해요.", exampleKatakana: "カンエソ ナクシルル ヘヨ", exampleMeaning: "川で釣りをします。",
    breakdown: [
      { word: "낚시", reading: "낚씨", meaning: "釣り" }
    ] },
  { level: "1", hangul: "걱정", reading: "걱정", katakana: "コクチョン", meaning: "心配",
    example: "너무 걱정하지 마세요.", exampleReading: "너무 걱정하지 마세요.", exampleKatakana: "ノム コクチョンハジ マセヨ", exampleMeaning: "あまり心配しないでください。",
    breakdown: [
      { word: "너무", reading: "너무", meaning: "あまりに" },
      { word: "마세요", reading: "마세요", meaning: "〜しないでください" }
    ] },
  { level: "1", hangul: "결혼식", reading: "결혼식", katakana: "キョロンシク", meaning: "結婚式",
    example: "다음 달에 결혼식이 있어요.", exampleReading: "다음 달에 결혼시기 있어요.", exampleKatakana: "タウム タレ キョロンシギ イッソヨ", exampleMeaning: "来月結婚式があります。",
    breakdown: [
      { word: "다음 달", reading: "다음 달", meaning: "来月" }
    ] },
  { level: "1", hangul: "경험", reading: "경험", katakana: "キョンホム", meaning: "経験",
    example: "좋은 경험이었어요.", exampleReading: "조은 경허미어써요", exampleKatakana: "チョウン キョンホミオッソヨ", exampleMeaning: "良い経験でした。",
    breakdown: [
      { word: "좋다", reading: "좋다", meaning: "良い" }
    ] },
  { level: "1", hangul: "계절", reading: "계절", katakana: "ケジョル", meaning: "季節",
    example: "어느 계절을 좋아해요?", exampleReading: "어느 계절을 조아해요", exampleKatakana: "オヌ ケジョルル チョアヘヨ", exampleMeaning: "どの季節が好きですか。",
    breakdown: [
      { word: "어느", reading: "어느", meaning: "どの" },
      { word: "좋아하다", reading: "좋아하다", meaning: "好きだ" }
    ] },
  { level: "1", hangul: "계획", reading: "계획", katakana: "ケフェク", meaning: "計画",
    example: "주말 계획이 있어요?", exampleReading: "주말 계호기 있어요", exampleKatakana: "チュマル ケフェギ イッソヨ", exampleMeaning: "週末の計画がありますか。",
    breakdown: [
      { word: "주말", reading: "주말", meaning: "週末" }
    ] },
  { level: "1", hangul: "고양이", reading: "고양이", katakana: "コヤンイ", meaning: "猫",
    example: "고양이를 키워요.", exampleReading: "고양이를 키워요.", exampleKatakana: "コヤンイルル キウォヨ", exampleMeaning: "猫を飼っています。",
    breakdown: [
      { word: "키우다", reading: "키우다", meaning: "飼う" }
    ] },
  { level: "1", hangul: "고향", reading: "고향", katakana: "コヒャン", meaning: "故郷",
    example: "고향이 어디예요?", exampleReading: "고향이 어디예요?", exampleKatakana: "コヒャンイ オディエヨ", exampleMeaning: "故郷はどこですか。",
    breakdown: [
      { word: "어디", reading: "어디", meaning: "どこ" }
    ] },
  { level: "1", hangul: "공원", reading: "공원", katakana: "コンウォン", meaning: "公園",
    example: "공원에서 산책해요.", exampleReading: "공원에서 산채캐요", exampleKatakana: "コンウォネソ サンチェケヨ", exampleMeaning: "公園で散歩します。",
    breakdown: [
      { word: "산책하다", reading: "산채카다", meaning: "散歩する" }
    ] },
  { level: "1", hangul: "공책", reading: "공책", katakana: "コンチェク", meaning: "ノート",
    example: "공책에 메모했어요.", exampleReading: "공채게 메모해써요", exampleKatakana: "コンチェゲ メモヘッソヨ", exampleMeaning: "ノートにメモしました。",
    breakdown: [
      { word: "메모하다", reading: "메모하다", meaning: "メモする" }
    ] },
  { level: "1", hangul: "공항", reading: "공항", katakana: "コンハン", meaning: "空港",
    example: "공항까지 얼마나 걸려요?", exampleReading: "공항까지 얼마나 걸려요?", exampleKatakana: "コンハンカジ オルマナ コルリョヨ", exampleMeaning: "空港までどのくらいかかりますか。",
    breakdown: [
      { word: "걸리다", reading: "걸리다", meaning: "かかる" }
    ] },
  { level: "1", hangul: "과일", reading: "과일", katakana: "クァイル", meaning: "果物",
    example: "과일을 좋아해요.", exampleReading: "과이를 조아해요", exampleKatakana: "クァイルル チョアヘヨ", exampleMeaning: "果物が好きです。",
    breakdown: [
      { word: "좋아하다", reading: "좋아하다", meaning: "好きだ" }
    ] },
  { level: "1", hangul: "과자", reading: "과자", katakana: "クァジャ", meaning: "お菓子",
    example: "과자를 먹어요.", exampleReading: "과자를 머거요", exampleKatakana: "クァジャルル モゴヨ", exampleMeaning: "お菓子を食べます。",
    breakdown: [
      { word: "먹다", reading: "먹다", meaning: "食べる" }
    ] },
  { level: "1", hangul: "관심", reading: "관심", katakana: "クァンシム", meaning: "関心",
    example: "요리에 관심이 있어요.", exampleReading: "요리에 관시미 있어요", exampleKatakana: "ヨリエ クァンシミ イッソヨ", exampleMeaning: "料理に関心があります。",
    breakdown: [
      { word: "요리", reading: "요리", meaning: "料理" }
    ] },
  { level: "1", hangul: "구두", reading: "구두", katakana: "クドゥ", meaning: "革靴",
    example: "구두를 새로 샀어요.", exampleReading: "구두를 새로 샀어요.", exampleKatakana: "クドゥルル セロ サッソヨ", exampleMeaning: "革靴を新しく買いました。",
    breakdown: [
      { word: "새로", reading: "새로", meaning: "新しく" }
    ] },
  { level: "1", hangul: "그림", reading: "그림", katakana: "クリム", meaning: "絵",
    example: "그림을 잘 그려요.", exampleReading: "그리믈 잘 그려요", exampleKatakana: "クリムル チャル クリョヨ", exampleMeaning: "絵を上手に描きます。",
    breakdown: [
      { word: "그리다", reading: "그리다", meaning: "描く" }
    ] },
  { level: "1", hangul: "극장", reading: "극장", katakana: "ククチャン", meaning: "劇場・映画館",
    example: "극장에서 영화를 봐요.", exampleReading: "극짱에서 영화를 봐요", exampleKatakana: "ククチャンエソ ヨンファルル バヨ", exampleMeaning: "映画館で映画を見ます。",
    breakdown: [
      { word: "영화", reading: "영화", meaning: "映画" }
    ] },
  { level: "1", hangul: "근처", reading: "근처", katakana: "クンチョ", meaning: "近く",
    example: "집 근처에 편의점이 있어요.", exampleReading: "집 근처에 펴늬점이 있어요", exampleKatakana: "チプ クンチョエ ピョニジョミ イッソヨ", exampleMeaning: "家の近くにコンビニがあります。",
    breakdown: [
      { word: "편의점", reading: "펴늬점", meaning: "コンビニ" }
    ] },
  { level: "1", hangul: "기분", reading: "기분", katakana: "キブン", meaning: "気分",
    example: "오늘은 기분이 좋아요.", exampleReading: "오느른 기부니 조아요", exampleKatakana: "オヌルン キブニ チョアヨ", exampleMeaning: "今日は気分がいいです。",
    breakdown: [
      { word: "오늘", reading: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "김치", reading: "김치", katakana: "キムチ", meaning: "キムチ",
    example: "김치가 매워요.", exampleReading: "김치가 매워요.", exampleKatakana: "キムチガ メウォヨ", exampleMeaning: "キムチが辛いです。",
    breakdown: [
      { word: "맵다", reading: "맵다", meaning: "辛い" }
    ] },
  { level: "1", hangul: "꽃", reading: "꽃", katakana: "コッ", meaning: "花",
    example: "꽃이 예뻐요.", exampleReading: "꼬치 예뻐요", exampleKatakana: "コチ イェッポヨ", exampleMeaning: "花がきれいです。",
    breakdown: [
      { word: "예쁘다", reading: "예쁘다", meaning: "きれいだ" }
    ] },
  { level: "1", hangul: "나라", reading: "나라", katakana: "ナラ", meaning: "国",
    example: "어느 나라 사람이에요?", exampleReading: "어느 나라 사라미에요", exampleKatakana: "オヌ ナラ サラミエヨ", exampleMeaning: "どちらの国の方ですか。",
    breakdown: [
      { word: "사람", reading: "사람", meaning: "人" }
    ] },
  { level: "1", hangul: "나무", reading: "나무", katakana: "ナム", meaning: "木",
    example: "나무 아래에서 쉬어요.", exampleReading: "나무 아래에서 쉬어요.", exampleKatakana: "ナム アレエソ シュィオヨ", exampleMeaning: "木の下で休みます。",
    breakdown: [
      { word: "쉬다", reading: "쉬다", meaning: "休む" }
    ] },
  { level: "1", hangul: "날씨", reading: "날씨", katakana: "ナルシ", meaning: "天気",
    example: "오늘 날씨가 어때요?", exampleReading: "오늘 날씨가 어때요?", exampleKatakana: "オヌル ナルシガ オッテヨ", exampleMeaning: "今日の天気はどうですか。",
    breakdown: [
      { word: "어때요", reading: "어때요", meaning: "どうですか" }
    ] },
  { level: "1", hangul: "내년", reading: "내년", katakana: "ネニョン", meaning: "来年",
    example: "내년에 유학을 가요.", exampleReading: "내녀네 유하글 가요", exampleKatakana: "ネニョネ ユハグル カヨ", exampleMeaning: "来年留学に行きます。",
    breakdown: [
      { word: "유학", reading: "유학", meaning: "留学" }
    ] },
  { level: "1", hangul: "내일", reading: "내일", katakana: "ネイル", meaning: "明日",
    example: "내일 만나요.", exampleReading: "내일 만나요.", exampleKatakana: "ネイル マンナヨ", exampleMeaning: "明日会いましょう。",
    breakdown: [
      { word: "만나다", reading: "만나다", meaning: "会う" }
    ] },
  { level: "1", hangul: "냉면", reading: "냉면", katakana: "ネンミョン", meaning: "冷麺",
    example: "여름에는 냉면이 최고예요.", exampleReading: "여르메는 냉며니 최고예요", exampleKatakana: "ヨルメヌン ネンミョニ チェゴエヨ", exampleMeaning: "夏には冷麺が最高です。",
    breakdown: [
      { word: "여름", reading: "여름", meaning: "夏" },
      { word: "최고", reading: "최고", meaning: "最高" }
    ] },
  { level: "1", hangul: "냉장고", reading: "냉장고", katakana: "ネンジャンゴ", meaning: "冷蔵庫",
    example: "냉장고에 우유가 있어요.", exampleReading: "냉장고에 우유가 있어요.", exampleKatakana: "ネンジャンゴエ ウユガ イッソヨ", exampleMeaning: "冷蔵庫に牛乳があります。",
    breakdown: [
      { word: "우유", reading: "우유", meaning: "牛乳" }
    ] },
  { level: "1", hangul: "노래", reading: "노래", katakana: "ノレ", meaning: "歌",
    example: "노래를 잘 불러요.", exampleReading: "노래를 잘 불러요.", exampleKatakana: "ノレルル チャル ブルロヨ", exampleMeaning: "歌を上手に歌います。",
    breakdown: [
      { word: "부르다", reading: "부르다", meaning: "歌う" }
    ] },
  { level: "1", hangul: "누나", reading: "누나", katakana: "ヌナ", meaning: "（弟から見た）姉",
    example: "누나는 회사원이에요.", exampleReading: "누나는 회사워니에요", exampleKatakana: "ヌナヌン フェサウォニエヨ", exampleMeaning: "姉は会社員です。",
    breakdown: [
      { word: "회사원", reading: "회사원", meaning: "会社員" }
    ] },
  { level: "1", hangul: "다음", reading: "다음", katakana: "タウム", meaning: "次",
    example: "다음에 또 만나요.", exampleReading: "다으메 또 만나요", exampleKatakana: "タウメ ト マンナヨ", exampleMeaning: "次にまた会いましょう。",
    breakdown: [
      { word: "또", reading: "또", meaning: "また" }
    ] },
  { level: "1", hangul: "단어", reading: "단어", katakana: "タノ", meaning: "単語",
    example: "새 단어를 외워요.", exampleReading: "새 다너를 외워요", exampleKatakana: "セ タノルル ウェウォヨ", exampleMeaning: "新しい単語を覚えます。",
    breakdown: [
      { word: "외우다", reading: "외우다", meaning: "覚える" }
    ] },
  { level: "1", hangul: "달", reading: "달", katakana: "タル", meaning: "月",
    example: "오늘 밤 달이 밝아요.", exampleReading: "오늘 밤 다리 발가요", exampleKatakana: "オヌル バム タリ パルガヨ", exampleMeaning: "今夜は月が明るいです。",
    breakdown: [
      { word: "밝다", reading: "박따", meaning: "明るい" }
    ] },
  { level: "1", hangul: "가다", reading: "가다", katakana: "カダ", meaning: "行く",
    example: "학교에 가요.", exampleReading: "학꾜에 가요", exampleKatakana: "ハッキョエ カヨ", exampleMeaning: "学校に行きます。",
    breakdown: [
      { word: "학교", reading: "학꾜", meaning: "学校" }
    ] },
  { level: "1", hangul: "오다", reading: "오다", katakana: "オダ", meaning: "来る",
    example: "친구가 집에 와요.", exampleReading: "친구가 지베 와요", exampleKatakana: "チング ジベ ワヨ", exampleMeaning: "友達が家に来ます。",
    breakdown: [
      { word: "친구", reading: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "먹다", reading: "먹따", katakana: "モクタ", meaning: "食べる",
    example: "아침을 먹어요.", exampleReading: "아치믈 머거요", exampleKatakana: "アチムル モゴヨ", exampleMeaning: "朝ごはんを食べます。",
    breakdown: [
      { word: "아침", reading: "아침", meaning: "朝・朝食" }
    ] },
  { level: "1", hangul: "마시다", reading: "마시다", katakana: "マシダ", meaning: "飲む",
    example: "물을 마셔요.", exampleReading: "무를 마셔요", exampleKatakana: "ムル マショヨ", exampleMeaning: "水を飲みます。",
    breakdown: [
      { word: "물", reading: "물", meaning: "水" }
    ] },
  { level: "1", hangul: "보다", reading: "보다", katakana: "ポダ", meaning: "見る",
    example: "텔레비전을 봐요.", exampleReading: "텔레비저늘 봐요", exampleKatakana: "テルレビジョヌル バヨ", exampleMeaning: "テレビを見ます。",
    breakdown: [
      { word: "텔레비전", reading: "텔레비전", meaning: "テレビ" }
    ] },
  { level: "1", hangul: "듣다", reading: "듣따", katakana: "トゥッタ", meaning: "聞く",
    example: "음악을 들어요.", exampleReading: "으마글 드러요", exampleKatakana: "ウマグル トゥロヨ", exampleMeaning: "音楽を聞きます。",
    breakdown: [
      { word: "음악", reading: "으막", meaning: "音楽" }
    ] },
  { level: "1", hangul: "읽다", reading: "익따", katakana: "イクタ", meaning: "読む",
    example: "책을 읽어요.", exampleReading: "채글 일거요", exampleKatakana: "チェグル イルゴヨ", exampleMeaning: "本を読みます。",
    breakdown: [
      { word: "책", reading: "책", meaning: "本" }
    ] },
  { level: "1", hangul: "쓰다", reading: "쓰다", katakana: "スダ", meaning: "書く",
    example: "편지를 써요.", exampleReading: "편지를 써요.", exampleKatakana: "ピョンジルル ソヨ", exampleMeaning: "手紙を書きます。",
    breakdown: [
      { word: "편지", reading: "편지", meaning: "手紙" }
    ] },
  { level: "1", hangul: "좋다", reading: "조타", katakana: "チョタ", meaning: "良い",
    example: "날씨가 좋아요.", exampleReading: "날씨가 조아요", exampleKatakana: "ナルシガ チョアヨ", exampleMeaning: "天気が良いです。",
    breakdown: [
      { word: "날씨", reading: "날씨", meaning: "天気" }
    ] },
  { level: "1", hangul: "크다", reading: "크다", katakana: "クダ", meaning: "大きい",
    example: "이 옷은 커요.", exampleReading: "이 오슨 커요", exampleKatakana: "イ オスン コヨ", exampleMeaning: "この服は大きいです。",
    breakdown: [
      { word: "옷", reading: "옷", meaning: "服" }
    ] },
  { level: "1", hangul: "작다", reading: "작따", katakana: "チャクタ", meaning: "小さい",
    example: "신발이 작아요.", exampleReading: "신바리 자가요", exampleKatakana: "シンバリ チャガヨ", exampleMeaning: "靴が小さいです。",
    breakdown: [
      { word: "신발", reading: "신발", meaning: "靴" }
    ] },
  { level: "1", hangul: "많다", reading: "만타", katakana: "マンタ", meaning: "多い",
    example: "사람이 많아요.", exampleReading: "사라미 마나요", exampleKatakana: "サラミ マナヨ", exampleMeaning: "人が多いです。",
    breakdown: [
      { word: "사람", reading: "사람", meaning: "人" }
    ] },
  { level: "1", hangul: "적다", reading: "적따", katakana: "チョクタ", meaning: "少ない",
    example: "시간이 적어요.", exampleReading: "시가니 저거요", exampleKatakana: "シガニ チョゴヨ", exampleMeaning: "時間が少ないです。",
    breakdown: [
      { word: "시간", reading: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "학교", reading: "학꾜", katakana: "ハッキョ", meaning: "学校",
    example: "매일 학교에 가요.", exampleReading: "매일 학꾜에 가요", exampleKatakana: "メイル ハッキョエ カヨ", exampleMeaning: "毎日学校に行きます。",
    breakdown: [
      { word: "매일", reading: "매일", meaning: "毎日" }
    ] },
];
