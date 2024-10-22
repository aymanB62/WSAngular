package com.example.API_ANGULAR_EXPENSE.ExpenseRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.API_ANGULAR_EXPENSE.ExpenseModel.Expense;

public interface Repository extends JpaRepository<Expense,String>  {

	Optional<Expense> findById(String _id);

}
