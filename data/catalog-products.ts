export interface CatalogProduct {
 id: string; name: string; category: string; metal: string; stone: string | string[]; price: number; image: string; description: string; rank: number;
}


export const catalogProducts: CatalogProduct[] = [
  {
    "id": "cuchon-ring",
    "name": "Кольцо Солитер",
    "category": "Кольца",
    "metal": "Желтое золото",
    "stone": ["Бриллиант"],
    "price": 900000,
    "image": "/assets/catalog/cuchon1.png",
    "description": "Роскошный 2-каратный бриллиант в огранке солитер 750 проба золота.",
    "rank": 0
  },
  {
    "id": "oceanheart-ring",
    "name": "Кольцо Сердце Океана",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир"],
    "price": 820000,
    "image": "/assets/catalog/oceanheart.png",
    "description": "Кольцо Сердце Океана — Роскошное кольцо 750 проба белого золота, природного сапфира 1.2 карат, природные бриллианты 0.48 карат.",
    "rank": 1
  },
  {
    "id": "royalsapphire-ring",
    "name": "Кольцо Королевский Сапфир",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир"],
    "price": 789000,
    "image": "/assets/catalog/royalsapphire.png",
    "description": "Кольцо Королевский Сапфир — Природный сапфир Royal Blue 0.82 карат, природные бриллианты 0.57 карат, 750 проба белого золота.",
    "rank": 2
  },
  {
    "id": "senssapphire-ring",
    "name": "Кольцо Чувственный Сапфир",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир" ],
    "price": 1359000,
    "image": "/assets/catalog/senssapphire.png",
    "description": "Чувственный Сапфир — Сапфир в обрамлении весом в 1.71 карат и 0.78 карат природных бриллиантов.",
    "rank": 3
  },
  {
    "id": "sapphiredefault",
    "name": "Сапфир кольцо",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир"],
    "price": 519000,
    "image": "/assets/catalog/sapphiredefault.png",
    "description": "Сапфир кольцо — Природный сапфир 1.12 карат, Природные бриллианты 0.32 карат, белое золото 750 пробы.",
    "rank": 4
  },
  {
    "id": "turmaline",
    "name": "Кольцо Турмалин",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Турмалин"],
    "price": 679000,
    "image": "/assets/catalog/turmaline.png",
    "description": "Кольцо Турмалин. Грушевидная огранка из природных бриллиантов 0.54 карат и крупный природный турмалин 1.29 карат, белое золото 750 пробы",
    "rank": 5
  },
  {
    "id": "emerald-ring",
    "name": "Изумрудное кольцо",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Изумруд"],
    "price": 789000,
    "image": "/assets/catalog/emerald.png",
    "description": "Изумрудное кольцо — 0.60 карат природных бриллиантов, 0,80 карат природного изумруда и 750 проба белого золота",
    "rank": 6
  },
  {
    "id": "turmaline-oval-ring",
    "name": "Турмалиновое овальное кольцо",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Турмалин"],
    "price": 589000,
    "image": "/assets/catalog/turmalineoval.png",
    "description": "Турмалиновое кольцо. Огранка в виде овала, бриллиант 0,45 карат, турмалин 1 карат.",
    "rank": 7
  },
  {
    "id": "velicolepie-ring",
    "name": "Кольцо Великолепие",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллианты", "Сапфир"],
    "price": 1039000,
    "image": "/assets/catalog/velicolepie.png",
    "description": "Великолепие. Кольцо авторского дизайна, 750 проба белого золота",
    "rank": 9
  },
  {
    "id": "sapphirefull-ring",
    "name": "Кольцо Сапфир",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир"],
    "price": 1469000,
    "image": "/assets/catalog/sapphirefull.png",
    "description": "Кольцо. природные бриллианты 1.62 карата, природный сапфир 0,95 карат, белое золото 750 пробы.",
    "rank": 10
  },
  {
    "id": "rubin-baguette-ring",
    "name": "Рубиновое багетное кольцо",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Рубин"],
    "price": 1489000,
    "image": "/assets/catalog/rubin2.png",
    "description": "Рубиновое кольцо багетной огранки. Природные бриллианты 1.11 карат, Природный рубин 1.32 карата, белое золото 750 пробы.",
    "rank": 11
  },
  {
    "id": "rubin-ring",
    "name": "Рубиновое кольцо",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Рубин"],
    "price": 849000,
    "image": "/assets/catalog/rubin.png",
    "description": "Рубиновое кольцо. Природные бриллианты 0.32 карата, Природный рубин 2.38 карат, белое золото 750 пробы.",
    "rank": 12
  },
  {
    "id": "rubinlab-ring",
    "name": "Рубиновое кольцо LabGrown",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Рубин"],
    "price": 600000,
    "image": "/assets/catalog/rubinlab.png",
    "description": "Рубиновое кольцо LabGrown. LabGrown бриллианты 2.13 карата, Природный рубин ? карат, белое золото 750 пробы.",
    "rank": 13
  },
  {
    "id": "topas-heart-ring",
    "name": "Кольцо Топаз",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Топаз"],
    "price": 500000,
    "image": "/assets/catalog/topasheart.png",
    "description": "Кольцо с утонченным Топазом в огранке Сердце. Топаз 2.10 карата, Лабораторные бриллианты, белое золото 750 пробы.",
    "rank": 14
  },
  {
    "id": "eternity-ring",
    "name": "Кольцо дорожка",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 1050000,
    "image": "/assets/catalog/eternity.png",
    "description": "Кольцо дорожка Eternity. Природные бриллианты 1.26 карат, белое золото 750 пробы.",
    "rank": 16
  },
  {
    "id": "sapphire-green-ring",
    "name": "Кольцо зеленый Сапфир",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир"],
    "price": 550000,
    "image": "/assets/catalog/sapphiregreen.png",
    "description": "Кольцо зеленый Сапфир. Зеленый сапфир 1.5 карата, 2 бриллианта Маркиз 0.27 карат, белое золото 750 пробы.",
    "rank": 17
  },
  {
    "id": "puset-studs",
    "name": "Серьги пусеты",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 450000,
    "image": "/assets/catalog/puset.png",
    "description": "Серьги пусеты. белое золото 750 пробы.",
    "rank": 18
  },
  {
    "id": "puset-aquamarine-studs",
    "name": "Серьги пусеты Аквамариновые Сердца",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Аквамарин"],
    "price": 350000,
    "image": "/assets/catalog/aquamarine.png",
    "description": "Серьги пусеты из Аквамарина огранки Сердце. Природные бриллианты 0.9 карат, белое золото 750 пробы.",
    "rank": 20
  },
  {
    "id": "aquamarinedef",
    "name": "Кольцо с аквамаринами",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 450000,
    "image": "/assets/catalog/aquamarinedef.png",
    "description": "Кольцо с аквамаринами. 2 Аквамарина, белое золото 750 пробы.",
    "rank": 22
  },
  {
    "id": "love",
    "name": "Кольцо Love",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 919000,
    "image": "/assets/catalog/love.png",
    "description": "Кольцо Love. 0,56 карат бриллиантов, белое золото 750 пробы.",
    "rank": 23
  }
];



