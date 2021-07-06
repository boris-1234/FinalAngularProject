import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { pupils } from './dummy-data-pupils';
import { classes } from '../dummy-data-app';
import { Pupil } from './pupil.model';
import { Class} from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class PupilsService  {

    getInformationOfStudents(){
      return of(pupils);
    }
    getInformationOfClasses(){
      return of(classes);
    }
    getStudentDetailsById(id:string){
      return this.getInformationOfStudents().pipe(map(T=>T.find(pupils =>pupils.id===id)))
    }
}


