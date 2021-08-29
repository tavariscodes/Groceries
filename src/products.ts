export interface Product {
    item: string;
    brand: string;
    units: string;
    quantity: number;
    isPurchased: boolean;
}

export const productList: Array<Product> = [
    {
        item: "Doritos", 
        brand: "Pepsi", 
        units: "2000", 
        quantity: 20, 
        isPurchased: true
    },
    {
        item: "Sprite", 
        brand: "Coca-cola", 
        units: "1000", 
        quantity: 30, 
        isPurchased: false
    },
    {
        item: "Honey Bun", 
        brand: "Pepsi", 
        units: "2000", 
        quantity: 20, 
        isPurchased: false
    },
];


// export type { Product }