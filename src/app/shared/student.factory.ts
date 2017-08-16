import { GuidGenerator } from './guid-generator';
import { Student } from './student.model';
import { Payment } from './payment.model';

export class StudentFactory {
    public static CreateStudent(data): Student
    {
        const student: Student = {
            Id: data.Id? data.Id : GuidGenerator.Next(),
            FirstName: data.FirstName ? data.FirstName : '',
            LastName: data.LastName ? data.LastName : '',
            Picture: data.Picture ? data.Picture : '',
            Avatar: data.Avatar ? data.Avatar : '',
            Belt: data.Belt ? data.Belt : '',
            Stripes: data.Stripes ? data.Stripes : '',
            BirthDay: data.BirthDay ? data.BirthDay : new Date(),
            Information: data.Information ? data.Information : '',
            Payments: new Array<Payment>()
        };

        return student;
    }
}
