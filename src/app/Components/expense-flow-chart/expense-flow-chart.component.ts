import { Component } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

import { series } from "./data"; // Ensure you have the 'data' file containing 'series'

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-expense-flow-chart',
  imports: [ChartComponent],
  templateUrl: './expense-flow-chart.component.html',
  styleUrls: ['./expense-flow-chart.component.css'] // Ensure this is 'styleUrls' not 'styleUrl'
})
export class ExpenseFlowChartComponent {
  chartOptions: ChartOptions; // Declare chartOptions property

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Total Expenses",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 230,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Monthly Expences",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }
}
