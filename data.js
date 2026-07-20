// @purpose  TOPIK 1級〜6級の韓国語単語・例文データ。日本語話者向け（ハングル＋カタカナ発音＋日本語訳）
// WHY: TOPIKは公式の級別語彙リストを公開していないため、級ごとに分けて整理された
// 第三者の語彙集（kleocean.com のTOPIK 1級〜6級 名詞/動詞/形容詞リスト）を基準に、各単語の級を
// 個別に対照・検証してから追加する（japanessプロジェクトと同じ方針）。

const VOCAB = [
  { level: "1", hangul: "콘서트", katakana: "コンソトゥ", meaning: "コンサート",
    example: "콘서트에 가요.", exampleKatakana: "コンソトゥエ カヨ", exampleMeaning: "コンサートに行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "남대문", katakana: "ナムデムン", meaning: "南大門",
    example: "남대문 시장에 가요.", exampleKatakana: "ナムデムン シジャンエ カヨ", exampleMeaning: "南大門市場に行きます。",
    breakdown: [
      { word: "시장", meaning: "市場" }
    ] },
  { level: "1", hangul: "농구", katakana: "ノング", meaning: "バスケットボール",
    example: "농구를 해요.", exampleKatakana: "ノングルル ヘヨ", exampleMeaning: "バスケをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "삼계탕", katakana: "サムゲタン", meaning: "参鶏湯",
    example: "삼계탕을 먹어요.", exampleKatakana: "サムゲタンウル モゴヨ", exampleMeaning: "参鶏湯を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "시월", katakana: "シウォル", meaning: "10月",
    example: "시월에 단풍이 예뻐요.", exampleKatakana: "シウォレ タンプンイ イェッポヨ", exampleMeaning: "10月に紅葉がきれいです。",
    breakdown: [
      { word: "단풍", meaning: "紅葉" }
    ] },
  { level: "1", hangul: "올라가다", katakana: "オルラガダ", meaning: "上がっていく",
    example: "산에 올라가요.", exampleKatakana: "サネ オルラガヨ", exampleMeaning: "山に登ります。",
    breakdown: [
      { word: "산", meaning: "山" }
    ] },
  { level: "1", hangul: "약", katakana: "ヤク", meaning: "薬",
    example: "약을 먹어요.", exampleKatakana: "ヤグル モゴヨ", exampleMeaning: "薬を飲みます。",
    breakdown: [
      { word: "먹어요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "감", katakana: "カム", meaning: "柿",
    example: "감을 먹어요.", exampleKatakana: "カムル モゴヨ", exampleMeaning: "柿を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "러시아", katakana: "ロシア", meaning: "ロシア",
    example: "러시아에서 왔어요.", exampleKatakana: "ロシアエソ ワッソヨ", exampleMeaning: "ロシアから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "지난주", katakana: "チナンジュ", meaning: "先週",
    example: "지난주에 만났어요.", exampleKatakana: "チナンジュエ マンナッソヨ", exampleMeaning: "先週会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "1", hangul: "지나다", katakana: "チナダ", meaning: "過ぎる",
    example: "시간이 지나요.", exampleKatakana: "シガニ チナヨ", exampleMeaning: "時間が過ぎます。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "국적", katakana: "ククチョク", meaning: "国籍",
    example: "국적이 어디예요?", exampleKatakana: "ククチョギ オディエヨ", exampleMeaning: "国籍はどこですか。",
    breakdown: [
      { word: "어디", meaning: "どこ" }
    ] },
  { level: "1", hangul: "표", katakana: "ピョ", meaning: "チケット",
    example: "표를 사요.", exampleKatakana: "ピョルル サヨ", exampleMeaning: "チケットを買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "잡채", katakana: "チャプチェ", meaning: "チャプチェ",
    example: "잡채를 만들어요.", exampleKatakana: "チャプチェルル マンドゥロヨ", exampleMeaning: "チャプチェを作ります。",
    breakdown: [
      { word: "만들어요", meaning: "作ります" }
    ] },
  { level: "1", hangul: "주부", katakana: "チュブ", meaning: "主婦",
    example: "저는 주부예요.", exampleKatakana: "チョヌン チュブエヨ", exampleMeaning: "私は主婦です。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "이름", katakana: "イルム", meaning: "名前",
    example: "이름이 뭐예요?", exampleKatakana: "イルミ モエヨ", exampleMeaning: "お名前は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "1", hangul: "춤추다", katakana: "チュムチュダ", meaning: "踊る",
    example: "신나게 춤춰요.", exampleKatakana: "シンナゲ チュムチョヨ", exampleMeaning: "楽しく踊ります。",
    breakdown: [
      { word: "신나게", meaning: "楽しく" }
    ] },
  { level: "1", hangul: "동대문", katakana: "トンデムン", meaning: "東大門",
    example: "동대문에서 쇼핑해요.", exampleKatakana: "トンデムネソ ショピンヘヨ", exampleMeaning: "東大門でショッピングします。",
    breakdown: [
      { word: "쇼핑", meaning: "ショッピング" }
    ] },
  { level: "1", hangul: "슈퍼마켓", katakana: "シュポマケッ", meaning: "スーパーマーケット",
    example: "슈퍼마켓에서 사요.", exampleKatakana: "シュポマケセソ サヨ", exampleMeaning: "スーパーで買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "제주도", katakana: "チェジュド", meaning: "済州島",
    example: "제주도로 여행 가요.", exampleKatakana: "チェジュドロ ヨヘン カヨ", exampleMeaning: "済州島に旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "1", hangul: "사이다", katakana: "サイダ", meaning: "サイダー",
    example: "사이다를 마셔요.", exampleKatakana: "サイダルル マショヨ", exampleMeaning: "サイダーを飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "유월", katakana: "ユウォル", meaning: "6月",
    example: "유월에 비가 많이 와요.", exampleKatakana: "ユウォレ ピガ マニ ワヨ", exampleMeaning: "6月に雨がたくさん降ります。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "1", hangul: "올해", katakana: "オレ", meaning: "今年",
    example: "올해는 바빠요.", exampleKatakana: "オレヌン パッパヨ", exampleMeaning: "今年は忙しいです。",
    breakdown: [
      { word: "바빠요", meaning: "忙しいです" }
    ] },
  { level: "1", hangul: "사이", katakana: "サイ", meaning: "間",
    example: "친구 사이예요.", exampleKatakana: "チング サイエヨ", exampleMeaning: "友達の間柄です。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "다니다", katakana: "タニダ", meaning: "通う",
    example: "학교에 다녀요.", exampleKatakana: "ハッキョエ タニョヨ", exampleMeaning: "学校に通っています。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "나중", katakana: "ナジュン", meaning: "後で",
    example: "나중에 만나요.", exampleKatakana: "ナジュンエ マンナヨ", exampleMeaning: "後で会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "세수", katakana: "セス", meaning: "洗顔",
    example: "아침에 세수해요.", exampleKatakana: "アチメ セスヘヨ", exampleMeaning: "朝に顔を洗います。",
    breakdown: [
      { word: "아침", meaning: "朝" }
    ] },
  { level: "1", hangul: "여동생", katakana: "ヨドンセン", meaning: "妹",
    example: "여동생이 있어요.", exampleKatakana: "ヨドンセンイ イッソヨ", exampleMeaning: "妹がいます。",
    breakdown: [
      { word: "있어요", meaning: "います" }
    ] },
  { level: "1", hangul: "잡수시다", katakana: "チャプスシダ", meaning: "召し上がる",
    example: "진지 잡수세요.", exampleKatakana: "チンジ チャプスセヨ", exampleMeaning: "ご飯を召し上がってください。",
    breakdown: [
      { word: "진지", meaning: "ご飯（尊敬語）" }
    ] },
  { level: "1", hangul: "주무시다", katakana: "チュムシダ", meaning: "お休みになる",
    example: "안녕히 주무세요.", exampleKatakana: "アンニョンヒ チュムセヨ", exampleMeaning: "おやすみなさい。",
    breakdown: [
      { word: "안녕히", meaning: "安らかに" }
    ] },
  { level: "1", hangul: "아주머니", katakana: "アジュモニ", meaning: "おばさん",
    example: "아주머니가 친절해요.", exampleKatakana: "アジュモニガ チンジョレヨ", exampleMeaning: "おばさんが親切です。",
    breakdown: [
      { word: "친절해요", meaning: "親切です" }
    ] },
  { level: "1", hangul: "사귀다", katakana: "サグィダ", meaning: "付き合う",
    example: "친구를 사귀어요.", exampleKatakana: "チングルル サグィオヨ", exampleMeaning: "友達と付き合います。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "캐나다", katakana: "ケナダ", meaning: "カナダ",
    example: "캐나다에서 왔어요.", exampleKatakana: "ケナダエソ ワッソヨ", exampleMeaning: "カナダから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "그럼", katakana: "クロム", meaning: "それでは",
    example: "그럼 시작할게요.", exampleKatakana: "クロム シジャカルケヨ", exampleMeaning: "それでは始めます。",
    breakdown: [
      { word: "시작할게요", meaning: "始めます" }
    ] },
  { level: "1", hangul: "비빔밥", katakana: "ピビムパプ", meaning: "ビビンバ",
    example: "비빔밥을 먹어요.", exampleKatakana: "ピビムパブル モゴヨ", exampleMeaning: "ビビンバを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "산", katakana: "サン", meaning: "山",
    example: "산에 가요.", exampleKatakana: "サネ カヨ", exampleMeaning: "山に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "잘", katakana: "チャル", meaning: "よく・上手に",
    example: "잘 먹었습니다.", exampleKatakana: "チャル モゴッスムニダ", exampleMeaning: "ごちそうさまでした。",
    breakdown: [
      { word: "먹었습니다", meaning: "食べました" }
    ] },
  { level: "1", hangul: "구월", katakana: "クウォル", meaning: "9月",
    example: "구월에 시작해요.", exampleKatakana: "クウォレ シジャケヨ", exampleMeaning: "9月に始まります。",
    breakdown: [
      { word: "시작해요", meaning: "始まります" }
    ] },
  { level: "1", hangul: "신다", katakana: "シンタ", meaning: "履く",
    example: "구두를 신어요.", exampleKatakana: "クドゥルル シノヨ", exampleMeaning: "靴を履きます。",
    breakdown: [
      { word: "구두", meaning: "靴" }
    ] },
  { level: "1", hangul: "주소", katakana: "チュソ", meaning: "住所",
    example: "주소를 알려줘요.", exampleKatakana: "チュソルル アルリョジョヨ", exampleMeaning: "住所を教えてください。",
    breakdown: [
      { word: "알려줘요", meaning: "教えてください" }
    ] },
  { level: "1", hangul: "피우다", katakana: "ピウダ", meaning: "（たばこを）吸う",
    example: "담배를 피워요.", exampleKatakana: "タムベルル ピウォヨ", exampleMeaning: "たばこを吸います。",
    breakdown: [
      { word: "담배", meaning: "たばこ" }
    ] },
  { level: "1", hangul: "십일월", katakana: "シビルォル", meaning: "11月",
    example: "십일월은 추워요.", exampleKatakana: "シビルォルン チュウォヨ", exampleMeaning: "11月は寒いです。",
    breakdown: [
      { word: "추워요", meaning: "寒いです" }
    ] },
  { level: "1", hangul: "볼펜", katakana: "ポルペン", meaning: "ボールペン",
    example: "볼펜으로 써요.", exampleKatakana: "ポルペヌロ ソヨ", exampleMeaning: "ボールペンで書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "1", hangul: "지난달", katakana: "チナンダル", meaning: "先月",
    example: "지난달에 이사했어요.", exampleKatakana: "チナンダレ イサヘッソヨ", exampleMeaning: "先月引っ越しました。",
    breakdown: [
      { word: "이사", meaning: "引っ越し" }
    ] },
  { level: "1", hangul: "일월", katakana: "イルォル", meaning: "1月",
    example: "일월은 추워요.", exampleKatakana: "イルォルン チュウォヨ", exampleMeaning: "1月は寒いです。",
    breakdown: [
      { word: "추워요", meaning: "寒いです" }
    ] },
  { level: "1", hangul: "이따가", katakana: "イッタガ", meaning: "後で",
    example: "이따가 전화할게요.", exampleKatakana: "イッタガ チョナハルケヨ", exampleMeaning: "後で電話します。",
    breakdown: [
      { word: "전화", meaning: "電話" }
    ] },
  { level: "1", hangul: "주스", katakana: "ジュス", meaning: "ジュース",
    example: "주스를 마셔요.", exampleKatakana: "ジュスルル マショヨ", exampleMeaning: "ジュースを飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "취미", katakana: "チュィミ", meaning: "趣味",
    example: "취미가 뭐예요?", exampleKatakana: "チュィミガ モエヨ", exampleMeaning: "趣味は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "1", hangul: "어서", katakana: "オソ", meaning: "早く（どうぞ）",
    example: "어서 오세요.", exampleKatakana: "オソ オセヨ", exampleMeaning: "いらっしゃいませ。",
    breakdown: [
      { word: "오세요", meaning: "いらっしゃい" }
    ] },
  { level: "1", hangul: "소개", katakana: "ソゲ", meaning: "紹介",
    example: "친구를 소개해요.", exampleKatakana: "チングルル ソゲヘヨ", exampleMeaning: "友達を紹介します。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "우표", katakana: "ウピョ", meaning: "切手",
    example: "우표를 사요.", exampleKatakana: "ウピョルル サヨ", exampleMeaning: "切手を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "오렌지", katakana: "オレンジ", meaning: "オレンジ",
    example: "오렌지를 먹어요.", exampleKatakana: "オレンジルル モゴヨ", exampleMeaning: "オレンジを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "베트남", katakana: "ベトゥナム", meaning: "ベトナム",
    example: "베트남 음식이 맛있어요.", exampleKatakana: "ベトゥナム ウムシギ マシッソヨ", exampleMeaning: "ベトナム料理がおいしいです。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "1", hangul: "남산", katakana: "ナムサン", meaning: "南山",
    example: "남산에 올라가요.", exampleKatakana: "ナムサネ オルラガヨ", exampleMeaning: "南山に登ります。",
    breakdown: [
      { word: "올라가요", meaning: "登ります" }
    ] },
  { level: "1", hangul: "다녀오다", katakana: "タニョオダ", meaning: "行ってくる",
    example: "학교에 다녀와요.", exampleKatakana: "ハッキョエ タニョワヨ", exampleMeaning: "学校に行ってきます。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "열쇠", katakana: "ヨルセ", meaning: "鍵",
    example: "열쇠를 잃어버렸어요.", exampleKatakana: "ヨルセルル イロボリョッソヨ", exampleMeaning: "鍵をなくしました。",
    breakdown: [
      { word: "잃어버렸어요", meaning: "なくしました" }
    ] },
  { level: "1", hangul: "알리다", katakana: "アルリダ", meaning: "知らせる",
    example: "소식을 알려요.", exampleKatakana: "ソシグル アルリョヨ", exampleMeaning: "知らせを伝えます。",
    breakdown: [
      { word: "소식", meaning: "知らせ" }
    ] },
  { level: "1", hangul: "미용실", katakana: "ミヨンシル", meaning: "美容室",
    example: "미용실에 가요.", exampleKatakana: "ミヨンシレ カヨ", exampleMeaning: "美容室に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "김치찌개", katakana: "キムチッチゲ", meaning: "キムチチゲ",
    example: "김치찌개를 먹어요.", exampleKatakana: "キムチッチゲルル モゴヨ", exampleMeaning: "キムチチゲを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "반갑다", katakana: "パンガプタ", meaning: "嬉しい（会えて）",
    example: "만나서 반가워요.", exampleKatakana: "マンナソ パンガウォヨ", exampleMeaning: "会えて嬉しいです。",
    breakdown: [
      { word: "만나서", meaning: "会えて" }
    ] },
  { level: "1", hangul: "태국", katakana: "テグク", meaning: "タイ",
    example: "태국 음식을 좋아해요.", exampleKatakana: "テグク ウムシグル チョアヘヨ", exampleMeaning: "タイ料理が好きです。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "1", hangul: "재미없다", katakana: "チェミオプタ", meaning: "面白くない",
    example: "이 영화는 재미없어요.", exampleKatakana: "イ ヨンファヌン チェミオプソヨ", exampleMeaning: "この映画は面白くないです。",
    breakdown: [
      { word: "영화", meaning: "映画" }
    ] },
  { level: "1", hangul: "불다", katakana: "プルダ", meaning: "吹く",
    example: "바람이 불어요.", exampleKatakana: "パラミ プロヨ", exampleMeaning: "風が吹きます。",
    breakdown: [
      { word: "바람", meaning: "風" }
    ] },
  { level: "1", hangul: "갈비", katakana: "カルビ", meaning: "カルビ",
    example: "갈비를 먹어요.", exampleKatakana: "カルビルル モゴヨ", exampleMeaning: "カルビを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "스키", katakana: "スキ", meaning: "スキー",
    example: "스키를 타요.", exampleKatakana: "スキルル タヨ", exampleMeaning: "スキーをします。",
    breakdown: [
      { word: "타요", meaning: "します" }
    ] },
  { level: "1", hangul: "터미널", katakana: "トミノル", meaning: "ターミナル",
    example: "버스 터미널에 가요.", exampleKatakana: "ボス トミノレ カヨ", exampleMeaning: "バスターミナルに行きます。",
    breakdown: [
      { word: "버스", meaning: "バス" }
    ] },
  { level: "1", hangul: "테니스", katakana: "テニス", meaning: "テニス",
    example: "테니스를 쳐요.", exampleKatakana: "テニスルル チョヨ", exampleMeaning: "テニスをします。",
    breakdown: [
      { word: "쳐요", meaning: "します" }
    ] },
  { level: "1", hangul: "여행사", katakana: "ヨヘンサ", meaning: "旅行会社",
    example: "여행사에서 예약해요.", exampleKatakana: "ヨヘンサエソ イェヤケヨ", exampleMeaning: "旅行会社で予約します。",
    breakdown: [
      { word: "예약", meaning: "予約" }
    ] },
  { level: "1", hangul: "편의점", katakana: "ピョニジョム", meaning: "コンビニ",
    example: "편의점에서 사요.", exampleKatakana: "ピョニジョメソ サヨ", exampleMeaning: "コンビニで買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "인도네시아", katakana: "インドネシア", meaning: "インドネシア",
    example: "인도네시아에서 왔어요.", exampleKatakana: "インドネシアエソ ワッソヨ", exampleMeaning: "インドネシアから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "안녕히", katakana: "アンニョンヒ", meaning: "安らかに",
    example: "안녕히 가세요.", exampleKatakana: "アンニョンヒ カセヨ", exampleMeaning: "さようなら。",
    breakdown: [
      { word: "가세요", meaning: "お行きください" }
    ] },
  { level: "1", hangul: "밖", katakana: "パッ", meaning: "外",
    example: "밖에 나가요.", exampleKatakana: "パッケ ナガヨ", exampleMeaning: "外に出ます。",
    breakdown: [
      { word: "나가요", meaning: "出ます" }
    ] },
  { level: "1", hangul: "학생증", katakana: "ハクセンジュン", meaning: "学生証",
    example: "학생증을 보여줘요.", exampleKatakana: "ハクセンジュンウル ボヨジョヨ", exampleMeaning: "学生証を見せます。",
    breakdown: [
      { word: "보여줘요", meaning: "見せます" }
    ] },
  { level: "1", hangul: "천만", katakana: "チョンマン", meaning: "千万",
    example: "천만에요.", exampleKatakana: "チョンマネヨ", exampleMeaning: "どういたしまして。",
    breakdown: [
      { word: "에요", meaning: "です" }
    ] },
  { level: "1", hangul: "티셔츠", katakana: "ティショチュ", meaning: "Tシャツ",
    example: "티셔츠를 입어요.", exampleKatakana: "ティショチュルル イボヨ", exampleMeaning: "Tシャツを着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "1", hangul: "야구", katakana: "ヤグ", meaning: "野球",
    example: "야구를 좋아해요.", exampleKatakana: "ヤグルル チョアヘヨ", exampleMeaning: "野球が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "싱겁다", katakana: "シンゴプタ", meaning: "味が薄い",
    example: "국이 싱거워요.", exampleKatakana: "ググギ シンゴウォヨ", exampleMeaning: "スープの味が薄いです。",
    breakdown: [
      { word: "국", meaning: "スープ" }
    ] },
  { level: "1", hangul: "밑", katakana: "ミッ", meaning: "下",
    example: "책상 밑에 있어요.", exampleKatakana: "チェクサン ミテ イッソヨ", exampleMeaning: "机の下にあります。",
    breakdown: [
      { word: "책상", meaning: "机" }
    ] },
  { level: "1", hangul: "고프다", katakana: "コプダ", meaning: "（お腹が）空く",
    example: "배가 고파요.", exampleKatakana: "ペガ コパヨ", exampleMeaning: "お腹が空きました。",
    breakdown: [
      { word: "배", meaning: "お腹" }
    ] },
  { level: "1", hangul: "떡볶이", katakana: "トッポッキ", meaning: "トッポッキ",
    example: "떡볶이를 먹어요.", exampleKatakana: "トッポッキルル モゴヨ", exampleMeaning: "トッポッキを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "주", katakana: "チュ", meaning: "週",
    example: "한 주에 두 번 가요.", exampleKatakana: "ハン ジュエ トゥ ボン カヨ", exampleMeaning: "週に二回行きます。",
    breakdown: [
      { word: "두 번", meaning: "二回" }
    ] },
  { level: "1", hangul: "지난해", katakana: "チナネ", meaning: "去年",
    example: "지난해에 졸업했어요.", exampleKatakana: "チナネエ チョロペッソヨ", exampleMeaning: "去年卒業しました。",
    breakdown: [
      { word: "졸업", meaning: "卒業" }
    ] },
  { level: "1", hangul: "이번", katakana: "イボン", meaning: "今回",
    example: "이번 주말에 만나요.", exampleKatakana: "イボン チュマレ マンナヨ", exampleMeaning: "今度の週末に会いましょう。",
    breakdown: [
      { word: "주말", meaning: "週末" }
    ] },
  { level: "1", hangul: "빌리다", katakana: "ピルリダ", meaning: "借りる",
    example: "책을 빌려요.", exampleKatakana: "チェグル ピルリョヨ", exampleMeaning: "本を借ります。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "1", hangul: "프로그램", katakana: "プログラム", meaning: "プログラム",
    example: "이 프로그램이 재미있어요.", exampleKatakana: "イ プログラミ チェミイッソヨ", exampleMeaning: "この番組が面白いです。",
    breakdown: [
      { word: "재미있어요", meaning: "面白いです" }
    ] },
  { level: "1", hangul: "된장찌개", katakana: "テンジャンッチゲ", meaning: "味噌チゲ",
    example: "된장찌개를 먹어요.", exampleKatakana: "テンジャンッチゲルル モゴヨ", exampleMeaning: "味噌チゲを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "건너편", katakana: "コンノピョン", meaning: "向かい側",
    example: "건너편에 있어요.", exampleKatakana: "コンノピョネ イッソヨ", exampleMeaning: "向かい側にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "1", hangul: "종업원", katakana: "チョンオブォン", meaning: "従業員",
    example: "종업원을 불러요.", exampleKatakana: "チョンオブォヌル プルロヨ", exampleMeaning: "従業員を呼びます。",
    breakdown: [
      { word: "불러요", meaning: "呼びます" }
    ] },
  { level: "1", hangul: "십이월", katakana: "シビウォル", meaning: "12月",
    example: "십이월에 눈이 와요.", exampleKatakana: "シビウォレ ヌニ ワヨ", exampleMeaning: "12月に雪が降ります。",
    breakdown: [
      { word: "눈", meaning: "雪" }
    ] },
  { level: "1", hangul: "참외", katakana: "チャモィ", meaning: "韓国メロン",
    example: "참외를 먹어요.", exampleKatakana: "チャモィルル モゴヨ", exampleMeaning: "韓国メロンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "대사관", katakana: "テサグァン", meaning: "大使館",
    example: "대사관에 가요.", exampleKatakana: "テサグァネ カヨ", exampleMeaning: "大使館に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "그저께", katakana: "クジョッケ", meaning: "一昨日",
    example: "그저께 만났어요.", exampleKatakana: "クジョッケ マンナッソヨ", exampleMeaning: "一昨日会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "1", hangul: "어떻다", katakana: "オットタ", meaning: "どうだ",
    example: "기분이 어때요?", exampleKatakana: "キブニ オッテヨ", exampleMeaning: "気分はどうですか。",
    breakdown: [
      { word: "기분", meaning: "気分" }
    ] },
  { level: "1", hangul: "추다", katakana: "チュダ", meaning: "踊る",
    example: "춤을 춰요.", exampleKatakana: "チュムル チョヨ", exampleMeaning: "踊りを踊ります。",
    breakdown: [
      { word: "춤", meaning: "踊り" }
    ] },
  { level: "1", hangul: "동안", katakana: "トンアン", meaning: "〜の間",
    example: "한 시간 동안 기다려요.", exampleKatakana: "ハン シガン トンアン キダリョヨ", exampleMeaning: "1時間の間待ちます。",
    breakdown: [
      { word: "한 시간", meaning: "1時間" }
    ] },
  { level: "1", hangul: "생신", katakana: "センシン", meaning: "お誕生日（尊敬語）",
    example: "할머니 생신이에요.", exampleKatakana: "ハルモニ センシニエヨ", exampleMeaning: "おばあさんのお誕生日です。",
    breakdown: [
      { word: "할머니", meaning: "おばあさん" }
    ] },
  { level: "1", hangul: "꼭", katakana: "コク", meaning: "必ず",
    example: "꼭 오세요.", exampleKatakana: "コク オセヨ", exampleMeaning: "必ず来てください。",
    breakdown: [
      { word: "오세요", meaning: "来てください" }
    ] },
  { level: "1", hangul: "수첩", katakana: "スチョプ", meaning: "手帳",
    example: "수첩에 적어요.", exampleKatakana: "スチョベ チョゴヨ", exampleMeaning: "手帳に書きます。",
    breakdown: [
      { word: "적어요", meaning: "書きます" }
    ] },
  { level: "1", hangul: "하숙집", katakana: "ハスクチプ", meaning: "下宿",
    example: "하숙집에 살아요.", exampleKatakana: "ハスクチベ サラヨ", exampleMeaning: "下宿に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "1", hangul: "친하다", katakana: "チナダ", meaning: "親しい",
    example: "친구와 친해요.", exampleKatakana: "チングワ チネヨ", exampleMeaning: "友達と親しいです。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "시키다", katakana: "シキダ", meaning: "注文する・させる",
    example: "음식을 시켜요.", exampleKatakana: "ウムシグル シキョヨ", exampleMeaning: "料理を注文します。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "1", hangul: "시원하다", katakana: "シウォナダ", meaning: "涼しい",
    example: "바람이 시원해요.", exampleKatakana: "パラミ シウォネヨ", exampleMeaning: "風が涼しいです。",
    breakdown: [
      { word: "바람", meaning: "風" }
    ] },
  { level: "1", hangul: "커피숍", katakana: "コピショプ", meaning: "カフェ",
    example: "커피숍에서 만나요.", exampleKatakana: "コピショベソ マンナヨ", exampleMeaning: "カフェで会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "탁구", katakana: "タック", meaning: "卓球",
    example: "탁구를 쳐요.", exampleKatakana: "タックルル チョヨ", exampleMeaning: "卓球をします。",
    breakdown: [
      { word: "쳐요", meaning: "します" }
    ] },
  { level: "1", hangul: "갈비탕", katakana: "カルビタン", meaning: "カルビタン",
    example: "갈비탕을 먹어요.", exampleKatakana: "カルビタンウル モゴヨ", exampleMeaning: "カルビタンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "메뉴", katakana: "メニュ", meaning: "メニュー",
    example: "메뉴를 골라요.", exampleKatakana: "メニュルル コルラヨ", exampleMeaning: "メニューを選びます。",
    breakdown: [
      { word: "골라요", meaning: "選びます" }
    ] },
  { level: "1", hangul: "노래방", katakana: "ノレバン", meaning: "カラオケ",
    example: "노래방에 가요.", exampleKatakana: "ノレバンエ カヨ", exampleMeaning: "カラオケに行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "칠판", katakana: "チルパン", meaning: "黒板",
    example: "칠판에 써요.", exampleKatakana: "チルパネ ソヨ", exampleMeaning: "黒板に書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "1", hangul: "몽골", katakana: "モンゴル", meaning: "モンゴル",
    example: "몽골에서 왔어요.", exampleKatakana: "モンゴレソ ワッソヨ", exampleMeaning: "モンゴルから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "목욕탕", katakana: "モギョクタン", meaning: "銭湯",
    example: "목욕탕에 가요.", exampleKatakana: "モギョクタンエ カヨ", exampleMeaning: "銭湯に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "일주일", katakana: "イルチュイル", meaning: "一週間",
    example: "일주일 후에 만나요.", exampleKatakana: "イルチュイル フエ マンナヨ", exampleMeaning: "一週間後に会いましょう。",
    breakdown: [
      { word: "후", meaning: "後" }
    ] },
  { level: "1", hangul: "기차", katakana: "キチャ", meaning: "汽車",
    example: "기차를 타요.", exampleKatakana: "キチャルル タヨ", exampleMeaning: "汽車に乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "1", hangul: "말레이시아", katakana: "マルレイシア", meaning: "マレーシア",
    example: "말레이시아에서 왔어요.", exampleKatakana: "マルレイシアエソ ワッソヨ", exampleMeaning: "マレーシアから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "요리", katakana: "ヨリ", meaning: "料理",
    example: "요리를 잘해요.", exampleKatakana: "ヨリルル チャレヨ", exampleMeaning: "料理が上手です。",
    breakdown: [
      { word: "잘해요", meaning: "上手です" }
    ] },
  { level: "1", hangul: "피아노", katakana: "ピアノ", meaning: "ピアノ",
    example: "피아노를 배워요.", exampleKatakana: "ピアノルル ペウォヨ", exampleMeaning: "ピアノを習います。",
    breakdown: [
      { word: "배워요", meaning: "習います" }
    ] },
  { level: "1", hangul: "고맙다", katakana: "コマプタ", meaning: "ありがたい",
    example: "도와줘서 고마워요.", exampleKatakana: "トワジョソ コマウォヨ", exampleMeaning: "助けてくれてありがとう。",
    breakdown: [
      { word: "도와줘서", meaning: "助けてくれて" }
    ] },
  { level: "1", hangul: "모레", katakana: "モレ", meaning: "明後日",
    example: "모레 만나요.", exampleKatakana: "モレ マンナヨ", exampleMeaning: "明後日会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "인천", katakana: "インチョン", meaning: "仁川",
    example: "인천공항에 도착해요.", exampleKatakana: "インチョンコンハンエ トチャケヨ", exampleMeaning: "仁川空港に到着します。",
    breakdown: [
      { word: "공항", meaning: "空港" }
    ] },
  { level: "1", hangul: "신발", katakana: "シンバル", meaning: "靴",
    example: "신발을 신어요.", exampleKatakana: "シンバルル シノヨ", exampleMeaning: "靴を履きます。",
    breakdown: [
      { word: "신어요", meaning: "履きます" }
    ] },
  { level: "1", hangul: "방학", katakana: "パンハク", meaning: "（学校の）休み",
    example: "여름 방학이에요.", exampleKatakana: "ヨルム パンハギエヨ", exampleMeaning: "夏休みです。",
    breakdown: [
      { word: "여름", meaning: "夏" }
    ] },
  { level: "1", hangul: "불고기", katakana: "プルコギ", meaning: "プルコギ",
    example: "불고기를 먹어요.", exampleKatakana: "プルコギルル モゴヨ", exampleMeaning: "プルコギを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "살다", katakana: "サルダ", meaning: "住む",
    example: "서울에 살아요.", exampleKatakana: "ソウレ サラヨ", exampleMeaning: "ソウルに住んでいます。",
    breakdown: [
      { word: "서울", meaning: "ソウル" }
    ] },
  { level: "1", hangul: "영", katakana: "ヨン", meaning: "ゼロ",
    example: "영에서 시작해요.", exampleKatakana: "ヨンエソ シジャケヨ", exampleMeaning: "ゼロから始めます。",
    breakdown: [
      { word: "시작", meaning: "始まり" }
    ] },
  { level: "1", hangul: "감기", katakana: "カムギ", meaning: "風邪",
    example: "감기에 걸렸어요.", exampleKatakana: "カムギエ コルリョッソヨ", exampleMeaning: "風邪をひきました。",
    breakdown: [
      { word: "걸렸어요", meaning: "かかりました" }
    ] },
  { level: "1", hangul: "회사원", katakana: "フェサウォン", meaning: "会社員",
    example: "저는 회사원이에요.", exampleKatakana: "チョヌン フェサウォニエヨ", exampleMeaning: "私は会社員です。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "연습", katakana: "ヨンスプ", meaning: "練習",
    example: "한국어를 연습해요.", exampleKatakana: "ハングゴルル ヨンスペヨ", exampleMeaning: "韓国語を練習します。",
    breakdown: [
      { word: "한국어", meaning: "韓国語" }
    ] },
  { level: "1", hangul: "맛없다", katakana: "マドプタ", meaning: "まずい",
    example: "이 음식은 맛없어요.", exampleKatakana: "イ ウムシグン マドプソヨ", exampleMeaning: "この料理はまずいです。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "1", hangul: "여자", katakana: "ヨジャ", meaning: "女",
    example: "저 여자는 누구예요?", exampleKatakana: "チョ ヨジャヌン ヌグエヨ", exampleMeaning: "あの女性は誰ですか。",
    breakdown: [
      { word: "누구", meaning: "誰" }
    ] },
  { level: "1", hangul: "바나나", katakana: "パナナ", meaning: "バナナ",
    example: "바나나를 먹어요.", exampleKatakana: "パナナルル モゴヨ", exampleMeaning: "バナナを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "조용하다", katakana: "チョヨンハダ", meaning: "静かだ",
    example: "도서관이 조용해요.", exampleKatakana: "トソグァニ チョヨンヘヨ", exampleMeaning: "図書館が静かです。",
    breakdown: [
      { word: "도서관", meaning: "図書館" }
    ] },
  { level: "1", hangul: "빠르다", katakana: "パルダ", meaning: "速い",
    example: "이 기차는 빨라요.", exampleKatakana: "イ キチャヌン パルラヨ", exampleMeaning: "この汽車は速いです。",
    breakdown: [
      { word: "기차", meaning: "汽車" }
    ] },
  { level: "1", hangul: "신문", katakana: "シンムン", meaning: "新聞",
    example: "신문을 읽어요.", exampleKatakana: "シンムヌル イルゴヨ", exampleMeaning: "新聞を読みます。",
    breakdown: [
      { word: "읽어요", meaning: "読みます" }
    ] },
  { level: "1", hangul: "약속", katakana: "ヤクソク", meaning: "約束",
    example: "약속을 지켜요.", exampleKatakana: "ヤクソグル チキョヨ", exampleMeaning: "約束を守ります。",
    breakdown: [
      { word: "지켜요", meaning: "守ります" }
    ] },
  { level: "1", hangul: "목요일", katakana: "モギョイル", meaning: "木曜日",
    example: "목요일에 만나요.", exampleKatakana: "モギョイレ マンナヨ", exampleMeaning: "木曜日に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "휴가", katakana: "ヒュガ", meaning: "休暇",
    example: "휴가를 가요.", exampleKatakana: "ヒュガルル カヨ", exampleMeaning: "休暇に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "오전", katakana: "オジョン", meaning: "午前",
    example: "오전에 만나요.", exampleKatakana: "オジョネ マンナヨ", exampleMeaning: "午前に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "약국", katakana: "ヤックク", meaning: "薬局",
    example: "약국에서 약을 사요.", exampleKatakana: "ヤックゲソ ヤグル サヨ", exampleMeaning: "薬局で薬を買います。",
    breakdown: [
      { word: "약", meaning: "薬" }
    ] },
  { level: "1", hangul: "연필", katakana: "ヨンピル", meaning: "鉛筆",
    example: "연필로 써요.", exampleKatakana: "ヨンピルロ ソヨ", exampleMeaning: "鉛筆で書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "1", hangul: "춥다", katakana: "チュプタ", meaning: "寒い",
    example: "겨울은 추워요.", exampleKatakana: "キョウルン チュウォヨ", exampleMeaning: "冬は寒いです。",
    breakdown: [
      { word: "겨울", meaning: "冬" }
    ] },
  { level: "1", hangul: "멋있다", katakana: "モシッタ", meaning: "かっこいい",
    example: "저 배우는 멋있어요.", exampleKatakana: "チョ ペウヌン モシッソヨ", exampleMeaning: "あの俳優はかっこいいです。",
    breakdown: [
      { word: "배우", meaning: "俳優" }
    ] },
  { level: "1", hangul: "아내", katakana: "アネ", meaning: "妻",
    example: "아내는 선생님이에요.", exampleKatakana: "アネヌン ソンセンニミエヨ", exampleMeaning: "妻は先生です。",
    breakdown: [
      { word: "선생님", meaning: "先生" }
    ] },
  { level: "1", hangul: "오월", katakana: "オウォル", meaning: "5月",
    example: "오월에 결혼해요.", exampleKatakana: "オウォレ キョロネヨ", exampleMeaning: "5月に結婚します。",
    breakdown: [
      { word: "결혼", meaning: "結婚" }
    ] },
  { level: "1", hangul: "지우개", katakana: "チウゲ", meaning: "消しゴム",
    example: "지우개를 빌려요.", exampleKatakana: "チウゲルル ピルリョヨ", exampleMeaning: "消しゴムを借ります。",
    breakdown: [
      { word: "빌려요", meaning: "借ります" }
    ] },
  { level: "1", hangul: "울다", katakana: "ウルダ", meaning: "泣く",
    example: "아기가 울어요.", exampleKatakana: "アギガ ウロヨ", exampleMeaning: "赤ちゃんが泣きます。",
    breakdown: [
      { word: "아기", meaning: "赤ちゃん" }
    ] },
  { level: "1", hangul: "맛있다", katakana: "マシッタ", meaning: "おいしい",
    example: "이 음식은 맛있어요.", exampleKatakana: "イ ウムシグン マシッソヨ", exampleMeaning: "この料理はおいしいです。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "1", hangul: "에어컨", katakana: "エオコン", meaning: "エアコン",
    example: "에어컨을 켜요.", exampleKatakana: "エオコヌル キョヨ", exampleMeaning: "エアコンをつけます。",
    breakdown: [
      { word: "켜요", meaning: "つけます" }
    ] },
  { level: "1", hangul: "괜찮다", katakana: "クェンチャンタ", meaning: "大丈夫だ",
    example: "저는 괜찮아요.", exampleKatakana: "チョヌン クェンチャナヨ", exampleMeaning: "私は大丈夫です。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "월요일", katakana: "ウォリョイル", meaning: "月曜日",
    example: "월요일에 시작해요.", exampleKatakana: "ウォリョイレ シジャケヨ", exampleMeaning: "月曜日に始まります。",
    breakdown: [
      { word: "시작해요", meaning: "始まります" }
    ] },
  { level: "1", hangul: "바지", katakana: "パジ", meaning: "ズボン",
    example: "바지를 입어요.", exampleKatakana: "パジルル イボヨ", exampleMeaning: "ズボンをはきます。",
    breakdown: [
      { word: "입어요", meaning: "はきます" }
    ] },
  { level: "1", hangul: "저녁", katakana: "チョニョク", meaning: "夕方・夕食",
    example: "저녁을 먹어요.", exampleKatakana: "チョニョグル モゴヨ", exampleMeaning: "夕食を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "수요일", katakana: "スヨイル", meaning: "水曜日",
    example: "수요일에 쉬어요.", exampleKatakana: "スヨイレ シュィオヨ", exampleMeaning: "水曜日に休みます。",
    breakdown: [
      { word: "쉬어요", meaning: "休みます" }
    ] },
  { level: "1", hangul: "아이스크림", katakana: "アイスクリム", meaning: "アイスクリーム",
    example: "아이스크림을 먹어요.", exampleKatakana: "アイスクリムル モゴヨ", exampleMeaning: "アイスクリームを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "아주", katakana: "アジュ", meaning: "とても",
    example: "아주 맛있어요.", exampleKatakana: "アジュ マシッソヨ", exampleMeaning: "とてもおいしいです。",
    breakdown: [
      { word: "맛있어요", meaning: "おいしいです" }
    ] },
  { level: "1", hangul: "길다", katakana: "キルダ", meaning: "長い",
    example: "머리가 길어요.", exampleKatakana: "モリガ キロヨ", exampleMeaning: "髪が長いです。",
    breakdown: [
      { word: "머리", meaning: "髪" }
    ] },
  { level: "1", hangul: "슬프다", katakana: "スルプダ", meaning: "悲しい",
    example: "이 영화는 슬퍼요.", exampleKatakana: "イ ヨンファヌン スルポヨ", exampleMeaning: "この映画は悲しいです。",
    breakdown: [
      { word: "영화", meaning: "映画" }
    ] },
  { level: "1", hangul: "그러니까", katakana: "クロニッカ", meaning: "だから",
    example: "비가 와요. 그러니까 우산을 가져가세요.", exampleKatakana: "ピガ ワヨ クロニッカ ウサヌル カジョガセヨ", exampleMeaning: "雨が降ります。だから傘を持って行ってください。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "1", hangul: "계속", katakana: "ケソク", meaning: "ずっと",
    example: "계속 기다렸어요.", exampleKatakana: "ケソク キダリョッソヨ", exampleMeaning: "ずっと待っていました。",
    breakdown: [
      { word: "기다렸어요", meaning: "待っていました" }
    ] },
  { level: "1", hangul: "모르다", katakana: "モルダ", meaning: "知らない",
    example: "저는 몰라요.", exampleKatakana: "チョヌン モルラヨ", exampleMeaning: "私は知りません。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "깨끗하다", katakana: "ケックタダ", meaning: "きれいだ",
    example: "방이 깨끗해요.", exampleKatakana: "バンイ ケックテヨ", exampleMeaning: "部屋がきれいです。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "1", hangul: "쉬다", katakana: "シュィダ", meaning: "休む",
    example: "오늘은 쉬어요.", exampleKatakana: "オヌルン シュィオヨ", exampleMeaning: "今日は休みます。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "반", katakana: "パン", meaning: "半分・クラス",
    example: "한 시 반이에요.", exampleKatakana: "ハンシ パニエヨ", exampleMeaning: "1時半です。",
    breakdown: [
      { word: "한 시", meaning: "1時" }
    ] },
  { level: "1", hangul: "인터넷", katakana: "イントネッ", meaning: "インターネット",
    example: "인터넷을 해요.", exampleKatakana: "イントネスル ヘヨ", exampleMeaning: "インターネットをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "잠시", katakana: "チャムシ", meaning: "しばらく",
    example: "잠시 기다려요.", exampleKatakana: "チャムシ キダリョヨ", exampleMeaning: "しばらく待ちます。",
    breakdown: [
      { word: "기다려요", meaning: "待ちます" }
    ] },
  { level: "1", hangul: "피곤", katakana: "ピゴン", meaning: "疲れ",
    example: "오늘 피곤해요.", exampleKatakana: "オヌル ピゴネヨ", exampleMeaning: "今日は疲れています。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "다르다", katakana: "タルダ", meaning: "違う",
    example: "생각이 달라요.", exampleKatakana: "センガギ タルラヨ", exampleMeaning: "考えが違います。",
    breakdown: [
      { word: "생각", meaning: "考え" }
    ] },
  { level: "1", hangul: "설명", katakana: "ソルミョン", meaning: "説明",
    example: "자세히 설명해요.", exampleKatakana: "チャセヒ ソルミョンヘヨ", exampleMeaning: "詳しく説明します。",
    breakdown: [
      { word: "자세히", meaning: "詳しく" }
    ] },
  { level: "1", hangul: "켜다", katakana: "キョダ", meaning: "つける",
    example: "불을 켜요.", exampleKatakana: "プルル キョヨ", exampleMeaning: "電気をつけます。",
    breakdown: [
      { word: "불", meaning: "電気" }
    ] },
  { level: "1", hangul: "드리다", katakana: "トゥリダ", meaning: "差し上げる",
    example: "선물을 드려요.", exampleKatakana: "ソンムル トゥリョヨ", exampleMeaning: "プレゼントを差し上げます。",
    breakdown: [
      { word: "선물", meaning: "プレゼント" }
    ] },
  { level: "1", hangul: "고기", katakana: "コギ", meaning: "肉",
    example: "고기를 구워요.", exampleKatakana: "コギルル クウォヨ", exampleMeaning: "肉を焼きます。",
    breakdown: [
      { word: "구워요", meaning: "焼きます" }
    ] },
  { level: "1", hangul: "걸다", katakana: "コルダ", meaning: "かける",
    example: "전화를 걸어요.", exampleKatakana: "チョナルル コロヨ", exampleMeaning: "電話をかけます。",
    breakdown: [
      { word: "전화", meaning: "電話" }
    ] },
  { level: "1", hangul: "여행", katakana: "ヨヘン", meaning: "旅行",
    example: "여행을 가요.", exampleKatakana: "ヨヘンウル カヨ", exampleMeaning: "旅行に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "구경", katakana: "クギョン", meaning: "見物",
    example: "시장을 구경해요.", exampleKatakana: "シジャンウル クギョンヘヨ", exampleMeaning: "市場を見物します。",
    breakdown: [
      { word: "시장", meaning: "市場" }
    ] },
  { level: "1", hangul: "미국", katakana: "ミグク", meaning: "アメリカ",
    example: "미국에서 왔어요.", exampleKatakana: "ミグゲソ ワッソヨ", exampleMeaning: "アメリカから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "치마", katakana: "チマ", meaning: "スカート",
    example: "치마를 입어요.", exampleKatakana: "チマルル イボヨ", exampleMeaning: "スカートを履きます。",
    breakdown: [
      { word: "입어요", meaning: "履きます" }
    ] },
  { level: "1", hangul: "자전거", katakana: "チャジョンゴ", meaning: "自転車",
    example: "자전거를 타요.", exampleKatakana: "チャジョンゴルル タヨ", exampleMeaning: "自転車に乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "1", hangul: "가게", katakana: "カゲ", meaning: "店",
    example: "가게에서 물건을 사요.", exampleKatakana: "カゲエソ ムルゴヌル サヨ", exampleMeaning: "店で物を買います。",
    breakdown: [
      { word: "물건", meaning: "物" }
    ] },
  { level: "1", hangul: "짜다", katakana: "チャダ", meaning: "塩辛い",
    example: "이 국은 짜요.", exampleKatakana: "イ ググン チャヨ", exampleMeaning: "このスープはしょっぱいです。",
    breakdown: [
      { word: "국", meaning: "スープ" }
    ] },
  { level: "1", hangul: "감사", katakana: "カムサ", meaning: "感謝",
    example: "감사합니다.", exampleKatakana: "カムサハムニダ", exampleMeaning: "ありがとうございます。",
    breakdown: [
      { word: "합니다", meaning: "します" }
    ] },
  { level: "1", hangul: "샤워", katakana: "シャウォ", meaning: "シャワー",
    example: "샤워를 해요.", exampleKatakana: "シャウォルル ヘヨ", exampleMeaning: "シャワーを浴びます。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "딸", katakana: "タル", meaning: "娘",
    example: "딸이 예뻐요.", exampleKatakana: "タリ イェッポヨ", exampleMeaning: "娘がかわいいです。",
    breakdown: [
      { word: "예뻐요", meaning: "かわいいです" }
    ] },
  { level: "1", hangul: "금요일", katakana: "クムヨイル", meaning: "金曜日",
    example: "금요일에 만나요.", exampleKatakana: "クムヨイレ マンナヨ", exampleMeaning: "金曜日に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "말다", katakana: "マルダ", meaning: "やめる",
    example: "걱정하지 말아요.", exampleKatakana: "コクチョンハジ マラヨ", exampleMeaning: "心配しないでください。",
    breakdown: [
      { word: "걱정", meaning: "心配" }
    ] },
  { level: "1", hangul: "외국어", katakana: "ウェグゴ", meaning: "外国語",
    example: "외국어를 배워요.", exampleKatakana: "ウェグゴルル ペウォヨ", exampleMeaning: "外国語を習います。",
    breakdown: [
      { word: "배워요", meaning: "習います" }
    ] },
  { level: "1", hangul: "수박", katakana: "スバク", meaning: "スイカ",
    example: "수박을 먹어요.", exampleKatakana: "スバグル モゴヨ", exampleMeaning: "スイカを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "글", katakana: "クル", meaning: "文章",
    example: "글을 써요.", exampleKatakana: "クルル ソヨ", exampleMeaning: "文章を書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "1", hangul: "주인", katakana: "チュイン", meaning: "主人",
    example: "가게 주인이에요.", exampleKatakana: "カゲ チュイニエヨ", exampleMeaning: "店の主人です。",
    breakdown: [
      { word: "가게", meaning: "店" }
    ] },
  { level: "1", hangul: "콜라", katakana: "コルラ", meaning: "コーラ",
    example: "콜라를 마셔요.", exampleKatakana: "コルラルル マショヨ", exampleMeaning: "コーラを飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "입", katakana: "イプ", meaning: "口",
    example: "입을 벌려요.", exampleKatakana: "イブル ポルリョヨ", exampleMeaning: "口を開けます。",
    breakdown: [
      { word: "벌려요", meaning: "開けます" }
    ] },
  { level: "1", hangul: "위", katakana: "ウィ", meaning: "上",
    example: "책상 위에 있어요.", exampleKatakana: "チェクサン ウィエ イッソヨ", exampleMeaning: "机の上にあります。",
    breakdown: [
      { word: "책상", meaning: "机" }
    ] },
  { level: "1", hangul: "목", katakana: "モク", meaning: "首・喉",
    example: "목이 아파요.", exampleKatakana: "モギ アパヨ", exampleMeaning: "喉が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "싸다", katakana: "サダ", meaning: "安い",
    example: "이 옷은 싸요.", exampleKatakana: "イ オスン サヨ", exampleMeaning: "この服は安いです。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "1", hangul: "먼저", katakana: "モンジョ", meaning: "先に",
    example: "먼저 가세요.", exampleKatakana: "モンジョ カセヨ", exampleMeaning: "先に行ってください。",
    breakdown: [
      { word: "가세요", meaning: "行ってください" }
    ] },
  { level: "1", hangul: "사월", katakana: "サウォル", meaning: "4月",
    example: "사월에 벚꽃이 펴요.", exampleKatakana: "サウォレ ポッコチ ピョヨ", exampleMeaning: "4月に桜が咲きます。",
    breakdown: [
      { word: "벚꽃", meaning: "桜" }
    ] },
  { level: "1", hangul: "싫어하다", katakana: "シロハダ", meaning: "嫌う",
    example: "매운 것을 싫어해요.", exampleKatakana: "メウン コスル シロヘヨ", exampleMeaning: "辛いものが嫌いです。",
    breakdown: [
      { word: "매운", meaning: "辛い" }
    ] },
  { level: "1", hangul: "뒤", katakana: "トゥィ", meaning: "後ろ",
    example: "뒤에 있어요.", exampleKatakana: "トゥィエ イッソヨ", exampleMeaning: "後ろにあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "1", hangul: "받다", katakana: "パッタ", meaning: "受け取る",
    example: "선물을 받아요.", exampleKatakana: "ソンムル パダヨ", exampleMeaning: "プレゼントを受け取ります。",
    breakdown: [
      { word: "선물", meaning: "プレゼント" }
    ] },
  { level: "1", hangul: "자동차", katakana: "チャドンチャ", meaning: "自動車",
    example: "자동차를 사요.", exampleKatakana: "チャドンチャルル サヨ", exampleMeaning: "自動車を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "귤", katakana: "キュル", meaning: "みかん",
    example: "귤을 먹어요.", exampleKatakana: "キュルル モゴヨ", exampleMeaning: "みかんを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "참", katakana: "チャム", meaning: "本当に",
    example: "참 좋아요.", exampleKatakana: "チャム チョアヨ", exampleMeaning: "本当に良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "1", hangul: "잘하다", katakana: "チャラダ", meaning: "上手だ",
    example: "한국어를 잘해요.", exampleKatakana: "ハングゴルル チャレヨ", exampleMeaning: "韓国語が上手です。",
    breakdown: [
      { word: "한국어", meaning: "韓国語" }
    ] },
  { level: "1", hangul: "쉽다", katakana: "スィプタ", meaning: "易しい",
    example: "이 문제는 쉬워요.", exampleKatakana: "イ ムンジェヌン スィウォヨ", exampleMeaning: "この問題は易しいです。",
    breakdown: [
      { word: "문제", meaning: "問題" }
    ] },
  { level: "1", hangul: "개", katakana: "ケ", meaning: "犬・〜個",
    example: "개를 키워요.", exampleKatakana: "ケルル キウォヨ", exampleMeaning: "犬を飼っています。",
    breakdown: [
      { word: "키워요", meaning: "飼っています" }
    ] },
  { level: "1", hangul: "더", katakana: "ト", meaning: "もっと",
    example: "더 주세요.", exampleKatakana: "ト チュセヨ", exampleMeaning: "もっとください。",
    breakdown: [
      { word: "주세요", meaning: "ください" }
    ] },
  { level: "1", hangul: "팔월", katakana: "パルォル", meaning: "8月",
    example: "팔월은 더워요.", exampleKatakana: "パルォルン トウォヨ", exampleMeaning: "8月は暑いです。",
    breakdown: [
      { word: "더워요", meaning: "暑いです" }
    ] },
  { level: "1", hangul: "식사", katakana: "シクサ", meaning: "食事",
    example: "식사를 해요.", exampleKatakana: "シクサルル ヘヨ", exampleMeaning: "食事をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "연극", katakana: "ヨングク", meaning: "演劇",
    example: "연극을 봐요.", exampleKatakana: "ヨンググル バヨ", exampleMeaning: "演劇を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "1", hangul: "힘들다", katakana: "ヒムドゥルダ", meaning: "大変だ",
    example: "일이 힘들어요.", exampleKatakana: "イリ ヒムドゥロヨ", exampleMeaning: "仕事が大変です。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "1", hangul: "갈아타다", katakana: "カラタダ", meaning: "乗り換える",
    example: "지하철을 갈아타요.", exampleKatakana: "チハチョルル カラタヨ", exampleMeaning: "地下鉄を乗り換えます。",
    breakdown: [
      { word: "지하철", meaning: "地下鉄" }
    ] },
  { level: "1", hangul: "잔", katakana: "チャン", meaning: "杯",
    example: "커피 한 잔 주세요.", exampleKatakana: "コピ ハン ジャン チュセヨ", exampleMeaning: "コーヒーを一杯ください。",
    breakdown: [
      { word: "커피", meaning: "コーヒー" }
    ] },
  { level: "1", hangul: "한국", katakana: "ハングク", meaning: "韓国",
    example: "한국에 살아요.", exampleKatakana: "ハングゲ サラヨ", exampleMeaning: "韓国に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "1", hangul: "흐리다", katakana: "フリダ", meaning: "曇っている",
    example: "오늘은 흐려요.", exampleKatakana: "オヌルン フリョヨ", exampleMeaning: "今日は曇っています。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "서점", katakana: "ソジョム", meaning: "書店",
    example: "서점에서 책을 사요.", exampleKatakana: "ソジョメソ チェグル サヨ", exampleMeaning: "書店で本を買います。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "1", hangul: "도와주다", katakana: "トワジュダ", meaning: "助けてあげる",
    example: "친구를 도와줘요.", exampleKatakana: "チングルル トワジョヨ", exampleMeaning: "友達を助けてあげます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "못", katakana: "モッ", meaning: "〜できない",
    example: "수영을 못해요.", exampleKatakana: "スヨンウル モテヨ", exampleMeaning: "泳げません。",
    breakdown: [
      { word: "수영", meaning: "水泳" }
    ] },
  { level: "1", hangul: "출발", katakana: "チュルバル", meaning: "出発",
    example: "아홉 시에 출발해요.", exampleKatakana: "アホプ シエ チュルバレヨ", exampleMeaning: "9時に出発します。",
    breakdown: [
      { word: "아홉 시", meaning: "9時" }
    ] },
  { level: "1", hangul: "주다", katakana: "チュダ", meaning: "あげる",
    example: "꽃을 줘요.", exampleKatakana: "コチュル ジョヨ", exampleMeaning: "花をあげます。",
    breakdown: [
      { word: "꽃", meaning: "花" }
    ] },
  { level: "1", hangul: "라면", katakana: "ラミョン", meaning: "ラーメン",
    example: "라면을 먹어요.", exampleKatakana: "ラミョヌル モゴヨ", exampleMeaning: "ラーメンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "아프다", katakana: "アプダ", meaning: "痛い",
    example: "배가 아파요.", exampleKatakana: "ペガ アパヨ", exampleMeaning: "お腹が痛いです。",
    breakdown: [
      { word: "배", meaning: "お腹" }
    ] },
  { level: "1", hangul: "담배", katakana: "タムベ", meaning: "たばこ",
    example: "담배를 안 피워요.", exampleKatakana: "タムベルル アン ピウォヨ", exampleMeaning: "たばこを吸いません。",
    breakdown: [
      { word: "안", meaning: "〜ない" }
    ] },
  { level: "1", hangul: "요일", katakana: "ヨイル", meaning: "曜日",
    example: "무슨 요일이에요?", exampleKatakana: "ムスン ヨイリエヨ", exampleMeaning: "何曜日ですか。",
    breakdown: [
      { word: "무슨", meaning: "何の" }
    ] },
  { level: "1", hangul: "소금", katakana: "ソグム", meaning: "塩",
    example: "소금을 넣어요.", exampleKatakana: "ソグムル ノオヨ", exampleMeaning: "塩を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "1", hangul: "그러면", katakana: "クロミョン", meaning: "それなら",
    example: "그러면 같이 가요.", exampleKatakana: "クロミョン カチ カヨ", exampleMeaning: "それなら一緒に行きましょう。",
    breakdown: [
      { word: "같이", meaning: "一緒に" }
    ] },
  { level: "1", hangul: "아파트", katakana: "アパトゥ", meaning: "マンション",
    example: "아파트에 살아요.", exampleKatakana: "アパトゥエ サラヨ", exampleMeaning: "マンションに住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "1", hangul: "처음", katakana: "チョウム", meaning: "初めて",
    example: "처음 만나요.", exampleKatakana: "チョウム マンナヨ", exampleMeaning: "初めて会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "1", hangul: "음료수", katakana: "ウムリョス", meaning: "飲み物",
    example: "음료수를 마셔요.", exampleKatakana: "ウムリョスルル マショヨ", exampleMeaning: "飲み物を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "필통", katakana: "ピルトン", meaning: "筆箱",
    example: "필통에 연필이 있어요.", exampleKatakana: "ピルトンエ ヨンピリ イッソヨ", exampleMeaning: "筆箱に鉛筆があります。",
    breakdown: [
      { word: "연필", meaning: "鉛筆" }
    ] },
  { level: "1", hangul: "맞다", katakana: "マッタ", meaning: "合う",
    example: "답이 맞아요.", exampleKatakana: "タビ マジャヨ", exampleMeaning: "答えが合っています。",
    breakdown: [
      { word: "답", meaning: "答え" }
    ] },
  { level: "1", hangul: "따뜻하다", katakana: "タットゥタダ", meaning: "暖かい",
    example: "날씨가 따뜻해요.", exampleKatakana: "ナルシガ タットゥテヨ", exampleMeaning: "天気が暖かいです。",
    breakdown: [
      { word: "날씨", meaning: "天気" }
    ] },
  { level: "1", hangul: "식당", katakana: "シクタン", meaning: "食堂",
    example: "식당에서 밥을 먹어요.", exampleKatakana: "シクタンエソ パブル モゴヨ", exampleMeaning: "食堂でご飯を食べます。",
    breakdown: [
      { word: "밥", meaning: "ご飯" }
    ] },
  { level: "1", hangul: "남동생", katakana: "ナムドンセン", meaning: "弟",
    example: "남동생이 있어요.", exampleKatakana: "ナムドンセンイ イッソヨ", exampleMeaning: "弟がいます。",
    breakdown: [
      { word: "있어요", meaning: "います" }
    ] },
  { level: "1", hangul: "아저씨", katakana: "アジョッシ", meaning: "おじさん",
    example: "아저씨가 친절해요.", exampleKatakana: "アジョッシガ チンジョレヨ", exampleMeaning: "おじさんが親切です。",
    breakdown: [
      { word: "친절해요", meaning: "親切です" }
    ] },
  { level: "1", hangul: "초대", katakana: "チョデ", meaning: "招待",
    example: "생일에 초대해요.", exampleKatakana: "センイレ チョデヘヨ", exampleMeaning: "誕生日に招待します。",
    breakdown: [
      { word: "생일", meaning: "誕生日" }
    ] },
  { level: "1", hangul: "늦다", katakana: "ヌッタ", meaning: "遅い・遅れる",
    example: "약속에 늦었어요.", exampleKatakana: "ヤクソゲ ヌジョッソヨ", exampleMeaning: "約束に遅れました。",
    breakdown: [
      { word: "약속", meaning: "約束" }
    ] },
  { level: "1", hangul: "동생", katakana: "トンセン", meaning: "弟・妹",
    example: "동생이 귀여워요.", exampleKatakana: "トンセンイ クィヨウォヨ", exampleMeaning: "弟（妹）がかわいいです。",
    breakdown: [
      { word: "귀여워요", meaning: "かわいいです" }
    ] },
  { level: "1", hangul: "그런데", katakana: "クロンデ", meaning: "ところで",
    example: "그런데 시간 있어요?", exampleKatakana: "クロンデ シガン イッソヨ", exampleMeaning: "ところで時間ありますか。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "날짜", katakana: "ナルチャ", meaning: "日付",
    example: "날짜를 정해요.", exampleKatakana: "ナルチャルル チョンヘヨ", exampleMeaning: "日付を決めます。",
    breakdown: [
      { word: "정해요", meaning: "決めます" }
    ] },
  { level: "1", hangul: "건물", katakana: "コンムル", meaning: "建物",
    example: "높은 건물이에요.", exampleKatakana: "ノプン コンムリエヨ", exampleMeaning: "高い建物です。",
    breakdown: [
      { word: "높은", meaning: "高い" }
    ] },
  { level: "1", hangul: "사람", katakana: "サラム", meaning: "人",
    example: "사람이 많아요.", exampleKatakana: "サラミ マナヨ", exampleMeaning: "人が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "1", hangul: "칠월", katakana: "チルォル", meaning: "7月",
    example: "칠월에 방학해요.", exampleKatakana: "チルォレ パンハケヨ", exampleMeaning: "7月に休みになります。",
    breakdown: [
      { word: "방학", meaning: "休み" }
    ] },
  { level: "1", hangul: "시청", katakana: "シチョン", meaning: "市庁",
    example: "시청 앞에서 만나요.", exampleKatakana: "シチョン アペソ マンナヨ", exampleMeaning: "市庁の前で会いましょう。",
    breakdown: [
      { word: "앞", meaning: "前" }
    ] },
  { level: "1", hangul: "형", katakana: "ヒョン", meaning: "（弟から見た）兄",
    example: "형은 의사예요.", exampleKatakana: "ヒョンウン ウィサエヨ", exampleMeaning: "兄は医者です。",
    breakdown: [
      { word: "의사", meaning: "医者" }
    ] },
  { level: "1", hangul: "아래", katakana: "アレ", meaning: "下",
    example: "책상 아래에 있어요.", exampleKatakana: "チェクサン アレエ イッソヨ", exampleMeaning: "机の下にあります。",
    breakdown: [
      { word: "책상", meaning: "机" }
    ] },
  { level: "1", hangul: "그렇다", katakana: "クロタ", meaning: "そうだ",
    example: "네, 그래요.", exampleKatakana: "ネ クレヨ", exampleMeaning: "はい、そうです。",
    breakdown: [
      { word: "네", meaning: "はい" }
    ] },
  { level: "1", hangul: "김밥", katakana: "キムパプ", meaning: "キンパ",
    example: "김밥을 먹어요.", exampleKatakana: "キムパブル モゴヨ", exampleMeaning: "キンパを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "바람", katakana: "パラム", meaning: "風",
    example: "바람이 불어요.", exampleKatakana: "パラミ プロヨ", exampleMeaning: "風が吹きます。",
    breakdown: [
      { word: "불어요", meaning: "吹きます" }
    ] },
  { level: "1", hangul: "불", katakana: "プル", meaning: "火・電気",
    example: "불을 켜요.", exampleKatakana: "プルル キョヨ", exampleMeaning: "電気をつけます。",
    breakdown: [
      { word: "켜요", meaning: "つけます" }
    ] },
  { level: "1", hangul: "잘못", katakana: "チャルモッ", meaning: "間違い",
    example: "제 잘못이에요.", exampleKatakana: "チェ チャルモシエヨ", exampleMeaning: "私のミスです。",
    breakdown: [
      { word: "제", meaning: "私の" }
    ] },
  { level: "1", hangul: "걸리다", katakana: "コルリダ", meaning: "かかる",
    example: "시간이 걸려요.", exampleKatakana: "シガニ コルリョヨ", exampleMeaning: "時間がかかります。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "놀다", katakana: "ノルダ", meaning: "遊ぶ",
    example: "친구와 놀아요.", exampleKatakana: "チングワ ノラヨ", exampleMeaning: "友達と遊びます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "만나다", katakana: "マンナダ", meaning: "会う",
    example: "친구를 만나요.", exampleKatakana: "チングルル マンナヨ", exampleMeaning: "友達に会います。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "몸", katakana: "モム", meaning: "体",
    example: "몸이 아파요.", exampleKatakana: "モミ アパヨ", exampleMeaning: "体が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "그리다", katakana: "クリダ", meaning: "描く",
    example: "그림을 그려요.", exampleKatakana: "クリムル クリョヨ", exampleMeaning: "絵を描きます。",
    breakdown: [
      { word: "그림", meaning: "絵" }
    ] },
  { level: "1", hangul: "대답", katakana: "テダプ", meaning: "返事",
    example: "대답을 해요.", exampleKatakana: "テダブル ヘヨ", exampleMeaning: "返事をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "컴퓨터", katakana: "コムピュト", meaning: "コンピューター",
    example: "컴퓨터를 써요.", exampleKatakana: "コムピュトルル ソヨ", exampleMeaning: "コンピューターを使います。",
    breakdown: [
      { word: "써요", meaning: "使います" }
    ] },
  { level: "1", hangul: "아니다", katakana: "アニダ", meaning: "違う",
    example: "저는 학생이 아니에요.", exampleKatakana: "チョヌン ハクセンイ アニエヨ", exampleMeaning: "私は学生ではありません。",
    breakdown: [
      { word: "학생", meaning: "学生" }
    ] },
  { level: "1", hangul: "사전", katakana: "サジョン", meaning: "辞書",
    example: "사전을 찾아요.", exampleKatakana: "サジョヌル チャジャヨ", exampleMeaning: "辞書を引きます。",
    breakdown: [
      { word: "찾아요", meaning: "引きます" }
    ] },
  { level: "1", hangul: "가볍다", katakana: "カビョプタ", meaning: "軽い",
    example: "가방이 가벼워요.", exampleKatakana: "カバンイ カビョウォヨ", exampleMeaning: "かばんが軽いです。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "1", hangul: "언제", katakana: "オンジェ", meaning: "いつ",
    example: "언제 만나요?", exampleKatakana: "オンジェ マンナヨ", exampleMeaning: "いつ会いますか。",
    breakdown: [
      { word: "만나요", meaning: "会いますか" }
    ] },
  { level: "1", hangul: "청소", katakana: "チョンソ", meaning: "掃除",
    example: "방을 청소해요.", exampleKatakana: "バンウル チョンソヘヨ", exampleMeaning: "部屋を掃除します。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "1", hangul: "부르다", katakana: "プルダ", meaning: "呼ぶ・歌う",
    example: "노래를 불러요.", exampleKatakana: "ノレルル プルロヨ", exampleMeaning: "歌を歌います。",
    breakdown: [
      { word: "노래", meaning: "歌" }
    ] },
  { level: "1", hangul: "바로", katakana: "パロ", meaning: "すぐに",
    example: "바로 갈게요.", exampleKatakana: "パロ カルケヨ", exampleMeaning: "すぐに行きます。",
    breakdown: [
      { word: "갈게요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "어제", katakana: "オジェ", meaning: "昨日",
    example: "어제 만났어요.", exampleKatakana: "オジェ マンナッソヨ", exampleMeaning: "昨日会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "1", hangul: "보통", katakana: "ポトン", meaning: "普通",
    example: "보통 일곱 시에 일어나요.", exampleKatakana: "ポトン イルゴプ シエ イロナヨ", exampleMeaning: "普段7時に起きます。",
    breakdown: [
      { word: "일곱 시", meaning: "7時" }
    ] },
  { level: "1", hangul: "창문", katakana: "チャンムン", meaning: "窓",
    example: "창문을 열어요.", exampleKatakana: "チャンムヌル ヨロヨ", exampleMeaning: "窓を開けます。",
    breakdown: [
      { word: "열어요", meaning: "開けます" }
    ] },
  { level: "1", hangul: "옷", katakana: "オッ", meaning: "服",
    example: "옷을 사요.", exampleKatakana: "オスル サヨ", exampleMeaning: "服を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "배우다", katakana: "ペウダ", meaning: "習う",
    example: "한국어를 배워요.", exampleKatakana: "ハングゴルル ペウォヨ", exampleMeaning: "韓国語を習います。",
    breakdown: [
      { word: "한국어", meaning: "韓国語" }
    ] },
  { level: "1", hangul: "외국인", katakana: "ウェググイン", meaning: "外国人",
    example: "외국인 친구가 있어요.", exampleKatakana: "ウェググイン チングガ イッソヨ", exampleMeaning: "外国人の友達がいます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "전화번호", katakana: "チョナボノ", meaning: "電話番号",
    example: "전화번호를 알려줘요.", exampleKatakana: "チョナボノルル アルリョジョヨ", exampleMeaning: "電話番号を教えてください。",
    breakdown: [
      { word: "알려줘요", meaning: "教えてください" }
    ] },
  { level: "1", hangul: "유명", katakana: "ユミョン", meaning: "有名",
    example: "유명한 가수예요.", exampleKatakana: "ユミョンハン カスエヨ", exampleMeaning: "有名な歌手です。",
    breakdown: [
      { word: "가수", meaning: "歌手" }
    ] },
  { level: "1", hangul: "부탁", katakana: "プタク", meaning: "お願い",
    example: "부탁이 있어요.", exampleKatakana: "プタギ イッソヨ", exampleMeaning: "お願いがあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "1", hangul: "후", katakana: "フ", meaning: "後",
    example: "식사 후에 만나요.", exampleKatakana: "シクサ フエ マンナヨ", exampleMeaning: "食事の後に会いましょう。",
    breakdown: [
      { word: "식사", meaning: "食事" }
    ] },
  { level: "1", hangul: "호텔", katakana: "ホテル", meaning: "ホテル",
    example: "호텔에서 자요.", exampleKatakana: "ホテレソ ジャヨ", exampleMeaning: "ホテルで寝ます。",
    breakdown: [
      { word: "자요", meaning: "寝ます" }
    ] },
  { level: "1", hangul: "가수", katakana: "カス", meaning: "歌手",
    example: "유명한 가수예요.", exampleKatakana: "ユミョンハン カスエヨ", exampleMeaning: "有名な歌手です。",
    breakdown: [
      { word: "유명한", meaning: "有名な" }
    ] },
  { level: "1", hangul: "의자", katakana: "ウィジャ", meaning: "椅子",
    example: "의자에 앉아요.", exampleKatakana: "ウィジャエ アンジャヨ", exampleMeaning: "椅子に座ります。",
    breakdown: [
      { word: "앉아요", meaning: "座ります" }
    ] },
  { level: "1", hangul: "찾다", katakana: "チャッタ", meaning: "探す",
    example: "열쇠를 찾아요.", exampleKatakana: "ヨルセルル チャジャヨ", exampleMeaning: "鍵を探します。",
    breakdown: [
      { word: "열쇠", meaning: "鍵" }
    ] },
  { level: "1", hangul: "회의", katakana: "フェイ", meaning: "会議",
    example: "회의를 해요.", exampleKatakana: "フェイルル ヘヨ", exampleMeaning: "会議をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "정말", katakana: "チョンマル", meaning: "本当に",
    example: "정말 좋아요.", exampleKatakana: "チョンマル チョアヨ", exampleMeaning: "本当に良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "1", hangul: "일", katakana: "イル", meaning: "仕事・1",
    example: "일이 많아요.", exampleKatakana: "イリ マナヨ", exampleMeaning: "仕事が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "1", hangul: "다리", katakana: "タリ", meaning: "脚・橋",
    example: "다리가 아파요.", exampleKatakana: "タリガ アパヨ", exampleMeaning: "脚が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "안", katakana: "アン", meaning: "中・〜ない",
    example: "가방 안에 있어요.", exampleKatakana: "カバン アネ イッソヨ", exampleMeaning: "かばんの中にあります。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "1", hangul: "할아버지", katakana: "ハラボジ", meaning: "おじいさん",
    example: "할아버지는 건강하세요.", exampleKatakana: "ハラボジヌン コンガンハセヨ", exampleMeaning: "おじいさんはお元気です。",
    breakdown: [
      { word: "건강하세요", meaning: "お元気です" }
    ] },
  { level: "1", hangul: "덥다", katakana: "トプタ", meaning: "暑い",
    example: "여름은 더워요.", exampleKatakana: "ヨルムン トウォヨ", exampleMeaning: "夏は暑いです。",
    breakdown: [
      { word: "여름", meaning: "夏" }
    ] },
  { level: "1", hangul: "우체국", katakana: "ウチェグク", meaning: "郵便局",
    example: "우체국에 가요.", exampleKatakana: "ウチェグゲ カヨ", exampleMeaning: "郵便局に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "초콜릿", katakana: "チョコルリッ", meaning: "チョコレート",
    example: "초콜릿을 좋아해요.", exampleKatakana: "チョコルリスル チョアヘヨ", exampleMeaning: "チョコレートが好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "팔", katakana: "パル", meaning: "腕・8",
    example: "팔이 아파요.", exampleKatakana: "パリ アパヨ", exampleMeaning: "腕が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "선생님", katakana: "ソンセンニム", meaning: "先生",
    example: "선생님이 친절해요.", exampleKatakana: "ソンセンニミ チンジョレヨ", exampleMeaning: "先生が親切です。",
    breakdown: [
      { word: "친절해요", meaning: "親切です" }
    ] },
  { level: "1", hangul: "주말", katakana: "チュマル", meaning: "週末",
    example: "주말에 쉬어요.", exampleKatakana: "チュマレ シュィオヨ", exampleMeaning: "週末に休みます。",
    breakdown: [
      { word: "쉬어요", meaning: "休みます" }
    ] },
  { level: "1", hangul: "박물관", katakana: "パンムルグァン", meaning: "博物館",
    example: "박물관에 가요.", exampleKatakana: "パンムルグァネ カヨ", exampleMeaning: "博物館に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "맵다", katakana: "メプタ", meaning: "辛い",
    example: "김치가 매워요.", exampleKatakana: "キムチガ メウォヨ", exampleMeaning: "キムチが辛いです。",
    breakdown: [
      { word: "김치", meaning: "キムチ" }
    ] },
  { level: "1", hangul: "병원", katakana: "ピョンウォン", meaning: "病院",
    example: "병원에 가요.", exampleKatakana: "ピョンウォネ カヨ", exampleMeaning: "病院に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "얼굴", katakana: "オルグル", meaning: "顔",
    example: "얼굴이 예뻐요.", exampleKatakana: "オルグリ イェッポヨ", exampleMeaning: "顔がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "1", hangul: "맛", katakana: "マッ", meaning: "味",
    example: "맛이 좋아요.", exampleKatakana: "マシ チョアヨ", exampleMeaning: "味が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "1", hangul: "다", katakana: "タ", meaning: "全部",
    example: "다 먹었어요.", exampleKatakana: "タ モゴッソヨ", exampleMeaning: "全部食べました。",
    breakdown: [
      { word: "먹었어요", meaning: "食べました" }
    ] },
  { level: "1", hangul: "집", katakana: "チプ", meaning: "家",
    example: "집에 가요.", exampleKatakana: "チベ カヨ", exampleMeaning: "家に帰ります。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "방", katakana: "パン", meaning: "部屋",
    example: "방을 청소해요.", exampleKatakana: "パンウル チョンソヘヨ", exampleMeaning: "部屋を掃除します。",
    breakdown: [
      { word: "청소", meaning: "掃除" }
    ] },
  { level: "1", hangul: "직원", katakana: "チグォン", meaning: "職員",
    example: "직원에게 물어봐요.", exampleKatakana: "チグォネゲ ムロバヨ", exampleMeaning: "職員に聞いてみます。",
    breakdown: [
      { word: "물어봐요", meaning: "聞いてみます" }
    ] },
  { level: "1", hangul: "그리고", katakana: "クリゴ", meaning: "そして",
    example: "밥을 먹어요. 그리고 커피를 마셔요.", exampleKatakana: "パブル モゴヨ クリゴ コピルル マショヨ", exampleMeaning: "ご飯を食べます。そしてコーヒーを飲みます。",
    breakdown: [
      { word: "밥", meaning: "ご飯" }
    ] },
  { level: "1", hangul: "같다", katakana: "カッタ", meaning: "同じだ",
    example: "생각이 같아요.", exampleKatakana: "センガギ カタヨ", exampleMeaning: "考えが同じです。",
    breakdown: [
      { word: "생각", meaning: "考え" }
    ] },
  { level: "1", hangul: "그렇지만", katakana: "クロチマン", meaning: "しかし",
    example: "비싸요. 그렇지만 좋아요.", exampleKatakana: "ピッサヨ クロチマン チョアヨ", exampleMeaning: "高いです。しかし良いです。",
    breakdown: [
      { word: "비싸요", meaning: "高いです" }
    ] },
  { level: "1", hangul: "영화관", katakana: "ヨンファグァン", meaning: "映画館",
    example: "영화관에서 영화를 봐요.", exampleKatakana: "ヨンファグァネソ ヨンファルル バヨ", exampleMeaning: "映画館で映画を見ます。",
    breakdown: [
      { word: "영화", meaning: "映画" }
    ] },
  { level: "1", hangul: "하다", katakana: "ハダ", meaning: "する",
    example: "숙제를 해요.", exampleKatakana: "スクチェルル ヘヨ", exampleMeaning: "宿題をします。",
    breakdown: [
      { word: "숙제", meaning: "宿題" }
    ] },
  { level: "1", hangul: "이월", katakana: "イウォル", meaning: "2月",
    example: "이월은 짧아요.", exampleKatakana: "イウォルン チャルバヨ", exampleMeaning: "2月は短いです。",
    breakdown: [
      { word: "짧아요", meaning: "短いです" }
    ] },
  { level: "1", hangul: "밥", katakana: "パプ", meaning: "ご飯",
    example: "밥을 먹어요.", exampleKatakana: "パブル モゴヨ", exampleMeaning: "ご飯を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "지하철", katakana: "チハチョル", meaning: "地下鉄",
    example: "지하철을 타요.", exampleKatakana: "チハチョルル タヨ", exampleMeaning: "地下鉄に乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "1", hangul: "기간", katakana: "キガン", meaning: "期間",
    example: "시험 기간이에요.", exampleKatakana: "シホム キガニエヨ", exampleMeaning: "試験期間です。",
    breakdown: [
      { word: "시험", meaning: "試験" }
    ] },
  { level: "1", hangul: "어머니", katakana: "オモニ", meaning: "母",
    example: "어머니는 요리를 잘해요.", exampleKatakana: "オモニヌン ヨリルル チャレヨ", exampleMeaning: "母は料理が上手です。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "1", hangul: "운동장", katakana: "ウンドンジャン", meaning: "運動場",
    example: "운동장에서 놀아요.", exampleKatakana: "ウンドンジャンエソ ノラヨ", exampleMeaning: "運動場で遊びます。",
    breakdown: [
      { word: "놀아요", meaning: "遊びます" }
    ] },
  { level: "1", hangul: "모두", katakana: "モドゥ", meaning: "みんな",
    example: "모두 왔어요.", exampleKatakana: "モドゥ ワッソヨ", exampleMeaning: "みんな来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "건강", katakana: "コンガン", meaning: "健康",
    example: "건강이 중요해요.", exampleKatakana: "コンガンイ チュンヨヘヨ", exampleMeaning: "健康が重要です。",
    breakdown: [
      { word: "중요해요", meaning: "重要です" }
    ] },
  { level: "1", hangul: "아침", katakana: "アチム", meaning: "朝・朝食",
    example: "아침을 먹어요.", exampleKatakana: "アチムル モゴヨ", exampleMeaning: "朝食を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "많이", katakana: "マニ", meaning: "たくさん",
    example: "많이 드세요.", exampleKatakana: "マニ トゥセヨ", exampleMeaning: "たくさん召し上がってください。",
    breakdown: [
      { word: "드세요", meaning: "召し上がってください" }
    ] },
  { level: "1", hangul: "시작", katakana: "シジャク", meaning: "始まり",
    example: "수업이 시작해요.", exampleKatakana: "スオビ シジャケヨ", exampleMeaning: "授業が始まります。",
    breakdown: [
      { word: "수업", meaning: "授業" }
    ] },
  { level: "1", hangul: "친절", katakana: "チンジョル", meaning: "親切",
    example: "친절한 사람이에요.", exampleKatakana: "チンジョラン サラミエヨ", exampleMeaning: "親切な人です。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "1", hangul: "영화배우", katakana: "ヨンファペウ", meaning: "映画俳優",
    example: "유명한 영화배우예요.", exampleKatakana: "ユミョンハン ヨンファペウエヨ", exampleMeaning: "有名な映画俳優です。",
    breakdown: [
      { word: "유명한", meaning: "有名な" }
    ] },
  { level: "1", hangul: "좀", katakana: "チョム", meaning: "少し",
    example: "좀 도와주세요.", exampleKatakana: "チョム トワジュセヨ", exampleMeaning: "少し手伝ってください。",
    breakdown: [
      { word: "도와주세요", meaning: "手伝ってください" }
    ] },
  { level: "1", hangul: "말", katakana: "マル", meaning: "言葉・馬",
    example: "한국말을 배워요.", exampleKatakana: "ハングンマルル ペウォヨ", exampleMeaning: "韓国語を習います。",
    breakdown: [
      { word: "배워요", meaning: "習います" }
    ] },
  { level: "1", hangul: "열심히", katakana: "ヨルシミ", meaning: "一生懸命",
    example: "열심히 공부해요.", exampleKatakana: "ヨルシミ コンブヘヨ", exampleMeaning: "一生懸命勉強します。",
    breakdown: [
      { word: "공부", meaning: "勉強" }
    ] },
  { level: "1", hangul: "장소", katakana: "チャンソ", meaning: "場所",
    example: "약속 장소가 어디예요?", exampleKatakana: "ヤクソク チャンソガ オディエヨ", exampleMeaning: "約束の場所はどこですか。",
    breakdown: [
      { word: "약속", meaning: "約束" }
    ] },
  { level: "1", hangul: "한복", katakana: "ハンボク", meaning: "韓服",
    example: "한복을 입어요.", exampleKatakana: "ハンボグル イボヨ", exampleMeaning: "韓服を着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "1", hangul: "밤", katakana: "パム", meaning: "夜",
    example: "밤에 산책해요.", exampleKatakana: "パメ サンチェケヨ", exampleMeaning: "夜に散歩します。",
    breakdown: [
      { word: "산책", meaning: "散歩" }
    ] },
  { level: "1", hangul: "옆", katakana: "ヨプ", meaning: "隣",
    example: "제 옆에 앉으세요.", exampleKatakana: "チェ ヨペ アンジュセヨ", exampleMeaning: "私の隣に座ってください。",
    breakdown: [
      { word: "앉으세요", meaning: "座ってください" }
    ] },
  { level: "1", hangul: "며칠", katakana: "ミョチル", meaning: "何日",
    example: "며칠 동안 여행해요?", exampleKatakana: "ミョチル トンアン ヨヘンヘヨ", exampleMeaning: "何日間旅行しますか。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "1", hangul: "정류장", katakana: "チョンニュジャン", meaning: "停留所",
    example: "버스 정류장에서 기다려요.", exampleKatakana: "ボス チョンニュジャンエソ キダリョヨ", exampleMeaning: "バス停で待ちます。",
    breakdown: [
      { word: "버스", meaning: "バス" }
    ] },
  { level: "1", hangul: "삼월", katakana: "サムォル", meaning: "3月",
    example: "삼월에 학교가 시작해요.", exampleKatakana: "サムォレ ハッキョガ シジャケヨ", exampleMeaning: "3月に学校が始まります。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "텔레비전", katakana: "テルレビジョン", meaning: "テレビ",
    example: "텔레비전을 봐요.", exampleKatakana: "テルレビジョヌル バヨ", exampleMeaning: "テレビを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "1", hangul: "생활", katakana: "センファル", meaning: "生活",
    example: "한국 생활이 즐거워요.", exampleKatakana: "ハングク センファリ チュルゴウォヨ", exampleMeaning: "韓国生活が楽しいです。",
    breakdown: [
      { word: "즐거워요", meaning: "楽しいです" }
    ] },
  { level: "1", hangul: "가요", katakana: "カヨ", meaning: "歌謡（K-POPなど）",
    example: "한국 가요를 좋아해요.", exampleKatakana: "ハングク カヨルル チョアヘヨ", exampleMeaning: "韓国の歌謡が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "우산", katakana: "ウサン", meaning: "傘",
    example: "우산을 가져가세요.", exampleKatakana: "ウサヌル カジョガセヨ", exampleMeaning: "傘を持って行ってください。",
    breakdown: [
      { word: "가져가세요", meaning: "持って行ってください" }
    ] },
  { level: "1", hangul: "월", katakana: "ウォル", meaning: "〜月",
    example: "몇 월에 태어났어요?", exampleKatakana: "ミョドウォレ テオナッソヨ", exampleMeaning: "何月に生まれましたか。",
    breakdown: [
      { word: "몇", meaning: "何" }
    ] },
  { level: "1", hangul: "타다", katakana: "タダ", meaning: "乗る",
    example: "버스를 타요.", exampleKatakana: "ボスルル タヨ", exampleMeaning: "バスに乗ります。",
    breakdown: [
      { word: "버스", meaning: "バス" }
    ] },
  { level: "1", hangul: "물", katakana: "ムル", meaning: "水",
    example: "물을 마셔요.", exampleKatakana: "ムルル マショヨ", exampleMeaning: "水を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "1", hangul: "태권도", katakana: "テクォンド", meaning: "テコンドー",
    example: "태권도를 배워요.", exampleKatakana: "テクォンドルル ペウォヨ", exampleMeaning: "テコンドーを習います。",
    breakdown: [
      { word: "배워요", meaning: "習います" }
    ] },
  { level: "1", hangul: "시다", katakana: "シダ", meaning: "酸っぱい",
    example: "이 과일은 셔요.", exampleKatakana: "イ クァイルン ショヨ", exampleMeaning: "この果物は酸っぱいです。",
    breakdown: [
      { word: "과일", meaning: "果物" }
    ] },
  { level: "1", hangul: "일찍", katakana: "イルチク", meaning: "早く",
    example: "오늘은 일찍 자요.", exampleKatakana: "オヌルン イルチク チャヨ", exampleMeaning: "今日は早く寝ます。",
    breakdown: [
      { word: "자요", meaning: "寝ます" }
    ] },
  { level: "1", hangul: "안경", katakana: "アンギョン", meaning: "眼鏡",
    example: "안경을 써요.", exampleKatakana: "アンギョンウル ソヨ", exampleMeaning: "眼鏡をかけます。",
    breakdown: [
      { word: "써요", meaning: "かけます" }
    ] },
  { level: "1", hangul: "인사", katakana: "インサ", meaning: "挨拶",
    example: "선생님께 인사해요.", exampleKatakana: "ソンセンニムケ インサヘヨ", exampleMeaning: "先生に挨拶します。",
    breakdown: [
      { word: "선생님", meaning: "先生" }
    ] },
  { level: "1", hangul: "퇴근", katakana: "トゥェグン", meaning: "退勤",
    example: "여섯 시에 퇴근해요.", exampleKatakana: "ヨソッ シエ トゥェグネヨ", exampleMeaning: "6時に退勤します。",
    breakdown: [
      { word: "여섯 시", meaning: "6時" }
    ] },
  { level: "1", hangul: "무겁다", katakana: "ムゴプタ", meaning: "重い",
    example: "가방이 무거워요.", exampleKatakana: "カバンイ ムゴウォヨ", exampleMeaning: "かばんが重いです。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "1", hangul: "교통", katakana: "キョトン", meaning: "交通",
    example: "교통이 편리해요.", exampleKatakana: "キョトンイ ピョルリヘヨ", exampleMeaning: "交通が便利です。",
    breakdown: [
      { word: "편리해요", meaning: "便利です" }
    ] },
  { level: "1", hangul: "찍다", katakana: "チクタ", meaning: "撮る",
    example: "사진을 찍어요.", exampleKatakana: "サジヌル チゴヨ", exampleMeaning: "写真を撮ります。",
    breakdown: [
      { word: "사진", meaning: "写真" }
    ] },
  { level: "1", hangul: "하지만", katakana: "ハジマン", meaning: "しかし",
    example: "비싸요. 하지만 사고 싶어요.", exampleKatakana: "ピッサヨ ハジマン サゴ シポヨ", exampleMeaning: "高いです。しかし買いたいです。",
    breakdown: [
      { word: "비싸요", meaning: "高いです" }
    ] },
  { level: "1", hangul: "도착", katakana: "トチャク", meaning: "到着",
    example: "공항에 도착했어요.", exampleKatakana: "コンハンエ トチャケッソヨ", exampleMeaning: "空港に到着しました。",
    breakdown: [
      { word: "공항", meaning: "空港" }
    ] },
  { level: "1", hangul: "묻다", katakana: "ムッタ", meaning: "尋ねる",
    example: "길을 물어요.", exampleKatakana: "キルル ムロヨ", exampleMeaning: "道を尋ねます。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "1", hangul: "거실", katakana: "コシル", meaning: "居間",
    example: "거실에서 텔레비전을 봐요.", exampleKatakana: "コシレソ テルレビジョヌル バヨ", exampleMeaning: "居間でテレビを見ます。",
    breakdown: [
      { word: "텔레비전", meaning: "テレビ" }
    ] },
  { level: "1", hangul: "생일", katakana: "センイル", meaning: "誕生日",
    example: "오늘은 제 생일이에요.", exampleKatakana: "オヌルン チェ センイリエヨ", exampleMeaning: "今日は私の誕生日です。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "일요일", katakana: "イリョイル", meaning: "日曜日",
    example: "일요일에 쉬어요.", exampleKatakana: "イリョイレ シュィオヨ", exampleMeaning: "日曜日に休みます。",
    breakdown: [
      { word: "쉬어요", meaning: "休みます" }
    ] },
  { level: "1", hangul: "대학", katakana: "テハク", meaning: "大学",
    example: "대학에 다녀요.", exampleKatakana: "テハゲ タニョヨ", exampleMeaning: "大学に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "1", hangul: "음식", katakana: "ウムシク", meaning: "料理・食べ物",
    example: "한국 음식을 좋아해요.", exampleKatakana: "ハングク ウムシグル チョアヘヨ", exampleMeaning: "韓国料理が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "너무", katakana: "ノム", meaning: "あまりに・とても",
    example: "너무 좋아요.", exampleKatakana: "ノム チョアヨ", exampleMeaning: "とても良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "1", hangul: "마음", katakana: "マウム", meaning: "心",
    example: "마음이 편해요.", exampleKatakana: "マウミ ピョネヨ", exampleMeaning: "心が楽です。",
    breakdown: [
      { word: "편해요", meaning: "楽です" }
    ] },
  { level: "1", hangul: "층", katakana: "チュン", meaning: "階",
    example: "이 층에 있어요.", exampleKatakana: "イ チュンエ イッソヨ", exampleMeaning: "この階にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "1", hangul: "점심", katakana: "チョムシム", meaning: "昼食",
    example: "점심을 먹어요.", exampleKatakana: "チョムシムル モゴヨ", exampleMeaning: "昼食を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "맑다", katakana: "マクタ", meaning: "晴れている",
    example: "오늘은 날씨가 맑아요.", exampleKatakana: "オヌルン ナルシガ マルガヨ", exampleMeaning: "今日は天気が晴れています。",
    breakdown: [
      { word: "날씨", meaning: "天気" }
    ] },
  { level: "1", hangul: "모자", katakana: "モジャ", meaning: "帽子",
    example: "모자를 써요.", exampleKatakana: "モジャルル ソヨ", exampleMeaning: "帽子をかぶります。",
    breakdown: [
      { word: "써요", meaning: "かぶります" }
    ] },
  { level: "1", hangul: "축하", katakana: "チュカ", meaning: "祝賀",
    example: "생일 축하해요.", exampleKatakana: "センイル チュカヘヨ", exampleMeaning: "誕生日おめでとうございます。",
    breakdown: [
      { word: "생일", meaning: "誕生日" }
    ] },
  { level: "1", hangul: "귀", katakana: "クィ", meaning: "耳",
    example: "귀가 아파요.", exampleKatakana: "クィガ アパヨ", exampleMeaning: "耳が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "준비", katakana: "チュンビ", meaning: "準備",
    example: "여행 준비를 해요.", exampleKatakana: "ヨヘン チュンビルル ヘヨ", exampleMeaning: "旅行の準備をします。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "1", hangul: "택시", katakana: "テクシ", meaning: "タクシー",
    example: "택시를 타요.", exampleKatakana: "テクシルル タヨ", exampleMeaning: "タクシーに乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "1", hangul: "돌아가다", katakana: "トラガダ", meaning: "帰る（戻る）",
    example: "집에 돌아가요.", exampleKatakana: "チベ トラガヨ", exampleMeaning: "家に帰ります。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "1", hangul: "남자", katakana: "ナムジャ", meaning: "男",
    example: "저 남자는 누구예요?", exampleKatakana: "チョ ナムジャヌン ヌグエヨ", exampleMeaning: "あの男の人は誰ですか。",
    breakdown: [
      { word: "누구", meaning: "誰" }
    ] },
  { level: "1", hangul: "그릇", katakana: "クルッ", meaning: "器",
    example: "그릇을 씻어요.", exampleKatakana: "クルスル シッソヨ", exampleMeaning: "器を洗います。",
    breakdown: [
      { word: "씻어요", meaning: "洗います" }
    ] },
  { level: "1", hangul: "들어오다", katakana: "トゥロオダ", meaning: "入ってくる",
    example: "방에 들어와요.", exampleKatakana: "バンエ トゥロワヨ", exampleMeaning: "部屋に入ってきます。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "1", hangul: "운전", katakana: "ウンジョン", meaning: "運転",
    example: "운전을 잘해요.", exampleKatakana: "ウンジョヌル チャレヨ", exampleMeaning: "運転が上手です。",
    breakdown: [
      { word: "잘해요", meaning: "上手です" }
    ] },
  { level: "1", hangul: "사다", katakana: "サダ", meaning: "買う",
    example: "옷을 사요.", exampleKatakana: "オスル サヨ", exampleMeaning: "服を買います。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "1", hangul: "사과", katakana: "サグァ", meaning: "りんご",
    example: "사과를 먹어요.", exampleKatakana: "サグァルル モゴヨ", exampleMeaning: "りんごを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "자주", katakana: "チャジュ", meaning: "よく（頻繁に）",
    example: "자주 만나요.", exampleKatakana: "チャジュ マンナヨ", exampleMeaning: "よく会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "1", hangul: "얼마나", katakana: "オルマナ", meaning: "どのくらい",
    example: "얼마나 걸려요?", exampleKatakana: "オルマナ コルリョヨ", exampleMeaning: "どのくらいかかりますか。",
    breakdown: [
      { word: "걸려요", meaning: "かかります" }
    ] },
  { level: "1", hangul: "문", katakana: "ムン", meaning: "ドア",
    example: "문을 열어요.", exampleKatakana: "ムヌル ヨロヨ", exampleMeaning: "ドアを開けます。",
    breakdown: [
      { word: "열어요", meaning: "開けます" }
    ] },
  { level: "1", hangul: "얼마", katakana: "オルマ", meaning: "いくら",
    example: "이거 얼마예요?", exampleKatakana: "イゴ オルマエヨ", exampleMeaning: "これいくらですか。",
    breakdown: [
      { word: "이거", meaning: "これ" }
    ] },
  { level: "1", hangul: "내리다", katakana: "ネリダ", meaning: "降りる",
    example: "여기에서 내려요.", exampleKatakana: "ヨギエソ ネリョヨ", exampleMeaning: "ここで降ります。",
    breakdown: [
      { word: "여기", meaning: "ここ" }
    ] },
  { level: "1", hangul: "대화", katakana: "テファ", meaning: "会話",
    example: "친구와 대화해요.", exampleKatakana: "チングワ テファヘヨ", exampleMeaning: "友達と会話します。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "머리", katakana: "モリ", meaning: "頭・髪",
    example: "머리가 아파요.", exampleKatakana: "モリガ アパヨ", exampleMeaning: "頭が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "한가하다", katakana: "ハンガハダ", meaning: "暇だ",
    example: "오늘은 한가해요.", exampleKatakana: "オヌルン ハンガヘヨ", exampleMeaning: "今日は暇です。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "1", hangul: "딸기", katakana: "タルギ", meaning: "いちご",
    example: "딸기를 좋아해요.", exampleKatakana: "タルギルル チョアヘヨ", exampleMeaning: "いちごが好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "되다", katakana: "トェダ", meaning: "なる",
    example: "의사가 되고 싶어요.", exampleKatakana: "ウィサガ トェゴ シポヨ", exampleMeaning: "医者になりたいです。",
    breakdown: [
      { word: "의사", meaning: "医者" }
    ] },
  { level: "1", hangul: "지하철역", katakana: "チハチョリョク", meaning: "地下鉄駅",
    example: "지하철역이 가까워요.", exampleKatakana: "チハチョリョギ カッカウォヨ", exampleMeaning: "地下鉄駅が近いです。",
    breakdown: [
      { word: "가까워요", meaning: "近いです" }
    ] },
  { level: "1", hangul: "발", katakana: "パル", meaning: "足",
    example: "발이 아파요.", exampleKatakana: "パリ アパヨ", exampleMeaning: "足が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "1", hangul: "돕다", katakana: "トプタ", meaning: "助ける",
    example: "친구를 도와요.", exampleKatakana: "チングルル トワヨ", exampleMeaning: "友達を助けます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "1", hangul: "수업", katakana: "スオプ", meaning: "授業",
    example: "수업이 재미있어요.", exampleKatakana: "スオビ チェミイッソヨ", exampleMeaning: "授業が面白いです。",
    breakdown: [
      { word: "재미있어요", meaning: "面白いです" }
    ] },
  { level: "1", hangul: "대학교", katakana: "テハッキョ", meaning: "大学",
    example: "대학교에 입학해요.", exampleKatakana: "テハッキョエ イパケヨ", exampleMeaning: "大学に入学します。",
    breakdown: [
      { word: "입학", meaning: "入学" }
    ] },
  { level: "1", hangul: "술", katakana: "スル", meaning: "お酒",
    example: "술을 안 마셔요.", exampleKatakana: "スルル アン マショヨ", exampleMeaning: "お酒を飲みません。",
    breakdown: [
      { word: "안", meaning: "〜ない" }
    ] },
  { level: "1", hangul: "손님", katakana: "ソンニム", meaning: "お客さん",
    example: "손님이 많아요.", exampleKatakana: "ソンニミ マナヨ", exampleMeaning: "お客さんが多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "1", hangul: "가깝다", katakana: "カッカプタ", meaning: "近い",
    example: "학교가 가까워요.", exampleKatakana: "ハッキョガ カッカウォヨ", exampleMeaning: "学校が近いです。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "이야기", katakana: "イヤギ", meaning: "話",
    example: "재미있는 이야기예요.", exampleKatakana: "チェミインヌン イヤギエヨ", exampleMeaning: "面白い話です。",
    breakdown: [
      { word: "재미있는", meaning: "面白い" }
    ] },
  { level: "1", hangul: "독일", katakana: "トギル", meaning: "ドイツ",
    example: "독일에서 왔어요.", exampleKatakana: "トギレソ ワッソヨ", exampleMeaning: "ドイツから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "날", katakana: "ナル", meaning: "日",
    example: "좋은 날이에요.", exampleKatakana: "チョウン ナリエヨ", exampleMeaning: "良い日です。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "1", hangul: "안내", katakana: "アンネ", meaning: "案内",
    example: "길을 안내해요.", exampleKatakana: "キルル アンネヘヨ", exampleMeaning: "道を案内します。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "1", hangul: "눈", katakana: "ヌン", meaning: "目・雪",
    example: "눈이 예뻐요.", exampleKatakana: "ヌニ イェッポヨ", exampleMeaning: "目がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "1", hangul: "주일", katakana: "チュイル", meaning: "週",
    example: "한 주일에 한 번 만나요.", exampleKatakana: "ハン チュイレ ハンボン マンナヨ", exampleMeaning: "一週間に一度会います。",
    breakdown: [
      { word: "한 번", meaning: "一度" }
    ] },
  { level: "1", hangul: "오빠", katakana: "オッパ", meaning: "（妹から見た）兄",
    example: "오빠는 회사원이에요.", exampleKatakana: "オッパヌン フェサウォニエヨ", exampleMeaning: "兄は会社員です。",
    breakdown: [
      { word: "회사원", meaning: "会社員" }
    ] },
  { level: "1", hangul: "포도", katakana: "ポド", meaning: "ぶどう",
    example: "포도를 사요.", exampleKatakana: "ポドルル サヨ", exampleMeaning: "ぶどうを買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "들어가다", katakana: "トゥロガダ", meaning: "入っていく",
    example: "교실에 들어가요.", exampleKatakana: "キョシレ トゥロガヨ", exampleMeaning: "教室に入っていきます。",
    breakdown: [
      { word: "교실", meaning: "教室" }
    ] },
  { level: "1", hangul: "특별하다", katakana: "トゥクピョルハダ", meaning: "特別だ",
    example: "오늘은 특별한 날이에요.", exampleKatakana: "オヌルン トゥクピョラン ナリエヨ", exampleMeaning: "今日は特別な日です。",
    breakdown: [
      { word: "날", meaning: "日" }
    ] },
  { level: "1", hangul: "비행기", katakana: "ピヘンギ", meaning: "飛行機",
    example: "비행기를 타요.", exampleKatakana: "ピヘンギルル タヨ", exampleMeaning: "飛行機に乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "1", hangul: "영화", katakana: "ヨンファ", meaning: "映画",
    example: "영화를 봐요.", exampleKatakana: "ヨンファルル バヨ", exampleMeaning: "映画を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "1", hangul: "학생", katakana: "ハクセン", meaning: "学生",
    example: "저는 학생이에요.", exampleKatakana: "チョヌン ハクセンイエヨ", exampleMeaning: "私は学生です。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "여름", katakana: "ヨルム", meaning: "夏",
    example: "여름이 더워요.", exampleKatakana: "ヨルミ トウォヨ", exampleMeaning: "夏が暑いです。",
    breakdown: [
      { word: "더워요", meaning: "暑いです" }
    ] },
  { level: "1", hangul: "중국", katakana: "チュングク", meaning: "中国",
    example: "중국어를 배워요.", exampleKatakana: "チュングゴルル ペウォヨ", exampleMeaning: "中国語を習います。",
    breakdown: [
      { word: "배워요", meaning: "習います" }
    ] },
  { level: "1", hangul: "알다", katakana: "アルダ", meaning: "知る",
    example: "저는 알아요.", exampleKatakana: "チョヌン アラヨ", exampleMeaning: "私は知っています。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "1", hangul: "같이", katakana: "カチ", meaning: "一緒に",
    example: "같이 가요.", exampleKatakana: "カチ カヨ", exampleMeaning: "一緒に行きましょう。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "계시다", katakana: "ケシダ", meaning: "いらっしゃる",
    example: "선생님이 교실에 계세요.", exampleKatakana: "ソンセンニミ キョシレ ケセヨ", exampleMeaning: "先生が教室にいらっしゃいます。",
    breakdown: [
      { word: "선생님", meaning: "先生" }
    ] },
  { level: "1", hangul: "오늘", katakana: "オヌル", meaning: "今日",
    example: "오늘 날씨가 좋아요.", exampleKatakana: "オヌル ナルシガ チョアヨ", exampleMeaning: "今日は天気が良いです。",
    breakdown: [
      { word: "날씨", meaning: "天気" }
    ] },
  { level: "1", hangul: "여권", katakana: "ヨックォン", meaning: "パスポート",
    example: "여권을 보여주세요.", exampleKatakana: "ヨックォヌル ボヨジュセヨ", exampleMeaning: "パスポートを見せてください。",
    breakdown: [
      { word: "보여주세요", meaning: "見せてください" }
    ] },
  { level: "1", hangul: "병", katakana: "ピョン", meaning: "瓶・病気",
    example: "물 한 병 주세요.", exampleKatakana: "ムル ハン ピョン チュセヨ", exampleMeaning: "水を一本ください。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "1", hangul: "전공", katakana: "チョンゴン", meaning: "専攻",
    example: "전공이 뭐예요?", exampleKatakana: "チョンゴンイ モエヨ", exampleMeaning: "専攻は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "1", hangul: "혼자", katakana: "ホンジャ", meaning: "一人で",
    example: "혼자 여행해요.", exampleKatakana: "ホンジャ ヨヘンヘヨ", exampleMeaning: "一人で旅行します。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "1", hangul: "길", katakana: "キル", meaning: "道",
    example: "길을 몰라요.", exampleKatakana: "キルル モルラヨ", exampleMeaning: "道を知りません。",
    breakdown: [
      { word: "몰라요", meaning: "知りません" }
    ] },
  { level: "1", hangul: "화장실", katakana: "ファジャンシル", meaning: "トイレ",
    example: "화장실이 어디예요?", exampleKatakana: "ファジャンシリ オディエヨ", exampleMeaning: "トイレはどこですか。",
    breakdown: [
      { word: "어디", meaning: "どこ" }
    ] },
  { level: "1", hangul: "배우", katakana: "ペウ", meaning: "俳優",
    example: "유명한 배우예요.", exampleKatakana: "ユミョンハン ペウエヨ", exampleMeaning: "有名な俳優です。",
    breakdown: [
      { word: "유명한", meaning: "有名な" }
    ] },
  { level: "1", hangul: "왜", katakana: "ウェ", meaning: "なぜ",
    example: "왜 늦었어요?", exampleKatakana: "ウェ ヌジョッソヨ", exampleMeaning: "なぜ遅れましたか。",
    breakdown: [
      { word: "늦었어요", meaning: "遅れました" }
    ] },
  { level: "1", hangul: "운동화", katakana: "ウンドンファ", meaning: "運動靴",
    example: "운동화를 신어요.", exampleKatakana: "ウンドンファルル シノヨ", exampleMeaning: "運動靴を履きます。",
    breakdown: [
      { word: "신어요", meaning: "履きます" }
    ] },
  { level: "1", hangul: "키", katakana: "キ", meaning: "背丈",
    example: "키가 커요.", exampleKatakana: "キガ コヨ", exampleMeaning: "背が高いです。",
    breakdown: [
      { word: "커요", meaning: "高いです" }
    ] },
  { level: "1", hangul: "프랑스", katakana: "プランス", meaning: "フランス",
    example: "프랑스에 가고 싶어요.", exampleKatakana: "プランスエ カゴ シポヨ", exampleMeaning: "フランスに行きたいです。",
    breakdown: [
      { word: "가고 싶어요", meaning: "行きたいです" }
    ] },
  { level: "1", hangul: "다시", katakana: "タシ", meaning: "再び",
    example: "다시 해 볼게요.", exampleKatakana: "タシ ヘ ボルケヨ", exampleMeaning: "もう一度やってみます。",
    breakdown: [
      { word: "해 볼게요", meaning: "やってみます" }
    ] },
  { level: "1", hangul: "낮다", katakana: "ナッタ", meaning: "低い",
    example: "가격이 낮아요.", exampleKatakana: "カギョギ ナジャヨ", exampleMeaning: "価格が低いです。",
    breakdown: [
      { word: "가격", meaning: "価格" }
    ] },
  { level: "1", hangul: "겨울", katakana: "キョウル", meaning: "冬",
    example: "겨울에 눈이 와요.", exampleKatakana: "キョウレ ヌニ ワヨ", exampleMeaning: "冬に雪が降ります。",
    breakdown: [
      { word: "눈", meaning: "雪" }
    ] },
  { level: "1", hangul: "산책", katakana: "サンチェク", meaning: "散歩",
    example: "공원에서 산책해요.", exampleKatakana: "コンウォネソ サンチェケヨ", exampleMeaning: "公園で散歩します。",
    breakdown: [
      { word: "공원", meaning: "公園" }
    ] },
  { level: "1", hangul: "할머니", katakana: "ハルモニ", meaning: "おばあさん",
    example: "할머니는 건강하세요.", exampleKatakana: "ハルモニヌン コンガンハセヨ", exampleMeaning: "おばあさんはお元気です。",
    breakdown: [
      { word: "건강하세요", meaning: "お元気です" }
    ] },
  { level: "1", hangul: "영어", katakana: "ヨンオ", meaning: "英語",
    example: "영어를 공부해요.", exampleKatakana: "ヨンオルル コンブヘヨ", exampleMeaning: "英語を勉強します。",
    breakdown: [
      { word: "공부", meaning: "勉強" }
    ] },
  { level: "1", hangul: "침대", katakana: "チムデ", meaning: "ベッド",
    example: "침대에서 자요.", exampleKatakana: "チムデエソ ジャヨ", exampleMeaning: "ベッドで寝ます。",
    breakdown: [
      { word: "자요", meaning: "寝ます" }
    ] },
  { level: "1", hangul: "파티", katakana: "パティ", meaning: "パーティー",
    example: "생일 파티를 해요.", exampleKatakana: "センイル パティルル ヘヨ", exampleMeaning: "誕生日パーティーをします。",
    breakdown: [
      { word: "생일", meaning: "誕生日" }
    ] },
  { level: "1", hangul: "열다", katakana: "ヨルダ", meaning: "開ける",
    example: "창문을 열어요.", exampleKatakana: "チャンムヌル ヨロヨ", exampleMeaning: "窓を開けます。",
    breakdown: [
      { word: "창문", meaning: "窓" }
    ] },
  { level: "1", hangul: "회사", katakana: "フェサ", meaning: "会社",
    example: "회사에 다녀요.", exampleKatakana: "フェサエ タニョヨ", exampleMeaning: "会社に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "1", hangul: "제일", katakana: "チェイル", meaning: "一番",
    example: "제일 좋아해요.", exampleKatakana: "チェイル チョアヘヨ", exampleMeaning: "一番好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "돌아오다", katakana: "トラオダ", meaning: "帰ってくる",
    example: "집에 돌아와요.", exampleKatakana: "チベ トラワヨ", exampleMeaning: "家に帰ってきます。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "1", hangul: "없다", katakana: "オプタ", meaning: "ない",
    example: "시간이 없어요.", exampleKatakana: "シガニ オプソヨ", exampleMeaning: "時間がありません。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "끄다", katakana: "クダ", meaning: "消す",
    example: "불을 꺼요.", exampleKatakana: "プルル コヨ", exampleMeaning: "電気を消します。",
    breakdown: [
      { word: "불", meaning: "電気" }
    ] },
  { level: "1", hangul: "넓다", katakana: "ノルタ", meaning: "広い",
    example: "방이 넓어요.", exampleKatakana: "バンイ ノルボヨ", exampleMeaning: "部屋が広いです。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "1", hangul: "운동", katakana: "ウンドン", meaning: "運動",
    example: "매일 운동해요.", exampleKatakana: "メイル ウンドンヘヨ", exampleMeaning: "毎日運動します。",
    breakdown: [
      { word: "매일", meaning: "毎日" }
    ] },
  { level: "1", hangul: "팔다", katakana: "パルダ", meaning: "売る",
    example: "과일을 팔아요.", exampleKatakana: "クァイルル パラヨ", exampleMeaning: "果物を売ります。",
    breakdown: [
      { word: "과일", meaning: "果物" }
    ] },
  { level: "1", hangul: "선물", katakana: "ソンムル", meaning: "プレゼント",
    example: "선물을 줘요.", exampleKatakana: "ソンムル ジョヨ", exampleMeaning: "プレゼントをあげます。",
    breakdown: [
      { word: "줘요", meaning: "あげます" }
    ] },
  { level: "1", hangul: "역", katakana: "ヨク", meaning: "駅",
    example: "역까지 걸어가요.", exampleKatakana: "ヨッカジ コロガヨ", exampleMeaning: "駅まで歩いていきます。",
    breakdown: [
      { word: "걸어가요", meaning: "歩いていきます" }
    ] },
  { level: "1", hangul: "등산", katakana: "トゥンサン", meaning: "登山",
    example: "주말에 등산해요.", exampleKatakana: "チュマレ トゥンサネヨ", exampleMeaning: "週末に登山します。",
    breakdown: [
      { word: "주말", meaning: "週末" }
    ] },
  { level: "1", hangul: "케이크", katakana: "ケイク", meaning: "ケーキ",
    example: "케이크를 먹어요.", exampleKatakana: "ケイクルル モゴヨ", exampleMeaning: "ケーキを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "1", hangul: "씻다", katakana: "シッタ", meaning: "洗う",
    example: "손을 씻어요.", exampleKatakana: "ソヌル シッソヨ", exampleMeaning: "手を洗います。",
    breakdown: [
      { word: "손", meaning: "手" }
    ] },
  { level: "1", hangul: "번호", katakana: "ボノ", meaning: "番号",
    example: "전화번호가 뭐예요?", exampleKatakana: "チョナボノガ モエヨ", exampleMeaning: "電話番号は何ですか。",
    breakdown: [
      { word: "전화", meaning: "電話" }
    ] },
  { level: "1", hangul: "오후", katakana: "オフ", meaning: "午後",
    example: "오후에 만나요.", exampleKatakana: "オフエ マンナヨ", exampleMeaning: "午後に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "화요일", katakana: "ファヨイル", meaning: "火曜日",
    example: "화요일에 시험이 있어요.", exampleKatakana: "ファヨイレ シホミ イッソヨ", exampleMeaning: "火曜日に試験があります。",
    breakdown: [
      { word: "시험", meaning: "試験" }
    ] },
  { level: "1", hangul: "지금", katakana: "チグム", meaning: "今",
    example: "지금 바빠요.", exampleKatakana: "チグム パパヨ", exampleMeaning: "今忙しいです。",
    breakdown: [
      { word: "바빠요", meaning: "忙しいです" }
    ] },
  { level: "1", hangul: "은행", katakana: "ウネン", meaning: "銀行",
    example: "은행에 가요.", exampleKatakana: "ウネンエ カヨ", exampleMeaning: "銀行に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "아름답다", katakana: "アルムダプタ", meaning: "美しい",
    example: "경치가 아름다워요.", exampleKatakana: "キョンチガ アルムダウォヨ", exampleMeaning: "景色が美しいです。",
    breakdown: [
      { word: "경치", meaning: "景色" }
    ] },
  { level: "1", hangul: "아버지", katakana: "アボジ", meaning: "父",
    example: "아버지는 회사원이에요.", exampleKatakana: "アボジヌン フェサウォニエヨ", exampleMeaning: "父は会社員です。",
    breakdown: [
      { word: "회사원", meaning: "会社員" }
    ] },
  { level: "1", hangul: "특히", katakana: "トゥキ", meaning: "特に",
    example: "특히 좋아해요.", exampleKatakana: "トゥキ チョアヘヨ", exampleMeaning: "特に好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "물건", katakana: "ムルゴン", meaning: "物",
    example: "물건을 사요.", exampleKatakana: "ムルゴヌル サヨ", exampleMeaning: "物を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "1", hangul: "잠", katakana: "チャム", meaning: "眠り",
    example: "잠이 안 와요.", exampleKatakana: "チャミ アン ワヨ", exampleMeaning: "眠れません。",
    breakdown: [
      { word: "안 와요", meaning: "来ません" }
    ] },
  { level: "1", hangul: "멀다", katakana: "モルダ", meaning: "遠い",
    example: "학교가 멀어요.", exampleKatakana: "ハッキョガ モロヨ", exampleMeaning: "学校が遠いです。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "1", hangul: "아이", katakana: "アイ", meaning: "子供",
    example: "아이가 놀아요.", exampleKatakana: "アイガ ノラヨ", exampleMeaning: "子供が遊びます。",
    breakdown: [
      { word: "놀아요", meaning: "遊びます" }
    ] },
  { level: "1", hangul: "쇼핑", katakana: "ショピン", meaning: "ショッピング",
    example: "쇼핑을 해요.", exampleKatakana: "ショピンウル ヘヨ", exampleMeaning: "ショッピングをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "작년", katakana: "チャンニョン", meaning: "去年",
    example: "작년에 결혼했어요.", exampleKatakana: "チャンニョネ キョロネッソヨ", exampleMeaning: "去年結婚しました。",
    breakdown: [
      { word: "결혼", meaning: "結婚" }
    ] },
  { level: "1", hangul: "돈", katakana: "トン", meaning: "お金",
    example: "돈이 없어요.", exampleKatakana: "トニ オプソヨ", exampleMeaning: "お金がありません。",
    breakdown: [
      { word: "없어요", meaning: "ありません" }
    ] },
  { level: "1", hangul: "찾아보다", katakana: "チャジャボダ", meaning: "探してみる",
    example: "정보를 찾아봐요.", exampleKatakana: "チョンボルル チャジャボァヨ", exampleMeaning: "情報を探してみます。",
    breakdown: [
      { word: "정보", meaning: "情報" }
    ] },
  { level: "1", hangul: "나가다", katakana: "ナガダ", meaning: "出る",
    example: "밖으로 나가요.", exampleKatakana: "バックロ ナガヨ", exampleMeaning: "外に出ます。",
    breakdown: [
      { word: "밖", meaning: "外" }
    ] },
  { level: "1", hangul: "왼쪽", katakana: "ウェンチョク", meaning: "左側",
    example: "왼쪽으로 가세요.", exampleKatakana: "ウェンチョグロ カセヨ", exampleMeaning: "左側に行ってください。",
    breakdown: [
      { word: "가세요", meaning: "行ってください" }
    ] },
  { level: "1", hangul: "가장", katakana: "カジャン", meaning: "最も",
    example: "가장 좋아해요.", exampleKatakana: "カジャン チョアヘヨ", exampleMeaning: "最も好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "1", hangul: "이유", katakana: "イユ", meaning: "理由",
    example: "이유를 말해요.", exampleKatakana: "イユルル マレヨ", exampleMeaning: "理由を話します。",
    breakdown: [
      { word: "말해요", meaning: "話します" }
    ] },
  { level: "1", hangul: "숙제", katakana: "スクチェ", meaning: "宿題",
    example: "숙제를 해요.", exampleKatakana: "スクチェルル ヘヨ", exampleMeaning: "宿題をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "사랑", katakana: "サラン", meaning: "愛",
    example: "사랑해요.", exampleKatakana: "サランヘヨ", exampleMeaning: "愛しています。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "가지다", katakana: "カジダ", meaning: "持つ",
    example: "꿈을 가져요.", exampleKatakana: "クムル カジョヨ", exampleMeaning: "夢を持ちます。",
    breakdown: [
      { word: "꿈", meaning: "夢" }
    ] },
  { level: "1", hangul: "예쁘다", katakana: "イェップダ", meaning: "かわいい",
    example: "꽃이 예뻐요.", exampleKatakana: "コチ イェッポヨ", exampleMeaning: "花がきれいです。",
    breakdown: [
      { word: "꽃", meaning: "花" }
    ] },
  { level: "1", hangul: "버스", katakana: "ボス", meaning: "バス",
    example: "버스를 타요.", exampleKatakana: "ボスルル タヨ", exampleMeaning: "バスに乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "1", hangul: "아직", katakana: "アジク", meaning: "まだ",
    example: "아직 안 왔어요.", exampleKatakana: "アジク アン ワッソヨ", exampleMeaning: "まだ来ていません。",
    breakdown: [
      { word: "안 왔어요", meaning: "来ていません" }
    ] },
  { level: "1", hangul: "조금", katakana: "チョグム", meaning: "少し",
    example: "조금 기다려요.", exampleKatakana: "チョグム キダリョヨ", exampleMeaning: "少し待ちます。",
    breakdown: [
      { word: "기다려요", meaning: "待ちます" }
    ] },
  { level: "1", hangul: "그래서", katakana: "クレソ", meaning: "それで",
    example: "비가 와요. 그래서 안 가요.", exampleKatakana: "ピガ ワヨ クレソ アン ガヨ", exampleMeaning: "雨が降ります。それで行きません。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "1", hangul: "있다", katakana: "イッタ", meaning: "ある・いる",
    example: "시간이 있어요.", exampleKatakana: "シガニ イッソヨ", exampleMeaning: "時間があります。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "1", hangul: "바쁘다", katakana: "パップダ", meaning: "忙しい",
    example: "요즘 바빠요.", exampleKatakana: "ヨジュム パパヨ", exampleMeaning: "最近忙しいです。",
    breakdown: [
      { word: "요즘", meaning: "最近" }
    ] },
  { level: "1", hangul: "매일", katakana: "メイル", meaning: "毎日",
    example: "매일 운동해요.", exampleKatakana: "メイル ウンドンヘヨ", exampleMeaning: "毎日運動します。",
    breakdown: [
      { word: "운동", meaning: "運動" }
    ] },
  { level: "1", hangul: "보내다", katakana: "ポネダ", meaning: "送る",
    example: "편지를 보내요.", exampleKatakana: "ピョンジルル ポネヨ", exampleMeaning: "手紙を送ります。",
    breakdown: [
      { word: "편지", meaning: "手紙" }
    ] },
  { level: "1", hangul: "남편", katakana: "ナムピョン", meaning: "夫",
    example: "남편은 요리를 잘해요.", exampleKatakana: "ナムピョヌン ヨリルル チャレヨ", exampleMeaning: "夫は料理が上手です。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "1", hangul: "바다", katakana: "パダ", meaning: "海",
    example: "바다에 가요.", exampleKatakana: "パダエ カヨ", exampleMeaning: "海に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "1", hangul: "요즘", katakana: "ヨジュム", meaning: "最近",
    example: "요즘 어때요?", exampleKatakana: "ヨジュム オッテヨ", exampleMeaning: "最近どうですか。",
    breakdown: [
      { word: "어때요", meaning: "どうですか" }
    ] },
  { level: "1", hangul: "나다", katakana: "ナダ", meaning: "出る・生じる",
    example: "화가 나요.", exampleKatakana: "ファガ ナヨ", exampleMeaning: "腹が立ちます。",
    breakdown: [
      { word: "화", meaning: "怒り" }
    ] },
  { level: "1", hangul: "축구", katakana: "チュック", meaning: "サッカー",
    example: "축구를 해요.", exampleKatakana: "チュックルル ヘヨ", exampleMeaning: "サッカーをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "1", hangul: "부모님", katakana: "プモニム", meaning: "両親",
    example: "부모님과 살아요.", exampleKatakana: "プモニムグァ サラヨ", exampleMeaning: "両親と暮らしています。",
    breakdown: [
      { word: "살아요", meaning: "暮らしています" }
    ] },
  { level: "1", hangul: "의사", katakana: "ウィサ", meaning: "医者",
    example: "의사가 되고 싶어요.", exampleKatakana: "ウィサガ トェゴ シポヨ", exampleMeaning: "医者になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "1", hangul: "코", katakana: "コ", meaning: "鼻",
    example: "코가 높아요.", exampleKatakana: "コガ ノパヨ", exampleMeaning: "鼻が高いです。",
    breakdown: [
      { word: "높아요", meaning: "高いです" }
    ] },
  { level: "1", hangul: "나쁘다", katakana: "ナップダ", meaning: "悪い",
    example: "날씨가 나빠요.", exampleKatakana: "ナルシガ ナッパヨ", exampleMeaning: "天気が悪いです。",
    breakdown: [
      { word: "날씨", meaning: "天気" }
    ] },
  { level: "1", hangul: "시험", katakana: "シホム", meaning: "試験",
    example: "시험을 봐요.", exampleKatakana: "シホムル バヨ", exampleMeaning: "試験を受けます。",
    breakdown: [
      { word: "봐요", meaning: "受けます" }
    ] },
  { level: "1", hangul: "낮", katakana: "ナッ", meaning: "昼",
    example: "낮에 만나요.", exampleKatakana: "ナジェ マンナヨ", exampleMeaning: "昼に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "1", hangul: "드라마", katakana: "トゥラマ", meaning: "ドラマ",
    example: "드라마를 봐요.", exampleKatakana: "トゥラマルル バヨ", exampleMeaning: "ドラマを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "1", hangul: "수영", katakana: "スヨン", meaning: "水泳",
    example: "수영을 배워요.", exampleKatakana: "スヨンウル ペウォヨ", exampleMeaning: "水泳を習います。",
    breakdown: [
      { word: "배워요", meaning: "習います" }
    ] },
  { level: "1", hangul: "필요", katakana: "ピリョ", meaning: "必要",
    example: "도움이 필요해요.", exampleKatakana: "トウミ ピリョヘヨ", exampleMeaning: "助けが必要です。",
    breakdown: [
      { word: "도움", meaning: "助け" }
    ] },
  { level: "1", hangul: "가운데", katakana: "カウンデ", meaning: "真ん中",
    example: "가운데에 앉아요.", exampleKatakana: "カウンデエ アンジャヨ", exampleMeaning: "真ん中に座ります。",
    breakdown: [
      { word: "앉아요", meaning: "座ります" }
    ] },
  { level: "1", hangul: "미안", katakana: "ミアン", meaning: "すまない",
    example: "미안해요.", exampleKatakana: "ミアネヨ", exampleMeaning: "ごめんなさい。",
    breakdown: [
      { word: "해요", meaning: "です" }
    ] },
  { level: "1", hangul: "영국", katakana: "ヨングク", meaning: "イギリス",
    example: "영국에서 왔어요.", exampleKatakana: "ヨングゲソ ワッソヨ", exampleMeaning: "イギリスから来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "1", hangul: "배", katakana: "ペ", meaning: "お腹・船・梨",
    example: "배가 고파요.", exampleKatakana: "ペガ コパヨ", exampleMeaning: "お腹が空きました。",
    breakdown: [
      { word: "고파요", meaning: "空きました" }
    ] },
  { level: "1", hangul: "부산", katakana: "プサン", meaning: "釜山",
    example: "부산에 여행 가요.", exampleKatakana: "プサネ ヨヘン カヨ", exampleMeaning: "釜山に旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "1", hangul: "달다", katakana: "タルダ", meaning: "甘い",
    example: "이 케이크는 달아요.", exampleKatakana: "イ ケイクヌン タラヨ", exampleMeaning: "このケーキは甘いです。",
    breakdown: [
      { word: "케이크", meaning: "ケーキ" }
    ] },
  { level: "1", hangul: "빵", katakana: "パン", meaning: "パン",
    example: "아침에 빵을 먹어요.", exampleKatakana: "アチメ パンウル モゴヨ", exampleMeaning: "朝パンを食べます。",
    breakdown: [
      { word: "아침", meaning: "朝" }
    ] },
  { level: "1", hangul: "자다", katakana: "チャダ", meaning: "寝る",
    example: "일찍 자요.", exampleKatakana: "イルチク チャヨ", exampleMeaning: "早く寝ます。",
    breakdown: [
      { word: "일찍", meaning: "早く" }
    ] },
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
