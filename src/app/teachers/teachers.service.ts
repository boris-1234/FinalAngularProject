import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Class_Information } from '../app.model';
import { classes } from '../dummy-data-app';
import { teachers } from './dummy-data-teachers';
import { map } from 'rxjs/operators';
import { pupils } from '../pupils/dummy-data-pupils';


@Injectable({
  providedIn: 'root'
})
export class TeachersService  {

    getInformationOfClasses(){
      return of(classes);
    }
    getInformationOfTeachers(){
      return of(teachers);
    }
    getTeacherDetailsById(id:string){
      return this.getInformationOfTeachers().pipe(map(T=>T.find(teacher =>teacher.id===id)))
    }
    getInformationOfPupils(){
      return of(pupils);
    }
}
