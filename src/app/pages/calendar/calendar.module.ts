import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CalendarRoutingModule,
    SharedModule
  ]
})
export class CalendarModule { }
