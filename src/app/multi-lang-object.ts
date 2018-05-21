import { MultiLang } from './multi-lang.property.decorator';

export class MultiLangObject {
  prop1: string;
  @MultiLang() multiLang: { [key: string]: string };

  constructor({ prop1, multiLang }) {
    this.prop1 = prop1;
    this.multiLang = multiLang;
  }

  /* Or use static method to return new instance from response */
  static multiLangObjectFromResponse({ prop1, multiLang }) {
    console.debug('creating new');
    return new MultiLangObject({ prop1, multiLang });
  }
}
