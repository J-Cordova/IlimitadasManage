import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalType } from './animaltype.enum';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AnimalService {

constructor() { }


getAnimals(): Observable<Array<Animal>>
{
  return Observable.of(this.animals);
}

private animals: Array<Animal> = [
    {
      Name: 'Gaia',
      Picture: '../../assets/GaiaSleep.jpg',
      Description: 'A baby Doberman Pinscher. Loves Naps.',
      Type: AnimalType.Dog,
      Avatar: 'Dog'
    },
    {
      Name: 'Sage',
      Picture: '../../assets/SageSleep.jpg',
      Description: 'A 14 week old German Sheperd. Loves the pool.',
      Type: AnimalType.Dog,
      Avatar: 'Dog'
    },
    {
      Name: 'Kai',
      Picture: '../../assets/KaiCute.jpg',
      Description: 'A beautiful young kitten. Loves playing with bigger animals.',
      Type: AnimalType.Cat,
      Avatar: 'Cat'
    },
    {
      Name: 'Nyx',
      Picture: '../../assets/NyxLooking.jpg',
      Description: 'A beatiful black kitten.  Loves laying on anything warm.',
      Type: AnimalType.Cat,
      Avatar: 'Cat'
    }
  ];
}
