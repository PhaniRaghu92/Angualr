import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondstmtsComponent } from './condstmts.component';

describe('CondstmtsComponent', () => {
  let component: CondstmtsComponent;
  let fixture: ComponentFixture<CondstmtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CondstmtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondstmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
