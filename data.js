// @purpose  TOPIK 1級〜6級の韓国語単語・例文データ。日本語話者向け（ハングル＋カタカナ発音＋日本語訳）
// WHY: TOPIKは公式の級別語彙リストを公開していないため、級ごとに分けて整理された
// 第三者の語彙集（kleocean.com のTOPIK 1級〜6級 名詞/動詞/形容詞リスト）を基準に、各単語の級を
// 個別に対照・検証してから追加する（japanessプロジェクトと同じ方針）。

const VOCAB = [
  { level: "1", hangul: "가르치다", katakana: "カルチダ", meaning: "教える",
    example: "한국어를 가르쳐요.", exampleKatakana: "ハングゴルル カルチョヨ", exampleMeaning: "韓国語を教えます。",
    breakdown: [
      { word: "한국어", meaning: "韓国語" }
    ] },
  { level: "1", hangul: "말씀", katakana: "マルスム", meaning: "お言葉（말の尊敬語）",
    example: "말씀 감사합니다.", exampleKatakana: "マルスム カムサハムニダ", exampleMeaning: "お言葉ありがとうございます。",
    breakdown: [
      { word: "감사합니다", meaning: "ありがとうございます" }
    ] },
  { level: "1", hangul: "아르바이트", katakana: "アルバイトゥ", meaning: "アルバイト",
    example: "편의점에서 아르바이트를 해요.", exampleKatakana: "ピョニジョメソ アルバイトゥルル ヘヨ", exampleMeaning: "コンビニでアルバイトをします。",
    breakdown: [
      { word: "편의점", meaning: "コンビニ" }
    ] },
  { level: "1", hangul: "걷다", katakana: "コッタ", meaning: "歩く",
    example: "공원을 걸어요.", exampleKatakana: "コンウォヌル コロヨ", exampleMeaning: "公園を歩きます。",
    breakdown: [
      { word: "공원", meaning: "公園" }
    ] },
  { level: "1", hangul: "기숙사", katakana: "キスクサ", meaning: "寮",
    example: "기숙사에 살아요.", exampleKatakana: "キスクサエ サラヨ", exampleMeaning: "寮に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "1", hangul: "수영장", katakana: "スヨンジャン", meaning: "プール",
    example: "수영장에서 수영해요.", exampleKatakana: "スヨンジャンエソ スヨンヘヨ", exampleMeaning: "プールで泳ぎます。",
    breakdown: [
      { word: "수영", meaning: "水泳" }
    ] },
  { level: "1", hangul: "전", katakana: "チョン", meaning: "前（時間）",
    example: "삼 년 전에 왔어요.", exampleKatakana: "サムニョンジョネ ワッソヨ", exampleMeaning: "3年前に来ました。",
    breakdown: [
      { word: "년", meaning: "年" }
    ] },
  { level: "1", hangul: "입다", katakana: "イプタ", meaning: "着る",
    example: "코트를 입어요.", exampleKatakana: "コトゥルル イボヨ", exampleMeaning: "コートを着ます。",
    breakdown: [
      { word: "코트", meaning: "コート" }
    ] },
  { level: "1", hangul: "또", katakana: "ト", meaning: "また",
    example: "또 만나요.", exampleKatakana: "ト マンナヨ", exampleMeaning: "また会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "1", hangul: "값", katakana: "カプ", meaning: "値段",
    example: "값이 비싸요.", exampleKatakana: "カプシ ピッサヨ", exampleMeaning: "値段が高いです。",
    breakdown: [
      { word: "비싸요", meaning: "高いです" }
    ] },
  { level: "1", hangul: "생각", katakana: "センガク", meaning: "考え",
    example: "좋은 생각이에요.", exampleKatakana: "チョウン センガギエヨ", exampleMeaning: "良い考えです。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "1", hangul: "서울", katakana: "ソウル", meaning: "ソウル",
    example: "서울에 살아요.", exampleKatakana: "ソウレ サラヨ", exampleMeaning: "ソウルに住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "1", hangul: "대학생", katakana: "テハクセン", meaning: "大学生",
    example: "저는 대학생이에요.", exampleKatakana: "チョヌン テハクセンイエヨ", exampleMeaning: "私は大学生です。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "별로", katakana: "ピョルロ", meaning: "あまり（〜ない）",
    example: "별로 안 좋아해요.", exampleKatakana: "ピョルロ アン チョアヘヨ", exampleMeaning: "あまり好きではありません。",
    breakdown: [
      { word: "안", meaning: "〜ない" }
    ] },
  { level: "1", hangul: "실례", katakana: "シルレ", meaning: "失礼",
    example: "실례합니다.", exampleKatakana: "シルレハムニダ", exampleMeaning: "失礼します。",
    breakdown: [
      { word: "합니다", meaning: "します" }
    ] },
  { level: "1", hangul: "빨리", katakana: "パルリ", meaning: "早く",
    example: "빨리 오세요.", exampleKatakana: "パルリ オセヨ", exampleMeaning: "早く来てください。",
    breakdown: [
      { word: "오세요", meaning: "来てください" }
    ] },
  { level: "1", hangul: "편지", katakana: "ピョンジ", meaning: "手紙",
    example: "편지를 써요.", exampleKatakana: "ピョンジルル ソヨ", exampleMeaning: "手紙を書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "1", hangul: "죄송하다", katakana: "チェソンハダ", meaning: "申し訳ない",
    example: "늦어서 죄송합니다.", exampleKatakana: "ヌジョソ チェソンハムニダ", exampleMeaning: "遅れて申し訳ありません。",
    breakdown: [
      { word: "늦어서", meaning: "遅れて" }
    ] },
  { level: "1", hangul: "주로", katakana: "チュロ", meaning: "主に",
    example: "주로 집에 있어요.", exampleKatakana: "チュロ チベ イッソヨ", exampleMeaning: "主に家にいます。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "1", hangul: "사용", katakana: "サヨン", meaning: "使用",
    example: "이 방법을 사용해요.", exampleKatakana: "イ パンボブル サヨンヘヨ", exampleMeaning: "この方法を使用します。",
    breakdown: [
      { word: "방법", meaning: "方法" }
    ] },
  { level: "1", hangul: "만들다", katakana: "マンドゥルダ", meaning: "作る",
    example: "음식을 만들어요.", exampleKatakana: "ウムシグル マンドゥロヨ", exampleMeaning: "料理を作ります。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "1", hangul: "못하다", katakana: "モタダ", meaning: "下手だ・できない",
    example: "저는 수영을 못해요.", exampleKatakana: "チョヌン スヨンウル モテヨ", exampleMeaning: "私は泳げません。",
    breakdown: [
      { word: "수영", meaning: "水泳" }
    ] },
  { level: "1", hangul: "사무실", katakana: "サムシル", meaning: "事務室",
    example: "사무실에서 일해요.", exampleKatakana: "サムシレソ イレヨ", exampleMeaning: "事務室で働きます。",
    breakdown: [
      { word: "일해요", meaning: "働きます" }
    ] },
  { level: "1", hangul: "비", katakana: "ピ", meaning: "雨",
    example: "비가 와요.", exampleKatakana: "ピガ ワヨ", exampleMeaning: "雨が降ります。",
    breakdown: [
      { word: "와요", meaning: "降ります" }
    ] },
  { level: "1", hangul: "직업", katakana: "チゴプ", meaning: "職業",
    example: "직업이 뭐예요?", exampleKatakana: "チゴビ モエヨ", exampleMeaning: "お仕事は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "1", hangul: "고르다", katakana: "コルダ", meaning: "選ぶ",
    example: "선물을 골라요.", exampleKatakana: "ソンムル コルラヨ", exampleMeaning: "プレゼントを選びます。",
    breakdown: [
      { word: "선물", meaning: "プレゼント" }
    ] },
  { level: "1", hangul: "재미있다", katakana: "チェミイッタ", meaning: "面白い",
    example: "이 영화는 재미있어요.", exampleKatakana: "イ ヨンファヌン チェミイッソヨ", exampleMeaning: "この映画は面白いです。",
    breakdown: [
      { word: "영화", meaning: "映画" }
    ] },
  { level: "1", hangul: "공부", katakana: "コンブ", meaning: "勉強",
    example: "한국어 공부를 해요.", exampleKatakana: "ハングゴ コンブルル ヘヨ", exampleMeaning: "韓国語の勉強をします。",
    breakdown: [
      { word: "한국어", meaning: "韓国語" }
    ] },
  { level: "1", hangul: "친구", katakana: "チング", meaning: "友達",
    example: "친구를 만나요.", exampleKatakana: "チングルル マンナヨ", exampleMeaning: "友達に会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "1", hangul: "치다", katakana: "チダ", meaning: "打つ",
    example: "피아노를 쳐요.", exampleKatakana: "ピアノルル チョヨ", exampleMeaning: "ピアノを弾きます。",
    breakdown: [
      { word: "피아노", meaning: "ピアノ" }
    ] },
  { level: "1", hangul: "좋아하다", katakana: "チョアハダ", meaning: "好きだ",
    example: "커피를 좋아해요.", exampleKatakana: "コピルル チョアヘヨ", exampleMeaning: "コーヒーが好きです。",
    breakdown: [
      { word: "커피", meaning: "コーヒー" }
    ] },
  { level: "1", hangul: "오른쪽", katakana: "オルンチョク", meaning: "右側",
    example: "오른쪽으로 가세요.", exampleKatakana: "オルンチョグロ カセヨ", exampleMeaning: "右側に行ってください。",
    breakdown: [
      { word: "가세요", meaning: "行ってください" }
    ] },
  { level: "1", hangul: "싫다", katakana: "シルタ", meaning: "嫌だ",
    example: "가기 싫어요.", exampleKatakana: "カギ シロヨ", exampleMeaning: "行きたくないです。",
    breakdown: [
      { word: "가기", meaning: "行くこと" }
    ] },
  { level: "1", hangul: "백화점", katakana: "ペクァジョム", meaning: "デパート",
    example: "백화점에서 옷을 사요.", exampleKatakana: "ペクァジョメソ オスル サヨ", exampleMeaning: "デパートで服を買います。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "1", hangul: "뉴스", katakana: "ニュス", meaning: "ニュース",
    example: "뉴스를 봐요.", exampleKatakana: "ニュスルル バヨ", exampleMeaning: "ニュースを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "1", hangul: "곳", katakana: "コッ", meaning: "場所",
    example: "좋은 곳이에요.", exampleKatakana: "チョウン コシエヨ", exampleMeaning: "良い場所です。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "1", hangul: "높다", katakana: "ノプタ", meaning: "高い",
    example: "산이 높아요.", exampleKatakana: "サニ ノパヨ", exampleMeaning: "山が高いです。",
    breakdown: [
      { word: "산", meaning: "山" }
    ] },
  { level: "1", hangul: "앉다", katakana: "アンタ", meaning: "座る",
    example: "의자에 앉아요.", exampleKatakana: "ウィジャエ アンジャヨ", exampleMeaning: "椅子に座ります。",
    breakdown: [
      { word: "의자", meaning: "椅子" }
    ] },
  { level: "1", hangul: "잠깐", katakana: "チャムカン", meaning: "少しの間",
    example: "잠깐만 기다려요.", exampleKatakana: "チャムカンマン キダリョヨ", exampleMeaning: "少しだけ待ってください。",
    breakdown: [
      { word: "기다려요", meaning: "待ちます" }
    ] },
  { level: "1", hangul: "나오다", katakana: "ナオダ", meaning: "出てくる",
    example: "집에서 나와요.", exampleKatakana: "チベソ ナワヨ", exampleMeaning: "家から出ます。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "1", hangul: "웃다", katakana: "ウッタ", meaning: "笑う",
    example: "친구가 웃어요.", exampleKatakana: "チングガ ウソヨ", exampleMeaning: "友達が笑います。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "카메라", katakana: "カメラ", meaning: "カメラ",
    example: "카메라로 사진을 찍어요.", exampleKatakana: "カメラロ サジヌル チゴヨ", exampleMeaning: "カメラで写真を撮ります。",
    breakdown: [
      { word: "사진", meaning: "写真" }
    ] },
  { level: "1", hangul: "책상", katakana: "チェクサン", meaning: "机",
    example: "책상 위에 책이 있어요.", exampleKatakana: "チェクサン ウィエ チェギ イッソヨ", exampleMeaning: "机の上に本があります。",
    breakdown: [
      { word: "위", meaning: "上" }
    ] },
  { level: "1", hangul: "언니", katakana: "オンニ", meaning: "（妹から見た）姉",
    example: "언니는 회사원이에요.", exampleKatakana: "オンニヌン フェサウォニエヨ", exampleMeaning: "姉は会社員です。",
    breakdown: [
      { word: "회사원", meaning: "会社員" }
    ] },
  { level: "1", hangul: "전화", katakana: "チョナ", meaning: "電話",
    example: "전화를 해요.", exampleKatakana: "チョナルル ヘヨ", exampleMeaning: "電話をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "우유", katakana: "ウユ", meaning: "牛乳",
    example: "우유를 마셔요.", exampleKatakana: "ウユルル マショヨ", exampleMeaning: "牛乳を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "토요일", katakana: "トヨイル", meaning: "土曜日",
    example: "토요일에 만나요.", exampleKatakana: "トヨイレ マンナヨ", exampleMeaning: "土曜日に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "앞", katakana: "アプ", meaning: "前",
    example: "학교 앞에 있어요.", exampleKatakana: "ハッキョ アペ イッソヨ", exampleMeaning: "学校の前にあります。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "질문", katakana: "チルムン", meaning: "質問",
    example: "질문이 있어요.", exampleKatakana: "チルムニ イッソヨ", exampleMeaning: "質問があります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "1", hangul: "부엌", katakana: "プオク", meaning: "台所",
    example: "부엌에서 요리해요.", exampleKatakana: "プオケソ ヨリヘヨ", exampleMeaning: "台所で料理します。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "1", hangul: "하루", katakana: "ハル", meaning: "一日",
    example: "하루 종일 바빴어요.", exampleKatakana: "ハル ジョンイル パパッソヨ", exampleMeaning: "一日中忙しかったです。",
    breakdown: [
      { word: "종일", meaning: "一日中" }
    ] },
  { level: "1", hangul: "게임", katakana: "ケイム", meaning: "ゲーム",
    example: "게임을 해요.", exampleKatakana: "ケイムル ヘヨ", exampleMeaning: "ゲームをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "끝나다", katakana: "クンナダ", meaning: "終わる",
    example: "수업이 끝나요.", exampleKatakana: "スオビ クンナヨ", exampleMeaning: "授業が終わります。",
    breakdown: [
      { word: "수업", meaning: "授業" }
    ] },
  { level: "1", hangul: "컵", katakana: "コプ", meaning: "コップ",
    example: "컵에 물을 따라요.", exampleKatakana: "コベ ムルル タラヨ", exampleMeaning: "コップに水を注ぎます。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "1", hangul: "졸업", katakana: "チョロプ", meaning: "卒業",
    example: "내년에 졸업해요.", exampleKatakana: "ネニョネ チョロペヨ", exampleMeaning: "来年卒業します。",
    breakdown: [
      { word: "내년", meaning: "来年" }
    ] },
  { level: "1", hangul: "시장", katakana: "シジャン", meaning: "市場",
    example: "시장에서 과일을 사요.", exampleKatakana: "シジャンエソ クァイルル サヨ", exampleMeaning: "市場で果物を買います。",
    breakdown: [
      { word: "과일", meaning: "果物" }
    ] },
  { level: "1", hangul: "춤", katakana: "チュム", meaning: "踊り",
    example: "춤을 춰요.", exampleKatakana: "チュムル チョヨ", exampleMeaning: "踊りを踊ります。",
    breakdown: [
      { word: "춰요", meaning: "踊ります" }
    ] },
  { level: "1", hangul: "음악", katakana: "ウマク", meaning: "音楽",
    example: "음악을 들어요.", exampleKatakana: "ウマグル トゥロヨ", exampleMeaning: "音楽を聞きます。",
    breakdown: [
      { word: "들어요", meaning: "聞きます" }
    ] },
  { level: "1", hangul: "기쁘다", katakana: "キプダ", meaning: "嬉しい",
    example: "만나서 기뻐요.", exampleKatakana: "マンナソ キポヨ", exampleMeaning: "会えて嬉しいです。",
    breakdown: [
      { word: "만나서", meaning: "会えて" }
    ] },
  { level: "1", hangul: "지내다", katakana: "チネダ", meaning: "過ごす",
    example: "잘 지내요.", exampleKatakana: "チャル チネヨ", exampleMeaning: "元気に過ごしています。",
    breakdown: [
      { word: "잘", meaning: "元気に" }
    ] },
  { level: "1", hangul: "바꾸다", katakana: "パックダ", meaning: "変える",
    example: "자리를 바꿔요.", exampleKatakana: "チャリルル パッコヨ", exampleMeaning: "席を変えます。",
    breakdown: [
      { word: "자리", meaning: "席" }
    ] },
  { level: "1", hangul: "천천히", katakana: "チョンチョニ", meaning: "ゆっくり",
    example: "천천히 말해요.", exampleKatakana: "チョンチョニ マレヨ", exampleMeaning: "ゆっくり話します。",
    breakdown: [
      { word: "말해요", meaning: "話します" }
    ] },
  { level: "1", hangul: "일본", katakana: "イルボン", meaning: "日本",
    example: "일본에서 왔어요.", exampleKatakana: "イルボネソ ワッソヨ", exampleMeaning: "日本から来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "카드", katakana: "カドゥ", meaning: "カード",
    example: "카드로 계산해요.", exampleKatakana: "カドゥロ ケサネヨ", exampleMeaning: "カードで支払います。",
    breakdown: [
      { word: "계산", meaning: "支払い" }
    ] },
  { level: "1", hangul: "책", katakana: "チェク", meaning: "本",
    example: "책을 읽어요.", exampleKatakana: "チェグル イルゴヨ", exampleMeaning: "本を読みます。",
    breakdown: [
      { word: "읽어요", meaning: "読みます" }
    ] },
  { level: "1", hangul: "외국", katakana: "ウェグク", meaning: "外国",
    example: "외국에 가고 싶어요.", exampleKatakana: "ウェグゲ カゴ シポヨ", exampleMeaning: "外国に行きたいです。",
    breakdown: [
      { word: "가고 싶어요", meaning: "行きたいです" }
    ] },
  { level: "1", hangul: "봄", katakana: "ポム", meaning: "春",
    example: "봄에 꽃이 펴요.", exampleKatakana: "ポメ コチ ピョヨ", exampleMeaning: "春に花が咲きます。",
    breakdown: [
      { word: "꽃", meaning: "花" }
    ] },
  { level: "1", hangul: "함께", katakana: "ハムケ", meaning: "一緒に",
    example: "함께 가요.", exampleKatakana: "ハムケ カヨ", exampleMeaning: "一緒に行きましょう。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "일어나다", katakana: "イロナダ", meaning: "起きる",
    example: "일곱 시에 일어나요.", exampleKatakana: "イルゴプ シエ イロナヨ", exampleMeaning: "7時に起きます。",
    breakdown: [
      { word: "일곱 시", meaning: "7時" }
    ] },
  { level: "1", hangul: "도서관", katakana: "トソグァン", meaning: "図書館",
    example: "도서관에서 공부해요.", exampleKatakana: "トソグァネソ コンブヘヨ", exampleMeaning: "図書館で勉強します。",
    breakdown: [
      { word: "공부", meaning: "勉強" }
    ] },
  { level: "1", hangul: "커피", katakana: "コピ", meaning: "コーヒー",
    example: "커피를 마셔요.", exampleKatakana: "コピルル マショヨ", exampleMeaning: "コーヒーを飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "시", katakana: "シ", meaning: "〜時",
    example: "세 시에 만나요.", exampleKatakana: "セシエ マンナヨ", exampleMeaning: "3時に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "넣다", katakana: "ノタ", meaning: "入れる",
    example: "가방에 책을 넣어요.", exampleKatakana: "カバンエ チェグル ノオヨ", exampleMeaning: "かばんに本を入れます。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "1", hangul: "문화", katakana: "ムヌァ", meaning: "文化",
    example: "한국 문화를 좋아해요.", exampleKatakana: "ハングク ムヌァルル チョアヘヨ", exampleMeaning: "韓国文化が好きです。",
    breakdown: [
      { word: "한국", meaning: "韓国" }
    ] },
  { level: "1", hangul: "교실", katakana: "キョシル", meaning: "教室",
    example: "교실에서 공부해요.", exampleKatakana: "キョシレソ コンブヘヨ", exampleMeaning: "教室で勉強します。",
    breakdown: [
      { word: "공부", meaning: "勉強" }
    ] },
  { level: "1", hangul: "어렵다", katakana: "オリョプタ", meaning: "難しい",
    example: "이 문제는 어려워요.", exampleKatakana: "イ ムンジェヌン オリョウォヨ", exampleMeaning: "この問題は難しいです。",
    breakdown: [
      { word: "문제", meaning: "問題" }
    ] },
  { level: "1", hangul: "시간", katakana: "シガン", meaning: "時間",
    example: "시간이 없어요.", exampleKatakana: "シガニ オプソヨ", exampleMeaning: "時間がありません。",
    breakdown: [
      { word: "없어요", meaning: "ありません" }
    ] },
  { level: "1", hangul: "아기", katakana: "アギ", meaning: "赤ちゃん",
    example: "아기가 자요.", exampleKatakana: "アギガ ジャヨ", exampleMeaning: "赤ちゃんが眠っています。",
    breakdown: [
      { word: "자요", meaning: "眠っています" }
    ] },
  { level: "1", hangul: "지갑", katakana: "チガプ", meaning: "財布",
    example: "지갑을 잃어버렸어요.", exampleKatakana: "チガブル イロボリョッソヨ", exampleMeaning: "財布をなくしました。",
    breakdown: [
      { word: "잃어버렸어요", meaning: "なくしました" }
    ] },
  { level: "1", hangul: "손", katakana: "ソン", meaning: "手",
    example: "손을 씻어요.", exampleKatakana: "ソヌル シッソヨ", exampleMeaning: "手を洗います。",
    breakdown: [
      { word: "씻어요", meaning: "洗います" }
    ] },
  { level: "1", hangul: "기다리다", katakana: "キダリダ", meaning: "待つ",
    example: "친구를 기다려요.", exampleKatakana: "チングルル キダリョヨ", exampleMeaning: "友達を待ちます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "들다", katakana: "トゥルダ", meaning: "持つ",
    example: "가방을 들어요.", exampleKatakana: "カバンウル トゥロヨ", exampleMeaning: "かばんを持ちます。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "1", hangul: "닫다", katakana: "タッタ", meaning: "閉める",
    example: "문을 닫아요.", exampleKatakana: "ムヌル タダヨ", exampleMeaning: "ドアを閉めます。",
    breakdown: [
      { word: "문", meaning: "ドア" }
    ] },
  { level: "1", hangul: "비싸다", katakana: "ピッサダ", meaning: "（値段が）高い",
    example: "이 옷은 비싸요.", exampleKatakana: "イ オスン ピッサヨ", exampleMeaning: "この服は高いです。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "1", hangul: "사진", katakana: "サジン", meaning: "写真",
    example: "사진을 찍어요.", exampleKatakana: "サジヌル チゴヨ", exampleMeaning: "写真を撮ります。",
    breakdown: [
      { word: "찍어요", meaning: "撮ります" }
    ] },
  { level: "1", hangul: "가격", katakana: "カギョク", meaning: "価格",
    example: "이 가방의 가격이 얼마예요?", exampleKatakana: "イ カバンエ カギョギ オルマエヨ", exampleMeaning: "このかばんの価格はいくらですか。",
    breakdown: [
      { word: "가방", meaning: "かばん" },
      { word: "얼마", meaning: "いくら" }
    ] },
  { level: "1", hangul: "가구", katakana: "カグ", meaning: "家具",
    example: "새 가구를 샀어요.", exampleKatakana: "セ カグルル サッソヨ", exampleMeaning: "新しい家具を買いました。",
    breakdown: [
      { word: "새", meaning: "新しい" },
      { word: "샀어요", meaning: "買いました" }
    ] },
  { level: "1", hangul: "가방", katakana: "カバン", meaning: "かばん",
    example: "가방이 무거워요.", exampleKatakana: "カバンイ ムゴウォヨ", exampleMeaning: "かばんが重いです。",
    breakdown: [
      { word: "무겁다", meaning: "重い" }
    ] },
  { level: "1", hangul: "가을", katakana: "カウル", meaning: "秋",
    example: "가을에 단풍이 예뻐요.", exampleKatakana: "カウレ タンプンイ イェッポヨ", exampleMeaning: "秋には紅葉がきれいです。",
    breakdown: [
      { word: "단풍", meaning: "紅葉" },
      { word: "예쁘다", meaning: "きれいだ" }
    ] },
  { level: "1", hangul: "가족", katakana: "カジョク", meaning: "家族",
    example: "우리 가족은 네 명이에요.", exampleKatakana: "ウリ カジョグン ネ ミョンイエヨ", exampleMeaning: "私たちの家族は4人です。",
    breakdown: [
      { word: "우리", meaning: "私たち" },
      { word: "명", meaning: "〜人（人数）" }
    ] },
  { level: "2", hangul: "강", katakana: "カン", meaning: "川",
    example: "강에서 낚시를 해요.", exampleKatakana: "カンエソ ナクシルル ヘヨ", exampleMeaning: "川で釣りをします。",
    breakdown: [
      { word: "낚시", meaning: "釣り" }
    ] },
  { level: "2", hangul: "걱정", katakana: "コクチョン", meaning: "心配",
    example: "너무 걱정하지 마세요.", exampleKatakana: "ノム コクチョンハジ マセヨ", exampleMeaning: "あまり心配しないでください。",
    breakdown: [
      { word: "너무", meaning: "あまりに" },
      { word: "마세요", meaning: "〜しないでください" }
    ] },
  { level: "2", hangul: "결혼식", katakana: "キョロンシク", meaning: "結婚式",
    example: "다음 달에 결혼식이 있어요.", exampleKatakana: "タウム タレ キョロンシギ イッソヨ", exampleMeaning: "来月結婚式があります。",
    breakdown: [
      { word: "다음 달", meaning: "来月" }
    ] },
  { level: "2", hangul: "경험", katakana: "キョンホム", meaning: "経験",
    example: "좋은 경험이었어요.", exampleKatakana: "チョウン キョンホミオッソヨ", exampleMeaning: "良い経験でした。",
    breakdown: [
      { word: "좋다", meaning: "良い" }
    ] },
  { level: "1", hangul: "계절", katakana: "ケジョル", meaning: "季節",
    example: "어느 계절을 좋아해요?", exampleKatakana: "オヌ ケジョルル チョアヘヨ", exampleMeaning: "どの季節が好きですか。",
    breakdown: [
      { word: "어느", meaning: "どの" },
      { word: "좋아하다", meaning: "好きだ" }
    ] },
  { level: "1", hangul: "계획", katakana: "ケフェク", meaning: "計画",
    example: "주말 계획이 있어요?", exampleKatakana: "チュマル ケフェギ イッソヨ", exampleMeaning: "週末の計画がありますか。",
    breakdown: [
      { word: "주말", meaning: "週末" }
    ] },
  { level: "1", hangul: "고양이", katakana: "コヤンイ", meaning: "猫",
    example: "고양이를 키워요.", exampleKatakana: "コヤンイルル キウォヨ", exampleMeaning: "猫を飼っています。",
    breakdown: [
      { word: "키우다", meaning: "飼う" }
    ] },
  { level: "1", hangul: "고향", katakana: "コヒャン", meaning: "故郷",
    example: "고향이 어디예요?", exampleKatakana: "コヒャンイ オディエヨ", exampleMeaning: "故郷はどこですか。",
    breakdown: [
      { word: "어디", meaning: "どこ" }
    ] },
  { level: "1", hangul: "공원", katakana: "コンウォン", meaning: "公園",
    example: "공원에서 산책해요.", exampleKatakana: "コンウォネソ サンチェケヨ", exampleMeaning: "公園で散歩します。",
    breakdown: [
      { word: "산책하다", meaning: "散歩する" }
    ] },
  { level: "1", hangul: "공책", katakana: "コンチェク", meaning: "ノート",
    example: "공책에 메모했어요.", exampleKatakana: "コンチェゲ メモヘッソヨ", exampleMeaning: "ノートにメモしました。",
    breakdown: [
      { word: "메모하다", meaning: "メモする" }
    ] },
  { level: "1", hangul: "공항", katakana: "コンハン", meaning: "空港",
    example: "공항까지 얼마나 걸려요?", exampleKatakana: "コンハンカジ オルマナ コルリョヨ", exampleMeaning: "空港までどのくらいかかりますか。",
    breakdown: [
      { word: "걸리다", meaning: "かかる" }
    ] },
  { level: "1", hangul: "과일", katakana: "クァイル", meaning: "果物",
    example: "과일을 좋아해요.", exampleKatakana: "クァイルル チョアヘヨ", exampleMeaning: "果物が好きです。",
    breakdown: [
      { word: "좋아하다", meaning: "好きだ" }
    ] },
  { level: "2", hangul: "과자", katakana: "クァジャ", meaning: "お菓子",
    example: "과자를 먹어요.", exampleKatakana: "クァジャルル モゴヨ", exampleMeaning: "お菓子を食べます。",
    breakdown: [
      { word: "먹다", meaning: "食べる" }
    ] },
  { level: "2", hangul: "관심", katakana: "クァンシム", meaning: "関心",
    example: "요리에 관심이 있어요.", exampleKatakana: "ヨリエ クァンシミ イッソヨ", exampleMeaning: "料理に関心があります。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "1", hangul: "구두", katakana: "クドゥ", meaning: "革靴",
    example: "구두를 새로 샀어요.", exampleKatakana: "クドゥルル セロ サッソヨ", exampleMeaning: "革靴を新しく買いました。",
    breakdown: [
      { word: "새로", meaning: "新しく" }
    ] },
  { level: "1", hangul: "그림", katakana: "クリム", meaning: "絵",
    example: "그림을 잘 그려요.", exampleKatakana: "クリムル チャル クリョヨ", exampleMeaning: "絵を上手に描きます。",
    breakdown: [
      { word: "그리다", meaning: "描く" }
    ] },
  { level: "1", hangul: "극장", katakana: "ククチャン", meaning: "劇場・映画館",
    example: "극장에서 영화를 봐요.", exampleKatakana: "ククチャンエソ ヨンファルル バヨ", exampleMeaning: "映画館で映画を見ます。",
    breakdown: [
      { word: "영화", meaning: "映画" }
    ] },
  { level: "1", hangul: "근처", katakana: "クンチョ", meaning: "近く",
    example: "집 근처에 편의점이 있어요.", exampleKatakana: "チプ クンチョエ ピョニジョミ イッソヨ", exampleMeaning: "家の近くにコンビニがあります。",
    breakdown: [
      { word: "편의점", meaning: "コンビニ" }
    ] },
  { level: "1", hangul: "기분", katakana: "キブン", meaning: "気分",
    example: "오늘은 기분이 좋아요.", exampleKatakana: "オヌルン キブニ チョアヨ", exampleMeaning: "今日は気分がいいです。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "김치", katakana: "キムチ", meaning: "キムチ",
    example: "김치가 매워요.", exampleKatakana: "キムチガ メウォヨ", exampleMeaning: "キムチが辛いです。",
    breakdown: [
      { word: "맵다", meaning: "辛い" }
    ] },
  { level: "1", hangul: "꽃", katakana: "コッ", meaning: "花",
    example: "꽃이 예뻐요.", exampleKatakana: "コチ イェッポヨ", exampleMeaning: "花がきれいです。",
    breakdown: [
      { word: "예쁘다", meaning: "きれいだ" }
    ] },
  { level: "1", hangul: "나라", katakana: "ナラ", meaning: "国",
    example: "어느 나라 사람이에요?", exampleKatakana: "オヌ ナラ サラミエヨ", exampleMeaning: "どちらの国の方ですか。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "1", hangul: "나무", katakana: "ナム", meaning: "木",
    example: "나무 아래에서 쉬어요.", exampleKatakana: "ナム アレエソ シュィオヨ", exampleMeaning: "木の下で休みます。",
    breakdown: [
      { word: "쉬다", meaning: "休む" }
    ] },
  { level: "1", hangul: "날씨", katakana: "ナルシ", meaning: "天気",
    example: "오늘 날씨가 어때요?", exampleKatakana: "オヌル ナルシガ オッテヨ", exampleMeaning: "今日の天気はどうですか。",
    breakdown: [
      { word: "어때요", meaning: "どうですか" }
    ] },
  { level: "1", hangul: "내년", katakana: "ネニョン", meaning: "来年",
    example: "내년에 유학을 가요.", exampleKatakana: "ネニョネ ユハグル カヨ", exampleMeaning: "来年留学に行きます。",
    breakdown: [
      { word: "유학", meaning: "留学" }
    ] },
  { level: "1", hangul: "내일", katakana: "ネイル", meaning: "明日",
    example: "내일 만나요.", exampleKatakana: "ネイル マンナヨ", exampleMeaning: "明日会いましょう。",
    breakdown: [
      { word: "만나다", meaning: "会う" }
    ] },
  { level: "1", hangul: "냉면", katakana: "ネンミョン", meaning: "冷麺",
    example: "여름에는 냉면이 최고예요.", exampleKatakana: "ヨルメヌン ネンミョニ チェゴエヨ", exampleMeaning: "夏には冷麺が最高です。",
    breakdown: [
      { word: "여름", meaning: "夏" },
      { word: "최고", meaning: "最高" }
    ] },
  { level: "2", hangul: "냉장고", katakana: "ネンジャンゴ", meaning: "冷蔵庫",
    example: "냉장고에 우유가 있어요.", exampleKatakana: "ネンジャンゴエ ウユガ イッソヨ", exampleMeaning: "冷蔵庫に牛乳があります。",
    breakdown: [
      { word: "우유", meaning: "牛乳" }
    ] },
  { level: "1", hangul: "노래", katakana: "ノレ", meaning: "歌",
    example: "노래를 잘 불러요.", exampleKatakana: "ノレルル チャル ブルロヨ", exampleMeaning: "歌を上手に歌います。",
    breakdown: [
      { word: "부르다", meaning: "歌う" }
    ] },
  { level: "1", hangul: "누나", katakana: "ヌナ", meaning: "（弟から見た）姉",
    example: "누나는 회사원이에요.", exampleKatakana: "ヌナヌン フェサウォニエヨ", exampleMeaning: "姉は会社員です。",
    breakdown: [
      { word: "회사원", meaning: "会社員" }
    ] },
  { level: "1", hangul: "다음", katakana: "タウム", meaning: "次",
    example: "다음에 또 만나요.", exampleKatakana: "タウメ ト マンナヨ", exampleMeaning: "次にまた会いましょう。",
    breakdown: [
      { word: "또", meaning: "また" }
    ] },
  { level: "1", hangul: "단어", katakana: "タノ", meaning: "単語",
    example: "새 단어를 외워요.", exampleKatakana: "セ タノルル ウェウォヨ", exampleMeaning: "新しい単語を覚えます。",
    breakdown: [
      { word: "외우다", meaning: "覚える" }
    ] },
  { level: "1", hangul: "달", katakana: "タル", meaning: "月",
    example: "오늘 밤 달이 밝아요.", exampleKatakana: "オヌル バム タリ パルガヨ", exampleMeaning: "今夜は月が明るいです。",
    breakdown: [
      { word: "밝다", meaning: "明るい" }
    ] },
  { level: "1", hangul: "가다", katakana: "カダ", meaning: "行く",
    example: "학교에 가요.", exampleKatakana: "ハッキョエ カヨ", exampleMeaning: "学校に行きます。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "오다", katakana: "オダ", meaning: "来る",
    example: "친구가 집에 와요.", exampleKatakana: "チング ジベ ワヨ", exampleMeaning: "友達が家に来ます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "먹다", katakana: "モクタ", meaning: "食べる",
    example: "아침을 먹어요.", exampleKatakana: "アチムル モゴヨ", exampleMeaning: "朝ごはんを食べます。",
    breakdown: [
      { word: "아침", meaning: "朝・朝食" }
    ] },
  { level: "1", hangul: "마시다", katakana: "マシダ", meaning: "飲む",
    example: "물을 마셔요.", exampleKatakana: "ムル マショヨ", exampleMeaning: "水を飲みます。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "1", hangul: "보다", katakana: "ポダ", meaning: "見る",
    example: "텔레비전을 봐요.", exampleKatakana: "テルレビジョヌル バヨ", exampleMeaning: "テレビを見ます。",
    breakdown: [
      { word: "텔레비전", meaning: "テレビ" }
    ] },
  { level: "1", hangul: "듣다", katakana: "トゥッタ", meaning: "聞く",
    example: "음악을 들어요.", exampleKatakana: "ウマグル トゥロヨ", exampleMeaning: "音楽を聞きます。",
    breakdown: [
      { word: "음악", meaning: "音楽" }
    ] },
  { level: "1", hangul: "읽다", katakana: "イクタ", meaning: "読む",
    example: "책을 읽어요.", exampleKatakana: "チェグル イルゴヨ", exampleMeaning: "本を読みます。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "1", hangul: "쓰다", katakana: "スダ", meaning: "書く",
    example: "편지를 써요.", exampleKatakana: "ピョンジルル ソヨ", exampleMeaning: "手紙を書きます。",
    breakdown: [
      { word: "편지", meaning: "手紙" }
    ] },
  { level: "1", hangul: "좋다", katakana: "チョタ", meaning: "良い",
    example: "날씨가 좋아요.", exampleKatakana: "ナルシガ チョアヨ", exampleMeaning: "天気が良いです。",
    breakdown: [
      { word: "날씨", meaning: "天気" }
    ] },
  { level: "1", hangul: "크다", katakana: "クダ", meaning: "大きい",
    example: "이 옷은 커요.", exampleKatakana: "イ オスン コヨ", exampleMeaning: "この服は大きいです。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "1", hangul: "작다", katakana: "チャクタ", meaning: "小さい",
    example: "신발이 작아요.", exampleKatakana: "シンバリ チャガヨ", exampleMeaning: "靴が小さいです。",
    breakdown: [
      { word: "신발", meaning: "靴" }
    ] },
  { level: "1", hangul: "많다", katakana: "マンタ", meaning: "多い",
    example: "사람이 많아요.", exampleKatakana: "サラミ マナヨ", exampleMeaning: "人が多いです。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "1", hangul: "적다", katakana: "チョクタ", meaning: "少ない",
    example: "시간이 적어요.", exampleKatakana: "シガニ チョゴヨ", exampleMeaning: "時間が少ないです。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "학교", katakana: "ハッキョ", meaning: "学校",
    example: "매일 학교에 가요.", exampleKatakana: "メイル ハッキョエ カヨ", exampleMeaning: "毎日学校に行きます。",
    breakdown: [
      { word: "매일", meaning: "毎日" }
    ] },
];
