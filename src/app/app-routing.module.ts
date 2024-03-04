import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNursesComponent } from './components/all-nurses/all-nurses.component';
import { NurseDetailsComponent } from './components/nurse-details/nurse-details.component';

const routes: Routes = [
  {
    path: 'all-nurse',
    component: AllNursesComponent,
  },
  {
    path: '',
    component: AllNursesComponent,
    pathMatch: 'full',
  },
  {
    path: 'nurse-details',
    component: NurseDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
