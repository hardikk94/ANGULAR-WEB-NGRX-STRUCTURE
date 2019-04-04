import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.scss']
})
export class TimesheetViewComponent implements OnInit {
  public startDate:any;
  public endDate:any;
  
  constructor() { }

  ngOnInit() {
  }

}
