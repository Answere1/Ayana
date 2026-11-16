export interface CatalogProduct {
 id: string; name: string; category: string; metal: string; stone: string | string[]; price: number; image: string; description: string; rank: number;
}

// Демонстрационные данные и иллюстрации. Замените реальным ассортиментом.
export const catalogProducts: CatalogProduct[] = [
  {
    "id": "cuchon-ring",
    "name": "Кольцо Кушон",
    "category": "Кольца",
    "metal": "Желтое золото",
    "stone": ["Бриллиант"],
    "price": 900000,
    "image": "/assets/catalog/cuchon.jpg",
    "description": "Роскошный 2-каратный бриллиант в огранке кушон 750 проба золота.",
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
    "id": "solitaire-studs",
    "name": "Серьги Solitaire",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 650000,
    "image": "/assets/catalog/solitaire-studs.svg",
    "description": "Серьги Solitaire — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 5
  },
  {
    "id": "baguette-earrings",
    "name": "Серьги Baguette",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 1120000,
    "image": "/assets/catalog/baguette-earrings.svg",
    "description": "Серьги Baguette — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 6
  },
  {
    "id": "solitaire-necklace",
    "name": "Ожерелье Solitaire",
    "category": "Ожерелья",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 1050000,
    "image": "/assets/catalog/solitaire-necklace.svg",
    "description": "Ожерелье Solitaire — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 7
  },
  {
    "id": "tennis-bracelet",
    "name": "Браслет Tennis",
    "category": "Браслеты",
    "metal": "Белое золото",
    "stone": ["Бриллиант"],
    "price": 2000000,
    "image": "/assets/catalog/tennis-bracelet.svg",
    "description": "Браслет Tennis — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 8
  },
  {
    "id": "clover-necklace",
    "name": "Ожерелье Clover",
    "category": "Ожерелья",
    "metal": "Жёлтое золото",
    "stone": ["Без камней"],
    "price": 540000,
    "image": "/assets/catalog/clover-necklace.svg",
    "description": "Ожерелье Clover — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 9
  },
  {
    "id": "sautoir",
    "name": "Сотуар Lumière",
    "category": "Ожерелья",
    "metal": "Розовое золото",
    "stone": ["Бриллиант"],
    "price": 890000,
    "image": "/assets/catalog/sautoir.svg",
    "description": "Сотуар Lumière — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 10
  },
  {
    "id": "sapphire-bracelet",
    "name": "Браслет Sapphire",
    "category": "Браслеты",
    "metal": "Белое золото",
    "stone": ["Сапфир"],
    "price": 1580000,
    "image": "/assets/catalog/sapphire-bracelet.svg",
    "description": "Браслет Sapphire — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 11
  }
];
