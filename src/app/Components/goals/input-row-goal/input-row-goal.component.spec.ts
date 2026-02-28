import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRowGoalComponent } from './input-row-goal.component';

describe('InputRowGoalComponent', () => {
  let component: InputRowGoalComponent;
  let fixture: ComponentFixture<InputRowGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRowGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRowGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
