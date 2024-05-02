import { PRODUCT_STATUS, PRODUCT_TYPE } from 'scripts/constants/labels';

export interface SelectOption {
  label: PRODUCT_STATUS | PRODUCT_TYPE;
  value: PRODUCT_STATUS | PRODUCT_TYPE | '';
  selected: boolean;
  classes?: string;
}
