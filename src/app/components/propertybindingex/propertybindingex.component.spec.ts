import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingexComponent } from './propertybindingex.component';

describe('PropertybindingexComponent', () => {
  let component: PropertybindingexComponent;
  let fixture: ComponentFixture<PropertybindingexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertybindingexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertybindingexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
