export interface Product {
  id: string;
  category: 'Skin care' | 'Face care' | 'Lips care';
  cost: number;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  status: 'bestSeller' | 'poorSeller' | 'onSale' | 'newArrival' | 'lowStock';
}

export type ProductParams = {
  sortBy?: string;
  order?: 'asc' | 'desc';
};
