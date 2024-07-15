import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingexComponent } from './eventbindingex.component';

describe('EventbindingexComponent', () => {
  let component: EventbindingexComponent;
  let fixture: ComponentFixture<EventbindingexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventbindingexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbindingexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
