import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio-spa';

  constructor(){}
}
