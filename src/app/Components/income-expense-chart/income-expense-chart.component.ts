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

   // Define categories and values in a collection (array of objects)
   categories = [
    { label: "Food", value: 50 },
    { label: "Travel", value: 20 },
    { label: "Entertainment", value: 10 },
    { label: "Health", value: 10 },
    { label: "Insurance", value: 15 },
    { label: "Education", value: 15 }
  ];
  public chartOptions: ChartOptions = {
    series:this.categories.map(category => category.value), 
      chart: {
        width: 500,
        type: "pie"
      },
      labels: this.categories.map(category => category.label), 
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

