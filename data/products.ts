export interface Product {
    id: string;
    name: string;
    detail: string;
    price: string;
    image: string;
}

// Showcase data from the reference. Replace with AYANA's actual assortment.
export const products: Product[] = [
    { id: "laurence", name: "Ожерелье Лоуренс", detail: "18kt white gold · round brilliant diamonds", price: "$18,500", image: "/assets/photo-1599643478518-a784e5dc4c8f.jpg" },
    { id: "classic-studs", name: "Бриллиантовые серьги", detail: "18kt white gold · 1.00ct total weight", price: "$6,800", image: "/assets/photo-1535632066927-ab7c9ab60908.jpg" },
    { id: "wildflower", name: "Кольцо Тринити", detail: "18kt yellow gold · fancy yellow diamond", price: "$12,900", image: "/assets/photo-1605100804763-247f67b3557e.jpg" },
];
