import { Component, EventEmitter, input, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-complex-one',
  templateUrl: './child-complex-one.component.html',
  styleUrl: './child-complex-one.component.css'
})

export class ChildComplexOneComponent {
  // public constructor()
  // {
  //   this.sendToParentFromChildOne.emit('Hard coded text from Child one');
  // }

@Input() public childOneProp: string = '';
@Input() public receivedFromChildTwo:string ='';

@Output() public sendToParentFromChildOne = new EventEmitter();
public sendDataToParent(): void {
  this.sendToParentFromChildOne.emit(this.childOneProp);
}


}
