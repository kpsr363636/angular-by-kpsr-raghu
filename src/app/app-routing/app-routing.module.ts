import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes } from '@angular/router';
import { EmployeeRegisterComponent } from 'src/employee-register/employee-register.component';
import { EmployeeAllComponent } from 'src/employee-all/employee-all.component';
import { EmployeeEditComponent } from 'src/employee-edit/employee-edit.component';


const routes: Routes = [
 {path:`add`, component:EmployeeRegisterComponent},
 {path:`list`, component:EmployeeAllComponent},
 {path:`edit/:id`, component:EmployeeEditComponent},
 {path:` `, redirectTo:'list',pathMatch:'full'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }