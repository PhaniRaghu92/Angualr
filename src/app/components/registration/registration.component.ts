import { Component } from '@angular/core';
import { IEmpoyee } from '../models/IEmployee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  public cDate: number = 120000;
  public employee: IEmpoyee = {
    sno: 0,
    name: '',
    designation: '',
    isActive: false,
  };

  handleSubmit(): void {
    console.log(this.employee);
  }
}
