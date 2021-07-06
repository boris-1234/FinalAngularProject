import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PupilsRoutingModule } from './pupils-routing.module';
import { EditPupilComponent } from './edit-pupil/edit-pupil.component';
import { PupilListComponent } from './pupil-list/pupil-list.component';
import { RouterModule,Routes } from '@angular/router';


const routes:Routes = [{path:'pupils',component:PupilListComponent}
,{path:'pupils/:id',component:EditPupilComponent}];
@NgModule({
  declarations: [
    EditPupilComponent,
    PupilListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PupilsRoutingModule,
    FormsModule
  ]
})
export class PupilsModule { }
