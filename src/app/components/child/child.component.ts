import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() public sendToParent = new EventEmitter(); //1

  public childInputData: string = '';

  //step 2
  //define the event for button in .html
  //step3
  public sendDataToParent(): void {
    //step 4 emit/raise the event

    this.sendToParent.emit(this.childInputData);
  }
}
