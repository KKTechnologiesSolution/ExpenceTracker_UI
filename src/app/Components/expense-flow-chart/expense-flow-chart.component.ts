import { Component, OnInit } from '@angular/core';
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
  chartOptions: any; // Declare chartOptions property as 'any'
  
  // Declare series as a property of the class
  series = {
    monthDataSeries1: {
      prices: [
        10000,
        2000.0,
        900.9,
        815.5,
        5440.7,
        6723.7,
        7423.5,
        8514.3,
        9481.85,
        34487.7,
        8506.9,
        10000
      ],
      dates: [
        "Jan 2017",
        "Feb 2017",
        "Mar 2017",
        "Apr 2017",
        "May 2017",
        "Jun 2017",
        "Jul 2017",
        "Aug 2017",
        "Sep 2017",
        "Oct 2017",
        "Nov 2017",
        "Dec 2017"
      ]
    }
  };

  constructor() {
    // Initialize chartOptions inside the constructor, using this.series
    this.chartOptions = {
      series: [
        {
          name: "Total Expenses",
          data: this.series.monthDataSeries1.prices
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
        text: "Monthly Expenses",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: this.series.monthDataSeries1.dates,
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
