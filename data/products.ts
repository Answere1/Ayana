export interface Product {
    id: string;
    name: string;
    detail: string;
    price: string;
    image: string;
}

// Showcase data from the reference. Replace with AYANA's actual assortment.
export const products: Product[] = [
    { id: "laurence", name: "Кольцо Турмалин", detail: "0,54 карат бриллиантов, 1,29 карат турмалин", price: "679 000 ₸", image: "/assets/catalog/turmaline.png" },
    { id: "classic-studs", name: "Кольцо Сапфир", detail: "бриллианты 1,71 карат, 0,78 карат сапфир", price: "1 359 000 ₸", image: "/assets/catalog/senssapphire.png" },
    { id: "wildflower", name: "Изумрудное кольцо", detail: "бриллианты 0,60 карат, изумруд 0,80 карат", price: "789 000 ₸", image: "/assets/catalog/emerald.png" },
];
