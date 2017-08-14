import { Injectable, EventEmitter } from '@angular/core';
import { PaymentUpdateModel } from './payment-update.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PaymentUpdateService {

constructor() { }

paymentChangedEvent: EventEmitter<PaymentUpdateModel> = new EventEmitter();

}
