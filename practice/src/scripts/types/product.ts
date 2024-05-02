export type Product = {
  id: string;
  category: 'Skin care' | 'Face care' | 'Lips care';
  cost: number;
  name: string;
  price: number;
  quantity: number;
  sku: string;
  status:
    | 'Best-seller'
    | 'Poor seller'
    | 'On sale'
    | 'New arrival'
    | 'Low stock';
};

export type ProductParams = {
  sortBy?: string;
  order?: 'asc' | 'desc';
};
