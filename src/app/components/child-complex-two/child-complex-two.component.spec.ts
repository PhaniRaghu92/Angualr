import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComplexTwoComponent } from './child-complex-two.component';

describe('ChildComplexTwoComponent', () => {
  let component: ChildComplexTwoComponent;
  let fixture: ComponentFixture<ChildComplexTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComplexTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComplexTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
