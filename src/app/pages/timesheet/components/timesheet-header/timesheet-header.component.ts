import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../core/providers/modal.service';
import { TimesheetDetailComponent } from '../timesheet-detail/timesheet-detail.component';
@Component({
  selector: 'app-timesheet-header',
  templateUrl: './timesheet-header.component.html',
  styleUrls: ['./timesheet-header.component.scss']
})
export class TimesheetHeaderComponent implements OnInit {

  constructor(private modalService: ModalService,) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.openModal(TimesheetDetailComponent, "Create New Timesheet");
    modalRef.componentInstance.name = 'Hardik';
  }

  public backToList()
  {
    
  }

}
