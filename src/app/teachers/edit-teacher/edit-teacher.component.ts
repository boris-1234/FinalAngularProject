import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Teacher } from '../teacher.model';
import { TeachersService } from '../teachers.service';
import { Class } from 'src/app/app.model';
@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  TeacherId: Observable<Teacher>;
  TeacherObject:Teacher;
  selectedId = 0;
  classes: Observable<Class[]>;
  

  constructor(private teacherService:TeachersService, private activityRoutes:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.TeacherId = this.activityRoutes.paramMap.pipe
    (
      switchMap(p => this.teacherService.getTeacherDetailsById(p.get("id")))
    )
    this.TeacherId.subscribe(T =>this.TeacherObject=T)
    this.classes = this.teacherService.getInformationOfClasses();
  }
}
