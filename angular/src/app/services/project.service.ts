import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { contentHeaders } from '../headers';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { 
    console.log("Project service initialized");
  }

  getProjects(){
    return this.http.get("http://localhost:3000/api/projects")
    .map(res => res.json());
  }
// get single project
getSingleProject(_id:string){
  return this.http.get("http://localhost:3000/api/project/"+_id, { headers: contentHeaders })
  .map(res => res.json());
}

// --------- add new project
  addProjects(newProject){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/project', JSON.stringify(newProject),{headers:headers})
    .map(res => res.json());
  }
// ---------- add comment 
addComment(newComment, _id:string){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put("http://localhost:3000/api/project/"+_id, JSON.stringify(newComment),{headers:headers})
  .map(res => res.json());
}  

}
