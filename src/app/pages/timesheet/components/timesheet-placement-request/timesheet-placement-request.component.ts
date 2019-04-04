import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheet-placement-request',
  templateUrl: './timesheet-placement-request.component.html',
  styleUrls: ['./timesheet-placement-request.component.scss']
})
export class TimesheetPlacementRequestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //go to placement request page
  allPlacementRequest() {}

  // go to timesheet-view page
  timesheets(){
    this.router.navigateByUrl('/timesheets/1');
  }

  vacancies(){}

}
