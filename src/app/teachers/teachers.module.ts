import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{path: 'teachers', component: TeacherListComponent
},{path: 'teachers/:id', component: EditTeacherComponent
}];

@NgModule({
  declarations: [
    TeacherListComponent,
    EditTeacherComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TeachersRoutingModule,
    FormsModule
  ]
})
export class TeachersModule { }
