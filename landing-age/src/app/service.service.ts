import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './courses';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = 'http://localhost:8081/api/courses';
  constructor(private http: HttpClient) { }



  
  getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.baseUrl);
  }

  
  getCourseById(id: number): Observable<Courses> {
    return this.http.get<Courses>(`${this.baseUrl}/${id}`);
  }

  
  addCourse(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.baseUrl, course);
  }

  
  updateCourse(id: number, course: Courses): Observable<Courses> {
    return this.http.put<Courses>(`${this.baseUrl}/${id}`, course);
  }

 
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}