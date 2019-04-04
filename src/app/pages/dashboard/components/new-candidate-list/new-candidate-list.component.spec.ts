import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCandidateListComponent } from './new-candidate-list.component';

describe('NewCandidateListComponent', () => {
  let component: NewCandidateListComponent;
  let fixture: ComponentFixture<NewCandidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCandidateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
