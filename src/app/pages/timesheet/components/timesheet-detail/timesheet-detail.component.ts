import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimesheetState } from '../../store/timesheet.state';
import { TimesheetStoreService} from '../../store/timesheet.store';
import { LoadingState } from 'src/app/store/states/loading.state';

@Component({
  selector: 'app-timesheet-detail',
  templateUrl: './timesheet-detail.component.html',
  styleUrls: ['./timesheet-detail.component.scss']
})
export class TimesheetDetailComponent implements OnInit {
  @Input() public title;
  startDate:any
  endDate:any
  model;
  public createtimesheetForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, public formBuilder: FormBuilder,public timesheetStoreService:TimesheetStoreService) { }
  ngOnInit() {
    this.createtimesheetForm = this.formBuilder.group({
      clientname: ["", [Validators.required]],
      reportto: ["", [Validators.required]],
      description: ["", [Validators.required]],
      eventaddress: ["", [Validators.required]],
      eventname: ["", [Validators.required]],
      worktype: ["", [Validators.required]]
    });
  }

  saveTimesheet() {
    let timesheetData = {};
    let loader: LoadingState ={
      isLoading:true,
      message:"Please Wait, Adding Timesheet..."
    }
    timesheetData = this.createtimesheetForm.controls.value;
    this.timesheetStoreService.dispatchLoader(loader);
    this.timesheetStoreService.dispatchTimesheetAction(timesheetData);
  }

}
