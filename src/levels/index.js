// Each level is part of a "sequence;" levels within
// a sequence proceed in the order listed here
exports.levelSequences = {
  intro: [
    require('./intro/commits').level,
    require('./intro/branching').level,
    require('./intro/forkedHistory').level,
  ],
  rampup: [
    require('./rampup/detachedHead').level,
    require('./rampup/relativeRefs').level,
    require('./rampup/relativeRefs2').level,
    require('./rampup/reversingChanges').level
  ],
  merge: [
    require('./merge/fast-forward.js').level,
    require('./merge/realMerge.js').level
  ],
  remote: [
    require('./remote/clone').level,
    require('./remote/remoteBranches').level,
    require('./remote/fetch').level,
    require('./remote/pull').level,
    require('./remote/fakeTeamwork').level,
    require('./remote/push').level,
    require('./remote/fetchRebase').level,
    require('./remote/lockedMain').level
  ],
  remoteAdvanced: [
    require('./remote/pushManyFeatures').level,
    require('./remote/mergeManyFeatures').level,
  ]
};

// there are also cute names and such for sequences
var sequenceInfo = exports.sequenceInfo = {
  intro: {
    displayName: {
      'en_US': 'Introduction Sequence',
      'de_DE': 'Einführung',
      'ja'   : 'まずはここから',
      'fr_FR': 'Séquence d\'introduction',
      'es_AR': 'Secuencia introductoria',
      'es_MX': 'Secuencia introductoria',
      'es_ES': 'Secuencia introductoria',
      'pt_BR': 'Sequência introdutória',
      'gl'   : 'Secuencia introductoria',
      'zh_CN': '基础篇',
      'zh_TW': '基礎篇',
      'ko'   : 'git 기본',
      'ru_RU': 'Введение',
      'uk'   : 'Вступ',
      'vi'   : 'Giới Thiệu Chuỗi Luyện Tập',
      'sl_SI': 'Uvodno Zaporedje',
      'pl'   : 'Wprowadzenie',
      'it_IT': "Sequenza introduttiva",
      'ta_IN': 'அறிமுக தொடர் வரிசை',
      'tr_TR': 'Giriş bölümü'
    },
    about: {
      'en_US': 'A nicely paced introduction to the majority of git commands',
      'de_DE': 'Eine gut abgestimmte Einführung in die wichtigsten Git-Befehle',
      'ja'   : 'gitの基本的なコマンド群をほどよいペースで学ぶ',
      'fr_FR': 'Une introduction en douceur à la majorité des commandes Git',
      'es_AR': 'Una breve introducción a la mayoría de los comandos de git',
      'es_MX': 'Una breve introducción a la mayoría de los comandos de git',
      'es_ES': 'Una breve introducción a la mayoría de los comandos de git',
      'pt_BR': 'Uma breve introdução à maioria dos comandos do git',
      'gl'   : 'Unha breve introducción á maioría dos comandos de git',
      'zh_CN': '循序渐进地介绍 Git 主要命令',
      'zh_TW': '循序漸進地介紹 git 主要命令',
      'ko'   : 'git의 주요 명령어를 깔끔하게 알려드립니다',
      'ru_RU': 'Хорошо подобранное введение в основные команды git',
      'uk'   : 'Гарно підібране введення в основні команди git',
      'vi'   : 'Từng bước làm quen với phần lớn lệnh điều khiển Git',
      'sl_SI': 'Prijeten uvod v git ukaze',
      'pl'   : 'Krótkie wprowadzenie do większości poleceń Gita',
      'it_IT': "Un'introduzione graduale ai principali comandi Git",
      'ta_IN': 'பெரும்பாலான கிட் கட்டளைகளுக்கு ஒரு நல்ல அறிமுகம்',
      'tr_TR': 'Git komutlarının çoğunun yüksek tempolu bir tanıtımı'
    }
  },
  rampup: {
    displayName: {
      'en_US': 'Ramping Up',
      'de_DE': 'Eine Stufe höher',
      'ja'   : '次のレベルに進もう',
      'fr_FR': 'Montée en puissance',
      'es_AR': 'Acelerando',
      'es_MX': 'Acelerando',
      'es_ES': 'Acelerando',
      'pt_BR': 'Acelerando',
      'gl'   : 'Alixeirando',
      'zh_CN': '高级篇',
      'zh_TW': '進階篇',
      'ru_RU': 'Едем дальше',
      'uk'   : 'Їдемо далі',
      'ko'   : '다음 단계로',
      'vi'   : 'Tăng Tốc',
      'sl_SI': 'Prva Stopnička',
      'pl'   : 'Rozkręcenie',
      'it_IT': "Diamoci dentro",
      'ta_IN': 'சற்று அதிகப்படுத்த',
      'tr_TR': 'Hızlanma'
    },
    about: {
      'en_US': 'The next serving of 100% git awesomes-ness. Hope you\'re hungry',
      'de_DE': 'Eine Portion Git-Wahnsinn zum Thema Navigation',
      'ja'   : '更にgitの素晴らしさを堪能しよう',
      'fr_FR': 'Le prochain excellent plat de pur Git. J\'espère que vous êtes affamés',
      'es_AR': 'La próxima porción de 100% maravillas git. Espero que estés hambriento',
      'es_MX': 'La próxima ración de git. Espero que estés hambriento',
      'es_ES': 'La próxima ración de git. Espero que estés hambriento',
      'pt_BR': 'A próxima porção de maravilhas do git. Faminto?',
      'gl'   : 'A próxima porción das marabillas de git. Agardo que estés esfameado',
      'zh_CN': '要开始介绍 Git 的超棒特性了，快来吧！',
      'zh_TW': '接下來是 git 非常厲害的地方！相信你已經迫不及待了吧！',
      'ru_RU': 'Следующая порция абсолютной git-крутотенюшки. Проголодались?',
      'uk'   : 'Наступна порція абсолютної git-дивини. Сподіваюсь, ви зголодніли',
      'ko'   : 'git은 아주 멋져요. 왜 멋진지 알려드립니다',
      'vi'   : 'Tận hưởng khẩu phần tuyệt hảo của Git. Hi vọng bạn còn đói',
      'sl_SI': 'Naslednja porcija git izjemnosti. Upam, da si lačen',
      'pl'   : 'Następna porcja gita jest niesamowita. Mam nadzieję, że jesteś głodny',
      'it_IT': "Porzione con il 100% di grandiosità Git, spero tu sia affamato",
      'ta_IN': 'அடித்தது கிட்டின் 100% அற்புதங்கள். நீங்கள் ஆர்வமாக உள்ளீர்கள் என்று நம்புகிறேன்',
      'tr_TR': 'Git\'in muhteşemliklerinden bir porsiyon daha. Umarım açsındır'
    }
  },
  merge: {
    displayName: {
      'en_US': 'Merging contributions',
      'fr_FR': 'Fusionner des contributions',
    },
    about: {
      'en_US': 'New features and bug fixes in different branches, let us merge them !',
      'fr_FR': 'Nouvelles fonctionnalités et corrections de bugs, fusionnons tout ça !',
    }
  },
  remote: {
    tab: 'remote',
    displayName: {
      'en_US': 'Push & Pull -- Git Remotes!',
      'de_DE': 'Push & Pull -- Remote Repositories',
      'ja'   : 'Push及びPullコマンド -- Gitリモート',
      'fr_FR': 'Push & Pull -- Dépôts Git distants !',
      'es_AR': 'Push & Pull -- Git Remotes!',
      'es_MX': 'Push & Pull -- Repositorios remotos en Git (Git Remotes)!',
      'es_ES': 'Push y Pull -- Git Remotes!',
      'pt_BR': 'Push & Pull -- repositórios remotos no Git!',
      'gl'   : 'Push & Pull -- Repositorios remotos no Git!',
      'zh_CN': 'Push & Pull —— Git 远程仓库！',
      'zh_TW': 'Push & Pull -- Git Remotes!',
      'ru_RU': 'Push & Pull - удалённые репозитории в Git!',
      'uk'   : 'Push & Pull -- віддалені репозиторії в Git!',
      'ko'   : 'Push & Pull -- Git 원격 저장소!',
      'vi'   : 'Push & Pull -- Git Remotes!',
      'sl_SI': 'Push & Pull -- Oddaljeni Git',
      'pl'   : 'Push & Pull -- Zdalne repozytoria',
      'it_IT': "Push & Pull -- Git Remoto!",
      'ta_IN': 'Push & Pull -- கிட் Remotes!',
      'tr_TR': 'Push & Pull -- Git Uzak Depoları (Remotes)!'
    },
    about: {
      'en_US': 'Time to share your 1\'s and 0\'s kids; coding just got social',
      'fr_FR': 'Il est le temps de partager vos 1 et vos 0 les enfants, le code vient de devenir social.',
      'ja'   : '自分のコードをより広く公開しましょう',
      'de_DE': 'Zeit eure 1en und 0en zu teilen; Coding mit sozialer Komponente',
      'es_AR': 'Hora de compartir sus 1\'s y 0\'s; programar se volvió social!',
      'es_MX': 'Hora de compartir sus 1\'s y 0\'s, chicos; programar se volvió social!',
      'es_ES': 'Hora de compartir vuestros 1\'s y 0\'s, chicos; programar se volvió social!',
      'pt_BR': 'Hora de compartilhar seus 1\'s e 0\'s, crianças; programar agora é social!',
      'gl'   : 'Hora de compartilos seus 1\' e 0\'s, rapaces; programar agora é social!',
      'zh_CN': '是时候分享你的代码了，让编码变得社交化吧',
      'zh_TW': '是時候分享你的程式碼了',
      'ru_RU': 'Настало время поделиться своими единичками и нулями. Время коллективного программирования',
      'uk'   : 'Настав час поділитися своїми нулями та одиничками; соціальне програмування',
      'ko'   : '자신의 코드를 공개할 때가 되었습니다. 코드를 공개해봅시다!',
      'vi'   : 'Chia sẻ đứa con tinh thần \'0\' và \'1\' của bạn; mã đã đến với cộng đồng',
      'sl_SI': 'Čas za deljenje tvojih 1 in 0; kodiranje je pravkar postalo socialno',
      'pl'   : 'Czas podzielić się swoimi dziećmi 1 i 0; kodowanie właśnie stało się społeczne',
      'it_IT':
        "Ragazzi è arrivato il momento di condividere i vostri 0 e 1; programmare diventa social",
      'ta_IN': 'உங்களின் 1\'கள் மற்றும் 0\'களை பகிர்வதற்கான நேரம் குழந்தைகளே; குறியிடுதல் (coding) பொது உடமை ஆக்க பட்டுள்ளது',
      'tr_TR': '0\'ları ve 1\'ler\'i paylaşma zamanı çocuklar, kodlama sosyal bir hal alıyor',
    }
  },
  remoteAdvanced: {
    tab: 'remote',
    displayName: {
      'en_US': 'To Origin And Beyond -- Advanced Git Remotes!',
      'de_DE': 'Bis zum Origin und noch viel weiter -- Fortgeschrittene Remote Repositories',
      'ja'   : '"origin"とその先へ -- Gitリモート上級編',
      'fr_FR': 'Vers l\'infini et au-delà -- dépôts distants version avancée',
      'es_AR': 'Hasta el origin y más allá -- Git Remotes avanzado!',
      'es_MX': 'Hasta el origin y más allá -- Git Remotes avanzado!',
      'es_ES': 'Hasta el origen y más allá -- Git Remotes avanzado!',
      'pt_BR': 'Até a origin e além -- repositórios remotos avançados!',
      'gl'   : 'Ata á orixe e máis aló -- repositorios remotos avanzados!',
      'zh_CN': '关于 origin 和它的周边 —— Git 远程仓库高级操作',
      'zh_TW': '關於 origin 和其它 repo，git remote 的進階指令',
      'ru_RU': 'Через origin – к звёздам. Продвинутое использование Git Remotes',
      'uk'   : 'Через origin – до зірок. Прогресивне використання Git Remotes',
      'ko'   : '"origin"그 너머로 -- 고급 Git 원격 저장소',
      'vi'   : 'Về Với Cội Nguồn Và Vươn Xa Hơn -- Git Remote Nâng Cao',
      'sl_SI': 'Do Origina In Naprej -- Napredni Oddaljeni Git',
      'pl'   : 'Do źródła i dalej -- zaawansowane zdalne repozytoria',
      'it_IT': "Verso Origin e oltre -- Git Remoto Avanzato!",
      'ta_IN': 'ஆரம்பம் மற்றும் அதர்க்கு மேல் -- மேம்பட்ட கிட் ரிமோட்டுகள்!',
      'tr_TR': 'Origin ve Ötesine -- Gelişmiş Git Uzak Depoları (Remotes)'
    },
    about: {
      'en_US': 'And you thought being a benevolent dictator would be fun...',
      'fr_FR': 'Et vous pensiez qu\'être un dictateur bienfaisant serait amusant...',
      'ja'   : '絶えず上級者の仕事は存在する。。。',
      'es_AR': 'Y pensabas que ser un dictador benévolo sería divertido...',
      'es_MX': 'Y pensabas que ser un dictador benévolo sería divertido...',
      'es_ES': 'Y pensabas que ser un dictador benévolo sería divertido...',
      'pt_BR': 'E você achava que ser um déspota esclarecido seria mais divertido...',
      'gl'   : 'E pensabas que ser un dictador benévolo sería divertido...',
      'zh_CN': '做一名仁慈的独裁者一定会很有趣……',
      'zh_TW': '而且你會覺得做一個仁慈的獨裁者會很有趣...',
      'de_DE': 'Git Remotes für Fortgeschrittene',
      'ru_RU': 'Весело было быть всесильным мудрым правителем...',
      'uk'   : 'А ти думав, що бути всесильним диктатором весело...',
      'ko'   : '상급자는 편할줄 알았겠지만...',
      'vi'   : 'Và bạn nghĩ làm một kẻ độc tài nhân từ thì sẽ vui...',
      'sl_SI': 'In ti si mislil, da je biti dobronamerni diktator zabavno ...',
      'pl'   : 'A myślałeś, że bycie życzliwym dyktatorem byłoby fajne...',
      'it_IT': "E tu credevi che essere un dittatore benevolo fosse divertente...",
      'ta_IN': 'நீங்கள் ஒரு அக்கரை உள்ள சர்வாதிகாரியாக இருப்பது வேடிக்கையாக இருக்கும் என்று நினைத்தீர்களா...',
      'tr_TR': 'Ve hayırsever bir diktatör olmanın eğlenceli olacağını düşündün...'
    }
  }
};

exports.getTabForSequence = function(sequenceName) {
  var info = sequenceInfo[sequenceName];
  return (info.tab) ?
    info.tab :
    'main';
};
