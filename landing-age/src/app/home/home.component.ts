import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    onSubmit(event: Event): void {
      event.preventDefault();
      alert('Thank you for your message!');}
    
  courses = [
    { 
      title: 'Spring Boot / Angular', 
      price: '350 DT/Month', 
      img: 'https://lfcdn-1c183.kxcdn.com/img/post_img/1070111110_mat11.jpg' 
    },
    { 
      title: 'Node JS / React', 
      price: '360 DT/Month', 
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT51KoSmYvEiQLsjCRyeZ8DOSgWkPNuXl1jvXHY_Ph6-ZjJg1XP'
    },
    { 
      title: 'Flutter / Firebase', 
      price: '350 DT/Month', 
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4zCDKndzc59ZIkq_RcHGdGn55OUStZMIRquoHlyRKTuga7EUB'
    },
    { 
      title: 'Business Intelligence', 
      price: '350 DT/Month', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWKPJMuUjNpdcSzCP1UzjOVMOVG-hpIF5pxDlGvfDFi4mBlnz'
    },
    { 
      title: 'Artificial Intelligence', 
      price: '350 DT/Month', 
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCWYq7WLe7wbYe6evnhLc2OOqIvT8x1X9JKCry1KKB3ypLTnta'
    },
    { 
      title: 'DevOps', 
      price: '350 DT/Month', 
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvWYr_-JIZ85ys54l_F_LlO-HGURIz8cfc5cNQ1iG2vR8wibTj'
    }
  ];
}

