import { getTagTemplate } from "./tags";

type Attributes = {
  "data-field": string;
  "data-sort-label":  string;
};

type Key = 'Product name' | 'Category' | 'SKU' | 'Quantity' | 'Cost' | 'Price' | 'Status';``
export const getTableHeaderTemplate = () => {
  const tableHeaderAttributes: Record<Key, Attributes> = {
    'Product name': {
      'data-field': 'name',
      'data-sort-label': 'true',
    },
    Category: {
      'data-field': 'category',
      'data-sort-label': 'true',
    },
    SKU: {
      'data-field': 'SKU',
      'data-sort-label': 'true',
    },
    Quantity: {
      'data-field': 'Quantity',
      'data-sort-label': 'true',
    },
    Cost: {
      'data-field': 'Cost',
      'data-sort-label': 'true',
    },
    Price: {
      'data-field': 'price',
      'data-sort-label': 'true',
    },
    Status: {
      'data-field': 'status',
      'data-sort-label': 'true',
    },
  };
  let tableHeaderTemplate = ``;
  for (const key of Object.keys(tableHeaderAttributes)) {
    const selectOptionHTML = getTagTemplate({
      tagName: 'div',
      textContent: key,
      className: 'text-responsive arrow-down-up',
      attributes: tableHeaderAttributes[key as Key],
    });
    tableHeaderTemplate += selectOptionHTML;
  }

  return tableHeaderTemplate;
};
