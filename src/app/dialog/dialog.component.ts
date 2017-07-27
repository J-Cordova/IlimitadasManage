import { Student } from '../shared/student.model';
import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  student: Student = new Student();
  Type: String = '0';
  avatars: Array<String> = ['Dog', 'Cat'];
  //selectedAvatar = this.avatars[parseInt(this.Type, 10)];

  handleStudentTypeChange($event)
  {
    const val: Number = parseInt($event.value, 10);
    //this.animal.Type = (val === 0 ? AnimalType.Dog : AnimalType.Cat);
    //this.selectedAvatar = (this.animal.Type === AnimalType.Dog ? 'Dog' : 'Cat');
  }
}
