const QUESTIONS_PER_GAME = 5;

const questions = [
  {
    question: 'しんちゃんの<ruby>本名<rt>ほんみょう</rt></ruby>（フルネーム）はどれでしょう？',
    options: ['<ruby>野原<rt>のはら</rt></ruby>まもる', '<ruby>野原<rt>のはら</rt></ruby>みつお', '<ruby>野原<rt>のはら</rt></ruby>しんのすけ', '<ruby>野原<rt>のはら</rt></ruby>かずや'],
    correct: 2
  },
  {
    question: 'しんちゃんのお<ruby>父<rt>とう</rt></ruby>さんの<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['<ruby>野原<rt>のはら</rt></ruby>ひろし', '<ruby>野原<rt>のはら</rt></ruby>たかし', '<ruby>野原<rt>のはら</rt></ruby>かつや', '<ruby>野原<rt>のはら</rt></ruby>まこと'],
    correct: 0
  },
  {
    question: 'しんちゃんのお<ruby>母<rt>かあ</rt></ruby>さんの<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['<ruby>野原<rt>のはら</rt></ruby>あゆみ', '<ruby>野原<rt>のはら</rt></ruby>みさえ', '<ruby>野原<rt>のはら</rt></ruby>ゆかり', '<ruby>野原<rt>のはら</rt></ruby>さとみ'],
    correct: 1
  },
  {
    question: 'しんちゃんの<ruby>妹<rt>いもうと</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['<ruby>野原<rt>のはら</rt></ruby>なのはな', '<ruby>野原<rt>のはら</rt></ruby>さくら', '<ruby>野原<rt>のはら</rt></ruby>すみれ', '<ruby>野原<rt>のはら</rt></ruby>ひまわり'],
    correct: 3
  },
  {
    question: 'しんちゃんの<ruby>犬<rt>いぬ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['クロ', 'ハチ', 'シロ', 'ポチ'],
    correct: 2
  },
  {
    question: 'しんちゃんの<ruby>家族<rt>かぞく</rt></ruby>が<ruby>住<rt>す</rt></ruby>んでいる<ruby>市<rt>し</rt></ruby>はどこでしょう？',
    options: ['<ruby>春日部市<rt>かすかべし</rt></ruby>', '<ruby>川越市<rt>かわごえし</rt></ruby>', '<ruby>熊谷市<rt>くまがやし</rt></ruby>', '<ruby>所沢市<rt>ところざわし</rt></ruby>'],
    correct: 0
  },
  {
    question: 'しんちゃんの<ruby>家族<rt>かぞく</rt></ruby>が<ruby>住<rt>す</rt></ruby>んでいる<ruby>都道府県<rt>とどうふけん</rt></ruby>はどこでしょう？',
    options: ['<ruby>東京都<rt>とうきょうと</rt></ruby>', '<ruby>神奈川県<rt>かながわけん</rt></ruby>', '<ruby>千葉県<rt>ちばけん</rt></ruby>', '<ruby>埼玉県<rt>さいたまけん</rt></ruby>'],
    correct: 3
  },
  {
    question: 'しんちゃんが<ruby>通<rt>かよ</rt></ruby>う<ruby>幼稚園<rt>ようちえん</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['さくら<ruby>幼稚園<rt>ようちえん</rt></ruby>', 'ふたば<ruby>幼稚園<rt>ようちえん</rt></ruby>', 'みどり<ruby>幼稚園<rt>ようちえん</rt></ruby>', 'みつば<ruby>幼稚園<rt>ようちえん</rt></ruby>'],
    correct: 1
  },
  {
    question: 'しんちゃんのクラスの<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['さくら<ruby>組<rt>ぐみ</rt></ruby>', 'ばら<ruby>組<rt>ぐみ</rt></ruby>', 'ひまわり<ruby>組<rt>ぐみ</rt></ruby>', 'たんぽぽ<ruby>組<rt>ぐみ</rt></ruby>'],
    correct: 2
  },
  {
    question: 'しんちゃんのクラスの<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>はどれでしょう？',
    options: ['よしなが<ruby>先生<rt>せんせい</rt></ruby>', 'まつざか<ruby>先生<rt>せんせい</rt></ruby>', 'うめ<ruby>先生<rt>せんせい</rt></ruby>', 'さくら<ruby>先生<rt>せんせい</rt></ruby>'],
    correct: 0
  },
  {
    question: 'しんちゃんが<ruby>大好<rt>だいす</rt></ruby>きなおやつはどれでしょう？',
    options: ['グミ', 'せんべい', 'ポッキー', 'チョコビ'],
    correct: 3
  },
  {
    question: 'しんちゃんが<ruby>大好<rt>だいす</rt></ruby>きなヒーローはどれでしょう？',
    options: ['スーパーマン', 'アクション<ruby>仮面<rt>かめん</rt></ruby>', 'ウルトラマン', '<ruby>仮面<rt>かめん</rt></ruby>ライダー'],
    correct: 1
  },
  {
    question: 'かすかべ<ruby>防衛隊<rt>ぼうえいたい</rt></ruby>のメンバーは<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>何人<rt>なんにん</rt></ruby>でしょう？',
    options: ['3<ruby>人<rt>にん</rt></ruby>', '4<ruby>人<rt>にん</rt></ruby>', '5<ruby>人<rt>にん</rt></ruby>', '6<ruby>人<rt>にん</rt></ruby>'],
    correct: 2
  },
  {
    question: 'かすかべ<ruby>防衛隊<rt>ぼうえいたい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>のメンバーはだれでしょう？',
    options: ['マサオくん', 'ボーちゃん', '<ruby>風間<rt>かざま</rt></ruby>くん', 'ネネちゃん'],
    correct: 3
  },
  {
    question: 'クレヨンしんちゃんを<ruby>作<rt>つく</rt></ruby>った<ruby>漫画家<rt>まんがか</rt></ruby>はだれでしょう？',
    options: ['<ruby>臼井儀人<rt>うすいよしと</rt></ruby>', '<ruby>鳥山明<rt>とりやまあきら</rt></ruby>', '<ruby>高橋留美子<rt>たかはしるみこ</rt></ruby>', '<ruby>藤子<rt>ふじこ</rt></ruby>・F・<ruby>不二雄<rt>ふじお</rt></ruby>'],
    correct: 0
  },
  {
    question: 'クレヨンしんちゃんのアニメが<ruby>始<rt>はじ</rt></ruby>まったのは<ruby>何年<rt>なんねん</rt></ruby>でしょう？',
    options: ['1988<ruby>年<rt>ねん</rt></ruby>', '1992<ruby>年<rt>ねん</rt></ruby>', '1995<ruby>年<rt>ねん</rt></ruby>', '2000<ruby>年<rt>ねん</rt></ruby>'],
    correct: 1
  },
  {
    question: 'しんちゃんは<ruby>何歳<rt>なんさい</rt></ruby>でしょう？',
    options: ['3<ruby>歳<rt>さい</rt></ruby>', '4<ruby>歳<rt>さい</rt></ruby>', '5<ruby>歳<rt>さい</rt></ruby>', '6<ruby>歳<rt>さい</rt></ruby>'],
    correct: 2
  },
  {
    question: 'しんちゃんのお<ruby>父<rt>とう</rt></ruby>さん・ひろしの<ruby>年齢<rt>ねんれい</rt></ruby>はどれでしょう？',
    options: ['30<ruby>歳<rt>さい</rt></ruby>', '40<ruby>歳<rt>さい</rt></ruby>', '45<ruby>歳<rt>さい</rt></ruby>', '35<ruby>歳<rt>さい</rt></ruby>'],
    correct: 3
  },
  {
    question: 'しんちゃんのお<ruby>母<rt>かあ</rt></ruby>さん・みさえの<ruby>年齢<rt>ねんれい</rt></ruby>はどれでしょう？',
    options: ['29<ruby>歳<rt>さい</rt></ruby>', '25<ruby>歳<rt>さい</rt></ruby>', '32<ruby>歳<rt>さい</rt></ruby>', '35<ruby>歳<rt>さい</rt></ruby>'],
    correct: 0
  },
  {
    question: 'しんちゃんの<ruby>妹<rt>いもうと</rt></ruby>・ひまわりが<ruby>特<rt>とく</rt></ruby>に<ruby>好<rt>す</rt></ruby>きなものはどれでしょう？',
    options: ['ぬいぐるみ', '<ruby>宝石<rt>ほうせき</rt></ruby>（キラキラ<ruby>光<rt>ひか</rt></ruby>るもの）', '<ruby>電車<rt>でんしゃ</rt></ruby>', 'お<ruby>花<rt>はな</rt></ruby>'],
    correct: 1
  },
  {
    question: 'かすかべ<ruby>防衛隊<rt>ぼうえいたい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でいつも<ruby>大人<rt>おとな</rt></ruby>っぽくしている<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>はだれでしょう？',
    options: ['マサオくん', 'ボーちゃん', '<ruby>風間<rt>かざま</rt></ruby>くん', 'しんのすけ'],
    correct: 2
  },
  {
    question: 'しんちゃんのお<ruby>父<rt>とう</rt></ruby>さん・ひろしの<ruby>仕事<rt>しごと</rt></ruby>はどれでしょう？',
    options: ['お<ruby>医者<rt>いしゃ</rt></ruby>さん', '<ruby>先生<rt>せんせい</rt></ruby>', '<ruby>消防士<rt>しょうぼうし</rt></ruby>', '<ruby>会社員<rt>かいしゃいん</rt></ruby>（サラリーマン）'],
    correct: 3
  },
  {
    question: '<ruby>野原<rt>のはら</rt></ruby><ruby>家<rt>け</rt></ruby>の<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>でしょう？（シロをのぞいて）',
    options: ['4<ruby>人<rt>にん</rt></ruby>', '2<ruby>人<rt>にん</rt></ruby>', '3<ruby>人<rt>にん</rt></ruby>', '5<ruby>人<rt>にん</rt></ruby>'],
    correct: 0
  },
  {
    question: 'しんちゃんのお<ruby>父<rt>とう</rt></ruby>さん・ひろしが<ruby>好<rt>す</rt></ruby>きなお<ruby>酒<rt>さけ</rt></ruby>はどれでしょう？',
    options: ['<ruby>日本酒<rt>にほんしゅ</rt></ruby>', 'ビール', 'ワイン', 'ウイスキー'],
    correct: 1
  },
  {
    question: 'ネネちゃんの<ruby>苗字<rt>みょうじ</rt></ruby>はどれでしょう？',
    options: ['<ruby>山田<rt>やまだ</rt></ruby>', '<ruby>田中<rt>たなか</rt></ruby>', '<ruby>上尾<rt>うえお</rt></ruby>', '<ruby>松本<rt>まつもと</rt></ruby>'],
    correct: 2
  },
  {
    question: '<ruby>風間<rt>かざま</rt></ruby>くんの<ruby>下<rt>した</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['まさる', 'けんじ', 'まもる', 'トオル'],
    correct: 3
  },
  {
    question: 'しんちゃんがよく<ruby>着<rt>き</rt></ruby>ているシャツの<ruby>色<rt>いろ</rt></ruby>はどれでしょう？',
    options: ['<ruby>黄色<rt>きいろ</rt></ruby>', '<ruby>赤<rt>あか</rt></ruby>', '<ruby>青<rt>あお</rt></ruby>', '<ruby>緑<rt>みどり</rt></ruby>'],
    correct: 0
  },
  {
    question: 'しんちゃんの<ruby>犬<rt>いぬ</rt></ruby>・シロの<ruby>毛<rt>け</rt></ruby>の<ruby>色<rt>いろ</rt></ruby>はどれでしょう？',
    options: ['<ruby>黒<rt>くろ</rt></ruby>', '<ruby>白<rt>しろ</rt></ruby>', '<ruby>茶色<rt>ちゃいろ</rt></ruby>', 'グレー'],
    correct: 1
  },
  {
    question: 'クレヨンしんちゃんが<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>掲載<rt>けいさい</rt></ruby>された<ruby>漫画雑誌<rt>まんがざっし</rt></ruby>はどれでしょう？',
    options: ['<ruby>少年<rt>しょうねん</rt></ruby>ジャンプ', '<ruby>少年<rt>しょうねん</rt></ruby>マガジン', '<ruby>週刊漫画<rt>しゅうかんまんが</rt></ruby>アクション', '<ruby>少年<rt>しょうねん</rt></ruby>サンデー'],
    correct: 2
  },
  {
    question: 'クレヨンしんちゃんの<ruby>映画<rt>えいが</rt></ruby>が<ruby>初<rt>はじ</rt></ruby>めて<ruby>公開<rt>こうかい</rt></ruby>されたのは<ruby>何年<rt>なんねん</rt></ruby>でしょう？',
    options: ['1990<ruby>年<rt>ねん</rt></ruby>', '1995<ruby>年<rt>ねん</rt></ruby>', '1998<ruby>年<rt>ねん</rt></ruby>', '1993<ruby>年<rt>ねん</rt></ruby>'],
    correct: 3
  },
  {
    question: 'しんちゃんがよく<ruby>踊<rt>おど</rt></ruby>るキャラクターの<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: ['ケツだけ<ruby>星人<rt>せいじん</rt></ruby>', 'おなかだけ<ruby>星人<rt>せいじん</rt></ruby>', 'アタマだけ<ruby>星人<rt>せいじん</rt></ruby>', 'テだけ<ruby>星人<rt>せいじん</rt></ruby>'],
    correct: 0
  },
  {
    question: 'しんちゃんのお<ruby>父<rt>とう</rt></ruby>さん・ひろしで<ruby>有名<rt>ゆうめい</rt></ruby>なのはどれでしょう？',
    options: ['<ruby>料理<rt>りょうり</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なこと', '<ruby>足<rt>あし</rt></ruby>がくさいこと', '<ruby>歌<rt>うた</rt></ruby>が<ruby>下手<rt>へた</rt></ruby>なこと', '<ruby>走<rt>はし</rt></ruby>るのが<ruby>速<rt>はや</rt></ruby>いこと'],
    correct: 1
  },
  {
    question: 'クレヨンしんちゃんのアニメでしんちゃんの<ruby>声<rt>こえ</rt></ruby>を<ruby>担当<rt>たんとう</rt></ruby>した<ruby>声優<rt>せいゆう</rt></ruby>はだれでしょう？',
    options: ['<ruby>水樹奈々<rt>みずきなな</rt></ruby>', '<ruby>林原<rt>はやしばら</rt></ruby>めぐみ', '<ruby>矢島晶子<rt>やじまあきこ</rt></ruby>', '<ruby>日高<rt>ひだか</rt></ruby>のり<ruby>子<rt>こ</rt></ruby>'],
    correct: 2
  },
  {
    question: 'しんちゃんの<ruby>犬<rt>いぬ</rt></ruby>・シロはどこからきた<ruby>犬<rt>いぬ</rt></ruby>でしょう？',
    options: ['ペットショップで<ruby>買<rt>か</rt></ruby>った', '<ruby>友<rt>とも</rt></ruby>だちにもらった', '<ruby>生<rt>う</rt></ruby>まれたときからいた', '<ruby>野良犬<rt>のらいぬ</rt></ruby>だったのを<ruby>拾<rt>ひろ</rt></ruby>ってきた'],
    correct: 3
  },
  {
    question: 'ボーちゃんはどんな<ruby>子<rt>こ</rt></ruby>として<ruby>有名<rt>ゆうめい</rt></ruby>でしょう？',
    options: ['ふしぎで<ruby>無口<rt>むくち</rt></ruby>な<ruby>子<rt>こ</rt></ruby>', 'うるさい<ruby>子<rt>こ</rt></ruby>', '<ruby>泣<rt>な</rt></ruby>き<ruby>虫<rt>むし</rt></ruby>の<ruby>子<rt>こ</rt></ruby>', 'いつも<ruby>怒<rt>おこ</rt></ruby>っている<ruby>子<rt>こ</rt></ruby>'],
    correct: 0
  },
  {
    question: 'クレヨンしんちゃんのアニメを<ruby>放送<rt>ほうそう</rt></ruby>しているテレビ<ruby>局<rt>きょく</rt></ruby>はどこでしょう？',
    options: ['NHK', 'テレビ<ruby>朝日<rt>あさひ</rt></ruby>', '<ruby>日本<rt>にほん</rt></ruby>テレビ', 'フジテレビ'],
    correct: 1
  },
  {
    question: 'しんちゃんのよしなが<ruby>先生<rt>せんせい</rt></ruby>のフルネームはどれでしょう？',
    options: ['<ruby>吉永<rt>よしなが</rt></ruby>さくら', '<ruby>吉永<rt>よしなが</rt></ruby>みどり', '<ruby>吉永<rt>よしなが</rt></ruby>ゆり', '<ruby>吉永<rt>よしなが</rt></ruby>はな'],
    correct: 2
  },
  {
    question: 'しんちゃんが<ruby>自分<rt>じぶん</rt></ruby>のことを<ruby>言<rt>い</rt></ruby>うときに<ruby>使<rt>つか</rt></ruby>う<ruby>言葉<rt>ことば</rt></ruby>はどれでしょう？',
    options: ['ぼく', 'おれ', 'わたし', 'オラ'],
    correct: 3
  },
  {
    question: 'しんちゃんのお<ruby>母<rt>かあ</rt></ruby>さん・みさえが<ruby>好<rt>す</rt></ruby>きなテレビの<ruby>種類<rt>しゅるい</rt></ruby>はどれでしょう？',
    options: ['<ruby>昼<rt>ひる</rt></ruby>ドラ（テレビドラマ）', 'アニメ', 'バラエティ<ruby>番組<rt>ばんぐみ</rt></ruby>', 'ニュース'],
    correct: 0
  },
  {
    question: 'しんちゃんのお<ruby>父<rt>とう</rt></ruby>さん・ひろしの<ruby>趣味<rt>しゅみ</rt></ruby>はどれでしょう？',
    options: ['<ruby>釣<rt>つ</rt></ruby>り', 'ゴルフ', 'テニス', '<ruby>登山<rt>とざん</rt></ruby>'],
    correct: 1
  },
  {
    question: 'しんちゃんがよくやる「ゾウさん」というポーズは<ruby>何<rt>なに</rt></ruby>をするでしょう？',
    options: ['<ruby>手<rt>て</rt></ruby>を<ruby>上<rt>うえ</rt></ruby>に<ruby>上<rt>あ</rt></ruby>げる', '<ruby>片足<rt>かたあし</rt></ruby>で<ruby>立<rt>た</rt></ruby>つ', 'ズボンを<ruby>下<rt>さ</rt></ruby>げておしりを<ruby>出<rt>だ</rt></ruby>す', 'しゃがむ'],
    correct: 2
  },
  {
    question: 'かすかべ<ruby>防衛隊<rt>ぼうえいたい</rt></ruby>のリーダーはだれでしょう？',
    options: ['<ruby>風間<rt>かざま</rt></ruby>くん', 'ネネちゃん', 'マサオくん', 'しんのすけ'],
    correct: 3
  },
  {
    question: 'しんちゃんが<ruby>好<rt>す</rt></ruby>きなアニメキャラクター「ぶりぶりざえもん」はどんなキャラクターでしょう？',
    options: ['しんちゃんが<ruby>好<rt>す</rt></ruby>きなアニメの<ruby>主人公<rt>しゅじんこう</rt></ruby>', 'しんちゃんのクラスの<ruby>先生<rt>せんせい</rt></ruby>', 'しんちゃんの<ruby>友<rt>とも</rt></ruby>だち', 'しんちゃんのとなりに<ruby>住<rt>す</rt></ruby>む<ruby>人<rt>ひと</rt></ruby>'],
    correct: 0
  },
  {
    question: 'マサオくんのフルネームはどれでしょう？',
    options: ['<ruby>田中<rt>たなか</rt></ruby><ruby>正男<rt>まさお</rt></ruby>', '<ruby>佐藤<rt>さとう</rt></ruby><ruby>正男<rt>まさお</rt></ruby>', '<ruby>鈴木<rt>すずき</rt></ruby><ruby>正男<rt>まさお</rt></ruby>', '<ruby>山田<rt>やまだ</rt></ruby><ruby>正男<rt>まさお</rt></ruby>'],
    correct: 1
  },
  {
    question: 'かすかべ<ruby>防衛隊<rt>ぼうえいたい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>でいつも<ruby>泣<rt>な</rt></ruby>いている<ruby>男<rt>おとこ</rt></ruby>の<ruby>子<rt>こ</rt></ruby>はだれでしょう？',
    options: ['<ruby>風間<rt>かざま</rt></ruby>くん', 'ボーちゃん', 'マサオくん', 'しんのすけ'],
    correct: 2
  },
  {
    question: 'しんちゃんの<ruby>幼稚園<rt>ようちえん</rt></ruby>でよしなが<ruby>先生<rt>せんせい</rt></ruby>のほかにいる<ruby>先生<rt>せんせい</rt></ruby>はだれでしょう？',
    options: ['はな<ruby>先生<rt>せんせい</rt></ruby>', 'うめ<ruby>先生<rt>せんせい</rt></ruby>', 'さくら<ruby>先生<rt>せんせい</rt></ruby>', 'まつざか<ruby>先生<rt>せんせい</rt></ruby>'],
    correct: 3
  },
  {
    question: '「春日部」の<ruby>正<rt>ただ</rt></ruby>しい<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>はどれでしょう？',
    options: ['かすかべ', 'はるひぶ', 'しゅんかぶ', 'かすがべ'],
    correct: 0
  },
  {
    question: 'しんちゃんと<ruby>妹<rt>いもうと</rt></ruby>のひまわりはどちらが<ruby>年上<rt>としうえ</rt></ruby>でしょう？',
    options: ['ひまわりのほうが<ruby>年上<rt>としうえ</rt></ruby>', 'しんちゃんのほうが<ruby>年上<rt>としうえ</rt></ruby>', '<ruby>双子<rt>ふたご</rt></ruby>', '<ruby>親戚<rt>しんせき</rt></ruby>の<ruby>子<rt>こ</rt></ruby>'],
    correct: 1
  },
  {
    question: 'しんちゃんの<ruby>好<rt>す</rt></ruby>きな<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>（おやつ<ruby>以外<rt>いがい</rt></ruby>）はどれでしょう？',
    options: ['すし', 'ラーメン', 'カレーライス', 'ハンバーガー'],
    correct: 2
  },
  {
    question: 'クレヨンしんちゃんのアニメは2020<ruby>年<rt>ねん</rt></ruby>ごろまでに<ruby>何話<rt>なんわ</rt></ruby>くらい<ruby>放送<rt>ほうそう</rt></ruby>されたでしょう？',
    options: ['100<ruby>話<rt>わ</rt></ruby>くらい', '200<ruby>話<rt>わ</rt></ruby>くらい', '500<ruby>話<rt>わ</rt></ruby>くらい', '1000<ruby>話<rt>わ</rt></ruby><ruby>以上<rt>いじょう</rt></ruby>'],
    correct: 3
  }
];

