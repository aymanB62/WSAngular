package com.example.API_ANGULAR_EXPENSE.ExpenseModel;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Expense {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
     private String title;
     private String content;
	
     Expense(){
    	 
     }
     
     Expense(Long id,String title,
    		 String content){
    	 
    	 this.id=id;
    	 this.title=title;
    	 this.content=content;
     }
     
     public Long getId() {
		return id;
	}
     public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
     
     
}
