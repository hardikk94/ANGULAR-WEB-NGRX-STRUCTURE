import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCountSummaryComponent } from './dashboard-count-summary.component';

describe('DashboardCountSummaryComponent', () => {
  let component: DashboardCountSummaryComponent;
  let fixture: ComponentFixture<DashboardCountSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCountSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
