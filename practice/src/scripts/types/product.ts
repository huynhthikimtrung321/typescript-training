export type Category = 'Skin care' | 'Face care' | 'Lips care';
export type Status =
  | 'bestSeller'
  | 'poorSeller'
  | 'onSale'
  | 'newArrival'
  | 'lowStock';

export interface Product {
  id: string;
  category: Category;
  cost: number;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  status: 'bestSeller' | 'poorSeller' | 'onSale' | 'newArrival' | 'lowStock';
}
