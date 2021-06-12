import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'https://JackLinh.art/';

  constructor(private httpClient: HttpClient) { }

  getProjects(){
    return this.httpClient.get(`${this.baseUrl}/databaseconnect.php`);
  }
}
