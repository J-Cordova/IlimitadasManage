import { Injectable, EventEmitter } from '@angular/core';
import { Student } from './student.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentSelectedService {

constructor() { }

studentSelectedEvent: EventEmitter<Student> = new EventEmitter();

}
