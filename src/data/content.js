export const LEARN_LANGS = ['ko', 'en']; // Korean, English
export const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const ko = (uz, ru) => ({ uz, ru });
const en = (uz, ru) => ({ uz, ru });

// ─── VOCABULARY ───
export const vocabulary = [
  // Korean
  { lang: 'ko', word: '사랑', uz: 'sevgi, muhabbat', ru: 'любовь', pron: 'sarang', ex: '사랑은 아름답다.', exUz: 'Sevgi chiroyli.', exRu: 'Любовь прекрасна.', level: 'Beginner', cat: 'Feelings' },
  { lang: 'ko', word: '물', uz: 'suv', ru: 'вода', pron: 'mul', ex: '물을 마셔요.', exUz: 'Suv iching.', exRu: 'Пейте воду.', level: 'Beginner', cat: 'Nature' },
  { lang: 'ko', word: '행복하다', uz: 'baxtli', ru: 'счастливый', pron: 'haengbokhada', ex: '오늘 행복해요.', exUz: 'Bugun baxtliman.', exRu: 'Я сегодня счастлив.', level: 'Beginner', cat: 'Adjectives' },
  { lang: 'ko', word: '배우다', uz: "o'rganmoq", ru: 'учить, изучать', pron: 'baeuda', ex: '한국어를 배워요.', exUz: "Koreys tilini o'rgayman.", exRu: 'Я учу корейский.', level: 'Beginner', cat: 'Verbs' },
  { lang: 'ko', word: '친구', uz: "do'st", ru: 'друг', pron: 'chingu', ex: '그는 제 친구예요.', exUz: 'U mening do\'stim.', exRu: 'Он мой друг.', level: 'Beginner', cat: 'People' },
  { lang: 'ko', word: '여행', uz: 'sayohat', ru: 'путешествие', pron: 'yeohaeng', ex: '여행을 좋아해요.', exUz: 'Menga sayohat juda yoqadi.', exRu: 'Я люблю путешествовать.', level: 'Beginner', cat: 'Nouns' },
  { lang: 'ko', word: '아름답다', uz: 'chiroyli', ru: 'красивый', pron: 'areumdapda', ex: '경복궁은 아름다워요.', exUz: 'Kyonbokkung juda chiroyli.', exRu: 'Кёнбоккун прекрасен.', level: 'Intermediate', cat: 'Adjectives' },
  { lang: 'ko', word: '지식', uz: 'bilim', ru: 'знание', pron: 'jisik', ex: '지식은 힘이다.', exUz: 'Bilim kuch.', exRu: 'Знание — сила.', level: 'Intermediate', cat: 'Nouns' },
  { lang: 'ko', word: '이루다', uz: 'erishmoq', ru: 'достигать', pron: 'iruda', ex: '꿈을 이루세요.', exUz: 'O\'zingizning hayolingizga erishing.', exRu: 'Достигните своей мечты.', level: 'Intermediate', cat: 'Verbs' },
  { lang: 'ko', word: '기회', uz: 'imkoniyat', ru: 'возможность', pron: 'gihoe', ex: '기회를 놓치지 마세요.', exUz: 'Imkoniyatni quvlanmang.', exRu: 'Не упускайте возможность.', level: 'Intermediate', cat: 'Nouns' },
  { lang: 'ko', word: '도전', uz: 'chaqiriq, qiyinchilik', ru: 'вызов, трудность', pron: 'dojeon', ex: '이 일은 도전이에요.', exUz: 'Bu ish chaqiriq.', exRu: 'Это вызов.', level: 'Intermediate', cat: 'Nouns' },
  { lang: 'ko', word: '부지런하다', uz: 'tirishtoq', ru: 'усердный', pron: 'bujireonhada', ex: '부지런한 학생은 매일 공부해요.', exUz: 'Tirishtoq talaba har kuni o\'rgaydi.', exRu: 'Усердный студент учится каждый день.', level: 'Intermediate', cat: 'Adjectives' },
  { lang: 'ko', word: '인내', uz: 'matonat, qat\'iyat', ru: 'настойчивость', pron: 'innae', ex: '인내는 성공으로 이끈다.', exUz: 'Matonat muvaffaqiyatga yetadi.', exRu: 'Упорство ведёт к успеху.', level: 'Advanced', cat: 'Nouns' },
  { lang: 'ko', word: '불가피하다', uz: 'muqarrar', ru: 'неизбежный', pron: 'bulgapihada', ex: '변화는 불가피해요.', exUz: 'O\'zgarish muqarrar.', exRu: 'Изменение неизбежно.', level: 'Advanced', cat: 'Adjectives' },
  { lang: 'ko', word: '유창하다', uz: 'ravon (gapirish)', ru: 'беглый', pron: 'yuchanghada', ex: '그녀는 한국어를 유창하게 해요.', exUz: 'U koreys tilini ravon gapiradi.', exRu: 'Она свободно говорит по-корейски.', level: 'Advanced', cat: 'Adjectives' },
  { lang: 'ko', word: '사과', uz: 'olma', ru: 'яблоко', pron: 'sagwa', ex: '사과를 먹어요.', exUz: 'Olma yeyaman.', exRu: 'Я ем яблоко.', level: 'Beginner', cat: 'Food' },
  // English
  { lang: 'en', word: 'love', uz: 'sevgi, muhabbat', ru: 'любовь', pron: '/lʌv/', ex: 'Love is beautiful.', exUz: 'Sevgi chiroyli.', exRu: 'Любовь прекрасна.', level: 'Beginner', cat: 'Feelings' },
  { lang: 'en', word: 'water', uz: 'suv', ru: 'вода', pron: '/ˈwɔːtər/', ex: 'Drink water.', exUz: 'Suv iching.', exRu: 'Пейте воду.', level: 'Beginner', cat: 'Nature' },
  { lang: 'en', word: 'happy', uz: 'baxtli, xursand', ru: 'счастливый', pron: '/ˈhæpi/', ex: 'She is happy today.', exUz: 'U bugun baxtli.', exRu: 'Она сегодня счастлива.', level: 'Beginner', cat: 'Adjectives' },
  { lang: 'en', word: 'learn', uz: "o'rganmoq", ru: 'учить, изучать', pron: '/lɜːrn/', ex: 'We learn Korean.', exUz: "Biz koreys tilini o'rgaymiz.", exRu: 'Мы учим корейский.', level: 'Beginner', cat: 'Verbs' },
  { lang: 'en', word: 'friend', uz: "do'st", ru: 'друг', pron: '/frend/', ex: 'He is my best friend.', exUz: 'U mening eng yaqina do\'stim.', exRu: 'Он мой лучший друг.', level: 'Beginner', cat: 'People' },
  { lang: 'en', word: 'travel', uz: 'sayohat qilmoq', ru: 'путешествовать', pron: '/ˈtrævəl/', ex: 'I love to travel.', exUz: 'Menga sayohat qilish juda yoqadi.', exRu: 'Я люблю путешествовать.', level: 'Beginner', cat: 'Verbs' },
  { lang: 'en', word: 'beautiful', uz: 'chiroyli', ru: 'красивый', pron: '/ˈbjuːtɪfəl/', ex: 'It is a beautiful day.', exUz: 'Bugun chiroyli kun.', exRu: 'Сегодня прекрасный день.', level: 'Intermediate', cat: 'Adjectives' },
  { lang: 'en', word: 'knowledge', uz: 'bilim', ru: 'знание', pron: '/ˈnɒlɪdʒ/', ex: 'Knowledge is power.', exUz: 'Bilim kuch.', exRu: 'Знание — сила.', level: 'Intermediate', cat: 'Nouns' },
  { lang: 'en', word: 'achieve', uz: 'erishmoq', ru: 'достигать', pron: '/əˈtʃiːv/', ex: 'You can achieve your goals.', exUz: 'Siz maqsadingizga erishingiz mumkin.', exRu: 'Вы можете достичь своих целей.', level: 'Intermediate', cat: 'Verbs' },
  { lang: 'en', word: 'opportunity', uz: 'imkoniyat', ru: 'возможность', pron: '/ˌɒpərˈtjuːnəti/', ex: 'Never miss an opportunity.', exUz: 'Imkoniyatni eslab quvlanmang.', exRu: 'Никогда не упускайте возможность.', level: 'Advanced', cat: 'Nouns' },
  { lang: 'en', word: 'challenge', uz: 'chaqiriq, qiyinchilik', ru: 'вызов, трудность', pron: '/ˈtʃælɪndʒ/', ex: 'This task is a challenge.', exUz: 'Bu ish chaqiriq.', exRu: 'Это задание — вызов.', level: 'Intermediate', cat: 'Nouns' },
  { lang: 'en', word: 'diligent', uz: 'tirishtoq', ru: 'усердный', pron: '/ˈdɪlɪdʒənt/', ex: 'A diligent student studies daily.', exUz: 'Tirishtoq talaba har kuni o\'rgaydi.', exRu: 'Усердный студент учится ежедневно.', level: 'Intermediate', cat: 'Adjectives' },
  { lang: 'en', word: 'perseverance', uz: 'matonat, qat\'iyat', ru: 'настойчивость', pron: '/ˌpɜːrsəˈvɪrəns/', ex: 'Perseverance leads to success.', exUz: 'Matonat muvaffaqiyatga olib ketadi.', exRu: 'Упорство ведёт к успеху.', level: 'Advanced', cat: 'Nouns' },
  { lang: 'en', word: 'inevitable', uz: 'muqarrar', ru: 'неизбежный', pron: '/ɪnˈevɪtəbəl/', ex: 'Change is inevitable.', exUz: "O'zgarish muqarrar.", exRu: 'Изменение неизбежно.', level: 'Advanced', cat: 'Adjectives' },
  { lang: 'en', word: 'fluent', uz: 'ravon', ru: 'свободно', pron: '/ˈfluːənt/', ex: 'She speaks Korean fluently.', exUz: 'U koreys tilini ravon gapiradi.', exRu: 'Она свободно говорит по-корейски.', level: 'Advanced', cat: 'Adjectives' },
  { lang: 'en', word: 'apple', uz: 'olma', ru: 'яблоко', pron: '/ˈæpəl/', ex: 'An apple a day keeps the doctor away.', exUz: 'Kuniga bitta olma doktorni qo\'chiradi.', exRu: 'Яблоко в день и доктор не нужен.', level: 'Beginner', cat: 'Food' },
];

