import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';
import { Teacher } from '../teacher.model';
import { Observable } from 'rxjs';
import { Pupil } from 'src/app/pupils/pupil.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  
  constructor(private teacherService:TeachersService) { }
  public teacherArray:Observable<Teacher[]>
  public pupilArray:Observable<Pupil[]>
  public pupilArrayCount:number;

  ngOnInit(): void {
    this.teacherArray = this.teacherService.getInformationOfTeachers();
    this.pupilArray = this.teacherService.getInformationOfPupils();
    this.pupilArray.subscribe(p => this.pupilArrayCount = p.length);
  }
}
