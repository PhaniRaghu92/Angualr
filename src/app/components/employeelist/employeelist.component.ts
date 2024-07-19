import { Component, OnInit } from '@angular/core';
import { IEmpoyee } from './../models/IEmployee';
import { EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css',
})
export class EmployeelistComponent implements OnInit {
  public data: IEmpoyee[] = [];

  constructor(private empService: EmployeeService) {}
  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((Response: IEmpoyee[]) => {
      console.log('Response', Response);
      this.data = Response;
    });
  }
}
