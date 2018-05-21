import { ApplicationRef, Component, OnInit } from '@angular/core';
import { FakeService } from './fake.service';
import { Observable } from 'rxjs/Observable';
import { MultiLangObject } from './multi-lang-object';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="response | async as myResponse">
     <h2>prop1 <small>{{myResponse.prop1}}</small></h2>
      <h2>multiLang <small>{{myResponse.multiLang}}</small></h2>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public response: Observable<MultiLangObject>;

  constructor(private http: FakeService) {}

  ngOnInit(): void {
    this.response = this.http.getData();
  }
}
