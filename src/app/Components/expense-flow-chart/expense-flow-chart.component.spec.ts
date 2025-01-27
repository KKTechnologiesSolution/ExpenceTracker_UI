import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFlowChartComponent } from './expense-flow-chart.component';

describe('ExpenseFlowChartComponent', () => {
  let component: ExpenseFlowChartComponent;
  let fixture: ComponentFixture<ExpenseFlowChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseFlowChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseFlowChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
