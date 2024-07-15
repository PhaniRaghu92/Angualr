import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybindingex',
  templateUrl: './propertybindingex.component.html',
  styleUrl: './propertybindingex.component.css',
})
export class PropertybindingexComponent {
  public heading: string = 'Gopi Nath';
  public para: string = 'sample para';

  public isActive: boolean = false;
}
