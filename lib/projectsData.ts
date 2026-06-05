export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: 'completed' | 'construction' | 'sales' | 'upcoming';
  statusLabel: string;
  type: 'residential' | 'commercial' | 'mixed' | 'villas';
  typeLabel: string;
  location: string;
  city: string;
  year: string;
  heroImage: string;
  gallery: string[];
  specs: {
    label: string;
    value: string;
  }[];
  infrastructure: {
    title: string;
    description: string;
    icon: string;
  }[];
  constructionProgress: {
    stage: string;
    percentage: number;
  }[];
  plans: {
    rooms: number;
    area: string;
    floor: string;
    price: string;
    image: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: 'evro-plaza-residence',
    name: 'EVRO PLAZA Residence',
    tagline: 'Архитектурный шедевр в самом престижном районе',
    description: 'Готовый премиальный жилой квартал в Юнусабадском районе Ташкента с собственным парком и инфраструктурой 5-звездочного отеля.',
    longDescription: 'EVRO PLAZA Residence — это флагманский проект EVRO PLAZA GROUP, воплощающий концепцию безупречной городской жизни. Жилой комплекс расположен в тихом, зеленом центре Юнусабада, вдали от шумных магистралей, но в минутной доступности от ключевых объектов столицы. Архитектура комплекса вдохновлена современным европейским модернизмом: строгие геометрические линии фасада, панорамное остекление высотой во всю стену, отделка из натурального португальского известняка и темного гранита.',
    status: 'completed',
    statusLabel: 'Сдан в эксплуатацию',
    type: 'residential',
    typeLabel: 'Жилой комплекс премиум-класса',
    location: 'Ташкент, Юнусабадский район',
    city: 'Ташкент',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Высота потолков', value: '3.4 м' },
      { label: 'Класс энергоэффективности', value: 'A++ премиум' },
      { label: 'Технология строительства', value: 'Монолитно-каркасная' },
      { label: 'Панорамные окна', value: 'Алюминиевый профиль Schüco (Германия)' },
      { label: 'Сейсмостойкость', value: '9 баллов' },
      { label: 'Площади квартир', value: '54 - 210 м²' }
    ],
    infrastructure: [
      { title: 'Консьерж-сервис 24/7', description: 'Служба портье и консьержей для решения любых бытовых задач резидентов в режиме реального времени.', icon: 'Concierge' },
      { title: 'Ландшафтный парк', description: 'Собственный закрытый внутренний двор площадью 1.2 га без машин с хвойными деревьями, фонтанами и зонами отдыха.', icon: 'Tree' },
      { title: 'Фитнес и SPA', description: 'Закрытый спортивный клуб только для жильцов с 25-метровым бассейном, сауной и залом для персональных тренировок.', icon: 'Dumbbell' },
      { title: 'Многоуровневый паркинг', description: 'Умный подземный паркинг с системой распознавания номеров и зарядными станциями для электромобилей.', icon: 'Car' }
    ],
    constructionProgress: [
      { stage: 'Земляные работы и фундамент', percentage: 100 },
      { stage: 'Железобетонный каркас', percentage: 100 },
      { stage: 'Фасадные работы и остекление', percentage: 100 },
      { stage: 'Внутренняя и чистовая отделка', percentage: 100 }
    ],
    plans: [
      { rooms: 2, area: '68.5 м²', floor: '4/14', price: '$89,000', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
      { rooms: 3, area: '98.2 м²', floor: '8/14', price: '$128,000', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80' },
      { rooms: 4, area: '142.0 м²', floor: '11/14', price: '$198,000', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80' }
    ]
  },
  {
    id: 'central-park-towers',
    name: 'Central Park Towers',
    tagline: 'Икона современной архитектуры в Tashkent City',
    description: 'Ультрасовременный комплекс небоскребов из стекла и стали с лучшими видами на центральный парк и премиальной инфраструктурой.',
    longDescription: 'Central Park Towers представляет собой новую веху в развитии высотного строительства Ташкента. Расположенный на территории престижного делового центра Tashkent City, комплекс предлагает уникальный уровень комфорта. Проект разработан знаменитым британским архитектурным бюро и сочетает в себе динамичные зеркальные фасады, висячие сады на уровнях средних этажей и роскошные пентхаусы с собственными террасами и бассейнами на вершине башни.',
    status: 'construction',
    statusLabel: 'Строится (Сдача в Q4 2027)',
    type: 'mixed',
    typeLabel: 'Многофункциональный комплекс класса Deluxe',
    location: 'Ташкент, Tashkent City',
    city: 'Ташкент',
    year: '2027',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Этажность', value: '38 этажей' },
      { label: 'Высота потолков', value: '3.6 м' },
      { label: 'Панорамное остекление', value: 'Guardian Glass, структурная система' },
      { label: 'Лифты', value: 'KONE высокоскоростные со временем ожидания до 20 сек' },
      { label: 'Умный дом', value: 'Интеллектуальная система контроля климата и безопасности' },
      { label: 'Сейсмоустойчивость', value: '9+ баллов (специальные демпферные виброопоры)' }
    ],
    infrastructure: [
      { title: 'Sky Lounge на 30 этаже', description: 'Панорамный ресторан мирового уровня и зона отдыха для приватных встреч на высоте птичьего полета.', icon: 'Crown' },
      { title: 'Доступ к парку', description: 'Прямой приватный доступ к главному парку Tashkent City со светомузыкальными фонтанами.', icon: 'Compass' },
      { title: 'Консьерж Делюкс', description: 'Персональное VIP-сопровождение, заказ авиабилетов, бронирование лучших ресторанов по всему миру.', icon: 'Key' },
      { title: 'Подземный паркинг-хаб', description: '4-уровневый подземный паркинг на 1200 машиномест с передовыми стандартами вентиляции.', icon: 'Layers' }
    ],
    constructionProgress: [
      { stage: 'Котлован и буронабивные сваи', percentage: 100 },
      { stage: 'Фундаментная плита', percentage: 100 },
      { stage: 'Монолитный каркас (до 18 этажа)', percentage: 65 },
      { stage: 'Остекление и инженерия', percentage: 22 }
    ],
    plans: [
      { rooms: 2, area: '78.2 м²', floor: '14/38', price: '$145,000', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
      { rooms: 3, area: '112.5 м²', floor: '22/38', price: '$225,000', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80' },
      { rooms: 4, area: '185.0 м²', floor: '31/38', price: '$410,000', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80' }
    ]
  },
  {
    id: 'boulevard-business-center',
    name: 'Boulevard Business Center',
    tagline: 'Бизнес-пространство высшей лиги',
    description: 'Инновационный коммерческий и деловой центр в центре Ташкента (Мирабадский район) для крупного бизнеса и частных инвесторов.',
    longDescription: 'Boulevard Business Center — современное бизнес-пространство класса A+, спроектированное с учетом передовых эргономических стандартов. Здание выделяется монументальным хай-тек фасадом из тонированного стекла и нержавеющей стали, который формирует яркий деловой акцент в центре города. Обилие естественного света во всех офисах, центральные климатические системы с 4-кратным обновлением воздуха и высококлассная управляющая компания делают этот центр эталоном деловой инфраструктуры.',
    status: 'sales',
    statusLabel: 'Старт продаж',
    type: 'commercial',
    typeLabel: 'Бизнес-центр класса А+',
    location: 'Ташкент, Мирабадский район',
    city: 'Ташкент',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Полезная площадь', value: '45,000 м²' },
      { label: 'Вентиляция', value: 'Система приточно-вытяжная с рекуперацией тепла и HEPA фильтрацией' },
      { label: 'Безопасность', value: 'Биометрический контроль доступа (FaceID / СКУД)' },
      { label: 'Конференц-залы', value: 'Мультимедийный амфитеатр на 250 мест, 6 переговорных' },
      { label: 'Парковка', value: 'Коэффициент 1 м/место на каждые 60 м² аренды' },
      { label: 'Окружение', value: 'Бутики, премиум-рестораны на первом уровне' }
    ],
    infrastructure: [
      { title: 'Гранд-Лобби с Атриумом', description: 'Роскошная приветственная зона высотой 9 метров с водопадом и премиальным коворкинг-кафе.', icon: 'Building' },
      { title: 'Ресторанная терраса', description: 'Крышный сад с Lounge-ресторанами для проведения бизнес-обедов на открытом воздухе.', icon: 'Utensils' },
      { title: 'Высококлассное IT-ядро', description: 'Два независимых оптоволоконных ввода, собственная серверная зона, бесперебойное питание.', icon: 'Cpu' },
      { title: 'Вертолетная площадка', description: 'Транспортная доступность высшего уровня с оборудованной площадкой на крыше.', icon: 'Navigation' }
    ],
    constructionProgress: [
      { stage: 'Проектирование и подготовка здания', percentage: 100 },
      { stage: 'Цокольные этажи и фундамент', percentage: 100 },
      { stage: 'Основной каркас бизнес-центра', percentage: 95 },
      { stage: 'Инженерные сети и фасады', percentage: 48 }
    ],
    plans: [
      { rooms: 1, area: '45.0 м² (Офис)', floor: '3/8', price: '$95,000', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=400&q=80' },
      { rooms: 2, area: '120.0 м² (Офисный блок)', floor: '5/8', price: '$264,000', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80' },
      { rooms: 3, area: '340.0 м² (Весь этаж)', floor: '7/8', price: '$810,000', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80' }
    ]
  },
  {
    id: 'riverside-residence',
    name: 'Riverside Residence',
    tagline: 'Ваша личная набережная истории',
    description: 'Уникальный жилой проект на набережной реки в Самарканде. Слияние великой древней культуры и современных стандартов комфорта.',
    longDescription: 'Riverside Residence — первый в Самарканде премиум-комплекс, построенный по канонам курортной жилой архитектуры. Расположенный на благоустроенной набережной, комплекс имеет великолепные панорамные виды на водную гладь и памятники древней архитектуры. Фасады гармонично сочетают орнаменты национальной культуры, рельефный самаркандский травертин и сверкающие алюминиевые витражи.',
    status: 'construction',
    statusLabel: 'Строится (Сдача в Q1 2028)',
    type: 'residential',
    typeLabel: 'Курортная резиденция премиум-класса',
    location: 'Самарканд, Набережная реки Сиаб',
    city: 'Самарканд',
    year: '2028',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Длина набережной в комплексе', value: '450 метров частной линии' },
      { label: 'Высота потолков', value: '3.3 м' },
      { label: 'Отопление', value: 'Индивидуальные немецкие системы климата в каждой квартире' },
      { label: 'Материалы стен', value: 'Керамический кирпич (термоблок) с премиум звукоизоляцией' },
      { label: 'Озеленение территории', value: 'Более 1500 экзотических и хвойных деревьев' },
      { label: 'Личные террасы', value: 'Доступны на 1, 6 и 7 этажах' }
    ],
    infrastructure: [
      { title: 'Речная Набережная', description: 'Закрытый променад с беговыми дорожками, лодочной мини-станцией и зонами барбекю.', icon: 'Anchor' },
      { title: 'СПА-комплекс и хаммам', description: 'Традиционный восточный хаммам и термальные зоны для глубокого отдыха резидентов.', icon: 'Smile' },
      { title: 'Зеленый амфитеатр', description: 'Площадка под открытым небом для проведения культурных мероприятий и кинопоказов только для жильцов.', icon: 'Clapperboard' },
      { title: 'Детский развивающий хаб', description: 'Профессиональный детский клуб с педагогами и инновационными игровыми зонами.', icon: 'Compass' }
    ],
    constructionProgress: [
      { stage: 'Земляные работы, подготовка набережной', percentage: 100 },
      { stage: 'Фундамент и свайное поле', percentage: 100 },
      { stage: 'Возведение каркасов (блоки А, Б, В)', percentage: 40 },
      { stage: 'Внутренние стены и перегородки', percentage: 15 }
    ],
    plans: [
      { rooms: 2, area: '58.4 м²', floor: '2/7', price: '$72,000', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
      { rooms: 3, area: '89.5 м²', floor: '5/7', price: '$110,000', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80' },
      { rooms: 4, area: '135.0 м² (Терраса)', floor: '7/7', price: '$180,000', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80' }
    ]
  },
  {
    id: 'grand-park-villas',
    name: 'Grand Park Villas',
    tagline: 'Философия уединенной жизни за городом',
    description: 'Закрытый клубный поселок из 32 роскошных вилл с бассейнами, личными участками и безупречным консьерж-сервисом.',
    longDescription: 'Grand Park Villas предлагает бескомпромиссную альтернативу традиционной городской квартире. Расположенный в престижном живописном пригороде Ташкента, этот проект объединяет в себе безупречную безопасность закрытой клубной резиденции и абсолютную свободу жизни на природе. Каждая вилла спроектирована по индивидуальному проекту известного итальянского бюро и дополняется частным участком от 6 до 15 соток, бассейном с подогревом, гаражом на 3 автомобиля и террасой на крыше.',
    status: 'upcoming',
    statusLabel: 'Скоро запуск (Принимаем бронь)',
    type: 'villas',
    typeLabel: 'Закрытый элитный клуб вилл класса Deluxe',
    location: 'Ташкентская область, Кибрайский район',
    city: 'Ташкент',
    year: '2028',
    heroImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    ],
    specs: [
      { label: 'Площадь резиденции', value: '420 - 780 м²' },
      { label: 'Размер личного участка', value: '6 - 15 соток' },
      { label: 'Личный бассейн', value: 'С подогревом, системой фильтрации и подсветкой' },
      { label: 'Высота потолков в холле', value: '7.2 м (Второй свет)' },
      { label: 'Безопасность', value: 'Территоральный радарный контроль, военизированная охрана' },
      { label: 'Коммуникации', value: 'Полная автономность (собственная подстанция, артезианская скважина)' }
    ],
    infrastructure: [
      { title: 'Закрытый Спортивный Клуб', description: 'Специальный фитнес-центр, теннисные корты и спа-комплекс только для 32 владельцев вилл.', icon: 'Award' },
      { title: 'Шеф-Повар на Заказ', description: 'Услуга бронирования личного шеф-повара для семейных вечеров и частных банкетов.', icon: 'Utensils' },
      { title: 'Парковая тропа здоровья', description: '2 километра благоустроенной тропы с ландшафтным освещением для безопасных пробежек.', icon: 'TrendingUp' },
      { title: 'Услуги садовника и бассейнщика', description: 'Полный уход за вашим участком, деревьями и состоянием воды силами управляющей компании.', icon: 'Sparkles' }
    ],
    constructionProgress: [
      { stage: 'Согласование градостроительного плана', percentage: 100 },
      { stage: 'Подведение магистральных сетей', percentage: 70 },
      { stage: 'Планировка участков и дорог', percentage: 35 },
      { stage: 'Закладка фундаментов первых вилл', percentage: 10 }
    ],
    plans: [
      { rooms: 5, area: '450.0 м² (Вилла Aura)', floor: '2 этажа + терраса', price: '$580,000', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80' },
      { rooms: 6, area: '620.0 м² (Вилла Oasis)', floor: '2 этажа + цоколь', price: '$790,000', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80' },
      { rooms: 8, area: '780.0 м² (Вилла Estate)', floor: '3 этажа + бассейн', price: '$1,250,000', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' }
    ]
  }
];
