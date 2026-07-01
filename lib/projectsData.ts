export type LocalizedText = {
  ru: string;
  uz: string;
  en: string;
};

export interface LocalizedProject {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  longDescription: LocalizedText;
  status: 'completed' | 'construction' | 'sales' | 'upcoming';
  statusLabel: LocalizedText;
  type: 'residential' | 'commercial' | 'mixed';
  typeLabel: LocalizedText;
  location: LocalizedText;
  city: string;
  year: string;
  heroImage: string;
  gallery: string[];
  specs: {
    label: LocalizedText;
    value: LocalizedText;
  }[];
  infrastructure: {
    title: LocalizedText;
    description: LocalizedText;
    icon: string;
  }[];
  constructionProgress: {
    stage: LocalizedText;
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

export const projectsData: LocalizedProject[] = [
  {
    id: 'avenue-plaza',
    name: {
      ru: 'Avenue Plaza',
      uz: 'Avenue Plaza',
      en: 'Avenue Plaza',
    },
    tagline: {
      ru: 'Современный жилой комплекс премиум бизнес-класса в Самарканде',
      uz: 'Samarqanddagi zamonaviy premium biznes toifali turar-joy majmuasi',
      en: 'A modern premium business-class residential complex in Samarkand',
    },
    description: {
      ru: 'Закрытый жилой комплекс премиум бизнес-класса на 14 корпусов с полной инфраструктурой: школа, детский сад, торговый центр, бассейны, фитнес-залы и более 500 паркинг-мест.',
      uz: "14 binodan iborat, to'liq infratuzilmaga ega yopiq premium biznes toifali turar-joy majmuasi: maktab, bog'cha, savdo markazi, basseynlar, fitnes-zallar va 500 dan ortiq avtoturargoh joyi.",
      en: 'A gated premium business-class residential complex of 14 buildings with full infrastructure: a school, kindergarten, shopping center, swimming pools, fitness centers, and over 500 parking spaces.',
    },
    longDescription: {
      ru: 'Avenue Plaza — современный жилой комплекс премиум бизнес-класса, который строится в Самарканде на улице Умара Жура Кулова, за ЖК "Самарканд". Комплекс отличается элегантной архитектурой с кирпичными фасадами, высокими потолками от 3 метров и продуманной закрытой территорией, что делает его особенно привлекательным для семейной жизни. На территории комплекса будет своя школа, детский сад, большой магазин, фитнес-залы, бассейны, коворкинги — вся необходимая инфраструктура в пределах охраняемой территории. Расположение на окраине города обеспечивает тишину и спокойствие, в стороне от городского шума. Комплекс состоит из 14 корпусов, построенных по монолитно-кирпичной технологии. Сейчас активно ведется строительство 4, 5, 6, 7 и 8 блоков. Несмотря на то, что объект еще не сдан в эксплуатацию, большая часть квартир уже распродана. Доступна рассрочка.',
      uz: 'Avenue Plaza — Samarqand shahrida, "Samarqand" turar-joy majmuasi orqasida, Umar Joʻrakulov koʻchasida qurilmoqda boʻlgan zamonaviy premium biznes toifali turar-joy majmuasi. Majmua gʻisht fasadli nafis arxitekturasi, 3 metrdan boshlanadigan baland shiftlari va oʻylab chiqilgan yopiq hududi bilan ajralib turadi, bu uni oilaviy hayot uchun ayniqsa jozibali qiladi. Majmua hududida oʻz maktabi, bogʻchasi, katta doʻkon, fitnes-zallar, basseynlar, kovorking maydonlari — barcha zarur infratuzilma qoʻriqlanadigan hudud doirasida boʻladi. Shahar chekkasida joylashganligi shahar shovqinidan uzoqda tinchlik va osoyishtalikni taʼminlaydi. Majmua monolit-gʻisht texnologiyasi boʻyicha qurilgan 14 binodan iborat. Hozirda 4, 5, 6, 7 va 8-bloklar qurilishi faol olib borilmoqda. Obyekt hali foydalanishga topshirilmagan boʻlsa-da, kvartiralarning katta qismi allaqachon sotilgan. Muddatli toʻlov mavjud.',
      en: 'Avenue Plaza is a modern premium business-class residential complex under construction in Samarkand on Umar Jurakulov Street, behind the "Samarkand" residential complex. The complex stands out with its elegant architecture featuring brick façades, ceilings from 3 meters high, and a thoughtfully designed gated area, making it especially appealing for family living. The complex grounds will include its own school, kindergarten, a large store, fitness centers, swimming pools, and co-working spaces — all the necessary infrastructure within a secured territory. Its location on the outskirts of the city ensures quiet and tranquility, away from urban noise. The complex consists of 14 buildings built using monolithic-brick technology. Construction is currently actively underway on blocks 4, 5, 6, 7, and 8. Although the property has not yet been commissioned, most of the apartments have already been sold. Installment plans are available.',
    },
    status: 'construction',
    statusLabel: {
      ru: 'Строится (сдача в 2027 году)',
      uz: 'Qurilmoqda (2027-yilda topshiriladi)',
      en: 'Under construction (completion in 2027)',
    },
    type: 'residential',
    typeLabel: {
      ru: 'Премиальный жилой комплекс',
      uz: 'Premium turar-joy majmuasi',
      en: 'Premium residential complex',
    },
    location: {
      ru: 'Самарканд, улица Умара Жура Кулова (за ЖК "Самарканд")',
      uz: 'Samarqand, Umar Joʻrakulov koʻchasi ("Samarqand" turar-joy majmuasi orqasida)',
      en: 'Samarkand, Umar Jurakulov Street (behind the "Samarkand" residential complex)',
    },
    city: 'Самарканд',
    year: '2027',
    heroImage: '/projects/avenue-plaza/gallery11.jpg',
    gallery: [
      '/projects/avenue-plaza/gallery.jpg',
      '/projects/avenue-plaza/gallery1.jpg',
      '/projects/avenue-plaza/gallery2.jpg',
      '/projects/avenue-plaza/gallery3.jpg',
      '/projects/avenue-plaza/gallery4.jpg',
      '/projects/avenue-plaza/gallery5.jpg',
      '/projects/avenue-plaza/gallery6.jpg',
      '/projects/avenue-plaza/gallery7.jpg',
      '/projects/avenue-plaza/gallery8.jpg',
      '/projects/avenue-plaza/gallery9.jpg',
      '/projects/avenue-plaza/gallery10.jpg',
      '/projects/avenue-plaza/gallery11.jpg',
      '/projects/avenue-plaza/gallery12.jpg'
    ],
    specs: [
      {
        label: { ru: 'Высота потолков', uz: 'Shift balandligi', en: 'Ceiling height' },
        value: { ru: 'от 3 м', uz: '3 metrdan', en: 'from 3 m' },
      },
      {
        label: { ru: 'Количество корпусов', uz: 'Binolar soni', en: 'Number of buildings' },
        value: { ru: '14 зданий', uz: '14 ta bino', en: '14 buildings' },
      },
      {
        label: { ru: 'Технология строительства', uz: 'Qurilish texnologiyasi', en: 'Construction technology' },
        value: { ru: 'Монолит + кирпич', uz: 'Monolit + gʻisht', en: 'Monolithic + brick' },
      },
      {
        label: { ru: 'Паркинг', uz: 'Avtoturargoh', en: 'Parking' },
        value: { ru: 'Более 500 надземных и подземных мест', uz: "500 dan ortiq yer usti va yer osti joylari", en: 'Over 500 above- and below-ground spaces' },
      },
      {
        label: { ru: 'Территория', uz: 'Hudud', en: 'Premises' },
        value: { ru: 'Закрытая, охраняемая', uz: "Yopiq, qoʻriqlanadigan", en: 'Gated and guarded' },
      },
      {
        label: { ru: 'Оплата', uz: "To'lov", en: 'Payment' },
        value: { ru: 'Рассрочка доступна', uz: "Muddatli to'lov mavjud", en: 'Installment plans available' },
      },
    ],
    infrastructure: [
      {
        title: { ru: 'Школа и детский сад', uz: "Maktab va bog'cha", en: 'School and kindergarten' },
        description: {
          ru: 'Собственная школа и детский сад на территории комплекса для удобства семей с детьми.',
          uz: "Bolali oilalar uchun qulaylik yaratish maqsadida majmua hududida oʻz maktabi va bogʻchasi.",
          en: 'An on-site school and kindergarten for the convenience of families with children.',
        },
        icon: 'School',
      },
      {
        title: { ru: 'Торговый центр', uz: 'Savdo markazi', en: 'Shopping center' },
        description: {
          ru: 'Большой магазин и торговая инфраструктура в пределах закрытой территории комплекса.',
          uz: "Majmuaning yopiq hududi doirasida katta doʻkon va savdo infratuzilmasi.",
          en: 'A large store and retail infrastructure within the gated grounds of the complex.',
        },
        icon: 'ShoppingCart',
      },
      {
        title: { ru: 'Бассейны и фитнес-залы', uz: 'Basseynlar va fitnes-zallar', en: 'Swimming pools and fitness centers' },
        description: {
          ru: 'Несколько бассейнов и фитнес-залов для жильцов всех возрастов.',
          uz: "Har qanday yoshdagi aholi uchun bir nechta basseyn va fitnes-zallar.",
          en: 'Several pools and fitness centers for residents of all ages.',
        },
        icon: 'Dumbbell',
      },
      {
        title: { ru: 'Коворкинги', uz: 'Kovorking maydonlari', en: 'Co-working spaces' },
        description: {
          ru: 'Современные коворкинг-пространства для удаленной работы и встреч.',
          uz: "Masofadan ishlash va uchrashuvlar uchun zamonaviy kovorking maydonlari.",
          en: 'Modern co-working spaces for remote work and meetings.',
        },
        icon: 'Briefcase',
      },
      {
        title: { ru: 'Охраняемая территория', uz: 'Qoʻriqlanadigan hudud', en: 'Guarded premises' },
        description: {
          ru: 'Закрытая, охраняемая территория с контролем доступа для безопасности жильцов.',
          uz: "Aholi xavfsizligi uchun kirish nazorati bilan yopiq, qoʻriqlanadigan hudud.",
          en: 'A gated, guarded area with access control for residents’ safety.',
        },
        icon: 'ShieldCheck',
      },
      {
        title: { ru: 'Надземный и подземный паркинг', uz: 'Yer usti va yer osti avtoturargohi', en: 'Above- and below-ground parking' },
        description: {
          ru: 'Более 500 машиномест на надземных и подземных парковках комплекса.',
          uz: "Majmuaning yer usti va yer osti avtoturargohlarida 500 dan ortiq avtomobil joyi.",
          en: 'Over 500 parking spaces in the complex’s above- and below-ground parking areas.',
        },
        icon: 'Car',
      },
    ],
    constructionProgress: [
      { stage: { ru: 'Блоки 1-3', uz: '1-3-bloklar', en: 'Blocks 1-3' }, percentage: 100 },
      { stage: { ru: 'Блок 4', uz: '4-blok', en: 'Block 4' }, percentage: 60 },
      { stage: { ru: 'Блоки 5-6', uz: '5-6-bloklar', en: 'Blocks 5-6' }, percentage: 45 },
      { stage: { ru: 'Блоки 7-8', uz: '7-8-bloklar', en: 'Blocks 7-8' }, percentage: 25 },
    ],
    plans: [],
  },
  {
    id: 'evro-plaza-mall',
    name: {
      ru: 'EVRO PLAZA',
      uz: 'EVRO PLAZA',
      en: 'EVRO PLAZA',
    },
    tagline: {
      ru: 'Действующий торговый центр в Самарканде',
      uz: 'Samarqanddagi faoliyat yuritayotgan savdo markazi',
      en: 'An operating shopping center in Samarkand',
    },
    description: {
      ru: 'Торговый центр EVRO PLAZA, открытый в 2024 году: золото и ювелирные изделия, женская одежда, текстиль и стройматериалы — с дальнейшим расширением под фудкорт, кинозал и KFC.',
      uz: '2024-yilda ochilgan EVRO PLAZA savdo markazi: oltin va zargarlik buyumlari, ayollar kiyimi, tekstil va qurilish materiallari — keyinchalik fudkort, kinoteatr va KFC bilan kengaytiriladi.',
      en: 'EVRO PLAZA shopping center, opened in 2024: gold and jewelry, women’s clothing, textiles and building materials — with a planned expansion to add a food court, cinema and KFC.',
    },
    longDescription: {
      ru: 'EVRO PLAZA — действующий торговый центр в Самарканде, построенный и открытый для посетителей в 2024 году. Сегодня здесь работают магазины золота и ювелирных изделий, бутики женской одежды, текстиля и стройматериалов. Архитектура центра выполнена в светлых тонах с восточными мотивами на фасаде, внутри — просторные галереи с фонтаном, мраморными полами и хрустальными люстрами. На территории центра уже работает развлекательная зона с боулингом и игровыми автоматами. В ближайших планах — расширение торгового центра с открытием большого фудкорта, кинозала и ресторана KFC.',
      uz: 'EVRO PLAZA — Samarqand shahridagi faoliyat yuritayotgan savdo markazi, 2024-yilda qurilib, tashrif buyuruvchilar uchun ochilgan. Bugungi kunda bu yerda oltin va zargarlik buyumlari doʻkonlari, ayollar kiyimi, tekstil va qurilish materiallari butiklari ishlamoqda. Markaz arxitekturasi fasadda sharqona motivlar bilan yorqin ranglarda bezatilgan, ichkarida esa favvora, marmar pol va hristall lyustralar bilan keng galereyalar joylashgan. Markaz hududida allaqachon boulling va oʻyin avtomatlari bilan koʻngilochar zona ishlamoqda. Yaqin kelajak rejalarida — katta fudkort, kinoteatr va KFC restoranini ochish orqali savdo markazini kengaytirish bor.',
      en: 'EVRO PLAZA is an operating shopping center in Samarkand, built and opened to visitors in 2024. Today it houses gold and jewelry stores, and boutiques selling women’s clothing, textiles, and building materials. The center’s architecture features light tones with oriental motifs on the façade, while inside, spacious galleries showcase a fountain, marble floors, and crystal chandeliers. An entertainment zone with bowling and arcade games is already operating on site. Upcoming plans include expanding the center with a large food court, a cinema, and a KFC restaurant.',
    },
    status: 'completed',
    statusLabel: {
      ru: 'Работает с 2024 года',
      uz: '2024-yildan beri ishlaydi',
      en: 'Operating since 2024',
    },
    type: 'commercial',
    typeLabel: {
      ru: 'Торговый центр',
      uz: 'Savdo markazi',
      en: 'Shopping center',
    },
    location: {
      ru: 'Самарканд',
      uz: 'Samarqand',
      en: 'Samarkand',
    },
    city: 'Самарканд',
    year: '2024',
    heroImage: '/projects/evro_plaza/hero.jpg',
    gallery: [
      '/projects/evro_plaza/gallery-1.jpg',
      '/projects/evro_plaza/gallery-2.jpg',
      '/projects/evro_plaza/gallery-3.jpg',
      '/projects/evro_plaza/gallery-4.jpg',
      '/projects/evro_plaza/gallery-5.jpg',
      '/projects/evro_plaza/gallery-6.jpg',
      '/projects/evro_plaza/gallery-7.jpg',
      '/projects/evro_plaza/gallery-8.jpg',
      '/projects/evro_plaza/gallery-9.jpg',
      '/projects/evro_plaza/gallery-10.jpg',
    ],
    specs: [
      {
        label: { ru: 'Год открытия', uz: 'Ochilgan yili', en: 'Opening year' },
        value: { ru: '2024', uz: '2024', en: '2024' },
      },
      {
        label: { ru: 'Расположение', uz: 'Joylashuvi', en: 'Location' },
        value: { ru: 'Самарканд', uz: 'Samarqand', en: 'Samarkand' },
      },
      {
        label: { ru: 'Якорные направления', uz: 'Asosiy yoʻnalishlar', en: 'Anchor categories' },
        value: { ru: 'Золото и украшения, женская одежда, текстиль, стройматериалы', uz: 'Oltin va zargarlik buyumlari, ayollar kiyimi, tekstil, qurilish materiallari', en: 'Gold and jewelry, women’s clothing, textiles, building materials' },
      },
      {
        label: { ru: 'Развлечения', uz: 'Koʻngilochar zona', en: 'Entertainment' },
        value: { ru: 'Боулинг, игровые автоматы', uz: 'Boulling, oʻyin avtomatlari', en: 'Bowling, arcade games' },
      },
      {
        label: { ru: 'Расширение', uz: 'Kengaytirish', en: 'Expansion' },
        value: { ru: 'Скоро: фудкорт, кинозал, KFC', uz: 'Tez kunda: fudkort, kinoteatr, KFC', en: 'Coming soon: food court, cinema, KFC' },
      },
    ],
    infrastructure: [
      {
        title: { ru: 'Золото и ювелирные изделия', uz: 'Oltin va zargarlik buyumlari', en: 'Gold and jewelry' },
        description: {
          ru: 'Бутики золотых и ювелирных изделий с премиальной отделкой торговых залов.',
          uz: 'Savdo zallarining premium bezatilishi bilan oltin va zargarlik buyumlari butiklari.',
          en: 'Gold and jewelry boutiques with premium fit-out of the retail halls.',
        },
        icon: 'Gem',
      },
      {
        title: { ru: 'Женская одежда', uz: 'Ayollar kiyimi', en: 'Women’s clothing' },
        description: {
          ru: 'Магазины женской одежды и аксессуаров в светлых торговых галереях.',
          uz: 'Yorug‘ savdo galereyalarida ayollar kiyimi va aksessuarlari doʻkonlari.',
          en: 'Women’s clothing and accessories stores in bright retail galleries.',
        },
        icon: 'Shirt',
      },
      {
        title: { ru: 'Текстиль и стройматериалы', uz: 'Tekstil va qurilish materiallari', en: 'Textiles and building materials' },
        description: {
          ru: 'Магазины тканей и текстиля, а также строительных материалов.',
          uz: 'Mato va tekstil, shuningdek qurilish materiallari doʻkonlari.',
          en: 'Fabric and textile stores, as well as building materials retailers.',
        },
        icon: 'ShoppingBag',
      },
      {
        title: { ru: 'Боулинг и игровая зона', uz: 'Boulling va oʻyin zonasi', en: 'Bowling and arcade zone' },
        description: {
          ru: 'Развлекательная зона с боулинг-дорожками и игровыми автоматами.',
          uz: 'Boulling yoʻlakchalari va oʻyin avtomatlari bilan koʻngilochar zona.',
          en: 'An entertainment zone with bowling lanes and arcade machines.',
        },
        icon: 'Gamepad2',
      },
      {
        title: { ru: 'Скоро: фудкорт и KFC', uz: 'Tez kunda: fudkort va KFC', en: 'Coming soon: food court and KFC' },
        description: {
          ru: 'Расширение торгового центра с большим фудкортом и рестораном KFC.',
          uz: 'Katta fudkort va KFC restorani bilan savdo markazini kengaytirish.',
          en: 'An expansion of the center with a large food court and a KFC restaurant.',
        },
        icon: 'UtensilsCrossed',
      },
      {
        title: { ru: 'Скоро: кинозал', uz: 'Tez kunda: kinoteatr', en: 'Coming soon: cinema' },
        description: {
          ru: 'Открытие кинозала в рамках расширения торгового центра.',
          uz: 'Savdo markazini kengaytirish doirasida kinoteatr ochilishi.',
          en: 'A cinema opening as part of the shopping center’s expansion.',
        },
        icon: 'Film',
      },
    ],
    constructionProgress: [
      { stage: { ru: 'Основное здание ТЦ', uz: 'Savdo markazining asosiy binosi', en: 'Main mall building' }, percentage: 100 },
    ],
    plans: [],
  }
];

// ---------------------------------------------------------------------------
// Legacy archived data — kept verbatim for future reference. Not localized,
// not used anywhere in the app today (confirmed: no imports of
// `archivedProjectsData` outside this file). Do not localize or modify.
// ---------------------------------------------------------------------------

export interface LegacyProject {
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

// Временно скрытые проекты — вернуть в projectsData, когда появятся данные
export const archivedProjectsData: LegacyProject[] = [
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
