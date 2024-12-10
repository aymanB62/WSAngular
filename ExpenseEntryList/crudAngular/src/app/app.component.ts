import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExpenseEntryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudAngular';
}
