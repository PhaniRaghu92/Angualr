import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComplexOneComponent } from './child-complex-one.component';

describe('ChildComplexOneComponent', () => {
  let component: ChildComplexOneComponent;
  let fixture: ComponentFixture<ChildComplexOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComplexOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComplexOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
