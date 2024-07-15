import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbindingex',
  templateUrl: './eventbindingex.component.html',
  styleUrl: './eventbindingex.component.css',
})
export class EventbindingexComponent {
  public counter: number = 0;
  public heading: string = 'Event Binding';
  public imgUL: string =
    'https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80';

  handleClick(): void {
    this.counter = this.counter + 1;
    this.heading = 'Event Binding Modifed';
    this.imgUL =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s';
  }

  handleClick1(v: HTMLElement): void {
    this.heading = v.innerText;
  }
}
