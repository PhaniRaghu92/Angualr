import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testapp';
  public dateTime: string = new Date().toString();
  public imgURL: string =
    'https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6';

  public getCurrentTime(): string {
    setInterval(() => {
      this.dateTime = new Date().toString();
    }, 1000);
    return this.dateTime;
  }
}
