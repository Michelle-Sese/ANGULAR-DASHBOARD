import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OrdersTableDataSource } from './orders-table-datasource';
import { OrderService } from '../orders.service';
import { Order } from '../order';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Order>;
  dataSource: OrdersTableDataSource;
  dataLength: number;
  errorMessage: string;

  displayedColumns = [
    "id",
    "date",
    "name",
    "status",
    "orderTotal",
    "paymentMode",
  ];

  constructor(private orderService: OrderService){}

  ngOnInit() {
    this.dataSource = new OrdersTableDataSource(this.orderService);
    this.orderService.getOrderCount().subscribe({
      next: orderCount => {
        this.dataLength = orderCount;
      },
      error: err => this.errorMessage = err
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
