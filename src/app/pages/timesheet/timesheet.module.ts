import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetListComponent } from './components/timesheet-list/timesheet-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetEffects } from './store/timesheet.effects';
import { EffectsModule } from '@ngrx/effects';
import { TimesheetReducer } from './store/timesheet.reducer';
import { StoreModule } from '@ngrx/store';
import {NgxPaginationModule} from 'ngx-pagination';

import { TimesheetService } from './store/timesheet.service';
import { TimesheetPlacementRequestComponent } from './components/timesheet-placement-request/timesheet-placement-request.component';
import { TimesheetViewComponent } from './components/timesheet-view/timesheet-view.component';
import { StaffScheduleComponent } from './components/staff-schedule/staff-schedule.component';

@NgModule({
  declarations: [
    TimesheetListComponent,
    TimesheetPlacementRequestComponent,
    TimesheetViewComponent,
    StaffScheduleComponent
  ],
  imports: [
    SharedModule,
    TimesheetRoutingModule,
    NgbModule,
    EffectsModule.forFeature([TimesheetEffects]),
    StoreModule.forFeature('timesheetInfo', TimesheetReducer),
    NgxPaginationModule
  ],
  providers: [TimesheetService]
})
export class TimesheetModule { }
