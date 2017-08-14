import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import { Payment } from '../../shared/payment.model';

@Component({
  templateUrl: 'payment-dialog.component.html'
})
export class PaymentDialogComponent {

  constructor(public dialogRef: MdDialogRef<PaymentDialogComponent>) {}

  formData: Payment = new Payment();

  reset()
  {
    this.formData = new Payment();
  }

}
