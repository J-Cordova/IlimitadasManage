import { Component, Output, Input, EventEmitter} from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';
import { Student } from '../shared/student.model';
import { StudentService } from '../shared/student.service';
import { StudentSelectedService } from '../shared/student-selected.service';

@Component({
  selector: 'student-sidenav',
  templateUrl: './student-sidenav.html',
  styleUrls: ['./student-sidenav.css'],
})

export class StudentSideNavComponent
{
  @Input() students: Array<Student>;
  @Output() selectedStudent: EventEmitter<Student> = new EventEmitter();

  constructor(private studentSelectService: StudentSelectedService){}

  onStudentSelected(student: Student)
  {
    this.selectedStudent.emit(student);
  }
}
