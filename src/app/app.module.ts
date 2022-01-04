import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmployeeRegisterComponent } from 'src/employee-register/employee-register.component';
import { EmployeeAllComponent } from 'src/employee-all/employee-all.component';
import { EmployeeEditComponent } from 'src/employee-edit/employee-edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule,FormsModule,HttpClientModule,AppRoutingModule],

  declarations: [AppComponent, EmployeeRegisterComponent, EmployeeAllComponent, EmployeeEditComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
