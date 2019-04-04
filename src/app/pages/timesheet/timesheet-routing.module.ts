import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { TimesheetListComponent } from './components/timesheet-list/timesheet-list.component';
import { HomelayoutComponent } from 'src/app/shared/components/homelayout/homelayout.component';
import {TimesheetPlacementRequestComponent} from './components/timesheet-placement-request/timesheet-placement-request.component';
import { TimesheetViewComponent } from './components/timesheet-view/timesheet-view.component';

const routes: Routes = [{
  path: '',
  component: HomelayoutComponent,
  children: [{
    path: '',
    component: TimesheetListComponent
  },
  {
    path: 'placement',
    component: TimesheetPlacementRequestComponent
  },
  {
    path: ':id',
    component: TimesheetViewComponent
  },
]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TimesheetRoutingModule { }
