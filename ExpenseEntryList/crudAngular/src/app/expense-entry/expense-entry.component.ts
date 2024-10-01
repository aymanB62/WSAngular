import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../../../expense-entry';
import { ExpenseEntryService } from './ExpenseEntryService';
import { Observable } from 'rxjs';
@Component({
   selector: 'app-expense-entry',
   templateUrl: './expense-entry.component.html',
   styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  title: string;
  expenseEntry: ExpenseEntry;
  constructor(
    private restService : ExpenseEntryService ) { }
    ngOnInit() {
      this.title = "Expense Entry List";
      this.getExpenseItem();
   }
   getExpenseItem() {
      this.restService.getExpenseEntry(3)
      .subscribe( (data: ExpenseEntry) => this.expenseEntry = data );
   }
}