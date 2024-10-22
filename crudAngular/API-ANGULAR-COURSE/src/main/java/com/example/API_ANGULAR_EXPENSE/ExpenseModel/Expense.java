package com.example.API_ANGULAR_EXPENSE.ExpenseModel;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import com.example.API_ANGULAR_EXPENSE.ExpenseModel.Lesson;

@Entity
public class Expense {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private String _id;
     private String name;
     private Lesson[] lesson;
     private String category;

	
     Expense(){
    	 
     }
     
     Expense(String _id,String name,String category,
    		 Lesson[] lesson){
    	 
    	 this._id=_id;
    	 this.name=name;
    	 this.category=category;
    	 this.lesson=lesson;
     }
     
	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Lesson[] getLesson() {
		return lesson;
	}

	public void setLesson(Lesson[] lesson) {
		this.lesson = lesson;
	}
}
