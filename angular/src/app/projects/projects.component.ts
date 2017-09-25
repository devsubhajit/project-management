import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Projects } from '../Projects';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  socket;
  projects = [Projects];
  constructor(private projectService: ProjectService) { 
    this.projectService.getProjects()
    .subscribe(Projects=>{
      // console.log(Projects);
      this.projects = Projects;
    });
    this.socket = io();
  }

  ngOnInit() {
  }

}
