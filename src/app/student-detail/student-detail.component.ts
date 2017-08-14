import { PaymentUpdateModel } from '../shared/payment-update.model';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentSelectedService } from '../shared/student-selected.service';
import { MdDialogRef, MdDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { StudentUpdateService } from '../shared/student-update.service';
import { PaymentUpdateService } from '../shared/payment-update.service';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.html',
  styleUrls: ['./student-detail.css'],
})

export class StudentDetailComponent implements OnChanges {

  @Input() selectedStudent: Student;
  formData: Student;

  constructor(private animalSelectService: StudentSelectedService,
              private studentUpdateService: StudentUpdateService,
              private paymentUpdateService: PaymentUpdateService,
              private dialog: MdDialog)
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

  openPaymentDialog()
  {
    const self = this;
    this.dialog.open(PaymentDialogComponent).afterClosed()
      .filter(result => !!result)
      .subscribe(payment => {
        self.selectedStudent.Payments.push(payment);
        const model = new PaymentUpdateModel();
        model.StudentId = self.selectedStudent.Id;
        model.Payments = self.selectedStudent.Payments;
        this.paymentUpdateService.paymentChangedEvent.emit(model);
      });
  }
}
