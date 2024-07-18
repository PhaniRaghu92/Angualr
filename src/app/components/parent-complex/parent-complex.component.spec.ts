import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComplexComponent } from './parent-complex.component';

describe('ParentComplexComponent', () => {
  let component: ParentComplexComponent;
  let fixture: ComponentFixture<ParentComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