// ─── GRAMMAR ───
export const grammar = [
  // Korean
  { lang: 'ko', id: 'hangeul', title: 'Hangeul Alphabet', level: 'Beginner', rule: 'Korean alphabet: 14 consonants + 10 vowels. Blocks form syllables: 한 = ㅎ+ㅏ+ㄴ.', formula: 'ㄱㄴㄷ + ㅏㅓㅗ → 가나더', examples: ['한글 (han-geul)', '사랑 (sa-rang)', '한국 (han-guk)'], uz: 'Koreys alifbosi.', ru: 'Корейский алфавит.' },
  { lang: 'ko', id: 'topic-particles', title: 'Topic Particles (은/는)', level: 'Beginner', rule: '은 after consonant, 는 after vowel. Marks the topic.', formula: '저는 학생이에요', examples: ['저는 민준이에요.', '오늘은 월요일이에요.'], uz: 'Mavzu koʻrsatkichi.', ru: 'Показатель темы.' },
  { lang: 'ko', id: 'subject-particles', title: 'Subject Particles (이/가)', level: 'Beginner', rule: '이 after consonant, 가 after vowel. Marks the doer.', formula: '친구가 와요', examples: ['비가 와요.', '시간이 없어요.'], uz: 'Ega kaže.', ru: 'Показатель подлежащего.' },
  { lang: 'ko', id: 'object-particles', title: 'Object Particles (을/를)', level: 'Beginner', rule: '을 after consonant, 를 after vowel. Marks the object.', formula: '밥을 먹어요', examples: ['물을 마셔요.', '영화를 봐요.'], uz: 'To\'ldiruvchi kaže.', ru: 'Показатель дополнения.' },
  { lang: 'ko', id: 'present', title: 'Present Tense (아요/어요)', level: 'Beginner', rule: 'Verb stem + 아요 / 어요. Polite present.', formula: '가다 → 가요 | 먹다 → 먹어요', examples: ['학교에 가요.', '밥을 먹어요.'], uz: 'Hozirgi zamon.', ru: 'Настоящее время.' },
  { lang: 'ko', id: 'past', title: 'Past Tense (았/었어요)', level: 'Beginner', rule: 'Stem + 았어요 / 었어요.', formula: '가다 → 갔어요 | 먹다 → 먹었어요', examples: ['어제 친구를 만났어요.'], uz: 'O\'tmish zamon.', ru: 'Прошедшее время.' },
  { lang: 'ko', id: 'future', title: 'Future (을 거예요)', level: 'Intermediate', rule: 'Stem + (으)ㄹ 거예요. Plans.', formula: '가다 → 갈 거예요', examples: ['내일 서울에 갈 거예요.'], uz: 'Kelasi zamon.', ru: 'Будущее время.' },
  { lang: 'ko', id: 'negation', title: 'Negation (안/못)', level: 'Intermediate', rule: '안 + verb = do not. 못 + verb = cannot.', formula: '안 가요 | 못 가요', examples: ['오늘 안 바빠요.', '매운 음식을 못 먹어요.'], uz: 'Inkor.', ru: 'Отрицание.' },
  { lang: 'ko', id: 'honorifics', title: 'Honorifics', level: 'Intermediate', rule: '으세요 = polite request. 습니다/입니다 = formal.', formula: '앉으세요', examples: ['이쪽으로 오세요.', '감사합니다.'], uz: 'Hurmat shakli.', ru: 'Вежливые формы.' },
  { lang: 'ko', id: 'numbers', title: 'Numbers (Sino vs Native)', level: 'Intermediate', rule: 'Sino-Korean: money/date. Native: age/counting.', formula: '삼만 원 | 세 명', examples: ['하나, 둘, 셋', '사과 세 개 주세요.'], uz: 'Ikki sanoq tizimi.', ru: 'Две системы счёта.' },
  { lang: 'ko', id: 'connectors', title: 'Connectors', level: 'Advanced', rule: '고 = and. 지만 = but. 아서/어서 = because.', formula: '먹고 가요 | 비싸지만 좋아요', examples: ['밥을 먹고 학교에 가요.', '날씨가 춥지만 나가요.'], uz: 'Bog\'lovchilar.', ru: 'Союзы.' },
  { lang: 'ko', id: 'quoting', title: 'Reported Speech (~다고 하다)', level: 'Advanced', rule: 'Quote + 다고 하다.', formula: '"간다" → 간다고 했어요', examples: ['친구가 온다고 했어요.'], uz: 'Ko\'chirma gap.', ru: 'Косвенная речь.' },
  // English
  { lang: 'en', id: 'present-simple', title: 'Present Simple', level: 'Beginner', rule: 'Subject + base verb (+ s/es for he/she/it). Habits, facts.', formula: 'I work | He works', examples: ['I go to school every day.', 'She drinks tea.'], uz: 'O\'tkazma zamon.', ru: 'Настоящее простое.' },
  { lang: 'en', id: 'past-simple', title: 'Past Simple', level: 'Beginner', rule: 'Regular verbs + -ed, irregular change. Finished past actions.', formula: 'Subject + V2', examples: ['I visited my grandma yesterday.', 'They watched a movie.'], uz: 'O\'tmish zamon.', ru: 'Прошедшее простое.' },
  { lang: 'en', id: 'present-continuous', title: 'Present Continuous', level: 'Beginner', rule: 'am/is/are + V-ing. Actions happening now.', formula: 'am/is/are + verb-ing', examples: ['I am studying now.', 'They are playing football.'], uz: 'Hozirgi zamon.', ru: 'Настоящее продолженное.' },
  { lang: 'en', id: 'present-perfect', title: 'Present Perfect', level: 'Intermediate', rule: 'have/has + V3. Result in present.', formula: 'have/has + V3', examples: ['I have finished my homework.', 'She has never been to London.'], uz: 'O\'tmish-hozir zamoni.', ru: 'Настоящее совершенное.' },
  { lang: 'en', id: 'comparatives', title: 'Comparatives & Superlatives', level: 'Intermediate', rule: 'short adj + -er/-est; long adj + more/most.', formula: 'taller than / the tallest', examples: ['My house is bigger than yours.', 'This is the best day.'], uz: 'Sifatlarni qiyoslash.', ru: 'Сравнительная степень.' },
  { lang: 'en', id: 'conditionals', title: 'Conditionals (0, 1, 2)', level: 'Advanced', rule: 'Zero/First/Second conditional.', formula: 'If it rains, we stay / will stay / would stay', examples: ['If you heat water, it boils.', 'If I were rich, I would travel.'], uz: 'Shartli gaplar.', ru: 'Условные предложения.' },
  { lang: 'en', id: 'passive', title: 'Passive Voice', level: 'Advanced', rule: 'be + V3. Focus on the action.', formula: 'is/was/will be + V3', examples: ['The cake was baked by mom.', 'English is spoken worldwide.'], uz: 'Qat\'i voz.', ru: 'Страдательный залог.' },
];

