import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  { path: 'modal', component: ModalComponent},
  { path: 'lesson', component: LessonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ModalComponent, LessonComponent]
