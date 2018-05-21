import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { MultiLangObject } from './multi-lang-object';
import 'rxjs/add/operator/do';

@Injectable()
export class FakeService {
  constructor() {}

  getData(): Observable<MultiLangObject> {
    return (
      Observable.of({
        // some mock data
        prop1: 'single',
        multiLang: {
          en: 'hello world',
          pl: 'witaj swiecie',
          de: 'adof adolf',
        },
      })
        .do(console.log)
        // with decorators we must create new object, with pipe U can use object literal from response
        // .map(response => new MultiLangObject(response)) //construct from response
        .map(MultiLangObject.multiLangObjectFromResponse)
    ); // construct from static factory method
  }
}