// ─── COURSES ───
export const courses = [
  { id: 1, lang: 'ko', title: 'Korean from Zero', level: 'Beginner', price: 0, lessons: 24, rating: 4.9, desc: 'Hangeul, basics, first 500 words, simple dialogues.', img: '🌱' },
  { id: 2, lang: 'ko', title: 'Everyday Korean Conversation', level: 'Beginner', price: 0, lessons: 18, rating: 4.8, desc: 'Greetings, shopping, travel, small talk.', img: '💬' },
  { id: 3, lang: 'ko', title: 'Grammar Master', level: 'Intermediate', price: 99000, lessons: 30, rating: 4.9, desc: 'Particles, tenses, honorifics with practice.', img: '📘' },
  { id: 4, lang: 'ko', title: 'TOPIK Preparation', level: 'Advanced', price: 249000, lessons: 40, rating: 5.0, desc: 'TOPIK 3+ strategies + mock tests.', img: '🎯' },
  { id: 5, lang: 'ko', title: 'K-Pop & Drama Korean', level: 'Intermediate', price: 149000, lessons: 25, rating: 4.8, desc: 'Learn Korean with songs, dramas and slang.', img: '🎬' },
  { id: 6, lang: 'ko', title: 'Listening Pro', level: 'Intermediate', price: 0, lessons: 20, rating: 4.8, desc: 'Dialogues, dictations, shadowing.', img: '🎧' },
  { id: 7, lang: 'en', title: 'English from Zero', level: 'Beginner', price: 0, lessons: 24, rating: 4.9, desc: 'Alphabet, basics, first 500 words, simple dialogues.', img: '🌱' },
  { id: 8, lang: 'en', title: 'Everyday English Conversation', level: 'Beginner', price: 0, lessons: 18, rating: 4.8, desc: 'Greetings, shopping, travel, small talk.', img: '💬' },
  { id: 9, lang: 'en', title: 'Grammar Master', level: 'Intermediate', price: 99000, lessons: 30, rating: 4.9, desc: 'All tenses, articles, conditionals with practice.', img: '📘' },
  { id: 10, lang: 'en', title: 'IELTS Preparation', level: 'Advanced', price: 249000, lessons: 40, rating: 5.0, desc: 'Band 7+ strategies for all 4 modules.', img: '🎯' },
  { id: 11, lang: 'en', title: 'Business English', level: 'Advanced', price: 199000, lessons: 25, rating: 4.7, desc: 'Emails, meetings, presentations, interviews.', img: '💼' },
  { id: 12, lang: 'en', title: 'Listening Pro', level: 'Intermediate', price: 0, lessons: 20, rating: 4.8, desc: 'Podcasts, dictations, shadowing.', img: '🎧' },
];

