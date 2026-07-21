// @purpose  TOPIK 1級〜6級の韓国語単語・例文データ。日本語話者向け（ハングル＋カタカナ発音＋日本語訳）
// WHY: TOPIKは公式の級別語彙リストを公開していないため、級ごとに分けて整理された
// 第三者の語彙集（kleocean.com のTOPIK 1級〜6級 名詞/動詞/形容詞リスト）を基準に、各単語の級を
// 個別に対照・検証してから追加する（japanessプロジェクトと同じ方針）。

const VOCAB = [
  { level: "2", hangul: "가까이", katakana: "カッカイ", meaning: "近くに",
    example: "가까이 오세요.", exampleKatakana: "カッカイ オセヨ", exampleMeaning: "近くに来てください。",
    breakdown: [
      { word: "오세요", meaning: "来てください" }
    ] },
  { level: "2", hangul: "사거리", katakana: "サゴリ", meaning: "四つ角",
    example: "사거리에서 만나요.", exampleKatakana: "サゴリエソ マンナヨ", exampleMeaning: "四つ角で会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "어떠하다", katakana: "オットハダ", meaning: "どうだ",
    example: "기분이 어때요?", exampleKatakana: "キブニ オッテヨ", exampleMeaning: "気分はどうですか。",
    breakdown: [
      { word: "기분", meaning: "気分" }
    ] },
  { level: "2", hangul: "기르다", katakana: "キルダ", meaning: "飼う・育てる",
    example: "강아지를 길러요.", exampleKatakana: "カンアジルル キルロヨ", exampleMeaning: "子犬を飼います。",
    breakdown: [
      { word: "강아지", meaning: "子犬" }
    ] },
  { level: "2", hangul: "첫날", katakana: "チョンナル", meaning: "初日",
    example: "첫날부터 바빠요.", exampleKatakana: "チョンナルブト パッパヨ", exampleMeaning: "初日から忙しいです。",
    breakdown: [
      { word: "부터", meaning: "から" }
    ] },
  { level: "2", hangul: "분홍색", katakana: "プノンセク", meaning: "ピンク色",
    example: "분홍색을 좋아해요.", exampleKatakana: "プノンセグル チョアヘヨ", exampleMeaning: "ピンク色が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "바닥", katakana: "パダク", meaning: "床",
    example: "바닥이 차가워요.", exampleKatakana: "パダギ チャガウォヨ", exampleMeaning: "床が冷たいです。",
    breakdown: [
      { word: "차가워요", meaning: "冷たいです" }
    ] },
  { level: "2", hangul: "태극기", katakana: "テグクキ", meaning: "太極旗（韓国国旗）",
    example: "태극기를 걸어요.", exampleKatakana: "テグクキルル コロヨ", exampleMeaning: "太極旗を掲げます。",
    breakdown: [
      { word: "걸어요", meaning: "掲げます" }
    ] },
  { level: "2", hangul: "축구공", katakana: "チュックコン", meaning: "サッカーボール",
    example: "축구공을 차요.", exampleKatakana: "チュックコンウル チャヨ", exampleMeaning: "サッカーボールを蹴ります。",
    breakdown: [
      { word: "차요", meaning: "蹴ります" }
    ] },
  { level: "2", hangul: "일식집", katakana: "イルシクチプ", meaning: "日本料理店",
    example: "일식집에서 먹어요.", exampleKatakana: "イルシクチベソ モゴヨ", exampleMeaning: "日本料理店で食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "육교", katakana: "ユッキョ", meaning: "歩道橋",
    example: "육교를 건너요.", exampleKatakana: "ユッキョルル コンノヨ", exampleMeaning: "歩道橋を渡ります。",
    breakdown: [
      { word: "건너요", meaning: "渡ります" }
    ] },
  { level: "2", hangul: "인형", katakana: "インヒョン", meaning: "人形",
    example: "인형을 가지고 놀아요.", exampleKatakana: "インヒョンウル カジゴ ノラヨ", exampleMeaning: "人形で遊びます。",
    breakdown: [
      { word: "놀아요", meaning: "遊びます" }
    ] },
  { level: "2", hangul: "부자", katakana: "プジャ", meaning: "金持ち",
    example: "부자가 되고 싶어요.", exampleKatakana: "プジャガ トェゴ シポヨ", exampleMeaning: "金持ちになりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "다하다", katakana: "タハダ", meaning: "尽くす",
    example: "최선을 다해요.", exampleKatakana: "チェソヌル タヘヨ", exampleMeaning: "最善を尽くします。",
    breakdown: [
      { word: "최선", meaning: "最善" }
    ] },
  { level: "2", hangul: "날씬하다", katakana: "ナルシナダ", meaning: "スリムだ",
    example: "날씬한 몸매예요.", exampleKatakana: "ナルシナン モムメエヨ", exampleMeaning: "スリムな体型です。",
    breakdown: [
      { word: "몸매", meaning: "体型" }
    ] },
  { level: "2", hangul: "하얗다", katakana: "ハヤタ", meaning: "白い",
    example: "눈이 하얘요.", exampleKatakana: "ヌニ ハイェヨ", exampleMeaning: "雪が白いです。",
    breakdown: [
      { word: "눈", meaning: "雪" }
    ] },
  { level: "2", hangul: "미끄러지다", katakana: "ミックロジダ", meaning: "滑る",
    example: "길에서 미끄러졌어요.", exampleKatakana: "キレソ ミックロジョッソヨ", exampleMeaning: "道で滑りました。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "2", hangul: "불안", katakana: "プラン", meaning: "不安",
    example: "불안을 느껴요.", exampleKatakana: "プラヌル ヌッキョヨ", exampleMeaning: "不安を感じます。",
    breakdown: [
      { word: "느껴요", meaning: "感じます" }
    ] },
  { level: "2", hangul: "귀여워하다", katakana: "クィヨウォハダ", meaning: "かわいがる",
    example: "동생을 귀여워해요.", exampleKatakana: "トンセンウル クィヨウォヘヨ", exampleMeaning: "弟をかわいがります。",
    breakdown: [
      { word: "동생", meaning: "弟" }
    ] },
  { level: "2", hangul: "크리스마스", katakana: "クリスマス", meaning: "クリスマス",
    example: "크리스마스를 축하해요.", exampleKatakana: "クリスマスルル チュカヘヨ", exampleMeaning: "クリスマスを祝います。",
    breakdown: [
      { word: "축하해요", meaning: "祝います" }
    ] },
  { level: "2", hangul: "물어보다", katakana: "ムロボダ", meaning: "聞いてみる",
    example: "선생님께 물어봐요.", exampleKatakana: "ソンセンニムケ ムロバヨ", exampleMeaning: "先生に聞いてみます。",
    breakdown: [
      { word: "선생님", meaning: "先生" }
    ] },
  { level: "2", hangul: "들르다", katakana: "トゥルダ", meaning: "立ち寄る",
    example: "가게에 들러요.", exampleKatakana: "カゲエ トゥルロヨ", exampleMeaning: "店に立ち寄ります。",
    breakdown: [
      { word: "가게", meaning: "店" }
    ] },
  { level: "2", hangul: "부지런하다", katakana: "プジロナダ", meaning: "勤勉だ",
    example: "부지런한 사람이에요.", exampleKatakana: "プジロナン サラミエヨ", exampleMeaning: "勤勉な人です。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "2", hangul: "허리", katakana: "ホリ", meaning: "腰",
    example: "허리가 아파요.", exampleKatakana: "ホリガ アパヨ", exampleMeaning: "腰が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "맞추다", katakana: "マッチュダ", meaning: "合わせる",
    example: "시간을 맞춰요.", exampleKatakana: "シガヌル マッチョヨ", exampleMeaning: "時間を合わせます。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "두껍다", katakana: "トゥコプタ", meaning: "厚い",
    example: "책이 두꺼워요.", exampleKatakana: "チェギ トゥコウォヨ", exampleMeaning: "本が厚いです。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "2", hangul: "쌀", katakana: "サル", meaning: "米",
    example: "쌀을 씻어요.", exampleKatakana: "サルル シッソヨ", exampleMeaning: "米を洗います。",
    breakdown: [
      { word: "씻어요", meaning: "洗います" }
    ] },
  { level: "2", hangul: "돌려주다", katakana: "トルリョジュダ", meaning: "返してあげる",
    example: "책을 돌려줘요.", exampleKatakana: "チェグル トルリョジョヨ", exampleMeaning: "本を返します。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "2", hangul: "깊이", katakana: "キピ", meaning: "深さ",
    example: "깊이를 재요.", exampleKatakana: "キピルル チェヨ", exampleMeaning: "深さを測ります。",
    breakdown: [
      { word: "재요", meaning: "測ります" }
    ] },
  { level: "2", hangul: "아까", katakana: "アッカ", meaning: "さっき",
    example: "아까 만났어요.", exampleKatakana: "アッカ マンナッソヨ", exampleMeaning: "さっき会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "2", hangul: "걸어가다", katakana: "コロガダ", meaning: "歩いていく",
    example: "학교까지 걸어가요.", exampleKatakana: "ハッキョカジ コロガヨ", exampleMeaning: "学校まで歩いていきます。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "2", hangul: "돼지고기", katakana: "トェジコギ", meaning: "豚肉",
    example: "돼지고기를 먹어요.", exampleKatakana: "トェジコギルル モゴヨ", exampleMeaning: "豚肉を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "채소", katakana: "チェソ", meaning: "野菜",
    example: "채소를 먹어요.", exampleKatakana: "チェソルル モゴヨ", exampleMeaning: "野菜を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "소화제", katakana: "ソファジェ", meaning: "消化剤",
    example: "소화제를 먹어요.", exampleKatakana: "ソファジェルル モゴヨ", exampleMeaning: "消化剤を飲みます。",
    breakdown: [
      { word: "먹어요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "느끼다", katakana: "ヌッキダ", meaning: "感じる",
    example: "행복을 느껴요.", exampleKatakana: "ヘンボグル ヌッキョヨ", exampleMeaning: "幸せを感じます。",
    breakdown: [
      { word: "행복", meaning: "幸せ" }
    ] },
  { level: "2", hangul: "다섯째", katakana: "タソッチェ", meaning: "五番目",
    example: "다섯째 아이예요.", exampleKatakana: "タソッチェ アイエヨ", exampleMeaning: "五番目の子供です。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "메일", katakana: "メイル", meaning: "メール",
    example: "메일을 보내요.", exampleKatakana: "メイルル ポネヨ", exampleMeaning: "メールを送ります。",
    breakdown: [
      { word: "보내요", meaning: "送ります" }
    ] },
  { level: "2", hangul: "제목", katakana: "チェモク", meaning: "タイトル",
    example: "제목을 정해요.", exampleKatakana: "チェモグル チョンヘヨ", exampleMeaning: "タイトルを決めます。",
    breakdown: [
      { word: "정해요", meaning: "決めます" }
    ] },
  { level: "2", hangul: "어둡다", katakana: "オドゥプタ", meaning: "暗い",
    example: "방이 어두워요.", exampleKatakana: "バンイ オドゥウォヨ", exampleMeaning: "部屋が暗いです。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "2", hangul: "파랗다", katakana: "パラタ", meaning: "青い",
    example: "하늘이 파래요.", exampleKatakana: "ハヌリ パレヨ", exampleMeaning: "空が青いです。",
    breakdown: [
      { word: "하늘", meaning: "空" }
    ] },
  { level: "2", hangul: "행복", katakana: "ヘンボク", meaning: "幸せ",
    example: "행복을 느껴요.", exampleKatakana: "ヘンボグル ヌッキョヨ", exampleMeaning: "幸せを感じます。",
    breakdown: [
      { word: "느껴요", meaning: "感じます" }
    ] },
  { level: "2", hangul: "그냥", katakana: "クニャン", meaning: "ただ",
    example: "그냥 왔어요.", exampleKatakana: "クニャン ワッソヨ", exampleMeaning: "ただ来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "2", hangul: "데려가다", katakana: "テリョガダ", meaning: "連れていく",
    example: "아이를 데려가요.", exampleKatakana: "アイルル テリョガヨ", exampleMeaning: "子供を連れていきます。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "펴다", katakana: "ピョダ", meaning: "広げる",
    example: "책을 펴요.", exampleKatakana: "チェグル ピョヨ", exampleMeaning: "本を開きます。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "2", hangul: "꽃집", katakana: "コッチプ", meaning: "花屋",
    example: "꽃집에서 사요.", exampleKatakana: "コッチベソ サヨ", exampleMeaning: "花屋で買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "세탁기", katakana: "セタクキ", meaning: "洗濯機",
    example: "세탁기를 돌려요.", exampleKatakana: "セタクキルル トルリョヨ", exampleMeaning: "洗濯機を回します。",
    breakdown: [
      { word: "돌려요", meaning: "回します" }
    ] },
  { level: "2", hangul: "남녀", katakana: "ナムニョ", meaning: "男女",
    example: "남녀 모두 좋아해요.", exampleKatakana: "ナムニョ モドゥ チョアヘヨ", exampleMeaning: "男女とも好きです。",
    breakdown: [
      { word: "모두", meaning: "とも" }
    ] },
  { level: "2", hangul: "조금씩", katakana: "チョグムシク", meaning: "少しずつ",
    example: "조금씩 먹어요.", exampleKatakana: "チョグムシク モゴヨ", exampleMeaning: "少しずつ食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "쌓다", katakana: "サタ", meaning: "積む",
    example: "눈이 쌓여요.", exampleKatakana: "ヌニ サヨヨ", exampleMeaning: "雪が積もります。",
    breakdown: [
      { word: "눈", meaning: "雪" }
    ] },
  { level: "2", hangul: "반대", katakana: "パンデ", meaning: "反対",
    example: "반대 방향이에요.", exampleKatakana: "パンデ パンヒャンイエヨ", exampleMeaning: "反対方向です。",
    breakdown: [
      { word: "방향", meaning: "方向" }
    ] },
  { level: "2", hangul: "손바닥", katakana: "ソンパダク", meaning: "手のひら",
    example: "손바닥을 펴요.", exampleKatakana: "ソンパダグル ピョヨ", exampleMeaning: "手のひらを広げます。",
    breakdown: [
      { word: "펴요", meaning: "広げます" }
    ] },
  { level: "2", hangul: "스포츠", katakana: "スポチュ", meaning: "スポーツ",
    example: "스포츠를 좋아해요.", exampleKatakana: "スポチュルル チョアヘヨ", exampleMeaning: "スポーツが好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "자연", katakana: "チャヨン", meaning: "自然",
    example: "자연을 사랑해요.", exampleKatakana: "チャヨヌル サランヘヨ", exampleMeaning: "自然を愛します。",
    breakdown: [
      { word: "사랑해요", meaning: "愛します" }
    ] },
  { level: "2", hangul: "술집", katakana: "スルチプ", meaning: "居酒屋",
    example: "술집에서 만나요.", exampleKatakana: "スルチベソ マンナヨ", exampleMeaning: "居酒屋で会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "서다", katakana: "ソダ", meaning: "立つ",
    example: "줄을 서요.", exampleKatakana: "チュルル ソヨ", exampleMeaning: "列に並びます。",
    breakdown: [
      { word: "줄", meaning: "列" }
    ] },
  { level: "2", hangul: "우동", katakana: "ウドン", meaning: "うどん",
    example: "우동을 먹어요.", exampleKatakana: "ウドンウル モゴヨ", exampleMeaning: "うどんを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "이날", katakana: "イナル", meaning: "この日",
    example: "이날 결혼했어요.", exampleKatakana: "イナル キョロネッソヨ", exampleMeaning: "この日結婚しました。",
    breakdown: [
      { word: "결혼", meaning: "結婚" }
    ] },
  { level: "2", hangul: "테니스장", katakana: "テニスジャン", meaning: "テニス場",
    example: "테니스장에서 쳐요.", exampleKatakana: "テニスジャンエソ チョヨ", exampleMeaning: "テニス場でします。",
    breakdown: [
      { word: "쳐요", meaning: "します" }
    ] },
  { level: "2", hangul: "버리다", katakana: "ポリダ", meaning: "捨てる",
    example: "쓰레기를 버려요.", exampleKatakana: "スレギルル ポリョヨ", exampleMeaning: "ゴミを捨てます。",
    breakdown: [
      { word: "쓰레기", meaning: "ゴミ" }
    ] },
  { level: "2", hangul: "지나가다", katakana: "チナガダ", meaning: "通り過ぎる",
    example: "앞을 지나가요.", exampleKatakana: "アプル チナガヨ", exampleMeaning: "前を通り過ぎます。",
    breakdown: [
      { word: "앞", meaning: "前" }
    ] },
  { level: "2", hangul: "분식", katakana: "プンシク", meaning: "粉食（軽食）",
    example: "분식을 먹어요.", exampleKatakana: "プンシグル モゴヨ", exampleMeaning: "軽食を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "뽑다", katakana: "ポプタ", meaning: "選ぶ・抜く",
    example: "대표를 뽑아요.", exampleKatakana: "テピョルル ポパヨ", exampleMeaning: "代表を選びます。",
    breakdown: [
      { word: "대표", meaning: "代表" }
    ] },
  { level: "2", hangul: "입구", katakana: "イプク", meaning: "入り口",
    example: "입구에서 기다려요.", exampleKatakana: "イプクエソ キダリョヨ", exampleMeaning: "入り口で待ちます。",
    breakdown: [
      { word: "기다려요", meaning: "待ちます" }
    ] },
  { level: "2", hangul: "열", katakana: "ヨル", meaning: "10・熱",
    example: "열이 나요.", exampleKatakana: "ヨリ ナヨ", exampleMeaning: "熱が出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "탕수육", katakana: "タンスユク", meaning: "酢豚",
    example: "탕수육을 먹어요.", exampleKatakana: "タンスユグル モゴヨ", exampleMeaning: "酢豚を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "울산", katakana: "ウルサン", meaning: "蔚山",
    example: "울산에 살아요.", exampleKatakana: "ウルサネ サラヨ", exampleMeaning: "蔚山に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "거울", katakana: "コウル", meaning: "鏡",
    example: "거울을 봐요.", exampleKatakana: "コウルル バヨ", exampleMeaning: "鏡を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "식초", katakana: "シクチョ", meaning: "酢",
    example: "식초를 넣어요.", exampleKatakana: "シクチョルル ノオヨ", exampleMeaning: "酢を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "설탕", katakana: "ソルタン", meaning: "砂糖",
    example: "설탕을 넣어요.", exampleKatakana: "ソルタンウル ノオヨ", exampleMeaning: "砂糖を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "튀기다", katakana: "トゥィギダ", meaning: "揚げる",
    example: "고기를 튀겨요.", exampleKatakana: "コギルル トゥィギョヨ", exampleMeaning: "肉を揚げます。",
    breakdown: [
      { word: "고기", meaning: "肉" }
    ] },
  { level: "2", hangul: "붙이다", katakana: "プチダ", meaning: "貼る",
    example: "우표를 붙여요.", exampleKatakana: "ウピョルル プチョヨ", exampleMeaning: "切手を貼ります。",
    breakdown: [
      { word: "우표", meaning: "切手" }
    ] },
  { level: "2", hangul: "뵙다", katakana: "ペプタ", meaning: "お目にかかる",
    example: "선생님을 뵈어요.", exampleKatakana: "ソンセンニムル ペオヨ", exampleMeaning: "先生にお目にかかります。",
    breakdown: [
      { word: "선생님", meaning: "先生" }
    ] },
  { level: "2", hangul: "던지다", katakana: "トンジダ", meaning: "投げる",
    example: "공을 던져요.", exampleKatakana: "コンウル トンジョヨ", exampleMeaning: "ボールを投げます。",
    breakdown: [
      { word: "공", meaning: "ボール" }
    ] },
  { level: "2", hangul: "일어서다", katakana: "イロソダ", meaning: "立ち上がる",
    example: "자리에서 일어서요.", exampleKatakana: "チャリエソ イロソヨ", exampleMeaning: "席から立ち上がります。",
    breakdown: [
      { word: "자리", meaning: "席" }
    ] },
  { level: "2", hangul: "새해", katakana: "セヘ", meaning: "新年",
    example: "새해 복 많이 받으세요.", exampleKatakana: "セヘ ポク マニ パドゥセヨ", exampleMeaning: "新年明けましておめでとうございます。",
    breakdown: [
      { word: "복", meaning: "福" }
    ] },
  { level: "2", hangul: "순서", katakana: "スンソ", meaning: "順序",
    example: "순서대로 해요.", exampleKatakana: "スンソデロ ヘヨ", exampleMeaning: "順番通りにします。",
    breakdown: [
      { word: "대로", meaning: "通り" }
    ] },
  { level: "2", hangul: "이삿짐", katakana: "イサッチム", meaning: "引っ越しの荷物",
    example: "이삿짐을 옮겨요.", exampleKatakana: "イサッチムル オムギョヨ", exampleMeaning: "引っ越しの荷物を運びます。",
    breakdown: [
      { word: "옮겨요", meaning: "運びます" }
    ] },
  { level: "2", hangul: "형제", katakana: "ヒョンジェ", meaning: "兄弟",
    example: "형제가 있어요.", exampleKatakana: "ヒョンジェガ イッソヨ", exampleMeaning: "兄弟がいます。",
    breakdown: [
      { word: "있어요", meaning: "います" }
    ] },
  { level: "2", hangul: "걸음", katakana: "コルム", meaning: "歩み",
    example: "걸음이 빨라요.", exampleKatakana: "コルミ パルラヨ", exampleMeaning: "歩みが速いです。",
    breakdown: [
      { word: "빨라요", meaning: "速いです" }
    ] },
  { level: "2", hangul: "헬스클럽", katakana: "ヘルスクルロプ", meaning: "フィットネスクラブ",
    example: "헬스클럽에 다녀요.", exampleKatakana: "ヘルスクルロベ タニョヨ", exampleMeaning: "フィットネスクラブに通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "칫솔", katakana: "チッソル", meaning: "歯ブラシ",
    example: "칫솔을 써요.", exampleKatakana: "チッソルル ソヨ", exampleMeaning: "歯ブラシを使います。",
    breakdown: [
      { word: "써요", meaning: "使います" }
    ] },
  { level: "2", hangul: "날다", katakana: "ナルダ", meaning: "飛ぶ",
    example: "새가 날아요.", exampleKatakana: "セガ ナラヨ", exampleMeaning: "鳥が飛びます。",
    breakdown: [
      { word: "새", meaning: "鳥" }
    ] },
  { level: "2", hangul: "답답하다", katakana: "タプタパダ", meaning: "もどかしい",
    example: "마음이 답답해요.", exampleKatakana: "マウミ タプタペヨ", exampleMeaning: "心がもどかしいです。",
    breakdown: [
      { word: "마음", meaning: "心" }
    ] },
  { level: "2", hangul: "귀걸이", katakana: "クィゴリ", meaning: "イヤリング",
    example: "귀걸이를 해요.", exampleKatakana: "クィゴリルル ヘヨ", exampleMeaning: "イヤリングをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "자장면", katakana: "チャジャンミョン", meaning: "ジャージャー麺",
    example: "자장면을 먹어요.", exampleKatakana: "チャジャンミョヌル モゴヨ", exampleMeaning: "ジャージャー麺を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "입원", katakana: "イブォン", meaning: "入院",
    example: "병원에 입원해요.", exampleKatakana: "ピョンウォネ イブォネヨ", exampleMeaning: "病院に入院します。",
    breakdown: [
      { word: "병원", meaning: "病院" }
    ] },
  { level: "2", hangul: "샌드위치", katakana: "センドゥウィチ", meaning: "サンドイッチ",
    example: "샌드위치를 먹어요.", exampleKatakana: "センドゥウィチルル モゴヨ", exampleMeaning: "サンドイッチを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "거짓말", katakana: "コジンマル", meaning: "嘘",
    example: "거짓말을 해요.", exampleKatakana: "コジンマルル ヘヨ", exampleMeaning: "嘘をつきます。",
    breakdown: [
      { word: "해요", meaning: "つきます" }
    ] },
  { level: "2", hangul: "빵집", katakana: "パンチプ", meaning: "パン屋",
    example: "빵집에서 사요.", exampleKatakana: "パンチベソ サヨ", exampleMeaning: "パン屋で買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "느낌", katakana: "ヌッキム", meaning: "感じ",
    example: "좋은 느낌이에요.", exampleKatakana: "チョウン ヌッキミエヨ", exampleMeaning: "良い感じです。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "2", hangul: "수", katakana: "ス", meaning: "数・方法",
    example: "방법이 없어요.", exampleKatakana: "パンボビ オプソヨ", exampleMeaning: "方法がありません。",
    breakdown: [
      { word: "방법", meaning: "方法" }
    ] },
  { level: "2", hangul: "수영복", katakana: "スヨンボク", meaning: "水着",
    example: "수영복을 입어요.", exampleKatakana: "スヨンボグル イボヨ", exampleMeaning: "水着を着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "기차역", katakana: "キチャヨク", meaning: "汽車の駅",
    example: "기차역에서 만나요.", exampleKatakana: "キチャヨゲソ マンナヨ", exampleMeaning: "汽車の駅で会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "줄", katakana: "チュル", meaning: "列・ひも",
    example: "줄을 서요.", exampleKatakana: "チュルル ソヨ", exampleMeaning: "列に並びます。",
    breakdown: [
      { word: "서요", meaning: "並びます" }
    ] },
  { level: "2", hangul: "야채", katakana: "ヤチェ", meaning: "野菜",
    example: "야채를 먹어요.", exampleKatakana: "ヤチェルル モゴヨ", exampleMeaning: "野菜を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "모시다", katakana: "モシダ", meaning: "お連れする・仕える",
    example: "부모님을 모셔요.", exampleKatakana: "プモニムル モショヨ", exampleMeaning: "両親にお仕えします。",
    breakdown: [
      { word: "부모님", meaning: "両親" }
    ] },
  { level: "2", hangul: "발가락", katakana: "パルカラク", meaning: "足の指",
    example: "발가락이 아파요.", exampleKatakana: "パルカラギ アパヨ", exampleMeaning: "足の指が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "또는", katakana: "トヌン", meaning: "または",
    example: "커피 또는 차예요.", exampleKatakana: "コピ トヌン チャエヨ", exampleMeaning: "コーヒーまたはお茶です。",
    breakdown: [
      { word: "차", meaning: "お茶" }
    ] },
  { level: "2", hangul: "찾아오다", katakana: "チャジャオダ", meaning: "訪ねてくる",
    example: "친구가 찾아와요.", exampleKatakana: "チングガ チャジャワヨ", exampleMeaning: "友達が訪ねてきます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "중국집", katakana: "チュングクチプ", meaning: "中華料理店",
    example: "중국집에서 먹어요.", exampleKatakana: "チュングクチベソ モゴヨ", exampleMeaning: "中華料理店で食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "트럭", katakana: "トゥロク", meaning: "トラック",
    example: "트럭을 운전해요.", exampleKatakana: "トゥログル ウンジョネヨ", exampleMeaning: "トラックを運転します。",
    breakdown: [
      { word: "운전", meaning: "運転" }
    ] },
  { level: "2", hangul: "포장", katakana: "ポジャン", meaning: "包装",
    example: "선물을 포장해요.", exampleKatakana: "ソンムル ポジャンヘヨ", exampleMeaning: "プレゼントを包装します。",
    breakdown: [
      { word: "선물", meaning: "プレゼント" }
    ] },
  { level: "2", hangul: "스파게티", katakana: "スパゲティ", meaning: "スパゲッティ",
    example: "스파게티를 먹어요.", exampleKatakana: "スパゲティルル モゴヨ", exampleMeaning: "スパゲッティを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "아무것", katakana: "アムゴッ", meaning: "何も",
    example: "아무것도 없어요.", exampleKatakana: "アムゴット オプソヨ", exampleMeaning: "何もありません。",
    breakdown: [
      { word: "없어요", meaning: "ありません" }
    ] },
  { level: "2", hangul: "스웨터", katakana: "スウェト", meaning: "セーター",
    example: "스웨터를 입어요.", exampleKatakana: "スウェトルル イボヨ", exampleMeaning: "セーターを着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "순두부찌개", katakana: "スンドゥブチゲ", meaning: "スンドゥブチゲ",
    example: "순두부찌개를 먹어요.", exampleKatakana: "スンドゥブチゲルル モゴヨ", exampleMeaning: "スンドゥブチゲを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "시내", katakana: "シネ", meaning: "市内",
    example: "시내에 나가요.", exampleKatakana: "シネエ ナガヨ", exampleMeaning: "市内に出かけます。",
    breakdown: [
      { word: "나가요", meaning: "出かけます" }
    ] },
  { level: "2", hangul: "학년", katakana: "ハンニョン", meaning: "学年",
    example: "몇 학년이에요?", exampleKatakana: "ミョッ ハンニョニエヨ", exampleMeaning: "何年生ですか。",
    breakdown: [
      { word: "몇", meaning: "何" }
    ] },
  { level: "2", hangul: "교통비", katakana: "キョトンビ", meaning: "交通費",
    example: "교통비가 비싸요.", exampleKatakana: "キョトンビガ ピッサヨ", exampleMeaning: "交通費が高いです。",
    breakdown: [
      { word: "비싸요", meaning: "高いです" }
    ] },
  { level: "2", hangul: "셋째", katakana: "セッチェ", meaning: "三番目",
    example: "셋째 아이예요.", exampleKatakana: "セッチェ アイエヨ", exampleMeaning: "三番目の子供です。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "내용", katakana: "ネヨン", meaning: "内容",
    example: "내용을 확인해요.", exampleKatakana: "ネヨンウル ファギネヨ", exampleMeaning: "内容を確認します。",
    breakdown: [
      { word: "확인", meaning: "確認" }
    ] },
  { level: "2", hangul: "긴장", katakana: "キンジャン", meaning: "緊張",
    example: "긴장이 돼요.", exampleKatakana: "キンジャンイ ドェヨ", exampleMeaning: "緊張します。",
    breakdown: [
      { word: "돼요", meaning: "します" }
    ] },
  { level: "2", hangul: "매달", katakana: "メダル", meaning: "毎月",
    example: "매달 저금해요.", exampleKatakana: "メダル チョグメヨ", exampleMeaning: "毎月貯金します。",
    breakdown: [
      { word: "저금", meaning: "貯金" }
    ] },
  { level: "2", hangul: "출퇴근", katakana: "チュルトェグン", meaning: "出退勤",
    example: "출퇴근이 힘들어요.", exampleKatakana: "チュルトェグニ ヒムドゥロヨ", exampleMeaning: "出退勤が大変です。",
    breakdown: [
      { word: "힘들어요", meaning: "大変です" }
    ] },
  { level: "2", hangul: "매표소", katakana: "メピョソ", meaning: "切符売り場",
    example: "매표소에서 사요.", exampleKatakana: "メピョソエソ サヨ", exampleMeaning: "切符売り場で買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "식품", katakana: "シクプム", meaning: "食品",
    example: "건강 식품이에요.", exampleKatakana: "コンガン シクプミエヨ", exampleMeaning: "健康食品です。",
    breakdown: [
      { word: "건강", meaning: "健康" }
    ] },
  { level: "2", hangul: "찌다", katakana: "チダ", meaning: "蒸す・太る",
    example: "살이 쪄요.", exampleKatakana: "サリ チョヨ", exampleMeaning: "太ります。",
    breakdown: [
      { word: "살", meaning: "肉" }
    ] },
  { level: "2", hangul: "잊어버리다", katakana: "イジョボリダ", meaning: "忘れてしまう",
    example: "이름을 잊어버렸어요.", exampleKatakana: "イルムル イジョボリョッソヨ", exampleMeaning: "名前を忘れてしまいました。",
    breakdown: [
      { word: "이름", meaning: "名前" }
    ] },
  { level: "2", hangul: "습관", katakana: "スプグァン", meaning: "習慣",
    example: "좋은 습관이에요.", exampleKatakana: "チョウン スプグァニエヨ", exampleMeaning: "良い習慣です。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "2", hangul: "안되다", katakana: "アンデダ", meaning: "だめだ・うまくいかない",
    example: "일이 안돼요.", exampleKatakana: "イリ アンドェヨ", exampleMeaning: "仕事がうまくいきません。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "라디오", katakana: "ラディオ", meaning: "ラジオ",
    example: "라디오를 들어요.", exampleKatakana: "ラディオルル トゥロヨ", exampleMeaning: "ラジオを聞きます。",
    breakdown: [
      { word: "들어요", meaning: "聞きます" }
    ] },
  { level: "2", hangul: "부럽다", katakana: "プロプタ", meaning: "羨ましい",
    example: "친구가 부러워요.", exampleKatakana: "チングガ プロウォヨ", exampleMeaning: "友達が羨ましいです。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "관광지", katakana: "クァングァンジ", meaning: "観光地",
    example: "관광지에 가요.", exampleKatakana: "クァングァンジエ カヨ", exampleMeaning: "観光地に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "모양", katakana: "モヤン", meaning: "形",
    example: "모양이 달라요.", exampleKatakana: "モヤンイ タルラヨ", exampleMeaning: "形が違います。",
    breakdown: [
      { word: "달라요", meaning: "違います" }
    ] },
  { level: "2", hangul: "광주", katakana: "クァンジュ", meaning: "光州",
    example: "광주에 살아요.", exampleKatakana: "クァンジュエ サラヨ", exampleMeaning: "光州に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "서두르다", katakana: "ソドゥルダ", meaning: "急ぐ",
    example: "서둘러 가요.", exampleKatakana: "ソドゥルロ カヨ", exampleMeaning: "急いで行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "속옷", katakana: "ソゴッ", meaning: "下着",
    example: "속옷을 사요.", exampleKatakana: "ソゴスル サヨ", exampleMeaning: "下着を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "태풍", katakana: "テプン", meaning: "台風",
    example: "태풍이 와요.", exampleKatakana: "テプンイ ワヨ", exampleMeaning: "台風が来ます。",
    breakdown: [
      { word: "와요", meaning: "来ます" }
    ] },
  { level: "2", hangul: "결혼", katakana: "キョロン", meaning: "結婚",
    example: "결혼을 해요.", exampleKatakana: "キョロヌル ヘヨ", exampleMeaning: "結婚をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "노트", katakana: "ノトゥ", meaning: "ノート",
    example: "노트에 써요.", exampleKatakana: "ノトゥエ ソヨ", exampleMeaning: "ノートに書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "2", hangul: "배드민턴", katakana: "ペドゥミントン", meaning: "バドミントン",
    example: "배드민턴을 쳐요.", exampleKatakana: "ペドゥミントヌル チョヨ", exampleMeaning: "バドミントンをします。",
    breakdown: [
      { word: "쳐요", meaning: "します" }
    ] },
  { level: "2", hangul: "햇빛", katakana: "ヘッピッ", meaning: "日差し",
    example: "햇빛이 강해요.", exampleKatakana: "ヘッピチ カンヘヨ", exampleMeaning: "日差しが強いです。",
    breakdown: [
      { word: "강해요", meaning: "強いです" }
    ] },
  { level: "2", hangul: "삼겹살", katakana: "サムギョプサル", meaning: "サムギョプサル",
    example: "삼겹살을 먹어요.", exampleKatakana: "サムギョプサルル モゴヨ", exampleMeaning: "サムギョプサルを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "남학생", katakana: "ナマクセン", meaning: "男子学生",
    example: "남학생이 많아요.", exampleKatakana: "ナマクセンイ マナヨ", exampleMeaning: "男子学生が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "썰다", katakana: "ソルダ", meaning: "切る（食材を）",
    example: "야채를 썰어요.", exampleKatakana: "ヤチェルル ソロヨ", exampleMeaning: "野菜を切ります。",
    breakdown: [
      { word: "야채", meaning: "野菜" }
    ] },
  { level: "2", hangul: "저번", katakana: "チョボン", meaning: "この前",
    example: "저번에 만났어요.", exampleKatakana: "チョボネ マンナッソヨ", exampleMeaning: "この前会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "2", hangul: "휴게실", katakana: "ヒュゲシル", meaning: "休憩室",
    example: "휴게실에서 쉬어요.", exampleKatakana: "ヒュゲシレソ シュィオヨ", exampleMeaning: "休憩室で休みます。",
    breakdown: [
      { word: "쉬어요", meaning: "休みます" }
    ] },
  { level: "2", hangul: "그때", katakana: "クッテ", meaning: "その時",
    example: "그때 만났어요.", exampleKatakana: "クッテ マンナッソヨ", exampleMeaning: "その時会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "2", hangul: "낮잠", katakana: "ナッチャム", meaning: "昼寝",
    example: "낮잠을 자요.", exampleKatakana: "ナッチャムル ジャヨ", exampleMeaning: "昼寝をします。",
    breakdown: [
      { word: "자요", meaning: "寝ます" }
    ] },
  { level: "2", hangul: "마트", katakana: "マトゥ", meaning: "スーパー",
    example: "마트에서 사요.", exampleKatakana: "マトゥエソ サヨ", exampleMeaning: "スーパーで買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "씹다", katakana: "シプタ", meaning: "噛む",
    example: "껌을 씹어요.", exampleKatakana: "コムル シボヨ", exampleMeaning: "ガムを噛みます。",
    breakdown: [
      { word: "껌", meaning: "ガム" }
    ] },
  { level: "2", hangul: "한턱", katakana: "ハントク", meaning: "おごり",
    example: "제가 한턱 낼게요.", exampleKatakana: "チェガ ハントク ネルケヨ", exampleMeaning: "私がおごります。",
    breakdown: [
      { word: "제가", meaning: "私が" }
    ] },
  { level: "2", hangul: "꺼내다", katakana: "コネダ", meaning: "取り出す",
    example: "지갑을 꺼내요.", exampleKatakana: "チガブル コネヨ", exampleMeaning: "財布を取り出します。",
    breakdown: [
      { word: "지갑", meaning: "財布" }
    ] },
  { level: "2", hangul: "출석", katakana: "チュルソク", meaning: "出席",
    example: "수업에 출석해요.", exampleKatakana: "スオベ チュルソケヨ", exampleMeaning: "授業に出席します。",
    breakdown: [
      { word: "수업", meaning: "授業" }
    ] },
  { level: "2", hangul: "누르다", katakana: "ヌルダ", meaning: "押す",
    example: "버튼을 눌러요.", exampleKatakana: "ボトゥヌル ヌルロヨ", exampleMeaning: "ボタンを押します。",
    breakdown: [
      { word: "버튼", meaning: "ボタン" }
    ] },
  { level: "2", hangul: "익숙하다", katakana: "イクスカダ", meaning: "慣れている",
    example: "일이 익숙해요.", exampleKatakana: "イリ イクスケヨ", exampleMeaning: "仕事に慣れています。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "고속버스", katakana: "コソクポス", meaning: "高速バス",
    example: "고속버스를 타요.", exampleKatakana: "コソクポスルル タヨ", exampleMeaning: "高速バスに乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "2", hangul: "메시지", katakana: "メシジ", meaning: "メッセージ",
    example: "메시지를 보내요.", exampleKatakana: "メシジルル ポネヨ", exampleMeaning: "メッセージを送ります。",
    breakdown: [
      { word: "보내요", meaning: "送ります" }
    ] },
  { level: "2", hangul: "넷째", katakana: "ネッチェ", meaning: "四番目",
    example: "넷째 아이예요.", exampleKatakana: "ネッチェ アイエヨ", exampleMeaning: "四番目の子供です。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "할인", katakana: "ハリン", meaning: "割引",
    example: "할인을 받아요.", exampleKatakana: "ハリヌル パダヨ", exampleMeaning: "割引を受けます。",
    breakdown: [
      { word: "받아요", meaning: "受けます" }
    ] },
  { level: "2", hangul: "반찬", katakana: "パンチャン", meaning: "おかず",
    example: "반찬을 만들어요.", exampleKatakana: "パンチャヌル マンドゥロヨ", exampleMeaning: "おかずを作ります。",
    breakdown: [
      { word: "만들어요", meaning: "作ります" }
    ] },
  { level: "2", hangul: "피다", katakana: "ピダ", meaning: "咲く",
    example: "꽃이 피어요.", exampleKatakana: "コチ ピオヨ", exampleMeaning: "花が咲きます。",
    breakdown: [
      { word: "꽃", meaning: "花" }
    ] },
  { level: "2", hangul: "짜증", katakana: "チャジュン", meaning: "苛立ち",
    example: "짜증이 나요.", exampleKatakana: "チャジュンイ ナヨ", exampleMeaning: "イライラします。",
    breakdown: [
      { word: "나요", meaning: "します" }
    ] },
  { level: "2", hangul: "두다", katakana: "トゥダ", meaning: "置く",
    example: "여기 두세요.", exampleKatakana: "ヨギ トゥセヨ", exampleMeaning: "ここに置いてください。",
    breakdown: [
      { word: "여기", meaning: "ここ" }
    ] },
  { level: "2", hangul: "불쌍하다", katakana: "プルサンハダ", meaning: "かわいそうだ",
    example: "불쌍한 강아지예요.", exampleKatakana: "プルサンハン カンアジエヨ", exampleMeaning: "かわいそうな子犬です。",
    breakdown: [
      { word: "강아지", meaning: "子犬" }
    ] },
  { level: "2", hangul: "왜냐하면", katakana: "ウェニャハミョン", meaning: "なぜなら",
    example: "왜냐하면 바빠서요.", exampleKatakana: "ウェニャハミョン パッパソヨ", exampleMeaning: "なぜなら忙しいからです。",
    breakdown: [
      { word: "바빠서", meaning: "忙しくて" }
    ] },
  { level: "2", hangul: "가늘다", katakana: "カヌルダ", meaning: "細い",
    example: "손가락이 가늘어요.", exampleKatakana: "ソンカラギ カヌロヨ", exampleMeaning: "指が細いです。",
    breakdown: [
      { word: "손가락", meaning: "指" }
    ] },
  { level: "2", hangul: "그러므로", katakana: "クロムロ", meaning: "したがって",
    example: "그러므로 조심해요.", exampleKatakana: "クロムロ チョシメヨ", exampleMeaning: "したがって注意します。",
    breakdown: [
      { word: "조심", meaning: "注意" }
    ] },
  { level: "2", hangul: "나타나다", katakana: "ナタナダ", meaning: "現れる",
    example: "갑자기 나타났어요.", exampleKatakana: "カプチャギ ナタナッソヨ", exampleMeaning: "急に現れました。",
    breakdown: [
      { word: "갑자기", meaning: "急に" }
    ] },
  { level: "2", hangul: "노력", katakana: "ノリョク", meaning: "努力",
    example: "노력을 해요.", exampleKatakana: "ノリョグル ヘヨ", exampleMeaning: "努力をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "경찰서", katakana: "キョンチャルソ", meaning: "警察署",
    example: "경찰서에 가요.", exampleKatakana: "キョンチャルソエ カヨ", exampleMeaning: "警察署に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "바라보다", katakana: "パラボダ", meaning: "見つめる",
    example: "하늘을 바라봐요.", exampleKatakana: "ハヌルル パラバヨ", exampleMeaning: "空を見つめます。",
    breakdown: [
      { word: "하늘", meaning: "空" }
    ] },
  { level: "2", hangul: "외우다", katakana: "ウェウダ", meaning: "覚える",
    example: "단어를 외워요.", exampleKatakana: "タノルル ウェウォヨ", exampleMeaning: "単語を覚えます。",
    breakdown: [
      { word: "단어", meaning: "単語" }
    ] },
  { level: "2", hangul: "낫다", katakana: "ナッタ", meaning: "治る・ましだ",
    example: "감기가 나았어요.", exampleKatakana: "カムギガ ナアッソヨ", exampleMeaning: "風邪が治りました。",
    breakdown: [
      { word: "감기", meaning: "風邪" }
    ] },
  { level: "2", hangul: "뚱뚱하다", katakana: "トゥントゥンハダ", meaning: "太っている",
    example: "뚱뚱한 강아지예요.", exampleKatakana: "トゥントゥンハン カンアジエヨ", exampleMeaning: "太った子犬です。",
    breakdown: [
      { word: "강아지", meaning: "子犬" }
    ] },
  { level: "2", hangul: "현재", katakana: "ヒョンジェ", meaning: "現在",
    example: "현재 상황이에요.", exampleKatakana: "ヒョンジェ サンファンイエヨ", exampleMeaning: "現在の状況です。",
    breakdown: [
      { word: "상황", meaning: "状況" }
    ] },
  { level: "2", hangul: "수건", katakana: "スゴン", meaning: "タオル",
    example: "수건으로 닦아요.", exampleKatakana: "スゴヌロ タッカヨ", exampleMeaning: "タオルで拭きます。",
    breakdown: [
      { word: "닦아요", meaning: "拭きます" }
    ] },
  { level: "2", hangul: "간호사", katakana: "カノサ", meaning: "看護師",
    example: "간호사가 되고 싶어요.", exampleKatakana: "カノサガ トェゴ シポヨ", exampleMeaning: "看護師になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "푸르다", katakana: "プルダ", meaning: "青い",
    example: "하늘이 푸르러요.", exampleKatakana: "ハヌリ プルロヨ", exampleMeaning: "空が青いです。",
    breakdown: [
      { word: "하늘", meaning: "空" }
    ] },
  { level: "2", hangul: "공", katakana: "コン", meaning: "ボール",
    example: "공을 던져요.", exampleKatakana: "コンウル トンジョヨ", exampleMeaning: "ボールを投げます。",
    breakdown: [
      { word: "던져요", meaning: "投げます" }
    ] },
  { level: "2", hangul: "버릇", katakana: "ポルッ", meaning: "癖",
    example: "나쁜 버릇이에요.", exampleKatakana: "ナップン ポルシエヨ", exampleMeaning: "悪い癖です。",
    breakdown: [
      { word: "나쁜", meaning: "悪い" }
    ] },
  { level: "2", hangul: "운동복", katakana: "ウンドンボク", meaning: "運動着",
    example: "운동복을 입어요.", exampleKatakana: "ウンドンボグル イボヨ", exampleMeaning: "運動着を着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "사실", katakana: "サシル", meaning: "事実",
    example: "사실을 말해요.", exampleKatakana: "サシルル マレヨ", exampleMeaning: "事実を話します。",
    breakdown: [
      { word: "말해요", meaning: "話します" }
    ] },
  { level: "2", hangul: "국", katakana: "グク", meaning: "スープ",
    example: "국을 먹어요.", exampleKatakana: "ググル モゴヨ", exampleMeaning: "スープを飲みます。",
    breakdown: [
      { word: "먹어요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "어깨", katakana: "オッケ", meaning: "肩",
    example: "어깨가 아파요.", exampleKatakana: "オッケガ アパヨ", exampleMeaning: "肩が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "풍경", katakana: "プンギョン", meaning: "風景",
    example: "아름다운 풍경이에요.", exampleKatakana: "アルムダウン プンギョンイエヨ", exampleMeaning: "美しい風景です。",
    breakdown: [
      { word: "아름다운", meaning: "美しい" }
    ] },
  { level: "2", hangul: "내다", katakana: "ネダ", meaning: "出す",
    example: "돈을 내요.", exampleKatakana: "トヌル ネヨ", exampleMeaning: "お金を出します。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "배탈", katakana: "ペタル", meaning: "お腹の不調",
    example: "배탈이 났어요.", exampleKatakana: "ペタリ ナッソヨ", exampleMeaning: "お腹を壊しました。",
    breakdown: [
      { word: "났어요", meaning: "壊しました" }
    ] },
  { level: "2", hangul: "삼촌", katakana: "サムチョン", meaning: "おじさん",
    example: "삼촌 집에 가요.", exampleKatakana: "サムチョン チベ カヨ", exampleMeaning: "おじさんの家に行きます。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "2", hangul: "훌륭하다", katakana: "フルリュンハダ", meaning: "立派だ",
    example: "훌륭한 사람이에요.", exampleKatakana: "フルリュンハン サラミエヨ", exampleMeaning: "立派な人です。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "2", hangul: "갖다", katakana: "カッタ", meaning: "持つ",
    example: "꿈을 갖고 있어요.", exampleKatakana: "クムル カッコ イッソヨ", exampleMeaning: "夢を持っています。",
    breakdown: [
      { word: "꿈", meaning: "夢" }
    ] },
  { level: "2", hangul: "교육", katakana: "キョユク", meaning: "教育",
    example: "교육을 받아요.", exampleKatakana: "キョユグル パダヨ", exampleMeaning: "教育を受けます。",
    breakdown: [
      { word: "받아요", meaning: "受けます" }
    ] },
  { level: "2", hangul: "아마", katakana: "アマ", meaning: "たぶん",
    example: "아마 올 거예요.", exampleKatakana: "アマ オル コエヨ", exampleMeaning: "たぶん来るでしょう。",
    breakdown: [
      { word: "올 거예요", meaning: "来るでしょう" }
    ] },
  { level: "2", hangul: "조심", katakana: "チョシム", meaning: "注意",
    example: "차 조심하세요.", exampleKatakana: "チャ チョシマセヨ", exampleMeaning: "車に気をつけてください。",
    breakdown: [
      { word: "차", meaning: "車" }
    ] },
  { level: "2", hangul: "이전", katakana: "イジョン", meaning: "以前",
    example: "이전에 살았어요.", exampleKatakana: "イジョネ サラッソヨ", exampleMeaning: "以前住んでいました。",
    breakdown: [
      { word: "살았어요", meaning: "住んでいました" }
    ] },
  { level: "2", hangul: "고추장", katakana: "コチュジャン", meaning: "コチュジャン",
    example: "고추장을 넣어요.", exampleKatakana: "コチュジャンウル ノオヨ", exampleMeaning: "コチュジャンを入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "발바닥", katakana: "パルパダク", meaning: "足の裏",
    example: "발바닥이 아파요.", exampleKatakana: "パルパダギ アパヨ", exampleMeaning: "足の裏が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "오른손", katakana: "オルンソン", meaning: "右手",
    example: "오른손으로 써요.", exampleKatakana: "オルンソヌロ ソヨ", exampleMeaning: "右手で書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "2", hangul: "비슷하다", katakana: "ピスタダ", meaning: "似ている",
    example: "성격이 비슷해요.", exampleKatakana: "ソンギョギ ピステヨ", exampleMeaning: "性格が似ています。",
    breakdown: [
      { word: "성격", meaning: "性格" }
    ] },
  { level: "2", hangul: "심하다", katakana: "シマダ", meaning: "ひどい",
    example: "기침이 심해요.", exampleKatakana: "キチミ シメヨ", exampleMeaning: "咳がひどいです。",
    breakdown: [
      { word: "기침", meaning: "咳" }
    ] },
  { level: "2", hangul: "왕", katakana: "ワン", meaning: "王",
    example: "옛날 왕이에요.", exampleKatakana: "イェンナル ワンイエヨ", exampleMeaning: "昔の王です。",
    breakdown: [
      { word: "옛날", meaning: "昔" }
    ] },
  { level: "2", hangul: "성적", katakana: "ソンジョク", meaning: "成績",
    example: "성적이 좋아요.", exampleKatakana: "ソンジョギ チョアヨ", exampleMeaning: "成績が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "교과서", katakana: "キョグァソ", meaning: "教科書",
    example: "교과서를 읽어요.", exampleKatakana: "キョグァソルル イルゴヨ", exampleMeaning: "教科書を読みます。",
    breakdown: [
      { word: "읽어요", meaning: "読みます" }
    ] },
  { level: "2", hangul: "횡단보도", katakana: "フェンダンボド", meaning: "横断歩道",
    example: "횡단보도를 건너요.", exampleKatakana: "フェンダンボドルル コンノヨ", exampleMeaning: "横断歩道を渡ります。",
    breakdown: [
      { word: "건너요", meaning: "渡ります" }
    ] },
  { level: "2", hangul: "대부분", katakana: "テブブン", meaning: "大部分",
    example: "대부분 찬성해요.", exampleKatakana: "テブブン チャンソンヘヨ", exampleMeaning: "大部分が賛成します。",
    breakdown: [
      { word: "찬성", meaning: "賛成" }
    ] },
  { level: "2", hangul: "젖다", katakana: "チョッタ", meaning: "濡れる",
    example: "비에 젖었어요.", exampleKatakana: "ピエ チョジョッソヨ", exampleMeaning: "雨に濡れました。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "2", hangul: "양식집", katakana: "ヤンシクチプ", meaning: "洋食店",
    example: "양식집에서 먹어요.", exampleKatakana: "ヤンシクチベソ モゴヨ", exampleMeaning: "洋食店で食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "손녀", katakana: "ソンニョ", meaning: "孫娘",
    example: "손녀가 귀여워요.", exampleKatakana: "ソンニョガ クィヨウォヨ", exampleMeaning: "孫娘がかわいいです。",
    breakdown: [
      { word: "귀여워요", meaning: "かわいいです" }
    ] },
  { level: "2", hangul: "윷놀이", katakana: "ユンノリ", meaning: "ユンノリ（韓国の伝統遊び）",
    example: "설날에 윷놀이를 해요.", exampleKatakana: "ソルラレ ユンノリルル ヘヨ", exampleMeaning: "元旦にユンノリをします。",
    breakdown: [
      { word: "설날", meaning: "元旦" }
    ] },
  { level: "2", hangul: "아나운서", katakana: "アナウンソ", meaning: "アナウンサー",
    example: "아나운서가 되고 싶어요.", exampleKatakana: "アナウンソガ トェゴ シポヨ", exampleMeaning: "アナウンサーになりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "멈추다", katakana: "モムチュダ", meaning: "止まる",
    example: "차가 멈춰요.", exampleKatakana: "チャガ モムチョヨ", exampleMeaning: "車が止まります。",
    breakdown: [
      { word: "차", meaning: "車" }
    ] },
  { level: "2", hangul: "꽃병", katakana: "コッピョン", meaning: "花瓶",
    example: "꽃병에 꽂아요.", exampleKatakana: "コッピョンエ コジャヨ", exampleMeaning: "花瓶に挿します。",
    breakdown: [
      { word: "꽂아요", meaning: "挿します" }
    ] },
  { level: "2", hangul: "첫째", katakana: "チョッチェ", meaning: "一番目",
    example: "첫째 아이예요.", exampleKatakana: "チョッチェ アイエヨ", exampleMeaning: "一番目の子供です。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "파란색", katakana: "パランセク", meaning: "青色",
    example: "파란색을 좋아해요.", exampleKatakana: "パランセグル チョアヘヨ", exampleMeaning: "青色が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "흰색", katakana: "フィンセク", meaning: "白色",
    example: "흰색 옷이에요.", exampleKatakana: "フィンセク オシエヨ", exampleMeaning: "白色の服です。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "소주", katakana: "ソジュ", meaning: "焼酎",
    example: "소주를 마셔요.", exampleKatakana: "ソジュルル マショヨ", exampleMeaning: "焼酎を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "돌다", katakana: "トルダ", meaning: "回る",
    example: "바퀴가 돌아요.", exampleKatakana: "パクィガ トラヨ", exampleMeaning: "車輪が回ります。",
    breakdown: [
      { word: "바퀴", meaning: "車輪" }
    ] },
  { level: "2", hangul: "글자", katakana: "クルチャ", meaning: "文字",
    example: "글자가 커요.", exampleKatakana: "クルチャガ コヨ", exampleMeaning: "文字が大きいです。",
    breakdown: [
      { word: "커요", meaning: "大きいです" }
    ] },
  { level: "2", hangul: "메다", katakana: "メダ", meaning: "背負う",
    example: "가방을 메요.", exampleKatakana: "カバンウル メヨ", exampleMeaning: "かばんを背負います。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "2", hangul: "색", katakana: "セク", meaning: "色",
    example: "무슨 색이에요?", exampleKatakana: "ムスン セギエヨ", exampleMeaning: "何色ですか。",
    breakdown: [
      { word: "무슨", meaning: "何の" }
    ] },
  { level: "2", hangul: "시간표", katakana: "シガンピョ", meaning: "時間割",
    example: "시간표를 봐요.", exampleKatakana: "シガンピョルル バヨ", exampleMeaning: "時間割を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "지하도", katakana: "チハド", meaning: "地下道",
    example: "지하도로 건너요.", exampleKatakana: "チハドロ コンノヨ", exampleMeaning: "地下道で渡ります。",
    breakdown: [
      { word: "건너요", meaning: "渡ります" }
    ] },
  { level: "2", hangul: "슬픔", katakana: "スルプム", meaning: "悲しみ",
    example: "슬픔을 느껴요.", exampleKatakana: "スルプムル ヌッキョヨ", exampleMeaning: "悲しみを感じます。",
    breakdown: [
      { word: "느껴요", meaning: "感じます" }
    ] },
  { level: "2", hangul: "연결", katakana: "ヨンギョル", meaning: "接続",
    example: "전화를 연결해요.", exampleKatakana: "チョナルル ヨンギョレヨ", exampleMeaning: "電話をつなぎます。",
    breakdown: [
      { word: "전화", meaning: "電話" }
    ] },
  { level: "2", hangul: "냄비", katakana: "ネムビ", meaning: "鍋",
    example: "냄비에 끓여요.", exampleKatakana: "ネムビエ クリョヨ", exampleMeaning: "鍋で煮ます。",
    breakdown: [
      { word: "끓여요", meaning: "煮ます" }
    ] },
  { level: "2", hangul: "지키다", katakana: "チキダ", meaning: "守る",
    example: "약속을 지켜요.", exampleKatakana: "ヤクソグル チキョヨ", exampleMeaning: "約束を守ります。",
    breakdown: [
      { word: "약속", meaning: "約束" }
    ] },
  { level: "2", hangul: "쓰레기", katakana: "スレギ", meaning: "ゴミ",
    example: "쓰레기를 버려요.", exampleKatakana: "スレギルル ポリョヨ", exampleMeaning: "ゴミを捨てます。",
    breakdown: [
      { word: "버려요", meaning: "捨てます" }
    ] },
  { level: "2", hangul: "남", katakana: "ナム", meaning: "他人",
    example: "남을 도와줘요.", exampleKatakana: "ナムル トワジョヨ", exampleMeaning: "他人を助けます。",
    breakdown: [
      { word: "도와줘요", meaning: "助けます" }
    ] },
  { level: "2", hangul: "기억", katakana: "キオク", meaning: "記憶",
    example: "기억이 안 나요.", exampleKatakana: "キオギ アン ナヨ", exampleMeaning: "記憶が出てきません。",
    breakdown: [
      { word: "안 나요", meaning: "出てきません" }
    ] },
  { level: "2", hangul: "와이셔츠", katakana: "ワイショチュ", meaning: "ワイシャツ",
    example: "와이셔츠를 입어요.", exampleKatakana: "ワイショチュルル イボヨ", exampleMeaning: "ワイシャツを着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "이르다", katakana: "イルダ", meaning: "早い",
    example: "시간이 일러요.", exampleKatakana: "シガニ イルロヨ", exampleMeaning: "時間が早いです。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "다음날", katakana: "タウムナル", meaning: "翌日",
    example: "다음날 만나요.", exampleKatakana: "タウムナル マンナヨ", exampleMeaning: "翌日会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "깨다", katakana: "ケダ", meaning: "割れる・目覚める",
    example: "잠이 깨요.", exampleKatakana: "チャミ ケヨ", exampleMeaning: "目が覚めます。",
    breakdown: [
      { word: "잠", meaning: "眠り" }
    ] },
  { level: "2", hangul: "항공", katakana: "ハンゴン", meaning: "航空",
    example: "항공권을 사요.", exampleKatakana: "ハンゴンクォヌル サヨ", exampleMeaning: "航空券を買います。",
    breakdown: [
      { word: "항공권", meaning: "航空券" }
    ] },
  { level: "2", hangul: "까만색", katakana: "カマンセク", meaning: "黒色",
    example: "까만색 신발이에요.", exampleKatakana: "カマンセク シンバリエヨ", exampleMeaning: "黒色の靴です。",
    breakdown: [
      { word: "신발", meaning: "靴" }
    ] },
  { level: "2", hangul: "벌써", katakana: "ポルソ", meaning: "もう",
    example: "벌써 다 했어요.", exampleKatakana: "ポルソ タ ヘッソヨ", exampleMeaning: "もう全部やりました。",
    breakdown: [
      { word: "다", meaning: "全部" }
    ] },
  { level: "2", hangul: "양식", katakana: "ヤンシク", meaning: "洋食",
    example: "양식을 좋아해요.", exampleKatakana: "ヤンシグル チョアヘヨ", exampleMeaning: "洋食が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "코끼리", katakana: "コッキリ", meaning: "象",
    example: "코끼리를 봐요.", exampleKatakana: "コッキリルル バヨ", exampleMeaning: "象を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "종류", katakana: "チョンニュ", meaning: "種類",
    example: "종류가 많아요.", exampleKatakana: "チョンニュガ マナヨ", exampleMeaning: "種類が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "갈아입다", katakana: "カライプタ", meaning: "着替える",
    example: "옷을 갈아입어요.", exampleKatakana: "オスル カライボヨ", exampleMeaning: "服を着替えます。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "간단히", katakana: "カンダニ", meaning: "簡単に",
    example: "간단히 설명해요.", exampleKatakana: "カンダニ ソルミョンヘヨ", exampleMeaning: "簡単に説明します。",
    breakdown: [
      { word: "설명", meaning: "説明" }
    ] },
  { level: "2", hangul: "불편", katakana: "プルピョン", meaning: "不便",
    example: "좀 불편해요.", exampleKatakana: "チョム プルピョネヨ", exampleMeaning: "少し不便です。",
    breakdown: [
      { word: "좀", meaning: "少し" }
    ] },
  { level: "2", hangul: "휴지통", katakana: "ヒュジトン", meaning: "ゴミ箱",
    example: "휴지통에 버려요.", exampleKatakana: "ヒュジトンエ ポリョヨ", exampleMeaning: "ゴミ箱に捨てます。",
    breakdown: [
      { word: "버려요", meaning: "捨てます" }
    ] },
  { level: "2", hangul: "스케이트", katakana: "スケイトゥ", meaning: "スケート",
    example: "스케이트를 타요.", exampleKatakana: "スケイトゥルル タヨ", exampleMeaning: "スケートをします。",
    breakdown: [
      { word: "타요", meaning: "します" }
    ] },
  { level: "2", hangul: "이미", katakana: "イミ", meaning: "すでに",
    example: "이미 끝났어요.", exampleKatakana: "イミ クンナッソヨ", exampleMeaning: "すでに終わりました。",
    breakdown: [
      { word: "끝났어요", meaning: "終わりました" }
    ] },
  { level: "2", hangul: "집들이", katakana: "チプドゥリ", meaning: "引っ越し祝い",
    example: "집들이를 해요.", exampleKatakana: "チプドゥリルル ヘヨ", exampleMeaning: "引っ越し祝いをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "찌개", katakana: "チゲ", meaning: "チゲ",
    example: "찌개를 끓여요.", exampleKatakana: "チゲルル クリョヨ", exampleMeaning: "チゲを作ります。",
    breakdown: [
      { word: "끓여요", meaning: "作ります" }
    ] },
  { level: "2", hangul: "미역국", katakana: "ミヨックク", meaning: "わかめスープ",
    example: "생일에 미역국을 먹어요.", exampleKatakana: "センイレ ミヨックグル モゴヨ", exampleMeaning: "誕生日にわかめスープを食べます。",
    breakdown: [
      { word: "생일", meaning: "誕生日" }
    ] },
  { level: "2", hangul: "왼손", katakana: "ウェンソン", meaning: "左手",
    example: "왼손으로 써요.", exampleKatakana: "ウェンソヌロ ソヨ", exampleMeaning: "左手で書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "2", hangul: "마르다", katakana: "マルダ", meaning: "乾く・痩せる",
    example: "빨래가 말라요.", exampleKatakana: "パルレガ マルラヨ", exampleMeaning: "洗濯物が乾きます。",
    breakdown: [
      { word: "빨래", meaning: "洗濯物" }
    ] },
  { level: "2", hangul: "상품", katakana: "サンプム", meaning: "商品",
    example: "상품을 팔아요.", exampleKatakana: "サンプムル パラヨ", exampleMeaning: "商品を売ります。",
    breakdown: [
      { word: "팔아요", meaning: "売ります" }
    ] },
  { level: "2", hangul: "꾸다", katakana: "クダ", meaning: "（夢を）見る",
    example: "꿈을 꿔요.", exampleKatakana: "クムル クォヨ", exampleMeaning: "夢を見ます。",
    breakdown: [
      { word: "꿈", meaning: "夢" }
    ] },
  { level: "2", hangul: "동시", katakana: "トンシ", meaning: "同時",
    example: "동시에 시작해요.", exampleKatakana: "トンシエ シジャケヨ", exampleMeaning: "同時に始めます。",
    breakdown: [
      { word: "시작해요", meaning: "始めます" }
    ] },
  { level: "2", hangul: "악기", katakana: "アクキ", meaning: "楽器",
    example: "악기를 연주해요.", exampleKatakana: "アクキルル ヨンジュヘヨ", exampleMeaning: "楽器を演奏します。",
    breakdown: [
      { word: "연주", meaning: "演奏" }
    ] },
  { level: "2", hangul: "비다", katakana: "ピダ", meaning: "空く",
    example: "자리가 비었어요.", exampleKatakana: "チャリガ ピオッソヨ", exampleMeaning: "席が空いています。",
    breakdown: [
      { word: "자리", meaning: "席" }
    ] },
  { level: "2", hangul: "기쁨", katakana: "キップム", meaning: "喜び",
    example: "기쁨을 나눠요.", exampleKatakana: "キップムル ナノヨ", exampleMeaning: "喜びを分かち合います。",
    breakdown: [
      { word: "나눠요", meaning: "分かち合います" }
    ] },
  { level: "2", hangul: "아래쪽", katakana: "アレチョク", meaning: "下側",
    example: "아래쪽에 있어요.", exampleKatakana: "アレチョゲ イッソヨ", exampleMeaning: "下側にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "짝", katakana: "チャク", meaning: "相棒・ペア",
    example: "짝을 지어요.", exampleKatakana: "チャグル チオヨ", exampleMeaning: "ペアを組みます。",
    breakdown: [
      { word: "지어요", meaning: "組みます" }
    ] },
  { level: "2", hangul: "계단", katakana: "ケダン", meaning: "階段",
    example: "계단을 올라가요.", exampleKatakana: "ケダヌル オルラガヨ", exampleMeaning: "階段を上ります。",
    breakdown: [
      { word: "올라가요", meaning: "上ります" }
    ] },
  { level: "2", hangul: "스키장", katakana: "スキジャン", meaning: "スキー場",
    example: "스키장에 가요.", exampleKatakana: "スキジャンエ カヨ", exampleMeaning: "スキー場に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "여쭙다", katakana: "ヨッチュプタ", meaning: "お伺いする",
    example: "선생님께 여쭤봐요.", exampleKatakana: "ソンセンニムケ ヨッチュォバヨ", exampleMeaning: "先生にお伺いします。",
    breakdown: [
      { word: "선생님", meaning: "先生" }
    ] },
  { level: "2", hangul: "미리", katakana: "ミリ", meaning: "前もって",
    example: "미리 준비해요.", exampleKatakana: "ミリ チュンビヘヨ", exampleMeaning: "前もって準備します。",
    breakdown: [
      { word: "준비", meaning: "準備" }
    ] },
  { level: "2", hangul: "신호", katakana: "シノ", meaning: "信号",
    example: "신호를 지켜요.", exampleKatakana: "シノルル チキョヨ", exampleMeaning: "信号を守ります。",
    breakdown: [
      { word: "지켜요", meaning: "守ります" }
    ] },
  { level: "2", hangul: "튀김", katakana: "トゥィギム", meaning: "天ぷら",
    example: "튀김을 먹어요.", exampleKatakana: "トゥィギムル モゴヨ", exampleMeaning: "天ぷらを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "키우다", katakana: "キウダ", meaning: "育てる",
    example: "아이를 키워요.", exampleKatakana: "アイルル キウォヨ", exampleMeaning: "子供を育てます。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "끓이다", katakana: "クリダ", meaning: "沸かす",
    example: "물을 끓여요.", exampleKatakana: "ムルル クリョヨ", exampleMeaning: "お湯を沸かします。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "2", hangul: "목도리", katakana: "モクトリ", meaning: "マフラー",
    example: "목도리를 해요.", exampleKatakana: "モクトリルル ヘヨ", exampleMeaning: "マフラーをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "받아쓰다", katakana: "パダスダ", meaning: "書き取る",
    example: "단어를 받아써요.", exampleKatakana: "タノルル パダソヨ", exampleMeaning: "単語を書き取ります。",
    breakdown: [
      { word: "단어", meaning: "単語" }
    ] },
  { level: "2", hangul: "답장", katakana: "タプチャン", meaning: "返事（手紙）",
    example: "편지에 답장해요.", exampleKatakana: "ピョンジエ タプチャンヘヨ", exampleMeaning: "手紙に返事をします。",
    breakdown: [
      { word: "편지", meaning: "手紙" }
    ] },
  { level: "2", hangul: "안다", katakana: "アンタ", meaning: "抱く",
    example: "아기를 안아요.", exampleKatakana: "アギルル アナヨ", exampleMeaning: "赤ちゃんを抱きます。",
    breakdown: [
      { word: "아기", meaning: "赤ちゃん" }
    ] },
  { level: "2", hangul: "숫자", katakana: "スッチャ", meaning: "数字",
    example: "숫자를 세요.", exampleKatakana: "スッチャルル セヨ", exampleMeaning: "数字を数えます。",
    breakdown: [
      { word: "세요", meaning: "数えます" }
    ] },
  { level: "2", hangul: "특별히", katakana: "トゥクピョリ", meaning: "特別に",
    example: "특별히 좋아해요.", exampleKatakana: "トゥクピョリ チョアヘヨ", exampleMeaning: "特別に好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "상추", katakana: "サンチュ", meaning: "サンチュ",
    example: "상추에 싸 먹어요.", exampleKatakana: "サンチュエ サ モゴヨ", exampleMeaning: "サンチュに包んで食べます。",
    breakdown: [
      { word: "싸 먹어요", meaning: "包んで食べます" }
    ] },
  { level: "2", hangul: "관계", katakana: "クァンゲ", meaning: "関係",
    example: "좋은 관계예요.", exampleKatakana: "チョウン クァンゲエヨ", exampleMeaning: "良い関係です。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "2", hangul: "수고", katakana: "スゴ", meaning: "苦労",
    example: "수고하셨습니다.", exampleKatakana: "スゴハショッスムニダ", exampleMeaning: "お疲れ様でした。",
    breakdown: [
      { word: "하셨습니다", meaning: "なさいました" }
    ] },
  { level: "2", hangul: "그러나", katakana: "クロナ", meaning: "しかし",
    example: "맛있어요. 그러나 비싸요.", exampleKatakana: "マシッソヨ クロナ ピッサヨ", exampleMeaning: "おいしいです。しかし高いです。",
    breakdown: [
      { word: "맛있어요", meaning: "おいしいです" }
    ] },
  { level: "2", hangul: "알맞다", katakana: "アルマッタ", meaning: "ふさわしい",
    example: "알맞은 답이에요.", exampleKatakana: "アルマジュン タビエヨ", exampleMeaning: "ふさわしい答えです。",
    breakdown: [
      { word: "답", meaning: "答え" }
    ] },
  { level: "2", hangul: "하숙비", katakana: "ハスクピ", meaning: "下宿代",
    example: "하숙비를 내요.", exampleKatakana: "ハスクピルル ネヨ", exampleMeaning: "下宿代を払います。",
    breakdown: [
      { word: "내요", meaning: "払います" }
    ] },
  { level: "2", hangul: "짬뽕", katakana: "チャンポン", meaning: "チャンポン",
    example: "짬뽕을 먹어요.", exampleKatakana: "チャンポンウル モゴヨ", exampleMeaning: "チャンポンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "이상", katakana: "イサン", meaning: "以上",
    example: "백 개 이상이에요.", exampleKatakana: "ペッ ケ イサンイエヨ", exampleMeaning: "100個以上です。",
    breakdown: [
      { word: "백 개", meaning: "100個" }
    ] },
  { level: "2", hangul: "즐기다", katakana: "チュルギダ", meaning: "楽しむ",
    example: "여행을 즐겨요.", exampleKatakana: "ヨヘンウル チュルギョヨ", exampleMeaning: "旅行を楽しみます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "회원", katakana: "フェウォン", meaning: "会員",
    example: "회원이 돼요.", exampleKatakana: "フェウォニ ドェヨ", exampleMeaning: "会員になります。",
    breakdown: [
      { word: "돼요", meaning: "なります" }
    ] },
  { level: "2", hangul: "어린아이", katakana: "オリナイ", meaning: "幼い子供",
    example: "어린아이가 놀아요.", exampleKatakana: "オリナイガ ノラヨ", exampleMeaning: "幼い子供が遊びます。",
    breakdown: [
      { word: "놀아요", meaning: "遊びます" }
    ] },
  { level: "2", hangul: "재미", katakana: "チェミ", meaning: "面白さ",
    example: "재미가 있어요.", exampleKatakana: "チェミガ イッソヨ", exampleMeaning: "面白いです。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "세다", katakana: "セダ", meaning: "数える・強い",
    example: "숫자를 세요.", exampleKatakana: "スッチャルル セヨ", exampleMeaning: "数字を数えます。",
    breakdown: [
      { word: "숫자", meaning: "数字" }
    ] },
  { level: "2", hangul: "연말", katakana: "ヨンマル", meaning: "年末",
    example: "연말에 만나요.", exampleKatakana: "ヨンマレ マンナヨ", exampleMeaning: "年末に会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "초대장", katakana: "チョデジャン", meaning: "招待状",
    example: "초대장을 보내요.", exampleKatakana: "チョデジャンウル ポネヨ", exampleMeaning: "招待状を送ります。",
    breakdown: [
      { word: "보내요", meaning: "送ります" }
    ] },
  { level: "2", hangul: "태도", katakana: "テド", meaning: "態度",
    example: "태도가 좋아요.", exampleKatakana: "テドガ チョアヨ", exampleMeaning: "態度が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "콧물", katakana: "コンムル", meaning: "鼻水",
    example: "콧물이 나요.", exampleKatakana: "コンムリ ナヨ", exampleMeaning: "鼻水が出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "사고", katakana: "サゴ", meaning: "事故",
    example: "사고가 났어요.", exampleKatakana: "サゴガ ナッソヨ", exampleMeaning: "事故が起きました。",
    breakdown: [
      { word: "났어요", meaning: "起きました" }
    ] },
  { level: "2", hangul: "자랑", katakana: "チャラン", meaning: "自慢",
    example: "자랑을 해요.", exampleKatakana: "チャランウル ヘヨ", exampleMeaning: "自慢をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "기차표", katakana: "キチャピョ", meaning: "汽車の切符",
    example: "기차표를 사요.", exampleKatakana: "キチャピョルル サヨ", exampleMeaning: "汽車の切符を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "입술", katakana: "イプスル", meaning: "唇",
    example: "입술이 예뻐요.", exampleKatakana: "イプスリ イェッポヨ", exampleMeaning: "唇がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "글씨", katakana: "クルシ", meaning: "文字",
    example: "글씨를 써요.", exampleKatakana: "クルシルル ソヨ", exampleMeaning: "字を書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "2", hangul: "소풍", katakana: "ソプン", meaning: "遠足",
    example: "소풍을 가요.", exampleKatakana: "ソプンウル カヨ", exampleMeaning: "遠足に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "화려하다", katakana: "ファリョハダ", meaning: "華やかだ",
    example: "옷이 화려해요.", exampleKatakana: "オシ ファリョヘヨ", exampleMeaning: "服が華やかです。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "사탕", katakana: "サタン", meaning: "飴",
    example: "사탕을 먹어요.", exampleKatakana: "サタンウル モゴヨ", exampleMeaning: "飴を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "진하다", katakana: "チナダ", meaning: "濃い",
    example: "커피가 진해요.", exampleKatakana: "コピガ チネヨ", exampleMeaning: "コーヒーが濃いです。",
    breakdown: [
      { word: "커피", meaning: "コーヒー" }
    ] },
  { level: "2", hangul: "옆집", katakana: "ヨプチプ", meaning: "隣の家",
    example: "옆집에 살아요.", exampleKatakana: "ヨプチベ サラヨ", exampleMeaning: "隣の家に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "성공", katakana: "ソンゴン", meaning: "成功",
    example: "사업이 성공했어요.", exampleKatakana: "サオビ ソンゴンヘッソヨ", exampleMeaning: "事業が成功しました。",
    breakdown: [
      { word: "사업", meaning: "事業" }
    ] },
  { level: "2", hangul: "학기", katakana: "ハクキ", meaning: "学期",
    example: "새 학기가 시작해요.", exampleKatakana: "セ ハクキガ シジャケヨ", exampleMeaning: "新学期が始まります。",
    breakdown: [
      { word: "시작해요", meaning: "始まります" }
    ] },
  { level: "2", hangul: "자기소개", katakana: "チャギソゲ", meaning: "自己紹介",
    example: "자기소개를 해요.", exampleKatakana: "チャギソゲルル ヘヨ", exampleMeaning: "自己紹介をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "완전히", katakana: "ワンジョニ", meaning: "完全に",
    example: "완전히 끝났어요.", exampleKatakana: "ワンジョニ クンナッソヨ", exampleMeaning: "完全に終わりました。",
    breakdown: [
      { word: "끝났어요", meaning: "終わりました" }
    ] },
  { level: "2", hangul: "굵다", katakana: "クルクタ", meaning: "太い",
    example: "팔이 굵어요.", exampleKatakana: "パリ クルゴヨ", exampleMeaning: "腕が太いです。",
    breakdown: [
      { word: "팔", meaning: "腕" }
    ] },
  { level: "2", hangul: "아줌마", katakana: "アジュンマ", meaning: "おばさん",
    example: "아줌마가 친절해요.", exampleKatakana: "アジュンマガ チンジョレヨ", exampleMeaning: "おばさんが親切です。",
    breakdown: [
      { word: "친절해요", meaning: "親切です" }
    ] },
  { level: "2", hangul: "하늘", katakana: "ハヌル", meaning: "空",
    example: "하늘이 파래요.", exampleKatakana: "ハヌリ パレヨ", exampleMeaning: "空が青いです。",
    breakdown: [
      { word: "파래요", meaning: "青いです" }
    ] },
  { level: "2", hangul: "삼거리", katakana: "サムゴリ", meaning: "三差路",
    example: "삼거리에서 만나요.", exampleKatakana: "サムゴリエソ マンナヨ", exampleMeaning: "三差路で会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "울음", katakana: "ウルム", meaning: "泣くこと",
    example: "울음을 그쳐요.", exampleKatakana: "ウルムル クチョヨ", exampleMeaning: "泣き止みます。",
    breakdown: [
      { word: "그쳐요", meaning: "止みます" }
    ] },
  { level: "2", hangul: "서비스", katakana: "ソビス", meaning: "サービス",
    example: "서비스가 좋아요.", exampleKatakana: "ソビスガ チョアヨ", exampleMeaning: "サービスが良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "이용", katakana: "イヨン", meaning: "利用",
    example: "버스를 이용해요.", exampleKatakana: "ボスルル イヨンヘヨ", exampleMeaning: "バスを利用します。",
    breakdown: [
      { word: "버스", meaning: "バス" }
    ] },
  { level: "2", hangul: "팀", katakana: "ティム", meaning: "チーム",
    example: "우리 팀이 이겼어요.", exampleKatakana: "ウリ ティミ イギョッソヨ", exampleMeaning: "私たちのチームが勝ちました。",
    breakdown: [
      { word: "이겼어요", meaning: "勝ちました" }
    ] },
  { level: "2", hangul: "목걸이", katakana: "モッコリ", meaning: "ネックレス",
    example: "목걸이를 해요.", exampleKatakana: "モッコリルル ヘヨ", exampleMeaning: "ネックレスをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "센터", katakana: "セント", meaning: "センター",
    example: "문화 센터에 가요.", exampleKatakana: "ムヌァ セントエ カヨ", exampleMeaning: "文化センターに行きます。",
    breakdown: [
      { word: "문화", meaning: "文化" }
    ] },
  { level: "2", hangul: "옛날", katakana: "イェンナル", meaning: "昔",
    example: "옛날이야기예요.", exampleKatakana: "イェンナリヤギエヨ", exampleMeaning: "昔話です。",
    breakdown: [
      { word: "이야기", meaning: "話" }
    ] },
  { level: "2", hangul: "싣다", katakana: "シッタ", meaning: "積む",
    example: "짐을 실어요.", exampleKatakana: "チムル シロヨ", exampleMeaning: "荷物を積みます。",
    breakdown: [
      { word: "짐", meaning: "荷物" }
    ] },
  { level: "2", hangul: "홍차", katakana: "ホンチャ", meaning: "紅茶",
    example: "홍차를 마셔요.", exampleKatakana: "ホンチャルル マショヨ", exampleMeaning: "紅茶を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "흘리다", katakana: "フルリダ", meaning: "流す・こぼす",
    example: "땀을 흘려요.", exampleKatakana: "タムル フルリョヨ", exampleMeaning: "汗を流します。",
    breakdown: [
      { word: "땀", meaning: "汗" }
    ] },
  { level: "2", hangul: "금방", katakana: "クムバン", meaning: "すぐに",
    example: "금방 올게요.", exampleKatakana: "クムバン オルケヨ", exampleMeaning: "すぐに来ます。",
    breakdown: [
      { word: "올게요", meaning: "来ます" }
    ] },
  { level: "2", hangul: "뒤쪽", katakana: "トゥィチョク", meaning: "後ろ側",
    example: "뒤쪽에 있어요.", exampleKatakana: "トゥィチョゲ イッソヨ", exampleMeaning: "後ろ側にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "달리기", katakana: "タルリギ", meaning: "かけっこ",
    example: "달리기를 해요.", exampleKatakana: "タルリギルル ヘヨ", exampleMeaning: "かけっこをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "엘리베이터", katakana: "エルリベイト", meaning: "エレベーター",
    example: "엘리베이터를 타요.", exampleKatakana: "エルリベイトルル タヨ", exampleMeaning: "エレベーターに乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "2", hangul: "분명하다", katakana: "プンミョンハダ", meaning: "明確だ",
    example: "이유가 분명해요.", exampleKatakana: "イユガ プンミョンヘヨ", exampleMeaning: "理由が明確です。",
    breakdown: [
      { word: "이유", meaning: "理由" }
    ] },
  { level: "2", hangul: "그날", katakana: "クナル", meaning: "その日",
    example: "그날 만났어요.", exampleKatakana: "クナル マンナッソヨ", exampleMeaning: "その日会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "2", hangul: "하얀색", katakana: "ハヤンセク", meaning: "白色",
    example: "하얀색 옷이에요.", exampleKatakana: "ハヤンセク オシエヨ", exampleMeaning: "白色の服です。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "엉덩이", katakana: "オンドンイ", meaning: "お尻",
    example: "엉덩이가 아파요.", exampleKatakana: "オンドンイガ アパヨ", exampleMeaning: "お尻が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "밀다", katakana: "ミルダ", meaning: "押す",
    example: "문을 밀어요.", exampleKatakana: "ムヌル ミロヨ", exampleMeaning: "ドアを押します。",
    breakdown: [
      { word: "문", meaning: "ドア" }
    ] },
  { level: "2", hangul: "편리", katakana: "ピョルリ", meaning: "便利",
    example: "편리한 도구예요.", exampleKatakana: "ピョルリハン トグエヨ", exampleMeaning: "便利な道具です。",
    breakdown: [
      { word: "도구", meaning: "道具" }
    ] },
  { level: "2", hangul: "주차", katakana: "チュチャ", meaning: "駐車",
    example: "여기에 주차해요.", exampleKatakana: "ヨギエ チュチャヘヨ", exampleMeaning: "ここに駐車します。",
    breakdown: [
      { word: "여기", meaning: "ここ" }
    ] },
  { level: "2", hangul: "껌", katakana: "コム", meaning: "ガム",
    example: "껌을 씹어요.", exampleKatakana: "コムル シボヨ", exampleMeaning: "ガムを噛みます。",
    breakdown: [
      { word: "씹어요", meaning: "噛みます" }
    ] },
  { level: "2", hangul: "원하다", katakana: "ウォナダ", meaning: "望む",
    example: "성공을 원해요.", exampleKatakana: "ソンゴンウル ウォネヨ", exampleMeaning: "成功を望みます。",
    breakdown: [
      { word: "성공", meaning: "成功" }
    ] },
  { level: "2", hangul: "그립다", katakana: "クリプタ", meaning: "懐かしい",
    example: "고향이 그리워요.", exampleKatakana: "コヒャンイ クリウォヨ", exampleMeaning: "故郷が懐かしいです。",
    breakdown: [
      { word: "고향", meaning: "故郷" }
    ] },
  { level: "2", hangul: "궁금하다", katakana: "クングマダ", meaning: "気になる",
    example: "결과가 궁금해요.", exampleKatakana: "キョルグァガ クングメヨ", exampleMeaning: "結果が気になります。",
    breakdown: [
      { word: "결과", meaning: "結果" }
    ] },
  { level: "2", hangul: "땀", katakana: "タム", meaning: "汗",
    example: "땀이 나요.", exampleKatakana: "タミ ナヨ", exampleMeaning: "汗が出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "세탁소", katakana: "セタクソ", meaning: "クリーニング店",
    example: "세탁소에 맡겨요.", exampleKatakana: "セタクソエ マッキョヨ", exampleMeaning: "クリーニング店に預けます。",
    breakdown: [
      { word: "맡겨요", meaning: "預けます" }
    ] },
  { level: "2", hangul: "송편", katakana: "ソンピョン", meaning: "松餅",
    example: "추석에 송편을 먹어요.", exampleKatakana: "チュソゲ ソンピョヌル モゴヨ", exampleMeaning: "秋夕に松餅を食べます。",
    breakdown: [
      { word: "추석", meaning: "秋夕" }
    ] },
  { level: "2", hangul: "정원", katakana: "チョンウォン", meaning: "庭園",
    example: "정원이 아름다워요.", exampleKatakana: "チョンウォニ アルムダウォヨ", exampleMeaning: "庭園が美しいです。",
    breakdown: [
      { word: "아름다워요", meaning: "美しいです" }
    ] },
  { level: "2", hangul: "독서", katakana: "トクソ", meaning: "読書",
    example: "독서를 좋아해요.", exampleKatakana: "トクソルル チョアヘヨ", exampleMeaning: "読書が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "엽서", katakana: "ヨプソ", meaning: "葉書",
    example: "엽서를 보내요.", exampleKatakana: "ヨプソルル ポネヨ", exampleMeaning: "葉書を送ります。",
    breakdown: [
      { word: "보내요", meaning: "送ります" }
    ] },
  { level: "2", hangul: "프라이팬", katakana: "プライペン", meaning: "フライパン",
    example: "프라이팬에 구워요.", exampleKatakana: "プライペネ クウォヨ", exampleMeaning: "フライパンで焼きます。",
    breakdown: [
      { word: "구워요", meaning: "焼きます" }
    ] },
  { level: "2", hangul: "등", katakana: "トゥン", meaning: "背中・など",
    example: "등이 아파요.", exampleKatakana: "トゥンイ アパヨ", exampleMeaning: "背中が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "설날", katakana: "ソルラル", meaning: "元旦",
    example: "설날에 떡국을 먹어요.", exampleKatakana: "ソルラレ トックグル モゴヨ", exampleMeaning: "元旦にお雑煮を食べます。",
    breakdown: [
      { word: "떡국", meaning: "お雑煮" }
    ] },
  { level: "2", hangul: "영하", katakana: "ヨンハ", meaning: "氷点下",
    example: "영하 오도예요.", exampleKatakana: "ヨンハ オドエヨ", exampleMeaning: "氷点下5度です。",
    breakdown: [
      { word: "도", meaning: "度" }
    ] },
  { level: "2", hangul: "행사", katakana: "ヘンサ", meaning: "行事",
    example: "행사에 참여해요.", exampleKatakana: "ヘンサエ チャミョヘヨ", exampleMeaning: "行事に参加します。",
    breakdown: [
      { word: "참여", meaning: "参加" }
    ] },
  { level: "2", hangul: "모임", katakana: "モイム", meaning: "集まり",
    example: "모임에 가요.", exampleKatakana: "モイメ カヨ", exampleMeaning: "集まりに行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "막걸리", katakana: "マッコルリ", meaning: "マッコリ",
    example: "막걸리를 마셔요.", exampleKatakana: "マッコルリルル マショヨ", exampleMeaning: "マッコリを飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "소", katakana: "ソ", meaning: "牛",
    example: "소를 키워요.", exampleKatakana: "ソルル キウォヨ", exampleMeaning: "牛を飼います。",
    breakdown: [
      { word: "키워요", meaning: "飼います" }
    ] },
  { level: "2", hangul: "이렇다", katakana: "イロタ", meaning: "こうだ",
    example: "이렇게 해요.", exampleKatakana: "イロケ ヘヨ", exampleMeaning: "こうします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "생선", katakana: "センソン", meaning: "魚",
    example: "생선을 먹어요.", exampleKatakana: "センソヌル モゴヨ", exampleMeaning: "魚を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "만두", katakana: "マンドゥ", meaning: "餃子",
    example: "만두를 먹어요.", exampleKatakana: "マンドゥルル モゴヨ", exampleMeaning: "餃子を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "스카프", katakana: "スカプ", meaning: "スカーフ",
    example: "스카프를 매요.", exampleKatakana: "スカプルル メヨ", exampleMeaning: "スカーフを巻きます。",
    breakdown: [
      { word: "매요", meaning: "巻きます" }
    ] },
  { level: "2", hangul: "편안", katakana: "ピョナン", meaning: "楽・安らか",
    example: "마음이 편안해요.", exampleKatakana: "マウミ ピョナネヨ", exampleMeaning: "心が安らかです。",
    breakdown: [
      { word: "마음", meaning: "心" }
    ] },
  { level: "2", hangul: "똑바로", katakana: "トクパロ", meaning: "まっすぐに",
    example: "똑바로 가세요.", exampleKatakana: "トクパロ カセヨ", exampleMeaning: "まっすぐ行ってください。",
    breakdown: [
      { word: "가세요", meaning: "行ってください" }
    ] },
  { level: "2", hangul: "연예인", katakana: "ヨネイン", meaning: "芸能人",
    example: "연예인을 좋아해요.", exampleKatakana: "ヨネイヌル チョアヘヨ", exampleMeaning: "芸能人が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "잔치", katakana: "チャンチ", meaning: "宴会",
    example: "생일 잔치를 해요.", exampleKatakana: "センイル チャンチルル ヘヨ", exampleMeaning: "誕生日パーティーをします。",
    breakdown: [
      { word: "생일", meaning: "誕生日" }
    ] },
  { level: "2", hangul: "초록색", katakana: "チョロクセク", meaning: "緑色",
    example: "초록색 옷이에요.", exampleKatakana: "チョロクセク オシエヨ", exampleMeaning: "緑色の服です。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "똑같다", katakana: "トッカッタ", meaning: "全く同じだ",
    example: "맛이 똑같아요.", exampleKatakana: "マシ トッカタヨ", exampleMeaning: "味が全く同じです。",
    breakdown: [
      { word: "맛", meaning: "味" }
    ] },
  { level: "2", hangul: "싸우다", katakana: "サウダ", meaning: "喧嘩する",
    example: "친구와 싸워요.", exampleKatakana: "チングワ サウォヨ", exampleMeaning: "友達と喧嘩します。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "크기", katakana: "クギ", meaning: "大きさ",
    example: "크기가 달라요.", exampleKatakana: "クギガ タルラヨ", exampleMeaning: "大きさが違います。",
    breakdown: [
      { word: "달라요", meaning: "違います" }
    ] },
  { level: "2", hangul: "신분증", katakana: "シンブンチュン", meaning: "身分証",
    example: "신분증을 보여줘요.", exampleKatakana: "シンブンチュンウル ボヨジョヨ", exampleMeaning: "身分証を見せます。",
    breakdown: [
      { word: "보여줘요", meaning: "見せます" }
    ] },
  { level: "2", hangul: "휴지", katakana: "ヒュジ", meaning: "ティッシュ",
    example: "휴지를 써요.", exampleKatakana: "ヒュジルル ソヨ", exampleMeaning: "ティッシュを使います。",
    breakdown: [
      { word: "써요", meaning: "使います" }
    ] },
  { level: "2", hangul: "걸어오다", katakana: "コロオダ", meaning: "歩いてくる",
    example: "학교까지 걸어와요.", exampleKatakana: "ハッキョカジ コロワヨ", exampleMeaning: "学校まで歩いてきます。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "2", hangul: "자신", katakana: "チャシン", meaning: "自身",
    example: "자신을 믿어요.", exampleKatakana: "チャシヌル ミドヨ", exampleMeaning: "自分を信じます。",
    breakdown: [
      { word: "믿어요", meaning: "信じます" }
    ] },
  { level: "2", hangul: "빨갛다", katakana: "パルガタ", meaning: "赤い",
    example: "얼굴이 빨개요.", exampleKatakana: "オルグリ パルゲヨ", exampleMeaning: "顔が赤いです。",
    breakdown: [
      { word: "얼굴", meaning: "顔" }
    ] },
  { level: "2", hangul: "드디어", katakana: "トゥディオ", meaning: "ついに",
    example: "드디어 성공했어요.", exampleKatakana: "トゥディオ ソンゴンヘッソヨ", exampleMeaning: "ついに成功しました。",
    breakdown: [
      { word: "성공", meaning: "成功" }
    ] },
  { level: "2", hangul: "옳다", katakana: "オルタ", meaning: "正しい",
    example: "네 말이 옳아요.", exampleKatakana: "ネ マリ オラヨ", exampleMeaning: "君の言葉は正しいです。",
    breakdown: [
      { word: "말", meaning: "言葉" }
    ] },
  { level: "2", hangul: "현금", katakana: "ヒョングム", meaning: "現金",
    example: "현금으로 내요.", exampleKatakana: "ヒョングムロ ネヨ", exampleMeaning: "現金で払います。",
    breakdown: [
      { word: "내요", meaning: "払います" }
    ] },
  { level: "2", hangul: "주변", katakana: "チュビョン", meaning: "周辺",
    example: "주변을 살펴봐요.", exampleKatakana: "チュビョヌル サルピョバヨ", exampleMeaning: "周辺を見回します。",
    breakdown: [
      { word: "살펴봐요", meaning: "見回します" }
    ] },
  { level: "2", hangul: "한잔", katakana: "ハンジャン", meaning: "一杯",
    example: "한잔 해요.", exampleKatakana: "ハンジャン ヘヨ", exampleMeaning: "一杯飲みましょう。",
    breakdown: [
      { word: "해요", meaning: "飲みましょう" }
    ] },
  { level: "2", hangul: "아빠", katakana: "アッパ", meaning: "パパ",
    example: "아빠가 요리해요.", exampleKatakana: "アッパガ ヨリヘヨ", exampleMeaning: "パパが料理します。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "2", hangul: "땅", katakana: "タン", meaning: "土地",
    example: "땅을 사요.", exampleKatakana: "タンウル サヨ", exampleMeaning: "土地を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "지우다", katakana: "チウダ", meaning: "消す",
    example: "글씨를 지워요.", exampleKatakana: "クルシルル チウォヨ", exampleMeaning: "字を消します。",
    breakdown: [
      { word: "글씨", meaning: "字" }
    ] },
  { level: "2", hangul: "화가", katakana: "ファガ", meaning: "画家",
    example: "유명한 화가예요.", exampleKatakana: "ユミョンハン ファガエヨ", exampleMeaning: "有名な画家です。",
    breakdown: [
      { word: "유명한", meaning: "有名な" }
    ] },
  { level: "2", hangul: "청소년", katakana: "チョンソニョン", meaning: "青少年",
    example: "청소년을 위한 책이에요.", exampleKatakana: "チョンソニョヌル ウィハン チェギエヨ", exampleMeaning: "青少年のための本です。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "2", hangul: "잎", katakana: "イプ", meaning: "葉",
    example: "잎이 떨어져요.", exampleKatakana: "イピ トロジョヨ", exampleMeaning: "葉が落ちます。",
    breakdown: [
      { word: "떨어져요", meaning: "落ちます" }
    ] },
  { level: "2", hangul: "못생기다", katakana: "モッセンギダ", meaning: "不細工だ",
    example: "못생겼어요.", exampleKatakana: "モッセンギョッソヨ", exampleMeaning: "不細工です。",
    breakdown: [
      { word: "어요", meaning: "です" }
    ] },
  { level: "2", hangul: "열흘", katakana: "ヨルル", meaning: "十日",
    example: "열흘 후에 만나요.", exampleKatakana: "ヨルル フエ マンナヨ", exampleMeaning: "十日後に会いましょう。",
    breakdown: [
      { word: "후", meaning: "後" }
    ] },
  { level: "2", hangul: "섬", katakana: "ソム", meaning: "島",
    example: "섬에 살아요.", exampleKatakana: "ソメ サラヨ", exampleMeaning: "島に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "사계절", katakana: "サゲジョル", meaning: "四季",
    example: "한국은 사계절이 있어요.", exampleKatakana: "ハンググン サゲジョリ イッソヨ", exampleMeaning: "韓国には四季があります。",
    breakdown: [
      { word: "한국", meaning: "韓国" }
    ] },
  { level: "2", hangul: "까맣다", katakana: "カマタ", meaning: "黒い",
    example: "머리가 까매요.", exampleKatakana: "モリガ カメヨ", exampleMeaning: "髪が黒いです。",
    breakdown: [
      { word: "머리", meaning: "髪" }
    ] },
  { level: "2", hangul: "메모", katakana: "メモ", meaning: "メモ",
    example: "메모를 해요.", exampleKatakana: "メモルル ヘヨ", exampleMeaning: "メモをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "새", katakana: "セ", meaning: "鳥・新しい",
    example: "새가 날아요.", exampleKatakana: "セガ ナラヨ", exampleMeaning: "鳥が飛びます。",
    breakdown: [
      { word: "날아요", meaning: "飛びます" }
    ] },
  { level: "2", hangul: "소포", katakana: "ソポ", meaning: "小包",
    example: "소포를 보내요.", exampleKatakana: "ソポルル ポネヨ", exampleMeaning: "小包を送ります。",
    breakdown: [
      { word: "보내요", meaning: "送ります" }
    ] },
  { level: "2", hangul: "무게", katakana: "ムゲ", meaning: "重さ",
    example: "무게를 재요.", exampleKatakana: "ムゲルル チェヨ", exampleMeaning: "重さを測ります。",
    breakdown: [
      { word: "재요", meaning: "測ります" }
    ] },
  { level: "2", hangul: "북쪽", katakana: "プクチョク", meaning: "北側",
    example: "북쪽으로 가요.", exampleKatakana: "プクチョグロ カヨ", exampleMeaning: "北側に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "부치다", katakana: "プチダ", meaning: "送る",
    example: "편지를 부쳐요.", exampleKatakana: "ピョンジルル プチョヨ", exampleMeaning: "手紙を送ります。",
    breakdown: [
      { word: "편지", meaning: "手紙" }
    ] },
  { level: "2", hangul: "알아보다", katakana: "アラボダ", meaning: "調べる",
    example: "정보를 알아봐요.", exampleKatakana: "チョンボルル アラバヨ", exampleMeaning: "情報を調べます。",
    breakdown: [
      { word: "정보", meaning: "情報" }
    ] },
  { level: "2", hangul: "바깥쪽", katakana: "パッカッチョク", meaning: "外側",
    example: "바깥쪽에 있어요.", exampleKatakana: "パッカッチョゲ イッソヨ", exampleMeaning: "外側にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "콩", katakana: "コン", meaning: "豆",
    example: "콩을 먹어요.", exampleKatakana: "コンウル モゴヨ", exampleMeaning: "豆を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "예매", katakana: "イェメ", meaning: "前売り予約",
    example: "표를 예매해요.", exampleKatakana: "ピョルル イェメヘヨ", exampleMeaning: "チケットを予約します。",
    breakdown: [
      { word: "표", meaning: "チケット" }
    ] },
  { level: "2", hangul: "환전", katakana: "ファンジョン", meaning: "両替",
    example: "돈을 환전해요.", exampleKatakana: "トヌル ファンジョネヨ", exampleMeaning: "お金を両替します。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "노랗다", katakana: "ノラタ", meaning: "黄色い",
    example: "은행잎이 노래요.", exampleKatakana: "ウネンニピ ノレヨ", exampleMeaning: "銀杏の葉が黄色いです。",
    breakdown: [
      { word: "은행잎", meaning: "銀杏の葉" }
    ] },
  { level: "2", hangul: "쓰레기통", katakana: "スレギトン", meaning: "ゴミ箱",
    example: "쓰레기통에 버려요.", exampleKatakana: "スレギトンエ ポリョヨ", exampleMeaning: "ゴミ箱に捨てます。",
    breakdown: [
      { word: "버려요", meaning: "捨てます" }
    ] },
  { level: "2", hangul: "편하다", katakana: "ピョナダ", meaning: "楽だ・便利だ",
    example: "이 신발이 편해요.", exampleKatakana: "イ シンバリ ピョネヨ", exampleMeaning: "この靴が楽です。",
    breakdown: [
      { word: "신발", meaning: "靴" }
    ] },
  { level: "2", hangul: "간장", katakana: "カンジャン", meaning: "醤油",
    example: "간장을 넣어요.", exampleKatakana: "カンジャンウル ノオヨ", exampleMeaning: "醤油を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "가끔", katakana: "カックム", meaning: "たまに",
    example: "가끔 만나요.", exampleKatakana: "カックム マンナヨ", exampleMeaning: "たまに会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "우선", katakana: "ウソン", meaning: "まず",
    example: "우선 먹어요.", exampleKatakana: "ウソン モゴヨ", exampleMeaning: "まず食べましょう。",
    breakdown: [
      { word: "먹어요", meaning: "食べましょう" }
    ] },
  { level: "2", hangul: "틀다", katakana: "トゥルダ", meaning: "つける（テレビなど）",
    example: "텔레비전을 틀어요.", exampleKatakana: "テルレビジョヌル トゥロヨ", exampleMeaning: "テレビをつけます。",
    breakdown: [
      { word: "텔레비전", meaning: "テレビ" }
    ] },
  { level: "2", hangul: "비밀", katakana: "ピミル", meaning: "秘密",
    example: "비밀을 지켜요.", exampleKatakana: "ピミルル チキョヨ", exampleMeaning: "秘密を守ります。",
    breakdown: [
      { word: "지켜요", meaning: "守ります" }
    ] },
  { level: "2", hangul: "문제", katakana: "ムンジェ", meaning: "問題",
    example: "문제를 풀어요.", exampleKatakana: "ムンジェルル プロヨ", exampleMeaning: "問題を解きます。",
    breakdown: [
      { word: "풀어요", meaning: "解きます" }
    ] },
  { level: "2", hangul: "열리다", katakana: "ヨルリダ", meaning: "開く",
    example: "문이 열려요.", exampleKatakana: "ムニ ヨルリョヨ", exampleMeaning: "ドアが開きます。",
    breakdown: [
      { word: "문", meaning: "ドア" }
    ] },
  { level: "2", hangul: "배달", katakana: "ペダル", meaning: "配達",
    example: "음식을 배달해요.", exampleKatakana: "ウムシグル ペダレヨ", exampleMeaning: "料理を配達します。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "2", hangul: "부장", katakana: "プジャン", meaning: "部長",
    example: "부장님을 만나요.", exampleKatakana: "プジャンニムル マンナヨ", exampleMeaning: "部長に会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "나흘", katakana: "ナフル", meaning: "四日",
    example: "나흘 후에 만나요.", exampleKatakana: "ナフル フエ マンナヨ", exampleMeaning: "四日後に会いましょう。",
    breakdown: [
      { word: "후", meaning: "後" }
    ] },
  { level: "2", hangul: "댁", katakana: "テク", meaning: "お宅",
    example: "댁이 어디세요?", exampleKatakana: "テギ オディセヨ", exampleMeaning: "お宅はどちらですか。",
    breakdown: [
      { word: "어디", meaning: "どこ" }
    ] },
  { level: "2", hangul: "만일", katakana: "マニル", meaning: "もし",
    example: "만일 비가 오면 취소해요.", exampleKatakana: "マニル ピガ オミョン チュィソヘヨ", exampleMeaning: "もし雨が降ったらキャンセルします。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "2", hangul: "죽다", katakana: "チュクタ", meaning: "死ぬ",
    example: "꽃이 죽었어요.", exampleKatakana: "コチ チュゴッソヨ", exampleMeaning: "花が枯れました。",
    breakdown: [
      { word: "꽃", meaning: "花" }
    ] },
  { level: "2", hangul: "초등학생", katakana: "チョドゥンハクセン", meaning: "小学生",
    example: "초등학생이에요.", exampleKatakana: "チョドゥンハクセンイエヨ", exampleMeaning: "小学生です。",
    breakdown: [
      { word: "이에요", meaning: "です" }
    ] },
  { level: "2", hangul: "멋", katakana: "モッ", meaning: "かっこよさ",
    example: "멋이 있어요.", exampleKatakana: "モシ イッソヨ", exampleMeaning: "かっこいいです。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "식빵", katakana: "シクパン", meaning: "食パン",
    example: "식빵을 먹어요.", exampleKatakana: "シクパンウル モゴヨ", exampleMeaning: "食パンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "들리다", katakana: "トゥルリダ", meaning: "聞こえる",
    example: "소리가 들려요.", exampleKatakana: "ソリガ トゥルリョヨ", exampleMeaning: "音が聞こえます。",
    breakdown: [
      { word: "소리", meaning: "音" }
    ] },
  { level: "2", hangul: "오래간만", katakana: "オレガンマン", meaning: "久しぶり",
    example: "오래간만이에요.", exampleKatakana: "オレガンマニエヨ", exampleMeaning: "お久しぶりです。",
    breakdown: [
      { word: "이에요", meaning: "です" }
    ] },
  { level: "2", hangul: "안내문", katakana: "アンネムン", meaning: "案内文",
    example: "안내문을 읽어요.", exampleKatakana: "アンネムヌル イルゴヨ", exampleMeaning: "案内文を読みます。",
    breakdown: [
      { word: "읽어요", meaning: "読みます" }
    ] },
  { level: "2", hangul: "흔들다", katakana: "フンドゥルダ", meaning: "揺らす",
    example: "손을 흔들어요.", exampleKatakana: "ソヌル フンドゥロヨ", exampleMeaning: "手を振ります。",
    breakdown: [
      { word: "손", meaning: "手" }
    ] },
  { level: "2", hangul: "자식", katakana: "チャシク", meaning: "子供（自分の）",
    example: "자식을 사랑해요.", exampleKatakana: "チャシグル サランヘヨ", exampleMeaning: "子供を愛しています。",
    breakdown: [
      { word: "사랑해요", meaning: "愛しています" }
    ] },
  { level: "2", hangul: "녹색", katakana: "ノクセク", meaning: "緑色",
    example: "녹색 신호예요.", exampleKatakana: "ノクセク シノエヨ", exampleMeaning: "緑の信号です。",
    breakdown: [
      { word: "신호", meaning: "信号" }
    ] },
  { level: "2", hangul: "잘못하다", katakana: "チャルモタダ", meaning: "間違える",
    example: "제가 잘못했어요.", exampleKatakana: "チェガ チャルモテッソヨ", exampleMeaning: "私が間違えました。",
    breakdown: [
      { word: "제가", meaning: "私が" }
    ] },
  { level: "2", hangul: "청년", katakana: "チョンニョン", meaning: "青年",
    example: "젊은 청년이에요.", exampleKatakana: "チョルムン チョンニョニエヨ", exampleMeaning: "若い青年です。",
    breakdown: [
      { word: "젊은", meaning: "若い" }
    ] },
  { level: "2", hangul: "대회", katakana: "テフェ", meaning: "大会",
    example: "대회에 나가요.", exampleKatakana: "テフェエ ナガヨ", exampleMeaning: "大会に出ます。",
    breakdown: [
      { word: "나가요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "능력", katakana: "ヌンリョク", meaning: "能力",
    example: "능력이 뛰어나요.", exampleKatakana: "ヌンリョギ トゥィオナヨ", exampleMeaning: "能力が優れています。",
    breakdown: [
      { word: "뛰어나요", meaning: "優れています" }
    ] },
  { level: "2", hangul: "세탁", katakana: "セタク", meaning: "洗濯",
    example: "세탁을 해요.", exampleKatakana: "セタグル ヘヨ", exampleMeaning: "洗濯をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "안전", katakana: "アンジョン", meaning: "安全",
    example: "안전이 중요해요.", exampleKatakana: "アンジョニ チュンヨヘヨ", exampleMeaning: "安全が重要です。",
    breakdown: [
      { word: "중요해요", meaning: "重要です" }
    ] },
  { level: "2", hangul: "관광객", katakana: "クァングァンゲク", meaning: "観光客",
    example: "관광객이 많아요.", exampleKatakana: "クァングァンゲギ マナヨ", exampleMeaning: "観光客が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "피자", katakana: "ピジャ", meaning: "ピザ",
    example: "피자를 먹어요.", exampleKatakana: "ピジャルル モゴヨ", exampleMeaning: "ピザを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "다치다", katakana: "タチダ", meaning: "怪我する",
    example: "넘어져서 다쳤어요.", exampleKatakana: "ノモジョソ タチョッソヨ", exampleMeaning: "転んで怪我しました。",
    breakdown: [
      { word: "넘어져서", meaning: "転んで" }
    ] },
  { level: "2", hangul: "새롭다", katakana: "セロプタ", meaning: "新しい",
    example: "새로운 시작이에요.", exampleKatakana: "セロウン シジャギエヨ", exampleMeaning: "新しい始まりです。",
    breakdown: [
      { word: "시작", meaning: "始まり" }
    ] },
  { level: "2", hangul: "한식집", katakana: "ハンシクチプ", meaning: "韓国料理店",
    example: "한식집에서 먹어요.", exampleKatakana: "ハンシクチベソ モゴヨ", exampleMeaning: "韓国料理店で食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "변하다", katakana: "ピョナダ", meaning: "変わる",
    example: "마음이 변했어요.", exampleKatakana: "マウミ ピョネッソヨ", exampleMeaning: "心が変わりました。",
    breakdown: [
      { word: "마음", meaning: "心" }
    ] },
  { level: "2", hangul: "하늘색", katakana: "ハヌルセク", meaning: "水色",
    example: "하늘색을 좋아해요.", exampleKatakana: "ハヌルセグル チョアヘヨ", exampleMeaning: "水色が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "요금", katakana: "ヨグム", meaning: "料金",
    example: "요금을 내요.", exampleKatakana: "ヨグムル ネヨ", exampleMeaning: "料金を払います。",
    breakdown: [
      { word: "내요", meaning: "払います" }
    ] },
  { level: "2", hangul: "영수증", katakana: "ヨンスジュン", meaning: "レシート",
    example: "영수증을 받아요.", exampleKatakana: "ヨンスジュンウル パダヨ", exampleMeaning: "レシートを受け取ります。",
    breakdown: [
      { word: "받아요", meaning: "受け取ります" }
    ] },
  { level: "2", hangul: "섭섭하다", katakana: "ソプソパダ", meaning: "名残惜しい",
    example: "헤어져서 섭섭해요.", exampleKatakana: "ヘオジョソ ソプソペヨ", exampleMeaning: "別れて名残惜しいです。",
    breakdown: [
      { word: "헤어져서", meaning: "別れて" }
    ] },
  { level: "2", hangul: "디자인", katakana: "ディジャイン", meaning: "デザイン",
    example: "디자인이 예뻐요.", exampleKatakana: "ディジャイニ イェッポヨ", exampleMeaning: "デザインがきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "데려오다", katakana: "テリョオダ", meaning: "連れてくる",
    example: "친구를 데려와요.", exampleKatakana: "チングルル テリョワヨ", exampleMeaning: "友達を連れてきます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "레스토랑", katakana: "レストラン", meaning: "レストラン",
    example: "레스토랑에서 먹어요.", exampleKatakana: "レストランエソ モゴヨ", exampleMeaning: "レストランで食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "블라우스", katakana: "プルラウス", meaning: "ブラウス",
    example: "블라우스를 입어요.", exampleKatakana: "プルラウスルル イボヨ", exampleMeaning: "ブラウスを着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "어젯밤", katakana: "オジェッパム", meaning: "昨夜",
    example: "어젯밤에 비가 왔어요.", exampleKatakana: "オジェッパメ ピガ ワッソヨ", exampleMeaning: "昨夜雨が降りました。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "2", hangul: "즐거워하다", katakana: "チュルゴウォハダ", meaning: "楽しむ",
    example: "여행을 즐거워해요.", exampleKatakana: "ヨヘンウル チュルゴウォヘヨ", exampleMeaning: "旅行を楽しみます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "자꾸", katakana: "チャク", meaning: "しきりに",
    example: "자꾸 생각나요.", exampleKatakana: "チャク センガンナヨ", exampleMeaning: "しきりに思い出します。",
    breakdown: [
      { word: "생각나요", meaning: "思い出します" }
    ] },
  { level: "2", hangul: "오르다", katakana: "オルダ", meaning: "上がる",
    example: "가격이 올라요.", exampleKatakana: "カギョギ オルラヨ", exampleMeaning: "値段が上がります。",
    breakdown: [
      { word: "가격", meaning: "値段" }
    ] },
  { level: "2", hangul: "화내다", katakana: "ファネダ", meaning: "怒る",
    example: "친구가 화내요.", exampleKatakana: "チングガ ファネヨ", exampleMeaning: "友達が怒ります。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "결석", katakana: "キョルソク", meaning: "欠席",
    example: "수업에 결석해요.", exampleKatakana: "スオベ キョルソケヨ", exampleMeaning: "授業を欠席します。",
    breakdown: [
      { word: "수업", meaning: "授業" }
    ] },
  { level: "2", hangul: "지르다", katakana: "チルダ", meaning: "叫ぶ",
    example: "소리를 질러요.", exampleKatakana: "ソリルル チルロヨ", exampleMeaning: "叫び声を上げます。",
    breakdown: [
      { word: "소리", meaning: "声" }
    ] },
  { level: "2", hangul: "광고", katakana: "クァンゴ", meaning: "広告",
    example: "광고를 봐요.", exampleKatakana: "クァンゴルル バヨ", exampleMeaning: "広告を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "똑같이", katakana: "トッカチ", meaning: "全く同じに",
    example: "똑같이 나눠요.", exampleKatakana: "トッカチ ナノヨ", exampleMeaning: "同じように分けます。",
    breakdown: [
      { word: "나눠요", meaning: "分けます" }
    ] },
  { level: "2", hangul: "교통사고", katakana: "キョトンサゴ", meaning: "交通事故",
    example: "교통사고가 났어요.", exampleKatakana: "キョトンサゴガ ナッソヨ", exampleMeaning: "交通事故が起きました。",
    breakdown: [
      { word: "났어요", meaning: "起きました" }
    ] },
  { level: "2", hangul: "생각나다", katakana: "センガンナダ", meaning: "思い出す",
    example: "옛날이 생각나요.", exampleKatakana: "イェンナリ センガンナヨ", exampleMeaning: "昔が思い出されます。",
    breakdown: [
      { word: "옛날", meaning: "昔" }
    ] },
  { level: "2", hangul: "군인", katakana: "クニン", meaning: "軍人",
    example: "군인이 되고 싶어요.", exampleKatakana: "クニニ トェゴ シポヨ", exampleMeaning: "軍人になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "풀다", katakana: "プルダ", meaning: "解く",
    example: "문제를 풀어요.", exampleKatakana: "ムンジェルル プロヨ", exampleMeaning: "問題を解きます。",
    breakdown: [
      { word: "문제", meaning: "問題" }
    ] },
  { level: "2", hangul: "오랫동안", katakana: "オレットンアン", meaning: "長い間",
    example: "오랫동안 기다렸어요.", exampleKatakana: "オレットンアン キダリョッソヨ", exampleMeaning: "長い間待っていました。",
    breakdown: [
      { word: "기다렸어요", meaning: "待っていました" }
    ] },
  { level: "2", hangul: "떠나다", katakana: "トナダ", meaning: "去る",
    example: "고향을 떠나요.", exampleKatakana: "コヒャンウル トナヨ", exampleMeaning: "故郷を離れます。",
    breakdown: [
      { word: "고향", meaning: "故郷" }
    ] },
  { level: "2", hangul: "통화", katakana: "トンファ", meaning: "通話",
    example: "전화 통화를 해요.", exampleKatakana: "チョナ トンファルル ヘヨ", exampleMeaning: "電話で通話します。",
    breakdown: [
      { word: "전화", meaning: "電話" }
    ] },
  { level: "2", hangul: "아들", katakana: "アドゥル", meaning: "息子",
    example: "아들이 있어요.", exampleKatakana: "アドゥリ イッソヨ", exampleMeaning: "息子がいます。",
    breakdown: [
      { word: "있어요", meaning: "います" }
    ] },
  { level: "2", hangul: "실수", katakana: "シルス", meaning: "失敗",
    example: "실수를 했어요.", exampleKatakana: "シルスルル ヘッソヨ", exampleMeaning: "失敗をしました。",
    breakdown: [
      { word: "했어요", meaning: "しました" }
    ] },
  { level: "2", hangul: "엄마", katakana: "オンマ", meaning: "ママ",
    example: "엄마가 요리해요.", exampleKatakana: "オンマガ ヨリヘヨ", exampleMeaning: "ママが料理します。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "2", hangul: "경찰", katakana: "キョンチャル", meaning: "警察",
    example: "경찰을 불러요.", exampleKatakana: "キョンチャルル プルロヨ", exampleMeaning: "警察を呼びます。",
    breakdown: [
      { word: "불러요", meaning: "呼びます" }
    ] },
  { level: "2", hangul: "자판기", katakana: "チャパンギ", meaning: "自動販売機",
    example: "자판기에서 사요.", exampleKatakana: "チャパンギエソ サヨ", exampleMeaning: "自動販売機で買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "갚다", katakana: "カプタ", meaning: "返す",
    example: "돈을 갚아요.", exampleKatakana: "トヌル カパヨ", exampleMeaning: "お金を返します。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "전혀", katakana: "チョニョ", meaning: "全然",
    example: "전혀 몰랐어요.", exampleKatakana: "チョニョ モルラッソヨ", exampleMeaning: "全然知りませんでした。",
    breakdown: [
      { word: "몰랐어요", meaning: "知りませんでした" }
    ] },
  { level: "2", hangul: "귀엽다", katakana: "クィヨプタ", meaning: "かわいい",
    example: "아기가 귀여워요.", exampleKatakana: "アギガ クィヨウォヨ", exampleMeaning: "赤ちゃんがかわいいです。",
    breakdown: [
      { word: "아기", meaning: "赤ちゃん" }
    ] },
  { level: "2", hangul: "손수건", katakana: "ソンスゴン", meaning: "ハンカチ",
    example: "손수건을 써요.", exampleKatakana: "ソンスゴヌル ソヨ", exampleMeaning: "ハンカチを使います。",
    breakdown: [
      { word: "써요", meaning: "使います" }
    ] },
  { level: "2", hangul: "바라다", katakana: "パラダ", meaning: "望む",
    example: "행복을 바라요.", exampleKatakana: "ヘンボグル パラヨ", exampleMeaning: "幸せを望みます。",
    breakdown: [
      { word: "행복", meaning: "幸せ" }
    ] },
  { level: "2", hangul: "양복", katakana: "ヤンボク", meaning: "スーツ",
    example: "양복을 입어요.", exampleKatakana: "ヤンボグル イボヨ", exampleMeaning: "スーツを着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "점점", katakana: "チョムジョム", meaning: "だんだん",
    example: "점점 추워져요.", exampleKatakana: "チョムジョム チュウォジョヨ", exampleMeaning: "だんだん寒くなります。",
    breakdown: [
      { word: "추워져요", meaning: "寒くなります" }
    ] },
  { level: "2", hangul: "적당하다", katakana: "チョクタンハダ", meaning: "適当だ",
    example: "적당한 크기예요.", exampleKatakana: "チョクタンハン クギエヨ", exampleMeaning: "適当な大きさです。",
    breakdown: [
      { word: "크기", meaning: "大きさ" }
    ] },
  { level: "2", hangul: "만지다", katakana: "マンジダ", meaning: "触る",
    example: "손으로 만져요.", exampleKatakana: "ソヌロ マンジョヨ", exampleMeaning: "手で触ります。",
    breakdown: [
      { word: "손", meaning: "手" }
    ] },
  { level: "2", hangul: "수저", katakana: "スジョ", meaning: "スプーンと箸",
    example: "수저를 놓아요.", exampleKatakana: "スジョルル ノアヨ", exampleMeaning: "箸とスプーンを置きます。",
    breakdown: [
      { word: "놓아요", meaning: "置きます" }
    ] },
  { level: "2", hangul: "한강", katakana: "ハンガン", meaning: "漢江",
    example: "한강에서 자전거를 타요.", exampleKatakana: "ハンガンエソ チャジョンゴルル タヨ", exampleMeaning: "漢江で自転車に乗ります。",
    breakdown: [
      { word: "자전거", meaning: "自転車" }
    ] },
  { level: "2", hangul: "한옥", katakana: "ハノク", meaning: "韓屋",
    example: "한옥에서 살아요.", exampleKatakana: "ハノゲソ サラヨ", exampleMeaning: "韓屋に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "스스로", katakana: "スロ", meaning: "自ら",
    example: "스스로 결정해요.", exampleKatakana: "スロ キョルジョンヘヨ", exampleMeaning: "自ら決定します。",
    breakdown: [
      { word: "결정", meaning: "決定" }
    ] },
  { level: "2", hangul: "수술", katakana: "ススル", meaning: "手術",
    example: "수술을 받아요.", exampleKatakana: "ススルル パダヨ", exampleMeaning: "手術を受けます。",
    breakdown: [
      { word: "받아요", meaning: "受けます" }
    ] },
  { level: "2", hangul: "경치", katakana: "キョンチ", meaning: "景色",
    example: "경치가 좋아요.", exampleKatakana: "キョンチガ チョアヨ", exampleMeaning: "景色が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "내려오다", katakana: "ネリョオダ", meaning: "下りてくる",
    example: "산에서 내려와요.", exampleKatakana: "サネソ ネリョワヨ", exampleMeaning: "山から下りてきます。",
    breakdown: [
      { word: "산", meaning: "山" }
    ] },
  { level: "2", hangul: "요리사", katakana: "ヨリサ", meaning: "料理人",
    example: "요리사가 되고 싶어요.", exampleKatakana: "ヨリサガ トェゴ シポヨ", exampleMeaning: "料理人になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "비누", katakana: "ピヌ", meaning: "石鹸",
    example: "비누로 씻어요.", exampleKatakana: "ピヌロ シッソヨ", exampleMeaning: "石鹸で洗います。",
    breakdown: [
      { word: "씻어요", meaning: "洗います" }
    ] },
  { level: "2", hangul: "똑똑하다", katakana: "トットカダ", meaning: "賢い",
    example: "아이가 똑똑해요.", exampleKatakana: "アイガ トットケヨ", exampleMeaning: "子供が賢いです。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "볶음밥", katakana: "ポックンパプ", meaning: "チャーハン",
    example: "볶음밥을 먹어요.", exampleKatakana: "ポックンパブル モゴヨ", exampleMeaning: "チャーハンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "놀라다", katakana: "ノルラダ", meaning: "驚く",
    example: "소식에 놀랐어요.", exampleKatakana: "ソシゲ ノルラッソヨ", exampleMeaning: "知らせに驚きました。",
    breakdown: [
      { word: "소식", meaning: "知らせ" }
    ] },
  { level: "2", hangul: "세계", katakana: "セゲ", meaning: "世界",
    example: "세계 여행을 해요.", exampleKatakana: "セゲ ヨヘンウル ヘヨ", exampleMeaning: "世界旅行をします。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "기자", katakana: "キジャ", meaning: "記者",
    example: "신문 기자예요.", exampleKatakana: "シンムン キジャエヨ", exampleMeaning: "新聞記者です。",
    breakdown: [
      { word: "신문", meaning: "新聞" }
    ] },
  { level: "2", hangul: "사이즈", katakana: "サイジュ", meaning: "サイズ",
    example: "사이즈가 커요.", exampleKatakana: "サイジュガ コヨ", exampleMeaning: "サイズが大きいです。",
    breakdown: [
      { word: "커요", meaning: "大きいです" }
    ] },
  { level: "2", hangul: "아버님", katakana: "アボニム", meaning: "お父様",
    example: "아버님께 인사해요.", exampleKatakana: "アボニムケ インサヘヨ", exampleMeaning: "お父様に挨拶します。",
    breakdown: [
      { word: "인사", meaning: "挨拶" }
    ] },
  { level: "2", hangul: "무궁화", katakana: "ムグンファ", meaning: "ムクゲ（韓国の国花）",
    example: "무궁화가 피었어요.", exampleKatakana: "ムグンファガ ピオッソヨ", exampleMeaning: "ムクゲが咲きました。",
    breakdown: [
      { word: "피었어요", meaning: "咲きました" }
    ] },
  { level: "2", hangul: "양말", katakana: "ヤンマル", meaning: "靴下",
    example: "양말을 신어요.", exampleKatakana: "ヤンマルル シノヨ", exampleMeaning: "靴下を履きます。",
    breakdown: [
      { word: "신어요", meaning: "履きます" }
    ] },
  { level: "2", hangul: "도시", katakana: "トシ", meaning: "都市",
    example: "큰 도시예요.", exampleKatakana: "クン トシエヨ", exampleMeaning: "大きな都市です。",
    breakdown: [
      { word: "큰", meaning: "大きな" }
    ] },
  { level: "2", hangul: "세우다", katakana: "セウダ", meaning: "立てる",
    example: "계획을 세워요.", exampleKatakana: "ケフェグル セウォヨ", exampleMeaning: "計画を立てます。",
    breakdown: [
      { word: "계획", meaning: "計画" }
    ] },
  { level: "2", hangul: "게으르다", katakana: "ケウルダ", meaning: "怠け者だ",
    example: "게으른 사람이에요.", exampleKatakana: "ケウルン サラミエヨ", exampleMeaning: "怠け者です。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "2", hangul: "소고기", katakana: "ソゴギ", meaning: "牛肉",
    example: "소고기를 먹어요.", exampleKatakana: "ソゴギルル モゴヨ", exampleMeaning: "牛肉を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "정하다", katakana: "チョンハダ", meaning: "決める",
    example: "날짜를 정해요.", exampleKatakana: "ナルチャルル チョンヘヨ", exampleMeaning: "日にちを決めます。",
    breakdown: [
      { word: "날짜", meaning: "日にち" }
    ] },
  { level: "2", hangul: "설렁탕", katakana: "ソルロンタン", meaning: "ソルロンタン",
    example: "설렁탕을 먹어요.", exampleKatakana: "ソルロンタンウル モゴヨ", exampleMeaning: "ソルロンタンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "부족", katakana: "プジョク", meaning: "不足",
    example: "시간이 부족해요.", exampleKatakana: "シガニ プジョケヨ", exampleMeaning: "時間が不足しています。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "중요", katakana: "チュンヨ", meaning: "重要",
    example: "중요한 일이에요.", exampleKatakana: "チュンヨハン イリエヨ", exampleMeaning: "重要な仕事です。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "서로", katakana: "ソロ", meaning: "お互い",
    example: "서로 도와줘요.", exampleKatakana: "ソロ トワジョヨ", exampleMeaning: "お互い助け合います。",
    breakdown: [
      { word: "도와줘요", meaning: "助け合います" }
    ] },
  { level: "2", hangul: "앨범", katakana: "エルボム", meaning: "アルバム",
    example: "사진 앨범이에요.", exampleKatakana: "サジン エルボミエヨ", exampleMeaning: "写真アルバムです。",
    breakdown: [
      { word: "사진", meaning: "写真" }
    ] },
  { level: "2", hangul: "신랑", katakana: "シルラン", meaning: "新郎",
    example: "신랑이 멋있어요.", exampleKatakana: "シルランイ モシッソヨ", exampleMeaning: "新郎がかっこいいです。",
    breakdown: [
      { word: "멋있어요", meaning: "かっこいいです" }
    ] },
  { level: "2", hangul: "자동판매기", katakana: "チャドンパンメギ", meaning: "自動販売機",
    example: "자동판매기에서 사요.", exampleKatakana: "チャドンパンメギエソ サヨ", exampleMeaning: "自動販売機で買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "벽", katakana: "ピョク", meaning: "壁",
    example: "벽에 그림이 있어요.", exampleKatakana: "ピョゲ クリミ イッソヨ", exampleMeaning: "壁に絵があります。",
    breakdown: [
      { word: "그림", meaning: "絵" }
    ] },
  { level: "2", hangul: "마중", katakana: "マジュン", meaning: "出迎え",
    example: "공항에 마중 가요.", exampleKatakana: "コンハンエ マジュン カヨ", exampleMeaning: "空港に出迎えに行きます。",
    breakdown: [
      { word: "공항", meaning: "空港" }
    ] },
  { level: "2", hangul: "빨간색", katakana: "パルガンセク", meaning: "赤色",
    example: "빨간색을 좋아해요.", exampleKatakana: "パルガンセグル チョアヘヨ", exampleMeaning: "赤色が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "밀가루", katakana: "ミルカル", meaning: "小麦粉",
    example: "밀가루로 만들어요.", exampleKatakana: "ミルカルロ マンドゥロヨ", exampleMeaning: "小麦粉で作ります。",
    breakdown: [
      { word: "만들어요", meaning: "作ります" }
    ] },
  { level: "2", hangul: "배추", katakana: "ペチュ", meaning: "白菜",
    example: "배추로 김치를 담가요.", exampleKatakana: "ペチュロ キムチルル タムガヨ", exampleMeaning: "白菜でキムチを漬けます。",
    breakdown: [
      { word: "김치", meaning: "キムチ" }
    ] },
  { level: "2", hangul: "높이", katakana: "ノピ", meaning: "高さ",
    example: "높이를 재요.", exampleKatakana: "ノピルル チェヨ", exampleMeaning: "高さを測ります。",
    breakdown: [
      { word: "재요", meaning: "測ります" }
    ] },
  { level: "2", hangul: "비교", katakana: "ピギョ", meaning: "比較",
    example: "가격을 비교해요.", exampleKatakana: "カギョグル ピギョヘヨ", exampleMeaning: "値段を比較します。",
    breakdown: [
      { word: "가격", meaning: "値段" }
    ] },
  { level: "2", hangul: "실패", katakana: "シルペ", meaning: "失敗",
    example: "실패를 두려워하지 마세요.", exampleKatakana: "シルペルル トゥリョウォハジ マセヨ", exampleMeaning: "失敗を恐れないでください。",
    breakdown: [
      { word: "두려워하지", meaning: "恐れないで" }
    ] },
  { level: "2", hangul: "비디오", katakana: "ピディオ", meaning: "ビデオ",
    example: "비디오를 봐요.", exampleKatakana: "ピディオルル バヨ", exampleMeaning: "ビデオを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "오래", katakana: "オレ", meaning: "長く",
    example: "오래 기다렸어요.", exampleKatakana: "オレ キダリョッソヨ", exampleMeaning: "長く待ちました。",
    breakdown: [
      { word: "기다렸어요", meaning: "待ちました" }
    ] },
  { level: "2", hangul: "살", katakana: "サル", meaning: "肉・〜歳",
    example: "살이 쪘어요.", exampleKatakana: "サリ チョッソヨ", exampleMeaning: "太りました。",
    breakdown: [
      { word: "쪘어요", meaning: "太りました" }
    ] },
  { level: "2", hangul: "음식점", katakana: "ウムシクチョム", meaning: "飲食店",
    example: "음식점에서 먹어요.", exampleKatakana: "ウムシクチョメソ モゴヨ", exampleMeaning: "飲食店で食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "소파", katakana: "ソパ", meaning: "ソファ",
    example: "소파에 앉아요.", exampleKatakana: "ソパエ アンジャヨ", exampleMeaning: "ソファに座ります。",
    breakdown: [
      { word: "앉아요", meaning: "座ります" }
    ] },
  { level: "2", hangul: "흐르다", katakana: "フルダ", meaning: "流れる",
    example: "물이 흘러요.", exampleKatakana: "ムリ フロヨ", exampleMeaning: "水が流れます。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "2", hangul: "올림", katakana: "オルリム", meaning: "敬具（手紙末尾）",
    example: "민수 올림.", exampleKatakana: "ミンス オルリム", exampleMeaning: "ミンスより。",
    breakdown: [
      { word: "민수", meaning: "ミンス（人名）" }
    ] },
  { level: "2", hangul: "사흘", katakana: "サフル", meaning: "三日",
    example: "사흘 동안 아팠어요.", exampleKatakana: "サフル トンアン アパッソヨ", exampleMeaning: "三日間体調が悪かったです。",
    breakdown: [
      { word: "동안", meaning: "間" }
    ] },
  { level: "2", hangul: "정리", katakana: "チョンリ", meaning: "整理",
    example: "방을 정리해요.", exampleKatakana: "バンウル チョンリヘヨ", exampleMeaning: "部屋を整理します。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "2", hangul: "큰소리", katakana: "クンソリ", meaning: "大声",
    example: "큰소리로 말해요.", exampleKatakana: "クンソリロ マレヨ", exampleMeaning: "大声で話します。",
    breakdown: [
      { word: "말해요", meaning: "話します" }
    ] },
  { level: "2", hangul: "최고", katakana: "チェゴ", meaning: "最高",
    example: "최고예요.", exampleKatakana: "チェゴエヨ", exampleMeaning: "最高です。",
    breakdown: [
      { word: "예요", meaning: "です" }
    ] },
  { level: "2", hangul: "태어나다", katakana: "テオナダ", meaning: "生まれる",
    example: "서울에서 태어났어요.", exampleKatakana: "ソウレソ テオナッソヨ", exampleMeaning: "ソウルで生まれました。",
    breakdown: [
      { word: "서울", meaning: "ソウル" }
    ] },
  { level: "2", hangul: "잡지", katakana: "チャプチ", meaning: "雑誌",
    example: "잡지를 읽어요.", exampleKatakana: "チャプチルル イルゴヨ", exampleMeaning: "雑誌を読みます。",
    breakdown: [
      { word: "읽어요", meaning: "読みます" }
    ] },
  { level: "2", hangul: "바르다", katakana: "パルダ", meaning: "塗る",
    example: "약을 발라요.", exampleKatakana: "ヤグル パルラヨ", exampleMeaning: "薬を塗ります。",
    breakdown: [
      { word: "약", meaning: "薬" }
    ] },
  { level: "2", hangul: "조용히", katakana: "チョヨンヒ", meaning: "静かに",
    example: "조용히 해요.", exampleKatakana: "チョヨンヒ ヘヨ", exampleMeaning: "静かにしてください。",
    breakdown: [
      { word: "해요", meaning: "してください" }
    ] },
  { level: "2", hangul: "검은색", katakana: "コムンセク", meaning: "黒色",
    example: "검은색 가방이에요.", exampleKatakana: "コムンセク カバンイエヨ", exampleMeaning: "黒色のかばんです。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "2", hangul: "닭고기", katakana: "タクコギ", meaning: "鶏肉",
    example: "닭고기를 먹어요.", exampleKatakana: "タクコギルル モゴヨ", exampleMeaning: "鶏肉を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "급하다", katakana: "クパダ", meaning: "急だ",
    example: "급한 일이에요.", exampleKatakana: "クパン イリエヨ", exampleMeaning: "急な用事です。",
    breakdown: [
      { word: "일", meaning: "用事" }
    ] },
  { level: "2", hangul: "금지", katakana: "クムジ", meaning: "禁止",
    example: "흡연이 금지예요.", exampleKatakana: "フビョニ クムジエヨ", exampleMeaning: "喫煙が禁止です。",
    breakdown: [
      { word: "흡연", meaning: "喫煙" }
    ] },
  { level: "2", hangul: "잃어버리다", katakana: "イロボリダ", meaning: "なくしてしまう",
    example: "지갑을 잃어버렸어요.", exampleKatakana: "チガブル イロボリョッソヨ", exampleMeaning: "財布をなくしました。",
    breakdown: [
      { word: "지갑", meaning: "財布" }
    ] },
  { level: "2", hangul: "눕다", katakana: "ヌプタ", meaning: "横になる",
    example: "침대에 누워요.", exampleKatakana: "チムデエ ヌウォヨ", exampleMeaning: "ベッドに横になります。",
    breakdown: [
      { word: "침대", meaning: "ベッド" }
    ] },
  { level: "2", hangul: "헤어지다", katakana: "ヘオジダ", meaning: "別れる",
    example: "친구와 헤어져요.", exampleKatakana: "チングワ ヘオジョヨ", exampleMeaning: "友達と別れます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "기타", katakana: "キタ", meaning: "その他・ギター",
    example: "기타를 쳐요.", exampleKatakana: "キタルル チョヨ", exampleMeaning: "ギターを弾きます。",
    breakdown: [
      { word: "쳐요", meaning: "弾きます" }
    ] },
  { level: "2", hangul: "부인", katakana: "プイン", meaning: "夫人",
    example: "사장님 부인이에요.", exampleKatakana: "サジャンニム プイニエヨ", exampleMeaning: "社長の奥様です。",
    breakdown: [
      { word: "사장님", meaning: "社長" }
    ] },
  { level: "2", hangul: "앞쪽", katakana: "アプチョク", meaning: "前側",
    example: "앞쪽에 앉아요.", exampleKatakana: "アプチョゲ アンジャヨ", exampleMeaning: "前側に座ります。",
    breakdown: [
      { word: "앉아요", meaning: "座ります" }
    ] },
  { level: "2", hangul: "넘어지다", katakana: "ノモジダ", meaning: "転ぶ",
    example: "길에서 넘어져요.", exampleKatakana: "キレソ ノモジョヨ", exampleMeaning: "道で転びます。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "2", hangul: "익다", katakana: "イクタ", meaning: "熟れる・煮える",
    example: "고기가 익었어요.", exampleKatakana: "コギガ イゴッソヨ", exampleMeaning: "肉が焼けました。",
    breakdown: [
      { word: "고기", meaning: "肉" }
    ] },
  { level: "2", hangul: "갑자기", katakana: "カプチャギ", meaning: "急に",
    example: "갑자기 비가 와요.", exampleKatakana: "カプチャギ ピガ ワヨ", exampleMeaning: "急に雨が降ります。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "2", hangul: "기회", katakana: "キフェ", meaning: "機会",
    example: "좋은 기회예요.", exampleKatakana: "チョウン キフェエヨ", exampleMeaning: "良い機会です。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "2", hangul: "바뀌다", katakana: "パクィダ", meaning: "変わる",
    example: "계획이 바뀌었어요.", exampleKatakana: "ケフェギ パクィオッソヨ", exampleMeaning: "計画が変わりました。",
    breakdown: [
      { word: "계획", meaning: "計画" }
    ] },
  { level: "2", hangul: "해", katakana: "ヘ", meaning: "太陽・年",
    example: "해가 떠요.", exampleKatakana: "ヘガ トヨ", exampleMeaning: "太陽が昇ります。",
    breakdown: [
      { word: "떠요", meaning: "昇ります" }
    ] },
  { level: "2", hangul: "지다", katakana: "チダ", meaning: "負ける・沈む",
    example: "경기에 져요.", exampleKatakana: "キョンギエ チョヨ", exampleMeaning: "試合に負けます。",
    breakdown: [
      { word: "경기", meaning: "試合" }
    ] },
  { level: "2", hangul: "뜻", katakana: "トゥッ", meaning: "意味",
    example: "이 단어의 뜻이 뭐예요?", exampleKatakana: "イ タノエ トゥシ モエヨ", exampleMeaning: "この単語の意味は何ですか。",
    breakdown: [
      { word: "단어", meaning: "単語" }
    ] },
  { level: "2", hangul: "차갑다", katakana: "チャガプタ", meaning: "冷たい",
    example: "손이 차가워요.", exampleKatakana: "ソニ チャガウォヨ", exampleMeaning: "手が冷たいです。",
    breakdown: [
      { word: "손", meaning: "手" }
    ] },
  { level: "2", hangul: "접다", katakana: "チョプタ", meaning: "折る",
    example: "종이를 접어요.", exampleKatakana: "チョンイルル チョボヨ", exampleMeaning: "紙を折ります。",
    breakdown: [
      { word: "종이", meaning: "紙" }
    ] },
  { level: "2", hangul: "모자라다", katakana: "モジャラダ", meaning: "足りない",
    example: "돈이 모자라요.", exampleKatakana: "トニ モジャラヨ", exampleMeaning: "お金が足りません。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "통장", katakana: "トンジャン", meaning: "通帳",
    example: "통장을 만들어요.", exampleKatakana: "トンジャンウル マンドゥロヨ", exampleMeaning: "通帳を作ります。",
    breakdown: [
      { word: "만들어요", meaning: "作ります" }
    ] },
  { level: "2", hangul: "멀리", katakana: "モルリ", meaning: "遠くに",
    example: "멀리 살아요.", exampleKatakana: "モルリ サラヨ", exampleMeaning: "遠くに住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "넘다", katakana: "ノムタ", meaning: "超える",
    example: "백 명이 넘어요.", exampleKatakana: "ペン ミョンイ ノモヨ", exampleMeaning: "100人を超えます。",
    breakdown: [
      { word: "백 명", meaning: "100人" }
    ] },
  { level: "2", hangul: "줄이다", katakana: "チュリダ", meaning: "減らす",
    example: "시간을 줄여요.", exampleKatakana: "シガヌル チュリョヨ", exampleMeaning: "時間を減らします。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "병문안", katakana: "ピョンムナン", meaning: "お見舞い",
    example: "병문안을 가요.", exampleKatakana: "ピョンムナヌル カヨ", exampleMeaning: "お見舞いに行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "귀찮다", katakana: "クィチャンタ", meaning: "面倒だ",
    example: "청소가 귀찮아요.", exampleKatakana: "チョンソガ クィチャナヨ", exampleMeaning: "掃除が面倒です。",
    breakdown: [
      { word: "청소", meaning: "掃除" }
    ] },
  { level: "2", hangul: "가위", katakana: "カウィ", meaning: "はさみ",
    example: "가위로 잘라요.", exampleKatakana: "カウィロ チャルラヨ", exampleMeaning: "はさみで切ります。",
    breakdown: [
      { word: "잘라요", meaning: "切ります" }
    ] },
  { level: "2", hangul: "선선하다", katakana: "ソンソナダ", meaning: "涼しい",
    example: "가을 날씨가 선선해요.", exampleKatakana: "カウル ナルシガ ソンソネヨ", exampleMeaning: "秋の天気が涼しいです。",
    breakdown: [
      { word: "가을", meaning: "秋" }
    ] },
  { level: "2", hangul: "숟가락", katakana: "スッカラク", meaning: "スプーン",
    example: "숟가락으로 먹어요.", exampleKatakana: "スッカラグロ モゴヨ", exampleMeaning: "スプーンで食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "푹", katakana: "プク", meaning: "ぐっすり・十分に",
    example: "푹 쉬세요.", exampleKatakana: "プク シュィセヨ", exampleMeaning: "ゆっくり休んでください。",
    breakdown: [
      { word: "쉬세요", meaning: "休んでください" }
    ] },
  { level: "2", hangul: "열차", katakana: "ヨルチャ", meaning: "列車",
    example: "열차를 타요.", exampleKatakana: "ヨルチャルル タヨ", exampleMeaning: "列車に乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "2", hangul: "슬퍼하다", katakana: "スルポハダ", meaning: "悲しむ",
    example: "이별을 슬퍼해요.", exampleKatakana: "イビョルル スルポヘヨ", exampleMeaning: "別れを悲しみます。",
    breakdown: [
      { word: "이별", meaning: "別れ" }
    ] },
  { level: "2", hangul: "만화", katakana: "マヌァ", meaning: "漫画",
    example: "만화를 봐요.", exampleKatakana: "マヌァルル バヨ", exampleMeaning: "漫画を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "노란색", katakana: "ノランセク", meaning: "黄色",
    example: "노란색을 좋아해요.", exampleKatakana: "ノランセグル チョアヘヨ", exampleMeaning: "黄色が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "식다", katakana: "シクタ", meaning: "冷める",
    example: "국이 식었어요.", exampleKatakana: "ググギ シゴッソヨ", exampleMeaning: "スープが冷めました。",
    breakdown: [
      { word: "국", meaning: "スープ" }
    ] },
  { level: "2", hangul: "녹차", katakana: "ノクチャ", meaning: "緑茶",
    example: "녹차를 마셔요.", exampleKatakana: "ノクチャルル マショヨ", exampleMeaning: "緑茶を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "설거지", katakana: "ソルゴジ", meaning: "皿洗い",
    example: "설거지를 해요.", exampleKatakana: "ソルゴジルル ヘヨ", exampleMeaning: "皿洗いをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "늙다", katakana: "ヌクタ", meaning: "老いる",
    example: "늙으면 힘들어요.", exampleKatakana: "ヌルグミョン ヒムドゥロヨ", exampleMeaning: "老いると大変です。",
    breakdown: [
      { word: "힘들어요", meaning: "大変です" }
    ] },
  { level: "2", hangul: "성", katakana: "ソン", meaning: "苗字・城",
    example: "성이 뭐예요?", exampleKatakana: "ソンイ モエヨ", exampleMeaning: "苗字は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "2", hangul: "옷걸이", katakana: "オッコリ", meaning: "ハンガー",
    example: "옷걸이에 걸어요.", exampleKatakana: "オッコリエ コロヨ", exampleMeaning: "ハンガーにかけます。",
    breakdown: [
      { word: "걸어요", meaning: "かけます" }
    ] },
  { level: "2", hangul: "기름", katakana: "キルム", meaning: "油",
    example: "기름을 넣어요.", exampleKatakana: "キルムル ノオヨ", exampleMeaning: "油を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "선풍기", katakana: "ソンプンギ", meaning: "扇風機",
    example: "선풍기를 켜요.", exampleKatakana: "ソンプンギルル キョヨ", exampleMeaning: "扇風機をつけます。",
    breakdown: [
      { word: "켜요", meaning: "つけます" }
    ] },
  { level: "2", hangul: "매다", katakana: "メダ", meaning: "結ぶ",
    example: "넥타이를 매요.", exampleKatakana: "ネクタイルル メヨ", exampleMeaning: "ネクタイを結びます。",
    breakdown: [
      { word: "넥타이", meaning: "ネクタイ" }
    ] },
  { level: "2", hangul: "유학생", katakana: "ユハクセン", meaning: "留学生",
    example: "유학생이에요.", exampleKatakana: "ユハクセンイエヨ", exampleMeaning: "留学生です。",
    breakdown: [
      { word: "이에요", meaning: "です" }
    ] },
  { level: "2", hangul: "내과", katakana: "ネグァ", meaning: "内科",
    example: "내과에 가요.", exampleKatakana: "ネグァエ カヨ", exampleMeaning: "内科に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "테이블", katakana: "テイブル", meaning: "テーブル",
    example: "테이블에 놓아요.", exampleKatakana: "テイブレ ノアヨ", exampleMeaning: "テーブルに置きます。",
    breakdown: [
      { word: "놓아요", meaning: "置きます" }
    ] },
  { level: "2", hangul: "올리다", katakana: "オルリダ", meaning: "上げる",
    example: "가격을 올려요.", exampleKatakana: "カギョグル オルリョヨ", exampleMeaning: "値段を上げます。",
    breakdown: [
      { word: "가격", meaning: "値段" }
    ] },
  { level: "2", hangul: "대구", katakana: "テグ", meaning: "大邱",
    example: "대구에 살아요.", exampleKatakana: "テグエ サラヨ", exampleMeaning: "大邱に住んでいます。",
    breakdown: [
      { word: "살아요", meaning: "住んでいます" }
    ] },
  { level: "2", hangul: "달력", katakana: "タルリョク", meaning: "カレンダー",
    example: "달력을 봐요.", exampleKatakana: "タルリョグル バヨ", exampleMeaning: "カレンダーを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "카페", katakana: "カペ", meaning: "カフェ",
    example: "카페에서 만나요.", exampleKatakana: "カペエソ マンナヨ", exampleMeaning: "カフェで会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "지루하다", katakana: "チルハダ", meaning: "退屈だ",
    example: "영화가 지루해요.", exampleKatakana: "ヨンファガ チルヘヨ", exampleMeaning: "映画が退屈です。",
    breakdown: [
      { word: "영화", meaning: "映画" }
    ] },
  { level: "2", hangul: "토끼", katakana: "トッキ", meaning: "うさぎ",
    example: "토끼를 키워요.", exampleKatakana: "トッキルル キウォヨ", exampleMeaning: "うさぎを飼っています。",
    breakdown: [
      { word: "키워요", meaning: "飼っています" }
    ] },
  { level: "2", hangul: "올라오다", katakana: "オルラオダ", meaning: "上がってくる",
    example: "계단을 올라와요.", exampleKatakana: "ケダヌル オルラワヨ", exampleMeaning: "階段を上がってきます。",
    breakdown: [
      { word: "계단", meaning: "階段" }
    ] },
  { level: "2", hangul: "데이트", katakana: "テイトゥ", meaning: "デート",
    example: "데이트를 해요.", exampleKatakana: "テイトゥルル ヘヨ", exampleMeaning: "デートをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "예약", katakana: "イェヤク", meaning: "予約",
    example: "식당을 예약해요.", exampleKatakana: "シクタンウル イェヤケヨ", exampleMeaning: "食堂を予約します。",
    breakdown: [
      { word: "식당", meaning: "食堂" }
    ] },
  { level: "2", hangul: "의미", katakana: "ウィミ", meaning: "意味",
    example: "의미가 뭐예요?", exampleKatakana: "ウィミガ モエヨ", exampleMeaning: "意味は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "2", hangul: "나누다", katakana: "ナヌダ", meaning: "分ける",
    example: "음식을 나눠요.", exampleKatakana: "ウムシグル ナノヨ", exampleMeaning: "料理を分けます。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "2", hangul: "공무원", katakana: "コンムウォン", meaning: "公務員",
    example: "공무원이 되고 싶어요.", exampleKatakana: "コンムウォニ トェゴ シポヨ", exampleMeaning: "公務員になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "옷장", katakana: "オッチャン", meaning: "タンス",
    example: "옷장에 넣어요.", exampleKatakana: "オッチャンエ ノオヨ", exampleMeaning: "タンスに入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "볶다", katakana: "ポクタ", meaning: "炒める",
    example: "야채를 볶아요.", exampleKatakana: "ヤチェルル ポッカヨ", exampleMeaning: "野菜を炒めます。",
    breakdown: [
      { word: "야채", meaning: "野菜" }
    ] },
  { level: "2", hangul: "줄다", katakana: "チュルダ", meaning: "減る",
    example: "숫자가 줄어요.", exampleKatakana: "スッチャガ チュロヨ", exampleMeaning: "数字が減ります。",
    breakdown: [
      { word: "숫자", meaning: "数字" }
    ] },
  { level: "2", hangul: "후배", katakana: "フベ", meaning: "後輩",
    example: "후배와 만나요.", exampleKatakana: "フベワ マンナヨ", exampleMeaning: "後輩と会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "남쪽", katakana: "ナムチョク", meaning: "南側",
    example: "남쪽으로 가요.", exampleKatakana: "ナムチョグロ カヨ", exampleMeaning: "南側に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "연락처", katakana: "ヨルラクチョ", meaning: "連絡先",
    example: "연락처를 알려줘요.", exampleKatakana: "ヨルラクチョルル アルリョジョヨ", exampleMeaning: "連絡先を教えてください。",
    breakdown: [
      { word: "알려줘요", meaning: "教えてください" }
    ] },
  { level: "2", hangul: "그만", katakana: "クマン", meaning: "もうやめて",
    example: "그만 울어요.", exampleKatakana: "クマン ウロヨ", exampleMeaning: "もう泣かないで。",
    breakdown: [
      { word: "울어요", meaning: "泣きます" }
    ] },
  { level: "2", hangul: "벌다", katakana: "ポルダ", meaning: "稼ぐ",
    example: "돈을 벌어요.", exampleKatakana: "トヌル ポロヨ", exampleMeaning: "お金を稼ぎます。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "결심", katakana: "キョルシム", meaning: "決心",
    example: "결심을 해요.", exampleKatakana: "キョルシムル ヘヨ", exampleMeaning: "決心をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "편찮다", katakana: "ピョンチャンタ", meaning: "具合が悪い（尊敬語）",
    example: "할머니가 편찮으세요.", exampleKatakana: "ハルモニガ ピョンチャヌセヨ", exampleMeaning: "おばあさんが具合が悪いです。",
    breakdown: [
      { word: "할머니", meaning: "おばあさん" }
    ] },
  { level: "2", hangul: "바닷가", katakana: "パダッカ", meaning: "海辺",
    example: "바닷가를 걸어요.", exampleKatakana: "パダッカルル コロヨ", exampleMeaning: "海辺を歩きます。",
    breakdown: [
      { word: "걸어요", meaning: "歩きます" }
    ] },
  { level: "2", hangul: "잘못되다", katakana: "チャルモッテダ", meaning: "間違ってしまう",
    example: "계획이 잘못됐어요.", exampleKatakana: "ケフェギ チャルモッテッソヨ", exampleMeaning: "計画がおかしくなりました。",
    breakdown: [
      { word: "계획", meaning: "計画" }
    ] },
  { level: "2", hangul: "돌리다", katakana: "トルリダ", meaning: "回す",
    example: "손잡이를 돌려요.", exampleKatakana: "ソンジャビルル トルリョヨ", exampleMeaning: "取っ手を回します。",
    breakdown: [
      { word: "손잡이", meaning: "取っ手" }
    ] },
  { level: "2", hangul: "부드럽다", katakana: "プドゥロプタ", meaning: "柔らかい",
    example: "이불이 부드러워요.", exampleKatakana: "イブリ プドゥロウォヨ", exampleMeaning: "布団が柔らかいです。",
    breakdown: [
      { word: "이불", meaning: "布団" }
    ] },
  { level: "2", hangul: "신선하다", katakana: "シンソナダ", meaning: "新鮮だ",
    example: "야채가 신선해요.", exampleKatakana: "ヤチェガ シンソネヨ", exampleMeaning: "野菜が新鮮です。",
    breakdown: [
      { word: "야채", meaning: "野菜" }
    ] },
  { level: "2", hangul: "고등학교", katakana: "コドゥンハッキョ", meaning: "高校",
    example: "고등학교에 다녀요.", exampleKatakana: "コドゥンハッキョエ タニョヨ", exampleMeaning: "高校に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "단추", katakana: "タンチュ", meaning: "ボタン",
    example: "단추를 채워요.", exampleKatakana: "タンチュルル チェウォヨ", exampleMeaning: "ボタンをかけます。",
    breakdown: [
      { word: "채워요", meaning: "かけます" }
    ] },
  { level: "2", hangul: "돌", katakana: "トル", meaning: "石",
    example: "돌을 던져요.", exampleKatakana: "トルル トンジョヨ", exampleMeaning: "石を投げます。",
    breakdown: [
      { word: "던져요", meaning: "投げます" }
    ] },
  { level: "2", hangul: "반바지", katakana: "パンバジ", meaning: "半ズボン",
    example: "반바지를 입어요.", exampleKatakana: "パンバジルル イボヨ", exampleMeaning: "半ズボンを履きます。",
    breakdown: [
      { word: "입어요", meaning: "履きます" }
    ] },
  { level: "2", hangul: "인삼", katakana: "インサム", meaning: "高麗人参",
    example: "인삼차를 마셔요.", exampleKatakana: "インサムチャルル マショヨ", exampleMeaning: "高麗人参茶を飲みます。",
    breakdown: [
      { word: "차", meaning: "お茶" }
    ] },
  { level: "2", hangul: "모으다", katakana: "モウダ", meaning: "集める",
    example: "돈을 모아요.", exampleKatakana: "トヌル モアヨ", exampleMeaning: "お金を集めます。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "여성", katakana: "ヨソン", meaning: "女性",
    example: "여성이 많아요.", exampleKatakana: "ヨソンイ マナヨ", exampleMeaning: "女性が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "남성", katakana: "ナムソン", meaning: "男性",
    example: "남성이 좋아해요.", exampleKatakana: "ナムソンイ チョアヘヨ", exampleMeaning: "男性が好みます。",
    breakdown: [
      { word: "좋아해요", meaning: "好みます" }
    ] },
  { level: "2", hangul: "막히다", katakana: "マキダ", meaning: "詰まる・混む",
    example: "길이 막혀요.", exampleKatakana: "キリ マキョヨ", exampleMeaning: "道が混んでいます。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "2", hangul: "떡", katakana: "トク", meaning: "餅",
    example: "떡을 먹어요.", exampleKatakana: "トグル モゴヨ", exampleMeaning: "餅を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "화장품", katakana: "ファジャンプム", meaning: "化粧品",
    example: "화장품을 사요.", exampleKatakana: "ファジャンプムル サヨ", exampleMeaning: "化粧品を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "만약", katakana: "マニャク", meaning: "もし",
    example: "만약 비가 오면 안 가요.", exampleKatakana: "マニャク ピガ オミョン アン ガヨ", exampleMeaning: "もし雨が降ったら行きません。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "2", hangul: "연휴", katakana: "ヨニュ", meaning: "連休",
    example: "연휴에 여행 가요.", exampleKatakana: "ヨニュエ ヨヘン カヨ", exampleMeaning: "連休に旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "모이다", katakana: "モイダ", meaning: "集まる",
    example: "친구들이 모여요.", exampleKatakana: "チングドゥリ モヨヨ", exampleMeaning: "友達が集まります。",
    breakdown: [
      { word: "친구들", meaning: "友達" }
    ] },
  { level: "2", hangul: "머리카락", katakana: "モリカラク", meaning: "髪の毛",
    example: "머리카락이 길어요.", exampleKatakana: "モリカラギ キロヨ", exampleMeaning: "髪の毛が長いです。",
    breakdown: [
      { word: "길어요", meaning: "長いです" }
    ] },
  { level: "2", hangul: "신혼여행", katakana: "シンホニョヘン", meaning: "新婚旅行",
    example: "신혼여행을 가요.", exampleKatakana: "シンホニョヘンウル カヨ", exampleMeaning: "新婚旅行に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "학원", katakana: "ハグォン", meaning: "塾",
    example: "학원에 다녀요.", exampleKatakana: "ハグォネ タニョヨ", exampleMeaning: "塾に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "초등학교", katakana: "チョドゥンハッキョ", meaning: "小学校",
    example: "초등학교에 다녀요.", exampleKatakana: "チョドゥンハッキョエ タニョヨ", exampleMeaning: "小学校に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "방금", katakana: "パングム", meaning: "たった今",
    example: "방금 왔어요.", exampleKatakana: "パングム ワッソヨ", exampleMeaning: "たった今来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "2", hangul: "서랍", katakana: "ソラプ", meaning: "引き出し",
    example: "서랍을 열어요.", exampleKatakana: "ソラブル ヨロヨ", exampleMeaning: "引き出しを開けます。",
    breakdown: [
      { word: "열어요", meaning: "開けます" }
    ] },
  { level: "2", hangul: "끝내다", katakana: "クンネダ", meaning: "終わらせる",
    example: "일을 끝내요.", exampleKatakana: "イルル クンネヨ", exampleMeaning: "仕事を終わらせます。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "검정", katakana: "コムジョン", meaning: "黒",
    example: "검정 옷이에요.", exampleKatakana: "コムジョン オシエヨ", exampleMeaning: "黒い服です。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "달리다", katakana: "タルリダ", meaning: "走る",
    example: "빠르게 달려요.", exampleKatakana: "パルゲ タルリョヨ", exampleMeaning: "速く走ります。",
    breakdown: [
      { word: "빠르게", meaning: "速く" }
    ] },
  { level: "2", hangul: "떠들다", katakana: "トドゥルダ", meaning: "騒ぐ",
    example: "교실에서 떠들어요.", exampleKatakana: "キョシレソ トドゥロヨ", exampleMeaning: "教室で騒ぎます。",
    breakdown: [
      { word: "교실", meaning: "教室" }
    ] },
  { level: "2", hangul: "잠자다", katakana: "チャムジャダ", meaning: "眠る",
    example: "일찍 잠자요.", exampleKatakana: "イルチク チャムジャヨ", exampleMeaning: "早く眠ります。",
    breakdown: [
      { word: "일찍", meaning: "早く" }
    ] },
  { level: "2", hangul: "방송국", katakana: "パンソンクク", meaning: "放送局",
    example: "방송국에서 일해요.", exampleKatakana: "パンソンククエソ イレヨ", exampleMeaning: "放送局で働きます。",
    breakdown: [
      { word: "일해요", meaning: "働きます" }
    ] },
  { level: "2", hangul: "답", katakana: "タプ", meaning: "答え",
    example: "답을 몰라요.", exampleKatakana: "タブル モルラヨ", exampleMeaning: "答えが分かりません。",
    breakdown: [
      { word: "몰라요", meaning: "分かりません" }
    ] },
  { level: "2", hangul: "늘다", katakana: "ヌルダ", meaning: "増える・上達する",
    example: "실력이 늘어요.", exampleKatakana: "シルリョギ ヌロヨ", exampleMeaning: "実力が上達します。",
    breakdown: [
      { word: "실력", meaning: "実力" }
    ] },
  { level: "2", hangul: "건너다", katakana: "コンノダ", meaning: "渡る",
    example: "길을 건너요.", exampleKatakana: "キルル コンノヨ", exampleMeaning: "道を渡ります。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "2", hangul: "선수", katakana: "ソンス", meaning: "選手",
    example: "축구 선수예요.", exampleKatakana: "チュック ソンスエヨ", exampleMeaning: "サッカー選手です。",
    breakdown: [
      { word: "축구", meaning: "サッカー" }
    ] },
  { level: "2", hangul: "감기약", katakana: "カムギヤク", meaning: "風邪薬",
    example: "감기약을 먹어요.", exampleKatakana: "カムギヤグル モゴヨ", exampleMeaning: "風邪薬を飲みます。",
    breakdown: [
      { word: "먹어요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "깜짝", katakana: "カムチャク", meaning: "びっくり",
    example: "깜짝 놀랐어요.", exampleKatakana: "カムチャク ノルラッソヨ", exampleMeaning: "びっくりしました。",
    breakdown: [
      { word: "놀랐어요", meaning: "驚きました" }
    ] },
  { level: "2", hangul: "농담", katakana: "ノンダム", meaning: "冗談",
    example: "농담을 해요.", exampleKatakana: "ノンダムル ヘヨ", exampleMeaning: "冗談を言います。",
    breakdown: [
      { word: "해요", meaning: "言います" }
    ] },
  { level: "2", hangul: "더럽다", katakana: "トロプタ", meaning: "汚い",
    example: "손이 더러워요.", exampleKatakana: "ソニ トロウォヨ", exampleMeaning: "手が汚いです。",
    breakdown: [
      { word: "손", meaning: "手" }
    ] },
  { level: "2", hangul: "퇴원", katakana: "トェウォン", meaning: "退院",
    example: "오늘 퇴원해요.", exampleKatakana: "オヌル トェウォネヨ", exampleMeaning: "今日退院します。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "2", hangul: "교환", katakana: "キョファン", meaning: "交換",
    example: "물건을 교환해요.", exampleKatakana: "ムルゴヌル キョファネヨ", exampleMeaning: "物を交換します。",
    breakdown: [
      { word: "물건", meaning: "物" }
    ] },
  { level: "2", hangul: "피", katakana: "ピ", meaning: "血",
    example: "피가 나요.", exampleKatakana: "ピガ ナヨ", exampleMeaning: "血が出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "항공권", katakana: "ハンゴンクォン", meaning: "航空券",
    example: "항공권을 예약해요.", exampleKatakana: "ハンゴンクォヌル イェヤケヨ", exampleMeaning: "航空券を予約します。",
    breakdown: [
      { word: "예약", meaning: "予約" }
    ] },
  { level: "2", hangul: "바깥", katakana: "パッカッ", meaning: "外",
    example: "바깥에 나가요.", exampleKatakana: "パッカテ ナガヨ", exampleMeaning: "外に出ます。",
    breakdown: [
      { word: "나가요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "입장권", katakana: "イプチャンクォン", meaning: "入場券",
    example: "입장권을 사요.", exampleKatakana: "イプチャンクォヌル サヨ", exampleMeaning: "入場券を買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "침실", katakana: "チムシル", meaning: "寝室",
    example: "침실에서 자요.", exampleKatakana: "チムシレソ ジャヨ", exampleMeaning: "寝室で寝ます。",
    breakdown: [
      { word: "자요", meaning: "寝ます" }
    ] },
  { level: "2", hangul: "치과", katakana: "チグァ", meaning: "歯科",
    example: "치과에 가요.", exampleKatakana: "チグァエ カヨ", exampleMeaning: "歯科に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "약하다", katakana: "ヤカダ", meaning: "弱い",
    example: "몸이 약해요.", exampleKatakana: "モミ ヤケヨ", exampleMeaning: "体が弱いです。",
    breakdown: [
      { word: "몸", meaning: "体" }
    ] },
  { level: "2", hangul: "상처", katakana: "サンチョ", meaning: "傷",
    example: "상처가 나요.", exampleKatakana: "サンチョガ ナヨ", exampleMeaning: "傷ができます。",
    breakdown: [
      { word: "나요", meaning: "できます" }
    ] },
  { level: "2", hangul: "출입", katakana: "チュリプ", meaning: "出入り",
    example: "출입을 금지해요.", exampleKatakana: "チュリブル クムジヘヨ", exampleMeaning: "出入りを禁止します。",
    breakdown: [
      { word: "금지", meaning: "禁止" }
    ] },
  { level: "2", hangul: "가져가다", katakana: "カジョガダ", meaning: "持っていく",
    example: "우산을 가져가요.", exampleKatakana: "ウサヌル カジョガヨ", exampleMeaning: "傘を持っていきます。",
    breakdown: [
      { word: "우산", meaning: "傘" }
    ] },
  { level: "2", hangul: "책장", katakana: "チェクチャン", meaning: "本棚",
    example: "책장에 책이 있어요.", exampleKatakana: "チェクチャンエ チェギ イッソヨ", exampleMeaning: "本棚に本があります。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "2", hangul: "중학생", katakana: "チュンハクセン", meaning: "中学生",
    example: "중학생이에요.", exampleKatakana: "チュンハクセンイエヨ", exampleMeaning: "中学生です。",
    breakdown: [
      { word: "이에요", meaning: "です" }
    ] },
  { level: "2", hangul: "행동", katakana: "ヘンドン", meaning: "行動",
    example: "행동이 빨라요.", exampleKatakana: "ヘンドンイ パルラヨ", exampleMeaning: "行動が速いです。",
    breakdown: [
      { word: "빨라요", meaning: "速いです" }
    ] },
  { level: "2", hangul: "단순", katakana: "タンスン", meaning: "単純",
    example: "단순한 문제예요.", exampleKatakana: "タンスナン ムンジェエヨ", exampleMeaning: "単純な問題です。",
    breakdown: [
      { word: "문제", meaning: "問題" }
    ] },
  { level: "2", hangul: "목욕", katakana: "モギョク", meaning: "入浴",
    example: "목욕을 해요.", exampleKatakana: "モギョグル ヘヨ", exampleMeaning: "お風呂に入ります。",
    breakdown: [
      { word: "해요", meaning: "入ります" }
    ] },
  { level: "2", hangul: "끊다", katakana: "クンタ", meaning: "切る・やめる",
    example: "담배를 끊어요.", exampleKatakana: "タムベルル クノヨ", exampleMeaning: "たばこをやめます。",
    breakdown: [
      { word: "담배", meaning: "たばこ" }
    ] },
  { level: "2", hangul: "어울리다", katakana: "オウルリダ", meaning: "似合う",
    example: "옷이 잘 어울려요.", exampleKatakana: "オシ チャル オウルリョヨ", exampleMeaning: "服がよく似合います。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "짧다", katakana: "チャルタ", meaning: "短い",
    example: "머리가 짧아요.", exampleKatakana: "モリガ チャルバヨ", exampleMeaning: "髪が短いです。",
    breakdown: [
      { word: "머리", meaning: "髪" }
    ] },
  { level: "2", hangul: "오래되다", katakana: "オレデダ", meaning: "古い",
    example: "오래된 건물이에요.", exampleKatakana: "オレドェン コンムリエヨ", exampleMeaning: "古い建物です。",
    breakdown: [
      { word: "건물", meaning: "建物" }
    ] },
  { level: "2", hangul: "혀", katakana: "ヒョ", meaning: "舌",
    example: "혀를 내밀어요.", exampleKatakana: "ヒョルル ネミロヨ", exampleMeaning: "舌を出します。",
    breakdown: [
      { word: "내밀어요", meaning: "出します" }
    ] },
  { level: "2", hangul: "빠지다", katakana: "パジダ", meaning: "抜ける・陥る",
    example: "머리카락이 빠져요.", exampleKatakana: "モリカラギ パジョヨ", exampleMeaning: "髪の毛が抜けます。",
    breakdown: [
      { word: "머리카락", meaning: "髪の毛" }
    ] },
  { level: "2", hangul: "봉투", katakana: "ポントゥ", meaning: "封筒",
    example: "봉투에 넣어요.", exampleKatakana: "ポントゥエ ノオヨ", exampleMeaning: "封筒に入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "방법", katakana: "パンボプ", meaning: "方法",
    example: "좋은 방법이에요.", exampleKatakana: "チョウン パンボビエヨ", exampleMeaning: "良い方法です。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "2", hangul: "주머니", katakana: "チュモニ", meaning: "ポケット",
    example: "주머니에 넣어요.", exampleKatakana: "チュモニエ ノオヨ", exampleMeaning: "ポケットに入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "새로", katakana: "セロ", meaning: "新しく",
    example: "새로 샀어요.", exampleKatakana: "セロ サッソヨ", exampleMeaning: "新しく買いました。",
    breakdown: [
      { word: "샀어요", meaning: "買いました" }
    ] },
  { level: "2", hangul: "졸다", katakana: "チョルダ", meaning: "居眠りする",
    example: "수업 시간에 졸아요.", exampleKatakana: "スオプ シガネ チョラヨ", exampleMeaning: "授業中に居眠りします。",
    breakdown: [
      { word: "수업", meaning: "授業" }
    ] },
  { level: "2", hangul: "강아지", katakana: "カンアジ", meaning: "子犬",
    example: "강아지를 키워요.", exampleKatakana: "カンアジルル キウォヨ", exampleMeaning: "子犬を飼っています。",
    breakdown: [
      { word: "키워요", meaning: "飼っています" }
    ] },
  { level: "2", hangul: "여행지", katakana: "ヨヘンジ", meaning: "旅行先",
    example: "여행지를 정해요.", exampleKatakana: "ヨヘンジルル チョンヘヨ", exampleMeaning: "旅行先を決めます。",
    breakdown: [
      { word: "정해요", meaning: "決めます" }
    ] },
  { level: "2", hangul: "카레", katakana: "カレ", meaning: "カレー",
    example: "카레를 먹어요.", exampleKatakana: "カレルル モゴヨ", exampleMeaning: "カレーを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "공짜", katakana: "コンチャ", meaning: "タダ",
    example: "공짜로 받았어요.", exampleKatakana: "コンチャロ パダッソヨ", exampleMeaning: "タダでもらいました。",
    breakdown: [
      { word: "받았어요", meaning: "もらいました" }
    ] },
  { level: "2", hangul: "뱀", katakana: "ペム", meaning: "蛇",
    example: "뱀을 무서워해요.", exampleKatakana: "ペムル ムソウォヘヨ", exampleMeaning: "蛇を怖がります。",
    breakdown: [
      { word: "무서워해요", meaning: "怖がります" }
    ] },
  { level: "2", hangul: "자유", katakana: "チャユ", meaning: "自由",
    example: "자유롭게 살아요.", exampleKatakana: "チャユロプケ サラヨ", exampleMeaning: "自由に生きます。",
    breakdown: [
      { word: "살아요", meaning: "生きます" }
    ] },
  { level: "2", hangul: "무척", katakana: "ムチョク", meaning: "非常に",
    example: "무척 기뻐요.", exampleKatakana: "ムチョク キポヨ", exampleMeaning: "非常に嬉しいです。",
    breakdown: [
      { word: "기뻐요", meaning: "嬉しいです" }
    ] },
  { level: "2", hangul: "물고기", katakana: "ムルコギ", meaning: "魚",
    example: "물고기를 잡아요.", exampleKatakana: "ムルコギルル チャバヨ", exampleMeaning: "魚を捕まえます。",
    breakdown: [
      { word: "잡아요", meaning: "捕まえます" }
    ] },
  { level: "2", hangul: "신부", katakana: "シンブ", meaning: "花嫁",
    example: "신부가 예뻐요.", exampleKatakana: "シンブガ イェッポヨ", exampleMeaning: "花嫁がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "이해", katakana: "イヘ", meaning: "理解",
    example: "이해가 안 돼요.", exampleKatakana: "イヘガ アン ドェヨ", exampleMeaning: "理解できません。",
    breakdown: [
      { word: "안 돼요", meaning: "できません" }
    ] },
  { level: "2", hangul: "고모", katakana: "コモ", meaning: "（父方の）おばさん",
    example: "고모 댁에 가요.", exampleKatakana: "コモ テゲ カヨ", exampleMeaning: "おばの家に行きます。",
    breakdown: [
      { word: "댁", meaning: "お宅" }
    ] },
  { level: "2", hangul: "튼튼하다", katakana: "トゥントゥナダ", meaning: "丈夫だ",
    example: "몸이 튼튼해요.", exampleKatakana: "モミ トゥントゥネヨ", exampleMeaning: "体が丈夫です。",
    breakdown: [
      { word: "몸", meaning: "体" }
    ] },
  { level: "2", hangul: "이마", katakana: "イマ", meaning: "額",
    example: "이마가 넓어요.", exampleKatakana: "イマガ ノルボヨ", exampleMeaning: "額が広いです。",
    breakdown: [
      { word: "넓어요", meaning: "広いです" }
    ] },
  { level: "2", hangul: "세상", katakana: "セサン", meaning: "世の中",
    example: "세상이 넓어요.", exampleKatakana: "セサンイ ノルボヨ", exampleMeaning: "世の中は広いです。",
    breakdown: [
      { word: "넓어요", meaning: "広いです" }
    ] },
  { level: "2", hangul: "기온", katakana: "キオン", meaning: "気温",
    example: "기온이 낮아요.", exampleKatakana: "キオニ ナジャヨ", exampleMeaning: "気温が低いです。",
    breakdown: [
      { word: "낮아요", meaning: "低いです" }
    ] },
  { level: "2", hangul: "밝다", katakana: "パクタ", meaning: "明るい",
    example: "방이 밝아요.", exampleKatakana: "パンイ パルガヨ", exampleMeaning: "部屋が明るいです。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "2", hangul: "치료", katakana: "チリョ", meaning: "治療",
    example: "치료를 받아요.", exampleKatakana: "チリョルル パダヨ", exampleMeaning: "治療を受けます。",
    breakdown: [
      { word: "받아요", meaning: "受けます" }
    ] },
  { level: "2", hangul: "잘생기다", katakana: "チャルセンギダ", meaning: "かっこいい（顔立ち）",
    example: "잘생긴 배우예요.", exampleKatakana: "チャルセンギン ペウエヨ", exampleMeaning: "かっこいい俳優です。",
    breakdown: [
      { word: "배우", meaning: "俳優" }
    ] },
  { level: "2", hangul: "해외여행", katakana: "ヘウェヨヘン", meaning: "海外旅行",
    example: "해외여행을 가요.", exampleKatakana: "ヘウェヨヘンウル カヨ", exampleMeaning: "海外旅行に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "참다", katakana: "チャムタ", meaning: "我慢する",
    example: "화를 참아요.", exampleKatakana: "ファルル チャマヨ", exampleMeaning: "怒りを我慢します。",
    breakdown: [
      { word: "화", meaning: "怒り" }
    ] },
  { level: "2", hangul: "가져오다", katakana: "カジョオダ", meaning: "持ってくる",
    example: "우산을 가져와요.", exampleKatakana: "ウサヌル カジョワヨ", exampleMeaning: "傘を持ってきます。",
    breakdown: [
      { word: "우산", meaning: "傘" }
    ] },
  { level: "2", hangul: "넥타이", katakana: "ネクタイ", meaning: "ネクタイ",
    example: "넥타이를 매요.", exampleKatakana: "ネクタイルル メヨ", exampleMeaning: "ネクタイをします。",
    breakdown: [
      { word: "매요", meaning: "します" }
    ] },
  { level: "2", hangul: "서쪽", katakana: "ソチョク", meaning: "西側",
    example: "서쪽으로 가요.", exampleKatakana: "ソチョグロ カヨ", exampleMeaning: "西側に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "복습", katakana: "ポクスプ", meaning: "復習",
    example: "복습을 해요.", exampleKatakana: "ポクスブル ヘヨ", exampleMeaning: "復習をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "친척", katakana: "チンチョク", meaning: "親戚",
    example: "친척을 만나요.", exampleKatakana: "チンチョグル マンナヨ", exampleMeaning: "親戚に会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "올림픽", katakana: "オルリムピク", meaning: "オリンピック",
    example: "올림픽을 봐요.", exampleKatakana: "オルリムピグル バヨ", exampleMeaning: "オリンピックを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "뛰어가다", katakana: "トゥィオガダ", meaning: "走っていく",
    example: "학교로 뛰어가요.", exampleKatakana: "ハッキョロ トゥィオガヨ", exampleMeaning: "学校に走っていきます。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "2", hangul: "토마토", katakana: "トマト", meaning: "トマト",
    example: "토마토를 먹어요.", exampleKatakana: "トマトルル モゴヨ", exampleMeaning: "トマトを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "결정", katakana: "キョルジョン", meaning: "決定",
    example: "결정을 해요.", exampleKatakana: "キョルジョンウル ヘヨ", exampleMeaning: "決定をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "전화기", katakana: "チョナギ", meaning: "電話機",
    example: "전화기가 고장 났어요.", exampleKatakana: "チョナギガ コジャン ナッソヨ", exampleMeaning: "電話機が故障しました。",
    breakdown: [
      { word: "고장", meaning: "故障" }
    ] },
  { level: "2", hangul: "양치질", katakana: "ヤンチジル", meaning: "歯磨き",
    example: "양치질을 해요.", exampleKatakana: "ヤンチジルル ヘヨ", exampleMeaning: "歯磨きをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "남기다", katakana: "ナムギダ", meaning: "残す",
    example: "음식을 남겨요.", exampleKatakana: "ウムシグル ナムギョヨ", exampleMeaning: "料理を残します。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "2", hangul: "지난번", katakana: "チナンボン", meaning: "この前",
    example: "지난번에 만났어요.", exampleKatakana: "チナンボネ マンナッソヨ", exampleMeaning: "この前会いました。",
    breakdown: [
      { word: "만났어요", meaning: "会いました" }
    ] },
  { level: "2", hangul: "지도", katakana: "チド", meaning: "地図",
    example: "지도를 봐요.", exampleKatakana: "チドルル バヨ", exampleMeaning: "地図を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "지방", katakana: "チバン", meaning: "地方",
    example: "지방으로 이사해요.", exampleKatakana: "チバヌロ イサヘヨ", exampleMeaning: "地方に引っ越します。",
    breakdown: [
      { word: "이사", meaning: "引っ越し" }
    ] },
  { level: "2", hangul: "지하", katakana: "チハ", meaning: "地下",
    example: "지하로 내려가요.", exampleKatakana: "チハロ ネリョガヨ", exampleMeaning: "地下に下ります。",
    breakdown: [
      { word: "내려가요", meaning: "下ります" }
    ] },
  { level: "2", hangul: "우리나라", katakana: "ウリナラ", meaning: "わが国",
    example: "우리나라가 좋아요.", exampleKatakana: "ウリナラガ チョアヨ", exampleMeaning: "わが国が好きです。",
    breakdown: [
      { word: "좋아요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "운전사", katakana: "ウンジョンサ", meaning: "運転手",
    example: "버스 운전사예요.", exampleKatakana: "ボス ウンジョンサエヨ", exampleMeaning: "バスの運転手です。",
    breakdown: [
      { word: "버스", meaning: "バス" }
    ] },
  { level: "2", hangul: "원피스", katakana: "ウォンピス", meaning: "ワンピース",
    example: "원피스를 입어요.", exampleKatakana: "ウォンピスルル イボヨ", exampleMeaning: "ワンピースを着ます。",
    breakdown: [
      { word: "입어요", meaning: "着ます" }
    ] },
  { level: "2", hangul: "위쪽", katakana: "ウィチョク", meaning: "上側",
    example: "위쪽에 있어요.", exampleKatakana: "ウィチョゲ イッソヨ", exampleMeaning: "上側にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "위치", katakana: "ウィチ", meaning: "位置",
    example: "위치를 확인해요.", exampleKatakana: "ウィチルル ファギネヨ", exampleMeaning: "位置を確認します。",
    breakdown: [
      { word: "확인", meaning: "確認" }
    ] },
  { level: "2", hangul: "유학", katakana: "ユハク", meaning: "留学",
    example: "미국으로 유학 가요.", exampleKatakana: "ミググロ ユハク カヨ", exampleMeaning: "アメリカに留学します。",
    breakdown: [
      { word: "미국", meaning: "アメリカ" }
    ] },
  { level: "2", hangul: "유행", katakana: "ユヘン", meaning: "流行",
    example: "요즘 유행이에요.", exampleKatakana: "ヨジュム ユヘンイエヨ", exampleMeaning: "最近流行しています。",
    breakdown: [
      { word: "요즘", meaning: "最近" }
    ] },
  { level: "2", hangul: "이후", katakana: "イフ", meaning: "以後",
    example: "그 이후에 만나요.", exampleKatakana: "ク イフエ マンナヨ", exampleMeaning: "その後に会いましょう。",
    breakdown: [
      { word: "그", meaning: "その" }
    ] },
  { level: "2", hangul: "일식", katakana: "イルシク", meaning: "日本料理",
    example: "일식을 좋아해요.", exampleKatakana: "イルシグル チョアヘヨ", exampleMeaning: "日本料理が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "장마", katakana: "チャンマ", meaning: "梅雨",
    example: "장마철이에요.", exampleKatakana: "チャンマチョリエヨ", exampleMeaning: "梅雨の時期です。",
    breakdown: [
      { word: "철", meaning: "時期" }
    ] },
  { level: "2", hangul: "저금", katakana: "チョグム", meaning: "貯金",
    example: "저금을 해요.", exampleKatakana: "チョグムル ヘヨ", exampleMeaning: "貯金をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "전기", katakana: "チョンギ", meaning: "電気",
    example: "전기를 아껴요.", exampleKatakana: "チョンギルル アッキョヨ", exampleMeaning: "電気を節約します。",
    breakdown: [
      { word: "아껴요", meaning: "節約します" }
    ] },
  { level: "2", hangul: "접시", katakana: "チョプシ", meaning: "皿",
    example: "접시를 씻어요.", exampleKatakana: "チョプシルル シッソヨ", exampleMeaning: "皿を洗います。",
    breakdown: [
      { word: "씻어요", meaning: "洗います" }
    ] },
  { level: "2", hangul: "젓가락", katakana: "チョッカラク", meaning: "箸",
    example: "젓가락을 써요.", exampleKatakana: "チョッカラグル ソヨ", exampleMeaning: "箸を使います。",
    breakdown: [
      { word: "써요", meaning: "使います" }
    ] },
  { level: "2", hangul: "정거장", katakana: "チョンゴジャン", meaning: "停留所",
    example: "정거장에서 기다려요.", exampleKatakana: "チョンゴジャンエソ キダリョヨ", exampleMeaning: "停留所で待ちます。",
    breakdown: [
      { word: "기다려요", meaning: "待ちます" }
    ] },
  { level: "2", hangul: "정문", katakana: "チョンムン", meaning: "正門",
    example: "정문에서 만나요.", exampleKatakana: "チョンムネソ マンナヨ", exampleMeaning: "正門で会いましょう。",
    breakdown: [
      { word: "만나요", meaning: "会いましょう" }
    ] },
  { level: "2", hangul: "정확", katakana: "チョンファク", meaning: "正確",
    example: "정확한 답이에요.", exampleKatakana: "チョンファカン タビエヨ", exampleMeaning: "正確な答えです。",
    breakdown: [
      { word: "답", meaning: "答え" }
    ] },
  { level: "2", hangul: "조카", katakana: "チョカ", meaning: "甥・姪",
    example: "조카가 귀여워요.", exampleKatakana: "チョカガ クィヨウォヨ", exampleMeaning: "甥がかわいいです。",
    breakdown: [
      { word: "귀여워요", meaning: "かわいいです" }
    ] },
  { level: "2", hangul: "주문", katakana: "チュムン", meaning: "注文",
    example: "음식을 주문해요.", exampleKatakana: "ウムシグル チュムネヨ", exampleMeaning: "料理を注文します。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "2", hangul: "주황색", katakana: "チュファンセク", meaning: "オレンジ色",
    example: "주황색 옷이에요.", exampleKatakana: "チュファンセク オシエヨ", exampleMeaning: "オレンジ色の服です。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "중앙", katakana: "チュンアン", meaning: "中央",
    example: "중앙에 있어요.", exampleKatakana: "チュンアンエ イッソヨ", exampleMeaning: "中央にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "지각", katakana: "チガク", meaning: "遅刻",
    example: "학교에 지각해요.", exampleKatakana: "ハッキョエ チガケヨ", exampleMeaning: "学校に遅刻します。",
    breakdown: [
      { word: "학교", meaning: "学校" }
    ] },
  { level: "2", hangul: "짐", katakana: "チム", meaning: "荷物",
    example: "짐을 옮겨요.", exampleKatakana: "チムル オムギョヨ", exampleMeaning: "荷物を運びます。",
    breakdown: [
      { word: "옮겨요", meaning: "運びます" }
    ] },
  { level: "2", hangul: "어머님", katakana: "オモニム", meaning: "お母様",
    example: "어머님, 안녕하세요.", exampleKatakana: "オモニム アンニョンハセヨ", exampleMeaning: "お母様、こんにちは。",
    breakdown: [
      { word: "안녕하세요", meaning: "こんにちは" }
    ] },
  { level: "2", hangul: "쳐다보다", katakana: "チョダボダ", meaning: "見つめる",
    example: "하늘을 쳐다봐요.", exampleKatakana: "ハヌルル チョダバヨ", exampleMeaning: "空を見上げます。",
    breakdown: [
      { word: "하늘", meaning: "空" }
    ] },
  { level: "2", hangul: "굽다", katakana: "クプタ", meaning: "焼く",
    example: "고기를 구워요.", exampleKatakana: "コギルル クウォヨ", exampleMeaning: "肉を焼きます。",
    breakdown: [
      { word: "고기", meaning: "肉" }
    ] },
  { level: "2", hangul: "세배", katakana: "セベ", meaning: "お正月の挨拶（お辞儀）",
    example: "할머니께 세배를 해요.", exampleKatakana: "ハルモニケ セベルル ヘヨ", exampleMeaning: "おばあさんに新年の挨拶をします。",
    breakdown: [
      { word: "할머니", meaning: "おばあさん" }
    ] },
  { level: "2", hangul: "저렇다", katakana: "チョロタ", meaning: "ああだ",
    example: "저렇게 하면 안 돼요.", exampleKatakana: "チョロケ ハミョン アン ドェヨ", exampleMeaning: "ああすればいけません。",
    breakdown: [
      { word: "하면", meaning: "すれば" }
    ] },
  { level: "2", hangul: "된장", katakana: "テンジャン", meaning: "味噌",
    example: "된장을 넣어요.", exampleKatakana: "テンジャンウル ノオヨ", exampleMeaning: "味噌を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "무료", katakana: "ムリョ", meaning: "無料",
    example: "입장이 무료예요.", exampleKatakana: "イプチャンイ ムリョエヨ", exampleMeaning: "入場が無料です。",
    breakdown: [
      { word: "입장", meaning: "入場" }
    ] },
  { level: "2", hangul: "마당", katakana: "マダン", meaning: "庭",
    example: "마당에 꽃이 있어요.", exampleKatakana: "マダンエ コチ イッソヨ", exampleMeaning: "庭に花があります。",
    breakdown: [
      { word: "꽃", meaning: "花" }
    ] },
  { level: "2", hangul: "박수", katakana: "パクス", meaning: "拍手",
    example: "박수를 쳐요.", exampleKatakana: "パクスルル チョヨ", exampleMeaning: "拍手をします。",
    breakdown: [
      { word: "쳐요", meaning: "します" }
    ] },
  { level: "2", hangul: "이때", katakana: "イッテ", meaning: "この時",
    example: "이때 전화가 왔어요.", exampleKatakana: "イッテ チョナガ ワッソヨ", exampleMeaning: "この時電話が来ました。",
    breakdown: [
      { word: "전화", meaning: "電話" }
    ] },
  { level: "2", hangul: "인기", katakana: "インキ", meaning: "人気",
    example: "인기가 많아요.", exampleKatakana: "インキガ マナヨ", exampleMeaning: "人気が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "빼다", katakana: "ペダ", meaning: "抜く・引く",
    example: "십에서 오를 빼요.", exampleKatakana: "シベソ オルル ペヨ", exampleMeaning: "10から5を引きます。",
    breakdown: [
      { word: "십", meaning: "10" }
    ] },
  { level: "2", hangul: "스타", katakana: "スタ", meaning: "スター",
    example: "유명한 스타예요.", exampleKatakana: "ユミョンハン スタエヨ", exampleMeaning: "有名なスターです。",
    breakdown: [
      { word: "유명한", meaning: "有名な" }
    ] },
  { level: "2", hangul: "붉다", katakana: "プクタ", meaning: "赤い",
    example: "단풍이 붉어요.", exampleKatakana: "タンプンイ プルゴヨ", exampleMeaning: "紅葉が赤いです。",
    breakdown: [
      { word: "단풍", meaning: "紅葉" }
    ] },
  { level: "2", hangul: "관광", katakana: "クァングァン", meaning: "観光",
    example: "서울을 관광해요.", exampleKatakana: "ソウルル クァングァンヘヨ", exampleMeaning: "ソウルを観光します。",
    breakdown: [
      { word: "서울", meaning: "ソウル" }
    ] },
  { level: "2", hangul: "햄버거", katakana: "ヘムボゴ", meaning: "ハンバーガー",
    example: "햄버거를 먹어요.", exampleKatakana: "ヘムボゴルル モゴヨ", exampleMeaning: "ハンバーガーを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "점수", katakana: "チョムス", meaning: "点数",
    example: "점수가 좋아요.", exampleKatakana: "チョムスガ チョアヨ", exampleMeaning: "点数が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "호랑이", katakana: "ホランイ", meaning: "トラ",
    example: "호랑이를 봐요.", exampleKatakana: "ホランイルル バヨ", exampleMeaning: "トラを見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "구름", katakana: "クルム", meaning: "雲",
    example: "구름이 많아요.", exampleKatakana: "クルミ マナヨ", exampleMeaning: "雲が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "성함", katakana: "ソンハム", meaning: "お名前（尊敬語）",
    example: "성함이 어떻게 되세요?", exampleKatakana: "ソンハミ オットケ トェセヨ", exampleMeaning: "お名前は何とおっしゃいますか。",
    breakdown: [
      { word: "어떻게", meaning: "どうやって" }
    ] },
  { level: "2", hangul: "보이다", katakana: "ポイダ", meaning: "見える",
    example: "산이 보여요.", exampleKatakana: "サニ ボヨヨ", exampleMeaning: "山が見えます。",
    breakdown: [
      { word: "산", meaning: "山" }
    ] },
  { level: "2", hangul: "외출", katakana: "ウェチュル", meaning: "外出",
    example: "외출을 해요.", exampleKatakana: "ウェチュルル ヘヨ", exampleMeaning: "外出をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "장갑", katakana: "チャンガプ", meaning: "手袋",
    example: "장갑을 껴요.", exampleKatakana: "チャンガブル キョヨ", exampleMeaning: "手袋をはめます。",
    breakdown: [
      { word: "껴요", meaning: "はめます" }
    ] },
  { level: "2", hangul: "체육관", katakana: "チェユックァン", meaning: "体育館",
    example: "체육관에서 운동해요.", exampleKatakana: "チェユックァネソ ウンドンヘヨ", exampleMeaning: "体育館で運動します。",
    breakdown: [
      { word: "운동", meaning: "運動" }
    ] },
  { level: "2", hangul: "한번", katakana: "ハンボン", meaning: "一度",
    example: "한번 해 볼게요.", exampleKatakana: "ハンボン ヘ ボルケヨ", exampleMeaning: "一度やってみます。",
    breakdown: [
      { word: "해 볼게요", meaning: "やってみます" }
    ] },
  { level: "2", hangul: "규칙", katakana: "ギュチク", meaning: "規則",
    example: "규칙을 지켜요.", exampleKatakana: "ギュチグル チキョヨ", exampleMeaning: "規則を守ります。",
    breakdown: [
      { word: "지켜요", meaning: "守ります" }
    ] },
  { level: "2", hangul: "단풍", katakana: "タンプン", meaning: "紅葉",
    example: "단풍이 예뻐요.", exampleKatakana: "タンプンイ イェッポヨ", exampleMeaning: "紅葉がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "별", katakana: "ピョル", meaning: "星",
    example: "별이 예뻐요.", exampleKatakana: "ピョリ イェッポヨ", exampleMeaning: "星がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "벗다", katakana: "ポッタ", meaning: "脱ぐ",
    example: "신발을 벗어요.", exampleKatakana: "シンバルル ポソヨ", exampleMeaning: "靴を脱ぎます。",
    breakdown: [
      { word: "신발", meaning: "靴" }
    ] },
  { level: "2", hangul: "김", katakana: "キム", meaning: "海苔",
    example: "김을 먹어요.", exampleKatakana: "キムル モゴヨ", exampleMeaning: "海苔を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "미술관", katakana: "ミスルグァン", meaning: "美術館",
    example: "미술관에 가요.", exampleKatakana: "ミスルグァネ カヨ", exampleMeaning: "美術館に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "얻다", katakana: "オッタ", meaning: "得る",
    example: "정보를 얻어요.", exampleKatakana: "チョンボルル オドヨ", exampleMeaning: "情報を得ます。",
    breakdown: [
      { word: "정보", meaning: "情報" }
    ] },
  { level: "2", hangul: "매주", katakana: "メジュ", meaning: "毎週",
    example: "매주 만나요.", exampleKatakana: "メジュ マンナヨ", exampleMeaning: "毎週会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "재채기", katakana: "チェチェギ", meaning: "くしゃみ",
    example: "재채기를 해요.", exampleKatakana: "チェチェギルル ヘヨ", exampleMeaning: "くしゃみをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "닭", katakana: "タク", meaning: "鶏",
    example: "닭을 키워요.", exampleKatakana: "タグル キウォヨ", exampleMeaning: "鶏を飼います。",
    breakdown: [
      { word: "키워요", meaning: "飼います" }
    ] },
  { level: "2", hangul: "유치원", katakana: "ユチウォン", meaning: "幼稚園",
    example: "유치원에 다녀요.", exampleKatakana: "ユチウォネ タニョヨ", exampleMeaning: "幼稚園に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "출근", katakana: "チュルグン", meaning: "出勤",
    example: "아홉 시에 출근해요.", exampleKatakana: "アホプ シエ チュルグネヨ", exampleMeaning: "9時に出勤します。",
    breakdown: [
      { word: "아홉 시", meaning: "9時" }
    ] },
  { level: "2", hangul: "젊다", katakana: "チョムタ", meaning: "若い",
    example: "젊은 사람이에요.", exampleKatakana: "チョルムン サラミエヨ", exampleMeaning: "若い人です。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "2", hangul: "여학생", katakana: "ヨハクセン", meaning: "女子学生",
    example: "여학생이 많아요.", exampleKatakana: "ヨハクセンイ マナヨ", exampleMeaning: "女子学生が多いです。",
    breakdown: [
      { word: "많아요", meaning: "多いです" }
    ] },
  { level: "2", hangul: "서양", katakana: "ソヤン", meaning: "西洋",
    example: "서양 문화를 배워요.", exampleKatakana: "ソヤン ムヌァルル ペウォヨ", exampleMeaning: "西洋文化を学びます。",
    breakdown: [
      { word: "문화", meaning: "文化" }
    ] },
  { level: "2", hangul: "따로", katakana: "タロ", meaning: "別々に",
    example: "따로 계산해요.", exampleKatakana: "タロ ケサネヨ", exampleMeaning: "別々に会計します。",
    breakdown: [
      { word: "계산", meaning: "会計" }
    ] },
  { level: "2", hangul: "얇다", katakana: "ヤルタ", meaning: "薄い",
    example: "이 책은 얇아요.", exampleKatakana: "イ チェグン ヤルバヨ", exampleMeaning: "この本は薄いです。",
    breakdown: [
      { word: "책", meaning: "本" }
    ] },
  { level: "2", hangul: "교수", katakana: "キョス", meaning: "教授",
    example: "교수님을 만나요.", exampleKatakana: "キョスニムル マンナヨ", exampleMeaning: "教授に会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "반지", katakana: "パンジ", meaning: "指輪",
    example: "반지를 껴요.", exampleKatakana: "パンジルル キョヨ", exampleMeaning: "指輪をはめます。",
    breakdown: [
      { word: "껴요", meaning: "はめます" }
    ] },
  { level: "2", hangul: "나이", katakana: "ナイ", meaning: "年齢",
    example: "나이가 몇 살이에요?", exampleKatakana: "ナイガ ミョッ サリエヨ", exampleMeaning: "年はいくつですか。",
    breakdown: [
      { word: "몇 살", meaning: "何歳" }
    ] },
  { level: "2", hangul: "줍다", katakana: "チュプタ", meaning: "拾う",
    example: "돈을 주웠어요.", exampleKatakana: "トヌル チュウォッソヨ", exampleMeaning: "お金を拾いました。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "온도", katakana: "オンド", meaning: "温度",
    example: "온도가 높아요.", exampleKatakana: "オンドガ ノパヨ", exampleMeaning: "温度が高いです。",
    breakdown: [
      { word: "높아요", meaning: "高いです" }
    ] },
  { level: "2", hangul: "소설", katakana: "ソソル", meaning: "小説",
    example: "소설을 읽어요.", exampleKatakana: "ソソルル イルゴヨ", exampleMeaning: "小説を読みます。",
    breakdown: [
      { word: "읽어요", meaning: "読みます" }
    ] },
  { level: "2", hangul: "애인", katakana: "エイン", meaning: "恋人",
    example: "애인이 있어요.", exampleKatakana: "エイニ イッソヨ", exampleMeaning: "恋人がいます。",
    breakdown: [
      { word: "있어요", meaning: "います" }
    ] },
  { level: "2", hangul: "오이", katakana: "オイ", meaning: "きゅうり",
    example: "오이를 먹어요.", exampleKatakana: "オイルル モゴヨ", exampleMeaning: "きゅうりを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "섞다", katakana: "ソクタ", meaning: "混ぜる",
    example: "재료를 섞어요.", exampleKatakana: "チェリョルル ソッコヨ", exampleMeaning: "材料を混ぜます。",
    breakdown: [
      { word: "재료", meaning: "材料" }
    ] },
  { level: "2", hangul: "각각", katakana: "カクカク", meaning: "それぞれ",
    example: "각각 다른 색이에요.", exampleKatakana: "カクカク タルン セギエヨ", exampleMeaning: "それぞれ違う色です。",
    breakdown: [
      { word: "색", meaning: "色" }
    ] },
  { level: "2", hangul: "칼국수", katakana: "カルグクス", meaning: "カルグクス（韓国式うどん）",
    example: "칼국수를 먹어요.", exampleKatakana: "カルグクスルル モゴヨ", exampleMeaning: "カルグクスを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "명절", katakana: "ミョンジョル", meaning: "名節（祝日）",
    example: "명절에 가족을 만나요.", exampleKatakana: "ミョンジョレ カジョグル マンナヨ", exampleMeaning: "名節に家族に会います。",
    breakdown: [
      { word: "가족", meaning: "家族" }
    ] },
  { level: "2", hangul: "나머지", katakana: "ナモジ", meaning: "残り",
    example: "나머지는 나중에 해요.", exampleKatakana: "ナモジヌン ナジュンエ ヘヨ", exampleMeaning: "残りは後でやります。",
    breakdown: [
      { word: "나중에", meaning: "後で" }
    ] },
  { level: "2", hangul: "주차장", katakana: "チュチャジャン", meaning: "駐車場",
    example: "주차장에 세워요.", exampleKatakana: "チュチャジャンエ セウォヨ", exampleMeaning: "駐車場に止めます。",
    breakdown: [
      { word: "세워요", meaning: "止めます" }
    ] },
  { level: "2", hangul: "경기", katakana: "キョンギ", meaning: "試合",
    example: "경기를 봐요.", exampleKatakana: "キョンギルル バヨ", exampleMeaning: "試合を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "놀이", katakana: "ノリ", meaning: "遊び",
    example: "놀이를 해요.", exampleKatakana: "ノリルル ヘヨ", exampleMeaning: "遊びをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "여기저기", katakana: "ヨギジョギ", meaning: "あちこち",
    example: "여기저기 다녀요.", exampleKatakana: "ヨギジョギ タニョヨ", exampleMeaning: "あちこち回ります。",
    breakdown: [
      { word: "다녀요", meaning: "回ります" }
    ] },
  { level: "2", hangul: "심심하다", katakana: "シムシマダ", meaning: "退屈だ",
    example: "오늘은 심심해요.", exampleKatakana: "オヌルン シムシメヨ", exampleMeaning: "今日は退屈です。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "2", hangul: "항상", katakana: "ハンサン", meaning: "いつも",
    example: "항상 감사해요.", exampleKatakana: "ハンサン カムサヘヨ", exampleMeaning: "いつも感謝しています。",
    breakdown: [
      { word: "감사해요", meaning: "感謝しています" }
    ] },
  { level: "2", hangul: "상자", katakana: "サンジャ", meaning: "箱",
    example: "상자에 넣어요.", exampleKatakana: "サンジャエ ノオヨ", exampleMeaning: "箱に入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "국수", katakana: "ククス", meaning: "うどん・麺",
    example: "국수를 먹어요.", exampleKatakana: "ククスルル モゴヨ", exampleMeaning: "うどんを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "계란", katakana: "ケラン", meaning: "卵",
    example: "계란을 먹어요.", exampleKatakana: "ケランウル モゴヨ", exampleMeaning: "卵を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "미래", katakana: "ミレ", meaning: "未来",
    example: "미래를 생각해요.", exampleKatakana: "ミレルル センガケヨ", exampleMeaning: "未来を考えます。",
    breakdown: [
      { word: "생각해요", meaning: "考えます" }
    ] },
  { level: "2", hangul: "이모", katakana: "イモ", meaning: "（母方の）おばさん",
    example: "이모 집에 가요.", exampleKatakana: "イモ チベ カヨ", exampleMeaning: "おばの家に行きます。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "2", hangul: "오랜만", katakana: "オレンマン", meaning: "久しぶり",
    example: "오랜만이에요.", exampleKatakana: "オレンマニエヨ", exampleMeaning: "お久しぶりです。",
    breakdown: [
      { word: "이에요", meaning: "です" }
    ] },
  { level: "2", hangul: "끝", katakana: "クッ", meaning: "終わり",
    example: "끝이 났어요.", exampleKatakana: "クチ ナッソヨ", exampleMeaning: "終わりました。",
    breakdown: [
      { word: "났어요", meaning: "終わりました" }
    ] },
  { level: "2", hangul: "음악가", katakana: "ウマクカ", meaning: "音楽家",
    example: "유명한 음악가예요.", exampleKatakana: "ユミョンハン ウマクカエヨ", exampleMeaning: "有名な音楽家です。",
    breakdown: [
      { word: "유명한", meaning: "有名な" }
    ] },
  { level: "2", hangul: "깎다", katakana: "カクタ", meaning: "値切る・削る",
    example: "값을 깎아요.", exampleKatakana: "カブスル カッカヨ", exampleMeaning: "値段を値切ります。",
    breakdown: [
      { word: "값", meaning: "値段" }
    ] },
  { level: "2", hangul: "낚시", katakana: "ナクシ", meaning: "釣り",
    example: "낚시를 해요.", exampleKatakana: "ナクシルル ヘヨ", exampleMeaning: "釣りをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "동전", katakana: "トンジョン", meaning: "硬貨",
    example: "동전을 넣어요.", exampleKatakana: "トンジョヌル ノオヨ", exampleMeaning: "硬貨を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "유리", katakana: "ユリ", meaning: "ガラス",
    example: "유리가 깨졌어요.", exampleKatakana: "ユリガ ケジョッソヨ", exampleMeaning: "ガラスが割れました。",
    breakdown: [
      { word: "깨졌어요", meaning: "割れました" }
    ] },
  { level: "2", hangul: "좁다", katakana: "チョプタ", meaning: "狭い",
    example: "방이 좁아요.", exampleKatakana: "バンイ チョバヨ", exampleMeaning: "部屋が狭いです。",
    breakdown: [
      { word: "방", meaning: "部屋" }
    ] },
  { level: "2", hangul: "치킨", katakana: "チキン", meaning: "チキン",
    example: "치킨을 먹어요.", exampleKatakana: "チキヌル モゴヨ", exampleMeaning: "チキンを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "전하다", katakana: "チョナダ", meaning: "伝える",
    example: "마음을 전해요.", exampleKatakana: "マウムル チョネヨ", exampleMeaning: "気持ちを伝えます。",
    breakdown: [
      { word: "마음", meaning: "気持ち" }
    ] },
  { level: "2", hangul: "찬물", katakana: "チャンムル", meaning: "冷たい水",
    example: "찬물을 마셔요.", exampleKatakana: "チャンムルル マショヨ", exampleMeaning: "冷たい水を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "갈색", katakana: "カルセク", meaning: "茶色",
    example: "갈색 가방이에요.", exampleKatakana: "カルセク カバンイエヨ", exampleMeaning: "茶色のかばんです。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "2", hangul: "예습", katakana: "イェスプ", meaning: "予習",
    example: "예습을 해요.", exampleKatakana: "イェスブル ヘヨ", exampleMeaning: "予習をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "즐겁다", katakana: "チュルゴプタ", meaning: "楽しい",
    example: "여행이 즐거워요.", exampleKatakana: "ヨヘンイ チュルゴウォヨ", exampleMeaning: "旅行が楽しいです。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "무릎", katakana: "ムルプ", meaning: "膝",
    example: "무릎이 아파요.", exampleKatakana: "ムルピ アパヨ", exampleMeaning: "膝が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "청바지", katakana: "チョンバジ", meaning: "ジーンズ",
    example: "청바지를 입어요.", exampleKatakana: "チョンバジルル イボヨ", exampleMeaning: "ジーンズを履きます。",
    breakdown: [
      { word: "입어요", meaning: "履きます" }
    ] },
  { level: "2", hangul: "자르다", katakana: "チャルダ", meaning: "切る",
    example: "머리를 잘라요.", exampleKatakana: "モリルル チャルラヨ", exampleMeaning: "髪を切ります。",
    breakdown: [
      { word: "머리", meaning: "髪" }
    ] },
  { level: "2", hangul: "자세히", katakana: "チャセヒ", meaning: "詳しく",
    example: "자세히 알려줘요.", exampleKatakana: "チャセヒ アルリョジョヨ", exampleMeaning: "詳しく教えてください。",
    breakdown: [
      { word: "알려줘요", meaning: "教えてください" }
    ] },
  { level: "2", hangul: "내려가다", katakana: "ネリョガダ", meaning: "下りていく",
    example: "계단을 내려가요.", exampleKatakana: "ケダヌル ネリョガヨ", exampleMeaning: "階段を下りていきます。",
    breakdown: [
      { word: "계단", meaning: "階段" }
    ] },
  { level: "2", hangul: "느리다", katakana: "ヌリダ", meaning: "遅い",
    example: "걸음이 느려요.", exampleKatakana: "コルミ ヌリョヨ", exampleMeaning: "歩みが遅いです。",
    breakdown: [
      { word: "걸음", meaning: "歩み" }
    ] },
  { level: "2", hangul: "도움", katakana: "トウム", meaning: "助け",
    example: "도움이 필요해요.", exampleKatakana: "トウミ ピリョヘヨ", exampleMeaning: "助けが必要です。",
    breakdown: [
      { word: "필요해요", meaning: "必要です" }
    ] },
  { level: "2", hangul: "과거", katakana: "クァゴ", meaning: "過去",
    example: "과거를 잊어요.", exampleKatakana: "クァゴルル イジョヨ", exampleMeaning: "過去を忘れます。",
    breakdown: [
      { word: "잊어요", meaning: "忘れます" }
    ] },
  { level: "2", hangul: "충분하다", katakana: "チュンブナダ", meaning: "十分だ",
    example: "시간이 충분해요.", exampleKatakana: "シガニ チュンブネヨ", exampleMeaning: "時間が十分です。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "자라다", katakana: "チャラダ", meaning: "育つ",
    example: "아이가 잘 자라요.", exampleKatakana: "アイガ チャル チャラヨ", exampleMeaning: "子供がよく育ちます。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "얼다", katakana: "オルダ", meaning: "凍る",
    example: "물이 얼어요.", exampleKatakana: "ムリ オロヨ", exampleMeaning: "水が凍ります。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "2", hangul: "이기다", katakana: "イギダ", meaning: "勝つ",
    example: "시합에서 이겨요.", exampleKatakana: "シハベソ イギョヨ", exampleMeaning: "試合で勝ちます。",
    breakdown: [
      { word: "시합", meaning: "試合" }
    ] },
  { level: "2", hangul: "거절", katakana: "コジョル", meaning: "断り",
    example: "제안을 거절해요.", exampleKatakana: "チェアヌル コジョレヨ", exampleMeaning: "提案を断ります。",
    breakdown: [
      { word: "제안", meaning: "提案" }
    ] },
  { level: "2", hangul: "성격", katakana: "ソンギョク", meaning: "性格",
    example: "성격이 좋아요.", exampleKatakana: "ソンギョギ チョアヨ", exampleMeaning: "性格が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "자리", katakana: "チャリ", meaning: "席",
    example: "자리에 앉아요.", exampleKatakana: "チャリエ アンジャヨ", exampleMeaning: "席に座ります。",
    breakdown: [
      { word: "앉아요", meaning: "座ります" }
    ] },
  { level: "2", hangul: "칭찬", katakana: "チンチャン", meaning: "褒めること",
    example: "칭찬을 받아요.", exampleKatakana: "チンチャヌル パダヨ", exampleMeaning: "褒められます。",
    breakdown: [
      { word: "받아요", meaning: "受けます" }
    ] },
  { level: "2", hangul: "국내", katakana: "ククネ", meaning: "国内",
    example: "국내 여행을 가요.", exampleKatakana: "ククネ ヨヘンウル カヨ", exampleMeaning: "国内旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "서류", katakana: "ソリュ", meaning: "書類",
    example: "서류를 준비해요.", exampleKatakana: "ソリュルル チュンビヘヨ", exampleMeaning: "書類を準備します。",
    breakdown: [
      { word: "준비", meaning: "準備" }
    ] },
  { level: "2", hangul: "신청", katakana: "シンチョン", meaning: "申請",
    example: "신청을 해요.", exampleKatakana: "シンチョンウル ヘヨ", exampleMeaning: "申請をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "고개", katakana: "コゲ", meaning: "峠・首",
    example: "고개를 넘어요.", exampleKatakana: "コゲルル ノモヨ", exampleMeaning: "峠を越えます。",
    breakdown: [
      { word: "넘어요", meaning: "越えます" }
    ] },
  { level: "2", hangul: "일기", katakana: "イルギ", meaning: "日記",
    example: "일기를 써요.", exampleKatakana: "イルギルル ソヨ", exampleMeaning: "日記を書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "2", hangul: "평소", katakana: "ピョンソ", meaning: "普段",
    example: "평소에 운동해요.", exampleKatakana: "ピョンソエ ウンドンヘヨ", exampleMeaning: "普段運動します。",
    breakdown: [
      { word: "운동", meaning: "運動" }
    ] },
  { level: "2", hangul: "간식", katakana: "カンシク", meaning: "おやつ",
    example: "간식을 먹어요.", exampleKatakana: "カンシグル モゴヨ", exampleMeaning: "おやつを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "다이어트", katakana: "タイオトゥ", meaning: "ダイエット",
    example: "다이어트를 해요.", exampleKatakana: "タイオトゥルル ヘヨ", exampleMeaning: "ダイエットをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "방문", katakana: "パンムン", meaning: "訪問",
    example: "친구 집을 방문해요.", exampleKatakana: "チング チブル パンムネヨ", exampleMeaning: "友達の家を訪問します。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "달걀", katakana: "タルギャル", meaning: "卵",
    example: "달걀을 삶아요.", exampleKatakana: "タルギャルル サルマヨ", exampleMeaning: "卵をゆでます。",
    breakdown: [
      { word: "삶아요", meaning: "ゆでます" }
    ] },
  { level: "2", hangul: "겉", katakana: "コッ", meaning: "表・外見",
    example: "겉이 예뻐요.", exampleKatakana: "コチ イェッポヨ", exampleMeaning: "見た目がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "어른", katakana: "オルン", meaning: "大人",
    example: "어른이 됐어요.", exampleKatakana: "オルニ トェッソヨ", exampleMeaning: "大人になりました。",
    breakdown: [
      { word: "됐어요", meaning: "なりました" }
    ] },
  { level: "2", hangul: "택배", katakana: "テクベ", meaning: "宅配",
    example: "택배를 보내요.", exampleKatakana: "テクベルル ポネヨ", exampleMeaning: "宅配便を送ります。",
    breakdown: [
      { word: "보내요", meaning: "送ります" }
    ] },
  { level: "2", hangul: "무섭다", katakana: "ムソプタ", meaning: "怖い",
    example: "호랑이가 무서워요.", exampleKatakana: "ホランイガ ムソウォヨ", exampleMeaning: "トラが怖いです。",
    breakdown: [
      { word: "호랑이", meaning: "トラ" }
    ] },
  { level: "2", hangul: "바이올린", katakana: "バイオルリン", meaning: "バイオリン",
    example: "바이올린을 켜요.", exampleKatakana: "バイオルリヌル キョヨ", exampleMeaning: "バイオリンを弾きます。",
    breakdown: [
      { word: "켜요", meaning: "弾きます" }
    ] },
  { level: "2", hangul: "뜨겁다", katakana: "トゥゴプタ", meaning: "熱い",
    example: "커피가 뜨거워요.", exampleKatakana: "コピガ トゥゴウォヨ", exampleMeaning: "コーヒーが熱いです。",
    breakdown: [
      { word: "커피", meaning: "コーヒー" }
    ] },
  { level: "2", hangul: "전체", katakana: "チョンチェ", meaning: "全体",
    example: "전체 인원이에요.", exampleKatakana: "チョンチェ イヌォニエヨ", exampleMeaning: "全体の人数です。",
    breakdown: [
      { word: "인원", meaning: "人数" }
    ] },
  { level: "2", hangul: "감자", katakana: "カムジャ", meaning: "じゃがいも",
    example: "감자를 삶아요.", exampleKatakana: "カムジャルル サルマヨ", exampleMeaning: "じゃがいもをゆでます。",
    breakdown: [
      { word: "삶아요", meaning: "ゆでます" }
    ] },
  { level: "2", hangul: "교회", katakana: "キョフェ", meaning: "教会",
    example: "교회에 가요.", exampleKatakana: "キョフェエ カヨ", exampleMeaning: "教会に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "목적", katakana: "モクチョク", meaning: "目的",
    example: "목적이 뭐예요?", exampleKatakana: "モクチョギ モエヨ", exampleMeaning: "目的は何ですか。",
    breakdown: [
      { word: "뭐예요", meaning: "何ですか" }
    ] },
  { level: "2", hangul: "부부", katakana: "プブ", meaning: "夫婦",
    example: "부부가 행복해요.", exampleKatakana: "プブガ ヘンボケヨ", exampleMeaning: "夫婦が幸せです。",
    breakdown: [
      { word: "행복해요", meaning: "幸せです" }
    ] },
  { level: "2", hangul: "놓다", katakana: "ノタ", meaning: "置く",
    example: "책상에 놓아요.", exampleKatakana: "チェクサンエ ノアヨ", exampleMeaning: "机に置きます。",
    breakdown: [
      { word: "책상", meaning: "机" }
    ] },
  { level: "2", hangul: "빌딩", katakana: "ピルディン", meaning: "ビル",
    example: "높은 빌딩이에요.", exampleKatakana: "ノプン ピルディンイエヨ", exampleMeaning: "高いビルです。",
    breakdown: [
      { word: "높은", meaning: "高い" }
    ] },
  { level: "2", hangul: "스트레스", katakana: "ストゥレス", meaning: "ストレス",
    example: "스트레스를 받아요.", exampleKatakana: "ストゥレスルル パダヨ", exampleMeaning: "ストレスを受けます。",
    breakdown: [
      { word: "받아요", meaning: "受けます" }
    ] },
  { level: "2", hangul: "애", katakana: "エ", meaning: "子供",
    example: "애가 귀여워요.", exampleKatakana: "エガ クィヨウォヨ", exampleMeaning: "子供がかわいいです。",
    breakdown: [
      { word: "귀여워요", meaning: "かわいいです" }
    ] },
  { level: "2", hangul: "생기다", katakana: "センギダ", meaning: "できる・生じる",
    example: "여자친구가 생겼어요.", exampleKatakana: "ヨジャチングガ センギョッソヨ", exampleMeaning: "彼女ができました。",
    breakdown: [
      { word: "여자친구", meaning: "彼女" }
    ] },
  { level: "2", hangul: "약간", katakana: "ヤクカン", meaning: "少し",
    example: "약간 매워요.", exampleKatakana: "ヤクカン メウォヨ", exampleMeaning: "少し辛いです。",
    breakdown: [
      { word: "매워요", meaning: "辛いです" }
    ] },
  { level: "2", hangul: "노인", katakana: "ノイン", meaning: "老人",
    example: "노인을 도와줘요.", exampleKatakana: "ノイヌル トワジョヨ", exampleMeaning: "老人を助けます。",
    breakdown: [
      { word: "도와줘요", meaning: "助けます" }
    ] },
  { level: "2", hangul: "위험", katakana: "ウィホム", meaning: "危険",
    example: "위험한 일이에요.", exampleKatakana: "ウィホマン イリエヨ", exampleMeaning: "危険な仕事です。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "맥주", katakana: "メクチュ", meaning: "ビール",
    example: "맥주를 마셔요.", exampleKatakana: "メクチュルル マショヨ", exampleMeaning: "ビールを飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "환자", katakana: "フェンジャ", meaning: "患者",
    example: "환자를 치료해요.", exampleKatakana: "フェンジャルル チリョヘヨ", exampleMeaning: "患者を治療します。",
    breakdown: [
      { word: "치료", meaning: "治療" }
    ] },
  { level: "2", hangul: "깨끗이", katakana: "ケックシ", meaning: "きれいに",
    example: "깨끗이 청소해요.", exampleKatakana: "ケックシ チョンソヘヨ", exampleMeaning: "きれいに掃除します。",
    breakdown: [
      { word: "청소", meaning: "掃除" }
    ] },
  { level: "2", hangul: "해외", katakana: "ヘウェ", meaning: "海外",
    example: "해외로 여행 가요.", exampleKatakana: "ヘウェロ ヨヘン カヨ", exampleMeaning: "海外に旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "떡국", katakana: "トックク", meaning: "トック（お雑煮）",
    example: "설날에 떡국을 먹어요.", exampleKatakana: "ソルラレ トックグル モゴヨ", exampleMeaning: "お正月にお雑煮を食べます。",
    breakdown: [
      { word: "설날", meaning: "正月" }
    ] },
  { level: "2", hangul: "매년", katakana: "メニョン", meaning: "毎年",
    example: "매년 여행 가요.", exampleKatakana: "メニョン ヨヘン カヨ", exampleMeaning: "毎年旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "둘째", katakana: "トゥルチェ", meaning: "二番目",
    example: "둘째 아이예요.", exampleKatakana: "トゥルチェ アイエヨ", exampleMeaning: "二番目の子供です。",
    breakdown: [
      { word: "아이", meaning: "子供" }
    ] },
  { level: "2", hangul: "고치다", katakana: "コチダ", meaning: "直す",
    example: "고장을 고쳐요.", exampleKatakana: "コジャンウル コチョヨ", exampleMeaning: "故障を直します。",
    breakdown: [
      { word: "고장", meaning: "故障" }
    ] },
  { level: "2", hangul: "기뻐하다", katakana: "キポハダ", meaning: "喜ぶ",
    example: "합격해서 기뻐해요.", exampleKatakana: "ハプキョケソ キポヘヨ", exampleMeaning: "合格して喜んでいます。",
    breakdown: [
      { word: "합격", meaning: "合格" }
    ] },
  { level: "2", hangul: "마을", katakana: "マウル", meaning: "村",
    example: "조용한 마을이에요.", exampleKatakana: "チョヨンハン マウリエヨ", exampleMeaning: "静かな村です。",
    breakdown: [
      { word: "조용한", meaning: "静かな" }
    ] },
  { level: "2", hangul: "웃음", katakana: "ウスム", meaning: "笑い",
    example: "웃음이 나요.", exampleKatakana: "ウスミ ナヨ", exampleMeaning: "笑いが出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "물론", katakana: "ムルロン", meaning: "もちろん",
    example: "물론 좋아요.", exampleKatakana: "ムルロン チョアヨ", exampleMeaning: "もちろん良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "장미", katakana: "チャンミ", meaning: "バラ",
    example: "장미를 선물해요.", exampleKatakana: "チャンミルル ソンムレヨ", exampleMeaning: "バラをプレゼントします。",
    breakdown: [
      { word: "선물", meaning: "プレゼント" }
    ] },
  { level: "2", hangul: "깊다", katakana: "キプタ", meaning: "深い",
    example: "바다가 깊어요.", exampleKatakana: "パダガ キポヨ", exampleMeaning: "海が深いです。",
    breakdown: [
      { word: "바다", meaning: "海" }
    ] },
  { level: "2", hangul: "주위", katakana: "チュウィ", meaning: "周囲",
    example: "주위를 살펴요.", exampleKatakana: "チュウィルル サルピョヨ", exampleMeaning: "周囲を見回します。",
    breakdown: [
      { word: "살펴요", meaning: "見回します" }
    ] },
  { level: "2", hangul: "복잡하다", katakana: "ポクチャパダ", meaning: "複雑だ",
    example: "길이 복잡해요.", exampleKatakana: "キリ ポクチャペヨ", exampleMeaning: "道が複雑です。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "2", hangul: "목소리", katakana: "モクソリ", meaning: "声",
    example: "목소리가 예뻐요.", exampleKatakana: "モクソリガ イェッポヨ", exampleMeaning: "声がきれいです。",
    breakdown: [
      { word: "예뻐요", meaning: "きれいです" }
    ] },
  { level: "2", hangul: "얼음", katakana: "オルム", meaning: "氷",
    example: "얼음을 넣어요.", exampleKatakana: "オルムル ノオヨ", exampleMeaning: "氷を入れます。",
    breakdown: [
      { word: "넣어요", meaning: "入れます" }
    ] },
  { level: "2", hangul: "차", katakana: "チャ", meaning: "お茶・車",
    example: "차를 마셔요.", exampleKatakana: "チャルル マショヨ", exampleMeaning: "お茶を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "잊다", katakana: "イッタ", meaning: "忘れる",
    example: "약속을 잊었어요.", exampleKatakana: "ヤクソグル イジョッソヨ", exampleMeaning: "約束を忘れました。",
    breakdown: [
      { word: "약속", meaning: "約束" }
    ] },
  { level: "2", hangul: "두부", katakana: "トゥブ", meaning: "豆腐",
    example: "두부를 먹어요.", exampleKatakana: "トゥブルル モゴヨ", exampleMeaning: "豆腐を食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "움직이다", katakana: "ウムジギダ", meaning: "動く",
    example: "몸을 움직여요.", exampleKatakana: "モムル ウムジギョヨ", exampleMeaning: "体を動かします。",
    breakdown: [
      { word: "몸", meaning: "体" }
    ] },
  { level: "2", hangul: "믿다", katakana: "ミッタ", meaning: "信じる",
    example: "친구를 믿어요.", exampleKatakana: "チングルル ミドヨ", exampleMeaning: "友達を信じます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "연세", katakana: "ヨンセ", meaning: "お年（尊敬語）",
    example: "연세가 어떻게 되세요?", exampleKatakana: "ヨンセガ オットケ トェセヨ", exampleMeaning: "おいくつでいらっしゃいますか。",
    breakdown: [
      { word: "어떻게", meaning: "どうやって" }
    ] },
  { level: "2", hangul: "이사", katakana: "イサ", meaning: "引っ越し",
    example: "이사를 해요.", exampleKatakana: "イサルル ヘヨ", exampleMeaning: "引っ越しをします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "출입국", katakana: "チュリプクク", meaning: "出入国",
    example: "출입국 관리소예요.", exampleKatakana: "チュリプクク クァルリソエヨ", exampleMeaning: "出入国管理所です。",
    breakdown: [
      { word: "관리소", meaning: "管理所" }
    ] },
  { level: "2", hangul: "아가씨", katakana: "アガッシ", meaning: "お嬢さん",
    example: "아가씨, 여기요.", exampleKatakana: "アガッシ ヨギヨ", exampleMeaning: "お嬢さん、こちらです。",
    breakdown: [
      { word: "여기요", meaning: "こちら" }
    ] },
  { level: "2", hangul: "일부", katakana: "イルブ", meaning: "一部",
    example: "일부만 왔어요.", exampleKatakana: "イルブマン ワッソヨ", exampleMeaning: "一部だけ来ました。",
    breakdown: [
      { word: "왔어요", meaning: "来ました" }
    ] },
  { level: "2", hangul: "돈가스", katakana: "トンカス", meaning: "とんかつ",
    example: "돈가스를 먹어요.", exampleKatakana: "トンカスルル モゴヨ", exampleMeaning: "とんかつを食べます。",
    breakdown: [
      { word: "먹어요", meaning: "食べます" }
    ] },
  { level: "2", hangul: "언어", katakana: "オノ", meaning: "言語",
    example: "여러 언어를 배워요.", exampleKatakana: "ヨロ オノルル ペウォヨ", exampleMeaning: "いろんな言語を学びます。",
    breakdown: [
      { word: "여러", meaning: "いろんな" }
    ] },
  { level: "2", hangul: "칼", katakana: "カル", meaning: "刃物・ナイフ",
    example: "칼로 잘라요.", exampleKatakana: "カルロ チャルラヨ", exampleMeaning: "ナイフで切ります。",
    breakdown: [
      { word: "잘라요", meaning: "切ります" }
    ] },
  { level: "2", hangul: "호수", katakana: "ホス", meaning: "湖",
    example: "호수가 아름다워요.", exampleKatakana: "ホスガ アルムダウォヨ", exampleMeaning: "湖が美しいです。",
    breakdown: [
      { word: "아름다워요", meaning: "美しいです" }
    ] },
  { level: "2", hangul: "부끄럽다", katakana: "プクロプタ", meaning: "恥ずかしい",
    example: "실수해서 부끄러워요.", exampleKatakana: "シルスヘソ プクロウォヨ", exampleMeaning: "失敗して恥ずかしいです。",
    breakdown: [
      { word: "실수", meaning: "失敗" }
    ] },
  { level: "2", hangul: "틀리다", katakana: "トゥルリダ", meaning: "間違える",
    example: "답이 틀렸어요.", exampleKatakana: "タビ トゥルリョッソヨ", exampleMeaning: "答えが間違っています。",
    breakdown: [
      { word: "답", meaning: "答え" }
    ] },
  { level: "2", hangul: "끓다", katakana: "クルタ", meaning: "沸く",
    example: "물이 끓어요.", exampleKatakana: "ムリ クロヨ", exampleMeaning: "お湯が沸きます。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "2", hangul: "고등학생", katakana: "コドゥンハクセン", meaning: "高校生",
    example: "저는 고등학생이에요.", exampleKatakana: "チョヌン コドゥンハクセンイエヨ", exampleMeaning: "私は高校生です。",
    breakdown: [
      { word: "저", meaning: "私" }
    ] },
  { level: "2", hangul: "냄새", katakana: "ネムセ", meaning: "匂い",
    example: "좋은 냄새가 나요.", exampleKatakana: "チョウン ネムセガ ナヨ", exampleMeaning: "良い匂いがします。",
    breakdown: [
      { word: "좋은", meaning: "良い" }
    ] },
  { level: "2", hangul: "닮다", katakana: "タムタ", meaning: "似ている",
    example: "엄마와 닮았어요.", exampleKatakana: "オムマワ タルマッソヨ", exampleMeaning: "お母さんに似ています。",
    breakdown: [
      { word: "엄마", meaning: "お母さん" }
    ] },
  { level: "2", hangul: "방송", katakana: "パンソン", meaning: "放送",
    example: "텔레비전 방송을 봐요.", exampleKatakana: "テルレビジョン パンソンウル バヨ", exampleMeaning: "テレビ放送を見ます。",
    breakdown: [
      { word: "텔레비전", meaning: "テレビ" }
    ] },
  { level: "2", hangul: "이불", katakana: "イブル", meaning: "布団",
    example: "이불을 덮어요.", exampleKatakana: "イブルル トポヨ", exampleMeaning: "布団をかけます。",
    breakdown: [
      { word: "덮어요", meaning: "かけます" }
    ] },
  { level: "2", hangul: "휴대폰", katakana: "ヒュデポン", meaning: "携帯電話",
    example: "휴대폰을 잃어버렸어요.", exampleKatakana: "ヒュデポヌル イロボリョッソヨ", exampleMeaning: "携帯電話をなくしました。",
    breakdown: [
      { word: "잃어버렸어요", meaning: "なくしました" }
    ] },
  { level: "2", hangul: "반드시", katakana: "パンドゥシ", meaning: "必ず",
    example: "반드시 성공할 거예요.", exampleKatakana: "パンドゥシ ソンゴンハル コエヨ", exampleMeaning: "必ず成功します。",
    breakdown: [
      { word: "성공", meaning: "成功" }
    ] },
  { level: "2", hangul: "늘", katakana: "ヌル", meaning: "いつも",
    example: "늘 웃어요.", exampleKatakana: "ヌル ウソヨ", exampleMeaning: "いつも笑っています。",
    breakdown: [
      { word: "웃어요", meaning: "笑っています" }
    ] },
  { level: "2", hangul: "평일", katakana: "ピョンイル", meaning: "平日",
    example: "평일에는 바빠요.", exampleKatakana: "ピョンイレヌン パッパヨ", exampleMeaning: "平日は忙しいです。",
    breakdown: [
      { word: "바빠요", meaning: "忙しいです" }
    ] },
  { level: "2", hangul: "뜨다", katakana: "トゥダ", meaning: "浮かぶ",
    example: "해가 떠요.", exampleKatakana: "ヘガ トヨ", exampleMeaning: "太陽が昇ります。",
    breakdown: [
      { word: "해", meaning: "太陽" }
    ] },
  { level: "2", hangul: "그동안", katakana: "クドンアン", meaning: "その間",
    example: "그동안 잘 지냈어요?", exampleKatakana: "クドンアン チャル チネッソヨ", exampleMeaning: "その間元気にしていましたか。",
    breakdown: [
      { word: "잘 지냈어요", meaning: "元気にしていました" }
    ] },
  { level: "2", hangul: "거리", katakana: "コリ", meaning: "距離・通り",
    example: "거리가 멀어요.", exampleKatakana: "コリガ モロヨ", exampleMeaning: "距離が遠いです。",
    breakdown: [
      { word: "멀어요", meaning: "遠いです" }
    ] },
  { level: "2", hangul: "잡다", katakana: "チャプタ", meaning: "つかむ",
    example: "손을 잡아요.", exampleKatakana: "ソヌル チャバヨ", exampleMeaning: "手をつかみます。",
    breakdown: [
      { word: "손", meaning: "手" }
    ] },
  { level: "2", hangul: "언제나", katakana: "オンジェナ", meaning: "いつも",
    example: "언제나 감사해요.", exampleKatakana: "オンジェナ カムサヘヨ", exampleMeaning: "いつも感謝しています。",
    breakdown: [
      { word: "감사해요", meaning: "感謝しています" }
    ] },
  { level: "2", hangul: "보라색", katakana: "ポラセク", meaning: "紫色",
    example: "보라색을 좋아해요.", exampleKatakana: "ポラセグル チョアヘヨ", exampleMeaning: "紫色が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "약사", katakana: "ヤクサ", meaning: "薬剤師",
    example: "약사에게 물어봐요.", exampleKatakana: "ヤクサエゲ ムロバヨ", exampleMeaning: "薬剤師に聞いてみます。",
    breakdown: [
      { word: "물어봐요", meaning: "聞いてみます" }
    ] },
  { level: "2", hangul: "더욱", katakana: "トウク", meaning: "もっと",
    example: "더욱 열심히 해요.", exampleKatakana: "トウク ヨルシミ ヘヨ", exampleMeaning: "もっと一生懸命やります。",
    breakdown: [
      { word: "열심히", meaning: "一生懸命" }
    ] },
  { level: "2", hangul: "남다", katakana: "ナムタ", meaning: "残る",
    example: "시간이 남아요.", exampleKatakana: "シガニ ナマヨ", exampleMeaning: "時間が残っています。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "속", katakana: "ソク", meaning: "中",
    example: "가방 속에 있어요.", exampleKatakana: "カバン ソゲ イッソヨ", exampleMeaning: "かばんの中にあります。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "2", hangul: "기침", katakana: "キチム", meaning: "咳",
    example: "기침이 나요.", exampleKatakana: "キチミ ナヨ", exampleMeaning: "咳が出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "희망", katakana: "ヒマン", meaning: "希望",
    example: "희망을 가져요.", exampleKatakana: "ヒマンウル カジョヨ", exampleMeaning: "希望を持ちます。",
    breakdown: [
      { word: "가져요", meaning: "持ちます" }
    ] },
  { level: "2", hangul: "신호등", katakana: "シノドゥン", meaning: "信号機",
    example: "신호등을 봐요.", exampleKatakana: "シノドゥンウル バヨ", exampleMeaning: "信号機を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "끼다", katakana: "キダ", meaning: "はめる",
    example: "반지를 끼어요.", exampleKatakana: "パンジルル キオヨ", exampleMeaning: "指輪をはめます。",
    breakdown: [
      { word: "반지", meaning: "指輪" }
    ] },
  { level: "2", hangul: "찾아가다", katakana: "チャジャガダ", meaning: "訪ねて行く",
    example: "친구를 찾아가요.", exampleKatakana: "チングルル チャジャガヨ", exampleMeaning: "友達を訪ねて行きます。",
    breakdown: [
      { word: "친구", meaning: "友達" }
    ] },
  { level: "2", hangul: "시어머니", katakana: "シオモニ", meaning: "姑",
    example: "시어머니와 살아요.", exampleKatakana: "シオモニワ サラヨ", exampleMeaning: "姑と暮らしています。",
    breakdown: [
      { word: "살아요", meaning: "暮らしています" }
    ] },
  { level: "2", hangul: "무", katakana: "ム", meaning: "大根",
    example: "무를 썰어요.", exampleKatakana: "ムルル ソロヨ", exampleMeaning: "大根を切ります。",
    breakdown: [
      { word: "썰어요", meaning: "切ります" }
    ] },
  { level: "2", hangul: "재료", katakana: "チェリョ", meaning: "材料",
    example: "요리 재료를 사요.", exampleKatakana: "ヨリ チェリョルル サヨ", exampleMeaning: "料理の材料を買います。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "2", hangul: "화", katakana: "ファ", meaning: "怒り",
    example: "화가 나요.", exampleKatakana: "ファガ ナヨ", exampleMeaning: "腹が立ちます。",
    breakdown: [
      { word: "나요", meaning: "立ちます" }
    ] },
  { level: "2", hangul: "부분", katakana: "プブン", meaning: "部分",
    example: "이 부분이 중요해요.", exampleKatakana: "イ プブニ チュンヨヘヨ", exampleMeaning: "この部分が重要です。",
    breakdown: [
      { word: "중요해요", meaning: "重要です" }
    ] },
  { level: "2", hangul: "빨래", katakana: "パルレ", meaning: "洗濯",
    example: "빨래를 해요.", exampleKatakana: "パルレルル ヘヨ", exampleMeaning: "洗濯をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "집안일", katakana: "チバンニル", meaning: "家事",
    example: "집안일을 도와요.", exampleKatakana: "チバンニルル トワヨ", exampleMeaning: "家事を手伝います。",
    breakdown: [
      { word: "도와요", meaning: "手伝います" }
    ] },
  { level: "2", hangul: "감다", katakana: "カムタ", meaning: "（目を）閉じる・洗う",
    example: "눈을 감아요.", exampleKatakana: "ヌヌル カマヨ", exampleMeaning: "目を閉じます。",
    breakdown: [
      { word: "눈", meaning: "目" }
    ] },
  { level: "2", hangul: "이웃", katakana: "イウッ", meaning: "隣人",
    example: "이웃과 인사해요.", exampleKatakana: "イウックァ インサヘヨ", exampleMeaning: "隣人と挨拶します。",
    breakdown: [
      { word: "인사", meaning: "挨拶" }
    ] },
  { level: "2", hangul: "가리키다", katakana: "カリキダ", meaning: "指す",
    example: "손가락으로 가리켜요.", exampleKatakana: "ソンカラグロ カリキョヨ", exampleMeaning: "指で指します。",
    breakdown: [
      { word: "손가락", meaning: "指" }
    ] },
  { level: "2", hangul: "검사", katakana: "コムサ", meaning: "検査",
    example: "건강 검사를 받아요.", exampleKatakana: "コンガン コムサルル パダヨ", exampleMeaning: "健康検査を受けます。",
    breakdown: [
      { word: "건강", meaning: "健康" }
    ] },
  { level: "2", hangul: "안쪽", katakana: "アンチョク", meaning: "内側",
    example: "안쪽에 있어요.", exampleKatakana: "アンチョゲ イッソヨ", exampleMeaning: "内側にあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "대학원", katakana: "テハグォン", meaning: "大学院",
    example: "대학원에 진학해요.", exampleKatakana: "テハグォネ チナケヨ", exampleMeaning: "大学院に進学します。",
    breakdown: [
      { word: "진학", meaning: "進学" }
    ] },
  { level: "2", hangul: "해마다", katakana: "ヘマダ", meaning: "毎年",
    example: "해마다 여행 가요.", exampleKatakana: "ヘマダ ヨヘン カヨ", exampleMeaning: "毎年旅行に行きます。",
    breakdown: [
      { word: "여행", meaning: "旅行" }
    ] },
  { level: "2", hangul: "매우", katakana: "メウ", meaning: "とても",
    example: "매우 기뻐요.", exampleKatakana: "メウ キポヨ", exampleMeaning: "とても嬉しいです。",
    breakdown: [
      { word: "기뻐요", meaning: "嬉しいです" }
    ] },
  { level: "2", hangul: "분위기", katakana: "プヌィギ", meaning: "雰囲気",
    example: "분위기가 좋아요.", exampleKatakana: "プヌィギガ チョアヨ", exampleMeaning: "雰囲気が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "휴일", katakana: "ヒュイル", meaning: "休日",
    example: "휴일에 쉬어요.", exampleKatakana: "ヒュイレ シュィオヨ", exampleMeaning: "休日に休みます。",
    breakdown: [
      { word: "쉬어요", meaning: "休みます" }
    ] },
  { level: "2", hangul: "짓다", katakana: "チッタ", meaning: "建てる・作る",
    example: "집을 지어요.", exampleKatakana: "チブル チオヨ", exampleMeaning: "家を建てます。",
    breakdown: [
      { word: "집", meaning: "家" }
    ] },
  { level: "2", hangul: "시민", katakana: "シミン", meaning: "市民",
    example: "서울 시민이에요.", exampleKatakana: "ソウル シミニエヨ", exampleMeaning: "ソウル市民です。",
    breakdown: [
      { word: "서울", meaning: "ソウル" }
    ] },
  { level: "2", hangul: "차례", katakana: "チャレ", meaning: "順番",
    example: "차례를 지켜요.", exampleKatakana: "チャレルル チキョヨ", exampleMeaning: "順番を守ります。",
    breakdown: [
      { word: "지켜요", meaning: "守ります" }
    ] },
  { level: "2", hangul: "잘되다", katakana: "チャルデダ", meaning: "うまくいく",
    example: "일이 잘돼요.", exampleKatakana: "イリ チャルドェヨ", exampleMeaning: "仕事がうまくいきます。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "진짜", katakana: "チンチャ", meaning: "本当に",
    example: "진짜 맛있어요.", exampleKatakana: "チンチャ マシッソヨ", exampleMeaning: "本当においしいです。",
    breakdown: [
      { word: "맛있어요", meaning: "おいしいです" }
    ] },
  { level: "2", hangul: "그만두다", katakana: "クマンドゥダ", meaning: "やめる",
    example: "회사를 그만둬요.", exampleKatakana: "フェサルル クマンドゥォヨ", exampleMeaning: "会社を辞めます。",
    breakdown: [
      { word: "회사", meaning: "会社" }
    ] },
  { level: "2", hangul: "쌀쌀하다", katakana: "サルサラダ", meaning: "肌寒い",
    example: "날씨가 쌀쌀해요.", exampleKatakana: "ナルシガ サルサレヨ", exampleMeaning: "天気が肌寒いです。",
    breakdown: [
      { word: "날씨", meaning: "天気" }
    ] },
  { level: "2", hangul: "얘기", katakana: "イェギ", meaning: "話",
    example: "얘기 좀 해요.", exampleKatakana: "イェギ チョム ヘヨ", exampleMeaning: "話をしましょう。",
    breakdown: [
      { word: "좀", meaning: "少し" }
    ] },
  { level: "2", hangul: "거의", katakana: "コイ", meaning: "ほとんど",
    example: "거의 다 했어요.", exampleKatakana: "コイ タ ヘッソヨ", exampleMeaning: "ほとんど終わりました。",
    breakdown: [
      { word: "다", meaning: "全部" }
    ] },
  { level: "2", hangul: "중학교", katakana: "チュンハッキョ", meaning: "中学校",
    example: "중학교에 다녀요.", exampleKatakana: "チュンハッキョエ タニョヨ", exampleMeaning: "中学校に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "치약", katakana: "チヤク", meaning: "歯磨き粉",
    example: "치약을 써요.", exampleKatakana: "チヤグル ソヨ", exampleMeaning: "歯磨き粉を使います。",
    breakdown: [
      { word: "써요", meaning: "使います" }
    ] },
  { level: "2", hangul: "교사", katakana: "キョサ", meaning: "教師",
    example: "교사가 되고 싶어요.", exampleKatakana: "キョサガ トェゴ シポヨ", exampleMeaning: "教師になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "그치다", katakana: "クチダ", meaning: "止む",
    example: "비가 그쳤어요.", exampleKatakana: "ピガ クチョッソヨ", exampleMeaning: "雨が止みました。",
    breakdown: [
      { word: "비", meaning: "雨" }
    ] },
  { level: "2", hangul: "결과", katakana: "キョルグァ", meaning: "結果",
    example: "결과가 좋아요.", exampleKatakana: "キョルグァガ チョアヨ", exampleMeaning: "結果が良いです。",
    breakdown: [
      { word: "좋아요", meaning: "良いです" }
    ] },
  { level: "2", hangul: "월급", katakana: "ウォルグプ", meaning: "給料",
    example: "월급을 받아요.", exampleKatakana: "ウォルグブル パダヨ", exampleMeaning: "給料をもらいます。",
    breakdown: [
      { word: "받아요", meaning: "もらいます" }
    ] },
  { level: "2", hangul: "장난감", katakana: "チャンナンガム", meaning: "おもちゃ",
    example: "장난감을 사요.", exampleKatakana: "チャンナンガムル サヨ", exampleMeaning: "おもちゃを買います。",
    breakdown: [
      { word: "사요", meaning: "買います" }
    ] },
  { level: "2", hangul: "중간", katakana: "チュンガン", meaning: "中間",
    example: "중간에 쉬어요.", exampleKatakana: "チュンガネ シュィオヨ", exampleMeaning: "途中で休みます。",
    breakdown: [
      { word: "쉬어요", meaning: "休みます" }
    ] },
  { level: "2", hangul: "속도", katakana: "ソクド", meaning: "速度",
    example: "속도를 줄여요.", exampleKatakana: "ソクドルル チュリョヨ", exampleMeaning: "速度を落とします。",
    breakdown: [
      { word: "줄여요", meaning: "落とします" }
    ] },
  { level: "2", hangul: "한식", katakana: "ハンシク", meaning: "韓国料理",
    example: "한식을 좋아해요.", exampleKatakana: "ハンシグル チョアヘヨ", exampleMeaning: "韓国料理が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "차다", katakana: "チャダ", meaning: "冷たい・満ちる",
    example: "물이 차요.", exampleKatakana: "ムリ チャヨ", exampleMeaning: "水が冷たいです。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "2", hangul: "꽃다발", katakana: "コッタバル", meaning: "花束",
    example: "꽃다발을 줘요.", exampleKatakana: "コッタバルル ジョヨ", exampleMeaning: "花束をあげます。",
    breakdown: [
      { word: "줘요", meaning: "あげます" }
    ] },
  { level: "2", hangul: "변호사", katakana: "ピョノサ", meaning: "弁護士",
    example: "변호사가 되고 싶어요.", exampleKatakana: "ピョノサガ トェゴ シポヨ", exampleMeaning: "弁護士になりたいです。",
    breakdown: [
      { word: "되고 싶어요", meaning: "なりたいです" }
    ] },
  { level: "2", hangul: "역시", katakana: "ヨクシ", meaning: "やはり",
    example: "역시 맛있어요.", exampleKatakana: "ヨクシ マシッソヨ", exampleMeaning: "やはりおいしいです。",
    breakdown: [
      { word: "맛있어요", meaning: "おいしいです" }
    ] },
  { level: "2", hangul: "소중하다", katakana: "ソジュンハダ", meaning: "大切だ",
    example: "가족이 소중해요.", exampleKatakana: "カジョギ ソジュンヘヨ", exampleMeaning: "家族が大切です。",
    breakdown: [
      { word: "가족", meaning: "家族" }
    ] },
  { level: "2", hangul: "식탁", katakana: "シクタク", meaning: "食卓",
    example: "식탁에 앉아요.", exampleKatakana: "シクタゲ アンジャヨ", exampleMeaning: "食卓に座ります。",
    breakdown: [
      { word: "앉아요", meaning: "座ります" }
    ] },
  { level: "2", hangul: "주사", katakana: "チュサ", meaning: "注射",
    example: "주사를 맞아요.", exampleKatakana: "チュサルル マジャヨ", exampleMeaning: "注射を打ちます。",
    breakdown: [
      { word: "맞아요", meaning: "打ちます" }
    ] },
  { level: "2", hangul: "최근", katakana: "チェグン", meaning: "最近",
    example: "최근에 바빠요.", exampleKatakana: "チェグネ パッパヨ", exampleMeaning: "最近忙しいです。",
    breakdown: [
      { word: "바빠요", meaning: "忙しいです" }
    ] },
  { level: "2", hangul: "꿈", katakana: "クム", meaning: "夢",
    example: "꿈을 꿔요.", exampleKatakana: "クムル クォヨ", exampleMeaning: "夢を見ます。",
    breakdown: [
      { word: "꿔요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "사장", katakana: "サジャン", meaning: "社長",
    example: "사장님을 만나요.", exampleKatakana: "サジャンニムル マンナヨ", exampleMeaning: "社長に会います。",
    breakdown: [
      { word: "만나요", meaning: "会います" }
    ] },
  { level: "2", hangul: "선택", katakana: "ソンテク", meaning: "選択",
    example: "선택을 해요.", exampleKatakana: "ソンテグル ヘヨ", exampleMeaning: "選択をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "정도", katakana: "チョンド", meaning: "程度",
    example: "이 정도예요.", exampleKatakana: "イ チョンドエヨ", exampleMeaning: "この程度です。",
    breakdown: [
      { word: "이", meaning: "この" }
    ] },
  { level: "2", hangul: "마치다", katakana: "マチダ", meaning: "終える",
    example: "일을 마쳐요.", exampleKatakana: "イルル マチョヨ", exampleMeaning: "仕事を終えます。",
    breakdown: [
      { word: "일", meaning: "仕事" }
    ] },
  { level: "2", hangul: "혹시", katakana: "ホクシ", meaning: "もしかして",
    example: "혹시 시간 있어요?", exampleKatakana: "ホクシ シガン イッソヨ", exampleMeaning: "もしかして時間ありますか。",
    breakdown: [
      { word: "시간", meaning: "時間" }
    ] },
  { level: "2", hangul: "색깔", katakana: "セッカル", meaning: "色",
    example: "무슨 색깔을 좋아해요?", exampleKatakana: "ムスン セッカルル チョアヘヨ", exampleMeaning: "何色が好きですか。",
    breakdown: [
      { word: "좋아해요", meaning: "好きですか" }
    ] },
  { level: "2", hangul: "힘", katakana: "ヒム", meaning: "力",
    example: "힘이 세요.", exampleKatakana: "ヒミ セヨ", exampleMeaning: "力が強いです。",
    breakdown: [
      { word: "세요", meaning: "強いです" }
    ] },
  { level: "2", hangul: "마지막", katakana: "マジマク", meaning: "最後",
    example: "마지막 기회예요.", exampleKatakana: "マジマク キフェエヨ", exampleMeaning: "最後のチャンスです。",
    breakdown: [
      { word: "기회", meaning: "チャンス" }
    ] },
  { level: "2", hangul: "덕분", katakana: "トクブン", meaning: "おかげ",
    example: "덕분에 잘 지내요.", exampleKatakana: "トクブネ チャル チネヨ", exampleMeaning: "おかげで元気です。",
    breakdown: [
      { word: "잘 지내요", meaning: "元気です" }
    ] },
  { level: "2", hangul: "한글", katakana: "ハングル", meaning: "ハングル",
    example: "한글을 배워요.", exampleKatakana: "ハングルル ペウォヨ", exampleMeaning: "ハングルを学びます。",
    breakdown: [
      { word: "배워요", meaning: "学びます" }
    ] },
  { level: "2", hangul: "눈물", katakana: "ヌンムル", meaning: "涙",
    example: "눈물이 나요.", exampleKatakana: "ヌンムリ ナヨ", exampleMeaning: "涙が出ます。",
    breakdown: [
      { word: "나요", meaning: "出ます" }
    ] },
  { level: "2", hangul: "이틀", katakana: "イトゥル", meaning: "二日",
    example: "이틀 후에 만나요.", exampleKatakana: "イトゥル フエ マンナヨ", exampleMeaning: "二日後に会いましょう。",
    breakdown: [
      { word: "후", meaning: "後" }
    ] },
  { level: "2", hangul: "두통", katakana: "トゥトン", meaning: "頭痛",
    example: "두통이 있어요.", exampleKatakana: "トゥトンイ イッソヨ", exampleMeaning: "頭痛があります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "음료", katakana: "ウムリョ", meaning: "飲み物",
    example: "음료를 마셔요.", exampleKatakana: "ウムリョルル マショヨ", exampleMeaning: "飲み物を飲みます。",
    breakdown: [
      { word: "마셔요", meaning: "飲みます" }
    ] },
  { level: "2", hangul: "공장", katakana: "コンジャン", meaning: "工場",
    example: "공장에서 일해요.", exampleKatakana: "コンジャンエソ イレヨ", exampleMeaning: "工場で働きます。",
    breakdown: [
      { word: "일해요", meaning: "働きます" }
    ] },
  { level: "2", hangul: "동쪽", katakana: "トンチョク", meaning: "東側",
    example: "동쪽으로 가요.", exampleKatakana: "トンチョグロ カヨ", exampleMeaning: "東側に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "선배", katakana: "ソンベ", meaning: "先輩",
    example: "선배와 이야기해요.", exampleKatakana: "ソンベワ イヤギヘヨ", exampleMeaning: "先輩と話します。",
    breakdown: [
      { word: "이야기해요", meaning: "話します" }
    ] },
  { level: "2", hangul: "중심", katakana: "チュンシム", meaning: "中心",
    example: "도시 중심이에요.", exampleKatakana: "トシ チュンシミエヨ", exampleMeaning: "都市の中心です。",
    breakdown: [
      { word: "도시", meaning: "都市" }
    ] },
  { level: "2", hangul: "시골", katakana: "シゴル", meaning: "田舎",
    example: "시골에서 살아요.", exampleKatakana: "シゴレソ サラヨ", exampleMeaning: "田舎で暮らしています。",
    breakdown: [
      { word: "살아요", meaning: "暮らしています" }
    ] },
  { level: "2", hangul: "가득", katakana: "カドゥク", meaning: "いっぱい",
    example: "물을 가득 채워요.", exampleKatakana: "ムルル カドゥク チェウォヨ", exampleMeaning: "水をいっぱい入れます。",
    breakdown: [
      { word: "물", meaning: "水" }
    ] },
  { level: "2", hangul: "건너가다", katakana: "コンノガダ", meaning: "渡っていく",
    example: "길을 건너가요.", exampleKatakana: "キルル コンノガヨ", exampleMeaning: "道を渡っていきます。",
    breakdown: [
      { word: "길", meaning: "道" }
    ] },
  { level: "2", hangul: "종이", katakana: "チョンイ", meaning: "紙",
    example: "종이에 써요.", exampleKatakana: "チョンイエ ソヨ", exampleMeaning: "紙に書きます。",
    breakdown: [
      { word: "써요", meaning: "書きます" }
    ] },
  { level: "2", hangul: "고장", katakana: "コジャン", meaning: "故障",
    example: "기계가 고장 났어요.", exampleKatakana: "キゲガ コジャン ナッソヨ", exampleMeaning: "機械が故障しました。",
    breakdown: [
      { word: "기계", meaning: "機械" }
    ] },
  { level: "2", hangul: "취소", katakana: "チュィソ", meaning: "取り消し",
    example: "예약을 취소해요.", exampleKatakana: "イェヤグル チュィソヘヨ", exampleMeaning: "予約を取り消します。",
    breakdown: [
      { word: "예약", meaning: "予約" }
    ] },
  { level: "2", hangul: "전철", katakana: "チョンチョル", meaning: "電車",
    example: "전철을 타요.", exampleKatakana: "チョンチョルル タヨ", exampleMeaning: "電車に乗ります。",
    breakdown: [
      { word: "타요", meaning: "乗ります" }
    ] },
  { level: "2", hangul: "떨어지다", katakana: "トロジダ", meaning: "落ちる",
    example: "가방이 떨어져요.", exampleKatakana: "カバンイ トロジョヨ", exampleMeaning: "かばんが落ちます。",
    breakdown: [
      { word: "가방", meaning: "かばん" }
    ] },
  { level: "2", hangul: "회색", katakana: "フェセク", meaning: "灰色",
    example: "회색 옷을 입어요.", exampleKatakana: "フェセク オスル イボヨ", exampleMeaning: "灰色の服を着ます。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "손가락", katakana: "ソンカラク", meaning: "指",
    example: "손가락이 아파요.", exampleKatakana: "ソンカラギ アパヨ", exampleMeaning: "指が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "동물", katakana: "トンムル", meaning: "動物",
    example: "동물을 좋아해요.", exampleKatakana: "トンムルル チョアヘヨ", exampleMeaning: "動物が好きです。",
    breakdown: [
      { word: "좋아해요", meaning: "好きです" }
    ] },
  { level: "2", hangul: "방향", katakana: "パンヒャン", meaning: "方向",
    example: "방향을 몰라요.", exampleKatakana: "パンヒャンウル モルラヨ", exampleMeaning: "方向が分かりません。",
    breakdown: [
      { word: "몰라요", meaning: "分かりません" }
    ] },
  { level: "2", hangul: "길이", katakana: "キリ", meaning: "長さ",
    example: "길이를 재요.", exampleKatakana: "キリルル チェヨ", exampleMeaning: "長さを測ります。",
    breakdown: [
      { word: "재요", meaning: "測ります" }
    ] },
  { level: "2", hangul: "뛰다", katakana: "トゥィダ", meaning: "走る",
    example: "빨리 뛰어요.", exampleKatakana: "パルリ トゥィオヨ", exampleMeaning: "早く走ります。",
    breakdown: [
      { word: "빨리", meaning: "早く" }
    ] },
  { level: "2", hangul: "안개", katakana: "アンゲ", meaning: "霧",
    example: "안개가 껴요.", exampleKatakana: "アンゲガ キョヨ", exampleMeaning: "霧がかかります。",
    breakdown: [
      { word: "껴요", meaning: "かかります" }
    ] },
  { level: "2", hangul: "계산", katakana: "ケサン", meaning: "計算・会計",
    example: "계산을 해요.", exampleKatakana: "ケサヌル ヘヨ", exampleMeaning: "会計をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "붙다", katakana: "プッタ", meaning: "くっつく・合格する",
    example: "시험에 붙었어요.", exampleKatakana: "シホメ プトッソヨ", exampleMeaning: "試験に合格しました。",
    breakdown: [
      { word: "시험", meaning: "試験" }
    ] },
  { level: "2", hangul: "동물원", katakana: "トンムルォン", meaning: "動物園",
    example: "동물원에 가요.", exampleKatakana: "トンムルォネ カヨ", exampleMeaning: "動物園に行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "출구", katakana: "チュルグ", meaning: "出口",
    example: "출구가 어디예요?", exampleKatakana: "チュルグガ オディエヨ", exampleMeaning: "出口はどこですか。",
    breakdown: [
      { word: "어디", meaning: "どこ" }
    ] },
  { level: "2", hangul: "사업", katakana: "サオプ", meaning: "事業",
    example: "사업을 해요.", exampleKatakana: "サオブル ヘヨ", exampleMeaning: "事業をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "심다", katakana: "シムタ", meaning: "植える",
    example: "나무를 심어요.", exampleKatakana: "ナムルル シモヨ", exampleMeaning: "木を植えます。",
    breakdown: [
      { word: "나무", meaning: "木" }
    ] },
  { level: "2", hangul: "어린이", katakana: "オリニ", meaning: "子供",
    example: "어린이가 놀아요.", exampleKatakana: "オリニガ ノラヨ", exampleMeaning: "子供が遊びます。",
    breakdown: [
      { word: "놀아요", meaning: "遊びます" }
    ] },
  { level: "2", hangul: "소리", katakana: "ソリ", meaning: "音",
    example: "소리가 커요.", exampleKatakana: "ソリガ コヨ", exampleMeaning: "音が大きいです。",
    breakdown: [
      { word: "커요", meaning: "大きいです" }
    ] },
  { level: "2", hangul: "공휴일", katakana: "コンヒュイル", meaning: "祝日",
    example: "오늘은 공휴일이에요.", exampleKatakana: "オヌルン コンヒュイリエヨ", exampleMeaning: "今日は祝日です。",
    breakdown: [
      { word: "오늘", meaning: "今日" }
    ] },
  { level: "2", hangul: "이제", katakana: "イジェ", meaning: "もう・今",
    example: "이제 가요.", exampleKatakana: "イジェ カヨ", exampleMeaning: "もう行きます。",
    breakdown: [
      { word: "가요", meaning: "行きます" }
    ] },
  { level: "2", hangul: "도로", katakana: "トロ", meaning: "道路",
    example: "도로가 넓어요.", exampleKatakana: "トロガ ノルボヨ", exampleMeaning: "道路が広いです。",
    breakdown: [
      { word: "넓어요", meaning: "広いです" }
    ] },
  { level: "2", hangul: "식구", katakana: "シック", meaning: "家族",
    example: "식구가 몇 명이에요?", exampleKatakana: "シックガ ミョッ ミョンイエヨ", exampleMeaning: "家族は何人ですか。",
    breakdown: [
      { word: "몇", meaning: "何" }
    ] },
  { level: "2", hangul: "화나다", katakana: "ファナダ", meaning: "腹が立つ",
    example: "정말 화나요.", exampleKatakana: "チョンマル ファナヨ", exampleMeaning: "本当に腹が立ちます。",
    breakdown: [
      { word: "정말", meaning: "本当に" }
    ] },
  { level: "2", hangul: "상", katakana: "サン", meaning: "賞・テーブル",
    example: "상을 받아요.", exampleKatakana: "サンウル パダヨ", exampleMeaning: "賞をもらいます。",
    breakdown: [
      { word: "받아요", meaning: "もらいます" }
    ] },
  { level: "2", hangul: "고민", katakana: "コミン", meaning: "悩み",
    example: "고민이 있어요.", exampleKatakana: "コミニ イッソヨ", exampleMeaning: "悩みがあります。",
    breakdown: [
      { word: "있어요", meaning: "あります" }
    ] },
  { level: "2", hangul: "돼지", katakana: "トェジ", meaning: "豚",
    example: "돼지를 키워요.", exampleKatakana: "トェジルル キウォヨ", exampleMeaning: "豚を飼います。",
    breakdown: [
      { word: "키워요", meaning: "飼います" }
    ] },
  { level: "2", hangul: "동네", katakana: "トンネ", meaning: "町・近所",
    example: "동네가 조용해요.", exampleKatakana: "トンネガ チョヨンヘヨ", exampleMeaning: "近所が静かです。",
    breakdown: [
      { word: "조용해요", meaning: "静かです" }
    ] },
  { level: "2", hangul: "추석", katakana: "チュソク", meaning: "秋夕（韓国の秋の祝日）",
    example: "추석에 가족을 만나요.", exampleKatakana: "チュソゲ カジョグル マンナヨ", exampleMeaning: "秋夕に家族に会います。",
    breakdown: [
      { word: "가족", meaning: "家族" }
    ] },
  { level: "2", hangul: "기억나다", katakana: "キオンナダ", meaning: "思い出す",
    example: "이름이 기억나요.", exampleKatakana: "イルミ キオンナヨ", exampleMeaning: "名前を思い出します。",
    breakdown: [
      { word: "이름", meaning: "名前" }
    ] },
  { level: "2", hangul: "예술", katakana: "イェスル", meaning: "芸術",
    example: "예술을 사랑해요.", exampleKatakana: "イェスルル サランヘヨ", exampleMeaning: "芸術を愛します。",
    breakdown: [
      { word: "사랑해요", meaning: "愛します" }
    ] },
  { level: "2", hangul: "환영", katakana: "フェニョン", meaning: "歓迎",
    example: "환영합니다.", exampleKatakana: "フェニョンハムニダ", exampleMeaning: "歓迎します。",
    breakdown: [
      { word: "합니다", meaning: "します" }
    ] },
  { level: "2", hangul: "가슴", katakana: "カスム", meaning: "胸",
    example: "가슴이 아파요.", exampleKatakana: "カスミ アパヨ", exampleMeaning: "胸が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "역사", katakana: "ヨクサ", meaning: "歴史",
    example: "역사를 공부해요.", exampleKatakana: "ヨクサルル コンブヘヨ", exampleMeaning: "歴史を勉強します。",
    breakdown: [
      { word: "공부", meaning: "勉強" }
    ] },
  { level: "2", hangul: "모습", katakana: "モスプ", meaning: "姿",
    example: "변한 모습이에요.", exampleKatakana: "ピョナン モスビエヨ", exampleMeaning: "変わった姿です。",
    breakdown: [
      { word: "변한", meaning: "変わった" }
    ] },
  { level: "2", hangul: "잃다", katakana: "イルタ", meaning: "失う",
    example: "돈을 잃었어요.", exampleKatakana: "トヌル イロッソヨ", exampleMeaning: "お金を失いました。",
    breakdown: [
      { word: "돈", meaning: "お金" }
    ] },
  { level: "2", hangul: "소식", katakana: "ソシク", meaning: "便り",
    example: "소식을 전해요.", exampleKatakana: "ソシグル チョネヨ", exampleMeaning: "便りを伝えます。",
    breakdown: [
      { word: "전해요", meaning: "伝えます" }
    ] },
  { level: "2", hangul: "시끄럽다", katakana: "シックロプタ", meaning: "うるさい",
    example: "밖이 시끄러워요.", exampleKatakana: "パッキ シックロウォヨ", exampleMeaning: "外がうるさいです。",
    breakdown: [
      { word: "밖", meaning: "外" }
    ] },
  { level: "2", hangul: "간단하다", katakana: "カンダンハダ", meaning: "簡単だ",
    example: "이 요리는 간단해요.", exampleKatakana: "イ ヨリヌン カンダネヨ", exampleMeaning: "この料理は簡単です。",
    breakdown: [
      { word: "요리", meaning: "料理" }
    ] },
  { level: "2", hangul: "시계", katakana: "シゲ", meaning: "時計",
    example: "시계를 봐요.", exampleKatakana: "シゲルル バヨ", exampleMeaning: "時計を見ます。",
    breakdown: [
      { word: "봐요", meaning: "見ます" }
    ] },
  { level: "2", hangul: "닦다", katakana: "タクタ", meaning: "拭く",
    example: "이를 닦아요.", exampleKatakana: "イルル タッカヨ", exampleMeaning: "歯を磨きます。",
    breakdown: [
      { word: "이", meaning: "歯" }
    ] },
  { level: "2", hangul: "그대로", katakana: "クデロ", meaning: "そのまま",
    example: "그대로 두세요.", exampleKatakana: "クデロ トゥセヨ", exampleMeaning: "そのままにしてください。",
    breakdown: [
      { word: "두세요", meaning: "置いてください" }
    ] },
  { level: "2", hangul: "국제", katakana: "ククチェ", meaning: "国際",
    example: "국제 회의예요.", exampleKatakana: "ククチェ フェイエヨ", exampleMeaning: "国際会議です。",
    breakdown: [
      { word: "회의", meaning: "会議" }
    ] },
  { level: "2", hangul: "팔리다", katakana: "パルリダ", meaning: "売れる",
    example: "이 물건이 잘 팔려요.", exampleKatakana: "イ ムルゴニ チャル パルリョヨ", exampleMeaning: "この品物がよく売れます。",
    breakdown: [
      { word: "물건", meaning: "品物" }
    ] },
  { level: "2", hangul: "곧", katakana: "コッ", meaning: "すぐに",
    example: "곧 도착해요.", exampleKatakana: "コッ トチャケヨ", exampleMeaning: "すぐに到着します。",
    breakdown: [
      { word: "도착", meaning: "到着" }
    ] },
  { level: "2", hangul: "전부", katakana: "チョンブ", meaning: "全部",
    example: "전부 먹었어요.", exampleKatakana: "チョンブ モゴッソヨ", exampleMeaning: "全部食べました。",
    breakdown: [
      { word: "먹었어요", meaning: "食べました" }
    ] },
  { level: "2", hangul: "아무리", katakana: "アムリ", meaning: "いくら〜しても",
    example: "아무리 힘들어도 괜찮아요.", exampleKatakana: "アムリ ヒムドゥロド クェンチャナヨ", exampleMeaning: "いくら大変でも大丈夫です。",
    breakdown: [
      { word: "힘들어도", meaning: "大変でも" }
    ] },
  { level: "2", hangul: "모기", katakana: "モギ", meaning: "蚊",
    example: "모기에 물렸어요.", exampleKatakana: "モギエ ムルリョッソヨ", exampleMeaning: "蚊に刺されました。",
    breakdown: [
      { word: "물렸어요", meaning: "刺されました" }
    ] },
  { level: "2", hangul: "빨다", katakana: "パルダ", meaning: "洗う・吸う",
    example: "옷을 빨아요.", exampleKatakana: "オスル パラヨ", exampleMeaning: "服を洗います。",
    breakdown: [
      { word: "옷", meaning: "服" }
    ] },
  { level: "2", hangul: "착하다", katakana: "チャカダ", meaning: "優しい",
    example: "착한 사람이에요.", exampleKatakana: "チャカン サラミエヨ", exampleMeaning: "優しい人です。",
    breakdown: [
      { word: "사람", meaning: "人" }
    ] },
  { level: "2", hangul: "점심시간", katakana: "チョムシムシガン", meaning: "昼休み",
    example: "점심시간이에요.", exampleKatakana: "チョムシムシガニエヨ", exampleMeaning: "昼休みです。",
    breakdown: [
      { word: "이에요", meaning: "です" }
    ] },
  { level: "2", hangul: "외롭다", katakana: "ウェロプタ", meaning: "寂しい",
    example: "혼자라서 외로워요.", exampleKatakana: "ホンジャラソ ウェロウォヨ", exampleMeaning: "一人で寂しいです。",
    breakdown: [
      { word: "혼자", meaning: "一人で" }
    ] },
  { level: "2", hangul: "연락", katakana: "ヨルラク", meaning: "連絡",
    example: "연락을 해요.", exampleKatakana: "ヨルラグル ヘヨ", exampleMeaning: "連絡をします。",
    breakdown: [
      { word: "해요", meaning: "します" }
    ] },
  { level: "2", hangul: "입학", katakana: "イパク", meaning: "入学",
    example: "대학교에 입학해요.", exampleKatakana: "テハッキョエ イパケヨ", exampleMeaning: "大学に入学します。",
    breakdown: [
      { word: "대학교", meaning: "大学" }
    ] },
  { level: "2", hangul: "강하다", katakana: "カンハダ", meaning: "強い",
    example: "마음이 강해요.", exampleKatakana: "マウミ カンヘヨ", exampleMeaning: "心が強いです。",
    breakdown: [
      { word: "마음", meaning: "心" }
    ] },
  { level: "2", hangul: "어리다", katakana: "オリダ", meaning: "幼い",
    example: "아직 어려요.", exampleKatakana: "アジク オリョヨ", exampleMeaning: "まだ幼いです。",
    breakdown: [
      { word: "아직", meaning: "まだ" }
    ] },
  { level: "2", hangul: "출장", katakana: "チュルジャン", meaning: "出張",
    example: "일본으로 출장 가요.", exampleKatakana: "イルボヌロ チュルジャン カヨ", exampleMeaning: "日本に出張に行きます。",
    breakdown: [
      { word: "일본", meaning: "日本" }
    ] },
  { level: "2", hangul: "다양", katakana: "タヤン", meaning: "多様",
    example: "다양한 음식이 있어요.", exampleKatakana: "タヤンハン ウムシギ イッソヨ", exampleMeaning: "多様な料理があります。",
    breakdown: [
      { word: "음식", meaning: "料理" }
    ] },
  { level: "2", hangul: "직접", katakana: "チクチョプ", meaning: "直接",
    example: "직접 만들어요.", exampleKatakana: "チクチョプ マンドゥロヨ", exampleMeaning: "直接作ります。",
    breakdown: [
      { word: "만들어요", meaning: "作ります" }
    ] },
  { level: "2", hangul: "새벽", katakana: "セビョク", meaning: "明け方",
    example: "새벽에 일어나요.", exampleKatakana: "セビョゲ イロナヨ", exampleMeaning: "明け方に起きます。",
    breakdown: [
      { word: "일어나요", meaning: "起きます" }
    ] },
  { level: "2", hangul: "취직", katakana: "チュィジク", meaning: "就職",
    example: "회사에 취직했어요.", exampleKatakana: "フェサエ チュィジケッソヨ", exampleMeaning: "会社に就職しました。",
    breakdown: [
      { word: "회사", meaning: "会社" }
    ] },
  { level: "2", hangul: "이", katakana: "イ", meaning: "歯・この",
    example: "이가 아파요.", exampleKatakana: "イガ アパヨ", exampleMeaning: "歯が痛いです。",
    breakdown: [
      { word: "아파요", meaning: "痛いです" }
    ] },
  { level: "2", hangul: "직장", katakana: "チクチャン", meaning: "職場",
    example: "직장에 다녀요.", exampleKatakana: "チクチャンエ タニョヨ", exampleMeaning: "職場に通っています。",
    breakdown: [
      { word: "다녀요", meaning: "通っています" }
    ] },
  { level: "2", hangul: "훨씬", katakana: "ホルシン", meaning: "はるかに",
    example: "이게 훨씬 좋아요.", exampleKatakana: "イゲ ホルシン チョアヨ", exampleMeaning: "これがはるかに良いです。",
    breakdown: [
      { word: "이게", meaning: "これが" }
    ] },
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
