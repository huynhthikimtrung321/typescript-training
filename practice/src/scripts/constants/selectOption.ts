import {
  SelectStatusOption,
  SelectCategoryOption,
} from 'scripts/types/selectOption';
import { PRODUCT_STATUS, PRODUCT_TYPE } from './labels';

export const ProductStatusOptions: SelectStatusOption[] = [
  {
    label: PRODUCT_STATUS.ALL_STATUS,
    value: PRODUCT_STATUS.ALL_STATUS,
    selected: true,
    classes: 'product-status-option',
  },
  {
    label: PRODUCT_STATUS.BEST_SELLER,
    value: PRODUCT_STATUS.BEST_SELLER,
    selected: false,
  },
  {
    label: PRODUCT_STATUS.POOR_SELLER,
    value: PRODUCT_STATUS.POOR_SELLER,
    selected: false,
  },
  {
    label: PRODUCT_STATUS.ON_SALE,
    value: PRODUCT_STATUS.ON_SALE,
    selected: false,
  },
  {
    label: PRODUCT_STATUS.NEW_ARRIVAL,
    value: PRODUCT_STATUS.NEW_ARRIVAL,
    selected: false,
  },
  {
    label: PRODUCT_STATUS.LOW_STOCK,
    value: PRODUCT_STATUS.LOW_STOCK,
    selected: false,
  },
];

export const ProductTypeOptions: SelectCategoryOption[] = [
  {
    label: PRODUCT_TYPE.ALL_CATEGORY,
    value: '',
    selected: true,
    classes: 'product-status-option',
  },
  {
    label: PRODUCT_TYPE.SKIN_CARE,
    value: PRODUCT_TYPE.SKIN_CARE,
    selected: false,
  },
  {
    label: PRODUCT_TYPE.FACE_CARE,
    value: PRODUCT_TYPE.FACE_CARE,
    selected: false,
  },
  {
    label: PRODUCT_TYPE.LIPS_CARE,
    value: PRODUCT_TYPE.LIPS_CARE,
    selected: false,
  },
];