export const premiumPlans = [
  { id: 'premium-1', title: 'Premium — 1 oy', price: 49000, months: 1, desc: 'Barcha pullik kurslar 1 oy ochiq.' },
  { id: 'premium-6', title: 'Premium — 6 oy', price: 199000, months: 6, desc: 'Barcha pullik kurslar 6 oy ochiq. −30% chegirma.' },
  { id: 'premium-12', title: 'Premium — 1 yil', price: 299000, months: 12, desc: 'Barcha pullik kurslar 1 yil ochiq. Eng arzon!' },
];

// ─── TESTS ───
export const quizzes = [
  { id: 'q-ko-beginner', lang: 'ko', title: 'Korean Beginner Check', level: 'Beginner', questions: [
    { q: '"사랑" tarjimasi?', opts: ['suv', 'sevgi', 'do\'st', 'olma'], a: 1 },
    { q: '"물" nimani anglatadi?', opts: ['non', 'suv', 'kitob', 'uy'], a: 1 },
    { q: '"친구" tarjimasi?', opts: ['dushman', 'oila', 'maktab', 'do\'st'], a: 3 },
    { q: '"기회" means?', opts: ['muammo', 'imkoniyat', 'vaqt', 'pul'], a: 1 },
    { q: '"인내" means?', opts: ['tasodif', 'matonat', 'osonlik', 'shoshilish'], a: 1 },
  ]},
  { id: 'q-en-beginner', lang: 'en', title: 'English Beginner Check', level: 'Beginner', questions: [
    { q: '"love" tarjimasi?', opts: ['suv', 'sevgi', 'do\'st', 'olma'], a: 1 },
    { q: '"water" tarjimasi?', opts: ['kitob', 'suv', 'non', 'olma'], a: 1 },
    { q: '"happy" tarjimasi?', opts: ['xafa', 'baxtli', 'charchagan', 'och'], a: 1 },
    { q: '"achieve" means?', opts: ['yo\'qotmoq', 'erishmoq', 'unutmoq', 'kulmoq'], a: 1 },
    { q: '"perseverance" means?', opts: ['tasodif', 'matonat', 'osonlik', 'shoshilish'], a: 1 },
  ]},
  { id: 'q-ko-intermediate', lang: 'ko', title: 'Korean Intermediate Check', level: 'Intermediate', questions: [
    { q: '어제 밥을 ___ .', opts: ['먹어요', '먹었어요', '먹을 거예요', '먹고 있어요'], a: 1 },
    { q: '"가지 않아요" = ?', opts: ['bormayman', 'boraman', 'borgan edim', 'borasizmi'], a: 0 },
    { q: '내일 운동___ 거예요.', opts: ['해요', '했어요', '할', '하고'], a: 2 },
    { q: '"하지만" means?', opts: ['shuning uchun', 'lekin', 'chunki', 'va'], a: 1 },
    { q: '"앉으세요" = ?', opts: ['o\'tiring (iltimos)', 'turing', 'boring', 'keling'], a: 0 },
  ]},
  { id: 'q-en-intermediate', lang: 'en', title: 'English Intermediate Check', level: 'Intermediate', questions: [
    { q: 'I have ___ my homework.', opts: ['finish', 'finished', 'finishing', 'finishes'], a: 1 },
    { q: 'My house is ___ than yours.', opts: ['big', 'biger', 'bigger', 'biggest'], a: 2 },
    { q: 'She has never ___ to London.', opts: ['been', 'be', 'being', 'go'], a: 0 },
    { q: 'If it rains, we ___ at home.', opts: ['stay', 'will stay', 'would stay', 'stayed'], a: 1 },
    { q: '"Knowledge" means?', opts: ['bilim', 'kitob', 'suv', 'vaqt'], a: 0 },
  ]},
  { id: 'q-ko-advanced', lang: 'ko', title: 'Korean Advanced Check', level: 'Advanced', questions: [
    { q: '"불가피하다" means?', opts: ['tasodifiy', 'muqarrar', 'oson', 'qiyin'], a: 1 },
    { q: '친구가 "간다"고 ___ .', opts: ['했어요', '해요', '할 거예요', '했습니다요'], a: 0 },
    { q: '"인내" means?', opts: ['tasodif', 'matonat', 'osonlik', 'shoshilish'], a: 1 },
    { q: '"유창하다" = ?', opts: ['sekin', 'ravon', 'baland', 'jim'], a: 1 },
    { q: '"도전" = ?', opts: ['dam olish', 'chaqiriq', 'uyqu', 'ovqat'], a: 1 },
  ]},
  { id: 'q-en-advanced', lang: 'en', title: 'English Advanced Check', level: 'Advanced', questions: [
    { q: '"Inevitable" means?', opts: ['tasodifiy', 'muqarrar', 'oson', 'qiyin'], a: 1 },
    { q: 'If I ___ rich, I would travel.', opts: ['am', 'was', 'were', 'will be'], a: 2 },
    { q: 'Change is ___.', opts: ['evitable', 'inevitable', 'inevitably', 'evit'], a: 1 },
    { q: '"Perseverance" means?', opts: ['tasodif', 'matonat', 'osonlik', 'shoshilish'], a: 1 },
    { q: '"Fluent" means?', opts: ['sekin', 'ravon', 'baland', 'jim'], a: 1 },
  ]},
];

