import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormallayoutComponent } from './normallayout.component';

describe('NormallayoutComponent', () => {
  let component: NormallayoutComponent;
  let fixture: ComponentFixture<NormallayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormallayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormallayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
