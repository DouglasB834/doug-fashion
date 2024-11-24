export interface Category {
  id: string;
  title: string;
  image: string;
  imageUrl: string;
}
export interface Product {
  id: string;
  price: number;
  name: string;
  imageUrl: string;
  quantity?: number;
  description: string;
}

export interface User {
  id?: string;
  email: string;
  password: string;
}
