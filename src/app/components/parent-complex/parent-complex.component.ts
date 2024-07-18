import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-complex',
  templateUrl: './parent-complex.component.html',
  styleUrl: './parent-complex.component.css'
})

export class ParentComplexComponent {
public childOneData:string ='';
public sendToChildOne:string ='This is hard coded text from Parent';

public receivedFromChildOne:string = '';
public sendToParentFromChildOne:string=''

public receivedFromChildTwo:string = '';

}
