import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MonthlySales } from './monthly-sales';

@Injectable({
  providedIn: 'root'
})

export class SalesService {
  private salesUrl = 'api/sales/sales.json';

  constructor(private http: HttpClient) { }

  getSalesByMonth(): Observable<MonthlySales[]>{
    return this.http.get<MonthlySales[]>(this.salesUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`; 
    }

    return throwError(errorMessage);
  }
}

