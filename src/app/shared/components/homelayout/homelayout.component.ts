import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.scss']
})
export class HomelayoutComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  public toggleMenu() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  }

  public toggleButton()
  {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  }
}
