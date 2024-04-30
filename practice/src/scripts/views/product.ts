import { SelectOption } from 'scripts/types/selectOption';
import {
  ProductStatusOptions,
  ProductTypeOptions,
} from '../constants/selectOption';
import { PRODUCT_LABEL } from '../constants/labels';
import { LabelHtml } from '../types/label';

export default class ProductView {
  constructor(mainContentSelector: string) {
    const mainContentElement = document.querySelector(mainContentSelector);

    if (!mainContentElement) {
      throw new Error('Main content element not found');
    }
  }

  initView = () => {
    this.renderStatusSelectOptions('select-status', ProductStatusOptions);
    this.renderStatusSelectOptions('select-category', ProductTypeOptions);
    this.renderTableHeader(PRODUCT_LABEL);
  };

  renderStatusSelectOptions = (elementId: string, options: SelectOption[]) => {
    const statusSelect = document.getElementById(elementId);
    let allOptions = '';
    options.forEach((option: SelectOption) => {
      const optionElement = `<option value='${option.value}'>${option.label}</option>`;
      allOptions += optionElement;
    });
    if (statusSelect) {
      statusSelect.innerHTML = allOptions;
    }
  };

  renderTableHeader = (labelHtmls: LabelHtml) => {
    const tableHeaderElement = document.querySelector(
      '.product-row.product-header'
    );
    let headerHtml = ``;
    for (const label in labelHtmls) {
      const labelHtml = `<div data-field="${label}" data-sort-label="true">${labelHtmls[label]?.textContent}</div>`;
      headerHtml += labelHtml;
    }
    if (tableHeaderElement) {
      tableHeaderElement.innerHTML += headerHtml;
    }
  };
}
