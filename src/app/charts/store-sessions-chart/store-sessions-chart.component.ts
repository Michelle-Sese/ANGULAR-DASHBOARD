import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html',
  styleUrls: ['./store-sessions-chart.component.css']
})
export class StoreSessionsChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = ['Search', 'Direct', 'Social', 'Email', 'Unknown'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {
      borderColor: 'rgb(199, 62, 29,0.5)',
      backgroundColor: 'rgb(246, 174, 45,1)',
    },
  ];

  public barChartData: ChartDataSets[] = [
    { data: [365, 259, 180, 281, 156], label: 'Number of Sessions' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
