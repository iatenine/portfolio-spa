import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    VideoEmbedderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
