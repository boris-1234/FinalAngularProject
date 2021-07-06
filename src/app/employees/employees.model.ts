import { Person } from "../app.model";

export class Employee extends Person {
    work_subject:string;
    work_hours_per_month:number;
    salary_per_hour:number;

    constructor(id:string,
        fullName:string,
        age:number,
        city:string,
        picture:string,
        work_subject:string,
        work_hours_per_month:number,
        salary_per_hour:number
        ){
            super(id,fullName,age,city,picture);
            this.work_hours_per_month = work_hours_per_month;
            this.work_subject= work_subject;
            this.salary_per_hour = salary_per_hour;
        }
}