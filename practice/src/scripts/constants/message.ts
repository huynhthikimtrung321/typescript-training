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
  getNotGreaterError: (target: number): string =>
    `This field must be greater than ${target}!`,
  getNotLesserError: (target: number): string =>
    `This field must be lesser than ${target}!`,
  getNotEnoughCharacterError: (min: number): string =>
    `This field should have at least ${min} characters`,
};
