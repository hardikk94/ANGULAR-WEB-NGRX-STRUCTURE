import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetPlacementRequestComponent } from './timesheet-placement-request.component';

describe('TimesheetPlacementRequestComponent', () => {
  let component: TimesheetPlacementRequestComponent;
  let fixture: ComponentFixture<TimesheetPlacementRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetPlacementRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetPlacementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
