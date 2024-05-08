export const NOTIFY_MESSAGES = {
  ADD_SUCCESS_MSG: 'Product added successfully',
  ADD_FAILED_MSG: 'Adding failed products',
  EDIT_SUCCESS_MSG: 'Product edited successfully',
  EDIT_FAILED_MSG: 'Editing failed products',
  DELETE_SUCCESS_MSG: 'Product deleted successfully',
  DELETE_FAILED_MSG: 'Delete failed products',
  GET_FAILED_MSG: 'The products are unavailable at this moment!',
};

export const ValidationErrors = {
  getIsEmptyField: (): string => 'This field cannot be empty!',
  getUnallowedStringError: (): string =>
    'This field should only contain letters and numbers',
  getInvalidSKUError: (): string =>
    'SKU\'s format: 2 letters, followed by a hyphen, and then 4 numbers like "wl-2444"',
  getNotNumberError: (): string => 'This field should only contain number',
  getNotIntegerError: (): string => 'This field should only contain integer',
  getNotPositiveError: (): string =>
    'This field should only contain positive number',
  getNotGreaterError: (targetField: string): string =>
    `This field must be greater than ${targetField}!`,
  getNotLesserError: (targetField: string): string =>
    `This field must be lesser than ${targetField}!`,
  getNotEnoughCharacterError: (min: number): string =>
    `This field should have at least ${min} characters`,
};
