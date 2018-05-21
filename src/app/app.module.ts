import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeService } from './fake.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [FakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
