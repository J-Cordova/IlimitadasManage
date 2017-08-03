import { Component, Input, SimpleChanges } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentSelectedService } from '../shared/student-selected.service';
import { MdDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.css'],
})

export class StudentDetailComponent {


  @Input() selectedStudent: Student;
  origData: Student;

  constructor(private animalSelectService: StudentSelectedService)
  {
    // animalSelectService.animalSelectedEvent.subscribe(animal => this.selectedAnimal = animal);
  }
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedStudent']) {
      this.origData = Object.assign({}, this.selectedStudent); // JSON.parse(JSON.stringify(this.selectedStudent));
    }
   }

  submit(data)
  {
     this.selectedStudent = this.origData;
  }

  reset(data)
  {
    this.origData = Object.assign({}, this.selectedStudent); // JSON.parse(JSON.stringify(this.selectedStudent));
  }
}
