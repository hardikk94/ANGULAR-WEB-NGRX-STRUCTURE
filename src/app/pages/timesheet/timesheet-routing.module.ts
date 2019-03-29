import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { HomelayoutComponent } from 'src/app/shared/components/homelayout/homelayout.component';

const routes: Routes = [{
  path: '',
  component: HomelayoutComponent,
  children: [{
    path: '',
    component: TimesheetComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TimesheetRoutingModule { }
