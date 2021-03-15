import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.css']
})
export class SalesTrafficChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Search', 'Direct', 'Social', 'Email', 'Unknown'];
  public pieChartData: SingleDataSet = [734, 621, 543, 193, 275];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
