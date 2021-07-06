import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PupilsService } from '../pupils.service';
import {Pupil} from '../pupil.model';

@Component({
  selector: 'app-pupil-list',
  templateUrl: './pupil-list.component.html',
  styleUrls: ['./pupil-list.component.css']
})
export class PupilListComponent implements OnInit {

  constructor(private pupilService:PupilsService) { }
  pupilArray:Observable<Pupil[]>
  gradesRow = {}
  ngOnInit(): void {
    this.pupilArray = this.pupilService.getInformationOfStudents();
  }

  gradesAvgColour(pupil) {
    let sum = 0;
    pupil.subject_the_pupil_studies.forEach(g => sum += Number(g.grade));
    let avg = Math.round(sum / pupil.subject_the_pupil_studies.length);
    let colour = avg < 65 ? "table-danger" : "table-primary";
    this.gradesRow = { ...this.gradesRow, [pupil.id]: { colour: colour, avg: avg } }
    return this.gradesRow[pupil.id].colour;
  }
}
