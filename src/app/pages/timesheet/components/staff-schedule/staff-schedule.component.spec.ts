import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffScheduleComponent } from './staff-schedule.component';

describe('StaffScheduleComponent', () => {
  let component: StaffScheduleComponent;
  let fixture: ComponentFixture<StaffScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
