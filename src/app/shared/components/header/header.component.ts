import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNotification:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  notification() {
    this.isNotification = !this.isNotification;
  }

}
