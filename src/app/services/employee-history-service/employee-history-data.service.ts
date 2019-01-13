import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHistoryDataService {

  constructor(private http: HttpClient) { }

  getEmployeeHistoryData(employeeHistory: string) {
    return this.http.get(employeeHistory, {
        responseType: 'json',
        observe: 'response'
    });
  }
}
