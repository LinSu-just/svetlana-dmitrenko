const projects = [
  {
    id:'bakery', name:'Sweet & Sour Bakery', label:'Айдентика и упаковка пекарни',
    context:'Учебный проект · по брифу 2 дня', tags:['brand','print'], cover:'project-bakery', gallery:'pack-bakery',
    task:'Нам дали два дня на фирменный стиль пекарни. У неё была своя особенность — сладкая выпечка с кислинкой. Мне хотелось, чтобы этот вкус можно было представить ещё до первого укуса.',
    challenge:'Передать два вкуса одним образом и сохранить его и на большой коробке, и на маленьком стаканчике.',
    solution:"В знаке я объединила два вкуса: слои торта и розовая глазурь обещают сладость, а долька лимона подсказывает, в чём особенность рецепта. На наклейке эту историю рассказывает один знак. На коробке тот же мотив продолжается по краю крышки, словно глазурь стекает по стенке."
  },
  {
    id:'liwita', name:'LiWiTa', label:'Айдентика и брендбук',
    context:'Личный проект · 1 день', tags:['brand'], cover:'project-brandbook',
    task:'Я мечтаю о собственном бренде одежды. LiWiTa началась с названия: я соединила первые слоги слов Living Witch Taste. Идея так меня увлекла, что за один день я собрала фирменный стиль.',
    challenge:'Бриф я задала себе сама. Я представляла удобную одежду для людей со средним и высоким доходом. Стиль должен был передать сразу два качества — повседневный комфорт и ощущение дорогой вещи.',
    solution:"В каталоге сначала должен читаться крой. Поэтому я отвела большие поля под фотографии, а цвет сосредоточила в подложках и упаковке. Тонкие засечки логотипа и глубокий винный оттенок переходят с разворота на бирку и пакет. Вещи могут меняться от коллекции к коллекции, подпись бренда остаётся узнаваемой."
  },
  {id:'editorial',context:'Учебный проект · Adobe InDesign · печатный журнал',name:'Мир искусства',label:'Редакционный дизайн · многостраничная вёрстка',tags:['print'],cover:'project-editorial',task:'Оформить обложку и развороты издания об искусстве, организовать тексты и иллюстрации на полосе.',challenge:'У длинного материала и короткой заметки разный ритм. На одном развороте читателю нужны и точка входа в статью, и удобная ширина строки.',solution:"На обложке тёмная архитектурная фотография собирает вокруг себя белые анонсы. Внутри я поменяла соотношение текста и изображения: длинная статья держится на узких колонках, а цветные репродукции прерывают набор именно там, где читателю нужен пример. Подпись стоит рядом с работой, поэтому взгляд легко возвращается к нужному абзацу."},
  {
    id:'lifespace', name:'Место жизни', label:'Веб-дизайн · сайт агентства недвижимости',
    context:'Коммерческий проект', tags:['web'], cover:'ux-work-estate',
    task:'Это был мой первый проект сайта. Для агентства недвижимости я разработала визуальную концепцию, оформила страницы и подготовила макеты к передаче разработчику.',
    challenge:'На первом экране нужно было показать характер недвижимости и оставить на виду главное действие — поиск объекта.',
    solution:"На первом экране я оставила одно очевидное действие — поиск объекта. Светлая строка хорошо видна на тёмной фотографии интерьера. Когда посетитель переходит к предложениям, фон становится светлым: теперь ему важнее сравнить объекты, чем рассмотреть атмосферный кадр.",
    extra:'Для этого же агентства я оформила серию презентаций о недвижимости. В материалах об Истре работала с картами участка и инженерными схемами, а в презентации курорта в Карловых Варах собрала историю места, фотографии и инвестиционные материалы в последовательный рассказ.',
    url:'https://lifespace.vip/'
  }
];
projects.unshift({
  "id": "pasta",
  "name": "Monstry Pasta",
  "label": "Персонажи и упаковка для трёх видов пасты",
  "context": "Учебный проект · печатный прототип",
  "task": "Разработать упаковку с нуля, от названия и иллюстраций до печатного прототипа.",
  "challenge": "У ригатони, спагетти и тальятелле разная форма. Как показать содержимое и сразу дать понять, что перед нами одна серия?",
  "solution": "У каждого монстра есть деталь, которую дорисовывает сама паста. Короткие трубочки ригатони образуют причёску, а длинные спагетти становятся зубами в раскрытой пасти. Я отрисовала персонажей от руки на планшете, подбирая силуэт под каждый сорт. Покупатель одновременно видит продукт и узнаёт героя.",
  "cover": "pasta-premium",
  "tags": [
    "brand",
    "print"
  ]
});
projects.splice(3,0,{
  "id": "properties",
  "name": "Три объекта недвижимости",
  "label": "Инвестиционные презентации",
  "context": "Коммерческие проекты · Life Space",
  "task": "Представить инвестору три разных объекта: участок у воды на Истре, загородный комплекс в Абрамцеве и отель в Карловых Варах.",
  "challenge": "Покупателю участка важно понять устройство территории. Для отеля важнее увидеть инфраструктуру и то, как работают части комплекса.",
  "solution": "Для каждого объекта я выбрала свой способ чтения. В Истре карта задаёт масштаб участка, а фотографии уточняют, как устроен берег. В Абрамцеве последовательность видов работает как маршрут по окрестностям. В отеле переход от общего плана к деталям показывает, какие пространства входят в wellness-центр.",
  "cover": "hotel-01",
  "tags": [
    "decks"
  ]
},{
  "id": "collection",
  "name": "Собрание Максима Кочерова",
  "label": "Дизайн каталога коллекции",
  "context": "12 слайдов",
  "task": "Представить частную коллекцию: от икон и живописи до фарфора, часов и предметов декоративного искусства.",
  "challenge": "Между миниатюрным портретом и крупным предметом большая разница в масштабе. Подпись должна оставаться рядом с экспонатом, а разделы — читаться как единый каталог.",
  "solution": "Я выстроила каталог в двух масштабах. Общий вид даёт представление о собрании, затем на отдельных полосах можно рассмотреть форму предмета и его отделку. На тёмном фоне проступают края фарфора и позолота, а подпись рядом с экспонатом связывает деталь с конкретной вещью.",
  "cover": "kocherov-01",
  "tags": [
    "decks"
  ]
});
projects.push({
  "id": "changes",
  "name": "Канон перемен",
  "label": "Мобильный интерфейс · два направления",
  "context": "Концепция приложения",
  "task": "Показать один сценарий И-цзин в двух визуальных решениях: от стартового экрана до броска монет и построения гексаграммы.",
  "challenge": "Иллюстрации, каллиграфия и монеты задают атмосферу, но пользователю ещё нужно видеть текущий шаг и основное действие.",
  "solution": "Бросок монет — центр этого сценария. Я оставила монеты главным предметом на экране, отвела красный цвет действию, а номер броска поставила рядом с растущей гексаграммой. В тёплой версии фон напоминает лист старой бумаги, в светлой пейзаж написан тушью. Порядок действий читается одинаково в обеих.",
  "cover": "changes-warm",
  "tags": [
    "web"
  ]
});
projects.splice(2, 0, {
  id:'greatmeal', name:'GreatMeal', label:'Дизайн продуктового буклета', context:'Онлайн-заказ · макет для печати',
  tags:['print'], cover:'greatmeal-1', gallery:'greatmeal-2',
  task:'Собрать в одном буклете ассортимент кормов GreatMeal для кошек и собак, рассказ о производстве и информацию о том, где купить продукцию.',
  challenge:'На ограниченной площади нужно разместить и фотографии упаковок, и подробности о каждом корме. Читателю важно быстро найти раздел для своего питомца.',
  solution:"Сгибы буклета определили его структуру. В сложенном виде видны марка и сведения о производителе. При раскрытии ассортимент разделяется на две колонки — для кошек и собак. Внутри каждой я повторила порядок «упаковка, вкус, пиктограмма», чтобы соседние позиции можно было сравнить взглядом."
});
const english = document.documentElement.lang === 'en';
const translations = {
  bakery: {
    label:'Bakery identity and packaging', context:'Student project · two-day brief',
    task:'Our brief was to design an identity in two days for a bakery whose sweet pastries had a tart twist. I wanted people to imagine that flavour before their first bite.',
    challenge:'The sweet and sour notes needed to come through just as clearly on a small takeaway cup as on a pastry box.',
    solution:"The cake layers and pink icing promise sweetness. A single lemon segment tells you what makes the recipe different. On a small seal, the emblem carries the whole idea. On a box, the icing motif follows the edge of the lid, as if it were dripping down the sides."
  },
  liwita: {
    label:'Visual identity and brand guidelines', context:'Personal project · one day',
    task:'I dream of starting my own clothing label. LiWiTa began with a name I pieced together from Living Witch Taste. The idea stayed with me, and I designed the identity in a single day.',
    challenge:'I set my own brief: comfortable clothes for people with middle to high incomes. The identity needed to convey everyday ease and the feel of a premium garment.',
    solution:"The cut of the clothes comes first. Large photographs show the silhouette, while muted colour sits on the page behind it and on the packaging. A fine serif wordmark and deep wine tone carry from the catalogue to the tag and bag, giving different collections a recognisable signature."
  },
  editorial: {
    context:'Student project · Adobe InDesign · printed magazine', name:'World of Art', label:'Editorial design and layout',
    task:'Design a cover and spreads for an arts publication, bringing articles, captions and reproductions together on the page.',
    challenge:'A feature and a short news item call for different rhythms. Readers need a clear place to start and a comfortable line length for longer pieces.',
    solution:"On the cover, white cover lines sit against a dark architectural photograph. Inside, narrow columns give a long article a steady rhythm. Colour reproductions interrupt the text where a reader needs a visual example, with captions beside the work so the argument is easy to pick up again."
  },
  lifespace: {
    name:'Life Space', label:'Web design for a real estate agency', context:'Client project',
    task:'For my first website project, I developed the visual direction, designed page layouts and prepared the files for the developer.',
    challenge:'The opening screen needed to convey the character of the properties and make the property search easy to spot.',
    solution:"The opening screen gives visitors one clear action: search for a property. A light search field stands out against the dark interior photograph. The listings then switch to a pale background so visitors can move from taking in the atmosphere to comparing properties.",
    extra:'I also designed a series of presentations for the agency. For the Istra development, I worked with site maps and engineering diagrams. For a resort in Karlovy Vary, I brought local history, photography and investment information into one presentation.'
  }
};
Object.assign(translations,{
  "pasta": {
    "name": "Monstry Pasta",
    "label": "Character illustration and packaging",
    "context": "Student project · printed prototype",
    "task": "Develop a pasta brand from its name and illustrations through to a printed packaging prototype.",
    "challenge": "Rigatoni, spaghetti and tagliatelle have very different shapes. Each box needed to show its contents while belonging to the same family.",
    "solution": "The pasta completes each drawing. Short rigatoni tubes form a hairstyle, while long strands of spaghetti become teeth in an open mouth. I drew the monsters by hand on my tablet, shaping each silhouette around its pasta variety. One glance reveals both the product and its character."
  },
  "properties": {
    "name": "Three property presentations",
    "label": "Investment presentation design",
    "context": "Client work · Life Space",
    "task": "Present three properties to investors: a waterfront site in Istra, a country estate in Abramtsevo and a hotel in Karlovy Vary.",
    "challenge": "A land buyer needs to understand the site. A hotel investor also needs a clear picture of its facilities.",
    "solution": "Each property called for a different sequence. At Istra, the map establishes the scale of the site and the photographs explain the waterfront. At Abramtsevo, local views form a route through the surroundings. For the hotel, the sequence moves from the overall space to the individual wellness facilities."
  },
  "collection": {
    "name": "The Maxim Kocherov Collection",
    "label": "Collection catalogue design",
    "context": "12 slides",
    "task": "Introduce a private collection of icons, paintings, porcelain, clocks and decorative arts.",
    "challenge": "A miniature portrait and a large object need different amounts of space. Captions must stay with their objects, while the sections still read as one catalogue.",
    "solution": "The catalogue works at two scales. An overview establishes the breadth of the collection, then individual spreads reveal each object’s shape and finish. Dark grounds bring out the edges of porcelain and gilding. A caption beside each piece keeps the detail attached to its subject."
  },
  "changes": {
    "name": "Book of Changes",
    "label": "Mobile interface · two visual directions",
    "context": "App concept",
    "task": "Explore two visual treatments for the same I Ching sequence, from the opening screen to tossing coins and building a hexagram.",
    "challenge": "Illustrations, calligraphy and coins set the mood, while the current step and primary action still need to stand out.",
    "solution": "The coin toss is the central action. The coins anchor the screen, red marks the action, and the throw count sits beside the growing hexagram. One direction evokes aged paper and the other an ink landscape on white. The sequence stays familiar across both."
  }
});
translations.greatmeal = {
  label:'Product brochure design', context:'Remote commission · print artwork',
  task:'Bring GreatMeal’s cat and dog food range, manufacturing story and stockist information together in one printed brochure.',
  challenge:'Pack shots and product details share a compact format. Readers need to find the right section for their pet at a glance.',
  solution:"The folds determine the reading order. Closed, the brochure introduces the brand and maker. Open, it separates cat and dog food into two columns. Each entry follows the same sequence of pack, flavour and icon, so neighbouring products are easy to compare."
};
projects.splice(2, 0, {
  id:'music', name:'Точка ритма', label:'Музыкальные жанры · открыть сайт',
  tags:['web'], cover:'live-music', live:'https://linsu-just.github.io/music/'
});
projects.splice(4, 0, {
  id:'pet', name:'Yandex Pet Day', label:'Сайт конференции · открыть сайт',
  tags:['web'], cover:'live-pet', live:'https://linsu-just.github.io/yandex-case/'
});
translations.music={name:'Rhythm Point',label:'Music genres · visit website'};
translations.pet={label:'Conference website · visit website'};
projects.push({id:'dating',name:'Приложение для знакомств',label:'Мобильный интерфейс · в работе',context:'Клиентский проект · iOS',tags:['web'],task:'Спроектировать разговор после взаимного согласия и переход к дальнейшему общению.',challenge:'У короткого анонимного разговора есть ограничение по времени. Важно показать его так, чтобы оно не отвлекало от собеседника.',solution:"Семь минут — условие разговора, поэтому таймер вынесен над сообщениями. В самом диалоге я убрала повторяющиеся отметки времени. Правила, жалоба и завершение разговора доступны из одной панели: человек может выйти в любой момент, а во время переписки видит прежде всего собеседника."});
translations.dating={name:'Dating app',label:'Mobile interface · in progress',context:'Client project · iOS',task:'Design the conversation that follows a mutual match and the transition to ongoing messaging.',challenge:'A short anonymous conversation has a time limit. The time remaining should be visible without competing with the other person’s messages.',solution:"The seven-minute limit belongs to the conversation as a whole, so the timer sits above the messages. Individual timestamps would repeat information. A single panel keeps the rules, reporting and exit within reach while leaving the exchange itself in focus."};
Object.assign(projects.find(p=>p.id==='music'),{task:'Помочь посетителю открыть музыкальный жанр и перейти к исполнителям и событиям.',challenge:'Связать разные точки входа в музыку на одной странице.',solution:"Я взяла за точку входа жанр: посетителю достаточно знать, какое звучание ему интересно. Поджанры уточняют выбор, артисты дают ему имена, а афиша показывает, где услышать эту музыку вживую. Каждый следующий раздел продолжает выбор, сделанный в предыдущем."});
Object.assign(translations.music,{task:'Help visitors discover a genre and explore its artists and events.',challenge:'Bring several ways of discovering music into a single page.',solution:"Genre is the starting point: a visitor can begin with a sound they like. Subgenres narrow it down, artists put names to it, and the listings show where to hear it live. Each section gives the previous choice somewhere to lead."});
Object.assign(projects.find(p=>p.id==='pet'),{task:'Представить конференцию о цифровых продуктах для питомцев.',challenge:'Дать посетителю быстро найти спикера, программу и условия участия.',solution:"У посетителя конференции два первых вопроса: кто выступает и когда стоит подключиться. Спикерам и программе я дала отдельные разделы, чтобы к расписанию можно было быстро вернуться. Условия участия находятся рядом с регистрацией, где они нужны для решения."});
Object.assign(translations.pet,{task:'Introduce a conference about digital products for pets.',challenge:'Help visitors find speakers, session times and participation details.',solution:"Visitors arrive with two immediate questions: who is speaking, and when should I join? Speakers and the schedule have separate sections so people can return straight to the programme. Participation details sit beside registration, where they inform the decision to sign up."});
const credits={
  "pasta": [
    "Концепция бренда, иллюстрация, допечатная подготовка",
    "Три варианта упаковки и печатный прототип",
    "Brand concept, character illustration and prepress",
    "Three packaging variants and a printed prototype"
  ],
  "editorial": [
    "Арт-дирекция и вёрстка в InDesign",
    "Обложка, развороты и печатный экземпляр",
    "Cover design and typesetting in InDesign",
    "Cover, editorial spreads and a printed copy"
  ],
  "greatmeal": [
    "Композиция, вёрстка и подготовка к печати",
    "Двусторонний буклет для линейки кормов",
    "Layout, typesetting and print preparation",
    "Two-sided folded product brochure"
  ],
  "properties": [
    "Дизайн презентаций, карт и инфографики",
    "Три презентации объектов недвижимости",
    "Presentation design, maps and infographics",
    "Three investor presentations"
  ],
  "dating": [
    "Дизайн интерфейса и прототипирование в Figma",
    "В работе · макеты чатов и сценарии выхода",
    "Interface design and Figma prototyping",
    "In progress · chat layouts and exit flows"
  ],
  "music": [
    "Структура страниц и веб-дизайн",
    "Сайт о жанрах, исполнителях и событиях",
    "Page structure and web design",
    "Music discovery website"
  ],
  "pet": [
    "Веб-дизайн страницы события",
    "Лендинг с программой и спикерами",
    "Event page design",
    "Conference landing page with programme and speakers"
  ],
  "lifespace": [
    "Визуальная концепция и макеты страниц",
    "Дизайн сайта для передачи разработчику",
    "Visual direction and page layouts",
    "Website designs for developer handoff"
  ],
  "liwita": [
    "Название, визуальная айдентика и арт-дирекция",
    "Логотип, брендбук и макеты каталога",
    "Naming, visual identity and art direction",
    "Wordmark, brand guidelines and catalogue layouts"
  ],
  "bakery": [
    "Дизайн знака, палитры и упаковки",
    "Фирменная графика для коробок, пакетов и стаканов",
    "Logo, colour palette and packaging design",
    "Identity applied to boxes, bags and takeaway cups"
  ],
  "collection": [
    "Дизайн презентации и композиция каталога",
    "Каталог коллекции на 12 слайдах",
    "Presentation design and catalogue layout",
    "12-slide collection catalogue"
  ],
  "changes": [
    "Визуальная концепция мобильного интерфейса",
    "Два оформления одного сценария",
    "Mobile UI visual design",
    "Two visual directions for the same flow"
  ]
};
const orderedProjects=Object.keys(credits).map(id=>projects.find(p=>p.id===id));
const cards=document.querySelector('#cards');
const modal=document.querySelector('#case');
function render(filter){
 cards.replaceChildren();
 orderedProjects.filter(p=>filter==='all'||p.tags.includes(filter)).forEach(project=>{
  const p=english ? {...project,...translations[project.id]} : project;
  const count = {pasta:9,liwita:10,bakery:8,editorial:5,changes:5}[p.id];
  if(count) p.cover='studio-'+p.id+'-1';
  const summaries={
   pasta:english?'I drew the monsters by hand on my tablet. Rigatoni forms a tangle of hair, and spaghetti becomes a row of teeth.':'Я отрисовала монстров от руки на планшете. У одного короткие ригатони торчат вместо волос, у другого из раскрытой пасти выглядывают длинные зубы-спагетти.',
   bakery:english?'Cherry pink and a slice of lemon suggest the bakery’s sweet-and-tart flavours on everything from cups to cake boxes.':'Ягодный цвет и лимонная долька передают вкус выпечки с кислинкой. Один знак объединяет стаканы, пакеты и коробки.',
   liwita:english?'A clothing label I hope to launch one day. A fine serif wordmark and muted colours leave room for the cut and texture of the clothes.':'Так я представила свой будущий бренд удобной одежды. Тонкая антиква и приглушённые цвета оставляют в центре внимания силуэт и фактуру ткани.'
  };
  const tile=document.createElement('article');
  tile.className='project-tile';
  const photo=document.createElement('button');
  photo.className='case-photo';photo.setAttribute('aria-label',p.name);
  photo.innerHTML=artwork(p);photo.onclick=()=>openProject(p);
  const info=document.createElement('div');info.className='case-copy';
  info.innerHTML=(p.context?'<small>'+p.context+'</small>':'')+'<h3>'+p.name+'</h3><p class="discipline">'+p.label.split(' · открыть сайт')[0].split(' · visit website')[0]+'</p><p>'+ (summaries[p.id]||p.solution)+'</p>';
  const more=document.createElement('button');more.className='case-open';more.textContent=english?'View project →':'Смотреть проект →';more.onclick=()=>openProject(p);info.append(more);
  if(p.live||p.url){const link=document.createElement('a');link.className='live-link';link.href=p.live||p.url;link.target='_blank';link.rel='noopener';link.textContent=english?'Visit website ↗':'Открыть сайт ↗';info.append(link)}
  tile.append(photo,info);
  cards.append(tile);
 });
}
const plates={
  "collection": [
    [
      "kocherov-03",
      "Обзор собрания",
      "Collection overview"
    ],
    [
      "kocherov-08",
      "Фарфор и декоративное искусство",
      "Porcelain and decorative arts"
    ]
  ],
  "properties": [
    [
      "istra-09",
      "Истра · береговая инфраструктура",
      "Istra · waterfront infrastructure"
    ],
    [
      "abram-04",
      "Абрамцево · достопримечательности территории",
      "Abramtsevo · local landmarks"
    ],
    [
      "hotel-06",
      "Карловы Вары · wellness-центр",
      "Karlovy Vary · wellness facilities"
    ]
  ]
};
for(const [id,count] of Object.entries({pasta:9,liwita:10,bakery:8,editorial:5,changes:5})){
 const photos=Array.from({length:count-1},(_,i)=>['studio-'+id+'-'+(i+2),'','']);
 plates[id]=[...photos,...(plates[id]||[])];
}
function artwork(p){
 if(p.id==='dating') return '<div class="chat-art" aria-hidden="true"><span>07:00</span><i></i><i></i><i></i></div>';
 return '<img src="img/'+p.cover+'.webp" alt="'+p.label+'">';
}
function openProject(p){
 const [role,output]=credits[p.id].slice(english?2:0);
 const facts='<dl class="facts"><div><dt>'+(english?'My role':'Моя роль')+'</dt><dd>'+role+'</dd></div><div><dt>'+(english?'Deliverables':'Материалы')+'</dt><dd>'+output+'</dd></div></dl>';
 const figures=(plates[p.id]||[]).map(([asset,ru,en])=>'<figure><img loading="lazy" src="img/'+asset+'.webp" alt="'+(english?en:ru)+'"><figcaption>'+(english?en:ru)+'</figcaption></figure>').join('');
 document.querySelector('#inside').innerHTML='<div class="modalbar"><span>'+p.label+'</span><button class="close" aria-label="'+(english?'Close case study':'Закрыть кейс')+'">×</button></div><article class="details"><h2 id="caseTitle">'+p.name+'<span>.</span></h2>'+(p.context?'<p class="case-context">'+p.context+'</p>':'')+facts+artwork(p)+'<h3>'+(english?'The brief':'Задача')+'</h3><p>'+p.task+'</p><h3>'+(english?'The challenge':'Что нужно было учесть')+'</h3><p>'+p.challenge+'</p><h3>'+(english?'Design decisions':'Почему такое решение')+'</h3><p>'+p.solution+'</p>'+(p.extra?'<h3>'+(english?'Presentations for the agency':'Презентации для агентства')+'</h3><p>'+p.extra+'</p>':'')+(p.gallery?'<img loading="lazy" src="img/'+p.gallery+'.webp" alt="'+(english?'Another application for':'Другой носитель проекта')+' '+p.name+'">':'')+figures+((p.live||p.url)?'<p><a href="'+(p.live||p.url)+'" target="_blank" rel="noopener">'+(english?'Visit the website':'Посмотреть сайт')+' ↗</a></p>':'')+'</article>';
 modal.setAttribute('aria-labelledby','caseTitle');
 modal.querySelector('.close').onclick=()=>modal.close();
 modal.showModal();
 modal.scrollTop=0;
}
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
 render(b.dataset.filter);
}));
render('all');

// Measure the actual typeface in each language, including after a filter change.
function fitProjectTitles() {
 const titles=document.querySelectorAll('.case-copy h3,dialog[open] #caseTitle');
 for(const title of titles){
  title.style.removeProperty('font-size');
  const line=document.createRange();
  line.selectNodeContents(title);
  const width=line.getBoundingClientRect().width;
  if(width>title.clientWidth && title.clientWidth>0){
   const size=parseFloat(getComputedStyle(title).fontSize);
   title.style.fontSize=(size*(title.clientWidth-2)/width)+'px';
  }
 }
}
new ResizeObserver(fitProjectTitles).observe(cards);
new MutationObserver(fitProjectTitles).observe(cards,{childList:true});
new MutationObserver(fitProjectTitles).observe(modal,{attributes:true,attributeFilter:['open']});
window.addEventListener('resize',fitProjectTitles);
document.fonts.ready.then(fitProjectTitles);
