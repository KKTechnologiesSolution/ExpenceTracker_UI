import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { CardsComponent } from '../cards/cards.component';
import { NofificationrowComponent } from '../nofificationrow/nofificationrow.component';
import { LatesttransactionComponent } from '../latesttransaction/latesttransaction.component';
import { IncomeExpenseChartComponent } from '../income-expense-chart/income-expense-chart.component';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule,CardsComponent,NofificationrowComponent,LatesttransactionComponent,IncomeExpenseChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  {

  faDashboard = faDashboard;
  faTable = faTable;
  faPiggyBank=faPiggyBank;
  faStar=faStar;
  faSignOut=faSignOut;
}