const LABELS = ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestions() {
  return shuffle(questions).slice(0, QUESTIONS_PER_GAME).map(q => {
    const indexed = q.options.map((opt, i) => ({ opt, isCorrect: i === q.correct }));
    const shuffled = shuffle(indexed);
    return {
      question: q.question,
      options:  shuffled.map(x => x.opt),
      correct:  shuffled.findIndex(x => x.isCorrect)
    };
  });
}

let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

const quizScreen   = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const qNumEl       = document.getElementById('q-num');
const qCountEl     = document.getElementById('q-count');
const progressFill = document.getElementById('progress-fill');
const questionEl   = document.getElementById('question-text');
const optionsEl    = document.getElementById('options');
const feedbackEl   = document.getElementById('feedback');
const nextBtn      = document.getElementById('next-btn');
const resultIcon   = document.getElementById('result-icon');
const scoreDisplay = document.getElementById('score-display');
const scoreMsg     = document.getElementById('score-msg');
const restartBtn   = document.getElementById('restart-btn');

function startQuiz() {
  activeQuestions = prepareQuestions();
  currentIndex = 0;
  score = 0;
  quizScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  answered = false;

  const q     = activeQuestions[currentIndex];
  const total = activeQuestions.length;
  const num   = currentIndex + 1;

  qNumEl.innerHTML     = `<ruby>第<rt>だい</rt></ruby>${num}<ruby>問<rt>もん</rt></ruby>`;
  qCountEl.textContent = `${num} / ${total}`;
  progressFill.style.width = `${((num - 1) / total) * 100}%`;

  questionEl.innerHTML = q.question;

  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${LABELS[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optionsEl.appendChild(btn);
  });

  feedbackEl.className = 'feedback hidden';
  feedbackEl.innerHTML = '';

  nextBtn.classList.add('hidden');
  nextBtn.textContent = currentIndex === activeQuestions.length - 1
    ? 'けっかを みる！'
    : 'つぎのもんだいへ →';
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q       = activeQuestions[currentIndex];
  const buttons = optionsEl.querySelectorAll('.option-btn');

  buttons.forEach(btn => (btn.disabled = true));

  if (selectedIndex === q.correct) {
    score++;
    buttons[selectedIndex].classList.add('correct');
    showFeedback(true, q.options[q.correct]);
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    buttons[q.correct].classList.add('highlight');
    showFeedback(false, q.options[q.correct]);
  }

  nextBtn.classList.remove('hidden');
}

