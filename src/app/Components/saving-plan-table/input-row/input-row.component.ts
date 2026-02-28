import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['./input-row.component.css'],
  imports: [ChartComponent,CommonModule]
})
export class InputRowComponent  implements OnInit {
  public chartOptions: ChartOptions;
  isBooleanTrue: boolean = true; // You can set this value dynamically
  imagePath: string = 'assets/images/SavePlan.png';
  constructor() {
    this.chartOptions = {
      series: [13],
      chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '12px',
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: '15px',
              color: undefined,
              formatter: function (val) {
                return val + '%';
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ['Saved Percentage'],
    };
  }

  ngOnInit(): void {
    
  }

}
