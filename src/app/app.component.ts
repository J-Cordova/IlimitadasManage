import { Component } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { Observable, Subscription } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { StudentFactory } from './shared/student.factory';
import { Student } from './shared/student.model';
import { StudentService } from './shared/student.service';
import { StudentUpdateService } from './shared/student-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
{

  students: Array<Student>;
  selectedStudent: Student;

  constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer,
              private dialog: MdDialog, private studentService: StudentService, private updateService: StudentUpdateService)
  {
    this.registerIcons();

    const sub: Subscription =  studentService.getStudents()
    .subscribe((students) =>
    {
      this.students = students;
      if (students.length) this.selectedStudent = students[0];
    });

    updateService.studentChangedEvent.subscribe((student: Student) =>
    {
      this.students.forEach((x, i) =>
      {
        if (x.Id === student.Id)
        {
          this.students[i] = student;
          return;
        }
      });
    });
  }

  onStudentSelected($event)
  {
    this.selectedStudent = $event;
  }

  openStudentDialog()
  {
    const self = this;
    this.dialog.open(DialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(student => {
         self.students.push(student);
         self.selectedStudent = student;
      });
  }

  registerIcons()
  {
    // const catSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/Cat.svg');
    // const dogSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('./assets/Dog.svg');
    // this.iconRegistry.addSvgIcon('Cat', catSafeUrl);
    // this.iconRegistry.addSvgIcon('Dog', dogSafeUrl);
  }
}
