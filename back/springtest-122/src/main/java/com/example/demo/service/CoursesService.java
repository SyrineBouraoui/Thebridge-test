package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Courses;
import com.example.demo.repository.CoursesRepository;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepository coursesRepository;

    
    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }

    
    public Courses getCourseById(Integer id) {
        return coursesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

  
    public Courses addCourse(Courses course) {
        return coursesRepository.save(course);
    }

    
    public Courses updateCourse(Integer id, Courses courseDetails) {
        Courses course = getCourseById(id);
        course.setTitle(courseDetails.getTitle());
        course.setPrice(courseDetails.getPrice());
        course.setAdmin(courseDetails.getAdmin());

        return coursesRepository.save(course);
    }

    
    public void deleteCourse(Integer id) {
        coursesRepository.deleteById(id);
    }
}

