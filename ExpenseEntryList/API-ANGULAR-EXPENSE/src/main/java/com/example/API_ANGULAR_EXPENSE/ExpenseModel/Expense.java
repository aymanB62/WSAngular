package com.example.API_ANGULAR_EXPENSE.ExpenseModel;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Expense {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
     private String item;
     private int amount;
     private String category;
     private String location;
     private LocalDate spendOn;
     private LocalDate createdOn;
	
     Expense(){
    	 
     }
     
     Expense(String item,int amount,String category,
    		 String location,LocalDate spendOn, LocalDate createdOn){
    	 
    	 this.item=item;
    	 this.amount=amount;
    	 this.category=category;
    	 this.location=location;
    	 this.spendOn=spendOn;
    	 this.createdOn=createdOn;
     }
     
     public Long getId() {
		return id;
	}
     public void setId(Long id) {
		this.id = id;
	}
     
     public String getItem() {
		return item;
	}
     public void setItem(String item) {
		this.item = item;
	}
     public int getAmount() {
		return amount;
	}
     public void setAmount(int amount) {
		this.amount = amount;
	}
     public String getCategory() {
		return category;
	}
     public void setCategory(String category) {
		this.category = category;
	}
     public String getLocation() {
		return location;
	}
     public void setLocation(String location) {
		this.location = location;
	}
     public LocalDate getCreatedOn() {
		return createdOn;
	}
     public void setCreatedOn(LocalDate createdOn) {
		this.createdOn = createdOn;
	}
     public LocalDate getSpendOn() {
		return spendOn;
	}
     public void setSpendOn(LocalDate spendOn) {
		this.spendOn = spendOn;
	}
}
