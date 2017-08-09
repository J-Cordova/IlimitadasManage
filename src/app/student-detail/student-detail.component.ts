import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentSelectedService } from '../shared/student-selected.service';
import { MdDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { StudentUpdateService } from '../shared/student-update.service';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.css'],
})

export class StudentDetailComponent implements OnChanges {

  @Input() selectedStudent: Student;
  formData: Student;

  constructor(private animalSelectService: StudentSelectedService, private studentUpdateService: StudentUpdateService)
  {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedStudent']) {
      this.formData = Object.assign({}, this.selectedStudent);
    }
   }

  submit()
  {
     this.studentUpdateService.studentChangedEvent.emit(this.formData);
  }

  reset(data)
  {
    this.formData = Object.assign({}, this.selectedStudent);
  }
}
