package com.example.API_ANGULAR_EXPENSE.ExpenseServices;

import java.util.List;

import com.example.API_ANGULAR_EXPENSE.ExpenseModel.Expense;

public interface service {

	List<Expense> getAllExpenses();

	Expense getExpenseById(Long id);

	void addExpense(Expense expense);

	void updateExpense(Expense expense);

	void deleteExpenseById(Long id);

}
