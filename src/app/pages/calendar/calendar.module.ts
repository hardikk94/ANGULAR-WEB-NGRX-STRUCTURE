import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';

// calendar module
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CalendarRoutingModule,
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class CalendarPageModule { }
