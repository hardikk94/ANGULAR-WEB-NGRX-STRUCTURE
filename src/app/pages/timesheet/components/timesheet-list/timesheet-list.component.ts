import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalService } from '../../../../core/providers/modal.service';
import { TimesheetDetailComponent } from '../timesheet-detail/timesheet-detail.component';
import { HttpClient } from '@angular/common/http';
import { SchedulerComponent } from './../../../../shared/components/scheduler/scheduler.component'
import { Scheduler, DateHelper, DateField } from 'bryntum-scheduler/scheduler.umd.js';
declare var window: any;
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.scss']
})
export class TimesheetListComponent implements AfterViewInit {
  @ViewChild(SchedulerComponent) scheduler: SchedulerComponent;
  @ViewChild('datePickerContainer') datePickerContainer: ElementRef;
  rowHeight = 70;
  selectedEvent = '';
  events = [];
  resources = [];
  timeRanges: any = true;
  barMargin = 10;
  startDate = new Date(2018, 1, 7, 8);
  endDate = new Date(2018, 1, 7, 22);


  columns = [
    {
      showEventCount: true,
      editor: false,
      text: '',
      field: 'name',
      width: 200,
      flex: 1,
    }
  ]

  eventEdit = {
    // Add extra widgets to the event editor
    extraWidgets: [
      {
        type: 'text',
        name: 'desc',
        label: 'Description',
        index: 1
      }
    ]
  };

  eventRenderer = ({ eventRecord }) => {
    return `
        <div class="info">
            <div class="name">${eventRecord.name}</div>
            <div class="desc">${eventRecord.desc}</div>
        </div>
      `;
  };
  constructor(private modalService: ModalService,
    private http: HttpClient
  ) {
    this.getData();
  }

  ngAfterViewInit() {
    // window.scheduler = this.scheduler.schedulerEngine;
  }

  openModal() {
    const modalRef = this.modalService.openModal(TimesheetDetailComponent, "Create New Timesheet");
    modalRef.componentInstance.name = 'Hardik';
  }
  getData() {
    this.resources = [
      { "id": "0", "name": "David James", "role": "Developer" },
      { "id": "1", "name": "Mari-anne-lee", "role": "Sales" },
      { "id": "2", "name": "patritia Wood", "role": "Sales" },
      { "id": "3", "name": "Stephi Hall", "role": "CEO" },
      { "id": "4", "name": "Sheril Dyaz", "role": "CTO" },
      { "id": "5", "name": "Luke Hudson", "role": "Developer" },
      { "id": "6", "name": "John Doe", "role": "Developer" },
      { "id": "7", "name": "Amit tarrence", "role": "Sales" },
      { "id": "8", "name": "Kate", "role": "Developer" },
      { "id": "9", "name": "Mark", "role": "Developer" },
      { "id": "10", "name": "Emilia", "role": "Developer" }
    ];
    this.events = [
      {
        "id": 1,
        "resourceId": "0",
        "name": "Waiting/Bar staff",
        "desc": "Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Meeting",
        "eventColor": "blue",
        "iconCls": "b-fa b-fa-calendar"
      },
      {
        "id": 2,
        "resourceId": "1",
        "name": "Waiting/Bar staff",
        "desc": "Permanent/Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Meeting",
        "eventColor": "blue",
        "iconCls": "b-fa b-fa-calendar"
      },
      {
        "id": 3,
        "resourceId": "2",
        "name": "Host/Hostress",
        "desc": "Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Meeting",
        "eventColor": "blue",
        "iconCls": "b-fa b-fa-calendar"
      },
      {
        "id": 4,
        "resourceId": "3",
        "name": "Waiter/Waitress",
        "desc": "Permanent/Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Meeting",
        "eventColor": "blue",
        "iconCls": "b-fa b-fa-calendar"
      },
      {
        "id": 5,
        "resourceId": "4",
        "name": "Waiter/Waitress",
        "desc": "Permanent/Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Appointment",
        "iconCls": "b-fa b-fa-clock"
      },
      {
        "id": 6,
        "resourceId": "5",
        "name": "Waiter/Waitress",
        "desc": "Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Appointment",
        "iconCls": "b-fa b-fa-golf-ball"
      },
      {
        "id": 7,
        "resourceId": "6",
        "name": "Waiter/Waitress",
        "desc": "Temporary",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "location": "Home office",
        "eventColor": "red",
        "eventType": "Appointment",
        "iconCls": "b-fa b-fa-exclamation-circle"
      },
      {
        "id": 8,
        "resourceId": "7",
        "name": "Waiter/Waitress",
        "desc": "Temporary/Permanent",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Meeting",
        "eventColor": "blue",
        "iconCls": "b-fa b-fa-calendar"
      },
      {
        "id": 9,
        "resourceId": "8",
        "name": "Host/Hostress",
        "desc": "Permanent",
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 19:00",
        "eventType": "Appointment",
        "iconCls": "b-fa b-fa-beer",
        "eventColor": "orange"
      },
      {
        "id": 10,
        "resourceId": "9",
        "name": "Overtime",
        "desc": "Deadline approaching",
        "startDate": "2018-02-07 17:00",
        "endDate": "2018-02-07 20:00",
        "eventType": "Meeting",
        "iconCls": "b-fa b-fa-calendar",
        "eventColor": "blue"
      },
      {
        "id": 11,
        "resourceId": "10",
        "name": "Scrum",
        "desc": "Team A",
        "startDate": "2018-02-07 9:00",
        "endDate": "2018-02-07 11:00",
        "eventType": "Appointment",
        "iconCls": "b-fa b-fa-calendar",
        "eventColor": "blue"
      }
    ]

    this.timeRanges = [
      {
        "startDate": "2018-02-07 11:00",
        "endDate": "2018-02-07 12:00",
        "cls": "striped"
      }
    ];

  }


  // Uncomment the code in this method to start "logging" events
  onSchedulerEvents(event: any) {
    //   // catch scheduler events here, for example when dropping an event:
    //   if (event.type === 'eventdrop') {
    //     console.log('Drop: ', event);
    //   }
    //
    //   // or when editing one:
    //   if (event.type === 'eventschange') {
    //     console.log('EventStore: ', event);
    //   }
    //
    //   // or when editing a resource:
    //   if (event.type === 'resourceschange') {
    //     console.log('ResourceStore: ', event);
    //   }
  }
  // add event button click handled here
  onAddEventClick() {
    this.scheduler.addEvent();
  }

  // remove event button click handled here
  onRemoveEventClick() {
    this.scheduler.removeEvent();
  }

  // change scheduler start/end dates
  onDatePickerChange({ value }) {
    this.scheduler.schedulerEngine.setTimeSpan(DateHelper.add(value, 8, 'hour'), DateHelper.add(value, 18, 'hour'));
  }

}
