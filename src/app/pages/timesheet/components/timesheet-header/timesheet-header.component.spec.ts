import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetHeaderComponent } from './timesheet-header.component';

describe('TimesheetHeaderComponent', () => {
  let component: TimesheetHeaderComponent;
  let fixture: ComponentFixture<TimesheetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
