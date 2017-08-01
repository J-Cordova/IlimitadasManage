import { Student } from './student.model';

export class StudentFactory {
    public static CreateStudent(data): Student
    {
        //const student: Student =  new Student();
        //student.Type = parseInt(data.Type, 10) || AnimalType.Dog;
        //student.Avatar = animal.Type === AnimalType.Dog ? 'Dog' : 'Cat';
        //student.Description = data.Description || '';
        ////student.Name = data.Name || 'Doggy';
        // student.Picture = data.Picture || (student.Type === AnimalType.Dog ?
        //                                  '../../assets/Dog.svg' :
        //                                  '../../assets/Cat.svg');

        return new Student();
    }
}
