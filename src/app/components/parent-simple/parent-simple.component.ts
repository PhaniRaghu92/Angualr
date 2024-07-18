import { Component } from '@angular/core';
import { IEmpoyee } from '../models/IEmployee';

@Component({
  selector: 'app-parent-simple',
  templateUrl: './parent-simple.component.html',
  styleUrl: './parent-simple.component.css',
})

export class ParentSimpleComponent {
  public pdata: string = 'This is from parent';
  public pdata1: string = 'this is  some test';

  public parentInput: string = '';
  public parentInputText: string = '';

  public ParentToChild:string = 'Parent to Test';

  public childhardCodeDText: string = '';

  public empObj: IEmpoyee = {
    name: 'TEST',
    designation: 'PARENT TEST ENG',
    isActive: false,
    sno: 143,
  };

  sendToChild(): void {
    this.parentInputText = this.parentInput;
  }
}
