import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Courses } from '../courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {
  courses: any[] = [];
  showModal: boolean = false;
  isEditing: boolean = false;
  selectedCourse: any = { title: '', price: '' };

  constructor(private coursesService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  
  loadCourses(): void {
    this.coursesService.getAllCourses().subscribe(data => {
      this.courses = data;
    });
  }

  
  openAddModal(): void {
    this.isEditing = false;
    this.selectedCourse = { title: '', price: '' }; 
    this.showModal = true;
  }

  
  openEditModal(course: any): void {
    this.isEditing = true;
    this.selectedCourse = { ...course }; 
    this.showModal = true;
  }

  
  closeModal(): void {
    this.showModal = false;
  }

  
 submitForm(): void {
  if (this.isEditing) {
    
    this.coursesService.updateCourse(this.selectedCourse.id, this.selectedCourse).subscribe(() => {
      this.loadCourses();
      this.closeModal(); 
    });
  } else {
 
    this.coursesService.addCourse(this.selectedCourse).subscribe(() => {
      this.loadCourses(); 
      this.closeModal(); 
    });
  }
}


 
  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.coursesService.deleteCourse(id).subscribe(() => {
        this.loadCourses(); 
      });
    }
  }
}