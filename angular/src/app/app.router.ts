import { NgModule  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { AddprojectComponent } from './addproject/addproject.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   { path: 'home', component: ProjectsComponent },
   { path: 'details/:id', component: ProjectdetailsComponent },
   { path: 'addproject', component: AddprojectComponent}
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 
 export const routingComponents = [ProjectsComponent, ProjectdetailsComponent];