// ─── READINGS ───
export const readings = [
  { lang: 'ko', id: 1, title: 'My Daily Routine', level: 'Beginner', text: '저는 아침 7시에 일어나요. 이를 닦고 아침밥을 먹어요. 그리고 학교에 가요. 방과 후에 숙제를 하고 친구들이랑 놀아요. 저녁에는 책을 읽고 10시에 자요.', uz: 'Men soat 7 da uzyonaman...', ru: 'Я просыпаюсь в 7 часов...' },
  { lang: 'ko', id: 2, title: 'My Family', level: 'Beginner', text: '제 이름은 지훈이에요. 저희 가족은 작아요. 아버지, 어머니, 그리고 여동생이 있어요.', uz: 'Mening ismim Jihun...', ru: 'Меня зовут Джихун...' },
  { lang: 'ko', id: 3, title: 'Healthy Lifestyle', level: 'Intermediate', text: '건강한 생활에는 세 가지가 필요해요. 좋은 음식, 규칙적인 운동, 그리고 충분한 잠이에요.', uz: 'Sog\'lom turmush uchun...', ru: 'Для здорового образа жизни...' },
  { lang: 'ko', id: 4, title: 'Trip to Seoul', level: 'Intermediate', text: '지난 휴가에 서울에 갔어요. 경복궁을 보고 명동에서 쇼핑을 했어요.', uz: 'Otgan ta\'tilda Seulga bordim...', ru: 'В прошлые каникулы я ездил в Сеул...' },
  { lang: 'ko', id: 5, title: 'Korean Food', level: 'Intermediate', text: '한국 음식은 채소와 발효 음식으로 유명해요. 김치는 가장 대표적인 음식이에요.', uz: 'Koreys taomlari...', ru: 'Корейская еда...' },
  { lang: 'ko', id: 6, title: 'Future Technology', level: 'Advanced', text: '인공지능은 피할 수 없는 미래예요. 교육, 의료, 사업을 바꾸고 있어요.', uz: 'Sun\'iy intellekt muqarrar...', ru: 'Искусственный интеллект неизбежен...' },
  { lang: 'en', id: 7, title: 'My Daily Routine', level: 'Beginner', text: 'I wake up at 7 o\'clock. I brush my teeth and eat breakfast. Then I go to school. After school, I do my homework and play with my friends.', uz: 'Men soat 7 da uzyonaman...', ru: 'Я просыпаюсь в 7 часов...' },
  { lang: 'en', id: 8, title: 'The Power of Habits', level: 'Intermediate', text: 'Success does not come from one big action. It comes from small habits repeated every day.', uz: 'Muvaffaqiyat bitta katta harakatdan kelmaydi...', ru: 'Успех приходит не от одного большого действия...' },
  { lang: 'en', id: 9, title: 'Artificial Intelligence', level: 'Advanced', text: 'Artificial intelligence is inevitable. It transforms education, medicine, and business.', uz: 'Sun\'iy intellekt muqarrar...', ru: 'Искусственный интеллект неизбежен...' },
];

