import { LabelHtml } from 'scripts/types/label';

export enum PRODUCT_TYPE {
  ALL_CATEGORY = 'All category',
  SKIN_CARE = 'Skin care',
  FACE_CARE = 'Face care',
  LIPS_CARE = 'Lips care',
}

export enum PRODUCT_STATUS {
  ALL_STATUS = 'All status',
  BEST_SELLER = 'Best-seller',
  POOR_SELLER = 'Poor seller',
  ON_SALE = 'On sale',
  NEW_ARRIVAL = 'New arrival',
  LOW_STOCK = 'Low stock',
}

export const PRODUCT_STATUS_CLASS = {
  'Best-seller': 'best-seller-label',
  'Poor seller': 'poor-seller-label',
  'On sale': 'on-sale-label',
  'New arrival': 'new-arrival-label',
  'Low stock': 'low-stock-label',
};

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
