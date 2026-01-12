window.VOCAB_NOTE = {
    "number": { "en-US": "Number", "zh-TW": "數字", "ko-KR": "숫자", "ja-JP": "数字/番号" },
    "count": { "en-US": "Count", "zh-TW": "數量", "ko-KR": "개수", "ja-JP": "個数" },
    "present": { "en-US": "Present", "zh-TW": "現在式", "ko-KR": "현재형", "ja-JP": "現在形" },
    "past": { "en-US": "Past", "zh-TW": "過去式", "ko-KR": "과거형", "ja-JP": "過去形" },
    "polite_present": { "en-US": "Polite Present", "zh-TW": "敬語 (現在)", "ko-KR": "존댓말 (현재)", "ja-JP": "丁寧語 (現在)" },
    "polite_past": { "en-US": "Polite Past", "zh-TW": "敬語 (過去)", "ko-KR": "존댓말 (과거)", "ja-JP": "丁寧語 (過去)" },
    "formal": { "en-US": "Formal", "zh-TW": "正式", "ko-KR": "공손함", "ja-JP": "正式的" },
    "casual": { "en-US": "Casual", "zh-TW": "日常", "ko-KR": "친근함", "ja-JP": "日常的" },
    "shopping": { "en-US": "Shopping", "zh-TW": "購物用語", "ko-KR": "쇼핑", "ja-JP": "買い物" }
};

