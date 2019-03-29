import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomelayoutComponent } from 'src/app/shared/components/homelayout/homelayout.component';

const routes: Routes = [{
  path: '',
  component: HomelayoutComponent,
  children: [{
    path: '',
    component: CalendarComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CalendarRoutingModule { }
