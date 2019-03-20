import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  @Input() public imageURL:string
  @Input() public alternateText:string
  constructor() { }

  ngOnInit() {
  }

}
