import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private http : HttpClient) { }

}