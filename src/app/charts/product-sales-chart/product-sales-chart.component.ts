import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.css']
})
export class ProductSalesChartComponent implements OnInit {

  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Bags', 'Wallets', 'Keyholders', 'Other', 'Cases'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56], label: 'Online' },
    { data: [28, 48, 40, 19, 96], label: 'In Store' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