/* На разработке

  {
    "id": "tennis-bracelet",
    "name": "Теннисный браслет",
    "category": "Браслеты",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 2000000,
    "image": "/assets/catalog/tennisbracelet.png",
    "description": "Теннисный браслет. Природные бриллианты 3 карата, белое золото 750 пробы.",
    "rank": 21
  },

  {
    "id": "puset-square-studs",
    "name": "Серьги пусеты Квадрат",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 950000,
    "image": "/assets/catalog/pusetsquare.png",
    "description": "Пусеты Квадратной огранки. Природные бриллианты 0.9 карат, белое золото 750 пробы.",
    "rank": 19
  },


  {
    "id": "halfround-ring",
    "name": "Кольцо полудорожка",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 750000,
    "image": "/assets/catalog/halfround.png",
    "description": "Кольцо полудорожка Round Cut. Природные бриллианты VS-SI, белое золото 750 пробы.",
    "rank": 15
  },


  {
    "id": "sapphire-marquise-ring",
    "name": "Сапфировое кольцо Маркиз",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": ["Бриллиант", "Сапфир"],
    "price": 899000,
    "image": "/assets/catalog/sapphiremarquise.png",
    "description": "Кольцо сапфир с огранкой Маркиз. 0.42 карата природных бриллиантов, 1.20 карата природного камня, 750 проба белого золота",
    "rank": 8
  },






























*/