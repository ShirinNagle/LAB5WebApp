import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IrishComponent } from './irish/irish.component';
import { EnglishComponent } from './english/english.component';
import { FormsModule } from '@angular/forms';
import {HalfService}from './services/half.service';

@NgModule({
  declarations: [
    AppComponent,
    IrishComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HalfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
