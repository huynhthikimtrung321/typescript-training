import { FormFieldName } from 'scripts/types/form';
import { ValidationErrors } from '../constants/message';
import REGEX from '../constants/regex';

type Target = {
  field: string;
  value: string;
};

type Validator = (value: string, target?: Target) => string;

type Field =
  | 'name'
  | 'price'
  | 'sku'
  | 'quantity'
  | 'cost'
  | 'status'
  | 'category';

export type FormError = {
  [key in Field]?: string;
};

export type FormField = {
  field: FormFieldName;
  value: FormDataEntryValue;
  validators: Validator[];
};

const {
  getIsEmptyField,
  getUnallowedStringError,
  getInvalidSKUError,
  getNotNumberError,
  getNotIntegerError,
  getNotPositiveError,
  getNotEnoughCharacterError,
  getNotGreaterError,
  getNotLesserError,
} = ValidationErrors;

const { validSKURegex, allowedStringRegex } = REGEX;
const isNotEmptyField = (value: string) =>
  value !== '' ? '' : getIsEmptyField();
const isAllowedString = (value: string) =>
  allowedStringRegex.test(value) ? '' : getUnallowedStringError();
const hasMinLength = (value: string) =>
  value.length >= 5 ? '' : getNotEnoughCharacterError(5);
const isGreaterOrEqual = (value: string, target: Target) =>
  parseFloat(value) >= parseFloat(target.value)
    ? ''
    : getNotGreaterError(target.field);
const isLesserOrEqual = (value: string, target: Target) =>
  parseFloat(value) <= parseFloat(target.value)
    ? ''
    : getNotLesserError(target.field);
const isValidSKU = (value: string) =>
  validSKURegex.test(value) ? '' : getInvalidSKUError();
const isNumber = (value: string) =>
  !isNaN(parseFloat(value)) && parseFloat(value).toString() === value
    ? ''
    : getNotNumberError();
const isInteger = (value: string) =>
  Number.isInteger(parseFloat(value)) ? '' : getNotIntegerError();
const isPositiveNumber = (value: string) =>
  parseFloat(value) >= 0 ? '' : getNotPositiveError();

const validateForm = (formFields: FormField[]) => {
  const formError: FormError = {};

  formFields.forEach(formField => {
    const { field, value, validators } = formField;
    for (const validator of validators) {
      if (formError[field] && formError[field] !== '') {
        break;
      }
      formError[field] = validator(value as string);
    }
  });

  return formError;
};

const renderErrorMessages = (
  element: HTMLElement | Document = document,
  formError: FormError
) => {
  const errorMsgElements = element.querySelectorAll<HTMLElement>('.error-msg');

  errorMsgElements.forEach(element => {
    const field = element.dataset['fieldError'];
    if (field) {
      element.textContent = formError[field as Field] ?? '';
    }
  });
};

export {
  isNotEmptyField,
  isAllowedString,
  isGreaterOrEqual,
  isLesserOrEqual,
  hasMinLength,
  isValidSKU,
  isNumber,
  isInteger,
  isPositiveNumber,
  renderErrorMessages,
  validateForm,
};
