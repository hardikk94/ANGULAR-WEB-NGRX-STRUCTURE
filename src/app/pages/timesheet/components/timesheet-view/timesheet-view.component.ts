import { Component, OnInit } from '@angular/core';
import { TimesheetDetailComponent } from '../timesheet-detail/timesheet-detail.component';
import { ModalService } from 'src/app/core/providers/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.scss']
})
export class TimesheetViewComponent implements OnInit {
  public startDate:any;
  public endDate:any;
  public isStaffSchedule:boolean = true;
  
  constructor(private modalService: ModalService,private router:Router) { }

  ngOnInit() {
  }

  editDetails() {
    const modalRef = this.modalService.openModal(TimesheetDetailComponent, "Edit Timesheet",'');
    modalRef.componentInstance.name = 'Hardik';
  }

  staffSchedule() {
    this.isStaffSchedule = false;
  }

  timesheetView() {
    this.isStaffSchedule = true;
  }

  openModal() {
    const modalRef = this.modalService.openModal(TimesheetDetailComponent, "Create New Timesheet",'');
    modalRef.componentInstance.name = 'Hardik';
  }

  public backToList()
  {
    this.router.navigateByUrl('/timesheets/placement');
  }

}
