import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersModule } from './teachers/teachers.module';
import { EmployeesModule } from './employees/employees.module';
import { PupilsModule } from './pupils/pupils.module';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path: '', component: TeacherListComponent, pathMatch: "full"
}];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    TeachersModule,
    EmployeesModule,
    PupilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
