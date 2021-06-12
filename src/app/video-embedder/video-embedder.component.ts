import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embedder',
  templateUrl: './video-embedder.component.html',
  styleUrls: ['./video-embedder.component.sass']
})
export class VideoEmbedderComponent implements OnInit {

  constructor(private sanitzer:DomSanitizer) { }

  ngOnInit(): void {
  }

}
