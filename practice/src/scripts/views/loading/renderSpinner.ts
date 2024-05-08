export const toggleSpinner = (isHidden: boolean) => {
  const spinnerModalElement = document.querySelector(
    '.spinner-modal'
  ) as HTMLElement;

  if (isHidden) {
    spinnerModalElement.classList.remove('hidden');
  } else if (!isHidden && !spinnerModalElement.classList.contains('hidden')) {
    spinnerModalElement.classList.add('hidden');
  }
};
