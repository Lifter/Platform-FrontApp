import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationGridComponent } from '../app/application-grid/application-grid.component';
import { ApplicationDetailComponent } from '../app/application-detail/application-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: 'applications', component: ApplicationGridComponent },
  { path: 'applications/:id', component: ApplicationDetailComponent },
  { path: '**', redirectTo: '/applications' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
