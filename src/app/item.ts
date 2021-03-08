import { Category } from "./category";

export interface Item {
    id: number;
    name: string;
    description?: string;
    price: string;
    category: Category;
    imageUrl?: string;
}
