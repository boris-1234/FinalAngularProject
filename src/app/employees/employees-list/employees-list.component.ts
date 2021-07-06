import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employees.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeeService:EmployeesService) { }
  employeeArray:Observable<Employee[]>
  employeeRow={}
  ngOnInit(): void {
    this.employeeArray = this.employeeService.getInformationOfEmployees();
  }

  salaryAvgDetails(employee){
    let TotalMonthHours = employee.work_hours_per_month * employee.salary_per_hour;
    let Salary = TotalMonthHours <3000 ? "table-danger"  : "table-primary";
    this.employeeRow = { ...this.employeeRow,[employee.id]:{Salary:Salary,TotalMonthHours:TotalMonthHours}}
    return this.employeeRow[employee.id].Salary;
  }

}
