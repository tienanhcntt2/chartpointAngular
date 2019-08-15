import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxChartModule } from 'devextreme-angular';
import { Service } from './service/service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule,
    AppRoutingModule
  ],
  providers: [
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
