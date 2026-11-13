export interface CatalogProduct {
 id: string; name: string; category: string; metal: string; stone: string; price: number; image: string; description: string; rank: number;
}

// Демонстрационные данные и иллюстрации. Замените реальным ассортиментом.
export const catalogProducts: CatalogProduct[] = [
  {
    "id": "solitaire-ring",
    "name": "Кольцо Solitaire",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": "Бриллиант",
    "price": 1200000,
    "image": "/assets/catalog/solitaire-ring.svg",
    "description": "Кольцо Solitaire — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 0
  },
  {
    "id": "eternity-ring",
    "name": "Кольцо Half Eternity",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": "Бриллиант",
    "price": 820000,
    "image": "/assets/catalog/eternity-ring.svg",
    "description": "Кольцо Half Eternity — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 1
  },
  {
    "id": "baguette-ring",
    "name": "Кольцо Baguette",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": "Бриллиант",
    "price": 1450000,
    "image": "/assets/catalog/baguette-ring.svg",
    "description": "Кольцо Baguette — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 2
  },
  {
    "id": "marquise-ring",
    "name": "Кольцо Marquise",
    "category": "Кольца",
    "metal": "Белое золото",
    "stone": "Бриллиант",
    "price": 1300000,
    "image": "/assets/catalog/marquise-ring.svg",
    "description": "Кольцо Marquise — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 3
  },
  {
    "id": "hoop-earrings",
    "name": "Серьги Hoop",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": "Бриллиант",
    "price": 980000,
    "image": "/assets/catalog/hoop-earrings.svg",
    "description": "Серьги Hoop — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 4
  },
  {
    "id": "solitaire-studs",
    "name": "Серьги Solitaire",
    "category": "Серьги",
    "metal": "Белое золото",
    "stone": "Бриллиант",
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
    "stone": "Бриллиант",
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
    "stone": "Бриллиант",
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
    "stone": "Бриллиант",
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
    "stone": "Без камней",
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
    "stone": "Бриллиант",
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
    "stone": "Сапфир",
    "price": 1580000,
    "image": "/assets/catalog/sapphire-bracelet.svg",
    "description": "Браслет Sapphire — демонстрационная модель коллекции AYANA. Характеристики, наличие и варианты исполнения уточняются при консультации.",
    "rank": 11
  }
];
