export const MultiLang = (fallbackLang = 'en') => (target: Object, propertyKey: string) => {
  let value = this[propertyKey];
  let currentLang = window['appGlobals'].currentLang;
  Object.defineProperty(target, propertyKey, {
    get: () => value[currentLang] || value[fallbackLang] || value,
    set: newValue => (value = newValue),
  });
};