window.VOCAB_DATA = [
    {
        "id": "basic",
        "category": {
            "zh-TW": "日常慣用句",
            "en-US": "Basic Phrases",
            "ko-KR": "기본 표현",
            "ja-JP": "基本表現"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "你好", "phonetic": "" }],
                "en-US": [{ "text": "Hello", "phonetic": "" }],
                "ko-KR": [{ "text": "안녕하세요", "phonetic": "An-nyeong-ha-se-yo" }],
                "ja-JP": [{ "text": "こんにちは", "phonetic": "Konnichiwa" }]
            },
            {
                "zh-TW": [{ "text": "謝謝", "phonetic": "" }],
                "en-US": [{ "text": "Thank you", "phonetic": "" }],
                "ko-KR": [
                    { "text": "감사합니다", "phonetic": "Gam-sa-ham-ni-da", "note": "formal" },
                    { "text": "고마워요", "phonetic": "Go-ma-wo-yo", "note": "casual" }
                ],
                "ja-JP": [{ "text": "ありがとうございます", "phonetic": "Arigatou gozaimasu" }]
            },
            {
                "zh-TW": [{ "text": "是", "phonetic": "" }],
                "en-US": [{ "text": "Yes", "phonetic": "" }],
                "ko-KR": [{ "text": "네", "phonetic": "Ne" }],
                "ja-JP": [{ "text": "はい", "phonetic": "Hai" }]
            },
            {
                "zh-TW": [{ "text": "不是", "phonetic": "" }],
                "en-US": [{ "text": "No", "phonetic": "" }],
                "ko-KR": [{ "text": "아니요", "phonetic": "A-ni-yo" }],
                "ja-JP": [{ "text": "いいえ", "phonetic": "Iie" }]
            },
            {
                "zh-TW": [{ "text": "不好意思", "phonetic": "" }],
                "en-US": [{ "text": "Excuse me", "phonetic": "" }],
                "ko-KR": [{ "text": "실례합니다", "phonetic": "Sil-lye-ham-ni-da" }],
                "ja-JP": [{ "text": "すみません", "phonetic": "Sumimasen" }]
            },
            {
                "zh-TW": [{ "text": "對不起", "phonetic": "" }],
                "en-US": [{ "text": "I am sorry", "phonetic": "" }],
                "ko-KR": [{ "text": "죄송합니다", "phonetic": "Joe-song-ham-ni-da" }],
                "ja-JP": [{ "text": "ごめんなさい", "phonetic": "Gomennasai" }]
            },
            {
                "zh-TW": [{ "text": "救命", "phonetic": "" }],
                "en-US": [{ "text": "Help!", "phonetic": "" }],
                "ko-KR": [{ "text": "도와주세요", "phonetic": "Do-wa-ju-se-yo" }],
                "ja-JP": [{ "text": "助けて", "phonetic": "Tasukete" }]
            },
            {
                "zh-TW": [{ "text": "我聽不懂", "phonetic": "" }],
                "en-US": [{ "text": "I don't understand", "phonetic": "" }],
                "ko-KR": [{ "text": "이해가 안 돼요", "phonetic": "I-hae-ga an dwae-yo" }],
                "ja-JP": [{ "text": "わかりません", "phonetic": "Wakarimasen" }]
            },
            {
                "zh-TW": [{ "text": "你會說英文嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Do you speak English?", "phonetic": "" }],
                "ko-KR": [{ "text": "영어 할 수 있어요?", "phonetic": "Yeong-eo hal su is-seo-yo?" }],
                "ja-JP": [{ "text": "英語を話せますか", "phonetic": "Eigo o hanasemasu ka" }]
            },
            {
                "zh-TW": [{ "text": "在哪裡？", "phonetic": "" }],
                "en-US": [{ "text": "Where is it?", "phonetic": "" }],
                "ko-KR": [{ "text": "어디예요?", "phonetic": "Eo-di-ye-yo?" }],
                "ja-JP": [{ "text": "どこですか", "phonetic": "Doko desu ka" }]
            },
            {
                "zh-TW": [{ "text": "什麼時候？", "phonetic": "" }],
                "en-US": [{ "text": "When?", "phonetic": "" }],
                "ko-KR": [{ "text": "언제예요?", "phonetic": "Eon-je-ye-yo?" }],
                "ja-JP": [{ "text": "いつですか", "phonetic": "Itsu desu ka" }]
            },
            {
                "zh-TW": [{ "text": "為什麼？", "phonetic": "" }],
                "en-US": [{ "text": "Why?", "phonetic": "" }],
                "ko-KR": [{ "text": "왜요?", "phonetic": "Wae-yo?" }],
                "ja-JP": [{ "text": "なぜですか", "phonetic": "Naze desu ka" }]
            },
            {
                "zh-TW": [{ "text": "早安", "phonetic": "" }],
                "en-US": [{ "text": "Good morning", "phonetic": "" }],
                "ko-KR": [{ "text": "좋은 아침입니다", "phonetic": "Jo-eun a-chim-im-ni-da" }],
                "ja-JP": [{ "text": "おはようございます", "phonetic": "Ohayou gozaimasu" }]
            },
            {
                "zh-TW": [{ "text": "晚安", "phonetic": "" }],
                "en-US": [{ "text": "Good night", "phonetic": "" }],
                "ko-KR": [{ "text": "안녕히 주무세요", "phonetic": "An-nyeong-hi ju-mu-se-yo" }],
                "ja-JP": [{ "text": "おやすみなさい", "phonetic": "Oyasuminasai" }]
            },
            {
                "zh-TW": [{ "text": "再見", "phonetic": "" }],
                "en-US": [{ "text": "Goodbye", "phonetic": "" }],
                "ko-KR": [{ "text": "안녕히 가세요", "phonetic": "An-nyeong-hi ga-se-yo" }],
                "ja-JP": [{ "text": "さようなら", "phonetic": "Sayounara" }]
            },
            {
                "zh-TW": [{ "text": "我來自...", "phonetic": "" }],
                "en-US": [{ "text": "I am from...", "phonetic": "" }],
                "ko-KR": [{ "text": "저는 ...에서 왔어요", "phonetic": "Jeo-neun ...-e-seo wa-sseo-yo" }],
                "ja-JP": [{ "text": "私は...から来ました", "phonetic": "Watashi wa ... kara kimashita" }]
            }
        ]
    },
    {
        "id": "numbers",
        "category": {
            "zh-TW": "數字與日期",
            "en-US": "Numbers & Date",
            "ko-KR": "숫자와 날짜",
            "ja-JP": "数字と日付"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "一", "phonetic": "Yī" }],
                "en-US": [{ "text": "One", "phonetic": "" }],
                "ko-KR": [
                    { "text": "일", "phonetic": "il", "note": "number" },
                    { "text": "하나", "phonetic": "hana", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "いち", "phonetic": "ichi", "note": "number" },
                    { "text": "ひとつ", "phonetic": "hitotsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "二", "phonetic": "Èr" }],
                "en-US": [{ "text": "Two", "phonetic": "" }],
                "ko-KR": [
                    { "text": "이", "phonetic": "i", "note": "number" },
                    { "text": "둘", "phonetic": "dul", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "に", "phonetic": "ni", "note": "number" },
                    { "text": "ふたつ", "phonetic": "futatsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "三", "phonetic": "Sān" }],
                "en-US": [{ "text": "Three", "phonetic": "" }],
                "ko-KR": [
                    { "text": "삼", "phonetic": "sam", "note": "number" },
                    { "text": "셋", "phonetic": "set", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "さん", "phonetic": "san", "note": "number" },
                    { "text": "みっつ", "phonetic": "mittsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "四", "phonetic": "Sì" }],
                "en-US": [{ "text": "Four", "phonetic": "" }],
                "ko-KR": [
                    { "text": "사", "phonetic": "sa", "note": "number" },
                    { "text": "넷", "phonetic": "net", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "よん", "phonetic": "yon", "note": "number" },
                    { "text": "よっつ", "phonetic": "yottsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "五", "phonetic": "Wǔ" }],
                "en-US": [{ "text": "Five", "phonetic": "" }],
                "ko-KR": [
                    { "text": "오", "phonetic": "o", "note": "number" },
                    { "text": "다섯", "phonetic": "daseot", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "ご", "phonetic": "go", "note": "number" },
                    { "text": "いつつ", "phonetic": "itsutsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "六", "phonetic": "Liù" }],
                "en-US": [{ "text": "Six", "phonetic": "" }],
                "ko-KR": [
                    { "text": "육", "phonetic": "yuk", "note": "number" },
                    { "text": "여섯", "phonetic": "yeoseot", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "ろく", "phonetic": "roku", "note": "number" },
                    { "text": "むっつ", "phonetic": "muttsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "七", "phonetic": "Qī" }],
                "en-US": [{ "text": "Seven", "phonetic": "" }],
                "ko-KR": [
                    { "text": "칠", "phonetic": "chil", "note": "number" },
                    { "text": "일곱", "phonetic": "ilgop", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "なな", "phonetic": "nana", "note": "number" },
                    { "text": "ななつ", "phonetic": "nanatsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "八", "phonetic": "Bā" }],
                "en-US": [{ "text": "Eight", "phonetic": "" }],
                "ko-KR": [
                    { "text": "팔", "phonetic": "pal", "note": "number" },
                    { "text": "여덟", "phonetic": "yeodeol", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "はち", "phonetic": "hachi", "note": "number" },
                    { "text": "やっつ", "phonetic": "yattsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "九", "phonetic": "Jiǔ" }],
                "en-US": [{ "text": "Nine", "phonetic": "" }],
                "ko-KR": [
                    { "text": "구", "phonetic": "gu", "note": "number" },
                    { "text": "아홉", "phonetic": "ahop", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "きゅう", "phonetic": "kyuu", "note": "number" },
                    { "text": "ここのつ", "phonetic": "kokonotsu", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "十", "phonetic": "Shí" }],
                "en-US": [{ "text": "Ten", "phonetic": "" }],
                "ko-KR": [
                    { "text": "십", "phonetic": "sip", "note": "number" },
                    { "text": "열", "phonetic": "yeol", "note": "count" }
                ],
                "ja-JP": [
                    { "text": "じゅう", "phonetic": "juu", "note": "number" },
                    { "text": "とお", "phonetic": "too", "note": "count" }
                ]
            },
            {
                "zh-TW": [{ "text": "百", "phonetic": "" }],
                "en-US": [{ "text": "Hundred", "phonetic": "" }],
                "ko-KR": [{ "text": "백", "phonetic": "baek" }],
                "ja-JP": [{ "text": "ひゃく", "phonetic": "hyaku" }]
            },
            {
                "zh-TW": [{ "text": "千", "phonetic": "" }],
                "en-US": [{ "text": "Thousand", "phonetic": "" }],
                "ko-KR": [{ "text": "천", "phonetic": "cheon" }],
                "ja-JP": [{ "text": "せん", "phonetic": "sen" }]
            },
            {
                "zh-TW": [{ "text": "萬", "phonetic": "" }],
                "en-US": [{ "text": "Ten thousand", "phonetic": "" }],
                "ko-KR": [{ "text": "만", "phonetic": "man" }],
                "ja-JP": [{ "text": "まん", "phonetic": "man" }]
            },
            {
                "zh-TW": [{ "text": "五千三百", "phonetic": "5,300" }],
                "en-US": [{ "text": "5,300", "phonetic": "" }],
                "ko-KR": [{ "text": "오천삼백", "phonetic": "o-cheon-sam-baek" }],
                "ja-JP": [{ "text": "五千三百 (ごせんさんびゃく)", "phonetic": "gosen sanbyaku" }]
            },
            {
                "zh-TW": [{ "text": "二十四萬", "phonetic": "240,000" }],
                "en-US": [{ "text": "240,000", "phonetic": "" }],
                "ko-KR": [{ "text": "이십사만", "phonetic": "i-sip-sa-man" }],
                "ja-JP": [{ "text": "二十四万 (にじゅうよんまん)", "phonetic": "nijuyonman" }]
            },
            {
                "zh-TW": [{ "text": "一百萬", "phonetic": "1,000,000" }],
                "en-US": [{ "text": "One million", "phonetic": "" }],
                "ko-KR": [{ "text": "백만", "phonetic": "baek-man" }],
                "ja-JP": [{ "text": "百万 (ひゃくまん)", "phonetic": "hyakuman" }]
            },
            {
                "zh-TW": [{ "text": "星期一", "phonetic": "" }],
                "en-US": [{ "text": "Monday", "phonetic": "" }],
                "ko-KR": [{ "text": "월요일", "phonetic": "Wor-yo-il" }],
                "ja-JP": [{ "text": "月曜日", "phonetic": "Getsuyoubi" }]
            },
            {
                "zh-TW": [{ "text": "星期二", "phonetic": "" }],
                "en-US": [{ "text": "Tuesday", "phonetic": "" }],
                "ko-KR": [{ "text": "화요일", "phonetic": "Hwa-yo-il" }],
                "ja-JP": [{ "text": "火曜日", "phonetic": "Kayoubi" }]
            },
            {
                "zh-TW": [{ "text": "星期三", "phonetic": "" }],
                "en-US": [{ "text": "Wednesday", "phonetic": "" }],
                "ko-KR": [{ "text": "수요일", "phonetic": "Su-yo-il" }],
                "ja-JP": [{ "text": "水曜日", "phonetic": "Suiyoubi" }]
            },
            {
                "zh-TW": [{ "text": "星期四", "phonetic": "" }],
                "en-US": [{ "text": "Thursday", "phonetic": "" }],
                "ko-KR": [{ "text": "목요일", "phonetic": "Mog-yo-il" }],
                "ja-JP": [{ "text": "木曜日", "phonetic": "Mokuyoubi" }]
            },
            {
                "zh-TW": [{ "text": "星期五", "phonetic": "" }],
                "en-US": [{ "text": "Friday", "phonetic": "" }],
                "ko-KR": [{ "text": "금요일", "phonetic": "Geum-yo-il" }],
                "ja-JP": [{ "text": "金曜日", "phonetic": "Kinyoubi" }]
            },
            {
                "zh-TW": [{ "text": "星期六", "phonetic": "" }],
                "en-US": [{ "text": "Saturday", "phonetic": "" }],
                "ko-KR": [{ "text": "토요일", "phonetic": "To-yo-il" }],
                "ja-JP": [{ "text": "土曜日", "phonetic": "Doyoubi" }]
            },
            {
                "zh-TW": [{ "text": "星期日", "phonetic": "" }],
                "en-US": [{ "text": "Sunday", "phonetic": "" }],
                "ko-KR": [{ "text": "일요일", "phonetic": "Ir-yo-il" }],
                "ja-JP": [{ "text": "日曜日", "phonetic": "Nichiyoubi" }]
            },
            {
                "zh-TW": [{ "text": "今天", "phonetic": "" }],
                "en-US": [{ "text": "Today", "phonetic": "" }],
                "ko-KR": [{ "text": "오늘", "phonetic": "O-neul" }],
                "ja-JP": [{ "text": "今日", "phonetic": "Kyou" }]
            },
            {
                "zh-TW": [{ "text": "明天", "phonetic": "" }],
                "en-US": [{ "text": "Tomorrow", "phonetic": "" }],
                "ko-KR": [{ "text": "내일", "phonetic": "Nae-il" }],
                "ja-JP": [{ "text": "明日", "phonetic": "Ashita" }]
            },
            {
                "zh-TW": [{ "text": "昨天", "phonetic": "" }],
                "en-US": [{ "text": "Yesterday", "phonetic": "" }],
                "ko-KR": [{ "text": "어제", "phonetic": "Eo-je" }],
                "ja-JP": [{ "text": "昨日", "phonetic": "Kinou" }]
            }
        ]
    },
    {
        "id": "dining",
        "category": {
            "zh-TW": "餐廳與飲食",
            "en-US": "Dining & Food",
            "ko-KR": "식당과 음식",
            "ja-JP": "レストラン"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "請給我水", "phonetic": "" }],
                "en-US": [{ "text": "Water, please", "phonetic": "" }],
                "ko-KR": [{ "text": "물 좀 주세요", "phonetic": "Mul jom ju-se-yo" }],
                "ja-JP": [{ "text": "お水ください", "phonetic": "Omizu kudasai" }]
            },
            {
                "zh-TW": [{ "text": "洗手間在哪裡？", "phonetic": "" }],
                "en-US": [{ "text": "Where is the restroom?", "phonetic": "" }],
                "ko-KR": [{ "text": "화장실 어디예요?", "phonetic": "Hwa-jang-sil eo-di-ye-yo?" }],
                "ja-JP": [{ "text": "トイレはどこですか", "phonetic": "Toire wa doko desu ka" }]
            },
            {
                "zh-TW": [{ "text": "請給我菜單", "phonetic": "" }],
                "en-US": [{ "text": "Menu please", "phonetic": "" }],
                "ko-KR": [{ "text": "메뉴판 주세요", "phonetic": "Me-nyu-pan ju-se-yo" }],
                "ja-JP": [{ "text": "メニューをください", "phonetic": "Menyuu o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "我要點餐", "phonetic": "" }],
                "en-US": [{ "text": "I would like to order", "phonetic": "" }],
                "ko-KR": [{ "text": "주문할게요", "phonetic": "Ju-mun-hal-ge-yo" }],
                "ja-JP": [{ "text": "注文をお願いします", "phonetic": "Chuumon o onegaishimasu" }]
            },
            {
                "zh-TW": [{ "text": "買單", "phonetic": "" }],
                "en-US": [{ "text": "Check please", "phonetic": "" }],
                "ko-KR": [{ "text": "계산서 주세요", "phonetic": "Gye-san-seo ju-se-yo" }],
                "ja-JP": [{ "text": "お会計をお願いします", "phonetic": "Okaikei o onegaishimasu" }]
            },
            {
                "zh-TW": [{ "text": "很好吃", "phonetic": "" }],
                "en-US": [{ "text": "It's delicious", "phonetic": "" }],
                "ko-KR": [{ "text": "맛있어요", "phonetic": "Ma-si-sseo-yo" }],
                "ja-JP": [{ "text": "おいしいです", "phonetic": "Oishii desu" }]
            },
            {
                "zh-TW": [{ "text": "會辣嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Is it spicy?", "phonetic": "" }],
                "ko-KR": [{ "text": "매워요?", "phonetic": "Mae-wo-yo?" }],
                "ja-JP": [{ "text": "辛いですか", "phonetic": "Karai desu ka" }]
            },
            {
                "zh-TW": [{ "text": "不要辣", "phonetic": "" }],
                "en-US": [{ "text": "Not spicy please", "phonetic": "" }],
                "ko-KR": [{ "text": "안 맵게 해주세요", "phonetic": "An maep-ge hae-ju-se-yo" }],
                "ja-JP": [{ "text": "辛くしないでください", "phonetic": "Karaku shinaide kudasai" }]
            },
            {
                "zh-TW": [{ "text": "我吃素", "phonetic": "" }],
                "en-US": [{ "text": "I am vegetarian", "phonetic": "" }],
                "ko-KR": [{ "text": "저는 채식주의자예요", "phonetic": "Jeo-neun chae-sik-ju-ui-ja-ye-yo" }],
                "ja-JP": [{ "text": "私はベジタリアンです", "phonetic": "Watashi wa bejitarian desu" }]
            },
            {
                "zh-TW": [{ "text": "有推薦的嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Any recommendations?", "phonetic": "" }],
                "ko-KR": [{ "text": "추천해 주세요", "phonetic": "Chu-cheon-hae ju-se-yo" }],
                "ja-JP": [{ "text": "おすすめは何ですか", "phonetic": "Osusume wa nan desu ka" }]
            },
            {
                "zh-TW": [{ "text": "請給我餐具", "phonetic": "" }],
                "en-US": [{ "text": "Cutlery please", "phonetic": "" }],
                "ko-KR": [{ "text": "수저 주세요", "phonetic": "Su-jeo ju-se-yo" }],
                "ja-JP": [{ "text": "カトラリーをください", "phonetic": "Katorarii o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "請給我紙巾", "phonetic": "" }],
                "en-US": [{ "text": "Napkin please", "phonetic": "" }],
                "ko-KR": [{ "text": "휴지 주세요", "phonetic": "Hyu-ji ju-se-yo" }],
                "ja-JP": [{ "text": "ナプキンをください", "phonetic": "Napukin o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "外帶", "phonetic": "" }],
                "en-US": [{ "text": "To go", "phonetic": "" }],
                "ko-KR": [{ "text": "포장해 주세요", "phonetic": "Po-jang-hae ju-se-yo" }],
                "ja-JP": [{ "text": "持ち帰ります", "phonetic": "Mochikaerimasu" }]
            },
            {
                "zh-TW": [{ "text": "乾杯", "phonetic": "" }],
                "en-US": [{ "text": "Cheers!", "phonetic": "" }],
                "ko-KR": [{ "text": "건배!", "phonetic": "Geon-bae!" }],
                "ja-JP": [{ "text": "乾杯！", "phonetic": "Kanpai!" }]
            },
            {
                "zh-TW": [{ "text": "我吃飽了", "phonetic": "" }],
                "en-US": [{ "text": "I am full", "phonetic": "" }],
                "ko-KR": [{ "text": "배불러요", "phonetic": "Bae-bul-leo-yo" }],
                "ja-JP": [{ "text": "お腹いっぱいです", "phonetic": "Onaka ippai desu" }]
            }
        ]
    },
    {
        "id": "transport",
        "category": {
            "zh-TW": "交通移動",
            "en-US": "Transportation",
            "ko-KR": "교통",
            "ja-JP": "交通"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "地鐵站在哪裡？", "phonetic": "" }],
                "en-US": [{ "text": "Where is the subway station?", "phonetic": "" }],
                "ko-KR": [{ "text": "지하철역은 어디예요?", "phonetic": "Ji-ha-cheol-yeok-eun eo-di-ye-yo?" }],
                "ja-JP": [{ "text": "地下鉄の駅はどこですか", "phonetic": "Chikatetsu no eki wa doko desu ka" }]
            },
            {
                "zh-TW": [{ "text": "請帶我去這個地址。", "phonetic": "" }],
                "en-US": [{ "text": "Please take me to this address.", "phonetic": "" }],
                "ko-KR": [{ "text": "이 주소로 가주세요.", "phonetic": "I ju-so-ro ga-ju-se-yo." }],
                "ja-JP": [{ "text": "この住所までお願いします", "phonetic": "Kono juusho made onegaishimasu" }]
            },
            {
                "zh-TW": [{ "text": "請到機場。", "phonetic": "" }],
                "en-US": [{ "text": "To the airport, please.", "phonetic": "" }],
                "ko-KR": [{ "text": "공항으로 가주세요.", "phonetic": "Gong-hang-eu-ro ga-ju-se-yo." }],
                "ja-JP": [{ "text": "空港までお願いします", "phonetic": "Kuukou made onegaishimasu" }]
            },
            {
                "zh-TW": [{ "text": "計程車", "phonetic": "" }],
                "en-US": [{ "text": "Taxi", "phonetic": "" }],
                "ko-KR": [{ "text": "택시", "phonetic": "Taek-si" }],
                "ja-JP": [{ "text": "タクシー", "phonetic": "Takushii" }]
            },
            {
                "zh-TW": [{ "text": "公車站", "phonetic": "" }],
                "en-US": [{ "text": "Bus stop", "phonetic": "" }],
                "ko-KR": [{ "text": "버스 정류장", "phonetic": "Beo-seu jeong-ryu-jang" }],
                "ja-JP": [{ "text": "バス停", "phonetic": "Basutei" }]
            },
            {
                "zh-TW": [{ "text": "售票處", "phonetic": "" }],
                "en-US": [{ "text": "Ticket office", "phonetic": "" }],
                "ko-KR": [{ "text": "매표소", "phonetic": "Mae-pyo-so" }],
                "ja-JP": [{ "text": "切符売り場", "phonetic": "Kippu uriba" }]
            },
            {
                "zh-TW": [{ "text": "車費多少？", "phonetic": "" }],
                "en-US": [{ "text": "How much is the fare?", "phonetic": "" }],
                "ko-KR": [{ "text": "요금 얼마예요?", "phonetic": "Yo-geum eol-ma-ye-yo?" }],
                "ja-JP": [{ "text": "料金はいくらですか", "phonetic": "Ryoukin wa ikura desu ka" }]
            },
            {
                "zh-TW": [{ "text": "下一站是哪裡？", "phonetic": "" }],
                "en-US": [{ "text": "What is the next stop?", "phonetic": "" }],
                "ko-KR": [{ "text": "다음 역은 어디예요?", "phonetic": "Da-eum yeok-eun eo-di-ye-yo?" }],
                "ja-JP": [{ "text": "次の駅はどこですか", "phonetic": "Tsugi no eki wa doko desu ka" }]
            },
            {
                "zh-TW": [{ "text": "我要在這下車", "phonetic": "" }],
                "en-US": [{ "text": "I get off here", "phonetic": "" }],
                "ko-KR": [{ "text": "여기서 내려요", "phonetic": "Yeo-gi-seo nae-ryeo-yo" }],
                "ja-JP": [{ "text": "ここで降ります", "phonetic": "Koko de orimasu" }]
            },
            {
                "zh-TW": [{ "text": "地圖", "phonetic": "" }],
                "en-US": [{ "text": "Map", "phonetic": "" }],
                "ko-KR": [{ "text": "지도", "phonetic": "Ji-do" }],
                "ja-JP": [{ "text": "地図", "phonetic": "Chizu" }]
            },
            {
                "zh-TW": [{ "text": "火車站", "phonetic": "" }],
                "en-US": [{ "text": "Train station", "phonetic": "" }],
                "ko-KR": [{ "text": "기차역", "phonetic": "Gi-cha-yeok" }],
                "ja-JP": [{ "text": "駅", "phonetic": "Eki" }]
            },
            {
                "zh-TW": [{ "text": "月台", "phonetic": "" }],
                "en-US": [{ "text": "Platform", "phonetic": "" }],
                "ko-KR": [{ "text": "승강장", "phonetic": "Seung-gang-jang" }],
                "ja-JP": [{ "text": "プラットホーム", "phonetic": "Purattohoomu" }]
            },
            {
                "zh-TW": [{ "text": "誤點", "phonetic": "" }],
                "en-US": [{ "text": "Delayed", "phonetic": "" }],
                "ko-KR": [{ "text": "지연", "phonetic": "Ji-yeon" }],
                "ja-JP": [{ "text": "遅延", "phonetic": "Chien" }]
            },
            {
                "zh-TW": [{ "text": "車票", "phonetic": "" }],
                "en-US": [{ "text": "Ticket", "phonetic": "" }],
                "ko-KR": [{ "text": "표", "phonetic": "Pyo" }],
                "ja-JP": [{ "text": "切符", "phonetic": "Kippu" }]
            },
            {
                "zh-TW": [{ "text": "租車", "phonetic": "" }],
                "en-US": [{ "text": "Rental car", "phonetic": "" }],
                "ko-KR": [{ "text": "렌터카", "phonetic": "Ren-teo-ka" }],
                "ja-JP": [{ "text": "レンタカー", "phonetic": "Rentakaa" }]
            },
            {
                "zh-TW": [{ "text": "左轉", "phonetic": "" }],
                "en-US": [{ "text": "Turn left", "phonetic": "" }],
                "ko-KR": [{ "text": "좌회전", "phonetic": "Jwa-hoe-jeon" }],
                "ja-JP": [{ "text": "左折", "phonetic": "Sasetsu" }]
            },
            {
                "zh-TW": [{ "text": "右轉", "phonetic": "" }],
                "en-US": [{ "text": "Turn right", "phonetic": "" }],
                "ko-KR": [{ "text": "우회전", "phonetic": "U-hoe-jeon" }],
                "ja-JP": [{ "text": "右折", "phonetic": "Usetsu" }]
            },
            {
                "zh-TW": [{ "text": "直走", "phonetic": "" }],
                "en-US": [{ "text": "Go straight", "phonetic": "" }],
                "ko-KR": [{ "text": "직진", "phonetic": "Jik-jin" }],
                "ja-JP": [{ "text": "直進", "phonetic": "Chokushin" }]
            }
        ]
    },
    {
        "id": "accommodation",
        "category": {
            "zh-TW": "住宿",
            "en-US": "Accommodation",
            "ko-KR": "숙박",
            "ja-JP": "宿泊"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "我想要辦理入住。", "phonetic": "" }],
                "en-US": [{ "text": "I'd like to check in.", "phonetic": "" }],
                "ko-KR": [{ "text": "체크인 하고 싶어요.", "phonetic": "Che-keu-in ha-go si-peo-yo?" }],
                "ja-JP": [{ "text": "チェックインをお願いします", "phonetic": "Chekkuin o onegaishimasu" }]
            },
            {
                "zh-TW": [{ "text": "Wi-Fi 密碼是多少？", "phonetic": "" }],
                "en-US": [{ "text": "What is the Wi-Fi password?", "phonetic": "" }],
                "ko-KR": [{ "text": "와이파이 비밀번호가 뭐예요?", "phonetic": "Wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo?" }],
                "ja-JP": [{ "text": "Wi-Fiのパスワードは何ですか", "phonetic": "Wi-Fi no pasuwaado wa nan desu ka" }]
            },
            {
                "zh-TW": [{ "text": "可以寄放行李嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Can I leave my luggage here?", "phonetic": "" }],
                "ko-KR": [{ "text": "짐을 맡길 수 있나요?", "phonetic": "Jim-eul mat-gil su in-na-yo?" }],
                "ja-JP": [{ "text": "荷物を預かってもらえますか", "phonetic": "Nimotsu o azukatte moraemasu ka" }]
            },
            {
                "zh-TW": [{ "text": "退房", "phonetic": "" }],
                "en-US": [{ "text": "Check-out", "phonetic": "" }],
                "ko-KR": [{ "text": "체크아웃", "phonetic": "Che-keu-a-ut" }],
                "ja-JP": [{ "text": "チェックアウト", "phonetic": "Chekkuauto" }]
            },
            {
                "zh-TW": [{ "text": "房卡不見了", "phonetic": "" }],
                "en-US": [{ "text": "I lost my key card", "phonetic": "" }],
                "ko-KR": [{ "text": "방 키를 잃어버렸어요", "phonetic": "Bang ki-reul il-eo-beo-ryeo-sseo-yo" }],
                "ja-JP": [{ "text": "カードキーをなくしました", "phonetic": "Kaadokii o nakushimashita" }]
            },
            {
                "zh-TW": [{ "text": "早餐幾點？", "phonetic": "" }],
                "en-US": [{ "text": "What time is breakfast?", "phonetic": "" }],
                "ko-KR": [{ "text": "아침 식사는 몇 시예요?", "phonetic": "A-chim sik-sa-neun myeot si-ye-yo?" }],
                "ja-JP": [{ "text": "朝食は何時ですか", "phonetic": "Choushoku wa nanji desu ka" }]
            },
            {
                "zh-TW": [{ "text": "請幫我叫計程車", "phonetic": "" }],
                "en-US": [{ "text": "Call a taxi please", "phonetic": "" }],
                "ko-KR": [{ "text": "택시 좀 불러주세요", "phonetic": "Taek-si jom bul-leo-ju-se-yo" }],
                "ja-JP": [{ "text": "タクシーを呼んでください", "phonetic": "Takushii o yonde kudasai" }]
            },
            {
                "zh-TW": [{ "text": "請給我毛巾", "phonetic": "" }],
                "en-US": [{ "text": "Towel please", "phonetic": "" }],
                "ko-KR": [{ "text": "수건 주세요", "phonetic": "Su-geon ju-se-yo" }],
                "ja-JP": [{ "text": "タオルをください", "phonetic": "Taoru o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "請給我衛生紙", "phonetic": "" }],
                "en-US": [{ "text": "Toilet paper please", "phonetic": "" }],
                "ko-KR": [{ "text": "화장지 주세요", "phonetic": "Hwa-jang-ji ju-se-yo" }],
                "ja-JP": [{ "text": "トイレットペーパーをください", "phonetic": "Toirettopeepaa o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "冷氣", "phonetic": "" }],
                "en-US": [{ "text": "Air conditioner", "phonetic": "" }],
                "ko-KR": [{ "text": "에어컨", "phonetic": "E-eo-keon" }],
                "ja-JP": [{ "text": "エアコン", "phonetic": "Eakon" }]
            },
            {
                "zh-TW": [{ "text": "沒有熱水", "phonetic": "" }],
                "en-US": [{ "text": "No hot water", "phonetic": "" }],
                "ko-KR": [{ "text": "따뜻한 물이 안 나와요", "phonetic": "Tta-tteu-tan mul-i an na-wa-yo" }],
                "ja-JP": [{ "text": "お湯が出ません", "phonetic": "Oyu ga demasen" }]
            },
            {
                "zh-TW": [{ "text": "保險箱", "phonetic": "" }],
                "en-US": [{ "text": "Safe", "phonetic": "" }],
                "ko-KR": [{ "text": "금고", "phonetic": "Geum-go" }],
                "ja-JP": [{ "text": "金庫", "phonetic": "Kinko" }]
            },
            {
                "zh-TW": [{ "text": "請打掃房間", "phonetic": "" }],
                "en-US": [{ "text": "Please clean my room", "phonetic": "" }],
                "ko-KR": [{ "text": "방 청소해 주세요", "phonetic": "Bang cheong-so-hae ju-se-yo" }],
                "ja-JP": [{ "text": "部屋を掃除してください", "phonetic": "Heya o souji shite kudasai" }]
            },
            {
                "zh-TW": [{ "text": "請勿打擾", "phonetic": "" }],
                "en-US": [{ "text": "Do not disturb", "phonetic": "" }],
                "ko-KR": [{ "text": "방해하지 마세요", "phonetic": "Bang-hae-ha-ji ma-se-yo" }],
                "ja-JP": [{ "text": "起こさないでください", "phonetic": "Okosanaide kudasai" }]
            }
        ]
    },
    {
        "id": "shopping",
        "category": {
            "zh-TW": "購物",
            "en-US": "Shopping",
            "ko-KR": "쇼핑",
            "ja-JP": "買い物"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "這個多少錢？", "phonetic": "" }],
                "en-US": [{ "text": "How much is this?", "phonetic": "" }],
                "ko-KR": [{ "text": "이거 얼마예요?", "phonetic": "I-geo eol-ma-ye-yo?" }],
                "ja-JP": [{ "text": "いくらですか", "phonetic": "Ikura desu ka" }]
            },
            {
                "zh-TW": [{ "text": "我可以試穿嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Can I try this on?", "phonetic": "" }],
                "ko-KR": [{ "text": "입어봐도 돼요?", "phonetic": "Ib-eo-bwa-do dwae-yo?" }],
                "ja-JP": [{ "text": "試着してもいいですか", "phonetic": "Shichaku shitemo ii desu ka" }]
            },
            {
                "zh-TW": [{ "text": "有別的顏色嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Do you have a different color?", "phonetic": "" }],
                "ko-KR": [{ "text": "다른 색깔 있어요?", "phonetic": "Da-reun saek-kkal is-seo-yo?" }],
                "ja-JP": [{ "text": "ほかの色はありますか", "phonetic": "Hoka no iro wa arimasu ka" }]
            },
            {
                "zh-TW": [{ "text": "可以退稅嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Can I get a tax refund?", "phonetic": "" }],
                "ko-KR": [{ "text": "텍스 리펀 되나요?", "phonetic": "Tek-seu ri-peon doe-na-yo?" }],
                "ja-JP": [{ "text": "免税できますか", "phonetic": "Menzei dekimasu ka" }]
            },
            {
                "zh-TW": [{ "text": "尺寸", "phonetic": "" }],
                "en-US": [{ "text": "Size", "phonetic": "" }],
                "ko-KR": [{ "text": "사이즈/치수", "phonetic": "Sa-i-jeu/Chi-su" }],
                "ja-JP": [{ "text": "サイズ", "phonetic": "Saizu" }]
            },
            {
                "zh-TW": [{ "text": "太貴了", "phonetic": "" }],
                "en-US": [{ "text": "Too expensive", "phonetic": "" }],
                "ko-KR": [{ "text": "너무 비싸요", "phonetic": "Neo-mu bi-ssa-yo" }],
                "ja-JP": [{ "text": "高すぎます", "phonetic": "Takasugimasu" }]
            },
            {
                "zh-TW": [{ "text": "可以打折嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Discount please", "phonetic": "" }],
                "ko-KR": [{ "text": "깎아주세요", "phonetic": "Kkak-ka-ju-se-yo" }],
                "ja-JP": [{ "text": "値引きできますか", "phonetic": "Nebiki dekimasu ka" }]
            },
            {
                "zh-TW": [{ "text": "可以刷卡嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Can I use a credit card?", "phonetic": "" }],
                "ko-KR": [{ "text": "카드 돼요?", "phonetic": "Ka-deu dwae-yo?" }],
                "ja-JP": [{ "text": "クレジットカードは使えますか", "phonetic": "Kurejittokaado wa tsukaemasu ka" }]
            },
            {
                "zh-TW": [{ "text": "只收現金嗎？", "phonetic": "" }],
                "en-US": [{ "text": "Cash only?", "phonetic": "" }],
                "ko-KR": [{ "text": "현금만 돼요?", "phonetic": "Hyeon-geum-man dwae-yo?" }],
                "ja-JP": [{ "text": "現金のみですか", "phonetic": "Genkin nomi desu ka" }]
            },
            {
                "zh-TW": [{ "text": "請給我收據", "phonetic": "" }],
                "en-US": [{ "text": "Receipt please", "phonetic": "" }],
                "ko-KR": [{ "text": "영수증 주세요", "phonetic": "Yeong-su-jeung ju-se-yo" }],
                "ja-JP": [{ "text": "レシートをください", "phonetic": "Reshiito o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "請給我袋子", "phonetic": "" }],
                "en-US": [{ "text": "Bag please", "phonetic": "" }],
                "ko-KR": [{ "text": "봉투 주세요", "phonetic": "Bong-tu ju-se-yo" }],
                "ja-JP": [{ "text": "袋をください", "phonetic": "Fukuro o kudasai" }]
            },
            {
                "zh-TW": [{ "text": "請幫我包裝", "phonetic": "" }],
                "en-US": [{ "text": "Gift wrap please", "phonetic": "" }],
                "ko-KR": [{ "text": "선물 포장해 주세요", "phonetic": "Seon-mul po-jang-hae ju-se-yo" }],
                "ja-JP": [{ "text": "ラッピングをお願いします", "phonetic": "Rappingu o onegaishimasu" }]
            },
            {
                "zh-TW": [{ "text": "幾點開門？", "phonetic": "" }],
                "en-US": [{ "text": "What time do you open?", "phonetic": "" }],
                "ko-KR": [{ "text": "몇 시에 열어요?", "phonetic": "Myeot si-e yeol-eo-yo?" }],
                "ja-JP": [{ "text": "何時に開きますか", "phonetic": "Nanji ni akimasu ka" }]
            },
            {
                "zh-TW": [{ "text": "幾點關門？", "phonetic": "" }],
                "en-US": [{ "text": "What time do you close?", "phonetic": "" }],
                "ko-KR": [{ "text": "몇 시에 닫아요?", "phonetic": "Myeot si-e dad-a-yo?" }],
                "ja-JP": [{ "text": "何時に閉まりますか", "phonetic": "Nanji ni shimarimasu ka" }]
            },
            {
                "zh-TW": [{ "text": "我只是看看", "phonetic": "" }],
                "en-US": [{ "text": "Just looking", "phonetic": "" }],
                "ko-KR": [{ "text": "그냥 둘러보는 중이에요", "phonetic": "Geu-nyang dul-leo-bo-neun jung-i-e-yo" }],
                "ja-JP": [{ "text": "見ているだけです", "phonetic": "Miteiru dake desu" }]
            },
            {
                "zh-TW": [{ "text": "紀念品", "phonetic": "" }],
                "en-US": [{ "text": "Souvenir", "phonetic": "" }],
                "ko-KR": [{ "text": "기념품", "phonetic": "Gi-nyeom-pum" }],
                "ja-JP": [{ "text": "お土産", "phonetic": "Omiyage" }]
            }
        ]
    },
    {
        "id": "adjectives",
        "category": {
            "zh-TW": "常用形容詞",
            "en-US": "Common Adjectives",
            "ko-KR": "기본 형용사",
            "ja-JP": "よく使う形容詞"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "好吃", "phonetic": "" }],
                "en-US": [{ "text": "Delicious", "phonetic": "" }],
                "ko-KR": [{ "text": "맛있어요", "phonetic": "Ma-si-sseo-yo" }],
                "ja-JP": [{ "text": "おいしい", "phonetic": "Oishii" }]
            },
            {
                "zh-TW": [{ "text": "貴", "phonetic": "" }],
                "en-US": [{ "text": "Expensive", "phonetic": "" }],
                "ko-KR": [{ "text": "비싸요", "phonetic": "Bi-ssa-yo" }],
                "ja-JP": [{ "text": "高い", "phonetic": "Takai" }]
            },
            {
                "zh-TW": [{ "text": "便宜", "phonetic": "" }],
                "en-US": [{ "text": "Cheap", "phonetic": "" }],
                "ko-KR": [{ "text": "싸요", "phonetic": "Ssa-yo" }],
                "ja-JP": [{ "text": "安い", "phonetic": "Yasui" }]
            },
            {
                "zh-TW": [{ "text": "熱", "phonetic": "" }],
                "en-US": [{ "text": "Hot (Weather)", "phonetic": "" }],
                "ko-KR": [{ "text": "더워요", "phonetic": "Deo-wo-yo" }],
                "ja-JP": [{ "text": "暑い", "phonetic": "Atsui" }]
            },
            {
                "zh-TW": [{ "text": "冷", "phonetic": "" }],
                "en-US": [{ "text": "Cold (Weather)", "phonetic": "" }],
                "ko-KR": [{ "text": "추워요", "phonetic": "Chu-wo-yo" }],
                "ja-JP": [{ "text": "寒い", "phonetic": "Samui" }]
            },
            {
                "zh-TW": [{ "text": "漂亮", "phonetic": "" }],
                "en-US": [{ "text": "Beautiful", "phonetic": "" }],
                "ko-KR": [{ "text": "예뻐요", "phonetic": "Ye-ppeo-yo" }],
                "ja-JP": [{ "text": "きれい", "phonetic": "Kirei" }]
            },
            {
                "zh-TW": [{ "text": "大", "phonetic": "" }],
                "en-US": [{ "text": "Big", "phonetic": "" }],
                "ko-KR": [{ "text": "커요", "phonetic": "Keo-yo" }],
                "ja-JP": [{ "text": "大きい", "phonetic": "Ookii" }]
            },
            {
                "zh-TW": [{ "text": "小", "phonetic": "" }],
                "en-US": [{ "text": "Small", "phonetic": "" }],
                "ko-KR": [{ "text": "작아요", "phonetic": "Ja-ga-yo" }],
                "ja-JP": [{ "text": "小さい", "phonetic": "Chiisai" }]
            },
            {
                "zh-TW": [{ "text": "長", "phonetic": "" }],
                "en-US": [{ "text": "Long", "phonetic": "" }],
                "ko-KR": [{ "text": "길어요", "phonetic": "Gi-reo-yo" }],
                "ja-JP": [{ "text": "長い", "phonetic": "Nagai" }]
            },
            {
                "zh-TW": [{ "text": "短", "phonetic": "" }],
                "en-US": [{ "text": "Short", "phonetic": "" }],
                "ko-KR": [{ "text": "짧아요", "phonetic": "Jjal-ba-yo" }],
                "ja-JP": [{ "text": "短い", "phonetic": "Mijikai" }]
            },
            {
                "zh-TW": [{ "text": "重", "phonetic": "" }],
                "en-US": [{ "text": "Heavy", "phonetic": "" }],
                "ko-KR": [{ "text": "무거워요", "phonetic": "Mu-geo-wo-yo" }],
                "ja-JP": [{ "text": "重い", "phonetic": "Omoi" }]
            },
            {
                "zh-TW": [{ "text": "輕", "phonetic": "" }],
                "en-US": [{ "text": "Light", "phonetic": "" }],
                "ko-KR": [{ "text": "가벼워요", "phonetic": "Ga-byeo-wo-yo" }],
                "ja-JP": [{ "text": "軽い", "phonetic": "Karui" }]
            },
            {
                "zh-TW": [{ "text": "快", "phonetic": "" }],
                "en-US": [{ "text": "Fast", "phonetic": "" }],
                "ko-KR": [{ "text": "빨라요", "phonetic": "Ppal-la-yo" }],
                "ja-JP": [{ "text": "早い", "phonetic": "Hayai" }]
            },
            {
                "zh-TW": [{ "text": "慢", "phonetic": "" }],
                "en-US": [{ "text": "Slow", "phonetic": "" }],
                "ko-KR": [{ "text": "느려요", "phonetic": "Neu-ryeo-yo" }],
                "ja-JP": [{ "text": "遅い", "phonetic": "Osoi" }]
            },
            {
                "zh-TW": [{ "text": "高", "phonetic": "" }],
                "en-US": [{ "text": "High", "phonetic": "" }],
                "ko-KR": [{ "text": "높아요", "phonetic": "No-pa-yo" }],
                "ja-JP": [{ "text": "高い", "phonetic": "Takai" }]
            },
            {
                "zh-TW": [{ "text": "低", "phonetic": "" }],
                "en-US": [{ "text": "Low", "phonetic": "" }],
                "ko-KR": [{ "text": "낮아요", "phonetic": "Na-ja-yo" }],
                "ja-JP": [{ "text": "低い", "phonetic": "Hikui" }]
            },
            {
                "zh-TW": [{ "text": "好", "phonetic": "" }],
                "en-US": [{ "text": "Good", "phonetic": "" }],
                "ko-KR": [{ "text": "좋아요", "phonetic": "Jo-a-yo" }],
                "ja-JP": [{ "text": "良い", "phonetic": "Yoi" }]
            },
            {
                "zh-TW": [{ "text": "壞", "phonetic": "" }],
                "en-US": [{ "text": "Bad", "phonetic": "" }],
                "ko-KR": [{ "text": "나빠요", "phonetic": "Na-ppa-yo" }],
                "ja-JP": [{ "text": "悪い", "phonetic": "Warui" }]
            },
            {
                "zh-TW": [{ "text": "乾淨", "phonetic": "" }],
                "en-US": [{ "text": "Clean", "phonetic": "" }],
                "ko-KR": [{ "text": "깨끗해요", "phonetic": "Kkae-kkeu-tae-yo" }],
                "ja-JP": [{ "text": "きれい", "phonetic": "Kirei" }]
            },
            {
                "zh-TW": [{ "text": "髒", "phonetic": "" }],
                "en-US": [{ "text": "Dirty", "phonetic": "" }],
                "ko-KR": [{ "text": "더러워요", "phonetic": "Deo-reo-wo-yo" }],
                "ja-JP": [{ "text": "汚い", "phonetic": "Kitanai" }]
            },
            {
                "zh-TW": [{ "text": "安全", "phonetic": "" }],
                "en-US": [{ "text": "Safe", "phonetic": "" }],
                "ko-KR": [{ "text": "안전해요", "phonetic": "An-jeon-hae-yo" }],
                "ja-JP": [{ "text": "安全", "phonetic": "Anzen" }]
            },
            {
                "zh-TW": [{ "text": "危險", "phonetic": "" }],
                "en-US": [{ "text": "Dangerous", "phonetic": "" }],
                "ko-KR": [{ "text": "위험해요", "phonetic": "Wi-heom-hae-yo" }],
                "ja-JP": [{ "text": "危険", "phonetic": "Kiken" }]
            },
            {
                "zh-TW": [{ "text": "近", "phonetic": "" }],
                "en-US": [{ "text": "Near", "phonetic": "" }],
                "ko-KR": [{ "text": "가까워요", "phonetic": "Ga-kka-wo-yo" }],
                "ja-JP": [{ "text": "近い", "phonetic": "Chikai" }]
            },
            {
                "zh-TW": [{ "text": "遠", "phonetic": "" }],
                "en-US": [{ "text": "Far", "phonetic": "" }],
                "ko-KR": [{ "text": "멀어요", "phonetic": "Meo-reo-yo" }],
                "ja-JP": [{ "text": "遠い", "phonetic": "Tooi" }]
            },
            {
                "zh-TW": [{ "text": "亮", "phonetic": "" }],
                "en-US": [{ "text": "Bright", "phonetic": "" }],
                "ko-KR": [{ "text": "밝아요", "phonetic": "Bal-ga-yo" }],
                "ja-JP": [{ "text": "明るい", "phonetic": "Akarui" }]
            },
            {
                "zh-TW": [{ "text": "暗", "phonetic": "" }],
                "en-US": [{ "text": "Dark", "phonetic": "" }],
                "ko-KR": [{ "text": "어두워요", "phonetic": "Eo-du-wo-yo" }],
                "ja-JP": [{ "text": "暗い", "phonetic": "Kurai" }]
            },
            {
                "zh-TW": [{ "text": "吵", "phonetic": "" }],
                "en-US": [{ "text": "Loud", "phonetic": "" }],
                "ko-KR": [{ "text": "시끄러워요", "phonetic": "Si-kkeu-reo-wo-yo" }],
                "ja-JP": [{ "text": "うるさい", "phonetic": "Urusai" }]
            },
            {
                "zh-TW": [{ "text": "安靜", "phonetic": "" }],
                "en-US": [{ "text": "Quiet", "phonetic": "" }],
                "ko-KR": [{ "text": "조용해요", "phonetic": "Jo-yong-hae-yo" }],
                "ja-JP": [{ "text": "静か", "phonetic": "Shizuka" }]
            },
            {
                "zh-TW": [{ "text": "開心", "phonetic": "" }],
                "en-US": [{ "text": "Happy", "phonetic": "" }],
                "ko-KR": [{ "text": "행복해요", "phonetic": "Haeng-bok-hae-yo" }],
                "ja-JP": [{ "text": "嬉しい", "phonetic": "Ureshii" }]
            },
            {
                "zh-TW": [{ "text": "難過", "phonetic": "" }],
                "en-US": [{ "text": "Sad", "phonetic": "" }],
                "ko-KR": [{ "text": "슬퍼요", "phonetic": "Seul-peo-yo" }],
                "ja-JP": [{ "text": "悲しい", "phonetic": "Kanashii" }]
            },
            {
                "zh-TW": [{ "text": "累", "phonetic": "" }],
                "en-US": [{ "text": "Tired", "phonetic": "" }],
                "ko-KR": [{ "text": "피곤해요", "phonetic": "Pi-gon-hae-yo" }],
                "ja-JP": [{ "text": "疲れた", "phonetic": "Tsukareta" }]
            },
            {
                "zh-TW": [{ "text": "忙", "phonetic": "" }],
                "en-US": [{ "text": "Busy", "phonetic": "" }],
                "ko-KR": [{ "text": "바빠요", "phonetic": "Ba-ppa-yo" }],
                "ja-JP": [{ "text": "忙しい", "phonetic": "Isogashii" }]
            },
            {
                "zh-TW": [{ "text": "容易", "phonetic": "" }],
                "en-US": [{ "text": "Easy", "phonetic": "" }],
                "ko-KR": [{ "text": "쉬워요", "phonetic": "Swi-wo-yo" }],
                "ja-JP": [{ "text": "簡単", "phonetic": "Kantan" }]
            },
            {
                "zh-TW": [{ "text": "困難", "phonetic": "" }],
                "en-US": [{ "text": "Difficult", "phonetic": "" }],
                "ko-KR": [{ "text": "어려워요", "phonetic": "Eo-ryeo-wo-yo" }],
                "ja-JP": [{ "text": "難しい", "phonetic": "Muzukashii" }]
            },
            {
                "zh-TW": [{ "text": "開著", "phonetic": "" }],
                "en-US": [{ "text": "Open", "phonetic": "" }],
                "ko-KR": [{ "text": "열려있어요", "phonetic": "Yeol-ryeo-i-sseo-yo" }],
                "ja-JP": [{ "text": "開いています", "phonetic": "Aiteimasu" }]
            },
            {
                "zh-TW": [{ "text": "關著", "phonetic": "" }],
                "en-US": [{ "text": "Closed", "phonetic": "" }],
                "ko-KR": [{ "text": "닫혀있어요", "phonetic": "Dat-hyeo-i-sseo-yo" }],
                "ja-JP": [{ "text": "閉まっています", "phonetic": "Shimatteimasu" }]
            },
            {
                "zh-TW": [{ "text": "甜", "phonetic": "" }],
                "en-US": [{ "text": "Sweet", "phonetic": "" }],
                "ko-KR": [{ "text": "달아요", "phonetic": "Da-ra-yo" }],
                "ja-JP": [{ "text": "甘い", "phonetic": "Amai" }]
            },
            {
                "zh-TW": [{ "text": "苦", "phonetic": "" }],
                "en-US": [{ "text": "Bitter", "phonetic": "" }],
                "ko-KR": [{ "text": "써요", "phonetic": "Sseo-yo" }],
                "ja-JP": [{ "text": "苦い", "phonetic": "Nigai" }]
            },
            {
                "zh-TW": [{ "text": "酸", "phonetic": "" }],
                "en-US": [{ "text": "Sour", "phonetic": "" }],
                "ko-KR": [{ "text": "셔요", "phonetic": "Syeo-yo" }],
                "ja-JP": [{ "text": "酸っぱい", "phonetic": "Suppai" }]
            },
            {
                "zh-TW": [{ "text": "鹹", "phonetic": "" }],
                "en-US": [{ "text": "Salty", "phonetic": "" }],
                "ko-KR": [{ "text": "짜요", "phonetic": "Jja-yo" }],
                "ja-JP": [{ "text": "しょっぱい", "phonetic": "Shoppai" }]
            },
            {
                "zh-TW": [{ "text": "辣", "phonetic": "" }],
                "en-US": [{ "text": "Spicy", "phonetic": "" }],
                "ko-KR": [{ "text": "매워요", "phonetic": "Mae-wo-yo" }],
                "ja-JP": [{ "text": "辛い", "phonetic": "Karai" }]
            }
        ]
    },
    {
        "id": "verbs",
        "category": {
            "zh-TW": "常用動詞",
            "en-US": "Common Verbs",
            "ko-KR": "기본 동사",
            "ja-JP": "よく使う動詞"
        },
        "concepts": [
            {
                "zh-TW": [{ "text": "吃", "phonetic": "" }],
                "en-US": [
                    { "text": "Eat", "phonetic": "", "note": "present" },
                    { "text": "Ate", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "먹어요", "phonetic": "Meog-eo-yo", "note": "polite_present" },
                    { "text": "먹었어요", "phonetic": "Meog-eo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "食べます", "phonetic": "Tabemasu", "note": "polite_present" },
                    { "text": "食べました", "phonetic": "Tabemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "喝", "phonetic": "" }],
                "en-US": [
                    { "text": "Drink", "phonetic": "", "note": "present" },
                    { "text": "Drank", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "마셔요", "phonetic": "Ma-syeo-yo", "note": "polite_present" },
                    { "text": "마셨어요", "phonetic": "Ma-syeo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "飲みます", "phonetic": "Nomimasu", "note": "polite_present" },
                    { "text": "飲みました", "phonetic": "Nomimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "去", "phonetic": "" }],
                "en-US": [
                    { "text": "Go", "phonetic": "", "note": "present" },
                    { "text": "Went", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "가요", "phonetic": "Ga-yo", "note": "polite_present" },
                    { "text": "갔어요", "phonetic": "Ga-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "行きます", "phonetic": "Ikimasu", "note": "polite_present" },
                    { "text": "行きました", "phonetic": "Ikimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "買", "phonetic": "" }],
                "en-US": [
                    { "text": "Buy", "phonetic": "", "note": "present" },
                    { "text": "Bought", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "사요", "phonetic": "Sa-yo", "note": "polite_present" },
                    { "text": "샀어요", "phonetic": "Sa-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "買います", "phonetic": "Kaimasu", "note": "polite_present" },
                    { "text": "買いました", "phonetic": "Kaimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "拍照", "phonetic": "" }],
                "en-US": [
                    { "text": "Take photos", "phonetic": "", "note": "present" },
                    { "text": "Took photos", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "찍어요", "phonetic": "Jjig-eo-yo", "note": "polite_present" },
                    { "text": "찍었어요", "phonetic": "Jjig-eo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "撮ります", "phonetic": "Torimasu", "note": "polite_present" },
                    { "text": "撮りました", "phonetic": "Torimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "走路", "phonetic": "" }],
                "en-US": [
                    { "text": "Walk", "phonetic": "", "note": "present" },
                    { "text": "Walked", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "걸어요", "phonetic": "Geo-reo-yo", "note": "polite_present" },
                    { "text": "걸었어요", "phonetic": "Geo-reo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "歩きます", "phonetic": "Arukimasu", "note": "polite_present" },
                    { "text": "歩きました", "phonetic": "Arukimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "跑", "phonetic": "" }],
                "en-US": [
                    { "text": "Run", "phonetic": "", "note": "present" },
                    { "text": "Ran", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "달려요", "phonetic": "Dal-ryeo-yo", "note": "polite_present" },
                    { "text": "달렸어요", "phonetic": "Dal-ryeo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "走ります", "phonetic": "Hashirimasu", "note": "polite_present" },
                    { "text": "走りました", "phonetic": "Hashirimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "停", "phonetic": "" }],
                "en-US": [
                    { "text": "Stop", "phonetic": "", "note": "present" },
                    { "text": "Stopped", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "멈춰요", "phonetic": "Meom-chwo-yo", "note": "polite_present" },
                    { "text": "멈췄어요", "phonetic": "Meom-chwo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "止まります", "phonetic": "Tomarimasu", "note": "polite_present" },
                    { "text": "止まりました", "phonetic": "Tomarimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "等", "phonetic": "" }],
                "en-US": [
                    { "text": "Wait", "phonetic": "", "note": "present" },
                    { "text": "Waited", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "기다려요", "phonetic": "Gi-da-ryeo-yo", "note": "polite_present" },
                    { "text": "기다렸어요", "phonetic": "Gi-da-ryeo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "待ちます", "phonetic": "Machimasu", "note": "polite_present" },
                    { "text": "待ちました", "phonetic": "Machimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "問", "phonetic": "" }],
                "en-US": [
                    { "text": "Ask", "phonetic": "", "note": "present" },
                    { "text": "Asked", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "물어봐요", "phonetic": "Mu-reo-bwa-yo", "note": "polite_present" },
                    { "text": "물어봤어요", "phonetic": "Mu-reo-bwa-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "聞きます", "phonetic": "Kikimasu", "note": "polite_present" },
                    { "text": "聞きました", "phonetic": "Kikimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "回答", "phonetic": "" }],
                "en-US": [
                    { "text": "Answer", "phonetic": "", "note": "present" },
                    { "text": "Answered", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "대답해요", "phonetic": "Dae-dap-hae-yo", "note": "polite_present" },
                    { "text": "대답했어요", "phonetic": "Dae-dap-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "答えます", "phonetic": "Kotaemasu", "note": "polite_present" },
                    { "text": "答えました", "phonetic": "Kotaemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "說", "phonetic": "" }],
                "en-US": [
                    { "text": "Speak", "phonetic": "", "note": "present" },
                    { "text": "Spoke", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "말해요", "phonetic": "Mal-hae-yo", "note": "polite_present" },
                    { "text": "말했어요", "phonetic": "Mal-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "話します", "phonetic": "Hanashimasu", "note": "polite_present" },
                    { "text": "話しました", "phonetic": "Hanashimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "聽", "phonetic": "" }],
                "en-US": [
                    { "text": "Listen", "phonetic": "", "note": "present" },
                    { "text": "Listened", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "들어요", "phonetic": "Deu-reo-yo", "note": "polite_present" },
                    { "text": "들었어요", "phonetic": "Deu-reo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "聞きます", "phonetic": "Kikimasu", "note": "polite_present" },
                    { "text": "聞きました", "phonetic": "Kikimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "看", "phonetic": "" }],
                "en-US": [
                    { "text": "Look", "phonetic": "", "note": "present" },
                    { "text": "Looked", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "봐요", "phonetic": "Bwa-yo", "note": "polite_present" },
                    { "text": "봤어요", "phonetic": "Bwa-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "見ます", "phonetic": "Mimasu", "note": "polite_present" },
                    { "text": "見ました", "phonetic": "Mimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "找", "phonetic": "" }],
                "en-US": [
                    { "text": "Find", "phonetic": "", "note": "present" },
                    { "text": "Found", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "찾아요", "phonetic": "Cha-ja-yo", "note": "polite_present" },
                    { "text": "찾았어요", "phonetic": "Cha-ja-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "探します", "phonetic": "Sagashimasu", "note": "polite_present" },
                    { "text": "探しました", "phonetic": "Sagashimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "弄丟", "phonetic": "" }],
                "en-US": [
                    { "text": "Lose", "phonetic": "", "note": "present" },
                    { "text": "Lost", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "잃어버려요", "phonetic": "Il-eo-beo-ryeo-yo", "note": "polite_present" },
                    { "text": "잃어버렸어요", "phonetic": "Il-eo-beo-ryeo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "なくします", "phonetic": "Nakushimasu", "note": "polite_present" },
                    { "text": "なくしました", "phonetic": "Nakushimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "使用", "phonetic": "" }],
                "en-US": [
                    { "text": "Use", "phonetic": "", "note": "present" },
                    { "text": "Used", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "사용해요", "phonetic": "Sa-yong-hae-yo", "note": "polite_present" },
                    { "text": "사용했어요", "phonetic": "Sa-yong-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "使います", "phonetic": "Tsukaimasu", "note": "polite_present" },
                    { "text": "使いました", "phonetic": "Tsukaimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "打開", "phonetic": "" }],
                "en-US": [
                    { "text": "Open", "phonetic": "", "note": "present" },
                    { "text": "Opened", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "열어요", "phonetic": "Yeo-reo-yo", "note": "polite_present" },
                    { "text": "열었어요", "phonetic": "Yeo-reo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "開けます", "phonetic": "Akemasu", "note": "polite_present" },
                    { "text": "開けました", "phonetic": "Akemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "關上", "phonetic": "" }],
                "en-US": [
                    { "text": "Close", "phonetic": "", "note": "present" },
                    { "text": "Closed", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "닫아요", "phonetic": "Da-da-yo", "note": "polite_present" },
                    { "text": "닫았어요", "phonetic": "Da-da-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "閉めます", "phonetic": "Shimemasu", "note": "polite_present" },
                    { "text": "閉めました", "phonetic": "Shimemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "拉", "phonetic": "" }],
                "en-US": [
                    { "text": "Pull", "phonetic": "", "note": "present" },
                    { "text": "Pulled", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "당겨요", "phonetic": "Dang-gyeo-yo", "note": "polite_present" },
                    { "text": "당겼어요", "phonetic": "Dang-gyeo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "引きます", "phonetic": "Hikimasu", "note": "polite_present" },
                    { "text": "引きました", "phonetic": "Hikimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "推", "phonetic": "" }],
                "en-US": [
                    { "text": "Push", "phonetic": "", "note": "present" },
                    { "text": "Pushed", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "밀어요", "phonetic": "Mi-reo-yo", "note": "polite_present" },
                    { "text": "밀었어요", "phonetic": "Mi-reo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "押します", "phonetic": "Oshimasu", "note": "polite_present" },
                    { "text": "押しました", "phonetic": "Oshimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "進入", "phonetic": "" }],
                "en-US": [
                    { "text": "Enter", "phonetic": "", "note": "present" },
                    { "text": "Entered", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "들어가요", "phonetic": "Deu-reo-ga-yo", "note": "polite_present" },
                    { "text": "들어갔어요", "phonetic": "Deu-reo-ga-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "入ります", "phonetic": "Hairimasu", "note": "polite_present" },
                    { "text": "入りました", "phonetic": "Hairimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "出去", "phonetic": "" }],
                "en-US": [
                    { "text": "Exit", "phonetic": "", "note": "present" },
                    { "text": "Exited", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "나가요", "phonetic": "Na-ga-yo", "note": "polite_present" },
                    { "text": "나갔어요", "phonetic": "Na-ga-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "出ます", "phonetic": "Demasu", "note": "polite_present" },
                    { "text": "出ました", "phonetic": "Demashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "坐", "phonetic": "" }],
                "en-US": [
                    { "text": "Sit", "phonetic": "", "note": "present" },
                    { "text": "Sat", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "앉아요", "phonetic": "An-ja-yo", "note": "polite_present" },
                    { "text": "앉았어요", "phonetic": "An-ja-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "座ります", "phonetic": "Suwarimasu", "note": "polite_present" },
                    { "text": "座りました", "phonetic": "Suwarimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "站", "phonetic": "" }],
                "en-US": [
                    { "text": "Stand", "phonetic": "", "note": "present" },
                    { "text": "Stood", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "서요", "phonetic": "Seo-yo", "note": "polite_present" },
                    { "text": "섰어요", "phonetic": "Seo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "立ちます", "phonetic": "Tachimasu", "note": "polite_present" },
                    { "text": "立ちました", "phonetic": "Tachimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "睡覺", "phonetic": "" }],
                "en-US": [
                    { "text": "Sleep", "phonetic": "", "note": "present" },
                    { "text": "Slept", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "자요", "phonetic": "Ja-yo", "note": "polite_present" },
                    { "text": "잤어요", "phonetic": "Ja-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "寝ます", "phonetic": "Nemasu", "note": "polite_present" },
                    { "text": "寝ました", "phonetic": "Nemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "起床", "phonetic": "" }],
                "en-US": [
                    { "text": "Wake up", "phonetic": "", "note": "present" },
                    { "text": "Woke up", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "일어나요", "phonetic": "Il-eo-na-yo", "note": "polite_present" },
                    { "text": "일어났어요", "phonetic": "Il-eo-na-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "起きます", "phonetic": "Okimasu", "note": "polite_present" },
                    { "text": "起きました", "phonetic": "Okimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "洗", "phonetic": "" }],
                "en-US": [
                    { "text": "Wash", "phonetic": "", "note": "present" },
                    { "text": "Washed", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "씻어요", "phonetic": "Ssi-seo-yo", "note": "polite_present" },
                    { "text": "씻었어요", "phonetic": "Ssi-seo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "洗います", "phonetic": "Araimasu", "note": "polite_present" },
                    { "text": "洗いました", "phonetic": "Araimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "付錢", "phonetic": "" }],
                "en-US": [
                    { "text": "Pay", "phonetic": "", "note": "present" },
                    { "text": "Paid", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "내요", "phonetic": "Nae-yo", "note": "polite_present" },
                    { "text": "냈어요", "phonetic": "Nae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "払います", "phonetic": "Haraimasu", "note": "polite_present" },
                    { "text": "払いました", "phonetic": "Haraimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "換", "phonetic": "" }],
                "en-US": [
                    { "text": "Change", "phonetic": "", "note": "present" },
                    { "text": "Changed", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "바꿔요", "phonetic": "Ba-kkwo-yo", "note": "polite_present" },
                    { "text": "바꿨어요", "phonetic": "Ba-kkwo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "変えます", "phonetic": "Kaemasu", "note": "polite_present" },
                    { "text": "変えました", "phonetic": "Kaemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "幫忙", "phonetic": "" }],
                "en-US": [
                    { "text": "Help", "phonetic": "", "note": "present" },
                    { "text": "Helped", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "도와요", "phonetic": "Do-wa-yo", "note": "polite_present" },
                    { "text": "도왔어요", "phonetic": "Do-wa-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "助けます", "phonetic": "Tasukemasu", "note": "polite_present" },
                    { "text": "助けました", "phonetic": "Tasukemashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "喜歡", "phonetic": "" }],
                "en-US": [
                    { "text": "Like", "phonetic": "", "note": "present" },
                    { "text": "Liked", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "좋아해요", "phonetic": "Jo-a-hae-yo", "note": "polite_present" },
                    { "text": "좋아했어요", "phonetic": "Jo-a-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "好きです", "phonetic": "Suki desu", "note": "polite_present" },
                    { "text": "好きでした", "phonetic": "Suki deshita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "不喜歡", "phonetic": "" }],
                "en-US": [
                    { "text": "Dislike", "phonetic": "", "note": "present" },
                    { "text": "Disliked", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "싫어해요", "phonetic": "Si-reo-hae-yo", "note": "polite_present" },
                    { "text": "싫어했어요", "phonetic": "Si-reo-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "嫌いです", "phonetic": "Kirai desu", "note": "polite_present" },
                    { "text": "嫌いでした", "phonetic": "Kirai deshita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "工作", "phonetic": "" }],
                "en-US": [
                    { "text": "Work", "phonetic": "", "note": "present" },
                    { "text": "Worked", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "일해요", "phonetic": "Il-hae-yo", "note": "polite_present" },
                    { "text": "일했어요", "phonetic": "Il-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "働きます", "phonetic": "Hatarakimasu", "note": "polite_present" },
                    { "text": "働きました", "phonetic": "Hatarakimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "休息", "phonetic": "" }],
                "en-US": [
                    { "text": "Rest", "phonetic": "", "note": "present" },
                    { "text": "Rested", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "쉬어요", "phonetic": "Swi-eo-yo", "note": "polite_present" },
                    { "text": "쉬었어요", "phonetic": "Swi-eo-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "休みます", "phonetic": "Yasumimasu", "note": "polite_present" },
                    { "text": "休ました", "phonetic": "Yasumimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "見面", "phonetic": "" }],
                "en-US": [
                    { "text": "Meet", "phonetic": "", "note": "present" },
                    { "text": "Met", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "만나요", "phonetic": "Man-na-yo", "note": "polite_present" },
                    { "text": "만났어요", "phonetic": "Man-na-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "会います", "phonetic": "Aimasu", "note": "polite_present" },
                    { "text": "会いました", "phonetic": "Aimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "到達", "phonetic": "" }],
                "en-US": [
                    { "text": "Arrive", "phonetic": "", "note": "present" },
                    { "text": "Arrived", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "도착해요", "phonetic": "Do-cha-kae-yo", "note": "polite_present" },
                    { "text": "도착했어요", "phonetic": "Do-cha-kae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "到着します", "phonetic": "Touchaku shimasu", "note": "polite_present" },
                    { "text": "到着しました", "phonetic": "Touchaku shimashita", "note": "polite_past" }
                ]
            },
            {
                "zh-TW": [{ "text": "出發", "phonetic": "" }],
                "en-US": [
                    { "text": "Depart", "phonetic": "", "note": "present" },
                    { "text": "Departed", "phonetic": "", "note": "past" }
                ],
                "ko-KR": [
                    { "text": "출발해요", "phonetic": "Chul-bal-hae-yo", "note": "polite_present" },
                    { "text": "출발했어요", "phonetic": "Chul-bal-hae-sseo-yo", "note": "polite_past" }
                ],
                "ja-JP": [
                    { "text": "出発します", "phonetic": "Shuppatsu shimasu", "note": "polite_present" },
                    { "text": "出発しました", "phonetic": "Shuppatsu shimashita", "note": "polite_past" }
                ]
            }
        ]
    }
];
