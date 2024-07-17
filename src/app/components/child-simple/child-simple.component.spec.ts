import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSimpleComponent } from './child-simple.component';

describe('ChildSimpleComponent', () => {
  let component: ChildSimpleComponent;
  let fixture: ComponentFixture<ChildSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
