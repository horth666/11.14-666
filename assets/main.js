(function () {
  'use strict';

  var questions = [
    { tag: '暧昧聊天', text: '他突然发来一句「睡了吗」，你会怎么回？', options: ['刚准备睡，你也早点休息。', '还没呢，怎么啦？', '你是想陪我睡吗？', '等你这句等半天了，继续。'], scores: [0, 1, 2, 3] },
    { tag: '心动瞬间', text: '并肩走路时，他的手背轻轻碰到你，你的第一反应是？', options: ['默默往旁边挪半步。', '假装没发现，但耳朵开始热。', '不挪，看看他还会不会碰。', '直接把手递过去，别试探了。'], scores: [0, 1, 2, 3] },
    { tag: '恋爱互动', text: '约会结束，他说「今天很开心」，你最想接哪句？', options: ['我也是，路上小心。', '下次可以再约。', '只开心吗？我以为你会舍不得。', '那下次换我安排，让你更开心。'], scores: [0, 1, 2, 3] },
    { tag: '撩人技巧', text: '你发了一张新买的裙子照片，他问「穿给谁看？」', options: ['当然是自己喜欢。', '给你看看不行吗？', '怎么，想当第一个观众？', '你要是想看，可以申请现场版。'], scores: [0, 1, 2, 3] },
    { tag: '脑洞情景', text: '如果喜欢的人变成一只猫，只允许你带回家一天，你会？', options: ['给它准备最好的猫粮和小窝。', '一直摸它，顺便观察它像不像本人。', '抱着它睡觉，绝不放手。', '给它戴蝴蝶结，宣布这是我的男朋友。'], scores: [0, 1, 2, 3] },
    { tag: '恋爱小心思', text: '他朋友圈发了新照片，你的手指会？', options: ['划过去，保持体面。', '点个赞，顺便看看评论区。', '点赞后再回去看两遍。', '先收藏，再想一个自然的开场白。'], scores: [0, 1, 2, 3] },
    { tag: '暧昧聊天', text: '聊天聊到凌晨，他说「你困不困？」你觉得这句话的潜台词是？', options: ['单纯提醒我早点睡。', '可能是他也有一点舍不得结束。', '在等我说一句“那你陪我”。', '他在暗示：今晚不想只说晚安。'], scores: [0, 1, 2, 3] },
    { tag: '心动瞬间', text: '他记得你随口提过的小习惯，你会怎么表现？', options: ['认真说一句谢谢。', '嘴上淡定，心里已经放烟花。', '问他是不是一直在偷偷观察我。', '奖励一个只给他的拥抱。'], scores: [0, 1, 2, 3] },
    { tag: '恋爱互动', text: '你们看同一部电影，他突然把爆米花递到你嘴边。', options: ['自己拿过来吃，避免尴尬。', '愣一下，再张嘴。', '吃完后说：再来一颗？', '故意咬住他的手指，看他先躲还是先红。'], scores: [0, 1, 2, 3] },
    { tag: '撩人技巧', text: '他问你理想型，你想让他听懂一点点，会说？', options: ['阳光、善良、有责任心。', '最近刚好认识一个有点像的人。', '你站近一点，我描述得更准确。', '理想型不重要，正在聊天的这个比较重要。'], scores: [0, 1, 2, 3] },
    { tag: '脑洞情景', text: '你们被困在雨里的便利店，只有一把伞。你会？', options: ['各走各的，反正也不远。', '和他一起撑，保持一点距离。', '把伞往他那边倾，自己淋一点。', '直接挽住他：这把伞只能装下两个人。'], scores: [0, 1, 2, 3] },
    { tag: '恋爱小心思', text: '他认真看着你说「你今天很漂亮」，你最真实的回答是？', options: ['谢谢，你今天也不错。', '真的吗？我今天明明很随便。', '那你多看一会儿，我不介意。', '我知道，所以你准备好被我迷住了吗？'], scores: [0, 1, 2, 3] }
  ];

  var results = [
    { min: 0, max: 13, tier: 'LEVEL 01', title: '纯情小白兔', scoreBase: 10, tease: '别人一句主动，你的心跳先替你承认了。', description: '你是那种真正的纯情选手，暧昧雷达还在试用期。别人稍微靠近一点，你表面说着“还好吧”，内心已经把这段对话做成了慢放回顾。', personality: '软乎乎、慢热、共情力很强。', inLove: '喜欢一个人会偷偷观察很久，确认安全后才把一点点偏爱递出去。', quote: '不是你不会撩，是你一认真就太可爱。', color: '#9a5360', bg: '#fbf0eb' },
    { min: 14, max: 15, tier: 'LEVEL 02', title: '表面乖乖女', scoreBase: 28, tease: '嘴上说“随便”，心里已经写好三种剧本。', description: '你看起来乖得像不会迟到的早八选手，实际上心里偶尔会飘过一些大胆想法。只是每次想要主动，手指先把手机锁屏了，等对方再靠近半步。', personality: '表面淡定，内心戏多，边界感很漂亮。', inLove: '会用小小的暗示试探温度，确认对方认真后才放心放软。', quote: '我没有想太多，是你刚好都对上了。', color: '#aa6870', bg: '#faeee9' },
    { min: 16, max: 17, tier: 'LEVEL 03', title: '偶尔开车选手', scoreBase: 47, tease: '平时人畜无害，关键时刻突然语出惊人。', description: '你不是一直在开车，但车钥匙确实随身携带。大部分时间温和正常，偶尔一句精准接梗让全桌安静三秒，然后你还会无辜地问：“怎么了？”', personality: '反差感很强，幽默感是隐藏武器。', inLove: '喜欢用玩笑把心动藏起来，撩完还要装作只是气氛到了。', quote: '我只是接了个梗，怎么大家都脸红了？', color: '#9d4f59', bg: '#f9ebe5' },
    { min: 18, max: 19, tier: 'LEVEL 04', title: '隐藏老司机', scoreBase: 64, tease: '看起来什么都不懂，其实反应快得惊人。', description: '你的厉害在于“不动声色”。别人还在铺垫，你已经听懂了潜台词；别人以为你没接住，你只是决定让暧昧多停留两秒。真正的高手，确实很安静。', personality: '观察力满分，情绪稳定，拿捏感自然。', inLove: '从不急着摊牌，享受两个人心照不宣地靠近。', quote: '我当然听懂了，只是想看你还能说什么。', color: '#833c49', bg: '#f8e7e1' },
    { min: 20, max: 21, tier: 'LEVEL 05', title: '高级撩人玩家', scoreBase: 82, tease: '你不是在制造暧昧，你只是让心动自己发生。', description: '你很懂分寸，也很懂留白。一个眼神、一句半真半假的话，就能让气氛悄悄升温。你不会追着心动跑，你会让心动自己走到你身边。', personality: '自信、敏锐，懂得进退也享受主动。', inLove: '会制造让人记很久的小瞬间，轻轻一撩，却让对方回味一整晚。', quote: '我给的是暗示，不是答案。你要自己走近。', color: '#7a3443', bg: '#f8e4de' },
    { min: 22, max: 36, tier: 'LEVEL 06', title: '满级涩女王', scoreBase: 96, tease: '暧昧是你的主场，心动只是你的日常。', description: '你拥有一颗清醒又大胆的心。接梗、控场、把喜欢说得漂亮，全部都不在话下。你不是没有害羞，只是害羞也能成为你气氛里最迷人的一部分。', personality: '脑洞清奇，气场松弛，魅力完全自洽。', inLove: '敢于表达，也擅长把每一次靠近变成值得收藏的片段。', quote: '别问我几分熟，问就是刚好熟到让你心动。', color: '#6b2938', bg: '#f6e0da' }
  ];

  var state = { current: 0, answers: [], locked: false, result: null };
  var els = {};
  var toastTimer = null;

  function qs(id) { return document.getElementById(id); }
  function init() {
    els.app = qs('app'); els.home = qs('homeView'); els.quiz = qs('quizView'); els.reveal = qs('revealView'); els.result = qs('resultView');
    els.start = qs('startBtn'); els.quizBack = qs('quizBackBtn'); els.prev = qs('prevBtn'); els.options = qs('options');
    els.kicker = qs('questionKicker'); els.question = qs('questionText'); els.count = qs('questionCount'); els.progress = qs('progressBar');
    els.resultHome = qs('resultHomeBtn'); els.retry = qs('retryBtn'); els.save = qs('saveBtn'); els.share = qs('shareMiniBtn'); els.toast = qs('toast');
    els.start.addEventListener('click', startQuiz); els.quizBack.addEventListener('click', goHome); els.prev.addEventListener('click', previousQuestion);
    els.resultHome.addEventListener('click', goHome); els.retry.addEventListener('click', resetQuiz); els.save.addEventListener('click', saveReport); els.share.addEventListener('click', saveReport);
    setAppHeight(); window.addEventListener('resize', setAppHeight);
    document.documentElement.className += supportsFlexGap() ? ' supports-flex-gap' : '';
  }
  function setAppHeight() { document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px'); }
  function supportsFlexGap() {
    var flex = document.createElement('div'); flex.style.display = 'flex'; flex.style.flexDirection = 'column'; flex.style.rowGap = '1px'; flex.style.position = 'absolute'; flex.style.visibility = 'hidden';
    flex.appendChild(document.createElement('div')); flex.appendChild(document.createElement('div')); document.body.appendChild(flex); var supported = flex.scrollHeight === 1; document.body.removeChild(flex); return supported;
  }
  function switchView(next) {
    var views = [els.home, els.quiz, els.reveal, els.result]; views.forEach(function (view) { var active = view === next; view.classList.toggle('is-active', active); view.setAttribute('aria-hidden', active ? 'false' : 'true'); });
  }
  function startQuiz() { state.current = 0; state.answers = []; state.locked = false; switchView(els.quiz); renderQuestion(); }
  function renderQuestion() {
    var item = questions[state.current]; var answer = state.answers[state.current];
    els.kicker.textContent = 'Q. ' + String(state.current + 1).padStart(2, '0') + ' · ' + item.tag; els.count.textContent = String(state.current + 1).padStart(2, '0') + ' / 12'; els.progress.style.width = ((state.current + 1) / questions.length * 100) + '%'; els.question.textContent = item.text;
    els.options.innerHTML = '';
    item.options.forEach(function (label, index) { var button = document.createElement('button'); button.type = 'button'; button.className = 'option' + (answer === index ? ' selected' : ''); button.setAttribute('data-letter', String.fromCharCode(65 + index)); button.textContent = label; button.addEventListener('click', function () { chooseOption(index); }); els.options.appendChild(button); });
    els.prev.classList.toggle('is-available', state.current > 0);
  }
  function chooseOption(index) {
    if (state.locked) return; state.locked = true; state.answers[state.current] = index;
    var buttons = els.options.querySelectorAll('.option'); if (buttons[index]) buttons[index].classList.add('selected');
    window.setTimeout(function () { if (state.current === questions.length - 1) showReveal(); else { state.current += 1; state.locked = false; renderQuestion(); } }, 300);
  }
  function previousQuestion() { if (state.current === 0 || state.locked) return; state.current -= 1; renderQuestion(); }
  function showReveal() { switchView(els.reveal); window.setTimeout(showResult, 1350); }
  function showResult() {
    var total = state.answers.reduce(function (sum, answer, index) { return sum + (questions[index].scores[answer] || 0); }, 0); var result = results[results.length - 1]; results.forEach(function (candidate) { if (total >= candidate.min && total <= candidate.max) result = candidate; });
    var score = Math.min(100, result.scoreBase + Math.round((total - result.min) / Math.max(1, result.max - result.min) * 5)); state.result = { data: result, score: score, total: total };
    document.documentElement.style.setProperty('--result-color', result.color); document.documentElement.style.setProperty('--result-bg', result.bg); switchView(els.result); fillResult(result, score); animateNumber(score);
  }
  function fillResult(result, score) { qs('resultTierTag').textContent = result.tier; qs('resultTitle').textContent = result.title; qs('resultTease').textContent = result.tease; qs('resultDescription').textContent = result.description; qs('personality').textContent = result.personality; qs('inLove').textContent = result.inLove; qs('resultQuote').textContent = result.quote; qs('reportNo').textContent = 'NO. ' + String(score).padStart(3, '0'); }
  function animateNumber(target) { var node = qs('scoreNumber'); var start = 0; var started = Date.now(); function tick() { var progress = Math.min(1, (Date.now() - started) / 920); var eased = 1 - Math.pow(1 - progress, 3); node.textContent = Math.round(start + (target - start) * eased); if (progress < 1) window.requestAnimationFrame(tick); } window.requestAnimationFrame(tick); }
  function resetQuiz() { state.current = 0; state.answers = []; state.locked = false; state.result = null; switchView(els.home); }
  function goHome() { if (state.locked) return; switchView(els.home); }
  function showToast(message) { window.clearTimeout(toastTimer); els.toast.textContent = message; els.toast.classList.add('is-visible'); toastTimer = window.setTimeout(function () { els.toast.classList.remove('is-visible'); }, 2600); }
  function saveReport() {
    if (!state.result) return; var canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 1600; var ctx = canvas.getContext('2d'); ctx.scale(4 / 3, 4 / 3); var r = state.result.data; var score = state.result.score; drawReportCanvas(ctx, 900, 1200, r, score);
    var dataUrl = canvas.toDataURL('image/png'); var link = document.createElement('a'); link.href = dataUrl; link.download = '我的涩度报告-' + r.title + '.png'; document.body.appendChild(link); link.click(); document.body.removeChild(link); showToast('报告已生成，去相册看看吧 ♡');
  }
  function drawReportCanvas(ctx, width, height, result, score) {
    ctx.fillStyle = result.bg; ctx.fillRect(0, 0, width, height); ctx.fillStyle = '#5b2e33'; ctx.font = '22px Arial'; ctx.fillText('测测你的涩女程度', 70, 82); ctx.textAlign = 'right'; ctx.font = '15px Arial'; ctx.fillText('LOVE NOTES  ·  REPORT', width - 70, 82); ctx.textAlign = 'left'; ctx.strokeStyle = '#dbb8b0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(70, 108); ctx.lineTo(width - 70, 108); ctx.stroke();
    ctx.strokeStyle = '#e6b7b0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(width - 142, 177, 53, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = result.color; ctx.font = '32px Georgia'; ctx.textAlign = 'center'; ctx.fillText('♡', width - 142, 188); ctx.textAlign = 'left';
    ctx.fillStyle = '#b16e70'; ctx.font = '22px Arial'; ctx.fillText('你的涩度报告', 70, 191); ctx.fillStyle = result.color; ctx.font = '150px Georgia'; ctx.fillText(String(score), 70, 365); ctx.fillStyle = '#bd8e88'; ctx.font = '28px Arial'; ctx.fillText('/100', 332, 365); ctx.fillStyle = '#9e6b6c'; ctx.font = '18px Arial'; ctx.fillText('涩度指数', 78, 402);
    ctx.fillStyle = result.color; ctx.font = '24px Arial'; ctx.fillText(result.tier, 70, 474); ctx.fillStyle = '#54272d'; ctx.font = '54px Georgia'; ctx.fillText(result.title, 70, 548); ctx.fillStyle = '#95686a'; ctx.font = '22px Arial'; wrapCanvas(ctx, result.tease, 70, 590, 760, 36);
    ctx.fillStyle = '#fffaf4'; ctx.fillRect(70, 700, 760, 320); ctx.strokeStyle = '#e5c8c0'; ctx.strokeRect(70, 700, 760, 320); ctx.fillStyle = '#ad6e70'; ctx.font = '18px Arial'; ctx.fillText('/ 你的隐藏属性', 108, 755); ctx.fillStyle = '#65363b'; ctx.font = '24px Georgia'; wrapCanvas(ctx, result.description, 108, 802, 680, 39); ctx.fillStyle = '#faece5'; ctx.fillRect(108, 920, 680, 70); ctx.fillStyle = result.color; ctx.font = '24px Georgia'; ctx.fillText('“', 130, 952); ctx.font = '21px Arial'; wrapCanvas(ctx, result.quote, 164, 953, 570, 31); ctx.font = '24px Georgia'; ctx.fillText('”', 755, 983);
    ctx.fillStyle = '#8d5559'; ctx.font = '17px Arial'; ctx.fillText('心动研究所  ·  仅供娱乐', 70, 1110); ctx.fillStyle = result.color; ctx.font = '31px Georgia'; ctx.textAlign = 'right'; ctx.fillText('✦ ♡ ✧', 830, 1110); ctx.textAlign = 'left';
  }
  function wrapCanvas(ctx, text, x, y, maxWidth, lineHeight) { var words = text.split(''); var line = ''; var lines = []; words.forEach(function (word) { var test = line + word; if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = word; } else { line = test; } }); if (line) lines.push(line); lines.forEach(function (item, index) { ctx.fillText(item, x, y + index * lineHeight); }); }
  init();
}());
