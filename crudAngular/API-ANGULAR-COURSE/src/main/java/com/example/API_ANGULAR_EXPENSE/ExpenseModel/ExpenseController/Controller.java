package com.example.API_ANGULAR_EXPENSE.ExpenseModel.ExpenseController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.API_ANGULAR_EXPENSE.ExpenseModel.Expense;
import com.example.API_ANGULAR_EXPENSE.ExpenseServices.service;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	
	private final service Service;
	
	@Autowired
    public Controller(service Service) {
        this.Service = Service;
    }
	
	@GetMapping
	public List<Expense> getAllContacts(){
		return Service.getAllExpenses();
	}
	
	@GetMapping("/{_id}")
	public Expense getContactById(String id) {
		return Service.getExpenseById(id);
	}
	
	@PostMapping
	public void addContact(@RequestBody Expense expense) {
		Service.addExpense(expense);
	}
	@PutMapping("/{_id}")
    public void updateProduct(@PathVariable String _id, @RequestBody Expense expense) {
		Expense existingProduct = Service.getExpenseById(_id);
        if (existingProduct != null) {
        	expense.set_id(_id); // Ensure the correct ID is set
        	Service.addExpense(expense);
        }
    }
	
	@DeleteMapping("/{_id}")
	public void deleteContactById(String _id) {
		Service.deleteExpenseById(_id);
	}
}
