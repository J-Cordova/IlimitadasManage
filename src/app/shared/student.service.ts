import { Payment } from './payment.model';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { GuidGenerator } from './guid-generator';

@Injectable()
export class StudentService {

constructor(private http: Http) { }

  getStudents(): Observable<Array<Student>>
  {
     return Observable.of(this.students);

      // return this.http.get('http://localhost:3000').map(
      //   (res: Response) =>
      //   res.json()
      //   );
  }
  private students: Array<Student> = [
    {
      Id: GuidGenerator.Next(),
      FirstName: 'Jordan',
      LastName: 'Cordova',
      Picture: '',
      Avatar: '',
      Belt: 'Purple',
      Stripes: '2',
      BirthDay: new Date('09/04/1991'),
      Information: 'New Guy',
      Payments: [
        {
          PaymentDate: new Date('09/04/1995'),
          PaymentAmount: 60.00,
          Description: 'Paid in Full'
        },
        {
          PaymentDate: new Date('09/04/1995'),
          PaymentAmount: 60.00,
          Description: 'Paid in Full'
        },
        {
          PaymentDate: new Date('09/04/1995'),
          PaymentAmount: 60.00,
          Description: 'Paid in Full'
        },
        // {
        //   PaymentDate: new Date('09/04/1995'),
        //   PaymentAmount: 60.00,
        //   Description: 'Paid in Full'
        // },
        // {
        //   PaymentDate: new Date('09/04/1995'),
        //   PaymentAmount: 60.00,
        //   Description: 'Paid in Full'
        // },
        // {
        //   PaymentDate: new Date('09/04/1995'),
        //   PaymentAmount: 60.00,
        //   Description: 'Paid in Full'
        // },
      ]
    },
    {
      Id: GuidGenerator.Next(),
      FirstName: 'Forrest',
      LastName: 'Cordova',
      Picture: '',
      Avatar: '',
      Belt: 'White',
      Stripes: '1',
      BirthDay: new Date('09/04/1995'),
      Information: 'New Guy',
      Payments: []
    }
  ];
}




