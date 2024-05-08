export type Product = {
  id: string;
  category: string;
  cost: number;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  status: 'bestSeller' | 'poorSeller' | 'onSale' | 'newArrival' | 'lowStock';
};

export type ProductParams = {
  sortBy?: string;
  order?: 'asc' | 'desc';
};
