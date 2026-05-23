const questions = [
  {
    question: 'しんちゃんの<ruby>本名<rt>ほんみょう</rt></ruby>（フルネーム）はどれでしょう？',
    options: [
      '<ruby>野原<rt>のはら</rt></ruby>まもる',
      '<ruby>野原<rt>のはら</rt></ruby>きよし',
      '<ruby>野原<rt>のはら</rt></ruby>しんのすけ',
      '<ruby>野原<rt>のはら</rt></ruby>みつお'
    ],
    correct: 2
  },
  {
    question: 'しんちゃんが<ruby>大好<rt>だいす</rt></ruby>きな<ruby>おやつ<rt>おやつ</rt></ruby>はどれでしょう？',
    options: [
      'グミ',
      'せんべい',
      'ポッキー',
      'チョコビ'
    ],
    correct: 3
  },
  {
    question: 'しんちゃんの<ruby>妹<rt>いもうと</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんでしょう？',
    options: [
      'さくら',
      'ひまわり',
      'なのはな',
      'すみれ'
    ],
    correct: 1
  },
  {
    question: 'しんちゃんが<ruby>通<rt>かよ</rt></ruby>う<ruby>幼稚園<rt>ようちえん</rt></ruby>の<ruby>クラス<rt>くらす</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はどれでしょう？',
    options: [
      'さくら<ruby>組<rt>ぐみ</rt></ruby>',
      'たんぽぽ<ruby>組<rt>ぐみ</rt></ruby>',
      'ばら<ruby>組<rt>ぐみ</rt></ruby>',
      'ひまわり<ruby>組<rt>ぐみ</rt></ruby>'
    ],
    correct: 3
  },
  {
    question: 'しんちゃんの<ruby>家族<rt>かぞく</rt></ruby>が<ruby>住<rt>す</rt></ruby>んでいる<ruby>市<rt>し</rt></ruby>はどこでしょう？',
    options: [
      '<ruby>春日部市<rt>かすかべし</rt></ruby>',
      '<ruby>川越市<rt>かわごえし</rt></ruby>',
      '<ruby>熊谷市<rt>くまがやし</rt></ruby>',
      '<ruby>所沢市<rt>ところざわし</rt></ruby>'
    ],
    correct: 0
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
  return shuffle(questions).map(q => {
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

  qNumEl.innerHTML  = `<ruby>第<rt>だい</rt></ruby>${num}<ruby>問<rt>もん</rt></ruby>`;
  qCountEl.textContent = `${num} / ${total}`;
  progressFill.style.width = `${((num - 1) / total) * 100}%`;

  questionEl.innerHTML = q.question;

  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML  = `<span class="option-label">${LABELS[i]}</span>${opt}`;
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
    feedbackEl.innerHTML =
      `⭕ <strong>せいかい！</strong> すばらしい！`;
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
    scoreMsg.innerHTML =
      'まんてん！ すごい！<br>'
      + 'しんちゃん<ruby>博士<rt>はかせ</rt></ruby>だね！';
  } else if (score >= 3) {
    resultIcon.textContent = '😊';
    scoreMsg.innerHTML =
      'よくできました！<br>'
      + 'もういちど<ruby>挑戦<rt>ちょうせん</rt></ruby>してみよう！';
  } else if (score >= 1) {
    resultIcon.textContent = '😅';
    scoreMsg.innerHTML =
      'もうすこし！<br>'
      + 'またチャレンジしてね！';
  } else {
    resultIcon.textContent = '😢';
    scoreMsg.innerHTML =
      'ざんねん！<br>'
      + 'もういちどやってみよう！';
  }
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);

startQuiz();
