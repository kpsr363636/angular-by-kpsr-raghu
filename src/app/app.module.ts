import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,FormsModule,HttpClientModule],

  declarations: [AppComponent, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
