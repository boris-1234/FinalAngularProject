import { Person,Class } from "src/app/app.model";

export class Pupil extends Person {
    learning_Class:Class;
    subject_the_pupil_studies:Subject_The_Pupil_Studies[];

    constructor(id:string,
        fullName:string,
        age:number,
        city:string,
        picture:string,
        learning_Class:Class,
        subject_the_pupil_studies:Subject_The_Pupil_Studies[]=[]
        ){
            super(id,fullName,age,city,picture);
            this.learning_Class = learning_Class;
            this.subject_the_pupil_studies = subject_the_pupil_studies;
        }
}

export interface Subject_The_Pupil_Studies{
    subject:string;
    grade:number;
}






