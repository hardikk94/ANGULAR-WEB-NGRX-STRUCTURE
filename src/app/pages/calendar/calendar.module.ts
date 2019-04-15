import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';

// calendar module
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarEffects } from './store/calendar.effects';
import { CalendarReducer } from './store/calendar.reducer';
import { CalendarService } from './store/calendar.service';

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
    }),
    EffectsModule.forFeature([CalendarEffects]),
    StoreModule.forFeature('calendarInfo', CalendarReducer)
  ],
  providers:[CalendarService]
})
export class CalendarPageModule { }
