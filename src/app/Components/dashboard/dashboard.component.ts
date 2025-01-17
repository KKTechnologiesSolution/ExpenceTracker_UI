import { Component , ViewChild} from '@angular/core';
import { Route } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChartComponent } from "ng-apexcharts";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSlideToggleModule,MatCardModule,MatTableModule,MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
}
