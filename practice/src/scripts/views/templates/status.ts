import { LABELS } from "scripts/constants/labels";
import { getTagTemplate } from "./tags";

type Key = typeof BEST_SELLER | typeof POOR_SELLER | typeof ON_SALE | typeof NEW_ARRIVAL | typeof LOW_STOCK | typeof ALL_STATUS;

type SelectOptionAttributes = {
  [P in Key]: {
    value: string;
  };
}

const {
  BEST_SELLER,
  POOR_SELLER,
  ON_SALE,
  NEW_ARRIVAL,
  LOW_STOCK,
  ALL_STATUS,
} = LABELS;

export const getSelectStatusTemplate = (): string => {
  const selectStatusOptionAttributes: SelectOptionAttributes = {
    [ALL_STATUS]: {
      value: '',
    },
    [BEST_SELLER]: {
      value: 'Best-seller',
    },
    [POOR_SELLER]: {
      value: 'Poor seller',
    },
    [ON_SALE]: {
      value: 'On sale',
    },
    [NEW_ARRIVAL]: {
      value: 'New arrival',
    },
    [LOW_STOCK]: {
      value: 'Low stock',
    },
  };
  let selectStatusOptionsTemplate: string = ``;
  for (const key in selectStatusOptionAttributes) {
    const selectOptionHTML = getTagTemplate({
      tagName: 'option',
      textContent: key,
      attributes: selectStatusOptionAttributes[key as Key],
    });
    selectStatusOptionsTemplate += selectOptionHTML;
  }

  return selectStatusOptionsTemplate;
};
