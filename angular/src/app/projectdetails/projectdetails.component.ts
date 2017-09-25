import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Projects } from '../Projects';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import * as io from "socket.io-client";

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit, AfterViewInit {
  socket;
  project$;
  projectDetails: any = {
    projectName: '',
    estimation: 100,
    team: [{
      name: '',
    }]
  }
  message: string;
  membername: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {
    this.project$ = this.route.snapshot.paramMap.get('id');
    console.log('this.project$ ', this.project$);
    this.projectService.getSingleProject(this.project$)
      .subscribe(Project => {
        console.log(Project);
        this.projectDetails = Project;
        console.log(this.projectDetails);
      });
    this.socket = io();
    this.socket.on("newComments", ()=>{
      this.project$ = this.route.snapshot.paramMap.get('id');
      console.log('socket on', this.project$);
      this.projectService.getSingleProject(this.project$)
      .subscribe(Project => {
        console.log(' Project ', Project);
        this.projectDetails = Project;
        console.log(this.projectDetails);
      });
    });
  }

  // add comment
  addComment() {
    console.log('added');
    var newComment = {
      message: this.message,
      duration: 2,
      date: '2017/09/18',
      name: this.membername
    };
    var _id = this.project$;
    this.projectService.addComment(newComment, _id).subscribe(data => {
      newComment;
    });
    this.socket.emit('addComment', newComment);
    
  }


  ngOnInit() {
    

      
  }

  ngAfterViewInit() {

  }

}
