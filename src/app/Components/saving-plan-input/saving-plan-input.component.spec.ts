import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingPlanInputComponent } from './saving-plan-input.component';

describe('SavingPlanInputComponent', () => {
  let component: SavingPlanInputComponent;
  let fixture: ComponentFixture<SavingPlanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingPlanInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingPlanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
