import { Component, OnInit, Sanitizer, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embedder',
  templateUrl: './video-embedder.component.html',
  styleUrls: ['./video-embedder.component.sass']
})
export class VideoEmbedderComponent implements OnInit, OnChanges{

  @Input() vidoeUrl: any;
  safeUrl: SafeResourceUrl;

  constructor(private sanitzer:DomSanitizer) {
    this.safeUrl =sanitzer.bypassSecurityTrustResourceUrl(this.vidoeUrl);

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.sanitizeUrl();
  }

  sanitizeUrl(){
    this.safeUrl = this.sanitzer.bypassSecurityTrustResourceUrl(this.vidoeUrl.demoVideo);
  }

}
