import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  students: Student[] = [
    {name: 'Luke', isJedi: true, temple:'Agua Fria Templo'},
    {name: 'Han', isJedi: false},
    {name: 'Leia', isJedi: false}
  ];

}