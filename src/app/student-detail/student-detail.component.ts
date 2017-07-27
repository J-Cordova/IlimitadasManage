import { Component, Input } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentSelectedService } from '../shared/student-selected.service';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.css'],
})

export class StudentDetailComponent
{
  @Input() selectedStudent: Student;

  //selectedAnimal: Animal;
  constructor(private animalSelectService: StudentSelectedService)
  {
     //animalSelectService.animalSelectedEvent.subscribe(animal => this.selectedAnimal = animal);
  }

}
