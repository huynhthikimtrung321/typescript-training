type Attributes = { [key: string]: string };

interface TagOptions {
  tagName: string,
  textContent?: string,
  className?: string,
  attributes: Attributes,
}

export const getTagTemplate = ({
  tagName,
  textContent = '',
  className = '',
  attributes,
}: TagOptions): string => {
  const optionElement: HTMLElement = document.createElement(tagName);
  optionElement.className = className;
  optionElement.textContent = textContent;
  
  if (attributes) {
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        const attributeValue = attributes[key] ?? "";
        optionElement.setAttribute(key, attributeValue);
      }
    }
  }

  return optionElement.outerHTML;
};
