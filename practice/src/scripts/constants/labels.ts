import { LabelHtml } from '@/types/label';

export const PRODUCT_STATUS_LABEL = {
  all: 'All Status',
  bestSeller: 'Best-seller',
  poorSeller: 'Poor seller',
  onSale: 'On sale',
  newArrival: 'New arrival',
  lowStock: 'Low stock',
};

export enum PRODUCT_TYPE {
  ALL_CATEGORY = 'All category',
  SKIN_CARE = 'Skin care',
  FACE_CARE = 'Face care',
  LIPS_CARE = 'Lips care',
}

export enum PRODUCT_STATUS {
  ALL_STATUS = '',
  BEST_SELLER = 'bestSeller',
  POOR_SELLER = 'poorSeller',
  ON_SALE = 'onSale',
  NEW_ARRIVAL = 'newArrival',
  LOW_STOCK = 'lowStock',
}

export const PRODUCT_LABELS: LabelHtml = [
  {
    field: 'name',
    label: 'Product name',
  },
  {
    field: 'category',
    label: 'Category',
  },
  {
    field: 'sku',
    label: 'SKU',
  },
  {
    field: 'quantity',
    label: 'Quantity',
  },
  {
    field: 'cost',
    label: 'Cost',
  },
  {
    field: 'price',
    label: 'Price',
  },
  {
    field: 'status',
    label: 'Status',
  },
  {
    field: 'action',
    label: 'Action',
  },
];
