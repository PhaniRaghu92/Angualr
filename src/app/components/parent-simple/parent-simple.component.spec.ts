import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSimpleComponent } from './parent-simple.component';

describe('ParentSimpleComponent', () => {
  let component: ParentSimpleComponent;
  let fixture: ComponentFixture<ParentSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
