import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementRequestComponent } from './placement-request.component';

describe('PlacementRequestComponent', () => {
  let component: PlacementRequestComponent;
  let fixture: ComponentFixture<PlacementRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
