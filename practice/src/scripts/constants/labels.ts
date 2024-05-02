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

export const PRODUCT_LABEL = {
  name: {
    textContent: 'Product name',
  },
  category: {
    textContent: 'Category',
  },
  SKU: {
    textContent: 'SKU',
  },
  Quantity: {
    textContent: 'Quantity',
  },
  Cost: {
    textContent: 'Cost',
  },
  price: {
    textContent: 'Price',
  },
  status: {
    textContent: 'Status',
  },
  action: {
    textContent: 'Action',
  },
};
