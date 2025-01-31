package com.example.demo.controller;


import com.example.demo.entity.Courses;
import com.example.demo.service.CoursesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    @Autowired
    private CoursesService coursesService;

    // Get all courses
    @GetMapping
    public List<Courses> getAllCourses() {
        return coursesService.getAllCourses();
    }

    // Get a course by ID
    @GetMapping("/{id}")
    public ResponseEntity<Courses> getCourseById(@PathVariable Integer id) {
        Courses course = coursesService.getCourseById(id);
        return ResponseEntity.ok(course);
    }

    // Add a new course    
    @PostMapping
    public ResponseEntity<Courses> addCourse(@RequestBody Courses course) {
        Courses createdCourse = coursesService.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);
    }

    // Update an existing course
    @PutMapping("/{id}")
    public ResponseEntity<Courses> updateCourse(
            @PathVariable Integer id,
            @RequestBody Courses courseDetails) {
        Courses updatedCourse = coursesService.updateCourse(id, courseDetails);
        return ResponseEntity.ok(updatedCourse);
    }

    // Delete a course by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Integer id) {
        coursesService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
}
