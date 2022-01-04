import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  baseUri : 'http://localhost:8080/api'
  constructor() {}
}
