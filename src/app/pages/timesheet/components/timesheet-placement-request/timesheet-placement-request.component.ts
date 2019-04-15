import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/providers/modal.service';
import { TimesheetDetailComponent } from '../timesheet-detail/timesheet-detail.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-timesheet-placement-request',
  templateUrl: './timesheet-placement-request.component.html',
  styleUrls: ['./timesheet-placement-request.component.scss']
})
export class TimesheetPlacementRequestComponent implements OnInit {
  p: number = 1;
  requestList = [
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'},
    {'client':'Second Cup Cafe','recieved':'3/1/2019','staff':'15 staff','due':'14 sep 2019'}
  ]
  constructor(private router:Router,private modalService: ModalService) { }

  ngOnInit() {
  }

  //go to placement request page
  allPlacementRequest() {}

  // go to timesheet-view page
  timesheets(){
  }

  vacancies(){}

  editRequest(){
    this.router.navigateByUrl('/timesheets/1');
  }

  openModal() {
    const modalRef = this.modalService.openModal(TimesheetDetailComponent, "Create New Timesheet",'');
    modalRef.componentInstance.name = 'Hardik';
  }

  public backToList()
  {
    
  }

  deleteRequest() {
    const modalRef = this.modalService.openModal(DeleteModalComponent, "Delete Placement Request",'Are you sure you want to delete request?');
    modalRef.componentInstance.name = 'Hardik';
  }

}
