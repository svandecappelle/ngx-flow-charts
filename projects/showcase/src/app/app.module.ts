import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFlowChartsComponent } from 'projects/ngx-flow-charts/src/public-api';

@NgModule({
  declarations: [
    AppComponent, NgxFlowChartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
