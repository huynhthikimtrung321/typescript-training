import { SelectOption } from 'scripts/types/selectOption';
import {
  ProductStatusOptions,
  ProductTypeOptions,
} from '../constants/selectOption';
import { PRODUCT_LABEL, PRODUCT_STATUS_CLASS } from '../constants/labels';
import { LabelHtml } from '../types/label';
import { Product } from '../types/product';
import { FilterParam, SortParam } from 'scripts/types/params';
import icon from '../../asset/images/icon.svg';
import { formProductTemplate } from './template/formProduct';

export default class ProductView {
  mainContent: HTMLElement;
  constructor(mainContentSelector: string) {
    const mainContentElement = document.querySelector(mainContentSelector);

    if (!mainContentElement) {
      throw new Error('Main content element not found');
    }

    this.mainContent = mainContentElement as HTMLElement;
  }

  initView = () => {
    this.renderStatusSelectOptions('select-status', ProductStatusOptions);
    this.renderStatusSelectOptions('select-category', ProductTypeOptions);
    this.renderTableHeader(PRODUCT_LABEL);
    this.bindToggleFormProduct();
  };

  displayProducts(products: Product[], isLoading: boolean) {
    const mainContent = document.getElementById('product-list');
    if (!mainContent) {
      return; // this line should show error
    }
    mainContent.innerHTML = '';

    let listItemHTML = '<ul class="table-header">';

    if (isLoading) {
      listItemHTML += '<span class="spinner"></span>';
      listItemHTML += '</ul>';
    } else if (!products) {
      listItemHTML +=
        '<p class="text-large text-center">No products at this moment.</p>';
      listItemHTML += '</ul>';
    } else {
      products.map(products => {
        const { id, name, category, sku, quantity, cost, price, status } =
          products;
        const statusClass = PRODUCT_STATUS_CLASS[status];
        const productRowElement = `
				<li class="product-row product-item" data-field="name" data-sort-label="true">
					<h2 class="text-responsive">${name}</h2>
					<p class="text-responsive">${category}</p>
					<p class="text-responsive">${sku}</p>
					<p class="text-responsive">${quantity}</p>
					<p class="text-responsive">${cost}</p>
					<p class="text-responsive">${price}</p>
					<p class="text-responsive label ${statusClass}">${status}</p>
					<div class="btn-actions-group">
						<button class="btn-action btn-edit-product" data-product-id="${id}">
							<svg width="20" height="20" fill="blue" viewBox="0 0 24 24">
								<use
									xlink:href="${icon}#pen-icon"
								></use>
							</svg>
						</button>
						<button class="btn-action btn-delete-product" data-product-id="${id}">
							<svg width="20 " height="20" fill="red" viewBox="0 0 41.336 41.336">
								<use
									xlink:href="${icon}#trash-can"
								></use>
							</svg>
						</button>
					</div>
				</li>
			`;

        listItemHTML += productRowElement;
      });
      listItemHTML += '</ul>';
    }

    mainContent.innerHTML += listItemHTML;
  }

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

  bindToggleFormProduct = () => {
    document.getElementById('toggle-form')?.addEventListener('click', () => {
      const formProductWrapper = document.getElementById(
        'form-product-wrapper'
      );

      if (formProductWrapper === null) {
        return;
      }

      formProductWrapper.innerHTML += formProductTemplate(false);
    });
  };

  renderTableHeader = (labelHtmls: LabelHtml) => {
    const tableHeaderElement = document.querySelector(
      '.product-row.product-header'
    );
    let headerHtml = ``;
    for (const label in labelHtmls) {
      const labelHtml = `<div data-field="${label}" class="${label !== 'action' ? 'arrow-down-up' : ''}" data-sort-label="true">${labelHtmls[label]?.textContent}</div>`;
      headerHtml += labelHtml;
    }
    if (tableHeaderElement) {
      tableHeaderElement.innerHTML += headerHtml;
    }
  };

  bindFilterProduct = (renderProducts: (params: FilterParam) => void) => {
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    if (!mainContent) return;

    const filterParams: FilterParam = {};

    mainContent.addEventListener('keyup', (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;
      if (!target.classList.contains('input-search') || event.key !== 'Enter')
        return;

      const searchValue = target.value.toLowerCase();
      filterParams.name = searchValue;
      renderProducts(filterParams);
    });

    mainContent.addEventListener('change', (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target.dataset['buttonFilter']) return;

      const statusElement = document.getElementById(
        'select-status'
      ) as HTMLSelectElement;
      const categoryElement = document.getElementById(
        'select-category'
      ) as HTMLSelectElement;

      filterParams.status = statusElement.value;
      filterParams.category = categoryElement.value;
      console.log(filterParams.status);

      renderProducts(filterParams);
    });
  };

  bindSortProduct(handleSortProducts: (params: SortParam) => void) {
    this.mainContent.addEventListener('click', event => {
      const target = event.target as HTMLElement;
      if (!target.dataset['sortLabel']) return;

      const targetField = target.dataset['field'];
      if (!targetField) return;

      // Gets all labels and remove their arrows except the target
      if (target.parentNode !== null) {
        const targetSiblings = Array.from(target.parentNode.children);
        targetSiblings
          .filter(sibling => sibling !== target)
          .forEach(sibling => {
            sibling.classList.remove('arrow-up');
            sibling.classList.remove('arrow-down');
          });
      }

      const isArrowDown = target.classList.contains('arrow-down');
      const isArrowUp = target.classList.contains('arrow-up');

      if (!isArrowDown && !isArrowUp) {
        target.classList.add('arrow-down');
        target.classList.remove('arrow-down-up');
        handleSortProducts({
          sortBy: targetField.toLowerCase(),
          order: 'desc',
        });
      } else if (isArrowDown) {
        target.classList.remove('arrow-down');
        target.classList.add('arrow-up');
        handleSortProducts({
          sortBy: targetField.toLowerCase(),
          order: 'asc',
        });
      } else if (isArrowUp) {
        target.classList.remove('arrow-up');
        target.classList.add('arrow-down-up');
        handleSortProducts({}); // Assume reset to default sort
      }
    });
  }
}
