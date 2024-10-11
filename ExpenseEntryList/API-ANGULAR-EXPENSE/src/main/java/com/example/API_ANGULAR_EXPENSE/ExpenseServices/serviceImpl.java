package com.example.API_ANGULAR_EXPENSE.ExpenseServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.API_ANGULAR_EXPENSE.ExpenseModel.Expense;
import com.example.API_ANGULAR_EXPENSE.ExpenseRepository.Repository;


@Service
public class serviceImpl implements service{
	
	private final Repository repository;
	
	@Autowired
	public serviceImpl(Repository repository) {
		this.repository=repository;
	}
	
	@Override
	public List<Expense> getAllExpenses(){
		return repository.findAll();
	}
	
	@Override
	public Expense getExpenseById(Long id) {
		Optional<Expense> optionalContact = repository.findById(id);
        return optionalContact.orElse(null);
	}
	@Override
	public void addExpense(Expense expense) {
		repository.save(expense);
	}
	@Override
	public void updateExpense(Expense expense) {
		repository.save(expense);
	}
	@Override
	public void deleteExpenseById(Long id) {
		repository.deleteById(id);
	}
}



