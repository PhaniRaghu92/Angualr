import { Component } from '@angular/core';

@Component({
  selector: 'app-condstmts',
  templateUrl: './condstmts.component.html',
  styleUrl: './condstmts.component.css',
})
export class CondstmtsComponent {
  public isActive: boolean = false;

  public colors: IColor[] = [
    {
      id: 100,
      color: 'red',
    },
    {
      id: 200,
      color: 'blue',
    },
    {
      id: 300,
      color: 'green',
    },
    {
      id: 400,
      color: 'orange',
    },
    {
      id: 500,
      color: 'yellow',
    },
  ];

  handleLoginClick(): void {
    this.isActive = true;
  }
  handleLogoutClick(): void {
    this.isActive = false;
  }
}

export interface IColor {
  color: string;
  id: number;
}
