import { LABELS } from 'scripts/constants/labels';
import { getTagTemplate } from './tags';

type Key =
  | typeof SKIN_CARE
  | typeof ALL_CATEGORY
  | typeof FACE_CARE
  | typeof LIPS_CARE;

type SelectOptionAttributes = {
  [P in Key]: {
    value: string;
  };
};

const { SKIN_CARE, FACE_CARE, LIPS_CARE, ALL_CATEGORY } = LABELS;

export const getSelectCategoryTemplate = (): string => {
  const selectCategoryOptionAttributes: SelectOptionAttributes = {
    [ALL_CATEGORY]: {
      value: '',
    },
    [SKIN_CARE]: {
      value: 'Skin care',
    },
    [FACE_CARE]: {
      value: 'Face care',
    },
    [LIPS_CARE]: {
      value: 'Lips care',
    },
  };
  let selectCategoryOptionsTemplate: string = ``;
  for (const key in selectCategoryOptionAttributes) {
    const selectOptionHTML: string = getTagTemplate({
      tagName: 'option',
      textContent: key,
      attributes: selectCategoryOptionAttributes[key as Key],
    });
    selectCategoryOptionsTemplate += selectOptionHTML;
  }

  return selectCategoryOptionsTemplate;
};
