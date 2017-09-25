import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
//  ------------------ services
import { ProjectService } from './services/project.service';
// ------------ routing ---
import { AppRoutingModule, routingComponents } from './app.router';
import { AddprojectComponent } from './addproject/addproject.component';

import {Location, LocationStrategy, HashLocationStrategy } from '@angular/common'; // hash url provider

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectdetailsComponent,
    routingComponents,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProjectService,
  { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
