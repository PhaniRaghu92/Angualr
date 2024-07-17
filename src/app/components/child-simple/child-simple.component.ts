import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { IEmpoyee } from '../models/IEmployee';

@Component({
  selector: 'app-child-simple',
  templateUrl: './child-simple.component.html',
  styleUrl: './child-simple.component.css',
})
export class ChildSimpleComponent {
  @Input() public parentData: string = '';
  @Input() public pInputText: string = '';
  @Input('emp') public employee: IEmpoyee | undefined = {
    sno: 0,
    isActive: false,
    name: '',
    designation: '',
  };

  //output

  @Output() public childInfoText = new EventEmitter(); //1

  public childInfo: string = 'This is hard coded text from child';

  public handleChildBtnClick(): void {
    this.childInfoText.emit(this.childInfo);
  }
}
