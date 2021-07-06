import { Component, OnInit } from '@angular/core';
import { Pupil,Subject_The_Pupil_Studies } from '../pupil.model';
import { Class } from 'src/app/app.model';
import { PupilsService } from '../pupils.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-pupil',
  templateUrl: './edit-pupil.component.html',
  styleUrls: ['./edit-pupil.component.css']
})
export class EditPupilComponent implements OnInit {
  Pupil:Observable<Pupil>;
  PupilObject:Pupil;
  ClassOfPupils:Observable<Class[]>;
  PupilGrade:Subject_The_Pupil_Studies[];
  ClassOfStudents:Class;
  WhichClass:{};
  constructor(private ps:PupilsService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.Pupil = this.ar.paramMap.pipe
    (
      switchMap(p => this.ps.getStudentDetailsById(p.get("id")))
    )
    this.Pupil.subscribe(p=>this.PupilObject=p);
    this.ClassOfStudents=this.PupilObject.learning_Class;
    this.PupilGrade=this.PupilObject.subject_the_pupil_studies;
    this.ClassOfPupils = this.ps.getInformationOfClasses();
    this.WhichClass= {[this.ClassOfStudents.id]:true};
  }
  addGrade() {
    this.PupilGrade.push({ subject: "", grade: 0 })
  }
  removeGrade(event) {
    this.PupilGrade = this.PupilGrade.filter(g => g.subject != event.target.value)
  }
  chooseClass(event){
      this.ClassOfPupils.subscribe(c => this.ClassOfStudents = c.find(kita=>kita.id==event.target.value))
  }
}