// ─── LISTENINGS ───
export const listenings = [
  { lang: 'ko', id: 1, title: 'At the Airport', level: 'Beginner', script: '어서 오세요! 인천 공항입니다. 비행기는 9시예요.', task: 'What time is the flight?' },
  { lang: 'ko', id: 2, title: 'Greetings', level: 'Beginner', script: '민준: 안녕하세요! 저는 민준이에요. 지영: 안녕하세요! 저는 지영이에요.', task: 'What are their names?' },
  { lang: 'ko', id: 3, title: 'My Family', level: 'Beginner', script: '저는 작은 가족이 있어요. 아버지는 선생님이세요.', task: 'How many people in the family?' },
  { lang: 'ko', id: 4, title: 'At the Restaurant', level: 'Intermediate', script: '손님: 불고기 하나랑 김치찌개 하나 주세요.', task: 'What did the customer order?' },
  { lang: 'ko', id: 5, title: 'Shopping', level: 'Intermediate', script: '손님: 이 셔츠 얼마예요? 점원: 5만 원이에요.', task: 'What is the price of the shirt?' },
  { lang: 'ko', id: 6, title: 'Weekend Plans', level: 'Intermediate', script: '철수: 주말에 뭐 해요? 영희: 친구들이랑 등산 갈 거예요.', task: 'What is Younghee doing on Saturday?' },
  { lang: 'ko', id: 7, title: 'Technology', level: 'Advanced', script: '기술은 계속 발전합니다. 인공지능을 두려워하는 사람도 있지만.', task: 'What is the speaker’s opinion about AI?' },
  { lang: 'ko', id: 8, title: 'Environment', level: 'Advanced', script: '환경 운동가들은 각국이 행동하지 않으면 기후 변화가 돌이킬 수 없게 된다고 경고합니다.', task: 'What solution does the speaker suggest?' },
  { lang: 'ko', id: 9, title: 'Job Interview', level: 'Advanced', script: '면접관: 인내심에 대해 말해보세요. 지원자: 2년 동안 부지런히 일했습니다.', task: 'What qualities does the candidate describe?' },
  { lang: 'en', id: 10, title: 'At the Airport', level: 'Beginner', script: 'Hello! Welcome to Tashkent Airport. Your flight is at 9 AM.', task: 'What time is the flight?' },
  { lang: 'en', id: 11, title: 'Ordering Food', level: 'Intermediate', script: 'Waiter: Hello, what would you like? Customer: I would like a burger and orange juice, please.', task: 'What did the customer order?' },
  { lang: 'en', id: 12, title: 'Job Interview', level: 'Advanced', script: 'Interviewer: Tell me about your perseverance. Candidate: I worked diligently for two years.', task: 'What qualities does the candidate describe?' },
];

