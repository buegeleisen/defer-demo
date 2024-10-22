import { ProductData } from "./product-data.model";

export interface Product {
    id: string;
    name: string;
    data: ProductData | null;
}
