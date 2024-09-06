export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number; // Optional: For cart quantity
}
