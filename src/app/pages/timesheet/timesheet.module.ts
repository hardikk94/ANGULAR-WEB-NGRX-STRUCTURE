import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetComponent } from './components/timesheet/timesheet.component'
import { TimesheetRoutingModule } from './timesheet-routing.module';
@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    SharedModule,
    TimesheetRoutingModule
  ]
})
export class TimesheetModule { }
