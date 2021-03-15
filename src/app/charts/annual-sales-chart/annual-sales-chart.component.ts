import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SalesService } from 'src/app/sales/sales.service';

@Component({
  selector: 'app-annual-sale-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.css']
})

export class AnnualSalesChartComponent implements OnInit {
  errorMessage: string;

  public salesChartData: ChartDataSets[] = [
    { data: [], label: 'Total Sales' },
  ];

  public salesChartLabels: Label[] = [];

  public salesChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public salesChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(12, 202, 74,1)',
    },
  ];
  public salesChartLegend = true;
  public salesChartType: ChartType = 'line';
  public salesChartPlugins = [];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.getSalesByMonth().subscribe({
      next: salesItems => {
        salesItems.forEach(li => {
          this.salesChartData[0].data.push(li.revenue);
          this.salesChartLabels.push(li.month);
        });
      },
      error: err => this.errorMessage = err
    });
  }

}
