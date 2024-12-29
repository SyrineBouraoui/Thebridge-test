package com.example.demo.entity;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity

@AllArgsConstructor
@NoArgsConstructor
 
@ToString
@Builder


public class Admin {

	public Integer getId() {
		return Id;
	}


	public void setId(Integer id) {
		Id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public List<Courses> getCourses() {
		return courses;
	}


	public void setCourses(List<Courses> courses) {
		this.courses = courses;
	}


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private Integer Id ;
	private String name;
	private String role;
	

    @OneToMany(mappedBy = "admin") 
    private List<Courses> courses;
		
}
