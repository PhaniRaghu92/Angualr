import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-complex-two',
  templateUrl: './child-complex-two.component.html',
  styleUrl: './child-complex-two.component.css'
})
export class ChildComplexTwoComponent {

@Input() public receivedFromParent: string = '';

@Output() public sendToParentFromChildTwo = new EventEmitter();

public childTwoProp:string='';
public sendDataToParentFromChildTwo(){
  this.sendToParentFromChildTwo.emit(this.childTwoProp);
}
}