export const topikPractice = {
  reading: {
    passage: '한글은 1443년 세종대왕이 만들었습니다. 한글은 배우기 쉽고 과학적인 문자예요. 자음 14개와 모음 10개로 모든 소리를 쓸 수 있어요. 그 전에는 어려운 한자만 있어서 백성들이 글을 못 읽었어요. 지금 한글날은 10월 9일이에요.',
    questions: [
      { q: 'Who created Hangeul?', opts: ['A farmer', 'King Sejong', 'A scientist', 'A merchant'], a: 1 },
      { q: 'When was Hangeul created?', opts: ['1343', '1443', '1543', '1943'], a: 1 },
      { q: 'How many consonants does Hangeul have?', opts: ['10', '12', '14', '24'], a: 2 },
      { q: 'Why couldn\u2019t people read before Hangeul?', opts: ['No schools', 'Only difficult Chinese characters', 'No paper', 'No teachers'], a: 1 },
      { q: 'When is Hangeul Day?', opts: ['October 9', 'August 15', 'March 1', 'January 1'], a: 0 },
    ],
  },
  listening: {
    script: '손님: 안녕하세요, 2명 예약했어요. 김민준이에요. 직원: 네, 확인했어요. 창가 자리로 안내해 드릴게요. 손님: 감사합니다. 불고기 2인분 주세요. 직원: 네, 잠시만 기다려 주세요.',
    questions: [
      { q: 'How many people reserved?', opts: ['One', 'Two', 'Three', 'Four'], a: 1 },
      { q: 'What is the guest\u2019s name?', opts: ['Kim Minjun', 'Park Jihun', 'Lee Sara', 'Choi Tom'], a: 0 },
      { q: 'Where will they sit?', opts: ['Outside', 'By the window', 'Upstairs', 'At the bar'], a: 1 },
      { q: 'What did they order?', opts: ['Bibimbap', 'Kimchi stew', 'Bulgogi for two', 'Cold noodles'], a: 2 },
      { q: 'What did the staff say at the end?', opts: ['Goodbye', 'Please wait a moment', 'Come again', 'Closed today'], a: 1 },
    ],
  },
  writing: {
    task1: 'TOPIK 쓰기: 다음 그래프를 보고 설명하세요 (200-300자). Tip: 전체 흐름, 비교, 과거형 사용.',
    sample1: '이 그래프는 상반기 박물관 방문자 수를 보여줍니다. 전체적으로 1월 2천 명에서 5월 8천 명까지 꾸준히 늘었습니다. 2월과 3월은 조금씩 늘었고, 4월에 가장 크게 늘었습니다. 결론적으로 봄이 가장 인기 있는 계절이었습니다.',
    task2: 'TOPIK 쓰기: 대학 교육은 모두에게 무료여야 할까요? 찬반 의견을 쓰세요 (600-700자).',
    sample2: '무료 대학 교육은 논쟁이 많습니다. 찬성하는 사람들은 가난한 학생도 꿈을 이룰 수 있다고 합니다. 반대하는 사람들은 돈이 너무 많이 들고 질이 낮아진다고 합니다. 저는 성적이 좋은 부지런한 학생에게 무료 자리를 주는 게 제일 좋다고 생각합니다.',
  },
  speaking: {
    part1: ['고향이 어디예요?', '학교에 다녀요, 일해요?', '취미가 뭐예요?', '독서를 좋아해요? 왜요?'],
    part2: '영향을 준 책을 설명하세요: 무슨 책인지, 언제 읽었는지, 내용 \u2013 왜 영향을 줬는지. (1분 준비, 2분 말하기)',
    part3: ['요즘 사람들이 예전보다 책을 덜 읽어요?', '학교는 독서를 어떻게 권장할 수 있어요?', '전자책이 종이책을 대신할까요?'],
  },
};

export const dailyChallenges = [
  'Learn 5 new words today',
  'Complete 1 grammar lesson',
  'Do 1 test without mistakes',
  'Read 1 text aloud',
  'Listen and shadow 3 minutes',
  'Write 5 sentences',
  'Repeat 10 saved words',
];
