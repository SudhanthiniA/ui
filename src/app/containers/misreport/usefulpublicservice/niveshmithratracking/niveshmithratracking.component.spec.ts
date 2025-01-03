import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveshmithratrackingComponent } from './niveshmithratracking.component';

describe('NiveshmithratrackingComponent', () => {
  let component: NiveshmithratrackingComponent;
  let fixture: ComponentFixture<NiveshmithratrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveshmithratrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveshmithratrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