function showFeedback(isCorrect, correctOptionHTML) {
  feedbackEl.className = `feedback ${isCorrect ? 'correct-fb' : 'incorrect-fb'}`;

  if (isCorrect) {
    feedbackEl.innerHTML = `⭕ <strong>せいかい！</strong> すばらしい！`;
  } else {
    feedbackEl.innerHTML =
      `❌ <strong>ざんねん！</strong><br>`
      + `<ruby>正解<rt>せいかい</rt></ruby>は「${correctOptionHTML}」でした。`;
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= activeQuestions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

function showResult() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  progressFill.style.width = '100%';

  const total = activeQuestions.length;
  scoreDisplay.innerHTML =
    `${total}<ruby>問<rt>もん</rt></ruby>中 `
    + `${score}<ruby>問<rt>もん</rt></ruby> `
    + `<ruby>正解<rt>せいかい</rt></ruby>！`;

  if (score === total) {
    resultIcon.textContent = '🎉';
    scoreMsg.innerHTML = 'まんてん！ すごい！<br>しんちゃん<ruby>博士<rt>はかせ</rt></ruby>だね！';
  } else if (score >= 3) {
    resultIcon.textContent = '😊';
    scoreMsg.innerHTML = 'よくできました！<br>もういちど<ruby>挑戦<rt>ちょうせん</rt></ruby>してみよう！';
  } else if (score >= 1) {
    resultIcon.textContent = '😅';
    scoreMsg.innerHTML = 'もうすこし！<br>またチャレンジしてね！';
  } else {
    resultIcon.textContent = '😢';
    scoreMsg.innerHTML = 'ざんねん！<br>もういちどやってみよう！';
  }
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);

startQuiz();
