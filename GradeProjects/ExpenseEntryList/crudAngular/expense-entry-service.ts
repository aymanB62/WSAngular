import { Injectable } from '@angular/core';
import { ExpenseEntry } from './expense-entry';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ExpenseEntryService {
   private expenseRestUrl = 'http://localhost:8081/api&#39';
   private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
   httpOptions = { headers: this.headers };
   constructor(private httpClient : HttpClient ) { }

   getExpenseEntries() : Observable<ExpenseEntry[]> {
      return this.httpClient.get<ExpenseEntry[]>(this.expenseRestUrl+'/expenses')
      .pipe(retry(3),catchError(this.httpErrorHandler));
   }
   getExpenseEntry(id: number) : Observable<ExpenseEntry> {
   //   return this.httpClient.get<ExpenseEntry>(this.expenseRestUrl + "/" + id, this.httpOptions)
      return this.httpClient.get<ExpenseEntry>(this.expenseRestUrl + "/expenses/" + id)
      .pipe(retry(3), catchError(this.httpErrorHandler));
   }
   addExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    //     return this.httpClient.post<ExpenseEntry>(this.expenseRestUrl, expenseEntry, this.httpOptions)
     return this.httpClient.post<ExpenseEntry>(this.expenseRestUrl+'/expenses', expenseEntry)
      .pipe(retry(3),catchError(this.httpErrorHandler));
   }
   updateExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
   //  return this.httpClient.put<ExpenseEntry>(this.expenseRestUrl + "/" + expenseEntry.id, expenseEntry, this.httpOptions)
      return this.httpClient.put<ExpenseEntry>(this.expenseRestUrl + "/expenses/" + expenseEntry.id,
      expenseEntry)
      .pipe(retry(3),catchError(this.httpErrorHandler));
   }
   deleteExpenseEntry(expenseEntry: ExpenseEntry | number) : Observable<ExpenseEntry> {
      const id = typeof expenseEntry == 'number' ? expenseEntry : expenseEntry.id
      const url = `${this.expenseRestUrl}/expenses/${id}`;
   //   return this.httpClient.delete<ExpenseEntry>(url, this.httpOptions)
      return this.httpClient.delete<ExpenseEntry>(url)
      .pipe(retry(3),catchError(this.httpErrorHandler));
   }

   private httpErrorHandler (error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         console.error("A client side error occurs. The error message is " + error.message);
      } else {
         console.error("An error happened in server. The HTTP status code is "
         + error.status + " and the error returned is " + error.message);
      }
      return throwError("Error occurred. Please try again");
   }
}
