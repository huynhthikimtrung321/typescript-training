import { getTableHeaderTemplate } from "./templates/tableHeader";
import { getSelectCategoryTemplate } from "./templates/category";
import { getSelectStatusTemplate } from "./templates/status";
import icon from "../../asset/images/icon.svg"

export default class ProductView {
  private mainContent: HTMLElement;

  constructor(mainContentSelector: string) {
    const mainContentElement = document.querySelector(mainContentSelector);

    if (!mainContentElement) {
      throw new Error('Main content element not found');
    }

    this.mainContent = mainContentElement as HTMLElement;
  }

  displayHeader(): void {
    this.mainContent.innerHTML = '';

    const selectStatusOptionsTemplate = getSelectStatusTemplate();
    const selectCategoryOptionsTemplate = getSelectCategoryTemplate();
    const tableHeaderTemplate = getTableHeaderTemplate();

    const tableRowHeaderHTML = `
      <div class="flex-space-between">
        <svg class="icon-search">
          <use xlink:href="${icon}#icon-search"></use>
        </svg>
        <input type="text" class="input-search" placeholder="Search product">
        <div class="button-filter-group">
          <div class="select-filter-wrapper flex">
            <select id="select-status" data-button-filter=true class="btn select-filter">
              ${selectStatusOptionsTemplate}
            </select>
          </div>
          <div class="select-filter-wrapper flex">
            <select id="select-category" data-button-filter=true class="btn select-filter">
              ${selectCategoryOptionsTemplate}
            </select>
          </div>
          <button class="btn-reset">Reset</button>
        </div>
        <button id="toggle-form" class="button-add-product">Add new product</button>
      </div>
      <div class="table-container">
        <div class="product-row product-header text-large">
          ${tableHeaderTemplate}
        <div>Actions</div>
        </div>
        <div id="product-list" class="product-items"></div>
      </div>
    `;

    this.mainContent.innerHTML += tableRowHeaderHTML;
  }
}
