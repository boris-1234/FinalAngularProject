
import { Person,Class, Education_Team} from "../app.model";

export class Teacher extends Person implements Education_Team {
    proffecy:string;
    name_of_classes:Class[];
    years_of_seniorty:number;
    work_hours_per_month:number;
    salary_per_hour:number;

    constructor(id:string,
        fullName:string,
        age:number,
        city:string,
        picture:string,
        proffecy:string,
        years_of_seniorty:number,
        work_hours_per_month:number,
        salary_per_hour:number,
        name_of_classes:Class[] = []
        ){
        super(id,fullName,age,city,picture);
        this.proffecy = proffecy;
        this.name_of_classes = name_of_classes;
        this.years_of_seniorty = years_of_seniorty;
        this.work_hours_per_month = work_hours_per_month;
        this.salary_per_hour = salary_per_hour; 
    }
}