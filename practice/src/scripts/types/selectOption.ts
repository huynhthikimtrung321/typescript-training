import { PRODUCT_STATUS, PRODUCT_TYPE } from '@/constants/labels';

export interface SelectStatusOption {
  label: PRODUCT_STATUS;
  value:
    | 'bestSeller'
    | 'poorSeller'
    | 'onSale'
    | 'newArrival'
    | 'lowStock'
    | 'all';
  selected: boolean;
  classes?: string;
}

export interface SelectCategoryOption {
  label: PRODUCT_TYPE;
  value: PRODUCT_TYPE;
  selected: boolean;
  classes?: string;
}
