import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CardsComponent } from '../cards/cards.component';
import { NofificationrowComponent } from '../nofificationrow/nofificationrow.component';
import { LatesttransactionComponent } from '../latesttransaction/latesttransaction.component';
import { IncomeExpenseChartComponent } from '../income-expense-chart/income-expense-chart.component';
import { ExpenseFlowChartComponent } from '../expense-flow-chart/expense-flow-chart.component';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [ CardsComponent,NofificationrowComponent,LatesttransactionComponent,IncomeExpenseChartComponent,ExpenseFlowChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  {

}
