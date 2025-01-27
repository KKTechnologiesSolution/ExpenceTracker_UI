import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingPlanTableComponent } from './saving-plan-table.component';

describe('SavingPlanTableComponent', () => {
  let component: SavingPlanTableComponent;
  let fixture: ComponentFixture<SavingPlanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingPlanTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
