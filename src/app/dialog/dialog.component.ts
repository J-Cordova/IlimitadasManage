import { StudentFactory } from '../shared/student.factory';
import { Student } from '../shared/student.model';
import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {

  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  formData: Student = StudentFactory.CreateStudent({});

  reset()
  {
    this.formData = StudentFactory.CreateStudent({});
  }
}
