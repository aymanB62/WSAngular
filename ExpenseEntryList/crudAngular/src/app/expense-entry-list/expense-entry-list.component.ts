import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../../../expense-entry';
import { ExpenseEntryService } from '../expense-entry/ExpenseEntryService';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-expense-entry-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './expense-entry-list.component.html',
  styleUrl: './expense-entry-list.component.css'
})
export class ExpenseEntryListComponent implements OnInit{
  title: string;
  expenseEntries: ExpenseEntry[] = [];

  constructor(private expenseEntryService: ExpenseEntryService) { }

  ngOnInit() {
     this.title = "Expense Entry List";
     this.getExpenseEntries();
  }

  getExpenseEntries(): void{
   this.expenseEntryService.getExpenseEntries().subscribe((data: ExpenseEntry[])=> {
      this.expenseEntries = data;
   });
  }
}
