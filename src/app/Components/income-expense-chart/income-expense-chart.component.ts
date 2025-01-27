import { Component } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: "app-income-expense-chart",
  templateUrl: "./income-expense-chart.component.html",
  styleUrls: ["./income-expense-chart.component.css"],
  imports: [ChartComponent]
})
export class IncomeExpenseChartComponent {
  public chartOptions: ChartOptions = {
    series: [
      50, 20, 10, 10, 15, 15, 30, 20, 10,20
    ],
      chart: {
        width: 500,
        type: "pie"
      },
      labels: [
        "Food", "Travel", "Entertainment", "Health", "Insurance", "Education", "Savings", "Miscellaneous", "Rent", "Utilities",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  };

