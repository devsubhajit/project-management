import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Projects } from '../Projects';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  projects = [Projects];
  projectname: string;
  estimation: number;
  name: string;
  names: any = [];

  // teamMemeber:any = {
  //   name:'',
  //   comments:[{
  //       message:'',
  //       duration:0,
  //       date:''
  //   }
  //   ]
  // }
  team: any = [];


  /*
  {
    "_id": {
        "$oid": "59bbaf77f36d2832fb04344a"
    },
    "projectName": "abc",
    "estimation": 100,
    "isDome": false,
    "team": [
        {
            "name": "Gopal",
            "comments": [
                {
                    "message": "work dummy message",
                    "duration": 2,
                    "date": "15/09/2017"
                }
            ]
        },
        {
            "name": "Tapas",
            "comments": [
                {
                    "message": "work dummy message",
                    "duration": 3,
                    "date": "15/09/2017"
                }
            ]
        }
    ]
}
  
  */

  constructor(private projectService: ProjectService) { }

  addProject(event) {
    event.preventDefault();
    this.names = this.name.split(',');
    console.log('this.names ', this.names);
    for (var i = 0; i < this.names.length; i++) {
      // itemIds.push(data[0].item);
      this.team.push({
        name: this.names[i]
        // comments: [{
        //   message: '',
        //   duration: 0,
        //   date: ''
        // }
        // ]
      })
    }
    var newProject = {
      projectName: this.projectname,
      estimation: this.estimation,
      isDome: false,
      team: this.team
    }

    this.projectService.addProjects(newProject)
      .subscribe(project => {
        this.projects.push(project);
        //this.projectname = '';
      });
  }

  ngOnInit() {
  }

}
