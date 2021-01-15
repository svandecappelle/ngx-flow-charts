import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFlowChartsModule } from 'projects/ngx-flow-charts/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxFlowChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
