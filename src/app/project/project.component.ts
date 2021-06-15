import { Component, OnInit} from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

  projectArray: Project[] = [];
  error = '';
  success = '';

  constructor(private projectService:ProjectService) { 
    }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projectArray = Object.values(data);
        this.success = `data transfer successful ${Object.keys(data)}`;
        // for (let x = 0; x <= Object.keys.length; x++){
        //   console.log(this.projectArray[x])
        //   console.log('demo video: ', this.projectArray[x].demoVideo)
        //   let str:any = this.projectArray[x].demoVideo;
        //   this.projectArray[x].safeUrl= this.sanitizer.bypassSecurityTrustResourceUrl(str);
        //   console.log(this.projectArray[x].safeUrl)
        // }
      },
      (err) => {
        this.error = err;
          console.error("database retrieval failed: ", err);
      }
    )
  }

}
