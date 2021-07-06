import { Observable } from "rxjs";
import { Teacher } from "./teachers/teacher.model";

export class Person {
    id:string;
    fullName:string;
    age:number;
    city:string;
    picture:string;
    

    constructor (id:string,fullName:string,age:number,city:string,picture:string){
        this.id = id ;
        this.fullName = fullName;
        this.age = age ;
        this.city = city;
        this.picture = picture;
    }
}

export class Class {
    id:string;
    class_name:string;
    primary_educator:Teacher;
    num_of_students:number;
    address_class_inside_school:string;

    constructor(id:string,class_name:string,primary_educator:Teacher,num_of_students:number,address_class_inside_school:string){
        this.id = id ;
        this.class_name = class_name;
        this.primary_educator = primary_educator;
        this.num_of_students = num_of_students ; 
        this.address_class_inside_school = address_class_inside_school ; 
    }
}

export interface Education_Team {
    work_hours_per_month:number;
    salary_per_hour:number;
}

export interface Class_Information{
    getInformationOfClasses():Observable<Class[]>
}