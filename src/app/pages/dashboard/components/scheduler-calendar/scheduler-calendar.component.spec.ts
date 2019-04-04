import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerCalendarComponent } from './scheduler-calendar.component';

describe('SchedulerCalendarComponent', () => {
  let component: SchedulerCalendarComponent;
  let fixture: ComponentFixture<SchedulerCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
