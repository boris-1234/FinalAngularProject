import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import { map } from 'rxjs/operators';
import { employees } from './dummy-data-employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  getInformationOfEmployees(){
    return of(employees);
  }
  getEmployeesDetailsById(id:string){
    return this.getInformationOfEmployees().pipe(map(T=>T.find(employees =>employees.id===id)))
  }

}


