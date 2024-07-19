import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpoyee } from './../components/models/IEmployee';

@Injectable({
  providedIn: 'root',
})
//static data
// export class EmployeeService {
//   public employeeData: IEmpoyee[] = [];
//   constructor() {}

//   public getAllEmployees(): IEmpoyee[] {
//     return [
//       { sno: 101, name: 'test1', isActive: true, designation: 'HW ENG' },
//       { sno: 102, name: 'test2', isActive: false, designation: 'TESTER' },
//       { sno: 103, name: 'test3', isActive: true, designation: 'MANAGER' },
//       { sno: 104, name: 'test4', isActive: false, designation: 'DEVELOPER' },
//       { sno: 105, name: 'test5', isActive: true, designation: 'Programmer' },
//       { sno: 106, name: 'test6', isActive: false, designation: 'HR' },
//       { sno: 107, name: 'test7', isActive: true, designation: 'Assistant Mgr' },
//     ];
//   }
// }
export class EmployeeService {
  public employeeData: IEmpoyee[] = [];
  constructor(private _httpClient: HttpClient) {}

  public getAllEmployees(): Observable<IEmpoyee[]> {
    return this._httpClient.get<IEmpoyee[]>('http://localhost:3000/employees');
  }
}
