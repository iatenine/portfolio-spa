import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  projectArray: Project[] = [];
  error = '';
  success = '';

  constructor(private projectService:ProjectService, 
    private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projectArray = Object.values(data);
        this.success = `data transfer successful ${Object.keys(data)}`;
      },
      (err) => {
        this.error = err;
          console.error("database retrieval failed: ", err);
      }
    )
  }

}
