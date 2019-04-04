import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './../../shared/shared.module'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCountSummaryComponent } from './components/dashboard-count-summary/dashboard-count-summary.component';
import { SchedulerCalendarComponent } from './components/scheduler-calendar/scheduler-calendar.component';
import { PlacementRequestComponent } from './components/placement-request/placement-request.component';
import { NewCandidateListComponent } from './components/new-candidate-list/new-candidate-list.component';
import { QuickDetailsComponent } from './components/quick-details/quick-details.component'
@NgModule({
  declarations: [DashboardComponent,
     DashboardCountSummaryComponent,
     SchedulerCalendarComponent,
     PlacementRequestComponent,
     NewCandidateListComponent,
     QuickDetailsComponent
    ],
  imports: [    
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
