import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from './student-http.service'
import { Student } from './student.model'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : Student[];

  constructor(private studentHttpService: StudentHttpService) { }

  ngOnInit() {
    this.studentHttpService.getStudents()
    .then(students => this.students = students);
  }

}
